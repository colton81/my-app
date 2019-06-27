import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import VideoCover from "react-video-cover";

export default class Section1 extends Component {
  render() {
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
              width: "auto",
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
          <h1 class="display-3">Video Header</h1>
          <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p>
        </div>
      </header>
    );
  }
}
