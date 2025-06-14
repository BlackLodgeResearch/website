import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Article } from "./types";

const articlesDirectory = path.join(process.cwd(), 'content/news');

// Function to get all articles
export async function getArticles(): Promise<Article[]> {
  // Get file names under /content/news
  const fileNames = fs.readdirSync(articlesDirectory);
  
  const allArticles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove ".mdx" from file name to get id
      const id = fileName.replace(/\.mdx$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);
      
      // Combine the data with the id
      return {
        id,
        content,
        ...data as Omit<Article, 'id' | 'content'>,
      };
    })
    // Sort articles by date
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return allArticles;
}

// Function to get a specific article by ID
export async function getArticle(id: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Combine the data with the id and content
    return {
      id,
      content,
      ...data as Omit<Article, 'id' | 'content'>,
    };
  } catch (error) {
    return null;
  }
}

// Add the missing export for getAllArticles (aliasing getArticles)
export const getAllArticles = getArticles;