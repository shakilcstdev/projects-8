import React from 'react';
import { useLoaderData } from 'react-router';

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="bg-[#0F0F0F0D] rounded-xl md:px-[60px] px-[20px] py-[30px] md:py-[70px] flex flex-col gap-4 mb-12">
        <h1 className="text-[28px] font-[700] text-center text-gray-900">
          Legal Knowledge Hub
        </h1>
        <p className="text-center md:w-[70%] mx-auto text-gray-600 font-[400]">
          Explore our collection of insightful articles and expert opinions on various legal topics.
          Stay informed about the latest developments in law and legal technology.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid gap-8">
        {blogs.map((blog, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-[#0EA106] transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <h2 className="text-[22px] font-[600] text-gray-900 flex-1">
                  {blog.question}
                </h2>
                <span className="text-[14px] text-gray-500 whitespace-nowrap ml-4">
                  {new Date(blog.upload_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {blog.answer}
              </p>

              <div className="flex gap-2 mt-2">
                <span className="text-[#0EA106] text-[12px] bg-[#0EA1061A] py-1 px-3 rounded-full">
                  React
                </span>
                <span className="text-[#176AE5] text-[12px] bg-[#176AE51A] py-1 px-3 rounded-full">
                  Development
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-[#0F0F0F0D] rounded-xl p-8 text-center">
        <h3 className="text-[24px] font-[600] text-gray-900 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 mb-6 md:w-[70%] mx-auto">
          Stay updated with our latest legal insights and news. We'll send you valuable information right to your inbox.
        </p>
        <div className="flex gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:border-[#0EA106]"
          />
          <button className="px-6 py-2 bg-[#0EA106] hover:bg-white hover:text-[#0EA106] text-white rounded-3xl border border-[#0EA106] font-[500] transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;