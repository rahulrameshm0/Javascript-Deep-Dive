# JavaScript Deep Dive

A collection of small vanilla JavaScript projects and practice exercises, built while working through core JS concepts — from the basics to functions, arrays, the DOM, and modern ES6+ features.

No frameworks, no build step. Every project is plain HTML, CSS, and JavaScript.

## Projects

| Project | What it covers |
| --- | --- |
| [`pig game`](pig%20game) | Turn-based dice game — DOM manipulation, state, event handling |
| [`gussing number`](gussing%20number) | Number guessing game — random numbers, game state, score tracking |
| [`calculator`](calculator) | Simple calculator — user input, operators, rendering results |
| [`model window`](model%20window) | Modal (popup) window UI — class toggling, overlay, keyboard events |
| [`bankist app`](bankist%20app) | Mock banking app — arrays, objects, array methods (`map`, `filter`, `reduce`), dates |
| [`bankist website`](bankist%20website) | Marketing site — modals, tabs, sticky nav, smooth scrolling, sliders, lazy-loaded images |
| [`array method/array-deep-dive`](array%20method/array-deep-dive) | Practice with array methods and chaining |
| [`function deep dive`](function%20deep%20dive) | Function fundamentals — arguments vs. references, higher-order functions, returning functions, flight bookings exercise |
| [`developer-skills`](developer-skills) | Practice with variables, arrow functions, loops, and temperature amplitude |
| [`JS basic part-1`](JS%20basic%20part-1) | JavaScript basics: values, variables, operators, conditionals |
| [`JS basic part-2`](JS%20basic%20part-2) | JavaScript basics II: functions, arrays, objects, loops |

## Running a project

Each project is self-contained, so you can just open its `index.html` in a browser:

```bash
open "pig game/index.html"
```

Or start a local server from the repository root and navigate to the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` and pick a project.

## Repository structure

```
.
├── pig game/
├── gussing number/
├── calculator/
├── model window/
├── bankist app/
├── bankist website/
├── array method/
│   └── array-deep-dive/
├── function deep dive/
│   ├── argumnets vs reference/
│   ├── flight-bookings/
│   ├── higher order function/
│   └── returning function/
├── developer-skills/
├── JS basic part-1/
└── JS basic part-2/
```

Each folder typically contains:

- `index.html` — markup and script/style links
- `style.css` — project styling
- `script.js` (or similar) — the JavaScript logic

## Tech stack

- HTML5
- CSS3
- JavaScript (ES6+)

## Notes

- Most projects are based on exercises from [Jonas Schmedtmann's "The Complete JavaScript Course"](https://www.udemy.com/course/the-complete-javascript-course/), extended with my own code and tweaks.
- The `bankist app` uses sample account data with PINs `1111`, `2222`, `3333`, `4444` for logging in.
