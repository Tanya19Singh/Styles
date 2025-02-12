import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { trends } from '../data/fashionData';

export default function TrendingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotateLeft = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? trends.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const rotateRight = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === trends.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(rotateRight, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + trends.length) % trends.length;
    const angles = {
      0: 'translate(-50%, -50%) scale(1)',
      1: 'translate(0%, -50%) scale(0.85)',
      2: 'translate(25%, -50%) scale(0.7)',
      3: 'translate(25%, -50%) scale(0.7)',
      4: 'translate(-125%, -50%) scale(0.7)',
    };
    const opacities = {
      0: '1',
      1: '0.7',
      2: '0.5',
      3: '0.3',
      4: '0.3',
    };
    const zIndexes = {
      0: '30',
      1: '20',
      2: '10',
      3: '5',
      4: '5',
    };

    return {
      transform: angles[diff as keyof typeof angles],
      opacity: opacities[diff as keyof typeof opacities],
      zIndex: zIndexes[diff as keyof typeof zIndexes],
    };
  };

  return (
    <section id="trends" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bodoni text-custom-pink">Trending Now</h2>
            <p className="text-gray-600 mt-2">Discover what's hot in Indian fashion</p>
          </div>
          <TrendingUp className="h-8 w-8 text-custom-blue" />
        </div>

        <div className="relative h-[600px] mt-20">
          {/* Navigation Buttons */}
          <button
            onClick={rotateLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow-lg text-custom-pink hover:text-custom-blue transition-colors"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={rotateRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white p-3 rounded-full shadow-lg text-custom-pink hover:text-custom-blue transition-colors"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full">
            {trends.map((trend, index) => (
              <div
                key={trend.id}
                className="absolute left-1/2 top-1/2 w-[400px] transition-all duration-500 cursor-pointer"
                style={getCardStyle(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={trend.image}
                      alt={trend.title}
                      className="object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-custom-pink text-white text-xs rounded-full">
                        {trend.category}
                      </span>
                      <span className="px-2 py-1 bg-custom-blue text-white text-xs rounded-full">
                        {trend.season}
                      </span>
                      <div className="flex items-center px-2 py-1 bg-red-500/80 text-white text-xs rounded-full">
                        <Flame className="w-3 h-3 mr-1" />
                        {trend.popularity}%
                      </div>
                    </div>
                    <h3 className="text-xl font-bodoni text-white mb-2">{trend.title}</h3>
                    <p className="text-gray-200 text-sm">{trend.description}</p>
                    <button className="mt-4 inline-flex items-center text-white hover:text-custom-pink transition-colors">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}