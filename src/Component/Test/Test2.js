import React, { useEffect, useState } from 'react';
import song from "../../Assets/[Royalty Free] Background music for Real Estate presentation & Corporate videos (online-audio-converter.com).mp3";
const Test2 = () => {
    const [audioPlay, setAudioPlay] = useState(true)
    const audio = new Audio(song);
    audio.loop = true;

    // useEffect(
    //     () => {
    //         audio.play()
    //     }, [useEffect]
    // );

    return (
        <div>
            {
                !audioPlay ?
                    <button
                        onClick={() => {
                            setAudioPlay(true)
                            audio.play();
                            audio.loop = true;

                        }}
                    >
                        Play
                    </button>
                    :
                    <button onClick={() => {
                        setAudioPlay(false)
                        audio.pause();
                        audio.loop = false;

                    }}>Pause</button>

            }
        </div >

    );
};

export default Test2;