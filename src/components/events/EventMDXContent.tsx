"use client";

import { ReactNode } from "react";

interface EventMDXContentProps {
  content: string;
}

// This is a placeholder component for rendering MDX content
// In a real implementation, this would use mdx libraries to parse and render the content
export function EventMDXContent({ content }: EventMDXContentProps) {
  // In a real implementation, the content would be properly parsed and rendered
  // This is just for demonstration purposes
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return (
    <div>
      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mb-4">{paragraph.replace('# ', '')}</h1>;
        } else if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mb-3">{paragraph.replace('## ', '')}</h2>;
        } else if (paragraph.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-bold mb-2">{paragraph.replace('### ', '')}</h3>;
        } else if (paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').map(item => item.replace('- ', ''));
          return (
            <ul key={index} className="list-disc pl-6 mb-4">
              {items.map((item, i) => (
                <li key={i} className="mb-1">{item}</li>
              ))}
            </ul>
          );
        } else {
          return <p key={index} className="mb-4">{paragraph}</p>;
        }
      })}
    </div>
  );
}