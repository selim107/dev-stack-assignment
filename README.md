# Project Name :
Dev-Stack-Assignment-5

## Project Description :
Tech Stack Tracker is a simple React-based web application where users can explore different technologies and add their favorite technologies to a personal stack. It provides an easy and interactive way to view and manage selected technologies.

## Technologies Used
- React
- JavaScript
- Tailwind CSS
- HTML
- CSS

## Features
- Browse and explore different technologies
- Add technologies to a personal tech stack
- Remove technologies from the selected stack

## Dependencies
{
  "name": "dev-stack",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "^4.7.0",
    "daisyui": "^4.12.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-toastify": "^11.0.5",
    "vite": "^6.3.5"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.17",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.21"
  }
}

## 🚀 Run Locally

### 1. Clone the repository

git clone

### 2. Go to the project folder

cd project-name

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

http://localhost:3000

## 🔗 Relevant Links

- Live Website: https://stalwart-clafoutis-d3f8e3.netlify.app
- GitHub Repository : https://github.com/selim107/dev-stack-assignment
- GitHub Profile : https://github.com/selim107

## React Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. 
It makes React components easier to write and understand.

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component.
State is data managed inside a component and can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` is used to create and manage changing data in a component.
I used it to manage the selected/added items in this project.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs code after a component renders.
I used it to load the JSON data when the project starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React identify each item in a list.
It helps React update the list efficiently.

### 6. What is conditional rendering?
Conditional rendering means showing different UI based on a condition.
For example, I used it to show an empty stack message when no item is added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props.
A child can send data back by calling a function passed through props.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.




