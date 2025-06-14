// Event type
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  presenter: string;
  capacity: number;
  spotsRemaining: number;
  fee: number;
  memberDiscount: boolean;
  category: string[];
  image?: string;
  content: string;
}

// Article type
export interface Article {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image?: string;
  content: string;
}