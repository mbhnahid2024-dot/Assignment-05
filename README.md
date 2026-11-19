<h1 align="center">🚀 Dev Stack Builder</h1>

<p align="center">
  Explore modern technologies and build your own development stack.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

---

## 📖 About the Project

**Dev Stack Builder** is a responsive website where developers can explore popular technologies like React, Node.js, PostgreSQL, and Docker. Each technology card shows its description, category, difficulty, and rating. Users can add technologies to a "Your Stack" panel and build the stack that fits their next project.

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| React.js | Building the user interface with components |
| TypeScript | Safer code with types |
| Vite | Fast development and build tool |
| Tailwind CSS | Styling and responsive design |
| DaisyUI | Loading spinner and UI helpers |
| React-Toastify | Alert messages (toasts) |
| JSON | Technology data (loaded from a file, not hardcoded) |

## ✨ Key Features

1. **Build your own stack:** Click "Add to Stack" to add a technology to the "Your Stack" panel. Remove one item with ✕ or clear everything with "Remove All". The same technology can't be added twice.
2. **Smart card feedback and alerts:** An added card gets a red border, and its button changes to "✓ Added to Stack". Toast alerts appear for add, duplicate, remove, and remove all. A loading spinner shows while the data loads.
3. **Gradient theme and responsive design:** One orange → pink → violet gradient is defined in one place and used for the brand name, hero heading, and main buttons. The layout works on mobile, tablet, and desktop with a sticky navbar and a hamburger menu.

## 📁 Project Structure

```
src/
├── assets/          # logo and banner images
├── components/      # Navbar, Hero, TechnologyCard, TechnologyList, StackSidebar, Footer
├── types/           # Technology type
├── App.tsx          # main logic (state, add, remove)
├── index.css        # Tailwind + gradient theme
└── main.tsx
public/
└── technologies.json
```

## 💻 Run Locally

```bash
git clone https://github.com/mbhnahid2024-dot/Assignment-05.git
cd Assignment-05
npm install
npm run dev
```

---

## ❓ React Questions

### 1. What is JSX, and why is it used in React?
JSX lets me write HTML-like code inside my JavaScript file. It looks like HTML, but it is really JavaScript. It is used because it makes the code easy to read and easy to write. In my project, components like `Navbar` and `Hero` return JSX.

### 2. What is the difference between props and state?
- **Props** are data that a parent gives to a child. The child can only read them.
- **State** is data a component keeps for itself, and it can change.

When state changes, React updates the screen. In my project, `tech` and `isAdded` are props in `TechnologyCard`, and `stack` is state in `App.tsx`.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a component remember a value. When I change the value, the screen updates. It gives me the current value and a function to change it.

```tsx
const [stack, setStack] = useState<Technology[]>([]);
```

I used it in `App.tsx` for `technologies`, `loading`, and `stack`. I also used it in `Navbar.tsx` for the mobile menu (`open`) and the active link (`active`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs code after the page is shown on the screen. It is used for jobs like fetching data. I needed it to load `technologies.json` when the website opens. I wrote `[]` at the end, so it runs only one time and not again and again.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` helps React know which item is which, like a roll number. When I add or remove an item, React updates only that item and does not rebuild the whole list. I used `key={tech.id}` because every technology has a different id.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different things depending on a condition: if it is true show A, otherwise show B. In my "Your Stack" panel, an empty stack shows a message, and otherwise it shows the selected technologies.

```tsx
{stack.length === 0 ? (
  <div>Your stack is empty. Add technologies from the list to start building.</div>
) : (
  <ul>{/* selected technologies */}</ul>
)}
```

I also used it for the loading spinner and for changing the button text to "✓ Added to Stack".

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to child:** the parent passes data using props. For example, `App` sends `stack` to `TechnologyList`.
- **Child to parent:** the parent passes a function as a prop, and the child calls that function to send data back.

In my project, `App` passes `handleAdd` as `onAdd`. When I click "Add to Stack", the card runs `onAdd(tech)`. That runs `handleAdd` in `App`, and the stack is updated.

---

## 🔗 Links

- **Live Site:** <your-vercel-link>
- **GitHub Repo:** https://github.com/mbhnahid2024-dot/Assignment-05

<p align="center">Made with ❤️ for Assignment 5</p>