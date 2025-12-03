"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Users, Lightbulb } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Precision Medicine
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be part of a global movement that&apos;s revolutionizing cancer detection,
            monitoring, and treatment through innovative liquid biopsy technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Users,
              title: "Collaborate",
              description: "Work with world-class researchers and clinicians",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Lightbulb,
              title: "Innovate",
              description: "Access cutting-edge technologies and methodologies",
              color: "from-purple-500 to-pink-500"
            },
            {
              icon: Mail,
              title: "Share Knowledge",
              description: "Contribute to publications and research initiatives",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Phone,
              title: "Impact Lives",
              description: "Transform patient care through your research",
              color: "from-red-500 to-orange-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mb-4`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ready to Make a Difference?
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Join thousands of researchers, clinicians, and industry leaders who are
                  shaping the future of liquid biopsy technology. Together, we can
                  accelerate discoveries that save lives.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    Access to collaborative research networks
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Standardized protocols and best practices
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    Publication and conference opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Impact on global patient care
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <motion.div
                  className="space-y-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                    Join the Consortium
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="w-full border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-white/10">
                    Request Information
                  </button>
                </motion.div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-400 text-sm mb-2">Questions? Contact us:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                    <a href="mailto:info@liquidbiopsyconsortium.org" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-1" />
                      info@liquidbiopsyconsortium.org
                    </a>
                    <a href="tel:+1-555-0123" className="text-purple-400 hover:text-purple-300 transition-colors flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-1" />
                      +1 (555) 012-3456
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}