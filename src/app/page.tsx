"use client";

import { useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";

export const Page = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div>
      <p>{playing ? "RODANDO" : "PAUSADO"}</p>
      <button onClick={() => setPlaying(!playing)}>Play / Pause</button>
      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        playing={playing}
      />
    </div>
  );
};

export default Page;
