import fs from 'fs'
import path from 'path'

export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  tags: string[]
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = { tags: [] }
  let activeList: 'tags' | null = null

  frontMatterLines.forEach((line) => {
    let listItem = line.match(/^\s*-\s+(.+)$/)

    if (listItem && activeList === 'tags') {
      metadata.tags!.push(listItem[1].trim().replace(/^['"](.*)['"]$/, '$1'))
      return
    }

    let field = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/)
    if (!field) {
      return
    }

    let [, key, rawValue] = field
    let value = rawValue.trim().replace(/^['"](.*)['"]$/, '$1')
    activeList = key === 'tags' ? 'tags' : null

    if (key === 'tags') {
      metadata.tags = value
        ? value.replace(/^\[|\]$/g, '').split(',').map((tag) => tag.trim())
        : []
      return
    }

    if (key === 'title' || key === 'publishedAt' || key === 'summary' || key === 'image') {
      metadata[key] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function getBlogTags() {
  return Array.from(
    new Set(getBlogPosts().flatMap((post) => post.metadata.tags)),
  ).sort((a, b) => a.localeCompare(b))
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
