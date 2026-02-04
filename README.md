# The Watcher

An interactive horror fiction engine that knows things about you.

## What is this?

A single-page psychological horror experience that generates personalized creepypasta stories. It's designed to feel invasive, personal, and genuinely unsettling—not through jump scares, but through atmosphere and implication.

## Features

- **Time-aware horror**: Different experience at 3 AM vs noon
- **Personalized dread**: Uses your name throughout the story
- **Branching narrative**: Multiple story paths and endings
- **Meta-horror elements**: The page itself behaves wrong
- **Procedural elements**: Random names/places make each playthrough unique
- **Subtle wrongness**: A watching eye, static, hidden messages

## How to experience it

**Local:**
```bash
cd /Users/ape/clawd/projects/creepy
open index.html
# or: python3 -m http.server 8000
```

**Best experienced:**
- Late at night
- Alone
- With headphones (even though there's no audio—the silence is part of it)

## Technical details

Self-contained HTML/CSS/JS. No dependencies. No build step. Just horror.

## Story structure

The engine generates horror around a victim moving into a house in a small town. Your choices determine how the entity manifests and which ending you receive. There are 11 possible endings:

- `INCORPORATED` - Absorbed by the basement darkness
- `BEFRIENDED` - Became friends with the presence
- `MULTIPLIED` - Joined infinite copies of yourself
- `REPLACED` - Something took your place
- `COLLECTED` - Drawn into a painting
- `TRANSPOSED` - Swapped with your reflection
- `ERASED` - Removed from existence
- `INTEGRATED` - Became part of the wound
- `CONVERTED` - Became a recruiter for the house

## Easter eggs

- Konami code reveals a hidden message
- Check the browser console
- The redacted text is interactive
- The eye follows your mouse (if you've angered it enough)

---

*"I hope we can be friends too."*
