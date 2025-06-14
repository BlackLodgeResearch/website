import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Event } from "./types";

const eventsDirectory = path.join(process.cwd(), 'content/events');

// Common function to process event file content
function processEventFile(id: string, fileContents: string): Event {
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  
  // Ensure categories is always an array
  const category = Array.isArray(data.category) 
    ? data.category 
    : data.category 
      ? [data.category] 
      : [];
  
  // Combine the data with the id and content
  return {
    id,
    content,
    ...data as Omit<Event, 'id' | 'content' | 'categories'>,
    category,
  };
}

// Function to get all events
export async function getEvents(): Promise<Event[]> {
  // Get file names under /content/events
  const fileNames = fs.readdirSync(eventsDirectory);
  
  const allEvents = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove ".mdx" from file name to get id
      const id = fileName.replace(/\.mdx$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(eventsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Process the file using common logic
      return processEventFile(id, fileContents);
    })
    // Sort events by date
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return allEvents;
}

// Function to get a specific event by ID
export async function getEvent(id: string): Promise<Event | null> {
  try {
    const fullPath = path.join(eventsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Process the file using common logic
    return processEventFile(id, fileContents);
  } catch (error) {
    return null;
  }
}

// Add the missing export for getAllEvents (aliasing getEvents)
export const getAllEvents = getEvents;