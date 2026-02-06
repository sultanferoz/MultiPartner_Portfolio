"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Head of Customer Analytics, FinTech Platform",
    text: "The CX dashboards and churn analytics completely changed how we understand customer behavior. The visual clarity and real-time insights helped our teams make faster, smarter decisions across every department.",
    image: "/professional-man-headshot.webp",
  },
  {
    name: "Priya Patel",
    role: "Director of Business Intelligence, SaaS Company",
    text: "Their demographic and transaction visualizations brought our data to life. The geographic mapping and KPI breakdowns gave our leadership team a clear, actionable view of performance across regions.",
    image: "/professional-woman-in-business-outfit-pointing.webp",
  },
  {
    name: "Daniel Rivera",
    role: "Investment Strategy Lead, Real Estate Analytics",
    text: "The geo-location analytics and interactive data maps provided a level of insight we hadn’t seen before. It’s now a core part of how we evaluate markets and growth opportunities.",
    image: "/professional-man-suit.webp",
  },
  {
    name: "Emily Chen",
    role: "Product Operations Manager, Enterprise Software",
    text: "The interaction flow dashboards and benefits tracking views streamlined our internal reporting. Everything is intuitive, fast, and designed with decision-makers in mind.",
    image: "/professional-headshot.webp",
  },
  {
    name: "Marcus Lewis",
    role: "Head of Digital Transformation, Consulting Firm",
    text: "From animated data maps to advanced churn and transaction analytics, the portfolio work reflects a deep understanding of both business strategy and technical execution. Truly enterprise-grade delivery.",
    image: "/professional-team-working-together-with-laptop.webp",
  },
]


export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 px-6 bg-white" id="clients">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[42px] lg:text-5xl font-bold text-[#1a2332] mb-4">
            <span className="text-[#4a9ba5]">What They</span>
            <br />
            Saying About Us
          </h2>
          <p className="text-gray-600">
            Join with another customer and client satisfied with our service
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1.4,
              },
               800: {
                slidesPerView:2,
              },
               600: {
                slidesPerView:1,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="!pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#4a9ba5] rounded-tl-lg"></div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#4a9ba5] rounded-br-lg"></div>
                    
                      <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                        width={100}
                        height={100}
                         priority
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-[#4a9ba5]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-[14px] md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-2 md:mb-8 italic">
                        {testimonial.text}
                      </p>

                      <div className="w-16 h-0.5 bg-[#4a9ba5] mb-6"></div>

                      <div>
                        <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#1a2332] mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-[10px] md:text-sm lg:text-base text-gray-600 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="custom-pagination flex justify-center items-center gap-3 mt-8"></div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-6 mt-8"
          >
         
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        
        .swiper-pagination-bullet {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          width: 2rem;
          background-color: #4a9ba5;
          border-radius: 0.5rem;
        }
        
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .swiper-button-disabled:hover {
          background-color: white !important;
          color: #4a9ba5 !important;
        }
      `}</style>
    </section>
  )
}