    import React from "react";
    import Highlight, { defaultProps } from "prism-react-renderer";

    export const CodeBlock = ({ code, language ,theme}) => {
    return (
        <Highlight {...defaultProps} theme={theme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
            return (
            <pre className={className} style={style}>
                <code>
                    {tokens.map((line, idx) => {
                        return (
                        <div {...getLineProps({ line, key: `line-${idx}` })}>
                            {line.map((token, i) => {
                            return (
                                <span
                                {...getTokenProps({ token, key: `token-${i}` })}
                                />
                            );
                            })}
                        </div>
                        );
                    })}
                    </code>
            </pre>
            );
        }}
        </Highlight>
    );
    };
