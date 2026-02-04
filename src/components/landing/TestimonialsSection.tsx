import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Rahman",
    location: "Gulshan, Dhaka",
    rating: 5,
    text: "NagarSheba has been a lifesaver! The AC technician arrived within 30 minutes and fixed my unit perfectly. Highly professional service.",
    service: "AC Repair",
    avatar: "FR",
  },
  {
    name: "Karim Ahmed",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    text: "I've used their cleaning service multiple times. Always on time, thorough, and very reasonably priced. My go-to for home services now!",
    service: "Home Cleaning",
    avatar: "KA",
  },
  {
    name: "Nusrat Jahan",
    location: "Uttara, Dhaka",
    rating: 5,
    text: "The plumber fixed a major leak that other companies couldn't figure out. Fair pricing and excellent communication throughout.",
    service: "Plumbing",
    avatar: "NJ",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="trust-badge mb-4">Customer Stories</span>
          <h2 className="section-title mt-4 mb-4">
            What Our Customers Say
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust NagarSheba 
            for their home service needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md border border-border h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center shadow-glow">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 p-8 rounded-2xl hero-gradient shadow-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100K+", label: "Happy Customers" },
              { value: "10K+", label: "Verified Pros" },
              { value: "500K+", label: "Services Completed" },
              { value: "4.8", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
