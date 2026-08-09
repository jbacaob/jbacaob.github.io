import { getPostBySlug, getAllPosts } from "../../../lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, "blog");

  if (!post) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert lg:prose-xl max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-2">
          {post.meta.title}
        </h1>
        <time className="text-sm text-zinc-500 dark:text-zinc-400">
          {post.meta.date ? new Date(post.meta.date).toLocaleDateString() : ""}
        </time>
      </header>
      <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote 
          source={post.content} 
          components={{ Link }}
          options={{
            mdxOptions: {
              format: post.format,
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            }
          }}
        />
      </div>
    </article>
  );
}
