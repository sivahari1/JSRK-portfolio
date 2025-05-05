import { motion } from 'framer-motion';
import { DocumentTextIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

interface JournalArticle {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  link: string;
}

interface ConferencePaper {
  title: string;
  authors: string;
  conference: string;
  year: string;
  location: string;
  link: string;
}

interface BookChapter {
  title: string;
  authors: string;
  book: string;
  year: string;
  publisher: string;
  link: string;
}

interface PublicationSection {
  type: string;
  items: (JournalArticle | ConferencePaper | BookChapter)[];
}

const Publications = () => {
  const publications: PublicationSection[] = [
    {
      type: 'Journal Articles',
      items: [
        {
          title: 'Development of explainable machine intelligence models for heart sound abnormality detection',
          authors: 'Jeevakala Siva Ramakrishna et al.',
          journal: 'Indonesian Journal of Electrical Engineering and Computer Science',
          year: '2024',
          doi: '10.11591/ijeecs.v36.i2.pp846-853',
          link: 'https://ijeecs.iaescore.com/index.php/IJEECS/article/view/35067'
        },
        {
          title: 'Classification of cognitive states using clustering split time series framework',
          authors: 'Jeevakala Siva Ramakrishna and Hariharan',
          journal: 'Computer Assisted Methods in Engineering and Science',
          year: '2024',
          doi: '10.24423/cames.2024.241-260',
          link: '#'
        },
        {
          title: 'Identification of significant instants of voxels for cognitive state classification using interpretable machine learning models',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          journal: 'Journal of medicinal and chemical sciences',
          year: '2023',
          doi: '10.26655/JMCHEMSCI.2023.6.6',
          link: '#'
        },
        {
          title: 'Classification of cognitive state using task-specific connectivity features',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          journal: 'Engineering, Technology and Applied Science research',
          year: '2023',
          doi: '10.48084/etasr.5801',
          link: '#'
        },
        {
          title: 'Emotion recognition from speech and text using long short-term memory',
          authors: 'Venkateswarlu. S. C., Siva Ramakrishna. J., Kumar N. U., Munaswamy P.',
          journal: 'Engineering, Technology and Applied Science research',
          year: '2023',
          doi: '10.48084/etasr.5801',
          link: '#'
        }
      ]
    },
    {
      type: 'Conference Papers',
      items: [
        {
          title: 'Network Intrusion Detection System for Learning Algorithms',
          authors: 'Umar Mohmed and Siva Ramakrishna Jeevakala',
          conference: 'SmartCom 2025',
          year: '2025',
          location: 'Springer, Singapore',
          link: '#'
        },
        {
          title: 'Causal Connectivity based Classification of Functional MRI data',
          authors: 'J Siva Ramakrishna and Hariharan Ramasangu',
          conference: '2021 IEEE 18th India Council International Conference (INDICON)',
          year: '2021',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Classification of human emotions using EEG-based causal connectivity patterns',
          authors: 'J. Siva Ramakrishna, Neelam Sinha, and Hariharan Ramasangu',
          conference: 'Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB)',
          year: '2021',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Estimation of functional connectivity in cognitive impaired brain using non-Homogeneous dynamic Bayesian model',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          conference: 'IEEE Region 10 Conference (TENCON)',
          year: '2019',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Functional connectivity analysis of default mode network for healthy and unhealthy brains',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          conference: 'IEEE Symposium Series on Computational Intelligence (SSCI)',
          year: '2018',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Functional MRI data analysis using connectivity strengths to identify cognitive states',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          conference: 'International Conference on Advances in Computing, Communications, and Informatics (ICACCI)',
          year: '2018',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Tensor gradient based discriminative region analysis for cognitive state classification',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          conference: 'IEEE Region 10 Conference (TENCON)',
          year: '2017',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Classification of cognitive state using clustering based maximum margin feature selection framework',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          conference: 'International Conference on Advances in Computing, Communications, and Informatics (ICACCI)',
          year: '2017',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Classification of cognitive state using statistics of split time series',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          conference: 'IEEE Annual India Conference (INDICON)',
          year: '2016',
          location: 'IEEE',
          link: '#'
        },
        {
          title: 'Cognitive state classification using clustering-classifier hybrid method',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          conference: 'International Conference on Advances in Computing, Communications, and Informatics (ICACCI)',
          year: '2016',
          location: 'IEEE',
          link: '#'
        }
      ]
    },
    {
      type: 'Book Chapters',
      items: [
        {
          title: 'Analysis and classification of discriminative region in cognitive functional MRI data',
          authors: 'J. Siva Ramakrishna and Hariharan Ramasangu',
          book: 'Computational intelligence: theories and applications and future directions Volume II',
          year: '2019',
          publisher: 'Springer',
          link: '#'
        }
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'Journal Articles':
        return <DocumentTextIcon className="h-6 w-6" />;
      case 'Conference Papers':
        return <AcademicCapIcon className="h-6 w-6" />;
      case 'Book Chapters':
        return <BookOpenIcon className="h-6 w-6" />;
      default:
        return <DocumentTextIcon className="h-6 w-6" />;
    }
  };

  const renderPublicationDetails = (item: JournalArticle | ConferencePaper | BookChapter, type: string) => {
    if (type === 'Journal Articles') {
      const journalItem = item as JournalArticle;
      return (
        <div className="space-y-1">
          <p className="italic">{journalItem.journal}</p>
          <p>Vol. 36, No. 2, Year {journalItem.year}, Pages 846-853</p>
          <p className="text-sm text-gray-500">(Scopus Indexed)</p>
          {journalItem.doi && (
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              DOI: {journalItem.doi}
            </p>
          )}
        </div>
      );
    } else if (type === 'Conference Papers') {
      const conferenceItem = item as ConferencePaper;
      return <p>{conferenceItem.conference}, {conferenceItem.location}, {conferenceItem.year}</p>;
    } else {
      const bookItem = item as BookChapter;
      return <p>{bookItem.book}, {bookItem.publisher}, {bookItem.year}</p>;
    }
  };

  return (
    <div className="pt-16">
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
              className="w-full h-full rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400"
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Publications
          </motion.h1>
        </div>
      </div>
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {publications.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full mr-3">
                    {getIcon(section.type)}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {section.type}
                  </h2>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-4 hover:shadow-xl transition-shadow duration-300 text-left"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {item.authors}
                      </p>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {renderPublicationDetails(item, section.type)}
                      </div>
                      <a
                        href={item.link}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium mt-2 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Publications; 