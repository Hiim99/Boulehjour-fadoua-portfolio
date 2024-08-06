import React from 'react';
import './header.css';

function Header() {
  const handleScrollToMyWorks = () => {
    const myWorksSection = document.getElementById('myWorks-section');
    if (myWorksSection) {
      myWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCompetences = () => {
    const competencesSection = document.getElementById('competences-section');
    if (competencesSection) {
      competencesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="bar-nav">
        <a href="/">
          <img id="home-page" src={require('../../images/home.png')} alt="acceuil" />
        </a>
        <nav>
          <ul>
            <li onClick={handleScrollToCompetences}>Compétences</li>
            <li onClick={handleScrollToMyWorks}>Projets</li>
            <li onClick={handleScrollToContact}>Contact</li>
            <li>
              <a className='cv' href="/cv-fadoua-boulehjour.pdf" download>
                Télécharger mon CV
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fadoua-boulehjour-0ba704260/" target="_blank" rel="noopener noreferrer">
                <img id="linkedin-logo" src={require('../../images/logo-linkedin.webp')} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="presentation">
        <img id="profile" src={require('../../images/presentation-image.png')} alt="logo-web" />
        <div className="presentation-text">
          <h1>BOULEHJOUR FADOUA</h1>
          <p>
            Je suis une développeuse web passionnée par la création de projets efficaces et bien conçus. Avec une
            solide expérience dans le développement web, je suis motivée à approfondir mes compétences et à
            contribuer activement à des projets innovants. Je suis actuellement à la recherche d'une alternance d'un
            an pour mettre en pratique mes connaissances et continuer à évoluer dans ce domaine.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
