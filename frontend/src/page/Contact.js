import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import backgroundImage from '../assest/contact3.jpeg'; 

function ContactPage() {
  const teamMembers = [
          
    {
      name: 'Deepansh Dalela',
      email: 'deepansh292003@gmail.com',
      phone: '6367109561',
      imageUrl: '/assest/deepansh2.jpeg.jpg', 
      instagramUrl: 'https://www.instagram.com/deepanshdalela/',
      linkedinUrl: 'https://www.linkedin.com/in/deepansh-dalela-b58065248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      gmailUrl: 'mailto:deepansh292003@gmail.com'
    },

    {
      name: 'Sanidhya Agarwal',
      email: 'sanidhyaagarwal@gmail.com',
      phone: '9305720160',
      imageUrl: '/assest/sanidhya.jpeg.jpg', 
      instagramUrl: 'https://www.instagram.com/sanidhya7707/',
      linkedinUrl: 'https://www.linkedin.com/in/sanidhya7707/',
      gmailUrl: 'mailto:sanidhyaagarwal@gmail.com'
    },
      {
      name: ' Sarthak Gupta',
      email: 'sarthakgupta.univ@gmail.com',
      phone: '9962665231',
      imageUrl: '/assest/sarthak.jpeg.jpg', 
      instagramUrl: 'https://www.instagram.com/sarthxkgupta/',
      linkedinUrl: 'https://www.linkedin.com/in/sarthak-gupta-080245215/',
      gmailUrl: 'mailto:sarthakgupta.univ@gmail.com'
    },
  ];

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-black">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative">
              <div
                className="bg-cover bg-center rounded-lg shadow-md p-6 transition duration-300 transform hover:shadow-lg"
                style={{ backgroundImage: `url(${member.imageUrl})`, minHeight: '400px' }} 
              >
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-green-400 bg-opacity-75">
                  <h2 className="text-xl font-semibold mb-2 text-white">{member.name}</h2>
                  <p className="text-gray-200 mb-2">{member.email}</p>
                  <p className="text-gray-200 mb-2">{member.phone}</p>
                  <div className="flex gap-2">
                    <a href={member.instagramUrl} target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white" /></a>
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white" /></a>
                    <a href={member.gmailUrl}><FaEnvelope className="text-white" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
