import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  created_at: string;
  author: {
    email: string;
  };
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      // First get the blog posts
      const { data: blogPosts, error: blogError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (blogError) throw blogError;

      // Then get the author information for each post
      const postsWithAuthors = await Promise.all((blogPosts || []).map(async (post) => {
        const { data: authorData, error: authorError } = await supabase
          .from('auth.users')
          .select('email')
          .eq('id', post.author_id)
          .single();

        if (authorError) {
          console.warn('Error fetching author:', authorError);
          return {
            ...post,
            author: { email: 'Unknown Author' }
          };
        }

        return {
          ...post,
          author: authorData
        };
      }));

      setPosts(postsWithAuthors);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="text-center py-12">Loading posts...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
              <div className="text-sm text-gray-500">
                <span>By {post.author?.email || 'Unknown Author'}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}