import { motion } from "framer-motion";
import { Shield, Award, Clock, CreditCard, Headphones, RefreshCcw } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "Every service provider undergoes thorough background checks and skill verification.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Not satisfied? We'll send another professional or refund your money.",
  },
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Real-time tracking and punctuality guaranteed with live updates.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. See the full price breakdown before you book.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer support team is always ready to help you.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Rescheduling",
    description: "Plans changed? Reschedule or cancel anytime with no hassle.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="trust-badge mb-4">Why Choose Us</span>
          <h2 className="section-title mt-4 mb-4">
            Built on <span className="text-gradient">Trust</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We prioritize your safety and satisfaction with every service. 
            Here's what makes NagarSheba different.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
