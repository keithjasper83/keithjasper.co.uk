// /api/random404Image.tsx

import fs from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    // Get a list of image filenames in the / public / 404 folder
    const imagesDirectory = path.join(process.cwd(), "public", "404");
    console.log("imagesDirectory:", imagesDirectory); // Debugging
    const imageFilenames = fs.readdirSync(imagesDirectory);

    // Ensure imageFilenames is not empty
    if (!imageFilenames.length) {
      throw new Error("No images found in the directory");
    }

    // Select a random image from the list
    const randomIndex = Math.floor(Math.random() * imageFilenames.length);
    const randomImage = imageFilenames[randomIndex];

    // Ensure randomImage is not undefined
    if (!randomImage) {
      throw new Error("Random image is undefined");
    }
    return new Response(JSON.stringify(randomImage));
    //res.status(200).json({ randomImage });
  } catch (error) {
    console.error("Error in handler:", error);
    const defaultImage = "ilse-orsel-vmFEBIEz0hQ-unsplash.jpg";

    return new Response(JSON.stringify(defaultImage));
    //res.status(500).json({ error: "Internal Server Error" });
  }
}
