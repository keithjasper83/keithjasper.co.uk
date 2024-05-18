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
      </p>{" "}
      <p>Author: {frontmatter.author}</p>
      <p>
        This is another post to show the workings of the dataset extracted from
        files.
      </p>
    </div>
  );
};

export default SampleBlogPost1;
