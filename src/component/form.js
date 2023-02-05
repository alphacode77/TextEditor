import React, { useState } from 'react'

export default function Form(props) {

  const handleUpClickUpper =()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Text Changed to Uppercase","success")
  }

  const handleUpClicklower =()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Text Changed to Lowercase","success")

  }

    const handleClear = ()=>{
      setText("")
    props.showAlert("Text Editor Clear","info")

    }
  const changeHandle = (e)=>{
    setText(e.target.value)
  }

  const handleCopy = ()=>{
   
    navigator.clipboard.writeText(text)
    props.showAlert("Copied Text","success")
   

  }
const [text, setText] =useState("")

const textCount = (text)=>{
if(text===("")){
  return 0
  }

  let arr= text.split(/\s+/)
  let len = arr.length
  let count=0;
  for(let i =0; i<len; i++){
    if(arr[i]==="" || arr[i]===" ")
    count++

  }
  return len-count
}


  return (
    <>
  <div className="mb-3">
    <h3>{props.heading3}</h3>
    <textarea className="form-control my-3  my-1" value={text} onChange={changeHandle} placeholder="Write your text" id="myBox" rows="3"></textarea>
    <button  disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClickUpper}>UpperCase</button>
    <button disabled = {text.length===0} className='btn btn-secondary mx-1 my-1' onClick={ handleUpClicklower} >LowerCase</button>
    <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
    <button disabled = {text.length===0} className='btn btn-dark mx-1 my-1' onClick={handleClear}>Clear</button>
  </div>
  <div>
    <p> {textCount(text)} words {text.length} characters</p>
    <p>{((0.011*text.split(" ").length) - 0.011).toFixed(2)} Minutes to read</p>
    <h4>Preview Text</h4>
    <p>{text}</p>
  </div>
    </>
  )
}
