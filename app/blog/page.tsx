import { getAllPosts } from "../../lib/mdx";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts("blog");

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
        Blog
      </h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col items-start justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
              <Link href={`/blog/${post.slug}`}>
                <span className="absolute inset-0" />
                {post.meta.title}
              </Link>
            </h2>
            <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {post.meta.date ? new Date(post.meta.date).toLocaleDateString() : ""}
            </div>
            {post.meta.description && (
              <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {post.meta.description}
              </p>
            )}
            <div className="mt-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-600 flex items-center gap-1">
              Read article <span aria-hidden="true">&rarr;</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
