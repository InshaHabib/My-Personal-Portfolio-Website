import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 80px 0;
  background-color: white;
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #333;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  .icon {
    width: 50px;
    height: 50px;
    background-color: #e9f0ff;
    color: #2a5298;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
  
  .content {
    h4 {
      font-size: 1.2rem;
      margin-bottom: 5px;
      color: #333;
    }
    
    p {
      color: #666;
      margin: 0;
    }
  }
`;

const ContactForm = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 30px;
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-weight: 500;
    color: #555;
  }
  
  input, textarea {
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #2a5298;
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(42, 82, 152, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        
        <ContactContainer>
          <ContactInfo>
            <h3>Get In Touch</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <ContactDetails>
              <ContactItem>
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="content">
                  <h4>Location</h4>
                  <p>Rawalpindi, Pakistan</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="content">
                  <h4>Phone</h4>
                  <p>+92-307-1278881</p>
                </div>
              </ContactItem>
              
              <ContactItem>
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <p>inshahabib939@gmail.com</p>
                </div>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          
          <ContactForm>
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </FormGroup>
              
              <SubmitButton type="submit">Send Message</SubmitButton>
            </form>
          </ContactForm>
        </ContactContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;