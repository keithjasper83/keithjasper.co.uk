// pages/blog/page.tsx

import React from "react";
import { fetchPosts } from "../../lib/posts"; // Import the fetchPosts function
import { BlogPostInfo } from "../../components/types"; // Import the necessary types

const BlogPage: React.FC = () => {
  // Fetch posts and sort them by date and time in descending order
  const posts = fetchPosts().sort((a, b) => {
    const dateComparison =
      new Date(b.frontmatter.date + " " + b.frontmatter.time).getTime() -
      new Date(a.frontmatter.date + " " + a.frontmatter.time).getTime();
    if (dateComparison !== 0) {
      return dateComparison;
    }
    // If dates are the same, sort by time
    return (
      new Date(b.frontmatter.time).getTime() -
      new Date(a.frontmatter.time).getTime()
    );
  });

  return (
    <div className="row">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post: BlogPostInfo) => (
          <li key={post.slug}>
            <a href={`/blog/posts/${post.slug}`}>{post.frontmatter.title}</a>
            <p>
              Date: {post.frontmatter.date} - {post.frontmatter.time || ""}
            </p>
            <p>Author: {post.frontmatter.author}</p>
            <p>Tags: {post.frontmatter.tags.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
