import React from 'react';
import './competences.css';

function Competences() {
    return (
        <div className="competences">
            <div className="competence">
                <img src="https://cdn-icons-png.flaticon.com/512/8099/8099697.png" alt="HTML" />
                <h3>Front-end</h3>
                <ul>
                    <li>HTML / CSS / Sass</li>
                    <li>Javascript / JSX</li>
                    <li>React</li>

                </ul>
            </div>
            <div className="competence">
                <img src="https://cdn-icons-png.flaticon.com/512/8099/8099442.png" alt="Back-end" />
                <h3>Back-end</h3>
                <ul>
                    <li>MySQL / MongoDB / SQLite</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Multer/ Sharp</li>
                    <li>JWT</li>
                </ul>
            </div>
            <div className="competence">
                <img src="https://cdn-icons-png.flaticon.com/128/1055/1055683.png" alt="Outils" />
                <h3>Outils</h3>
                <ul>
                    <li>Visual Studio</li>
                    <li>Git / GitHub</li>
                    <li>Notion (Kanban)</li>
                    <li>Feedly (Systèmes de veille)</li>
                    <li>Wave evaluating tool</li>
                    <li>Lighthouse/ Chrome DevTools (SEO)</li>
                    <li>Postman / Swagger</li>
                    <li>Figma / Canva</li>
                    <li>Miro</li>

                    
                    
                </ul>
            </div>
        </div>
    );
}

export default Competences;
