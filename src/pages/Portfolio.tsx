
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  // Categories for filtering
  const categories = ["All", "Web Development", "AI/ML", "Programming", "Games"];
  
  // State for active category
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-commerce Project",
      description: "A fully functional e-commerce website with modern design and smooth user experience. Features include product catalog, user authentication, shopping cart, and payment integration.",
      tags: ["Web Development", "React", "Node.js"],
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Bank Churn Model",
      description: "Machine learning model designed for customer retention analysis. This model predicts which customers are likely to leave the bank's services, allowing for proactive retention strategies.",
      tags: ["ML", "Python", "Data Analysis"],
      category: "AI/ML",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Puzzle Game",
      description: "An interactive puzzle game that challenges users with increasingly difficult levels. Developed using Unity and C#, featuring engaging graphics and smooth gameplay.",
      tags: ["Game Dev", "C#", "Unity"],
      category: "Games",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Personal Assistant App",
      description: "A smart personal assistant application that uses natural language processing to understand and respond to user queries and commands.",
      tags: ["AI", "Python", "NLP"],
      category: "AI/ML",
      imageUrl: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 5,
      title: "Task Management System",
      description: "A comprehensive task management system that allows users to create, assign, and track tasks. Features include task prioritization, deadline tracking, and progress monitoring.",
      tags: ["Web Development", "JavaScript", "React"],
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex data sets. Users can filter data, change visualization types, and export reports.",
      tags: ["Web Development", "D3.js", "React"],
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 7,
      title: "C Programming Compiler",
      description: "A simplified C programming compiler that can parse and execute basic C code. Developed as a learning project to understand compiler design principles.",
      tags: ["C", "Compiler Design"],
      category: "Programming",
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 8,
      title: "Image Recognition Tool",
      description: "A machine learning tool that can recognize and classify objects in images. Trained on a diverse dataset to ensure accurate recognition across various object types.",
      tags: ["AI", "Python", "Computer Vision"],
      category: "AI/ML",
      imageUrl: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 9,
      title: "Adventure Game",
      description: "An immersive text-based adventure game with rich storytelling and multiple decision paths. Players can explore different storylines based on their choices.",
      tags: ["Game Dev", "Java"],
      category: "Games",
      imageUrl: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-24">
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h1 className="page-title">My Portfolio</h1>
          
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            Here's a collection of my best work across different domains. Each project represents a unique challenge and solution, showcasing my skills in design, development, and problem-solving.
          </p>
          
          {/* Filter Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-portfolio-yellow text-black' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Let's Work Together Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
