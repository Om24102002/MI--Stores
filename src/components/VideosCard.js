import React from 'react'
import "../styles/VideosCard.css"

const play = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>


const VideosCard = ({image,index,name}) => {
  return (
    <div className="videosCard" style={{backgroundImage:`url(${image})`}}>
        <a href="#/">{play}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideosCard
