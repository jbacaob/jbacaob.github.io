import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getPostBySlug(slug: string, folder: string = 'blog') {
  const realSlug = slug.replace(/\.mdx?$/, '')
  
  // Try .md first, then .mdx
  let fullPath = path.join(contentDirectory, folder, `${realSlug}.md`)
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(contentDirectory, folder, `${realSlug}.mdx`)
  }
  
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}

export function getAllPosts(folder: string = 'blog') {
  const dirPath = path.join(contentDirectory, folder)
  if (!fs.existsSync(dirPath)) return []

  const slugs = fs.readdirSync(dirPath)
  const posts = slugs
    .filter((slug) => slug.endsWith('.md') || slug.endsWith('.mdx'))
    .map((slug) => getPostBySlug(slug, folder))
    .filter((post) => post !== null)
    .sort((post1: any, post2: any) => {
      // Sort by date (if exists) or fallback to slug
      const date1 = post1.meta.date ? new Date(post1.meta.date).getTime() : 0
      const date2 = post2.meta.date ? new Date(post2.meta.date).getTime() : 0
      return date1 > date2 ? -1 : 1
    })

  return posts
}
