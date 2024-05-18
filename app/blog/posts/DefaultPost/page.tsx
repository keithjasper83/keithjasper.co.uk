import React from "react";
import { Frontmatter } from "../../../../components/types";
import { frontmatter as postFrontmatter } from "./frontmatter"; // Import the frontmatter

const SampleBlogPost1: React.FC = () => {
  const frontmatter: Frontmatter = postFrontmatter;

  console.log(frontmatter);

  return (
    <div className="row">
      <h1>{frontmatter.title}</h1>
      <p>
        Date: {frontmatter.date} - {frontmatter.time}
      </p>
      <p>Author: {frontmatter.author}</p>
      <p>Default Post ... Edit HERE</p>
    </div>
  );
};

export default SampleBlogPost1;
