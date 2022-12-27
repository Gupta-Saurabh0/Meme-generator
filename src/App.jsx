import React from "react"
import  ReactDOM  from "react-dom"
import Header from "./component/Header"
import Meme from "./component/Meme"
import "./style.css"


export default function App(){
  return(
    <div>
      <Header/ >
      <Meme/ >
    </div>
  )
}