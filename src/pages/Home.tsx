import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center w-full max-w-2xl"
        >
          <img src="myphoto.jpg" alt="Dr. J. Siva Ramakrishna" className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-200 dark:border-indigo-600 shadow-lg" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="text-indigo-600 dark:text-indigo-400">Dr. J. Siva Ramakrishna</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Associate Professor
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Institute of Aeronautical Engineering, Hyderabad
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-3 sm:space-y-0"
          >
            <a
              href="#about"
              className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Learn More
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 animate-bounce"
          >
            <ArrowDownIcon className="h-6 w-6 mx-auto text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-2 sm:px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Professional Focus
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Teaching</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering high-quality education in aeronautical engineering with a focus on practical applications and industry relevance.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Training</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conducting specialized training programs to enhance technical skills and prepare students for industry challenges.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Research</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Engaging in cutting-edge research in aeronautical engineering, contributing to advancements in the field.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 