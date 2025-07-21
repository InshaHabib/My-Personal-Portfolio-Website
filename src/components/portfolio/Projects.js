import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: #2a5298;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  background-color: #e9f0ff;
  color: #2a5298;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #2a5298;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'A Complete E-Commerce Platform',
      description: 'Developed a complete e-commerce platform using MERN stack with secure user authentication and responsive design.',
      image: '/P1.jpeg',
      tags: ['React', 'Node.js','Express js','MongoDB'],
      github: 'https://github.com/InshaHabib/A-Complete-E-commerce-Platform'
    },
    {
      id: 2,
      title: 'Book Library App',
      description: 'Developed a book library app with a feature to search books directly on Google. This allowed users to easily find book details and information quickly within the app.',
      image: '/P2.jpg',
      tags: ['Android', 'Firebase', 'Java'],
      github: 'https://github.com/InshaHabib/Book-Library-App'
    },
    {
      id: 3,
      title: 'Gym Fitness UI',
      description: 'Designed a responsive Gym Fitness UI using HTML and CSS with modern layout and clean design aesthetics.',
      image: '/P3.jpg',
      tags: ['HTML','CSS','JS'],
      github: 'https://github.com/InshaHabib/Gym-Fitness-UI-Form',
    },
    {
      id: 4,
      title: 'Python Mini Project',
      description: 'Developed a Python project to automate daily tasks and improve problem-solving skills.',
      image: '/P4.png',
      tags: ['Python'],
      github: 'https://github.com/InshaHabib/Python-Mini-Project'
    },
    {
      id: 5,
      title: 'Flutter with Dart',
      description: 'Learned Flutter with Dart to build cross-platform mobile applications.Created apps with responsive designs and smooth user experiences.',
      image: '/P5.jpeg',
      tags: ['Flutter', 'Dart','Kotlin'],
      github: 'https://github.com/InshaHabib/Flutter-with-Dart'
    },
    {
      id: 6,
      title: 'Hospital Management System',
      description: 'Built a hospital management system to handle patient data, appointments, and staff information.This project improved management efficiency and ensured organized record-keeping.',
      image: '/P6.png',
      tags: ['Java','OOP'],
      github: 'https://github.com/InshaHabib/Hospital-Management-System'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  {/* <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink> */}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;