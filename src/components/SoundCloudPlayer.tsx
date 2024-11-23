import { useState } from "react";

const SoundCloudPlayer = () => {
  const [first, setFirst] = useState({
    opacity: "0.85",
    position: "absolute",
    top: "-9999em",
    visibility: "hidden",
  } as any);
  return (
    <>
      <iframe
        style={first}
        onLoad={() => {
          setTimeout(() => {
            setFirst({
              opacity: "0.85",
              display: "block",
            });
          }, 1300);
        }}
        // style="position: absolute; top: -9999em; visibility: hidden;"
        width="100%"
        height="300"
        scrolling="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1660528670&color=%23ffd399&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </>
  );
};

export default SoundCloudPlayer;
