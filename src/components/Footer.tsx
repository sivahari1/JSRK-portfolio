import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  BuildingOfficeIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {/* GitHub Link */}
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <CodeBracketIcon className="h-6 w-6" />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <BuildingOfficeIcon className="h-6 w-6" />
            </a>

            {/* Google Scholar Link */}
            <a
              href="https://scholar.google.com/citations?user=your-google-scholar-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Google Scholar"
            >
              <AcademicCapIcon className="h-6 w-6" />
            </a>

            {/* YouTube Link */}
            <a
              href="https://www.youtube.com/@your-youtube-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="YouTube"
            >
              <PlayCircleIcon className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dr. J. Siva Ramakrishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 