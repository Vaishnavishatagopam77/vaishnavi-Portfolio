
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';

const Index = () => {
  // Sample projects data
  const featuredProjects = [
    {
      title: "E-commerce Project",
      description: "A fully functional e-commerce website with modern design and smooth user experience.",
      tags: ["Web Development", "UI/UX", "React"],
      imageUrl: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/portfolio"
    },
    {
      title: "Bank Churn Model",
      description: "Machine learning model designed for customer retention analysis to predict customer behavior.",
      tags: ["ML", "Python", "Data Analysis"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/portfolio"
    },
    {
      title: "Game Development",
      description: "Interactive games showcasing creativity and technical proficiency in game development.",
      tags: ["Game Dev", "C++", "Unity"],
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/portfolio"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-left flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-portfolio-yellow">Vaishnavi Shatagopam</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mt-2">
                Designer & Developer specializing in AI, ML, and Web Development
              </h2>
              <p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
                I'm passionate about creating impactful, functional designs and solutions
                that bridge the gap between technology and user experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/portfolio" className="btn-primary">
                  Explore My Work
                </Link>
                <Link to="/contact" className="px-6 py-3 border border-gray-300 rounded-md hover:border-portfolio-yellow transition-colors">
                  Let's Collaborate
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img 
                src="https://i.postimg.cc/gJcXpPnD/Whats-App-Image-2025-05-12-at-13-56-20-b7d22bcf.jpg"
                alt="Vaishnavi Shatagopam" 
                className="rounded-full w-64 h-64 object-cover border-8 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-24 h-1 bg-portfolio-yellow mx-auto mt-4"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              I'm a passionate designer and developer with expertise in AI, Machine Learning, 
              and various programming languages including Python, Java, and C. My mission is to create 
              innovative solutions that make a difference.
            </p>
            <Link to="/about" className="inline-flex items-center font-medium text-portfolio-yellow hover:underline">
              Learn more about me <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <div className="w-24 h-1 bg-portfolio-yellow mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary inline-flex items-center">
              View All Projects <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
            <div className="w-24 h-1 bg-portfolio-yellow mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Web Development" 
              description="Creating modern, responsive websites that provide excellent user experience."
              icon={<Code size={32} className="text-portfolio-yellow" />}
            />
            <ServiceCard 
              title="Python & Machine Learning" 
              description="Developing ML models and applications to solve complex problems."
              icon={<Code size={32} className="text-portfolio-yellow" />}
            />
            <ServiceCard 
              title="AI Solutions" 
              description="Implementing artificial intelligence to create smart, innovative applications."
              icon={<Briefcase size={32} className="text-portfolio-yellow" />}
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center font-medium text-portfolio-yellow hover:underline">
              Explore All Services <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-portfolio-yellow py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind or looking for a skilled developer? 
            I'd love to hear from you and discuss how we can collaborate.
          </p>
          <Link to="/contact" className="bg-white text-portfolio-dark px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
