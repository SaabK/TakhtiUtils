import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    // To change text, use setText('text changed')

    const upperClick = () => {
        let upperedText = text.toUpperCase();
        setText(upperedText)
    }

    const lowerClick = () => {
        let loweredText = text.toLowerCase();
        setText(loweredText)
    }

    const changeHandle = (event) => {
        setText(event.target.value);
    }

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" rows="10" value={text} onChange={changeHandle} placeholder={"Start Typing..."} ></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={lowerClick}>Convert To Lowercase</button>
        </div>
        <div className="container my-2">
            <h1>Text Info</h1>
            <p>{(text.split(" ")).length} words and {text.length} characters</p>
        </div>
        </>
    )
}
