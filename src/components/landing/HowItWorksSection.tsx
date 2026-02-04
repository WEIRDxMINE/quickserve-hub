import { motion } from "framer-motion";
import { Search, CalendarCheck, UserCheck, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search & Select",
    description: "Browse our wide range of services and choose what you need. Filter by ratings, price, and availability.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Book & Schedule",
    description: "Pick a convenient time slot and provide your address. Add notes and images if needed.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Get Matched",
    description: "Our AI matches you with the best available professional based on skills, location, and ratings.",
  },
  {
    icon: Star,
    step: "04",
    title: "Rate & Review",
    description: "After service completion, rate your experience and help others make informed decisions.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="trust-badge mb-4">Simple Process</span>
          <h2 className="section-title mt-4 mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Getting help for your home has never been easier. 
            Book a service in less than 60 seconds.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Step Card */}
                <div className="text-center lg:text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-flex mb-6">
                    <motion.div
                      className="w-20 h-20 rounded-2xl hero-gradient flex items-center justify-center shadow-glow"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-9 h-9 text-primary-foreground" />
                    </motion.div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-secondary-foreground shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary-hover text-secondary-foreground font-semibold rounded-xl shadow-cta cta-glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your First Service
          </motion.button>
          <p className="text-sm text-muted-foreground mt-4">
            No registration required • Pay after service
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
