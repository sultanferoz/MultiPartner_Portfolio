"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "Gary Beasley",
    role: "CEO & Co-Founder Roofstock",
    text: "As the leading experts in single-family rentals, Roofstock has combined some of the smartest people in the business with robust data science",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Sarah Johnson",
    role: "Director of Real Estate",
    text: "Their market insights helped us achieve record growth. The team's expertise in data analytics is truly exceptional.",
    image: "/professional-woman-in-business-outfit-pointing.jpg",
  },
  {
    name: "Michael Chen",
    role: "Investment Manager",
    text: "Working with this team transformed our investment strategy. Their data-driven approach delivers consistent results.",
    image: "/professional-man-suit.png",
  },
  {
    name: "Jessica Williams",
    role: "Portfolio Director",
    text: "The combination of expert knowledge and advanced data science gave us a significant competitive advantage.",
    image: "/professional-headshot.png",
  },
  {
    name: "David Rodriguez",
    role: "Acquisitions Lead",
    text: "Outstanding service and insights. Their platform has become an essential tool for our investment decisions.",
    image: "/professional-team-working-together-with-laptop.jpg",
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
          <h2 className="text-5xl font-bold text-[#1a2332] mb-4">
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
                slidesPerView: 1.2,
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
                    {/* Left: Image with decorative border */}
                    <div className="relative">
                      {/* Decorative border elements */}
                      <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#4a9ba5] rounded-tl-lg"></div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#4a9ba5] rounded-br-lg"></div>
                      
                      {/* Image container */}
                      <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="flex-1">
                      {/* Quote icon */}
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-[#4a9ba5]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Testimonial text */}
                      <p className="text-lg lg:text-xl text-gray-800 leading-relaxed mb-8 italic">
                        {testimonial.text}
                      </p>

                      {/* Divider */}
                      <div className="w-16 h-0.5 bg-[#4a9ba5] mb-6"></div>

                      {/* Name and role */}
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#1a2332] mb-2">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm lg:text-base text-gray-600 font-medium">
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

          {/* Custom Navigation Buttons */}
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

      {/* Custom CSS for Swiper */}
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