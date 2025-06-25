
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your AI-powered journey today and discover personalized pathways to professional success
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/ai-assessment")}
            >
              Begin Your Assessment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-lg"
              onClick={() => navigate("/contact")}
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Journey?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of learners, professionals, and organizations already growing with Gurukul Code
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate("/get-started")}
              >
                Start Free Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg"
                onClick={() => navigate("/contact")}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
