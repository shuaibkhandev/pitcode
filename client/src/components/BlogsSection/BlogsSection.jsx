// components/BlogsSection/BlogsSection.jsx
import Link from "next/link";
import styles from "./BlogsSection.module.css";
export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function BlogSection({ posts, section, categories }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className={`${styles.blog_section} section_padding`}>
      <div className="main_container">
        {/* Section Title */}
        <div className="section_top two_col">
          <h2 className="title">{section?.title}</h2>
        </div>

        {/* Categories */}
        <div className={styles.categories}>
          {categories.map((cat) => (
            <button key={cat.id} className={styles.categoryBtn}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className={styles.grid}>
          {posts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.id} className={styles.card}>
              {/* Banner/Image */}
              {post.banner && (
                <div className={styles.imageWrapper}>
                  <img
                    src={post.banner.url.startsWith("http") ? post.banner.url : STRAPI_URL + post.banner.url}
                    alt={post.banner.alt || post.title}
                    className={styles.image}
                  />
                </div>
              )}

              {/* Content */}
              <div className={styles.content}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className="secondary_text">{post.text}</p>
                <span className={styles.date}>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
