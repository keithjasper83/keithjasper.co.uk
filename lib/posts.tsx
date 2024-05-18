import fs from "fs";
import path from "path";
import { BlogPostInfo, Frontmatter } from "../components/types";

export function fetchPosts(): BlogPostInfo[] {
  const postsDirectory = path.join(process.cwd(), "/app/blog/posts");
  const postFolders = fs.readdirSync(postsDirectory);

  const posts: BlogPostInfo[] = [];

  postFolders.forEach((postFolder) => {
    const postFolderPath = path.join(postsDirectory, postFolder);
    const frontmatterFilePath = path.join(postFolderPath, "frontmatter.tsx");

    if (!fs.existsSync(frontmatterFilePath)) {
      console.error(`Frontmatter file not found for post: ${postFolder}`);
      return;
    }

    const frontmatterFileContent = fs.readFileSync(
      frontmatterFilePath,
      "utf-8"
    );
    const frontmatter = parseFrontmatter(frontmatterFileContent);

    posts.push({
      slug: postFolder,
      frontmatter,
    });
  });

  return posts;
}

function parseFrontmatter(frontmatterFileContent: string): Frontmatter {
  const frontmatter: Frontmatter = {
    title: "",
    date: "",
    time: "",
    author: "",
    tags: [],
  };

  // Here, you might use a more robust approach to parse frontmatter from the file content
  // For simplicity, let's assume the frontmatter is exported as a constant named 'frontmatter'
  const matches = frontmatterFileContent.match(
    /export const frontmatter: Frontmatter = (\{[\s\S]*?\});/
  );

  if (matches && matches.length > 1) {
    try {
      const frontmatterObj = eval(`(${matches[1]})`);
      return {
        title: frontmatterObj.title || "",
        date: frontmatterObj.date || "",
        time: frontmatterObj.time || "",
        author: frontmatterObj.author || "",
        tags: frontmatterObj.tags || [],
      };
    } catch (error) {
      console.error("Error parsing frontmatter:", error);
    }
  }

  return frontmatter;
}
