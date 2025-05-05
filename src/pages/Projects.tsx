import { motion } from 'framer-motion';

const Projects = () => {
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
            src="/myphoto.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400"
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h1>
      </div>
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Research Projects
            </h1>
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Our research projects showcase innovative work in aeronautical engineering and machine learning.
                Detailed information about current and past projects will be available soon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 