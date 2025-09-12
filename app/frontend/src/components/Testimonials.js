import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../mock';
import { Button } from './ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            What <span className="text-blue-600">Leaders</span> Say
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by engineering leaders and executives across top-tier technology companies
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-blue-600" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed text-center mb-8 font-light relative z-10">
              "{currentTestimonial.testimonial}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-slate-800">
                  {currentTestimonial.name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {currentTestimonial.title}
                </p>
                <p className="text-slate-500 text-sm">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="rounded-full p-3 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="rounded-full p-3 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
            >
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid (Hidden on Mobile) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border ${
                index === currentIndex ? 'border-blue-300 bg-blue-50/80' : 'border-gray-100'
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                "{testimonial.testimonial}"
              </p>
              <div className="flex mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Transform Your Architecture?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Join the leaders who trust me to architect their next-generation systems and drive enterprise innovation.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start the Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;