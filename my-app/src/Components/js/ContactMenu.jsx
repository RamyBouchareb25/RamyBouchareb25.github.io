import  React, {useState,useRef,forwardRef} from "react";
import "../css/ContactMenu.css";
import Arrow from '../../image/arrow.svg';
import mail from '../../image/mail-icon.svg';
import phone from '../../image/phone-icon.svg';
import linkSvg from '../../image/Link.svg';

const ContactMenu = forwardRef((props,ref) => {
    const [isActive, setisActive] = useState(true);
    const [isActive1, setisActive1] = useState(true);
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const handleClick1 = () => {
        setisActive(!isActive);
        myRef1.current.style.height = isActive ? "100px" : "0px";
    };
    const handleClick2 = () => {
        setisActive1(!isActive1);
        myRef2.current.style.height = isActive1 ? "100px" : "0px";
    };
    return (
        <menu ref={ref} className="ctx">
            <button className="Contact-Button" onClick={handleClick1}>
                <img src={Arrow} className={isActive ? "Arrow Selected" : "Arrow"} alt="Arrow" />
                contact
            </button>
            <div ref={myRef1} style={{
                height: 0,
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
            }}>
                <p className="elem-container">
                    <img src={mail} alt="e-mail" className="icon"/>
                    <a className="elem-button" href="mailto:ramybouchareb@outlook.com" target="_blank">ramybouchareb@outlook.com</a>
                </p>
                <p className="elem-container">
                    <img src={phone} alt="phone" className="icon"/>
                    <a className="elem-button" href="tel:+213772864262" target="_blank">+213772864262</a>
                </p>
            </div>
            <button className="Contact-Button border-top" onClick={handleClick2}>
                <img src={Arrow} className={isActive1 ? "Arrow Selected" : "Arrow"} alt="Arrow" />
                find-me-also-in
            </button>
            <div ref={myRef2} style={{
                height: 0,
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
            }}>
                <p className="elem-container">
                    <img src={linkSvg} alt="Link" className="icon small"/>
                    <a className="elem-button" href="https://www.instagram.com/boucharebramy/" target="_blank">Instagram Account</a>
                </p>
                <p className="elem-container">
                    <img src={linkSvg} alt="Link" className="icon small"/>
                    <a className="elem-button" href="https://www.linkedin.com/in/ramy-bouchareb-03536b227/" target="_blank">Linkedin Account</a>
                </p>

            </div>
        </menu>
    );
});

export default ContactMenu;