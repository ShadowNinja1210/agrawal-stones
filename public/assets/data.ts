const awsBaseUrlFree = "https://agrawalstones.s3.eu-north-1.amazonaws.com";

// ***********************************************************************************
// ***************************** Contacts & Addresses ********************************
// ***********************************************************************************

const contacts = [
  {
    id: 1,
    type: "phone",
    name: "Anuj Agrawal",
    contact: 8619759018,
  },
  {
    id: 2,
    type: "phone",
    name: "Mudit Agrawal",
    contact: 9214567181,
  },
  {
    id: 3,
    type: "email",
    name: "Anuj Agrawal",
    contact: "anuj@agrawalstones.com",
  },
];

const addresses = [
  {
    id: 1,
    name: "Krishna Udhyog",
    address: ["G-329, Road number 6, Indraprasth Industrial Area,", "Kota, Rajasthan, 324001"],
    mapUrl:
      "https://www.google.com/maps/embed/v1/place?q=Indraprasth+Industrial+Area&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
  },
  {
    id: 2,
    name: "Shree Agrawal Stone Industry",
    address: ["F-8, RIICO Industrial Area, Bhawani Mandi,", "Jhalawar, Rajasthan, 326502"],
    mapUrl:
      "https://www.google.com/maps/embed/v1/place?q=Bhawani+Mandi+RICCO&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
  },
];

// *******************************************************************************
// ***************************** Collections Data ********************************
// *******************************************************************************

const collections = [
  {
    name: "Timeless Treasures",
    categories: [
      {
        name: "Handmade Modern Artifact",
        imgUrl: awsBaseUrlFree + "/assets/categories/artifacts/artifact-1.JPG",
        subCategories: [],
      },
      {
        name: "CNC Work",
        imgUrl: "/assets/categories/cnc/3d-2d/3d_2d-1.PNG",
        subCategories: [
          { name: "Custom Work", imgUrl: awsBaseUrlFree + "/assets/custom-icon.png" },
          { name: "3D/2D Work", imgUrl: awsBaseUrlFree + "/assets/categories/cnc/3d-2d/3d_2d-1.PNG" },
          { name: "Jaali Work", imgUrl: awsBaseUrlFree + "/assets/categories/cnc/jaali/jaali-1.png" },
        ],
      },
    ],
  },
  {
    name: "Nature's Palette",
    categories: [
      {
        name: "Sandstone",
        imgUrl: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-raj_green-2.png",
        subCategories: [
          { name: "Slabs", imgUrl: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-raj_green-2.png" },
          {
            name: "Wall Cladding",
            imgUrl: awsBaseUrlFree + "/assets/categories/Sand+Stone/wall_cladding-sandstone-1.jpg",
          },
          {
            name: "Cobbles",
            imgUrl: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-cobbles-1.png",
          },
        ],
      },
      {
        name: "Lime Stone",
        imgUrl: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-blue-2.png",
        subCategories: [
          { name: "Slabs", imgUrl: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-blue-2.png" },
          {
            name: "Wall Cladding",
            imgUrl: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-wall_cladding-1.jpg",
          },
          {
            name: "Cobbles",
            imgUrl: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-cobbles-2.png",
          },
        ],
      },
      {
        name: "Basalt",
        imgUrl: awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-1.png",
        subCategories: [
          { name: "Slabs", imgUrl: awsBaseUrlFree + "/assets/categories/basalt/basalt-slab.jpg" },
          { name: "Wall Cladding", imgUrl: awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-1.png" },
        ],
      },
    ],
  },
];

// ****************************************************************************
// ***************************** Products Data ********************************
// ****************************************************************************

const products = [
  // ----------------------
  // Artifacts
  // ----------------------
  {
    model: "AGI-HM01",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-1.JPG",
  },
  {
    model: "AGI-HM02",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-2.JPG",
  },
  {
    model: "AGI-HM03",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-3.JPG",
  },
  {
    model: "AGI-HM04",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-4.JPG",
  },
  {
    model: "AGI-HM05",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-5.JPG",
  },
  {
    model: "AGI-HM06",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-6.JPG",
  },
  {
    model: "AGI-HM07",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-7.JPG",
  },
  {
    model: "AGI-HM08",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-8.JPG",
  },
  {
    model: "AGI-HM10",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-10.JPG",
  },
  {
    model: "AGI-HM11",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-11.JPG",
  },
  {
    model: "AGI-HM12",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-12.JPG",
  },
  {
    model: "AGI-HM13",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-13.JPG",
  },
  {
    model: "AGI-HM14",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-14.JPG",
  },
  {
    model: "AGI-HM15",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-15.JPG",
  },
  {
    model: "AGI-HM16",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-16.JPG",
  },
  {
    model: "AGI-HM17",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-17.JPG",
  },
  {
    model: "AGI-HM18",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-18.JPG",
  },
  {
    model: "AGI-HM19",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-19.JPG",
  },
  {
    model: "AGI-HM20",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-20.JPG",
  },
  {
    model: "AGI-HM21",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-21.JPG",
  },
  {
    model: "AGI-HM22",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-22.JPG",
  },
  {
    model: "AGI-HM23",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-23.JPG",
  },
  {
    model: "AGI-HM24",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-24.JPG",
  },
  {
    model: "AGI-HM25",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-25.JPG",
  },
  {
    model: "AGI-HM26",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-26.JPG",
  },
  {
    model: "AGI-HM27",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-27.JPG",
  },
  {
    model: "AGI-HM28",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-28.JPG",
  },
  {
    model: "AGI-HM29",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-29.JPG",
  },
  {
    model: "AGI-HM30",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-30.JPG",
  },
  {
    model: "AGI-HM31",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-31.JPG",
  },
  {
    model: "AGI-HM32",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-32.JPG",
  },
  {
    model: "AGI-HM33",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-33.JPG",
  },
  {
    model: "AGI-HM34",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-34.JPG",
  },
  {
    model: "AGI-HM35",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-35.JPG",
  },
  {
    model: "AGI-HM36",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-36.JPG",
  },
  {
    model: "AGI-HM37",
    category: "Handmade Modern Artifact",
    src: awsBaseUrlFree + "/assets/categories/artifacts/artifact-37.JPG",
  },

  // ----------------------
  // Jaali Work
  // ----------------------
  {
    model: "AGI-CNCJ",
    category: "CNC Work",
    src: "/assets/categories/cnc/jaali/jaali-1.png",
  },

  // ----------------------
  // 3D/2D Work
  // ----------------------
  {
    model: "AGI-32D1",
    category: "3D/2D Work",
    src: "/assets/categories/cnc/3d-2d/3d_2d-1.PNG",
  },
  {
    model: "AGI-32D2",
    category: "3D/2D Work",
    src: "/assets/categories/cnc/3d-2d/3d_2d-2.PNG",
  },
  {
    model: "AGI-32D3",
    category: "3D/2D Work",
    src: "/assets/categories/cnc/3d-2d/3d_2d-3.PNG",
  },
  {
    model: "AGI-32D4",
    category: "3D/2D Work",
    src: "/assets/categories/cnc/3d-2d/3d_2d-4.PNG",
  },
  {
    model: "AGI-32D5",
    category: "3D/2D Work",
    src: "/assets/categories/cnc/3d-2d/3d_2d-5.PNG",
  },

  // ----------------------
  // Sandstone Wall Cladding
  // ----------------------
  {
    model: "AGI-SWCL",
    name: "Sandstone Wall Cladding",
    category: "Sandstone Wall Cladding",
    size: "Customized",
    thickness: "Customized",
    description:
      "Sandstone Wall Cladding offers a natural and rustic aesthetic, making it an ideal choice for both interior and exterior applications. This material is known for its durability and timeless beauty, adding texture and warmth to any space. Sandstone is versatile and can be cut into different sizes and shapes to suit your design preferences, ensuring a perfect fit for any project.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/wall_cladding-sandstone-1.jpg",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/wall_cladding-sandstone-1.jpg",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/wall_cladding-sandstone-2.png",
    ],
  },

  // ----------------------
  // Kota Stone Wall Cladding
  // ----------------------
  {
    model: "AGI-SCOB",
    name: "Sandstone Cobbles",
    category: "Sandstone Cobbles",
    size: "Customized",
    thickness: "Customized",
    description:
      "Sandstone Cobbles provide a charming and rustic appeal, perfect for driveways, pathways, and garden landscaping. Known for their natural texture and durability, these cobbles offer a unique blend of aesthetics and functionality. Sandstone is available in various sizes and shapes, making it easy to customize your outdoor spaces to achieve the desired look.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-cobbles-1.png",
    images: [awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-cobbles-1.png"],
  },
  {
    model: "AGI-KCOB",
    name: "Kota Stone Cobbles",
    category: "Kota Stone Cobbles",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kota Stone Cobbles are known for their strength and natural elegance, making them an excellent choice for outdoor paving solutions. These cobbles offer a smooth finish and are highly resistant to wear and tear, making them ideal for heavy traffic areas. Kota Stone Cobbles are available in various sizes and can be customized to suit any design needs.",
    mainImg: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-cobbles-1.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-cobbles-1.png",
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-cobbles-2.png",
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-cobbles-3.png",
    ],
  },
  {
    model: "AGI-BCOB",
    name: "Basalt Cobbles",
    category: "Basalt Cobbles",
    size: "Customized",
    thickness: "Customized",
    description:
      "Basalt Cobbles offer a sleek and modern look with their dark, rich tones. Perfect for driveways, patios, and walkways, these cobbles are known for their exceptional strength and durability. Basalt is a volcanic stone that can withstand harsh weather conditions, making it a reliable choice for both residential and commercial projects.",
    mainImg: awsBaseUrlFree + "/assets/categories/Basalt/basalt-cobbles-1.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Basalt/basalt-cobbles-1.png",
      awsBaseUrlFree + "/assets/categories/Basalt/basalt-cobbles-1.png",
    ],
  },

  // ----------------------
  // Kota Stone Wall Cladding
  // ----------------------
  {
    model: "AGI-KWCL",
    name: "Kota Stone Wall Cladding",
    category: "Kota Stone Wall Cladding",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kota Stone Wall Cladding provides a robust and elegant finish for both interior and exterior spaces. Known for its durability and resistance to water and stains, Kota stone is a preferred material for wall cladding in various architectural applications. The natural tones of this stone bring a touch of sophistication while ensuring low maintenance and long-lasting performance.",
    mainImg: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-wall_cladding-1.jpg",
    images: [awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-wall_cladding-1.jpg"],
  },

  // ----------------------
  // Kota Stone Checkered
  // ----------------------
  {
    model: "AGI-KWCL",
    name: "Kota Stone Chess Checkered",
    category: "Kota Stone Checkered",
    size: "Customized",
    thickness: "Customized",
    description:
      "Enhance your interiors with the timeless appeal of Kota Stone Checkered patterns. This durable and elegant flooring option combines the natural beauty of Kota stone with classic checkered designs, adding a touch of sophistication to any space. Ideal for both traditional and contemporary settings, Kota Stone Checkered flooring offers a blend of style and strength, ensuring a long-lasting and visually stunning finish. Perfect for homes, offices, and commercial spaces, it brings a unique charm to every corner.",
    mainImg: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-chess_checkered-1.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-chess_checkered-1.png",
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-chess_checkered-2.png",
    ],
  },
  {
    model: "AGI-KWCL",
    name: "Kota Stone Diamond Checkered",
    category: "Kota Stone Checkered",
    size: "Customized",
    thickness: "Customized",
    description:
      "Enhance your interiors with the timeless appeal of Kota Stone Checkered patterns. This durable and elegant flooring option combines the natural beauty of Kota stone with classic checkered designs, adding a touch of sophistication to any space. Ideal for both traditional and contemporary settings, Kota Stone Checkered flooring offers a blend of style and strength, ensuring a long-lasting and visually stunning finish. Perfect for homes, offices, and commercial spaces, it brings a unique charm to every corner.",
    mainImg: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-diamond_checkered-1.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-diamond_checkered-1.png",
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-diamond_checkered-2.png",
    ],
  },

  // ----------------------
  // Basalt Slabs
  // ----------------------
  {
    model: "AGI-BSSL",
    name: "Basalt Slabs",
    category: "Basalt Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Basalt Slabs are renowned for their strength and durability, making them an excellent choice for both interior and exterior applications. Basalt stone is a dense and fine-grained volcanic rock that offers a sleek and sophisticated appearance. Its natural dark tone adds elegance and modernity to any space, whether used in flooring, countertops, or wall cladding. Basalt slabs are also resistant to wear and tear, ensuring long-lasting performance with minimal maintenance.",
    mainImg: awsBaseUrlFree + "/assets/categories/basalt/basalt-slab.jpg",
    images: [
      awsBaseUrlFree + "/assets/categories/basalt/basalt-slab.jpg",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-slab_finishes-1.jpg",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-slab_finishes-2.jpg",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-slab_finishes-3.jpg",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-slab_finishes-4.jpg",
    ],
  },

  // ----------------------
  // Basalt Wall Cladding
  // ----------------------
  {
    model: "AGI-BWCL",
    name: "Basalt Wall Cladding",
    category: "Basalt Wall Cladding",
    size: "Customized",
    thickness: "Customized",
    description:
      "Basalt Wall Cladding brings a sophisticated and modern touch to any building's exterior or interior. Basalt stone is known for its hardwearing properties and resistance to environmental elements, making it an ideal material for cladding. The natural dark color of Basalt adds depth and contrast, creating a striking visual effect that enhances the overall aesthetics of the structure. Its versatility allows it to be cut and shaped to meet specific design requirements.",
    mainImg: awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-1.png",
    images: [
      awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-1.png",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-2.PNG",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-3.PNG",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-4.PNG",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-5.PNG",
      awsBaseUrlFree + "/assets/categories/basalt/basalt-wall_cladding-6.PNG",
    ],
  },

  // ----------------------
  // Kota Stone Slabs
  // ----------------------
  {
    model: "AGI-KOBL",
    name: "Kota Blue Natural",
    category: "Kota Stone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kota Blue limestone has gained much popularity because of its fine shade of bluish-green that adds liveliness to the surrounding. This stone is preferred for flooring and wall cladding, paving and facades of buildings. It is mainly because Kota Blue has the unique properties of limestones. This Kota blue stone is very tough, non-waterabsorbent, non-slip, non-porous, and has excellent stain removability.Kota blue limestone can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-blue-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-blue-1.png",
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-blue-2.png",
    ],
  },
  {
    model: "AGI-KOBR",
    name: "Kota Brown Natural",
    category: "Kota Stone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kota Brown limestone has gained much popularity because of its fine shade of brownish-green that adds liveliness to the surrounding. It is mainly because kota Brown has the unique properties of limestones. that makes an excellent building stone because it can be carved easily. The speciality of this kota limestone is in its hardness and it can be used both for interiors as well as exteriors. Brown limestone has minor color variation but within tolerance limit. This Kota brown stone is very tough, non-waterabsorbent, non-slip, non-porous, and has excellent stain removability.Kota brown limestone can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-brown-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-brown-1.png",
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-brown-2.png",
    ],
  },
  {
    model: "AGI-KOBK",
    name: "Kota Black Natural",
    category: "Kota Stone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "This stone being naturally black as being fully oxidized with the whole bed inside the water. It is a complete replica for concrete paving and gives antique touch because of the presence of ash colour. The wide application for this stone is on country side old cathedral pavements.That makes an excellent building stone because it can be carved easily. The specialty of this Kota limestone is in its hardness and it can be used both for interiors as well as exteriors. This Kota black stone is very tough, non-waterabsorbent, non-slip, non-porous, and has excellent stain removability.Kota black limestone can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-black-1.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-black-1.png",
      awsBaseUrlFree + "/assets/categories/Kota+Stone/kota_stone-black-2.png",
    ],
  },

  // ----------------------
  // Sandstone Slabs
  // ----------------------
  {
    model: "AGI-KDGR",
    name: "Kandla Grey Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kandla Gray Sandstone Silver Sand Sandstone is Gray colored extremely hard sandstone because of the quartz grains being cemented together with silica and calcite. This is hard wearing sandstone. It shares the solid modern feel of bluestone and looks simply stunning laid around a pool. The colors of this sandstone are very consistent however still for very discerning customers it can still be graded in two shades Dark Gray & Light Gray. Kandla grey Sandstone owing to the natural grey shade and because of the inherent properties of sandstone. This stone is extremely popular in the construction of paving, huge landscaping projects, window sills, lintels, kerb, etc. It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-kandla_grey-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-kandla_grey-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-kandla_grey-2.png",
    ],
  },
  {
    model: "AGI-RJGR",
    name: "Raj Green Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Raj Green Sandstone is a mix of light Green tones with hints of brown, buff & plum colored Sandstone. The dense structure of this sandstone makes it durable and quick drying. Raj Green Sandstone suits to the extreme European climate, Raj Green sandstone paving slabs / tiles are frost resistant. They will weather to give a natural appearance enhancing your patio, path or driveway. Raj Green Sandstone can be chiseled and dressed into smooth surface or can be carved into various shapes. It is extensively used as roofing and flooring stones, as well as for paving and paneling purposes. It is made up of uniform sized quartz grains and other minerals of fairly uniform size and often smooths and rounded. It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-raj_green-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-raj_green-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-raj_green-2.png",
    ],
  },
  {
    model: "AGI-AUBR",
    name: "Autumn Brown Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Autumn Brown sandstone is hardwearing creamy brown sandstone having a mix of brown light and dark brown tones with hints of grey, buff and plum. The dense structure of this sandstone makes it durable and quick drying. It is made up of Grains of quartz and other minerals of fairly uniform size and often smooths and rounded. Autumn Brown sandstone paving slabs / tiles are frost resistant. They will weather to give a natural appearance enhancing your patio, path or driveway. Autumn Brown Sandstone can be chiseled and dressed into smooth surface or can be carved into various shapes. It is extensively used as roofing and flooring stones, as well as for paving and paneling purposes. It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-autumn_brown-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-autumn_brown-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-autumn_brown-2.png",
    ],
  },
  {
    model: "AGI-CMRN",
    name: "Chocolate / Mandana Red Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Chocolate Sandstone is very obtained in buff to brownish sometime reddish hue to present Iron oxides. It is a good choice as it gives a contemporary traditional look. One can go for Chocolate Sandstone to give their home a brand new traditional décor. This is the reason various hotels use Chocolate sandstone accent to give it a modern yet a traditional homely look. The color varies from soft chocolate to light purple. Basically it gives a classic look to any construction form. Natural sandstone are not only durable but also are beautiful to watch. One can get this flooring done in their home, on terrace or outside area of the house like gardening area, pathways or pool side. It makes the room look elegant and gives timeless style. This is the reason it is one of the most sought after material when it comes to flooring and paving.It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-chocolate_mandana_red-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-chocolate_mandana_red-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-chocolate_mandana_red-2.png",
    ],
  },
  {
    model: "AGI-OYDT",
    name: "Old York / Dual Tone",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Old York sandstone paving is made up of light to dark shades of brown/grey with gentle hues of golden brown running through this natural surface. Old York Sandstone's rustic, natural surface one suited to traditional landscapes designs Old York sandstone paving is a hard wearing natural stone which requires minimal maintenance. Old York Sandstone is ideal if you are looking for a traditional, sophisticated feel to your paved area. Due to the individual characteristics of hand quarried natural stone, each piece has its own unique look and may vary in color, texture and thickness from other pieces of the same type of stone. Kota Desert's decorating versatility remains incomparable.For this reason Kota Desert sandstone has become many architects' favorite constructing material It makes the room look elegant and gives timeless style. This is the reason it is one of the most sought after material when itcomes to flooring and paving.It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-old_york_dual_tone-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-old_york_dual_tone-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-old_york_dual_tone-2.png",
    ],
  },
  {
    model: "AGI-CDYB",
    name: "Camel Dust / Yellow Buff",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Camel Dust Sandstone is a beautiful natural sandstone exhibiting mint colored light yellow, buff base with warm mellow colors reminiscent of drifting sands. Camel Dust Sandstone is a beautiful and versatile product that adds a feeling of warmth and timeless elegance to compliment or feature any design. Camel Dust Sandstone is bound to enliven any surroundings may it be an interior wall, pool feature or any exterior landscape leaving you with its freshness & mesmerizing feel. The tiles remain non-slip when wet. Camel Dust Sandstone is a good choice as it gives a contemporary traditional look. One can go for Camel Dust to give their home a brand new traditional décor & thus giving it a modern yet a traditional homely look. Each tile is different due to the bands of drifting sands in the stone that varies in color from Light buff colored to warm mellowed colors. Basically it gives a classic look to any construction form .It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-camel_dust_yellow_buff-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-camel_dust_yellow_buff-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-camel_dust_yellow_buff-2.png",
    ],
  },
  {
    model: "AGI-GRBF",
    name: "Green Buff",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Green Buff Sandstone is a beautiful natural sandstone exhibiting mint colored light green/brown, buff base with warm mellow colors reminiscent of drifting sands. Green buff Sandstone is a beautiful and versatile product that adds a feeling of warmth and timeless elegance to compliment or feature any design. Green buff Sandstone is bound to enliven any surroundings may it be an interior wall, pool feature or any exterior landscape leaving you with its freshness & mesmerizing feel. The tiles remain non-slip when wet. Green buff Sandstone is a good choice as it gives a contemporary traditional look. One can go for Green buff to give their home a brand new traditional décor & thus giving it a modern yet a traditional homely look. Each tile is different due to the bands of drifting sands in the stone that varies in color from Light buff colored to warm mellowed colors. Basically it gives a classic look to any construction form .It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-green_buff-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-green_buff-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-green_buff-2.png",
    ],
  },
  {
    model: "AGI-RSMN",
    name: "Rustic Mixed Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "This is the Rustic Mixed Sandstone. Its all have Grey, Chocolate, Raj Green, Buff, Brown Sandstone with rustic Texture on it. Any rough, broken stone suitable for rustic masonry, most common ly limestone or sandstone, usually set with the elongate dimension exposed horizontally. The tiles remain non-slip when wet. Rustic Mixed Sandstone is a good choice as it gives a contemporary traditional look. One can go for RUstic Mixed to give their home a brand new traditional decor & thus giving it a modern yet a traditional homely look. Each tile is different due to the bands of drifting sands in the stone that varies in color from Light buff colored to warm mellowed colors. Basically it gives a classic look to any construction form .It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-rustic_mixed-2.png",
    images: [
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-rustic_mixed-1.png",
      awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-rustic_mixed-2.png",
    ],
  },
  {
    model: "AGI-RPBF",
    name: "Rippon Buff",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Rippon is an attractive mix of colors set against a buff background, often having striking veining throughout. Ripon Sandstone is a selection of the Brown sandstone with color patterns of pink, grey and brown lines. Indian Rippon Sandstone (paving stones) is a mixture of different colored flagstones. This sandstone is characterized by multicolored pink, grey & yellow stripy patterns and is available in the format of tiles in sawn, honed or polished finishes. Ripon Sandstone slabs are also ideal for patio paving and garden paving. Ripon Buff sandstones are soft stones; and are excessively used for the purpose of paving, flooring and other construction purposes.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-rippon_buff.png",
    images: [awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-rippon_buff.png"],
  },
  {
    model: "AGI-RVNA",
    name: "Raveena Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Ravenna natural sandstone is a mix of purplish colours, set against a pale, grey and buff background. It is very striking, with natural variations of quarried stone. This stone cannot be replicated through man made stone. The variations are varied and bold and it offers something very special.It can be cut to any size as per the requirement of the clients.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-raveena.png",
    images: [awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-raveena.png"],
  },
  {
    model: "AGI-TKWD",
    name: "Teakwood",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Teakwood Sandstone also called Khatu Teak Sandstone is smooth light yellow veined sandstone. Teak Wood Sandstone is fine grained dense sandstone with beautiful variation whilst maintaining a blended appearance. Teak Wood Sandstone is very durable and perfect for outdoors especially pool surrounds. Teakwood Sawn Indian Sandstone is one of our distinct ranges of external paving, and can make a real statement with its bold and flamboyant coloring. It cannot be polished nor can be split. It is smoothly sawn on all six sides to give a totally crisp and clean feel whilst still being firm and non slip underfoot.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-teakwood.png",
    images: [awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-teakwood.png"],
  },
  {
    model: "AGI-RBNA",
    name: "Rainbow Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Rainbow Sandstone has fine grained quartz, the other mineral compositions impart attractive colors in the form of brown, violet and sometime reddish veins.This Contemporary Rainbow Sandstone is gorgeous ornament that can be used at any location to provide an upliftment to any surrounding whether landscape or Interiors. The straight lines and soft, multi-layered hues of Rainbow Sandstone will make a stunning focal point in any garden space.",
    mainImg: awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-rainbow.png",
    images: [awsBaseUrlFree + "/assets/categories/Sand+Stone/sandstone-rainbow.png"],
  },
];

// ********************************************************************************
// ***************************** Testimonials Data ********************************
// ********************************************************************************

const testimonialsData = [
  {
    name: "Govind Agrawal",
    title: "CEO of Shree Agrawal Stones Co.",
    imageUrl: "",
    review:
      "Our natural stones are of the highest quality and our team provides exceptional service. We highly recommend this company for all your natural stone needs.",
  },
  {
    name: "Prateek Pareekh",
    title: "CEO of Design Co.",
    imageUrl: awsBaseUrlFree + "/assets/prateek-pareekh.jpg",
    review: "Visit their showroom to see the natural stones in person and get inspired for your next project.",
  },
  {
    name: "Manoj Agrawal",
    title: "CEO of agrawalstones",
    imageUrl: "",
    review:
      "With a vast selection of natural stones, we offer competitive prices and exceptional customer service to ensure your satisfaction.",
  },
];

export { contacts, addresses, collections, products, awsBaseUrlFree, testimonialsData };
