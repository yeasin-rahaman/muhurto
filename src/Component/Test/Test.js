import React, { Component, useEffect } from "react";

// Import your audio file
import song from "../../Assets/[Royalty Free] Background music for Real Estate presentation & Corporate videos (online-audio-converter.com).mp3";


class Test extends Component {

    // Create state
    state = {

        // Get audio file in a variable
        audio: new Audio(song),

        // Set initial state of song
        isPlaying: false,
    };

    componentDidMount() {
        // call api or anything
        this.state.audio.play();

    }


    // Main function to handle both play and pause operations
    playPause = () => {

        // Get state of song
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            // Pause the song if it is playing
            this.state.audio.pause();
        } else {

            // Play the song if it is paused
            this.state.audio.play();
        }


        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
    };



    render() {


        return (
            <div>
                {/* Show state of song on website */}
                <p>
                    {this.state.isPlaying ?
                        "Song is Playing" :
                        "Song is Paused"}
                </p>

                {/* Button to call our main function */}
                <button onClick={this.playPause}>
                    {this.state.isPlaying ?
                        "Song is Playing" :
                        "Song is Paused"}
                </button>
            </div>
        );
    }
}

export default Test;