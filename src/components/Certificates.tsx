import { motion } from 'framer-motion';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface Certificate {
  name: string;
  path: string;
  date: string;
  issuer: string;
}

const certificates: Certificate[] = [
  {
    name: "Web Development Certificate",
    path: "/certificates/web-development-certificate.pdf",
    date: "2023",
    issuer: "Example Institution"
  },
  // Add more certificates here following the same format
];

const Certificates = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <DocumentTextIcon className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-center mb-2">Issued by: {cert.issuer}</p>
                <p className="text-gray-500 text-center mb-4">Date: {cert.date}</p>
                <a
                  href={cert.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates; 