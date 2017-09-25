import Crypto from "crypto-js";

const videos = [
    {
        src: "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1607/8/208036501/710378441.mp4?token=58c5eb22_0xdfaed5cc298e843279287b464330a6cdb340f804",
        title: "Pre-Launch 001",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 1",
    },
    {
        src: "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/755/8/203777141/692482461.mp4?token=58c5d4f7_0x4891d52c4b2e327cb5ec92a65c461e2b66c6f5d8",
        title: "Paper",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 2",
        links: [{
            src: "...url...",
            title: "Instagram",
        }],
    },
    {
        src: "",
        title: "Another Title",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 3",
    },
    {
        src: "",
        title: "Something Else",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 4",
        links: [{
            src: "https://google.com",
            title: "blah",
        }],
    },
    {
        src: "",
        title: "Goldilocks",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 5",
    },
    {
        src: "",
        title: "Mad Scientist",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 6",
        links: [{
            src: "http://wes.is",
            title: "Believe",
        }],
    },
    {
        src: "https://player.vimeo.com/external/87899059.hd.mp4?s=8bebb1223baebfcffcdd63ef7e6452dcb7a1afc1&profile_id=119",
        title: "Girl",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 7",
        chapters: [
            {
                startTime: 43728910,
                endTime: 47389012,
                title: "fhdjsaklhfjdskahlfjd"
            }
        ],
        subconciousText: [
            "line one",
            "line two",
            "line threefdhjsakfhdjkslahfjkdlsahfjkldshajklfhdsjklahfdjklsahfjkldshafjkdlsahjkl",
            "line four",
            "line five",
            "line six",
            "line seven",
            "line eight",
            "line nine",
            "line ten",
            "line eleven",
            "line twelve",
            "line thirteen",
            "line fourteen",
            "line fifteen",
            "line sixteen",
        ]
    }
].map((video, index) => {
    video.id = index;
    video.urlHash = Crypto.AES.encrypt(video.title, video.src);
    return video;
});

export default videos;
