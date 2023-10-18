import React from 'react';
import '../../style/contacts.scss'


const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="contacts_wrap">
                <div className="contacts_btn">Contact us</div>
                <div className="contacts_main">
                    <div className="contacts_main_text">Make your mark in the world - contact us!</div>
                    <div className="contacts_main_email">
                        <div className='purple_email'>Пошта:</div>
                        <div className="contacts_email">
                            <img src='icons/icon_email.svg' alt="email" />
                            <p>info@daiwo.ai</p>  
                        </div>
                    </div>
                    <div className="contacts_main_subscribe">
                        <p><span>Start building your financial independence today</span></p>
                        <div className="input_subscribe">
                            <input className='input_email' type="text"  placeholder='Submit your mail'/>
                            <button className='subsctibe_btn'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;