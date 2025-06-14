"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search, Tag } from "lucide-react";
import { Article } from "@/lib/types";

interface NewsListProps {
  articles: Article[];
}

export function NewsList({ articles }: NewsListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract all unique tags from articles, ensuring tags is always an array
  const allTags = Array.from(
    new Set(articles.flatMap(article => article.tags ?? []))
  );
  
  // Filter articles based on search term and selected tag
  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const articleTags = article.tags ?? [];
    const matchesTag = 
      !selectedTag || 
      articleTags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-full"
            />
          </div>
          <div>
            <Button 
              variant={selectedTag ? "default" : "outline"}
              onClick={() => setSelectedTag(null)}
              className="mr-2"
            >
              All
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className="mr-2 mb-2"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles match your search criteria.</p>
          <Button 
            variant="ghost" 
            className="mt-2"
            onClick={() => {
              setSearchTerm("");
              setSelectedTag(null);
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="flex flex-col overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image 
                  src={article.image || "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(article.date)}
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(article.tags ?? []).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/news/${article.id}`}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}