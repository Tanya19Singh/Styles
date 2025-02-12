import React from 'react';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';
import { blogs } from '../data/fashionData';

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bodoni text-custom-pink">Fashion Insights</h2>
            <p className="text-gray-600 mt-2">Latest stories from the world of Indian fashion</p>
          </div>
          <BookOpen className="h-8 w-8 text-custom-blue" />
        </div>

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <article key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-2/5 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    style={{ minHeight: '300px' }}
                  />
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'}`}>
                    <span className="px-3 py-1 bg-custom-pink text-white text-sm rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between bg-custom-blue bg-opacity-10">
                  <div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bodoni text-custom-pink mb-4">{blog.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">{blog.excerpt}</p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-custom-blue border-opacity-20 pt-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-custom-pink bg-opacity-10 flex items-center justify-center">
                          <span className="text-custom-pink font-bodoni text-lg">
                            {blog.author.split(' ')[0][0]}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-bodoni text-custom-pink">{blog.author}</p>
                        <p className="text-sm text-gray-500">Fashion Writer</p>
                      </div>
                    </div>
                    <button className="inline-flex items-center text-custom-blue hover:text-custom-pink font-medium transition-colors">
                      Read Full Article
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}