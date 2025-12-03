"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, FileText, Globe } from "lucide-react";
import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-blue-600">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const impactMetrics = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Member Institutions",
    description: "Research centers and hospitals worldwide"
  },
  {
    icon: Globe,
    value: 35,
    suffix: "+",
    label: "Countries Represented",
    description: "Global reach across all continents"
  },
  {
    icon: FileText,
    value: 500,
    suffix: "+",
    label: "Research Publications",
    description: "Peer-reviewed articles and studies"
  },
  {
    icon: TrendingUp,
    value: 25000,
    suffix: "+",
    label: "Patients Impacted",
    description: "Lives improved through our research"
  }
];

export default function Impact() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Global Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we are transforming the landscape of liquid biopsy research
            and making a tangible difference in patient care worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                <metric.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <div className="mb-2">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {metric.label}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Driving Innovation Forward
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our collaborative efforts have led to breakthrough discoveries in liquid biopsy
                technologies, standardized protocols, and clinical implementations that benefit
                patients globally. We continue to push the boundaries of what&apos;s possible in
                precision medicine.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-600 font-semibold">Clinical Trials</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-green-600 font-semibold">Regulatory Approval</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-full">
                  <span className="text-purple-600 font-semibold">Technology Transfer</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Next Milestone
                </h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">1M+</p>
                <p className="text-gray-600">Patients to be impacted by 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}