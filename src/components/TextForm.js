import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Upercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick= ()=>{
        // console.log("Upercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const  handleClearClick= ()=>{
        // console.log("Upercase was clicked" + text);
        let newText ="";
        setText(newText)
        props.showAlert("Clear text", "success")
    }
     const handleOnChange= (event)=>{     //onChange give automaticaly give one event 
        // console.log("onChange");
        setText(event.target.value)
    };
    const handleCopyClick=()=>{
      // var text = document.getElementById("myBox");
      //    text.select();
         navigator.clipboard.writeText(text);
        //  document.getSelection().removeAllRanges();
         props.showAlert("Copyed to clipboard", "success")
    }
    const handleExtraSpace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed extra spaces", "success")
    }
    
    const [text, setText] = useState('Enter Text here');
    // setText("new text") // write way to change state
  return (
    <>
    <div  className="container" >
        <h3>{props.heading} </h3>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ color:'black'}} id="myBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert To Upercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-3 my-3" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-3 my-3" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-2">
        <h3>Your text summary </h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} word, {text.length} characters</p>
        <p>{0.010 * (text.split(" ").filter((element)=>{return element.length !==0}).length)} Minutes to read this content</p>
        <h4>Preview</h4>
        <p>{text}</p>
       
    </div>
    </>
  )
}


