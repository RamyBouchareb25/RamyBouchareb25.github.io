import React from 'react'
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import Flutter from '../../image/flutter';

function CheckList({title,img,setFunc,opacity,Name}) {
    const color = opacity == 0.5 ? "#607B96" : "#fff";
    return (
        <>
            <label className='label' htmlFor={Name} style={{
                        transition : "all 0.3s ease-in-out",
                        opacity: opacity,
                        display: "flex",
                        alignItems: "center",
                        color: color,
                        marginTop: "10px",
                        fontSize: "15px",
                        fontWeight: "500",
                    }}>
                <Checkbox 
                name= {Name}
                onChange={(checked, event) => setFunc(checked)}
                style={{ overflow: "hidden",
                marginLeft: "10px",
                marginRight: "15px"
             }}
                
                borderColor="#607B96" 
                icon={
                <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#607B96",
                  color: "#fff",
                  alignSelf: "stretch",
                }}
              >
                
              <Icon.FiCheck />
              </div>
              }/>
                <span class="checkbox"></span>
                        {img}
                        <span style={{width:"10px"}}></span>
                        {title}
            </label>
        </>
    );
}

export default CheckList;