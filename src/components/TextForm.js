import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // To change text, use setText('text changed')

    const upperClick = () => {
        let upperedText = text.toUpperCase();
        setText(upperedText);
    }

    const lowerClick = () => {
        let loweredText = text.toLowerCase();
        setText(loweredText);
    }

    const clearClick = () => {
        setText("");
    }

    const changeHandle = (event) => {
        setText(event.target.value);
    }

    const capClick = () => {
        let firstChar = text.charAt(0); 
        let newText= firstChar.toUpperCase(); 
        setText(newText+text.slice(1)); 
    }

    const copyClick = () => {
        let copiedText = document.getElementById("textBox");
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
    }

    const spacesClick = () => {
        let spacedText = text.split(/[ ]+/);
        setText(spacedText.join(" "))
    }

    let textSplit = text.split(" ").length - 1;

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={changeHandle} placeholder={"Start Typing..."} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={lowerClick}>Convert To Lowercase</button>
            <button className="btn btn-primary " onClick={capClick}>Capitalize Text</button>
            <button className="btn btn-primary mx-3" onClick={copyClick}>Copy Text</button>
            <button className="btn btn-primary " onClick={spacesClick}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-3" onClick={clearClick}>Clear Text</button>
        </div>
        <div className="container my-2">
            <h1>Text Info</h1>
            <p><strong>{textSplit}</strong> words and <strong>{text.length}</strong> characters</p>
            <p><strong>{(0.008*textSplit)}</strong> Minutes Read</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
