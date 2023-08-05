import React , {useRef,useState} from "react";
import Arrow from '../../image/arrow.svg';
import Flutter from '../../image/flutter';
import ReactIcon from '../../image/React'
import Html from '../../image/html'
import Css from '../../image/css'
import Unity from '../../image/unity'
import '../css/projectMenu.css';
import CheckList from "./Checklist";



function ProjectMenu({flutterChange,reactChange,htmlChange,cssChange,unityChange}) {
        const [isActive1, setisActive1] = useState(true);
        const [isCheckedReact, setIsCheckedReact] = useState(false);
        const [isCheckedFlutter, setIsCheckedFlutter] = useState(false);
        const [isCheckedHtml, setIsCheckedHtml] = useState(false);
        const [isCheckedCss, setIsCheckedCss] = useState(false);
        const [isCheckedUnity, setIsCheckedUnity] = useState(false);
        const myRef2 = useRef(null);
        const handleClick2 = () => {
            setisActive1(!isActive1);
            myRef2.current.style.height = isActive1 ? myRef2.current.scrollHeight + "px" : "0px";
        };
        const handleFlutterChange = () => {
            setIsCheckedFlutter(!isCheckedFlutter);
            flutterChange();
        }
        const handleReactChange = () => {
            setIsCheckedReact(!isCheckedReact);
            reactChange();
        }
        const handleHtmlChange = () => {
            setIsCheckedHtml(!isCheckedHtml);
            htmlChange();
        }
        const handleCssChange = () => {
            setIsCheckedCss(!isCheckedCss);
            cssChange();
        }
        const handleUnityChange = () => {
            setIsCheckedUnity(!isCheckedUnity);
            unityChange();
        }
        return (
            <menu className="ctx">
                <button className="Contact-Button border-top" onClick={handleClick2}>
                    <img src={Arrow} className={isActive1 ? "Arrow Selected" : "Arrow"} alt="Arrow" />
                    projects
                </button>
                <div ref={myRef2} style={{
                    height: 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease-in-out",
                }}>
                    <CheckList setFunc={handleReactChange} title="React" opacity={isCheckedReact ? 1 : 0.5} img={<ReactIcon />}/>
                    <CheckList setFunc={handleFlutterChange} title="Flutter" opacity={isCheckedFlutter ? 1 : 0.5} img={<Flutter size={20} />}/>
                    <CheckList setFunc={handleHtmlChange} title="Html" opacity={isCheckedHtml ? 1 : 0.5} img={<Html />}/>
                    <CheckList setFunc={handleCssChange} title="Css" opacity={isCheckedCss ? 1 : 0.5} img={<Css />}/>
                    <CheckList setFunc={handleUnityChange} title="Unity" opacity={isCheckedUnity ? 1 : 0.5} img={<Unity />}/>
                </div>
            </menu>
        );
}

export default ProjectMenu;