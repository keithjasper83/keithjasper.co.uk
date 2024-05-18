"use client";
import React, { useState, useEffect } from "react";

export default function DocumentationPage() {
  const [documentation, setDocumentation] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}Documentation`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const xmlData = await res.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        const members = xmlDoc.getElementsByTagName("member");

        const parsedData = Array.from(members).map(parseMember);

        setDocumentation(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const parseMember = (member: any) => {
    const name = member.getAttribute("name");
    const content = Array.from(member.childNodes).map(parseNode);

    return { name, content };
  };

  const parseNode: any = (node: any) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent.trim();
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();
      const params: any = {};
      if (node.attributes) {
        for (let i = 0; i < node.attributes.length; i++) {
          const attr = node.attributes[i];
          params[attr.nodeName] = attr.nodeValue;
        }
      }
      const children = Array.from(node.childNodes).map(parseNode);

      return { tagName, params, children };
    }
    return null;
  };

  const renderContent = (content: any) => {
    if (typeof content === "string") {
      return <p>{content}</p>;
    } else if (Array.isArray(content)) {
      return content.map((item, index) => (
        <div key={index}>{renderContent(item)}</div>
      ));
    } else if (content.tagName === "para") {
      return (
        <p {...content.params}>
          {content.children.map((child: any) => renderContent(child))}
        </p>
      );
    } else {
      return (
        <div {...content.params}>
          {content.children.map((child: any) => renderContent(child))}
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
      <div className="space-y-4">
        {documentation.map((item, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h2 className="text-xl font-bold">{item.name}</h2>
            {item.content.map((content: any, idx: number) => (
              <div key={idx}>{renderContent(content)}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
