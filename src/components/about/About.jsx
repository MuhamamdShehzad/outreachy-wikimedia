import React from 'react'
import './about.scss'
function About() {
  return (
    <div id="about-main">
        <div class="jumbotron">
            <div class="jumbotron-inner">
                <div class="top-box">
                    <div class="content-box">
                        <h1>
                            About Wikimedia
                        </h1>
                        <p>
                           Wikimedia is a free open-source wiki software used to power Wikipedia, thousands of wikis.  <br /> Our mission is to make the world more inclusive through free education.
                        </p>
                    </div>
                </div>
            </div>
            <div class="img-layer-container">
                <div class="team-image" id="team-image">
                    <img src="https://apimatic.io/img/theme/aboutUs/images-1.png" alt='Background Img' />
                </div>

                <div class="circles-container">
                    <div class="img-1">
                        <img src="https://apimatic.io/img/theme/aboutUs/Circles-1-1.svg" alt='Background Img' />                        
                    </div>
                    <div class="img-2">
                        <img src="https://apimatic.io/img/theme/aboutUs/Circles-2-1.svg" alt='Background Img'/>                        
                    </div>                    
                </div>           
            </div>
        </div>
        <div class="story-container">
            <div class="need-for-dx-container">
                <h3 class="text-center">
                    Need for Open Source Softwares
                </h3>
                <p>
                    Open source fosters ingenuity; programmers can use pre-existing code to improve the software and even come up with their own innovations. Open source comes with a built-in community that continuously modifies and improves the source code. Open source provides great learning opportunities for new programmers.
                </p>
                <div class="img-container">
                    <img src="https://apimatic.io/img/theme/aboutUs/dxFlow.svg" alt="apimatic developer experience process" class="img-responsive"/>
                </div>
            </div>
            <div class="container-divider"></div>
            <div class="our-tech-container">
                <h3 class="text-center">
                    Wikimedia Histroy
                </h3>
                <p>
                    Wikipedia was launched in January 2001. At the time, it was mostly an experiment, to try to boost the production of content for Nupedia, a free-content, but peer-reviewed, encyclopedia created by Jimmy Wales. Because it was an experiment, Wikipedia was originally powered by UseModWiki, an existing GPL wiki engine written in Perl, using CamelCase and storing all pages in individual text files with no history of changes made.
                </p>
                <div class="img-container">
                    <img src="https://apimatic.io/img/theme/cgaasIcons/cgaasProcess.gif" alt="apimatic code generation engine" class="img-responsive"/>
                </div>
            </div>
           
            
        </div>
    </div>  
  )
}

export default About