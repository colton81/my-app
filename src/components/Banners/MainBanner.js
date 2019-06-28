import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typewriter from 'typewriter-effect';
import './mainbanner.css'
 
class MainBanner extends React.Component {
    render(){
        return (
            <header
        style={{
          position: "relative",
          background_color: "black",
          height: "75vh",
          min_height: "25rem",
          width: "100%",
          background: "black",
          overflow: "hidden"
        }}
      >
            <div id="home" className="main-banner item-bg-two">
                
        <div
          class="overlay"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            z_index: "1",
            background: "black",
            opacity: "0.5"
          }}
        >
          <video
            style={{
              position: "absolute",
              min_width: "100%",
              min_height: "100%",
              width: "100%",
              height: "auto",
              z_index: "0"
            }}
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          class="container h-100"
          style={{ position: "relative", z_index: "2" }}
        >
                <div className="d-table">
                    <div className="d-table-cell">
                        
                           
                                
                                    <div className="main-banner-text">
                                        <h4>Your Expert in ASME Pressure Vessels & Tanks. </h4>
                                        <h1>Your Expert in 
                                            <Typewriter
                                                options={{
                                                    strings: ['Filter Housings.', 'Process Skids.', 'Custom Pressure Vessels.', 'Custom ASME Designs.', 'Unique.', 'Best.', 'Support.'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <AnchorLink href="#welcome" className="btn btn-primary">Get Started</AnchorLink>
                                        <AnchorLink href="#work" className="btn btn-primary view-work">View Work</AnchorLink>
                                    </div>
                               
                            
                        
                    </div>
                </div>
                </div>
            </div>
            </header>
        );
    }
}
 
export default MainBanner;