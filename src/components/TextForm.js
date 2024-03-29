import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // To change text, use setText('text changed')

    const upperClick = () => {
        let upperedText = text.toUpperCase();
        setText(upperedText);
        props.showAlert("Text was successfully converted to Uppercase", "success", "check-circle-fill", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");
    }

    const lowerClick = () => {
        let loweredText = text.toLowerCase();
        setText(loweredText);
        props.showAlert("Text was successfully converted to Lowercase", "success", "check-circle-fill", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");
    }

    const clearClick = () => {
        setText("");
        props.showAlert("Text was cleared!", "danger", "exclamation-triangle-fill", "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z");
    }

    const changeHandle = (event) => {
        setText(event.target.value);
    }

    const capClick = () => {
        let firstChar = text.charAt(0); 
        let newText= firstChar.toUpperCase(); 
        setText(newText+text.slice(1)); 
        props.showAlert("Text was successfully Capitalized", "success", "check-circle-fill", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");
    }

    const copyClick = () => {
        let copiedText = document.getElementById("textBox");
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success", "check-circle-fill", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");
    }

    const spacesClick = () => {
        let spacedText = text.split(/[ ]+/);
        setText(spacedText.join(" "));
        props.showAlert("Extra Spaces Removed", "success", "check-circle-fill", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");
        
    }

    let wordCount = text.split(/\s+/).filter((element)=>{return element.length !== 0}).length;
    // let wordCount = text.split(" ").length - 1;

    return (
        <>
        <div className="container my-2">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={changeHandle} placeholder={"Start Typing..."} style={{backgroundColor: `${props.mode==='dark'?'#0a0a0a':'white'}`, color: `${props.mode==='dark'?'white':'black'}`}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={upperClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={lowerClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={capClick}>Capitalize Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={copyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={spacesClick}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={clearClick}>Clear Text</button>
        </div>
        <div className="container my-2">
            <h1>Text Info</h1>
            <p><strong>{wordCount}</strong> words and <strong>{text.length}</strong> characters</p>
            <p><strong>{(0.008*wordCount)}</strong> Minutes Read</p>

            <h2>Preview</h2>
            <p>{text.length===0?'Nothing to preview here...':text}</p>
        </div>
        </>
    )
}
