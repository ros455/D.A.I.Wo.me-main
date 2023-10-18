import React,{useState} from 'react';
import '../../style/faq.scss'
import { Link, useNavigate } from 'react-router-dom';
import ItemValue from './ItemValue';






const FAQ = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [arr,setArr] = useState([
        {   name :'How much can I start investing?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'What are smart contracts?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'What is the minimum investment amount?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'And what about  monetization?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'Who was D.A.I.Wo created for?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
        {   name :'And why D.A.I.Wo, and not banks or investment funds?' ,
            value : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, vitae? Maiores odio, obcaecati animi dolor beatae recusandae exercitationem architecto temporibus veritatis vel a, libero impedit nisi. Illum voluptates voluptate quas.'},
    ]);


      
    const navigate = useNavigate();

    const handleKnowMoreClick = () => {
    navigate('/faq');
    window.scrollTo(0, 0); // Прокрутка сторінки вгору
    };
    
    return (
        <div className='faq'>
            <div className="faq_wrap">
                <div className="faq_btn">FAQ</div>
                <div className="faq_answer">
                    <div className="faq_answer_text">Answers to the most frequently asked questions - everything you need to know</div>
                    <div className="faq_answer_logo">
                        <img src='/img/logo_second.svg' alt="logo" />
                    </div>
                </div>

                {arr.map((item,index)=> (

                        <ItemValue
                        key={index}
                        item = {item}
                        />
   
                    
                ))}

               
                <div className="know_more">
                <button className="btn_know_more" onClick={handleKnowMoreClick}>
                <p>Learn More</p>
                </button>
                <img src='/icons/icon_arrow-forward.svg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;