import { React } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import '../css/snippet.css'


function snippet({code,isActive,lang='javascript',width='40vw'}) {
    return (
    <div className="snippet-container" style={{
        opacity:isActive ? 1 : 0.6,
        width:width,
    }}>
        <SyntaxHighlighter wrapLongLines={true} language={lang} style={atomOneDark}>
            {code}
        </SyntaxHighlighter>
    </div>);
}

export default snippet;