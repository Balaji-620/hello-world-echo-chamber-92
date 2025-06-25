
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Database, BarChart, Monitor, TrendingUp, Link } from "lucide-react";

export function InfrastructureSection() {
  const features = [
    {
      icon: Shield,
      title: "LLM Foundation",
      description: "Self-hosted GPT-4-class models",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Database,
      title: "AI Agent System",
      description: "LangChain, LangGraph",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: BarChart,
      title: "RAG Engine",
      description: "Pinecone + memory stores",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Monitor,
      title: "UI/Delivery",
      description: "React-based apps, chatbot UIs",
      gradient: "from-orange-400 to-yellow-500"
    },
    {
      icon: TrendingUp,
      title: "Monitoring",
      description: "LangSmith, Grafana, Slack",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: Link,
      title: "Integration",
      description: "LMS, CRM, ERP-ready",
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  const stats = [
    {
      value: "99.9%",
      label: "Uptime Guarantee"
    },
    {
      value: "< 200ms",
      label: "Average Response Time"
    },
    {
      value: "SOC 2",
      label: "Security Compliance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built with Future-Focused AI Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enterprise-grade technology stack designed for scale, security, and performance
          </p>
          
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
            <span className="text-yellow-400 mr-2">🔒</span>
            <span className="text-gray-300 font-medium">Your data. Your control. Your custom agents.</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Partner With Gurukul Code
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
