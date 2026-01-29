import { useState } from 'react';
import { Heart, MessageCircle, Share2, User, Calendar, Tag, Search, Plus, Edit3, BookOpen } from 'lucide-react';

interface Author {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: Author;
  publishedAt: string;
  tags: string[];
  likes: number;
  comments: number;
  readTime: number;
  featured: boolean;
}

const mockAuthors: Author[] = [
  {
    id: 1,
    name: "Sarah Chen",
    username: "sarahc",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    bio: "Tech writer & coffee enthusiast. Exploring the intersection of design and development.",
    followers: 1250,
    following: 340
  },
  {
    id: 2,
    name: "Marcus Johnson",
    username: "marcusj",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bio: "Frontend developer sharing insights on React, TypeScript, and modern web development.",
    followers: 890,
    following: 210
  }
];

const mockPosts: Post[] = [
  {
    id: 1,
    title: "The Future of Web Development: What's Coming in 2024",
    content: "As we move into 2024, the web development landscape continues to evolve at a rapid pace...",
    excerpt: "Exploring the latest trends and technologies shaping web development in 2024.",
    author: mockAuthors[0],
    publishedAt: "2024-01-15",
    tags: ["Web Development", "Technology", "Trends"],
    likes: 42,
    comments: 8,
    readTime: 5,
    featured: true
  }
];

export default function ComponentA() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [filter, setFilter] = useState<'all' | 'featured' | 'recent'>('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Component A implementation */}
    </div>
  );
}