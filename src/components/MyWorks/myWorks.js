import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './myWorks.css';

function Presentation() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);


    const projects = [
        {
            title: "Agence de voyage",
            description: "Intégration de l'interface utilisateur d'une application web innovante permettant aux utilisateurs de rechercher et de réserver des hébergements et des activités touristiques dans diverses villes. Ce projet vise à offrir une plateforme intuitive et conviviale pour planifier des voyages, avec des fonctionnalités de recherche avancées et des recommandations personnalisées pour des expériences locales uniques.",
            difficulte: "a principale difficulté a été de gérer la responsivité du site en utilisant flexbox et grid pour assurer un affichage optimal sur tous les appareils.",
            images: [
                require('../../images/projet2/Capture1.PNG'),
                require('../../images/projet2/Capture2.PNG'),
                require('../../images/projet2/Capture3.PNG')
            ],
            skills: "HTML, CSS, figma, git",
            github: "https://github.com/Hiim99/Site-de-voyage"
        },
        {
            title: "Création du site portfolio d'une architecte d'intérieur",
            description: "Ce projet visait à mettre en valeur les réalisations et compétences de l'architecte à travers un site web élégant et fonctionnel. Mon rôle consistait à développer la page de présentation des travaux, à créer la page de connexion de l'administrateur, et à concevoir une modale pour l'upload de nouveaux médias.",
            difficulte:"Le défi de l'authentification en utilisant un token stocké dans le local storage pour sécuriser l'accès à la page de connexion de l'administrateur.",
            images: [
                require('../../images/projet3/Capture1.PNG'),
                require('../../images/projet3/Capture2.PNG'),
                require('../../images/projet3/Capture3.PNG')
            ],
            skills: "Html, CSS, javascript, node.js, SWagger, Postman, figma, git",
            github: "https://github.com/Hiim99/Portfolio-architecte"
        },
        {
            title: "Kasa, une entreprise de location d’appartements entre particuliers",
            description: "Refonte du site web de Kasa, une entreprise de location d'appartements, en utilisant React pour le front-end. Participation à la modernisation de l'application, en suivant les nouvelles maquettes et les guidelines techniques.",
            difficulte: "Le principal défi consistait à implémenter le routage avec React Router DOM pour naviguer efficacement entre les différentes pages de l'application.",
            images: [
                require('../../images/projet5/Capture1.PNG'),
                require('../../images/projet5/Capture2.PNG')
            ],
            skills: "React, Sass, node.js, figma, git",
            github: "https://github.com/Hiim99/Application-React-Location-Immobili-re"
        },
        {
            title: "Mon Vieux Grimoire",
            description: "Collaboration avec un développeur front-end pour créer 'Mon Vieux Grimoire', un site de référencement et de notation de livres pour une chaîne de librairies.",
            difficulte: " L'un des défis majeurs a été de gérer l'ajout de livres avec une image dans la base de données tout en optimisant les performances de téléchargement.",
            images: [
                require('../../images/projet6/Capture1.PNG'),
                require('../../images/projet6/Capture2.PNG'),
                require('../../images/projet6/Capture3.PNG')
            ],
            skills: "NodeJs, ExpressJs, mongoDB, mongoose,multer, SHarp, JWT, figma, git",
            github: "https://github.com/Hiim99/site-de-notation-de-livres"
        },
        {
            title: "Menu Maker by Qwenta",
            description: "Planification et préparation du projet 'Menu Maker' pour Qwenta, un site permettant aux restaurateurs de créer et gérer leurs menus en ligne facilement.",
            difficulte: " En tant que Product Owner, la principale difficulté résidait dans l'estimation précise de la complexité des tâches pour assurer une planification efficace du projet.",
            images: [
                require('../../images/projet7/Capture1.PNG'),
                require('../../images/projet7/Capture2.PNG')
            ],
            skills: "Figma, Notion, Feedly",
            github: "https://spark-lupin-eb0.notion.site/dd7188e162e6498f80db728a5fde6465?v=40b4a458f1a648e38ef61bc2e024edca&p=531e6b16c9e24a4484f3d7e0d8908a52&pm=s"
        },
        {
            title: "Débug et optimisation d'un site web de photographe",
            description: "Optimisation SEO du site web de la photographe Nina Carducci. Amélioration des performances et de l'accessibilité, mise en place du référencement local et des métadonnées pour les réseaux sociaux, et correction des bugs de navigation de la galerie d'images. Résultat : un site plus rapide et mieux référencé.",
            difficulte: "Le défi principal consistait à augmenter significativement le pourcentage de performance du site, ce qui impliquait une analyse minutieuse des points de blocage et une optimisation en profondeur du code existant.",
            images: [
                require('../../images/projet4/Capture1.PNG'),
                require('../../images/projet4/Capture2.PNG')
            ],
            skills: "SEO, Audit lighthouse, wave evaluationg tool, Chrome DevTools",
            github: "https://github.com/Hiim99/site-de-photographe"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className='myWorks'>
            <div>
                <h1>Mes réalisations</h1>
            </div>
            <div className="cards-wrapper">
                {projects.map((project, index) => (
                    <div
                        className="card-container"
                        key={index}
                        onClick={() => openModal(project)}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}                        >
                        <div className="image-container">
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop={true}
                                autoPlay={hoveredCard === index} 
                                interval={2000}                               
                                stopOnHover={true}                            >
                                {project.images.map((image, idx) => (
                                    <div key={idx}>
                                        <img src={image} alt="" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="card-title">
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <p>Difficulté surmontée : {selectedProject.difficulte}</p>
                        <p><strong>Compétences utilisées :</strong> {selectedProject.skills}</p>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                            Voir le projet sur GitHub
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Presentation;