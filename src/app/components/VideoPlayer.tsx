import { useState, useRef, useEffect } from "react";
type Props = {
  src: string;
  playing: boolean;
};
export const VideoPlayer = ({ src, playing }: Props) => {
  const videoTag = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (playing) {
      videoTag.current?.play();
    } else {
      videoTag.current?.pause();
    }
  });
  return <video ref={videoTag} src={src} loop></video>;
};
