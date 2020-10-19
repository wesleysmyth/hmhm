import md5 from "md5";

const magazines = [
    {
        imgSrc: "/src/images/DSC_0001_original.jpeg",
        title: "DSC_0001_original",
        summary: "Another fdhjsaklfhdjs afhjdklsahfj kdlahsjkfl djsklahfj kdlajsfkldhjksal fhjkds afjklhdjk salhfjk lhsafjk .",
        tags: [ "new", "001" ],
        pages: [
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg",
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg",
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg",
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            }
        ]
    },
    {
        imgSrc: "/src/images/DSC_0002_original.jpeg",
        title: "DSC_0002_original",
        summary: "Another fdhjsaklfhdjs afhjdklsahfj kdlahsjkfl djsklahfj kdlajsfkldhjksal fhjkds afjklhdjk salhfjk lhsafjk .",
        tags: [ "old", "weird" ],
        pages: [
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            }
        ]
    },
    {
        imgSrc: "/src/images/DSC_0003_original.jpeg",
        title: "DSC_0003_original",
        summary: "Another fdhjsaklfhdjs afhjdklsahfj kdlahsjkfl djsklahfj kdlajsfkldhjksal fhjkds afjklhdjk salhfjk lhsafjk .",
        tags: [ "new", "weird" ],
        pages: [
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg"
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            }
        ]
    },
    {
        imgSrc: "/src/images/DSC_0038_original.jpeg",
        title: "DSC_0038_original",
        summary: "Another fdhjsaklfhdjs afhjdklsahfj kdlahsjkfl djsklahfj kdlajsfkldhjksal fhjkds afjklhdjk salhfjk lhsafjk .",
        tags: [ "new", "something else", "weird" ],
        pages: [
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg"
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            }
        ]
    },
    {
        imgSrc: "/src/images/DSC_0039_original.jpeg",
        title: "DSC_0039_original",
        summary: "Another fdhjsaklfhdjs afhjdklsahfj kdlahsjkfl djsklahfj kdlajsfkldhjksal fhjkds afjklhdjk salhfjk lhsafjk .",
        tags: [ "old", "hot" ],
        pages: [
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg"
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            }
        ]
    },
    {
        imgSrc: "/src/images/DSC_0040_original.jpeg",
        title: "DSC_0040_original",
        summary: "Another fdhjsaklfhdjs afhjdklsahfj kdlahsjkfl djsklahfj kdlajsfkldhjksal fhjkds afjklhdjk salhfjk lhsafjk .",
        tags: [ "new", "hot" ],
        pages: [
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg"
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            }
        ]
    },
    {
        imgSrc: "/src/images/DSC_0041_original.jpeg",
        title: "DSC_0007_original",
        summary: "Another fdhjsaklfhdjs afhjdklsahfj kdlahsjkfl djsklahfj kdlajsfkldhjksal fhjkds afjklhdjk salhfjk lhsafjk .",
        tags: [ "001" ],
        pages: [
            {
                original: "/src/images/DSC_0041_original.jpeg",
                thumbnail: "/src/images/DSC_0041_original.jpeg"
            },
            {
                original: "/src/images/DSC_0001_original.jpeg",
                thumbnail: "/src/images/DSC_0001_original.jpeg"
            },
            {
                original: "/src/images/DSC_0002_original.jpeg",
                thumbnail: "/src/images/DSC_0002_original.jpeg"
            },
            {
                original: "/src/images/DSC_0003_original.jpeg",
                thumbnail: "/src/images/DSC_0003_original.jpeg"
            },
            {
                original: "/src/images/DSC_0038_original.jpeg",
                thumbnail: "/src/images/DSC_0038_original.jpeg"
            },
            {
                original: "/src/images/DSC_0039_original.jpeg",
                thumbnail: "/src/images/DSC_0039_original.jpeg"
            },
            {
                original: "/src/images/DSC_0040_original.jpeg",
                thumbnail: "/src/images/DSC_0040_original.jpeg"
            }
        ]
    }
].map(magazine => {
    magazine.id = md5(magazine.imgSrc); // imgSrc must be unique for each magazine
    return magazine;
});

export default magazines;
