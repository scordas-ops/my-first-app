export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2026-03-20",
    excerpt:
      "Next.js is a powerful React framework that makes building web apps fast and simple. Here's what you need to know to get started.",
    content: `
Next.js is a React framework that gives you the tools to build fast, production-ready web applications. It handles routing, server rendering, and deployment so you can focus on building your product.

## Why Next.js?

Next.js comes with a lot out of the box:

- **File-based routing** — create a file, get a route.
- **Server components** — render on the server for faster load times.
- **Built-in optimizations** — images, fonts, and scripts are optimized automatically.

## Your first page

Creating a page is as simple as adding a \`page.tsx\` file inside the \`app\` folder. Next.js picks it up automatically and creates a route for it.

## What's next?

Once you're comfortable with the basics, explore data fetching, layouts, and deploying to Vercel.
    `.trim(),
  },
  {
    slug: "why-tailwind-css",
    title: "Why Tailwind CSS Changed the Way I Write Styles",
    date: "2026-03-22",
    excerpt:
      "Tailwind CSS takes a utility-first approach to styling. Once it clicks, it's hard to go back to writing regular CSS.",
    content: `
Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS, you apply small, single-purpose classes directly in your HTML.

## The utility-first approach

Instead of writing:

\`\`\`css
.button {
  padding: 8px 16px;
  background-color: black;
  color: white;
  border-radius: 8px;
}
\`\`\`

You write:

\`\`\`html
<button class="px-4 py-2 bg-black text-white rounded-lg">Click me</button>
\`\`\`

## Why it works

- **No context switching** — styles live right next to your markup.
- **No naming things** — no more thinking up class names like \`.card-inner-wrapper\`.
- **Consistent design** — Tailwind's scale keeps spacing, colors, and sizes consistent.

## Getting started

Tailwind is already set up in this project. Just start adding classes and see the results instantly.
    `.trim(),
  },
  {
    slug: "deploying-to-vercel",
    title: "Deploying Your App to Vercel in Minutes",
    date: "2026-03-23",
    excerpt:
      "Vercel makes deploying Next.js apps incredibly simple. Push your code and your app is live — automatically.",
    content: `
Vercel is the platform built by the creators of Next.js. Deploying there is seamless.

## How it works

1. Push your code to GitHub.
2. Vercel detects the change automatically.
3. It builds and deploys your app.
4. You get a live URL.

Every push to your \`main\` branch triggers a new deployment. Pull requests get their own preview URL so you can review changes before they go live.

## Environment variables

If your app uses secrets or API keys, you can add them in the Vercel dashboard under **Settings → Environment Variables**. They're injected at build time and never exposed to the client.

## Custom domains

Once your app is live, you can add a custom domain from the Vercel dashboard. It handles SSL certificates automatically.
    `.trim(),
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
