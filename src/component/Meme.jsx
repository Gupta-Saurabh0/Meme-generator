import React,{useState} from "react"
import memesData from "../memesData"

export default function Meme(){
     
    const[memeImage,setMemeImage]=useState({
        TopText:" ",
        BottomText:" ",
        RandomImage:"https://i.imgflip.com/30b1gx.jpg"
    })
    const[allMemeImage,setAllMemeImage]=useState(memesData)

    function getMemeImage(){
        const memesArray=allMemeImage.data.memes
        const random=Math.floor(Math.random()*memesArray.length)
        const url=memesArray[random].url
        setMemeImage(prevState=>({
            ...memeImage,
            RandomImage:url
        }))
        
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src ={memeImage.RandomImage} />
        </main>
    )
}
