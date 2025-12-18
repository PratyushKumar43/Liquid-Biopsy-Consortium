/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Faculty = {
  name: string;
  country: string;
  position: string;
  primaryFocus: string;
  keyAreas: string;
  achievements: string;
  scholarUrl: string;
  photoUrl?: string;
};

// Helper function to convert name to photo filename (matching the slugified format)
function getNameToPhotoPath(name: string): string | null {
  const nameToPhoto: Record<string, string> = {
    "Earu Banoth": "/faculty_photos/earu_banoth.jpg",
    "Rupa Haldavnekar": "/faculty_photos/rupa_haldavnekar.jpg",
    "Bala Chakravarthy Neelapu": "/faculty_photos/bala_chakravarthy_neelapu.jpg",
    "Ayyappasamy Sudalaiyadum Perumal": "/faculty_photos/ayyappasamy_sudalaiyadum_perumal.jpg",
    "Dan V Nicolau": "/faculty_photos/dan_v_nicolau.jpg",
    "Amrita Singh": "/faculty_photos/amrita_singh.jpg",
    "Prasoon Kumar": "/faculty_photos/prasoon_kumar.jpg",
    "Dan Nicolau Jr": "/faculty_photos/dan_nicolau_jr.jpg",
    "Pallavi Shukla": "/faculty_photos/pallavi_shukla.jpg",
    "Jeffery Zuccato": "/faculty_photos/jeffery_zuccato.jpg",
  };
  return nameToPhoto[name] || null;
}

const facultyList: Faculty[] = [
  {
    name: "Earu Banoth",
    country: "India",
    position: "Assistant Professor, NIT Rourkela",
    primaryFocus: "Biomedical Instrumentation",
    keyAreas:
      "Opto-Microfluidics, Flow-Cytometry, Point-of-Care Diagnostics, Medical Devices",
    achievements:
      "Microfluidic Absorption Flow-Cytometer, AI-Enabled Autofocusing Microscope for Disease Detection, SERB Funded Projects",
    scholarUrl:
      "https://scholar.google.com/citations?user=67YLjwsAAAAJ&hl=en",
  },
  {
    name: "Rupa Haldavnekar",
    country: "USA",
    position: "Assistant Professor, University of Oklahoma",
    primaryFocus: "Biomedical Engineering & Nanotechnology",
    keyAreas:
      "SERS-ML Liquid Biopsy, Cancer Detection, Nano-material Design, Machine Learning",
    achievements:
      "Cancer Stem Cell Analysis, Liquid Biopsy Platform for Early Cancer Diagnosis, Raman Spectroscopy Research",
    scholarUrl:
      "https://scholar.google.com/citations?user=1wHT0XEAAAAJ&hl=en",
  },
  {
    name: "Deeptha Ishwar",
    country: "Canada",
    position: "Faculty, University of Montreal, I-BEST Toronto",
    primaryFocus: "Biomedical Engineering",
    keyAreas:
      "Molecular Biology, Cancer Research, Breast Tumor Analysis, Biomarkers",
    achievements:
      "Profiling Breast Tumor Heterogeneity, Cell Characterization, DNA Methylation Studies",
    scholarUrl:
      "https://scholar.google.com/citations?hl=en&user=YOUR_ID",
  },
  {
    name: "Bala Chakravarthy Neelapu",
    country: "India",
    position: "Assistant Professor, NIT Rourkela",
    primaryFocus: "Medical Image Processing & Deep Learning",
    keyAreas:
      "ECG Analysis, Sleep Apnea Detection, AI in Medical Imaging, Deep Learning Models",
    achievements:
      "Cephalometric Landmark Detection, Kidney Stone Detection, Atrial Fibrillation Classification, 1175+ Citations",
    scholarUrl:
      "https://scholar.google.com/citations?user=BPxEzosAAAAJ&hl=en",
  },
  {
    name: "Ayyappasamy Sudalaiyadum Perumal",
    country: "Canada",
    position: "Faculty Lecturer, McGill University",
    primaryFocus: "Bioengineering & Nanotechnology",
    keyAreas:
      "Bio-inspired Information, Biological System Repurposing, Interdisciplinary Research",
    achievements:
      "Novel Biodevices Development, Cutting-edge Nanotechnology Applications",
    scholarUrl:
      "https://scholar.google.co.in/citations?user=TCxqu5gAAAAJ&hl=en",
  },
  {
    name: "Annie Shuk-On-Leung",
    country: "Canada",
    position: "Assistant Professor, McGill University",
    primaryFocus: "Gynecologic Oncology & Cancer Research",
    keyAreas:
      "Cervical Cancer Biomarkers, Circulating Tumor DNA, Cancer Detection",
    achievements:
      "Protein Marker Detection, ctDNA Analysis, Translational Laboratory, Cancer Prevention Research",
    scholarUrl:
      "https://scholar.google.com/citations?user=r7bqMBoAAAAJ&hl=en",
  },
  {
    name: "Dan V Nicolau",
    country: "Canada",
    position: "Professor, McGill University",
    primaryFocus: "Bioengineering & Computational Biology",
    keyAreas:
      "Hybrid Nanodevices, Motor Protein Dynamics, Lab-on-Chip, Biosensors",
    achievements:
      "Molecular Motors Research, Smart Micro/Nano-surfaces, High-throughput Screening, 5250+ Citations",
    scholarUrl:
      "https://scholar.google.com/citations?user=3VOTDtkAAAAJ&hl=en",
  },
  {
    name: "Chamundeeswari G",
    country: "India",
    position: "Dean, Saveetha Engineering College",
    primaryFocus: "Pattern Recognition & Image Processing",
    keyAreas:
      "Gesture Recognition, Image Fusion, Trajectory Data Mining, Deep Learning",
    achievements:
      "Hand Gesture Recognition for HMI, Mineral Deposit Mapping, Road Surveillance Systems, 345+ Citations",
    scholarUrl:
      "https://scholar.google.com/citations?user=dN3LBYIAAAAJ&hl=en",
  },
  {
    name: "Amrita Singh",
    country: "India",
    position: "Assistant Professor, NIT Rourkela",
    primaryFocus: "Computer Vision & Deep Learning",
    keyAreas:
      "Biomedical Image Analysis, Scale-Invariant Object Detection, Point Cloud Analysis, Self-Supervised Learning",
    achievements:
      "Virus Patch Detection, 3D Scene Understanding, Weakly Supervised Learning, Deep Learning Models, 956+ Citations",
    scholarUrl:
      "https://scholar.google.com/citations?user=1Dmb9mgAAAAJ&hl=en",
  },
  {
    name: "Prasoon Kumar",
    country: "India",
    position: "Assistant Professor, NIT Rourkela",
    primaryFocus: "Biomedical Device Engineering",
    keyAreas:
      "Microfluidic Devices, Blood Microsampling, Molecular Diagnostics, Innovative Medical Solutions",
    achievements:
      "Blood Microsampler Development, BIRAC Funding, SIDBI Startup Award, Patent Holder",
    scholarUrl:
      "https://scholar.google.com/citations?user=t6k-34sAAAAJ&hl=en",
  },
  {
    name: "Dan Nicolau Jr",
    country: "UK",
    position: "Professor, King's College London",
    primaryFocus: "Mathematical Biology & AI",
    keyAreas:
      "Immune Network Computation, Disease Mathematics, Inflammation Modeling, Complex Biological Systems",
    achievements:
      "Immune System Modeling, AI in Medicine, Mathematical Approaches to Biology",
    scholarUrl:
      "https://scholar.google.com/citations?user=MZ7P15YAAAAJ&hl=en",
  },
  {
    name: "Varun Soria",
    country: "India",
    position: "Tech Industry Researcher",
    primaryFocus: "Machine Learning & Security",
    keyAreas:
      "Federated Learning, Neural Program Synthesis, Computer Vision, Privacy-Preserving ML",
    achievements:
      "Leading Federated Learning at OpenMined, UC Berkeley Research Scholar, IIT Kanpur Graduate",
    scholarUrl:
      "https://scholar.google.com/scholar?q=Varun+Soria+researcher",
  },
  {
    name: "Pallavi Shukla",
    country: "India",
    position: "Associate Professor, AIIMS New Delhi",
    primaryFocus: "Public Health & Cancer Prevention",
    keyAreas:
      "Cancer Epidemiology, Non-Communicable Diseases, Screening Programs, Health Promotion",
    achievements:
      "Cancer Care Research, Preventive Oncology, Visual Impairment Research, National Health Programs",
    scholarUrl:
      "https://scholar.google.com/citations?user=1FChkGwAAAAJ&hl=en",
  },
  {
    name: "Jeffery Zuccato",
    country: "USA",
    position: "Assistant Professor, University of Oklahoma",
    primaryFocus: "Neuro-Oncology & Brain Tumor Research",
    keyAreas:
      "Brain Tumor Biomarkers, Liquid Biopsy, DNA Methylation, Skull-Base Surgery",
    achievements:
      "Brain Metastasis Prediction, DNA Methylation Signatures (Nature Medicine), Cancer Genomics",
    scholarUrl:
      "https://scholar.google.com/citations?user=6O9x9RoAAAAJ&hl=en",
  },
];

function FacultyCard({ faculty }: { faculty: Faculty }) {
  const initials = faculty.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 3);
  
  // Get photo path from the mapping function or use provided photoUrl
  const photoPath = faculty.photoUrl || getNameToPhotoPath(faculty.name);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 pt-8 pb-6 flex flex-col items-center text-center gap-4 h-full">
      <div className="w-28 h-28 rounded-full bg-slate-200 shadow-md flex items-center justify-center overflow-hidden">
        {photoPath ? (
          <img
            src={photoPath}
            alt={faculty.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-2xl font-semibold text-slate-600">
            {initials}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-slate-900 text-lg">
          {faculty.name}
        </h3>
        <p className="text-sm text-slate-600">
          {faculty.position}
          <span className="block text-xs text-slate-500 mt-0.5">
            {faculty.country}
          </span>
        </p>
        <p className="inline-flex px-3 py-1 rounded-full bg-indigo-50 text-[11px] font-semibold tracking-wide uppercase text-indigo-700">
          {faculty.primaryFocus}
        </p>
      </div>

      <div className="space-y-2 text-xs md:text-sm text-slate-700 mt-2">
        <div>
          <p className="font-semibold text-[11px] tracking-wide text-slate-500 uppercase">
            Key Research Areas
          </p>
          <p>{faculty.keyAreas}</p>
        </div>
        <div>
          <p className="font-semibold text-[11px] tracking-wide text-slate-500 uppercase">
            Notable Projects & Achievements
          </p>
          <p>{faculty.achievements}</p>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <a
          href={faculty.scholarUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-6 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-500 text-white hover:bg-amber-600 transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default function FacultyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900 bg-slate-50">
      <Navbar />

      <section className="pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              Faculty Directory
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Global Faculty of the International Liquid Biopsy Consortium
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
              Researchers and clinicians driving innovation in liquid biopsy,
              biomedical engineering, computational biology, public health, and
              related disciplines across leading institutions worldwide.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {facultyList.map((faculty) => (
              <FacultyCard key={faculty.name} faculty={faculty} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


