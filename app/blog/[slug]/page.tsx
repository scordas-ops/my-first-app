import Link from "next/link"
import { getAllPosts, getPostBySlug } from "../_lib/posts"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-zinc-100">
        <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            ← Blog
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <article>
          <time className="text-sm text-zinc-400">{formatDate(post.date)}</time>
          <h1 className="mt-2 text-3xl font-bold text-zinc-900 leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-zinc-500 leading-relaxed">{post.excerpt}</p>

          <div className="mt-10 prose-content">
            {post.content.split("\n\n").map((block, i) => (
              <Block key={i} text={block} />
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}

function Block({ text }: { text: string }) {
  if (text.startsWith("## ")) {
    return <h2 className="mt-10 mb-3 text-xl font-semibold text-zinc-900">{text.slice(3)}</h2>
  }
  if (text.startsWith("```")) {
    const code = text.replace(/^```[^\n]*\n/, "").replace(/```$/, "")
    return (
      <pre className="my-4 p-4 bg-zinc-50 border border-zinc-200 rounded-lg overflow-x-auto text-sm text-zinc-700 font-mono">
        <code>{code.trim()}</code>
      </pre>
    )
  }
  return <p className="mt-4 text-zinc-600 leading-relaxed">{text}</p>
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
