
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Briefcase } from "lucide-react";

export function PlatformsSection() {
  const platforms = [
    {
      icon: Users,
      title: "Career Development",
      subtitle: "AI-Powered Career Operating System",
      description: "Transform your career with personalized AI guidance, skill assessments, and intelligent mentorship matching.",
      features: [
        "Self-Discovery Engine",
        "AI Career Assistant",
        "Skill Accelerator",
        "Job-Ready Toolkit"
      ],
      gradient: "from-orange-400 to-pink-400"
    },
    {
      icon: BookOpen,
      title: "FinCode",
      subtitle: "Finance Intelligence Platform",
      description: "Complete finance ecosystem with AI agents, education, and automation for professionals and institutions.",
      features: [
        "AI Agent Suite",
        "EdTech Programs",
        "CFO-as-a-Service",
        "Robo-Advisory Engine"
      ],
      gradient: "from-orange-400 to-pink-400"
    },
    {
      icon: Briefcase,
      title: "Let's Advance",
      subtitle: "Content Creation & Community Network",
      description: "Raw, relatable content and collaborative programs that bridge career confusion with career clarity.",
      features: [
        "Multi-Format Content",
        "Community Programs",
        "Career Truth Stories",
        "Innovation Labs"
      ],
      gradient: "from-orange-400 to-pink-400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive AI-Driven Career Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Three interconnected platforms designed to accelerate your professional 
            journey through intelligent, personalized experiences
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <span className="text-orange-500">🚀</span>
            <span className="font-medium">Purpose-driven growth powered by ethical AI</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${platform.gradient} flex items-center justify-center mb-6`}>
                <platform.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {platform.title}
              </h3>
              
              <p className="text-lg text-blue-600 font-medium mb-4">
                {platform.subtitle}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {platform.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {platform.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="link" 
                className="text-orange-500 hover:text-orange-600 p-0 h-auto font-semibold"
              >
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
