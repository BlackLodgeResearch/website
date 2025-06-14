import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Tag, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getArticle, getAllArticles } from "@/lib/news";
import { ArticleMDXContent } from "@/components/news/ArticleMDXContent";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  
  if (!article) {
    return {
      title: "Article Not Found | MakerHub",
    };
  }
  
  return {
    title: `${article.title} | MakerHub News`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }
  
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
      <div className="bg-muted">
        <div className="container px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/news" className="text-primary hover:underline mb-2 inline-block">
            ← Back to News
          </Link>
        </div>
      </div>
      
      <article className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(article.date)}
            </div>
            
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-10">
            <Image
              src={article.image || "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <ArticleMDXContent content={article.content} />
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-wrap justify-between items-center">
            <div className="space-y-2">
              <p className="font-bold">Share this article</p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
            </div>
            
            <Button asChild>
              <Link href="/news">
                Read More Articles
              </Link>
            </Button>
          </div>
        </div>
      </article>
      
      <div className="bg-muted py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* This would typically be populated with actual related articles */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Related Article {i}</h3>
                  <p className="text-muted-foreground mb-4">
                    Another interesting article you might enjoy reading.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="#">Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}