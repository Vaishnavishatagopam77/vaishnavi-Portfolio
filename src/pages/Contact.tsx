
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="pt-24">
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h1 className="page-title">Contact Me</h1>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            Have a question or want to work together? Feel free to reach out using the form below or through any of my social media channels.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-yellow focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="text-portfolio-yellow mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <a 
                        href="mailto:Vaishnavishatagopam66@gmail.com" 
                        className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                      >
                        Vaishnavishatagopam66@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-portfolio-yellow mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <a 
                        href="tel:+919059319085" 
                        className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                      >
                        +91 9059319085
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="text-portfolio-yellow mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold">GitHub</h3>
                      <a 
                        href="https://github.com/Vaishnavishatagopam77" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                      >
                        github.com/Vaishnavishatagopam77
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="text-portfolio-yellow mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-bold">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/in/vaishnavi-shatagopam-4a8b90282" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-portfolio-yellow transition-colors"
                      >
                        linkedin.com/in/vaishnavi-shatagopam
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Availability Info */}
              <div className="mt-8 bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Availability</h2>
                <p className="text-gray-700 mb-4">
                  I'm currently available for freelance work and project collaborations. Typically, I respond to messages within 24-48 hours.
                </p>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  <span className="font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
