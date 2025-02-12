import React, { useEffect, useRef, useState } from 'react';
import { Users, MessageCircle, Heart, Tag } from 'lucide-react';
import { discussions } from '../data/fashionData';

export default function CommunitySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const scroll = () => {
      if (!scrollRef.current || isPaused) return;
      scrollRef.current.scrollLeft += 1;
      
      if (
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      ) {
        scrollRef.current.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section id="community" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bodoni text-custom-pink">Join the Conversation</h2>
            <p className="text-gray-600 mt-2">Connect with fashion enthusiasts across India</p>
          </div>
          <Users className="h-8 w-8 text-custom-blue" />
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden whitespace-nowrap"
          style={{ scrollBehavior: 'smooth' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setHoveredIndex(null);
          }}
        >
          {/* Duplicate discussions for infinite scroll effect */}
          {[...discussions, ...discussions, ...discussions].map((discussion, index) => (
            <div
              key={`${discussion.id}-${index}`}
              className="min-w-[400px] bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              style={{
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-custom-pink bg-opacity-10 flex items-center justify-center">
                  <span className="text-custom-pink font-bodoni">{discussion.avatar}</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bodoni text-custom-pink">{discussion.user}</p>
                  <p className="text-xs text-gray-500">Fashion Enthusiast</p>
                </div>
              </div>
              <h3 className="text-lg font-bodoni text-custom-pink mb-2">{discussion.topic}</h3>
              <p className="text-gray-600 text-sm mb-4 whitespace-normal">{discussion.content}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {discussion.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-custom-blue bg-opacity-10 text-custom-blue"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>{discussion.likes} likes</span>
                  </div>
                </div>
                <button className="text-custom-pink hover:text-custom-blue font-bodoni transition-colors">
                  Join Discussion
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}