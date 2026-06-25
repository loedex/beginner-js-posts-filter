# beginner-js-posts-filter

A lightweight client-side web app that fetches posts from a public REST API and lets you filter them in real time using a search input. Built with plain JavaScript and Bootstrap — no frameworks, no build tools.

---

## What It Does

- Fetches 100 posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) on page load
- Displays each post as a Bootstrap card
- Filters posts live as you type — matches against post titles (case-insensitive)
- Shows a friendly message when no results match your query

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Bootstrap 5.3.8 |
| Logic | Vanilla JavaScript (ES6+) |
| Data | JSONPlaceholder REST API |

---

## Project Structure

```
beginner-js-posts-filter/
├── index.html     # App layout and Bootstrap wiring
└── app.js         # API fetch, render logic, and search filter
```

---

## How to Run

No installation or build step required.

1. Clone the repository:

```bash
git clone https://github.com/loedex/beginner-js-posts-filter.git
```

2. Open `index.html` in your browser directly, or serve it with any static file server:

```bash
# Using VS Code Live Server extension — right-click index.html > Open with Live Server
# Or using Python's built-in server:
python -m http.server 8000
```

3. Visit `http://localhost:8000` and start searching.

---

## How the Search Works

The app keeps a `masterPosts` array in memory after the initial fetch. Every keystroke in the search input filters that array by checking whether the post title includes the typed text. The DOM is then re-rendered with only the matching results — no extra API calls are made.

```js
s_box.addEventListener('input', (e) => {
    const typed_text = e.target.value.toLowerCase();
    const filteredPosts = masterPosts.filter((p) => {
        return p.title.toLowerCase().includes(typed_text);
    });
    displayAllPosts(filteredPosts);
});
```

---

## Concepts Practiced

- `fetch()` and `async/await` for API calls
- DOM manipulation with `createElement` and `innerHTML`
- Array `.filter()` for live search
- Event listeners (`input` event)
- Bootstrap grid and card components

---

## License

This project is open source and available under the [MIT License](LICENSE).