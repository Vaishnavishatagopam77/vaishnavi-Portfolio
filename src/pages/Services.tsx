
import ServiceCard from '../components/ServiceCard';
import { Code, Briefcase, User } from 'lucide-react';

const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Web Design & Development",
      description: "Custom websites with responsive design, ensuring an optimal user experience across all devices.",
      icon: <WebIcon size={24} className="text-portfolio-yellow" />
    },
    {
      id: 2,
      title: "Python Programming",
      description: "Development of Python applications, from simple scripts to complex systems with advanced functionality.",
      icon: <Code size={24} className="text-portfolio-yellow" />
    },
    {
      id: 3,
      title: "Machine Learning Solutions",
      description: "Custom machine learning models to solve specific business problems and extract valuable insights from data.",
      icon: <BrainIcon size={24} className="text-portfolio-yellow" />
    },
    {
      id: 4,
      title: "AI Implementation",
      description: "Integration of artificial intelligence capabilities into existing systems to enhance functionality and user experience.",
      icon: <RobotIcon size={24} className="text-portfolio-yellow" />
    },
    {
      id: 5,
      title: "Java & C Programming",
      description: "Development of applications using Java and C for performance-critical systems and cross-platform compatibility.",
      icon: <Code size={24} className="text-portfolio-yellow" />
    },
    {
      id: 6,
      title: "Entrepreneurship Consulting",
      description: "Guidance on tech aspects of startups, including technology stack selection and implementation strategies.",
      icon: <Briefcase size={24} className="text-portfolio-yellow" />
    }
  ];

  // Service process steps
  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "I start by understanding your needs, objectives, and vision through detailed discussions."
    },
    {
      step: 2,
      title: "Planning",
      description: "Based on the requirements, I develop a comprehensive plan including timelines, deliverables, and milestones."
    },
    {
      step: 3,
      title: "Development",
      description: "I bring the plan to life using the appropriate technologies and methodologies, ensuring quality at each step."
    },
    {
      step: 4,
      title: "Testing & Refinement",
      description: "Thorough testing to identify and address any issues, followed by refinements based on feedback."
    },
    {
      step: 5,
      title: "Delivery & Support",
      description: "Final delivery of the project, along with documentation and ongoing support as needed."
    }
  ];

  return (
    <div className="pt-24">
      {/* Services Introduction */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h1 className="page-title">Services</h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            I offer a range of services focused on delivering high-quality solutions tailored to your specific needs.
            Each service is approached with attention to detail, technical expertise, and a focus on creating value.
          </p>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Process</h2>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex mb-8 relative">
                {/* Step Number */}
                <div className="mr-6 relative">
                  <div className="w-12 h-12 bg-portfolio-yellow rounded-full flex items-center justify-center font-bold text-black">
                    {step.step}
                  </div>
                  {/* Connecting line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -ml-0.5 bg-portfolio-yellow/20 h-full"></div>
                  )}
                </div>
                
                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="group bg-gray-50 p-6 rounded-lg">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-bold">What is your typical project timeline?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-gray-700">
                <p>Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while more complex applications with AI/ML components could take 1-3 months. I'll provide you with a detailed timeline during the planning phase.</p>
              </div>
            </details>
            <details className="group bg-gray-50 p-6 rounded-lg">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-bold">How do you handle project revisions?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-gray-700">
                <p>Each project includes two rounds of revisions to ensure your satisfaction. Additional revisions can be accommodated at an hourly rate. I believe in open communication to minimize the need for extensive revisions.</p>
              </div>
            </details>
            <details className="group bg-gray-50 p-6 rounded-lg">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-bold">Do you provide ongoing support after project completion?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-gray-700">
                <p>Yes, I offer maintenance and support packages to ensure your project continues to run smoothly. The details can be discussed based on your specific needs and the nature of the project.</p>
              </div>
            </details>
            <details className="group bg-gray-50 p-6 rounded-lg">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span className="text-lg font-bold">What technologies do you specialize in?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-gray-700">
                <p>My core expertise includes Python, Java, C programming, web development (HTML, CSS, JavaScript, React), and AI/ML technologies. I'm continuously learning and adapting to new technologies to provide the best solutions for your needs.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-portfolio-yellow py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how I can help bring your ideas to life with tailored solutions that meet your specific needs.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-portfolio-dark px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

// Custom Web icon since it's not available in lucide-react
const WebIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

// Custom Brain icon since it's not available in lucide-react
const BrainIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9.5 2h.13a2 2 0 0 1 1.54.64L12 3.5l.83-.86A2 2 0 0 1 14.37 2h.13a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v4h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.13a2 2 0 0 1-1.54-.64L12 14.5l-.83.86A2 2 0 0 1 9.63 16h-.13a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2V7h-2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
    <path d="M17.5 11.5c1.5-1 2.5-3 2.5-5.5" />
    <path d="M4 6c0 2.5 1 4.5 2.5 5.5" />
    <path d="M17.5 18.5c1.5-1 2.5-3 2.5-5.5" />
    <path d="M4 13c0 2.5 1 4.5 2.5 5.5" />
  </svg>
);

// Custom Robot icon since it's not available in lucide-react
const RobotIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <rect x="8" y="15" width="2" height="2" />
    <rect x="14" y="15" width="2" height="2" />
    <path d="M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M12 7v4" />
  </svg>
);

export default Services;
