import videojs from "video.js";
 
export default function videoPlayer(id) {
    const options = { autoplay: false, controls: true };
    return videojs(id, options, () => {
        videojs.log('Your player is ready!');
    });
} 
    

