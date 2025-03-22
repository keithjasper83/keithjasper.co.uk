"use client";

import { useEffect, useState } from 'react';
import { parseMember } from '../../../lib/api-docs';

export default function DocumentationPage() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/docs');
      const data = await response.json();

      const parsedData = data.map(item => parseMember(item));
      setDocs(parsedData);
    };

    fetchData();
  }, [parseMember]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">API Documentation</h1>
    </div>
  );
}
