import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              Certifications
            </h1>
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Professional certifications and training credentials in aeronautical engineering,
                machine learning, and related fields will be displayed here. This section will
                showcase your expertise and continuous learning achievements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications; 