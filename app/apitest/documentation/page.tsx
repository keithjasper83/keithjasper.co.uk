"use client";
import { useState, useEffect } from "react";

export default function DocumentationPage() {
  const [documentation, setDocumentation] = useState<any[]>([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${apiUrl}Documentation`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const xmlData = await res.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "text/xml");
      const members = xmlDoc.getElementsByTagName("member");
      const parsedData = Array.from(members).map((member: any) => {
        const name = member.getAttribute("name");
        const summary = member.querySelector("summary")?.textContent;
        return { name, summary };
      });
      setDocumentation(parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
      <div className="space-y-4">
        {documentation.map((item, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
