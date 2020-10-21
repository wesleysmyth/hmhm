import md5 from "md5";
const pathPrefix = `${global.publicPath.slice(0, -1)}/src/videos/`;

const videos = [
    {
        src: "don.mp4",
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
        src: "AL-movie-picking-up-radio.mp4",
        title: "Pre-Launch 001",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://html.com/wp-content/uploads/very-large-flamingo.jpg",
        imgAlt: "Alt 1",
        tags: [ "new", "001" ],
        time: 323
    },
    {
        src: "6fe27bfe-66e4-40c8-bc94-524517f7c7ec.mp4",
        title: "Paper",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 2",
        tags: [ "new", "shows", "fashion" ],
        time: 32873,
    },
    {
        src: "twirling_fireworks.mp4",
        title: "Fireworks",
        summary: "Scientist  fdshjaklfdsa fdhsjaklfhdjkslaf jkdlsa jkfl dsjklaf djklsafhjkdajklsf jdksafkl dajsklf djksafkldsahjkfhdjklasfjk .",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Firework",
        tags: [ "new", "shows", "fashion" ],
        time: 894,
    },
    {
        src: "1192307_10200913370011554_18639_n.mp4",
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
        src: "28299419_173954019894634_8143499421917642752_n.mp4",
        title: "Goldilocks",
        summary: "A mfmidsajf9ephw a9pfhd sahfd9sapdfu spafhidhsa klfhdisafiu pdhsap fhdis auhfp disahfip uadis pwned.",
        imgSrc: "https://unsplash.it/300/200?random",
        imgAlt: "Alt 5",
        tags: [ "fashion" ],
        time: 323
    },
    {
        src: "1303015_10200981346470923_13603_n.mp4",
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
        src: "2017-04-28.mov",
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
    video.src = `${pathPrefix}${video.src}`;
    return video;
});

export default videos;
