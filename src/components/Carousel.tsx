"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  slides: { id: number; content: React.ReactNode, title: string, subtitle: string, description: string, caption: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // 🔹 Responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(2); // large screen → 2 slides
      } else {
        setSlidesPerView(1); // small/medium → 1 slide
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const totalPages = Math.ceil(slides.length / slidesPerView);

  const goToNext = () => {
    setCurrent((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const startIndex = current * slidesPerView;
  const visibleSlides = slides.slice(startIndex, startIndex + slidesPerView);

  return (
    <div className="w-full">
      {/* Slides */}
      <div className="relative h-64 flex gap-4 justify-center overflow-hidden rounded-xl brightness-95 xs:h-72 sm:h-80 md:h-96 xmd:h-100 lg:gap-8 xl:gap-12">
        <AnimatePresence mode="wait">
          {visibleSlides.map((slide) => (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative flex-1 flex items-center justify-center rounded-lg overflow-hidden xl:rounded-xl"
            >
              {/* Slide Content (Image, etc.) */}
              {slide.content}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-3 text-white md:p-5">
                {/* Caption */}
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[8px] font-bold [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.8)] shadow-black uppercase opacity-90 md:text-[10px] xl:text-xs"
                >
                  {slide.caption}
                </motion.h2>

                {/* Title (centered) */}
                <motion.h2
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-center [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.8)] shadow-black sm:text-4xl md:text-5xl xmd:text-6xl lg:text-5xl xl:text-6xl"
                >
                  {slide.title}
                </motion.h2>

                {/* Subtitle + Description + CTA (bottom) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid gap-2 sm:flex sm:items-center sm:justify-between"
                >
                  <div className="space-y-1 sm:w-88 lg:w-68 xl:w-94">
                    <h3 className="text-lg font-semibold [text-shadow:_0px_2px_2px_rgb(0_0_0_/_0.8)] md:text-xl lg:text-2xl">
                      {slide.subtitle}
                    </h3>
                    <p className="text-xs opacity-90 sm:text-sm">
                      {slide.description}
                    </p>
                  </div>
                  <div className=" md:flex md:justify-end">
                    <button className="text-xs font-semibold bg-white rounded-full text-black py-1 px-3 sm:text-sm sm:py-1.5 sm:mt-12 lg:mt-26 xl:mt-16">
                      Try WAN 2.2
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-2">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`size-2 rounded-full transition ${
                index === current ? "bg-gray-600 dark:bg-gray-500" : "bg-gray-300 dark:bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={goToPrev}
            className="bg-gray-300 text-black p-1.5 rounded-full shadow transition dark:text-white dark:bg-gray-500 text-sm"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={goToNext}
            className="bg-gray-300 text-black p-1.5 rounded-full shadow transition dark:text-white dark:bg-gray-500 text-sm"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
