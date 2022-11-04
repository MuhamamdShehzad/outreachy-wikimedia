import React from 'react'
import './body.scss'
function Body() {
  return (
    <section class="hero">
      <div class="intro-text">
        <h1>
          <span class="hear"> Wikimedia helps you collect and organize knowledge and </span> <br />
          <span class="connecting">  make it available to people.</span>
        </h1>
        <p>
          It's powerful, multilingual, free and open, extensible, customizable, reliable, and free of charge. Find out more and if WikiMedia is right for you.
        </p>
        <a class="btn red" href="https://www.WikiMedia.org/wiki/WikiMedia">Learn More</a>
        
      </div>
      <div class="i-frame">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/watch?v=gedV-OScuQY&list=PLeoTcBlDanyMPuVYBZYbEORNezmemiAhv&index=1"
          title="YouTube video player"
          frameborder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div class="stand-1"></div>
        <div class="stand-2"></div>
      </div>
    </section>
  )
}

export default Body