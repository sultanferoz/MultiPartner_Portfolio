"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

const testimonials = [
  {
    name: "Gary Beagley",
    role: "CEO & Co-Founder RoofStock",
    text: "As the leading experts in single-family rentals, RoofStock has combined some of the smartest people in the business with robust data science",
    image: "/professional-man-headshot.png",
  },
  {
    name: "John Smith",
    role: "CEO, Property Co",
    text: "Amazing experience working with this team. They truly understand the real estate market and deliver results.",
    image: "/professional-headshot.png",
  },
  {
    name: "Gary",
    role: "Co-Founder RoofStock",
    text: "As the leading experts in single-family rentals, RoofStock has combined some of the smartest people in the business with robust data science",
    image: "/professional-man-suit.png",
  },
  {
    name: "Smith",
    role: "Property Co",
    text: "Amazing experience working with this team. They truly understand the real estate market and deliver results.",
    image: "/professional-woman-in-business-outfit-pointing.jpg",
  },
  {
    name: "Beagley",
    role: "Team of RoofStock",
    text: "As the leading experts in single-family rentals, RoofStock has combined some of the smartest people in the business with robust data science",
    image: "/professional-team-working-together-with-laptop.jpg",
  },
]

export default function TestimonialsSection() {
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
        <Swiper
          modules={[Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-[#f5f5f5] rounded-3xl p-8   transition-shadow h-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a2332]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="swiper-prev w-12 h-12 rounded-full bg-[#4a9ba5] text-white flex items-center justify-center hover:bg-[#3a8b95] transition-colors"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="swiper-next w-12 h-12 rounded-full bg-[#4a9ba5] text-white flex items-center justify-center hover:bg-[#3a8b95] transition-colors"
          >
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
