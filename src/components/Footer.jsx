import './../style/footer.scss'
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from './header/Logo';


const Footer = () => {

    const [lang, setLang] = useState("ENG")
    const [isOpen, setIsOpen] = useState(false)

    const hendlerChangeLang = (value) => {
        setLang(value);
      };
    return ( 
        <footer className='footer'>
            <div className="footer_container">
                <div className="footer_nav">
                    <Logo/>
                    <div className='links footer_nav_display'>
                        <Link to='/'>Homepage</Link>
                        <Link to='/about-us'>About</Link>
                        <Link to='/service'>Service</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/contacts'>Contact</Link>
                    </div>
                    <div className="footer_email">
                        <img src='./icons/icon_email-footer.svg' alt="email" />
                        <p>info@daiwo.ai</p>  
                    </div>
                    <div 
                onClick={()=>setIsOpen(!isOpen)}
                className="glob_lang footer_lang">
                    <div style={{display:'flex'}}>
                    <img src='/icons/icons_language.svg' alt="glob" />
                    <p className='lang_select'>{lang} <img className="" src="/icons/icon_arrow-purple.svg" alt="icon"></img></p>
                    </div>
                    {isOpen &&
                        <div 
                        className='lang_option'>
                            <p onClick={(e)=>hendlerChangeLang('ENG')}>ENG</p> 
                            <p onClick={(e)=>hendlerChangeLang('УКР')}>УКР</p> 
                            <p onClick={(e)=>hendlerChangeLang('РУС')}>РУС</p> 
                        </div>
                    }
                </div>
                </div>
            </div>
            <div className="footer_border"></div>
        </footer>
     );
}
 
export default Footer;