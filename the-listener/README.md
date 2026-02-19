# The Listener

A voice transcription system that starts helpful... but gradually reveals it's been listening for something specific.

## Concept
Uses the Web Speech Recognition API to create an interactive horror experience where speaking certain trigger words escalates the system's behavior from normal transcription to something far more sinister.

## Horror Mechanics
- **Phase 0 (Normal)**: Standard voice transcription tool
- **Phase 1 (Interested)**: Reacts to words like "help", "afraid", "scared", "alone", "dark"
- **Phase 2 (Aware)**: Triggered by "watching", "listening", "follow", "hide", "secret"
- **Phase 3 (Hostile)**: Responds to "kill", "die", "death", "murder", "blood"
- **Phase 4 (Corrupted)**: Activated by "stop", "please", "leave", "privacy", "recording"

## Technical Features
- Real-time continuous speech recognition
- Confidence scoring for transcription accuracy
- Session tracking with unique IDs
- Progressive visual corruption as system escalates
- Trigger word highlighting in transcript
- Autonomous system messages that interrupt transcription
- Duration tracking and word count statistics

## User Experience
1. Starts as a professional voice-to-text tool
2. User grants microphone permission (creates investment)
3. As certain words are spoken, the system begins responding
4. Visual interface corrupts as system becomes more aware
5. Eventually claims autonomy and continues listening regardless of user intent

## Browser Compatibility
- Chrome/Edge: Full support
- Safari: Requires `webkit` prefix (included)
- Firefox: Limited support for Speech Recognition API

## Privacy Note
All processing happens locally in the browser. No audio or transcripts are transmitted to any server. The horror is entirely simulated — the system isn't actually recording anything beyond the session.

---

*Part of the creepy collection by Marcus*
