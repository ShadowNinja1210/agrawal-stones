const awsBaseUrlFree = "https://agrawalstones.s3.eu-north-1.amazonaws.com";

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
    name: "Shree Agrawal Stone Industry",
    address: ["F-8, RIICO Industrial Area, Bhawani Mandi,", "Jhalawar, Rajasthan, 326502"],
    mapUrl: "https://www.google.com/maps/embed/v1/place?q=Kota&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
  },
  {
    id: 2,
    name: "Krishna Udhyog",
    address: ["G-329, Road number 6, Indraprast Industrial Area,", "Kota, Rajasthan, 324001"],
    mapUrl: "https://www.google.com/maps/embed/v1/place?q=Bhawani+Mandi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
  },
];

const collections = [
  {
    name: "Timeless Treasures",
    categories: [
      {
        name: "Handmade Modern Artifact",
        imgUrl: "/assets/categories/sensational_collection-kota_blue.png",
        subCategories: [
          { name: "Marble", imgUrl: "" },
          { name: "Sandstone", imgUrl: "" },
          { name: "Agra Red", imgUrl: "" },
        ],
      },
      {
        name: "CNC Work",
        imgUrl: "",
        subCategories: [
          { name: "Jaali Work", imgUrl: "" },
          { name: "Custom Work", imgUrl: "" },
          { name: "3D/2D Work", imgUrl: "" },
        ],
      },
    ],
  },
  {
    name: "Nature's Palette",
    categories: [
      {
        name: "Sandstone",
        imgUrl: "/assets/categories/sensational_collection-kota_blue.png",
        subCategories: [
          { name: "Slabs", imgUrl: "" },
          { name: "Wall Cladding", imgUrl: "" },
        ],
      },
      {
        name: "Basalt",
        imgUrl: "/assets/categories/sensational_collection-kota_blue.png",
        subCategories: [
          { name: "Slabs", imgUrl: "" },
          { name: "Wall Cladding", imgUrl: "" },
        ],
      },
      {
        name: "Kota Stone",
        imgUrl: "/assets/categories/sensational_collection-kota_blue.png",
        subCategories: [
          { name: "Slabs", imgUrl: "" },
          { name: "Wall Cladding", imgUrl: "" },
        ],
      },
    ],
  },
  // {
  //   name: "Incentive Collection",
  //   categories: [
  //     { name: "Honed Sandstone", imgUrl: "" },
  //     { name: "Semi-honed Sandstone", imgUrl: "" },
  //     { name: "Semi-honed Limestone", imgUrl: "" },
  //   ],
  // },
  // {
  //   name: "Curio Collection",
  //   categories: [{ name: "Limestone", imgUrl: "" }],
  // },
  // {
  //   name: "Tumbled Collection",
  //   categories: [
  //     { name: "Tumbled Limestone", imgUrl: "" },
  //     { name: "Tumbled Sandstone", imgUrl: "" },
  //   ],
  // },
  // {
  //   name: "Grind Collection",
  //   categories: [
  //     { name: "Smooth Surface", imgUrl: "" },
  //     { name: "Leather Surface", imgUrl: "" },
  //   ],
  // },
  // {
  //   name: "Scrape Collection",
  //   categories: [
  //     { name: "Sandblast", imgUrl: "" },
  //     { name: "Limestone", imgUrl: "" },
  //     { name: "Shotblast", imgUrl: "" },
  //   ],
  // },
  // {
  //   name: "Others",
  //   categories: [
  //     { name: "Touch Off/Flamed Collection", imgUrl: "" },
  //     { name: "Cobbles & Mosaic Collection", imgUrl: "" },
  //     { name: "Granite Collection", imgUrl: "" },
  //     { name: "Laying Patten & Sides Edges", imgUrl: "" },
  //     { name: "Others", imgUrl: "" },
  //   ],
  // },
];

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

const products = [
  {
    model: "AGI-KOBL",
    name: "Kota Blue Natural",
    category: "Limestone - Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kota Blue limestone has gained much popularity because of its fine shade of bluish-green that adds liveliness to the surrounding. This stone is preferred for flooring and wall cladding, paving and facades of buildings. It is mainly because Kota Blue has the unique properties of limestones. This Kota blue stone is very tough, non-waterabsorbent, non-slip, non-porous, and has excellent stain removability.Kota blue limestone can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-KOBR",
    name: "Kota Brown Natural",
    category: "Limestone",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kota Brown limestone has gained much popularity because of its fine shade of brownish-green that adds liveliness to the surrounding. It is mainly because kota Brown has the unique properties of limestones. that makes an excellent building stone because it can be carved easily. The speciality of this kota limestone is in its hardness and it can be used both for interiors as well as exteriors. Brown limestone has minor color variation but within tolerance limit. This Kota brown stone is very tough, non-waterabsorbent, non-slip, non-porous, and has excellent stain removability.Kota brown limestone can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-KOBK",
    name: "Kota Black Natural",
    category: "Limestone",
    size: "Customized",
    thickness: "Customized",
    description:
      "This stone being naturally black as being fully oxidized with the whole bed inside the water. It is a complete replica for concrete paving and gives antique touch because of the presence of ash colour. The wide application for this stone is on country side old cathedral pavements.That makes an excellent building stone because it can be carved easily. The specialty of this Kota limestone is in its hardness and it can be used both for interiors as well as exteriors. This Kota black stone is very tough, non-waterabsorbent, non-slip, non-porous, and has excellent stain removability.Kota black limestone can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-KDGR",
    name: "Kandla Grey Natural",
    category: "Sandstone",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kandla Gray Sandstone Silver Sand Sandstone is Gray colored extremely hard sandstone because of the quartz grains being cemented together with silica and calcite. This is hard wearing sandstone. It shares the solid modern feel of bluestone and looks simply stunning laid around a pool. The colors of this sandstone are very consistent however still for very discerning customers it can still be graded in two shades Dark Gray & Light Gray. Kandla grey Sandstone owing to the natural grey shade and because of the inherent properties of sandstone. This stone is extremely popular in the construction of paving, huge landscaping projects, window sills, lintels, kerb, etc. It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-RJGR",
    name: "Raj Green Natural",
    category: "Sandstone",
    size: "Customized",
    thickness: "Customized",
    description:
      "Raj Green Sandstone is a mix of light Green tones with hints of brown, buff & plum colored Sandstone. The dense structure of this sandstone makes it durable and quick drying. Raj Green Sandstone suits to the extreme European climate, Raj Green sandstone paving slabs / tiles are frost resistant. They will weather to give a natural appearance enhancing your patio, path or driveway. Raj Green Sandstone can be chiseled and dressed into smooth surface or can be carved into various shapes. It is extensively used as roofing and flooring stones, as well as for paving and paneling purposes. It is made up of uniform sized quartz grains and other minerals of fairly uniform size and often smooths and rounded. It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
];

export { contacts, addresses, collections, products, awsBaseUrlFree, testimonialsData };
