import React from 'react';
import './contact.css';

function Contact() {
    return (
        <section className='contact'>
            <div className='contact-container'>
                <div className='contact-info'>
                    <div className='mecontacter'>
                        <h1>Me contacter</h1>
                    </div>
                    <div className='phoneEmail'>
                        <p><img src={require('../../images/phone-logo.png')} alt='logo telephone'></img> +33 6 05 97 07 99 </p>
                        <p><img src={require('../../images/email-logo.png')} alt='logo email'></img> fad-oua.boulehj@hotmail.com </p>    
                    </div>
                </div>
                <div className='email-illu'>
                    <img src={require('../../images/Design.png')} alt='logo telephone'></img>
                </div>
            </div>
        </section>
    );
}

export default Contact;
