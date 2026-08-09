import { getPostBySlug, getAllPosts } from "../../lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export async function generateStaticParams() {
  const pages = getAllPosts("pages");
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default function StaticPage({ params }: { params: { slug: string } }) {
  const page = getPostBySlug(params.slug, "pages");

  if (!page) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert lg:prose-xl max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-2">
          {page.meta.title || params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
        </h1>
      </header>
      <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none">
        <MDXRemote 
          source={page.content} 
          components={{ Link }}
          options={{
            mdxOptions: {
              format: page.format,
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            }
          }}
        />
      </div>
    </article>
  );
}
