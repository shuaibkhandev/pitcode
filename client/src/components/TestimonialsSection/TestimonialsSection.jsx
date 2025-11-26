"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TestimonialsSection.module.css";
import "./TestimonialsSectionSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function TestimonialsSection() {
  const [section, setSection] = useState(null);

  // Fetch Strapi data on mount
  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        `${STRAPI_URL}/api/testimonials-sections?populate[testimonia][populate]=*`
      );

      const json = await res.json();
      setSection(json.data);
    }

    loadData();
  }, []);

  

  if (!section) return null;

  const testimonials = section[0].testimonia || [];

  return (
    <section className={`${styles.testimonials_section} section_padding testimonials_section`}>
      <div className="main_container">
        <div className="section_top">
          <h2 className="title">{section[0].title}</h2>

          <p className="sub_title">{section[0].description}</p>

          <button className={"cta_primary"}>
            {section[0].cta_text}   <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
<path d="M9.74859 18.611L18.6109 9.74862M18.6109 9.74862L11.7426 9.52706M18.6109 9.74862L18.8325 16.6169" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> 
          </button>
        </div>

        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              576: { slidesPerView: 2, spaceBetween: 16 },
              992: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className={styles.swiper}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className={styles.card}>
                <Image
                  src={
                     item?.logo?.url
                        ? STRAPI_URL +
                          item.logo.url
                        : "/google.svg"
                  }
                
                  alt="logo"
                  width={90}
                  height={40}
                />

                <p className={styles.text}>{item.text}</p>

                <div className={styles.userBox}>
                  <Image
                    src={
                      item?.user_avatar?.url
                        ? STRAPI_URL +
                          item.user_avatar.url
                        : "/user.svg"
                    }
                    alt={item.user_name}
                    width={48}
                    height={48}
                  />

                  <div>
                    <h5 className={styles.userName}>{item.user_name}</h5>
                    <span className={styles.userPosition}>
                      {item.user_position}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
