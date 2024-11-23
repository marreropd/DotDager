const SoundCloudPlayer = () => {
  return (
    <>
      <iframe
        id="myIframeId"
        style={{ opacity: "0.85" }}
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
