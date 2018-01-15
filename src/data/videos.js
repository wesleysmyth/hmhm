import md5 from "md5";

const videos = [
    {
        src: "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1607/8/208036501/710378441.mp4?token=58c5eb22_0xdfaed5cc298e843279287b464330a6cdb340f804",
        title: "Pre-Launch 001",
        imgSrc: "https://html.com/wp-content/uploads/very-large-flamingo.jpg",
        imgAlt: "Alt 1",
    },
    {
        src: "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/755/8/203777141/692482461.mp4?token=58c5d4f7_0x4891d52c4b2e327cb5ec92a65c461e2b66c6f5d8",
        title: "Paper",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 2"
    },
    {
        src: "http://wes.is/h.mov",
        title: "Another Title",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 3",
        chapters: [
            {
                endTime: 6,
                title: "HALFMANHALFMACHINE 001 : COPYRIGHT INFRINGEMENT",
                text: "Halfmanhalfmachine // death + time // the space between life and death // the thoughts behind"
            },
            {
                endTime: 10,
                title: "( Apteka ) Episode 001 : Starring Elle Kaye Dawson  @ellekayedawson",
                text: "There are ghosts in the studio , possibly, she thinks so"
            },
            {
                endTime: 15,
                title: "(The Big Balloon) feature remixed / for the performance by @royacarreras",
                text: "Based on the work of Roya Carreras. Feat. Caitlin Taylor, Elise Ritzel, Eloise DeLuca. Movement by Roya Carreras"
            },
            {
                endTime: 21,
                title: "@devathediva",
                text: "Deva"
            },
            {
                endTime: 23,
                title: "Julia Cumming x Hanna Rundlof from the first HMHM recording",
                text: "From year one of HMHM @juliacumming @sunflowerbean @hannarundlof - thank u x"
            },
            {
                endTime: 27,
                title: "Orson Welles is Speaking 2 you",
                text: "F is for Fake / The Mercury Theater"
            },
            {
                endTime: 34,
                title: "Anne Murray",
                text: "Importance of audio , audio memory, you can remember the feelings that way"
            },
            {
                endTime: 35,
                title: "Godard film x  FKA Twigs",
                text: "Film for FKA Twigs party Showgirls x Goddard"
            },
            {
                endTime: 47,
                title: "( Ice Cube ) Wicked",
                text: "Ice Cube Wicked Epic Moments https://www.youtube.com/watch?v=SsWsmH2d_Qg something http://google.com"
            },
            {
                endTime: 66,
                title: "Kristy Ann Muniz",
                text: "Prayer Hands // Prayer Hands // To Tape //"
            },
            {
                endTime: 68,
                title: "( The Beatnuts ) Reign of the Tec",
                text: "https://www.youtube.com/watch?v=SXeypq9dWAA"
            }
        ]
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
                startTime: 0,
                endTime: 6,
                title: "HALFMANHALFMACHINE 001 : COPYRIGHT INFRINGEMENT",
                text: "Halfmanhalfmachine // death + time // the space between life and death // the thoughts behind"
            }
        ],
        // subconciousText: [
        //     "line one",
        //     "line two",
        //     "line threefdhjsakfhdjkslahfjkdlsahfjkldshajklfhdsjklahfdjklsahfjkldshafjkdlsahjkl",
        //     "line four",
        //     "line five",
        //     "line six",
        //     "line seven",
        //     "line eight",
        //     "line nine",
        //     "line ten",
        //     "line eleven",
        //     "line twelve",
        //     "line thirteen",
        //     "line fourteen",
        //     "line fifteen",
        //     "line sixteen",
        // ]
    }
].map(video => {
    video.id = md5(video.src);
    return video;
});

export default videos;
