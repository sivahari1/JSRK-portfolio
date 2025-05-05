import { useState } from 'react';
import { CodeBracketIcon, CommandLineIcon, ServerIcon } from '@heroicons/react/24/outline';

const About = () => {
  const skills = {
    teaching: [
      { name: 'Aeronautical Engineering', level: 'Expert' },
      { name: 'Aircraft Systems', level: 'Expert' },
      { name: 'Aerodynamics', level: 'Advanced' },
      { name: 'Flight Mechanics', level: 'Advanced' },
    ],
    research: [
      { name: 'Functional MRI Data Analysis', level: 'Expert' },
      { name: 'Machine Learning', level: 'Advanced' },
      { name: 'Deep Learning', level: 'Advanced' },
      { name: 'Natural Language Processing', level: 'Advanced' },
    ],
  };

  const [showCV, setShowCV] = useState(false);

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-2 sm:px-4">
          <img src="/JSRK-portfolio/myphoto.jpg" alt="Dr. J. Siva Ramakrishna" className="mx-auto mb-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-200 dark:border-indigo-600 shadow-lg" />
          <div className="flex flex-col items-center mb-8">
            <button
              onClick={() => setShowCV(true)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition-colors duration-200 mb-2"
            >
              CV
            </button>
          </div>
          {showCV && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full p-4 relative">
                <button
                  onClick={() => setShowCV(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl font-bold"
                  aria-label="Close CV preview"
                >
                  &times;
                </button>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-white">Curriculum Vitae</h3>
                <div className="w-full h-[70vh]">
                  <iframe
                    src="mycv.pdf"
                    title="CV Preview"
                    className="w-full h-full border rounded"
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <a
                    href="mycv.pdf"
                    download
                    className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 8l-3-3m3 3l3-3m-9 5a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12z" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          )}
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h1>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Background</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am Dr. J. Siva Ramakrishna, an Associate Professor at the Institute of Aeronautical Engineering, Hyderabad.
              My research focuses on cutting-edge technologies including Functional MRI Data Analysis, Machine Learning,
              Deep Learning, and Natural Language Processing. I combine my expertise in aeronautical engineering with
              advanced computational techniques to drive innovation in both aerospace and medical imaging domains.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              With extensive experience in both theoretical and practical aspects of aeronautical engineering,
              I strive to bridge the gap between traditional aerospace knowledge and modern computational methods.
              My research interests span across multiple disciplines, focusing on applying machine learning and
              deep learning techniques to solve complex problems in aerospace engineering and medical imaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <CodeBracketIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Teaching Expertise</h3>
              <ul className="space-y-2">
                {skills.teaching.map((skill, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <ServerIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Research Focus</h3>
              <ul className="space-y-2">
                {skills.research.map((skill, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <CommandLineIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Professional Skills</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Curriculum Development</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Expert</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Student Mentoring</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Industry Collaboration</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Advanced</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Technical Writing</span>
                  <span className="text-indigo-600 dark:text-indigo-400">Advanced</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 