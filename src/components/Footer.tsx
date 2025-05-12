
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Vaishnavi Shatagopam</h3>
            <p className="text-gray-600 mb-4">
              Designer and Developer focused on AI, ML, Python, Java, C programming, and Web Development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Vaishnavishatagopam77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/vaishnavi-shatagopam-4a8b90282" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:Vaishnavishatagopam66@gmail.com" 
                className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919059319085" 
                className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-portfolio-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-portfolio-yellow transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-portfolio-yellow transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-portfolio-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-portfolio-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <Mail size={16} /> 
                <span>Vaishnavishatagopam66@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> 
                <span>+91 9059319085</span>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} /> 
                <a 
                  href="https://github.com/Vaishnavishatagopam77" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-portfolio-yellow transition-colors"
                >
                  Vaishnavishatagopam77
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} /> 
                <a 
                  href="https://www.linkedin.com/in/vaishnavi-shatagopam-4a8b90282" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-portfolio-yellow transition-colors"
                >
                  vaishnavi-shatagopam
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vaishnavi Shatagopam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
