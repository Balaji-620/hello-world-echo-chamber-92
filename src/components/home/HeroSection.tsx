
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function HeroSection() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-slate-800/50"></div>
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              GURUKUL
            </h1>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                CODE
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The AI-Powered Career & Domain Intelligence Ecosystem
          </motion.p>

          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Equip every learner, professional, and institution with context-aware, 
            adaptable, and continuously intelligent systems to grow — meaningfully, 
            ethically, and sustainably.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { icon: "⚙️", text: "AI-Native" },
              { icon: "⚙️", text: "Personalized" },
              { icon: "⚙️", text: "Future-Ready" },
              { icon: "⚙️", text: "Ethical" }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
                <span className="mr-2">{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/get-started")}
            >
              Start My Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-gray-400 border-none outline-none w-64"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
