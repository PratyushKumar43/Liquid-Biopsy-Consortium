"use client";

import { motion } from "framer-motion";
import { Building, MapPin, Users, Globe } from "lucide-react";
import Image from "next/image";

const consortiumMembers = [
  {
    name: "MD Anderson Cancer Center",
    location: "Houston, TX, USA",
    type: "Academic Medical Center",
    members: 45,
    specialties: ["Oncology", "Genomics", "Clinical Research"],
    logo: "https://via.placeholder.com/80x80/3B82F6/white?text=MD"
  },
  {
    name: "European Institute of Oncology",
    location: "Milan, Italy",
    type: "Research Institute",
    members: 32,
    specialties: ["Precision Medicine", "Biomarkers", "Drug Development"],
    logo: "https://via.placeholder.com/80x80/10B981/white?text=EIO"
  },
  {
    name: "National Cancer Centre Singapore",
    location: "Singapore",
    type: "National Cancer Center",
    members: 28,
    specialties: ["Liquid Biopsy", "Molecular Diagnostics", "Personalized Therapy"],
    logo: "https://via.placeholder.com/80x80/8B5CF6/white?text=NCC"
  },
  {
    name: "Karolinska Institutet",
    location: "Stockholm, Sweden",
    type: "Medical University",
    members: 38,
    specialties: ["Clinical Research", "Biostatistics", "Translational Medicine"],
    logo: "https://via.placeholder.com/80x80/EF4444/white?text=KI"
  },
  {
    name: "University of Tokyo Hospital",
    location: "Tokyo, Japan",
    type: "University Hospital",
    members: 25,
    specialties: ["Hematology", "Solid Tumors", "Immunotherapy"],
    logo: "https://via.placeholder.com/80x80/F59E0B/white?text=UT"
  },
  {
    name: "Institut Curie",
    location: "Paris, France",
    type: "Cancer Research Center",
    members: 42,
    specialties: ["Basic Research", "Clinical Trials", "Technology Development"],
    logo: "https://via.placeholder.com/80x80/06B6D4/white?text=IC"
  }
];

const regions = [
  { name: "North America", members: 45, color: "from-blue-500 to-blue-600" },
  { name: "Europe", members: 78, color: "from-green-500 to-green-600" },
  { name: "Asia-Pacific", members: 52, color: "from-purple-500 to-purple-600" },
  { name: "South America", members: 18, color: "from-red-500 to-red-600" },
  { name: "Africa", members: 12, color: "from-yellow-500 to-yellow-600" },
  { name: "Middle East", members: 15, color: "from-indigo-500 to-indigo-600" }
];

export default function Consortium() {
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
            Consortium Members
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our global network consists of leading research institutions, hospitals,
            and industry partners working together to advance liquid biopsy science.
          </p>
        </motion.div>

        {/* Regional Distribution */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Globe className="w-6 h-6 mr-3 text-blue-600" />
            Global Reach
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${region.color} mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{region.members}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{region.name}</h4>
                <p className="text-gray-600 text-sm">Member Institutions</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Building className="w-6 h-6 mr-3 text-blue-600" />
            Featured Member Institutions
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consortiumMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={member.logo}
                    alt={`${member.name} logo`}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {member.location}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {member.type}
                    </span>
                    <span className="text-gray-600 text-sm flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {member.members} members
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Specialties:</h5>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Become part of the world&apos;s largest liquid biopsy research consortium.
              Collaborate with leading experts, access cutting-edge resources, and
              contribute to advancing precision medicine globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Apply for Membership
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn More About Benefits
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}