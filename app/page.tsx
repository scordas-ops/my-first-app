import Link from "next/link"
import { getAllPosts } from "./blog/_lib/posts"

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-100">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <span className="text-sm font-medium text-zinc-900">My Blog</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-zinc-900 leading-tight">
          Welcome to my blog.
        </h1>
        <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
          I write about web development, design, and building things on the internet.
        </p>

        <Link
          href="/blog"
          className="inline-block mt-8 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
        >
          Read the blog
        </Link>

        <section className="mt-20">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-8">
            Recent Posts
          </h2>
          <ul className="space-y-8">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <time className="text-sm text-zinc-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-1 text-zinc-500">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
