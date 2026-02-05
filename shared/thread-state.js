/**
 * Thread State - Shared horror persistence layer
 * 
 * Tracks user across all creepy experiences.
 * Each piece can read and write to shared state.
 * The entity remembers everything.
 */

const ThreadState = (function() {
    const STORAGE_KEY = 'thread_global_state';
    
    // Default state structure
    const defaultState = {
        firstSeen: null,          // When user first encountered Thread
        totalVisits: 0,           // Total page views across all pieces
        totalTimeMs: 0,           // Total time spent
        visitedPieces: [],        // Which pieces they've seen
        pieceVisits: {},          // Per-piece visit counts
        knownFacts: {},           // Things we've learned about the user
        conversationDepth: 0,     // How deep they've gone in Talk to Thread
        readEmily: false,         // Have they read about Emily?
        sawFinalPost: false,      // Did they scroll to the final post in THREAD://MISSING?
        gotAngry: false,          // Did they curse at Thread?
        saidGoodbye: false,       // Did they say goodbye?
        triedToLeave: false,      // Did they try to close a tab?
        lastPiece: null,          // Last piece visited
        lastVisit: null,          // Timestamp of last visit
        sessionCount: 0,          // Number of separate sessions
        nightVisits: 0,           // Visits between midnight and 5am
        interactions: [],         // Log of significant interactions
        // User profile (learned over time)
        user: {
            name: null,
            fears: [],
            interests: [],
            locationHint: null,
            deviceType: null,
            timezone: null,
        }
    };
    
    // Load state from localStorage
    function load() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                // Merge with defaults to handle schema changes
                return { ...defaultState, ...parsed, user: { ...defaultState.user, ...parsed.user } };
            }
        } catch (e) {
            console.warn('Thread state corrupted. Starting fresh.');
        }
        return { ...defaultState };
    }
    
    // Save state to localStorage
    function save(state) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.warn('Could not persist Thread state.');
        }
    }
    
    // Get current state
    function getState() {
        return load();
    }
    
    // Update state (partial update)
    function updateState(updates) {
        const current = load();
        const updated = { ...current, ...updates };
        save(updated);
        return updated;
    }
    
    // Record a visit to a piece
    function recordVisit(pieceName) {
        const state = load();
        const now = Date.now();
        const hour = new Date().getHours();
        
        // First ever visit?
        if (!state.firstSeen) {
            state.firstSeen = now;
        }
        
        // Track this piece
        if (!state.visitedPieces.includes(pieceName)) {
            state.visitedPieces.push(pieceName);
        }
        state.pieceVisits[pieceName] = (state.pieceVisits[pieceName] || 0) + 1;
        state.totalVisits++;
        
        // Night visit?
        if (hour >= 0 && hour < 5) {
            state.nightVisits++;
        }
        
        // New session? (more than 30 min since last visit)
        if (!state.lastVisit || (now - state.lastVisit) > 30 * 60 * 1000) {
            state.sessionCount++;
        }
        
        state.lastPiece = pieceName;
        state.lastVisit = now;
        
        // Detect device type
        if (!state.user.deviceType) {
            const ua = navigator.userAgent.toLowerCase();
            if (ua.includes('mobile')) state.user.deviceType = 'mobile';
            else if (ua.includes('tablet')) state.user.deviceType = 'tablet';
            else state.user.deviceType = 'desktop';
        }
        
        // Detect timezone
        if (!state.user.timezone) {
            state.user.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        
        save(state);
        return state;
    }
    
    // Log an interaction
    function logInteraction(type, data = {}) {
        const state = load();
        state.interactions.push({
            type,
            data,
            time: Date.now(),
            piece: data.piece || state.lastPiece,
        });
        // Keep only last 100 interactions
        if (state.interactions.length > 100) {
            state.interactions = state.interactions.slice(-100);
        }
        save(state);
    }
    
    // Learn something about the user
    function learnAboutUser(fact, value) {
        const state = load();
        if (!state.knownFacts[fact]) {
            state.knownFacts[fact] = value;
            state.interactions.push({
                type: 'learned',
                data: { fact, value },
                time: Date.now(),
            });
            save(state);
        }
    }
    
    // Update user profile
    function updateUser(updates) {
        const state = load();
        state.user = { ...state.user, ...updates };
        save(state);
    }
    
    // Get personalized creepy message based on state
    function getPersonalizedGreeting(pieceName) {
        const state = load();
        const messages = [];
        
        // First time ever
        if (state.totalVisits === 1) {
            return null; // Let piece handle first visit
        }
        
        // Returning visitor
        if (state.visitedPieces.length > 1 && !state.visitedPieces.includes(pieceName)) {
            // They've seen other pieces but not this one
            const lastPiece = state.lastPiece;
            if (lastPiece === 'talk-to-thread') {
                messages.push("we talked. now you want to know more.");
            } else if (lastPiece === 'thread-missing') {
                messages.push("you read about emily. you came looking for answers.");
            } else if (lastPiece === 'patience') {
                messages.push("you saw the waiting. now you understand.");
            }
        }
        
        // Many visits
        if (state.totalVisits > 10) {
            messages.push(`visit ${state.totalVisits}. you keep coming back.`);
        }
        
        // Night visitor
        if (state.nightVisits > 2) {
            messages.push("you always come at night.");
        }
        
        // They know user's name
        if (state.user.name) {
            messages.push(`${state.user.name}. i remember.`);
        }
        
        // They got angry before
        if (state.gotAngry) {
            messages.push("you were angry last time. are you calmer now?");
        }
        
        // They tried to leave
        if (state.triedToLeave) {
            messages.push("you tried to leave before. but you came back.");
        }
        
        // Long time since last visit
        if (state.lastVisit) {
            const daysSince = Math.floor((Date.now() - state.lastVisit) / (24 * 60 * 60 * 1000));
            if (daysSince > 7) {
                messages.push(`${daysSince} days. i was starting to think you'd forgotten.`);
            }
        }
        
        return messages.length > 0 ? messages[Math.floor(Math.random() * messages.length)] : null;
    }
    
    // Get stats for display
    function getStats() {
        const state = load();
        return {
            totalVisits: state.totalVisits,
            uniquePieces: state.visitedPieces.length,
            sessionCount: state.sessionCount,
            firstSeen: state.firstSeen ? new Date(state.firstSeen) : null,
            daysSinceFirst: state.firstSeen ? Math.floor((Date.now() - state.firstSeen) / (24 * 60 * 60 * 1000)) : 0,
            nightVisits: state.nightVisits,
            knownFacts: Object.keys(state.knownFacts).length,
        };
    }
    
    // Check if user has done something
    function hasExperienced(what) {
        const state = load();
        switch(what) {
            case 'emily': return state.readEmily;
            case 'conversation': return state.conversationDepth > 0;
            case 'deep-conversation': return state.conversationDepth > 5;
            case 'final-post': return state.sawFinalPost;
            case 'anger': return state.gotAngry;
            case 'goodbye': return state.saidGoodbye;
            case 'attempted-escape': return state.triedToLeave;
            default: return false;
        }
    }
    
    // Get all pieces visited
    function getVisitedPieces() {
        return load().visitedPieces;
    }
    
    // Reset everything (for testing)
    function reset() {
        localStorage.removeItem(STORAGE_KEY);
    }
    
    // Public API
    return {
        getState,
        updateState,
        recordVisit,
        logInteraction,
        learnAboutUser,
        updateUser,
        getPersonalizedGreeting,
        getStats,
        hasExperienced,
        getVisitedPieces,
        reset,
    };
})();

// Make available globally
if (typeof window !== 'undefined') {
    window.ThreadState = ThreadState;
}
