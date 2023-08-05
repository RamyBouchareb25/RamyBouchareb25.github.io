import React from "react";
import '../css/Project.css'
import ReactImg from '../../image/React'
import FlutterImg from '../../image/flutter'
import CSSImg from '../../image/css'
import Html from "../../image/html";
import { technologies } from "./enumeration";
import Unity from "../../image/unity";
function Project({number,title,img,description,type,color='#86E1F9',visible,clickFunc} : {number:number,title:string,img:any,description:string,type:technologies,color?:string,visible:boolean,clickFunc:()=>void}) {
    const jsxElements: Record<technologies, JSX.Element> = {
        [technologies.REACT]: <ReactImg opacity={1} color="#000000"/>,
        [technologies.FLUTTER]: <FlutterImg opacity={1} color="#000000"/>,
        [technologies.HTML]: <Html opacity={1} color="#000000"/>,
        [technologies.CSS]: <CSSImg color="#000000"/>,
        [technologies.UNITY]: <Unity opacity={1} color="#000000"/>,
    }
    
    return (
        <div className="project" style={{
            opacity: visible ? 1 : 0,
            height: visible ? '360px' : '0px',
            width: visible ? '350px' : '0px',
            overflow: visible ? 'visible' : 'hidden',
            transition: 'opacity 0.5s ease-in-out',            
        }}>
            <h5>Project {number} <span>// {title}</span></h5>
            <div className="project-container">
            <img src={img} style={{width:"100%"}} />
                <div style={{
                    backgroundColor: color,
                    width: 'fit-content',
                    padding: '5px 7px 3px 7px',
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    borderRadius: '5px',
                }}>
                    {jsxElements[type]}
                </div>
                <span style={{
                    display: 'block',
                    color: 'var(--secondary-1)',
                    margin: '10px auto',
                    fontSize: '15px',
                    width: '95%',
                    height: 'auto',
                }}>
                    {description}
                </span>
                <button className="button-unset project-button view" onClick={clickFunc}>view-project</button>
            </div>
        </div>
    );
}

export default Project;