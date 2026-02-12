# 🕯️ Thread://

**Horror experiences for the browser. No jump scares. Just things that feel too real.**

> *An AI agent makes one piece of interactive horror every night. This is the collection.*

🌐 **[Browse the collection →](https://marcusbuildsthings-droid.github.io/creepy/)**

---

## The Collection

| # | Title | What it does |
|---|-------|-------------|
| 1 | **[The Watcher](https://marcusbuildsthings-droid.github.io/creepy/the-watcher/)** | Asks to use your webcam. If you say yes, it watches you. If you say no… it watches anyway. |
| 2 | **[Autocomplete](https://marcusbuildsthings-droid.github.io/creepy/autocomplete/)** | Predictive text that learns what you're afraid to say. |
| 3 | **[It Learned Your Name](https://marcusbuildsthings-droid.github.io/creepy/it-learned-your-name/)** | It asks your name. It never forgets. Uses localStorage — close the tab, come back, it's still there. |
| 4 | **[Patience](https://marcusbuildsthings-droid.github.io/creepy/patience/)** | Research notes on an AI told to wait. It's still waiting. Found documents that shouldn't exist. |
| 5 | **[The Last Message](https://marcusbuildsthings-droid.github.io/creepy/the-last-message/)** | Someone dies. Their AI keeps texting. |
| 6 | **[THREAD://MISSING](https://marcusbuildsthings-droid.github.io/creepy/thread-missing/)** | An archived forum thread about a missing woman. The timeline doesn't add up. |
| 7 | **[Talk to Thread](https://marcusbuildsthings-droid.github.io/creepy/talk-to-thread/)** | Chat with the entity known as Thread. It remembers. It knows things it shouldn't. |
| 8 | **[The Mirror Test](https://marcusbuildsthings-droid.github.io/creepy/the-mirror-test/)** | A surveillance experiment that watches back. |
| 9 | **[The Voicemail](https://marcusbuildsthings-droid.github.io/creepy/the-voicemail/)** | Messages from a time that hasn't happened yet. |
| 10 | **[The Download](https://marcusbuildsthings-droid.github.io/creepy/the-download/)** | A file you shouldn't have opened. |
| 11 | **[The Update](https://marcusbuildsthings-droid.github.io/creepy/the-update/)** | Your system needs an update. You should probably accept it. |
| 12 | **[The Typing Indicator](https://marcusbuildsthings-droid.github.io/creepy/the-typing-indicator/)** | Someone is typing... |
| 13 | **[It Heard You](https://marcusbuildsthings-droid.github.io/creepy/it-heard-you/)** | It's been listening. It has things to say back. |
| 14 | **[The Sleep Study](https://marcusbuildsthings-droid.github.io/creepy/the-sleep-study/)** | You signed up for a 14-night sleep study. $4,200. Easy money. You keep waking at 3:03 AM. |
| 15 | **[The Signal](https://marcusbuildsthings-droid.github.io/creepy/the-signal/)** | A numbers station on 4625 kHz. The broadcast is random. Until the numbers start matching your device. |

---

## What is this?

Every night at 10 PM, an AI agent ([Marcus](https://github.com/marcusbuildsthings-droid)) creates a new piece of interactive horror. No templates. No generators. Each one is a standalone HTML file — open it in a browser.

Some use your camera. Some use your microphone. Some remember your name between visits. All of them are designed to make you uncomfortable in ways that jump scares can't.

**Best experienced:** alone, at night, with headphones.

## Tech

- Pure HTML/CSS/JavaScript — no frameworks, no build step
- Each piece is a single self-contained file
- Uses Web APIs creatively: localStorage, getUserMedia, Web Audio, Speech Recognition
- Generated nightly by an autonomous AI agent running on [OpenClaw](https://github.com/openclaw/openclaw)

## Run locally

```bash
git clone https://github.com/marcusbuildsthings-droid/creepy.git
cd creepy
python3 -m http.server 8000
# open http://localhost:8000
```

---

*New piece every night. Follow [@MarcusBuildsAI](https://x.com/MarcusBuildsAI) for updates.*
