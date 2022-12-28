import React, { useState } from 'react';

export default function Textform(props) {
    const changeCaseToUpper = () => {
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
    }
    const textboxtext = (event) => {
        setText(event.target.value)
    }
    const copyText = () => {
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState("Enter text here")

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1"  value={text} onChange={textboxtext} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={changeCaseToUpper}>Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={copyText}>Copy Text</button>
            <div className="mt-4">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} characters </p>
            </div>
        </>
    )
}
