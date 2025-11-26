import { getHeroByPage, getBlogs } from '@/lib/strapi';
import styles from "./BlogDetail.module.css";
import Image from "next/image";
import React from 'react';
import BlogHero from '@/components/Hero/BlogHero';

const BlogDetails = async (props) => {
  const hero = await getHeroByPage("blogs");
  const { slug } = await props.params;

  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <BlogHero blog_name={blog.title} data={hero} variant='blogs_page_hero'/>

      <div className={`main_container section_padding ${styles.container}`}>
        {/* Main Title */}
        <h2 className="title">{blog.title}</h2>
        <h3 className={styles.subtitle}>{blog.sub_title}</h3>
        <p className={`text ${styles.text}`}>{blog.text}</p>

        {/* Banner Image */}
        {blog.banner && (
          <div className={styles.bannerBox}>
            <Image
              src={blog.banner.url}
              alt={blog.banner.alt}
              width={blog.banner.width || 1200}
              height={blog.banner.height || 600}
              className={styles.banner}
            />
          </div>
        )}

        <div className={styles.contentWrapper}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.table_content}>
              <h3>Table of Content</h3>
              <ul>
                {blog.toc.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item.anchor_id || ""}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.social}>
              <h5>Share this blog:</h5>
              <div className={styles.icons}>
                {blog.socialLinks.facebook && <a href={blog.socialLinks.facebook}><img src="/fb.svg" alt="Facebook" /></a>}
                {blog.socialLinks.twitter && <a href={blog.socialLinks.twitter}><img src="/twitter.svg" alt="Twitter" /></a>}
                {blog.socialLinks.linkedin && <a href={blog.socialLinks.linkedin}><img src="/linkedin.svg" alt="LinkedIn" /></a>}
                {/* <a href="#"><img src="/copy.svg" alt="Copy Link" /></a> */}
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className={styles.article}>
            {blog.content.map((block, index) => {
              if (block.type === "heading") {
                return React.createElement(
                  `h${block.level}`,
                  { key: index, id: block.text.toLowerCase().replace(/\s+/g, "-") },
                  block.text
                );
              } else if (block.type === "paragraph") {
                return <p key={index} className="text">{block.text}</p>;
              } else if (block.type === "list") {
                return (
                  <ul key={index}>
                    {block.items.map((item, i) => (
                      <li key={i} className="text">{item}</li>
                    ))}
                  </ul>
                );
              } else {
                return null;
              }
            })}
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
