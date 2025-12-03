"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Calendar, Users2 } from "lucide-react";

const publications = [
  {
    title: "Standardization of Circulating Tumor DNA Analysis: A Multi-Center Study",
    authors: "Johnson, M., Smith, A., Chen, L., et al.",
    journal: "Nature Medicine",
    year: "2024",
    impact: "High Impact",
    type: "Research Article",
    abstract: "This comprehensive study establishes standardized protocols for ctDNA analysis across multiple institutions, improving reproducibility and clinical utility."
  },
  {
    title: "Machine Learning Approaches for Liquid Biopsy Data Analysis",
    authors: "Rodriguez, C., Kumar, S., Thompson, R., et al.",
    journal: "Cell Reports",
    year: "2024",
    impact: "High Impact",
    type: "Review",
    abstract: "A systematic review of machine learning applications in liquid biopsy research, highlighting current achievements and future directions."
  },
  {
    title: "Global Perspectives on Liquid Biopsy Implementation in Clinical Practice",
    authors: "International Liquid Biopsy Consortium",
    journal: "The Lancet Oncology",
    year: "2023",
    impact: "Very High Impact",
    type: "Perspective",
    abstract: "An international consensus on best practices for implementing liquid biopsy technologies in diverse healthcare settings."
  },
  {
    title: "Extracellular Vesicle Biomarkers for Early Cancer Detection",
    authors: "Park, J., Williams, D., Anderson, K., et al.",
    journal: "Science Translational Medicine",
    year: "2023",
    impact: "High Impact",
    type: "Research Article",
    abstract: "Identification of novel extracellular vesicle biomarkers that enable early detection of multiple cancer types with high sensitivity and specificity."
  }
];

const upcomingEvents = [
  {
    title: "Annual Liquid Biopsy Symposium 2024",
    date: "March 15-17, 2024",
    location: "Boston, MA",
    type: "Conference"
  },
  {
    title: "Webinar: AI in Liquid Biopsy Analysis",
    date: "February 28, 2024",
    location: "Virtual",
    type: "Webinar"
  },
  {
    title: "Workshop: Standardization Protocols",
    date: "April 10-12, 2024",
    location: "London, UK",
    type: "Workshop"
  }
];

export default function Publications() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Publications & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest research findings, publications, and upcoming
            events from our global consortium members.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Publications */}
          <div className="lg:col-span-2">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                Recent Publications
              </h3>
            </motion.div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-blue-600 font-medium">{pub.journal}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{pub.year}</span>
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">
                      {pub.impact}
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                      {pub.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pub.abstract}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View All Publications
              </button>
            </motion.div>
          </div>

          {/* Upcoming Events */}
          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                Upcoming Events
              </h3>
            </motion.div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                      {event.type}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h4>
                  
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <Users2 className="w-4 h-4 mr-2" />
                      {event.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-lg font-semibold transition-all duration-300">
                View All Events
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}