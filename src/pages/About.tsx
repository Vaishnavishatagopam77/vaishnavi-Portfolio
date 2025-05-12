
import SkillBar from '../components/SkillBar';
import { File } from 'lucide-react';

const About = () => {
  // Programming skills
  const programmingSkills = [
    { name: "Python", percentage: 90 },
    { name: "Java", percentage: 85 },
    { name: "C Programming", percentage: 80 },
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 }
  ];

  // AI/ML skills
  const aiMlSkills = [
    { name: "Machine Learning", percentage: 85 },
    { name: "Data Analysis", percentage: 80 },
    { name: "Neural Networks", percentage: 75 },
    { name: "Computer Vision", percentage: 70 }
  ];

  // Web Development skills
  const webDevSkills = [
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Database Design", percentage: 75 },
    { name: "UI/UX Design", percentage: 85 }
  ];

  // Certifications data
  const certifications = [
    {
      title: "Micro-Certification from ServiceNow",
      organization: "ServiceNow",
      date: "April 10, 2025",
      description: "Welcome to ServiceNow certification covering platform basics."
    },
    {
      title: "Python Programming Internship",
      organization: "Ybi Foundation",
      date: "October 22, 2024",
      description: "Completed intensive Python programming internship focusing on application development."
    },
    {
      title: "Oracle Certified Foundations Associate",
      organization: "Oracle University",
      date: "Valid until December 29, 2026",
      description: "Certification validating foundational knowledge of Oracle technologies."
    }
  ];

  return (
    <div className="pt-24">
      {/* About Me Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h1 className="page-title">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                I'm Vaishnavi Shatagopam, a multidisciplinary designer and developer with a focus on creating 
                innovative solutions in the fields of AI, ML, and web development.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a strong background in Python, Java, and C programming, I combine technical expertise 
                with creative problem-solving to deliver impactful projects. My passion lies in developing 
                solutions that are not only functional but also provide exceptional user experiences.
              </p>
              <p className="text-lg text-gray-700">
                I continuously strive to expand my knowledge and keep up with the latest technologies 
                to provide cutting-edge solutions to complex problems. When I'm not coding, I enjoy 
                exploring new technologies, participating in hackathons, and contributing to open-source projects.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://i.postimg.cc/gJcXpPnD/Whats-App-Image-2025-05-12-at-13-56-20-b7d22bcf.jpg"
                alt="Vaishnavi Shatagopam" 
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Programming Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-portfolio-yellow/20 flex items-center justify-center rounded-full mr-2">
                  <Code size={16} className="text-portfolio-yellow" />
                </span>
                Programming Languages
              </h3>
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 100} 
                />
              ))}
            </div>

            {/* AI/ML Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-portfolio-yellow/20 flex items-center justify-center rounded-full mr-2">
                  <BrainIcon size={16} className="text-portfolio-yellow" />
                </span>
                AI & Machine Learning
              </h3>
              {aiMlSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 100} 
                />
              ))}
            </div>

            {/* Web Development Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 bg-portfolio-yellow/20 flex items-center justify-center rounded-full mr-2">
                  <Globe size={16} className="text-portfolio-yellow" />
                </span>
                Web Development
              </h3>
              {webDevSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage}
                  delay={index * 100} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md card-hover">
                <div className="flex items-start mb-4">
                  <span className="w-12 h-12 flex-shrink-0 bg-portfolio-yellow/20 flex items-center justify-center rounded-full mr-4">
                    <File size={20} className="text-portfolio-yellow" />
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <p className="text-gray-600">{cert.organization}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education & Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-yellow">Education</h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <h4 className="font-bold text-lg">Bachelor of Technology</h4>
                  <p className="text-gray-600">Computer Science & Engineering</p>
                  <p className="text-sm text-gray-500 mb-3">2022 - 2026</p>
                  <p className="text-gray-700">
                    Focusing on AI, machine learning, and software development with hands-on project experience.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <h4 className="font-bold text-lg">Online Specializations</h4>
                  <p className="text-gray-600">Various platforms</p>
                  <p className="text-sm text-gray-500 mb-3">Ongoing</p>
                  <p className="text-gray-700">
                    Continuous learning through specialized courses in AI, ML, and web development technologies.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-portfolio-yellow">Experience</h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <h4 className="font-bold text-lg">Python Programming Intern</h4>
                  <p className="text-gray-600">YBI Foundation</p>
                  <p className="text-sm text-gray-500 mb-3">2024</p>
                  <p className="text-gray-700">
                    Developed Python applications and learned advanced programming concepts, working on real-world projects.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                  <h4 className="font-bold text-lg">Freelance Web Developer</h4>
                  <p className="text-gray-600">Self-employed</p>
                  <p className="text-sm text-gray-500 mb-3">2023 - Present</p>
                  <p className="text-gray-700">
                    Creating responsive websites and web applications for various clients, focusing on user experience and modern design principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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

// Custom Globe icon since it's not available in lucide-react
const Globe = ({ size = 24, className = "" }) => (
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
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// Custom Code icon since it's not available in lucide-react
const Code = ({ size = 24, className = "" }) => (
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
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default About;
