import md5 from "md5";

const videos = [
    {
        src: "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1607/8/208036501/710378441.mp4?token=58c5eb22_0xdfaed5cc298e843279287b464330a6cdb340f804",
        title: "Pre-Launch 001",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://html.com/wp-content/uploads/very-large-flamingo.jpg",
        imgAlt: "Alt 1",
        tags: [ "new", "001" ],
        time: 323
    },
    {
        src: "https://vimeo.com/46cbda2c-ea72-466a-93e2-2074221ac902",
        title: "Paper",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 2",
        tags: [ "new", "shows", "fashion" ],
        time: 32873,
    },
    {
        src: "./src/videos/don.mp4",
        title: "Another Title",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 3",
        tags: [ "new", "music" ],
        time: 323,
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
                text: "Based on the work of Roya Carreras. Feat. Caitlin Taylor, Elise Ritzel, Eloise DeLuca. Movement by Roya Carreras, A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned., A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned."
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
        src: "./src/videos/twirling_fireworks.mp4",
        title: "Fireworks",
        summary: "Scientist  fdshjaklfdsa fdhsjaklfhdjkslaf jkdlsa jkfl dsjklaf djklsafhjkdajklsf jdksafkl dajsklf djksafkldsahjkfhdjklasfjk .",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Firework",
        tags: [ "new", "shows", "fashion" ],
        time: 894,
    },
    {
        src: "",
        title: "Something Else",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 4",
        tags: [ "new", "shows", "music", "001", "fashion" ],
        time: 323,
        links: [{
            src: "https://google.com",
            title: "blah",
        }],
    },
    {
        src: "",
        title: "Goldilocks",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 5",
        tags: [ "fashion" ],
        time: 323
    },
    {
        src: "",
        title: "Mad Scientist",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 6",
        tags: [ "shows", "001", "fashion" ],
        time: 323,
        links: [ {
            src: "http://wes.is",
            title: "Believe",
        } ],
    },
    {
        src: "https://player.vimeo.com/external/87899059.hd.mp4?s=8bebb1223baebfcffcdd63ef7e6452dcb7a1afc1&profile_id=119",
        title: "Girl",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 7",
        tags: [ "new", "shows", "music" ],
        time: 323,
        chapters: [
            {
                startTime: 0,
                endTime: 6,
                title: "HALFMANHALFMACHINE 001 : COPYRIGHT INFRINGEMENT",
                text: "Halfmanhalfmachine // death + time // the space between life and death // the thoughts behind"
            }
        ]
    }
].map(video => {
    video.id = md5(video.src);
    return video;
});

export default videos;
