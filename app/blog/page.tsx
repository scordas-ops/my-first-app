import Link from "next/link"
import { getAllPosts } from "./_lib/posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on web development, design, and building things.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-100">
        <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            ← Home
          </Link>
          <span className="text-sm font-medium text-zinc-900">Blog</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-zinc-900 mb-2">Blog</h1>
        <p className="text-zinc-500 mb-12">Thoughts on web development, design, and building things.</p>

        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <time className="text-sm text-zinc-400">{formatDate(post.date)}</time>
                <h2 className="mt-1 text-xl font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-zinc-500 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-3 text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors"
                >
                  Read more
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
