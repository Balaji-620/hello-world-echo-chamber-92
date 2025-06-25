
import { motion } from "framer-motion";
import { GraduationCap, Users, Building, Briefcase, Calculator, Lightbulb } from "lucide-react";

export function WhoIsItForSection() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students & Early Professionals",
      description: "Discover your path, build job-ready skills, and launch your career with AI-powered guidance.",
      features: [
        "Career discovery",
        "Skill acceleration",
        "Job preparation",
        "Mentorship matching"
      ],
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Mid-Career Switchers",
      description: "Navigate career transitions confidently with personalized upskilling and role simulations.",
      features: [
        "Transition planning",
        "Skills gap analysis",
        "Role simulations",
        "Portfolio building"
      ],
      bgColor: "bg-green-50",
      iconColor: "bg-green-500"
    },
    {
      icon: Building,
      title: "EdTech & HR Institutions",
      description: "Enhance your programs with AI-powered career services and student success tools.",
      features: [
        "White-label platform",
        "Student analytics",
        "Employer partnerships",
        "Outcome tracking"
      ],
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-500"
    },
    {
      icon: Calculator,
      title: "Enterprise Leaders",
      description: "Transform workforce development with intelligent L&D and internal mobility solutions.",
      features: [
        "Talent pipeline",
        "Skills mapping",
        "Succession planning",
        "Performance insights"
      ],
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-500"
    },
    {
      icon: Briefcase,
      title: "Freelancers & Consultants",
      description: "Scale your expertise and build authority with AI-powered content and client tools.",
      features: [
        "Personal branding",
        "Client acquisition",
        "Service optimization",
        "Market intelligence"
      ],
      bgColor: "bg-teal-50",
      iconColor: "bg-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Founders & VCs",
      description: "Make smarter investment and hiring decisions with comprehensive talent intelligence.",
      features: [
        "Talent evaluation",
        "Market insights",
        "Investment analysis",
        "Due diligence"
      ],
      bgColor: "bg-indigo-50",
      iconColor: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who Is It For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gurukul Code serves diverse communities united by a shared vision: intelligent, 
            purpose-driven growth in the age of AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              className={`${audience.bgColor} rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${audience.iconColor} rounded-xl flex items-center justify-center mb-6`}>
                <audience.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {audience.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {audience.description}
              </p>
              
              <ul className="space-y-2">
                {audience.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
