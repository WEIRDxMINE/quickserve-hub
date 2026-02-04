import { motion } from "framer-motion";
import {
  Sparkles,
  Wrench,
  Zap,
  Paintbrush,
  Wind,
  ShowerHead,
  Home,
  Hammer,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Cleaning",
    description: "Deep cleaning, regular maintenance, and sanitization",
    color: "from-teal-500 to-emerald-500",
    popular: true,
  },
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Leaks, installations, and drainage solutions",
    color: "from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, repairs, and safety inspections",
    color: "from-amber-500 to-orange-500",
    popular: true,
  },
  {
    icon: Wind,
    title: "AC Services",
    description: "Installation, repair, and maintenance",
    color: "from-sky-500 to-blue-500",
    popular: true,
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior, exterior, and decorative painting",
    color: "from-purple-500 to-pink-500",
    popular: false,
  },
  {
    icon: ShowerHead,
    title: "Bathroom",
    description: "Fitting, fixtures, and renovations",
    color: "from-indigo-500 to-purple-500",
    popular: false,
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Furniture repair and custom woodwork",
    color: "from-orange-500 to-red-500",
    popular: false,
  },
  {
    icon: Home,
    title: "Home Repair",
    description: "General maintenance and repairs",
    color: "from-green-500 to-teal-500",
    popular: false,
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="trust-badge mb-4">Our Services</span>
          <h2 className="section-title mt-4 mb-4">
            Everything Your Home Needs
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From routine maintenance to emergency repairs, our verified professionals 
            have got you covered with quality service guaranteed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="service-card h-full cursor-pointer">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`service-card-icon mb-4 bg-gradient-to-br ${service.color}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary-hover transition-colors">
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 text-primary font-medium hover:bg-primary/5 rounded-full transition-colors">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
