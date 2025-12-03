"use client";

import { motion } from "framer-motion";
import { Users, Globe, Microscope, BookOpen } from "lucide-react";

const aboutCards = [
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Connecting researchers, clinicians, and industry leaders from around the world to advance liquid biopsy science."
  },
  {
    icon: Microscope,
    title: "Research Excellence",
    description: "Promoting high-quality research through shared protocols, standardization, and best practices."
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Bringing together leading experts in oncology, genomics, and diagnostic technologies."
  },
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description: "Facilitating the exchange of data, methodologies, and insights to accelerate discovery."
  }
];

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the Consortium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The International Liquid Biopsy Consortium is a collaborative network dedicated to advancing
            the field of liquid biopsy through shared research, standardization, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <card.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To accelerate the development and clinical implementation of liquid biopsy technologies
              through international collaboration, standardization of methodologies, and the sharing
              of scientific knowledge and resources. We aim to improve patient outcomes by making
              liquid biopsy testing more accessible, accurate, and clinically actionable worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}