import { motion } from 'framer-motion';
import { AcademicCapIcon, DocumentTextIcon, CodeBracketIcon, CloudIcon, EyeIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { CpuChipIcon, BeakerIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const certifications = [
  {
    id: 2,
    title: "Programming in Java",
    issuer: "IIT Kharagpur",
    date: "October 2024",
    description: "Advanced Java programming skills and object-oriented design principles.",
    icon: <CodeBracketIcon className="h-6 w-6" />,
    pdfPath: "/certificates/Java.pdf"
  },
  {
    id: 10,
    title: "AICTE QIP PG Certificate Programme in AIML",
    issuer: "IIIT Nagpur",
    date: "December 2024",
    description: "Advanced knowledge in Artificial Intelligence and Machine Learning, covering deep learning, neural networks, and AI applications.",
    icon: <CpuChipIcon className="h-6 w-6" />,
    pdfPath: "/certificates/QIP.pdf"
  },
  {
    id: 7,
    title: "Computer Vision",
    issuer: "IIT Guwahati",
    date: "April 2024",
    description: "Understanding of image processing and computer vision algorithms.",
    icon: <EyeIcon className="h-6 w-6" />,
    pdfPath: "/certificates/ComputerVision.pdf"
  },
  {
    id: 1,
    title: "Google Cloud Computing Foundations",
    issuer: "IIT Kharagpur",
    date: "October 2023",
    description: "Expertise in Google Cloud Platform services and cloud architecture solutions.",
    icon: <CloudIcon className="h-6 w-6" />,
    pdfPath: "/certificates/googleCloud.pdf"
  },
  {
    id: 3,
    title: "Software Testing",
    issuer: "IIIT Bangalore",
    date: "October 2023",
    description: "Comprehensive knowledge of software testing methodologies and quality assurance.",
    icon: <BeakerIcon className="h-6 w-6" />,
    pdfPath: "/certificates/SoftwareTesting.pdf"
  },
  {
    id: 8,
    title: "Internet of Things",
    issuer: "IIT Kharagpur",
    date: "April 2023",
    description: "Knowledge of IoT architecture, protocols, and implementation.",
    icon: <CpuChipIcon className="h-6 w-6" />,
    pdfPath: "/certificates/IOT.pdf"
  },
  {
    id: 9,
    title: "Affective Computing",
    issuer: "IIIT Delhi",
    date: "April 2023",
    description: "Understanding of emotion recognition and human-computer interaction.",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    pdfPath: "/certificates/AffectiveComputing.pdf"
  },
  {
    id: 4,
    title: "Cloud Computing",
    issuer: "IIT Kharagpur",
    date: "October 2022",
    description: "Understanding of cloud computing concepts and deployment strategies.",
    icon: <CloudIcon className="h-6 w-6" />,
    pdfPath: "/certificates/CloudComputing.pdf"
  },
  {
    id: 6,
    title: "Data Mining",
    issuer: "IIT Kharagpur",
    date: "April 2022",
    description: "Expertise in extracting valuable insights from large datasets.",
    icon: <ChartBarIcon className="h-6 w-6" />,
    pdfPath: "/certificates/DataMining.pdf"
  },
  {
    id: 5,
    title: "Data Science for Engineers",
    issuer: "IIT Madras",
    date: "March 2022",
    description: "Skills in data analysis, machine learning, and statistical modeling.",
    icon: <ChartBarIcon className="h-6 w-6" />,
    pdfPath: "/certificates/DataScience.pdf"
  }
];

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const openCertificate = (pdfPath: string) => {
    setSelectedCertificate(pdfPath);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-32 h-32 mb-6"
        >
          <img
            src="/JSRK-portfolio/myphoto.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-yellow-400 dark:border-yellow-300"
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-yellow-700 dark:text-yellow-300"
        >
          Certifications
        </motion.h1>
      </div>
      
      <div className="space-y-8 py-20 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 dark:from-yellow-900 dark:via-amber-900 dark:to-orange-900">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">{cert.title}</h2>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-medium">{cert.issuer}</span>
                  <span className="mx-2">•</span>
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{cert.description}</p>
                <button
                  onClick={() => openCertificate(cert.pdfPath)}
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  View Certificate
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Certificate Preview</h3>
              <button
                onClick={closeCertificate}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative" style={{ height: '80vh' }}>
              <iframe
                src={`${selectedCertificate}#toolbar=0&navpanes=0`}
                className="w-full h-full"
                style={{ border: 'none' }}
                title="Certificate Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications; 