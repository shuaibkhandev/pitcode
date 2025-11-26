// pages/blogs/index.jsx
import BlogSection from '@/components/BlogsSection/BlogsSection';
import BlogHero from '@/components/Hero/BlogHero';
import Hero from '@/components/Hero/Hero';
import { getBlogCategories, getBlogs, getBlogSection, getHeroByPage } from '@/lib/strapi';
import React from 'react';

const BlogPage = async () => {
  const hero = await getHeroByPage("blogs");
  const blogSection = await getBlogSection();
  const posts = await getBlogs();
  const categories = await getBlogCategories();

  return (
    <div className='blogs_page'>
      <BlogHero data={hero} variant='blogs_page_hero' />
      <BlogSection posts={posts} section={blogSection} categories={categories} />
    </div>
  );
};

export default BlogPage;
