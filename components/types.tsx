// components/types.ts

export interface Frontmatter {
  title: string;
  date: string;
  time: string; // Add the time field
  author: string;
  tags: string[];
}

export interface BlogPostInfo {
  slug: string;
  frontmatter: Frontmatter;
}
