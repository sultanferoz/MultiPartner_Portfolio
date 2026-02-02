"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TEAM_SLIDES = [
  {
    name: "Mie Emiola",
    role: "Lead Data Scientist & AI Specialist",
    image: "/professional-headshot.webp",
  },
  {
    name: "Dr. Chen Liu",
    role: "Senior Machine Learning Engineer",
    image: "/professional-man-headshot.webp",
  },
  {
    name: "Sarah Rodriguez",
    role: "Data Engineering Manager",
    image: "/professional-woman-in-business-outfit-pointing.webp",
  },
  {
    name: "James K. Patel",
    role: "Principal Analytics Consultant",
    image: "/professional-man-suit.webp",
  },
  {
    name: "Dr. Elena Volkova",
    role: "NLP Research Lead",
    image: "/professional-team-working-together-with-laptop.webp",
  },
  {
    name: "Marcus Johnson",
    role: "DevOps & MLOps Engineer",
    image: "/professional-headshot.webp",
  },
  {
    name: "Aisha Mohammed",
    role: "Data Visualization Director",
    image: "/professional-woman-in-business-outfit-pointing.webp",
  },
];

export default function TeamHeroSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Start at middle
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // Get slide position style with seamless transitions
  const getSlideStyle = (position: number) => {
    const baseSize = 380;
    const gap = 80;
    const scaleStep = 0.15;
    const opacityStep = 0.25;

    const distance = Math.abs(position);
    const scale = 1 - distance * scaleStep;
    const opacity = 1 - distance * opacityStep;
    const x = position * (baseSize + gap);

    return {
      transform: `translateX(${x}px) scale(${scale})`,
      opacity: Math.max(opacity, 0.2),
      zIndex: 30 - distance * 10,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  // Handle seamless infinite rotation
  const rotateNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === TEAM_SLIDES.length - 1) {
        return 0; // Last to first (seamless loop)
      }
      return prev + 1;
    });
  }, []);

  const rotatePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === 0) {
        return TEAM_SLIDES.length - 1; // First to last (reverse loop)
      }
      return prev - 1;
    });
  }, []);

  // Auto rotation
  useEffect(() => {
    autoRotateRef.current = setInterval(rotateNext, 4000);
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [rotateNext]);

  // Render visible slides
  const renderSlides = () => {
    const slides = [];
    
    // Always show 5 cards in positions: -2, -1, 0, 1, 2
    for (let i = -2; i <= 2; i++) {
      let index = activeIndex + i;
      
      // Handle seamless wrapping
      if (index < 0) {
        index = TEAM_SLIDES.length + index; // Wrap to end
      } else if (index >= TEAM_SLIDES.length) {
        index = index % TEAM_SLIDES.length; // Wrap to beginning
      }
      
      const slide = TEAM_SLIDES[index];
      const isCenter = i === 0;

      slides.push(
        <motion.div
          key={`${slide.name}-${i}-${activeIndex}`} // Force re-render on activeIndex change
          className="absolute"
          initial={false}
          animate={getSlideStyle(i)}
          transition={{ duration: 0.6, ease: "cubicBezier(0.4, 0, 0.2, 1)" }}
        >
          <div
            className={`relative rounded-[36px] overflow-hidden shadow-2xl group cursor-pointer`}
            style={{
              width: 'clamp(260px, 70vw, 380px)',
              height: 'clamp(360px, 60vh, 460px)',
            }}
            onClick={() => {
              if (i < 0) {
                // Click left card -> rotate previous
                rotatePrev();
              } else if (i > 0) {
                // Click right card -> rotate next
                rotateNext();
              }
            }}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, (max-width: 1024px) 340px, 380px"
              priority={isCenter}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="text-white">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-1">
                  {slide.name}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-white/90">
                  {slide.role}
                </p>
              </div>
            </div>

            <div className={`absolute inset-0 rounded-[36px] ring-1 transition-all duration-500 ${
              isCenter ? 'ring-primary/40' : 'ring-white/10'
            }`} />
          </div>
        </motion.div>
      );
    }
    
    return slides;
  };

  return (
    <section className="bgGridLines min-h-screen h-screen relative flex flex-col px-4 bg-muted overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-26 lg:pt-32 text-center mb-6 flex-shrink-0"
      >
        <h1 className="text-[32px] sm:text-[38px] md:text-4xl lg:text-5xl font-medium text-white leading-tight">
          Meet our Team
        </h1>
        <p className="text-white/85 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-2 sm:mt-3">
          A diverse team of passionate professionals driving innovation and
          excellence in every project.
        </p>
      </motion.div>

      <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {renderSlides()}
        </div>

        {/* Minimal Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
          {TEAM_SLIDES.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-white w-8' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] rounded-[999px] blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(196,233,98,0.4) 0%, rgba(35,155,164,0.3) 40%, transparent 72%)",
        }}
      />
    </section>
  );
}