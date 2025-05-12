"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "Schedulo has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
    author: "Sarah Johnson",
    role: "Team Lead at TechCorp"
  },
  {
    quote: "As a freelancer, Schedulo helps me stay organized and professional. My clients love how easy it is to book time with me.",
    author: "Michael Chen",
    role: "Independent Consultant"
  },
  {
    quote: "Schedulo streamlined our hiring process. Setting up interviews has never been easier!",
    author: "Emily Rodriguez",
    role: "HR Director"
  },
  {
    quote: "I've seen a 30% increase in my meeting bookings since using Schedulo. It's a game-changer for sales professionals.",
    author: "David Kim",
    role: "Sales Manager"
  }
];

const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialsCarousel;
