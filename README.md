# Landing page

`A single page application (SPA)` built with `React`, which utilizes `react-router` for navigation and applies `TailwindCSS` and `styled-components` for styling using `twin.macro`.

## Features

- Light/dark mode toggle
- Responsive design

## Libraries Used

- [twin.macro](https://www.npmjs.com/package/twin.macro?activeTab=readme) - A library which allows to use the syntax and features of `styled-components` to define your styles, while still using the utility-first approach of `tailwindcss`.

- [prop-types](https://www.npmjs.com/package/prop-types) - A library for typechecking React component props.

- [aos](https://www.npmjs.com/package/aos) - An animation library for adding scroll-based animations to web pages.

- [clsx](https://www.npmjs.com/package/clsx) - An utility library for constructing className strings conditionally.

- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority) - An utility library for creating and applying custom CSS class variants in Tailwind CSS. This library makes it easy to extend Tailwind's default classes with custom styles and variants.

## Config

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [macrosPlugin(), react()],
  server: {
    port: 3000,
  },
});
```
