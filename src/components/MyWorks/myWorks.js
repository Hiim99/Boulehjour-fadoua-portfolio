import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './myWorks.css';

function Presentation() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [clickedCard, setClickedCard] = useState(null);

    const projects = [
        {
            title: "Agence de voyage",
            description: "Intégration de l'interface utilisateur d'une application web innovante permettant aux utilisateurs de rechercher et de réserver des hébergements et des activités touristiques dans diverses villes. Ce projet vise à offrir une plateforme intuitive et conviviale pour planifier des voyages, avec des fonctionnalités de recherche avancées et des recommandations personnalisées pour des expériences locales uniques.",
            images: [
                require('../../images/projet2/Capture1.PNG'),
                require('../../images/projet2/Capture2.PNG'),
                require('../../images/projet2/Capture3.PNG')
            ]
        },
        {
            title: "Création du site portfolio d'une architecte d'intérieur",
            description: "Ce projet visait à mettre en valeur les réalisations et compétences de l'architecte à travers un site web élégant et fonctionnel. Mon rôle consistait à développer la page de présentation des travaux, à créer la page de connexion de l'administrateur, et à concevoir une modale pour l'upload de nouveaux médias. Grâce à une collaboration étroite avec l'équipe et une utilisation efficace des outils de gestion de projet, j'ai contribué à la réalisation d'un site web professionnel et attrayant.",
            images: [
                require('../../images/projet3/Capture1.PNG'),
                require('../../images/projet3/Capture2.PNG'),
                require('../../images/projet3/Capture3.PNG')
            ]
        },
        {
            title: "Kasa, une entreprise de location d’appartements entre particuliers",
            description: "Refonte du site web de Kasa, une entreprise de location d'appartements, en utilisant React pour le front-end. Participation à la modernisation de l'application, en suivant les nouvelles maquettes et les guidelines techniques. Développement de composants interactifs et responsives, intégration des dernières annonces de logements à partir de données JSON, et amélioration des fonctionnalités de la galerie photo et des menus déroulants pour une meilleure expérience utilisateur.",
            images: [
                require('../../images/projet5/Capture1.PNG'),
                require('../../images/projet5/Capture2.PNG')
            ]
        },
        {
            title: "Mon Vieux Grimoire",
            description: "Collaboration avec un développeur front-end pour créer 'Mon Vieux Grimoire', un site de référencement et de notation de livres pour une chaîne de librairies. Responsable du développement de l'API backend pour gérer l'ajout et la notation des livres, ainsi que l'optimisation des images envoyées par les utilisateurs. Coordination avec le front-end pour assurer une intégration fluide et conforme aux bonnes pratiques de développement durable.",
            images: [
                require('../../images/projet6/Capture1.PNG'),
                require('../../images/projet6/Capture2.PNG'),
                require('../../images/projet6/Capture3.PNG')
            ]
        },
        {
            title: "Menu Maker by Qwenta",
            description: "Planification et préparation du projet 'Menu Maker' pour Qwenta, un site permettant aux restaurateurs de créer et gérer leurs menus en ligne facilement. Responsable de la création des spécifications techniques et de la mise en place d'un tableau Kanban pour organiser les tâches du projet. Développement d'un système de veille technologique pour assurer l'alignement avec les dernières pratiques en développement web.",
            images: [
                require('../../images/projet7/Capture1.PNG'),
                require('../../images/projet7/Capture2.PNG')
            ]
        },
        {
            title: "Débug et optimisation d'un site web de photographe",
            description: "Optimisation SEO du site web de la photographe Nina Carducci. Amélioration des performances et de l'accessibilité, mise en place du référencement local et des métadonnées pour les réseaux sociaux, et correction des bugs de navigation de la galerie d'images. Résultat : un site plus rapide et mieux référencé.",
            images: [
                require('../../images/projet4/Capture1.PNG'),
                require('../../images/projet4/Capture2.PNG')
            ]
        }
    ];

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
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={() => setClickedCard(index === clickedCard ? null : index)}
                    >
                        <div className={`image-container ${clickedCard === index ? 'hidden' : ''}`}>
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop={true}
                                autoPlay={hoveredCard === index}
                                interval={2000}
                                stopOnHover={true}
                            >
                                {project.images.map((image, idx) => (
                                    <div key={idx}>
                                        <img src={image} alt="" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className={`card-title ${clickedCard === index ? 'hidden' : ''}`}>
                            <h3>{project.title}</h3>
                        </div>
                        <div className={`card-body ${clickedCard === index ? 'visible' : ''}`}>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Presentation;

