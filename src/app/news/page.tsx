import { Metadata } from "next";
import { NewsList } from "@/components/news/NewsList";
import { getArticles } from "@/lib/news";

export const metadata: Metadata = {
  title: "News | MakerHub",
  description: "The latest news, updates, and stories from MakerHub",
};

export default async function NewsPage() {
  const articles = await getArticles();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90 dark:from-black/95 dark:to-black/90 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              News & Updates
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Stay up-to-date with the latest happenings, announcements, and stories from the MakerHub community.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <NewsList articles={articles} />
        </div>
      </section>
    </div>
  );
}