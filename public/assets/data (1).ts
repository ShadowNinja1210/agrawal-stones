const awsBaseUrlFree = "";

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
        name: "Kota Stone",
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
    category: "Kota Stone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kota Blue limestone has gained much popularity because of its fine shade of bluish-green that adds liveliness to the surrounding. This stone is preferred for flooring and wall cladding, paving and facades of buildings. It is mainly because Kota Blue has the unique properties of limestones. This Kota blue stone is very tough, non-waterabsorbent, non-slip, non-porous, and has excellent stain removability.Kota blue limestone can be cut to any size as per the requirement of the clients.",
    mainImg: "/assets/categories/sensational_collection-kota_blue.png",
    images: ["/", "/"],
    packaging: "/",
  },
  {
    model: "AGI-KOBR",
    name: "Kota Brown Natural",
    category: "Kota Stone Slabs",
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
    category: "Kota Stone Slabs",
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
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Kandla Gray Sandstone Silver Sand Sandstone is Gray colored extremely hard sandstone because of the quartz grains being cemented together with silica and calcite. This is hard wearing sandstone. It shares the solid modern feel of bluestone and looks simply stunning laid around a pool. The colors of this sandstone are very consistent however still for very discerning customers it can still be graded in two shades Dark Gray & Light Gray. Kandla grey Sandstone owing to the natural grey shade and because of the inherent properties of sandstone. This stone is extremely popular in the construction of paving, huge landscaping projects, window sills, lintels, kerb, etc. It can be cut to any size as per the requirement of the clients.",
    mainImg: "/assets/categories/sensational_collection-kota_blue.png",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-RJGR",
    name: "Raj Green Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Raj Green Sandstone is a mix of light Green tones with hints of brown, buff & plum colored Sandstone. The dense structure of this sandstone makes it durable and quick drying. Raj Green Sandstone suits to the extreme European climate, Raj Green sandstone paving slabs / tiles are frost resistant. They will weather to give a natural appearance enhancing your patio, path or driveway. Raj Green Sandstone can be chiseled and dressed into smooth surface or can be carved into various shapes. It is extensively used as roofing and flooring stones, as well as for paving and paneling purposes. It is made up of uniform sized quartz grains and other minerals of fairly uniform size and often smooths and rounded. It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-AUBR",
    name: "Autumn Brown Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Autumn Brown sandstone is hardwearing creamy brown sandstone having a mix of brown light and dark brown tones with hints of grey, buff and plum. The dense structure of this sandstone makes it durable and quick drying. It is made up of Grains of quartz and other minerals of fairly uniform size and often smooths and rounded. Autumn Brown sandstone paving slabs / tiles are frost resistant. They will weather to give a natural appearance enhancing your patio, path or driveway. Autumn Brown Sandstone can be chiseled and dressed into smooth surface or can be carved into various shapes. It is extensively used as roofing and flooring stones, as well as for paving and paneling purposes. It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-CMRN",
    name: "Chocolate / Mandana Red Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Chocolate Sandstone is very obtained in buff to brownish sometime reddish hue to present Iron oxides. It is a good choice as it gives a contemporary traditional look. One can go for Chocolate Sandstone to give their home a brand new traditional décor. This is the reason various hotels use Chocolate sandstone accent to give it a modern yet a traditional homely look. The color varies from soft chocolate to light purple. Basically it gives a classic look to any construction form. Natural sandstone are not only durable but also are beautiful to watch. One can get this flooring done in their home, on terrace or outside area of the house like gardening area, pathways or pool side. It makes the room look elegant and gives timeless style. This is the reason it is one of the most sought after material when it comes to flooring and paving.It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-OYDT",
    name: "Old York / Dual Tone",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Old York sandstone paving is made up of light to dark shades of brown/grey with gentle hues of golden brown running through this natural surface. Old York Sandstone's rustic, natural surface one suited to traditional landscapes designs Old York sandstone paving is a hard wearing natural stone which requires minimal maintenance. Old York Sandstone is ideal if you are looking for a traditional, sophisticated feel to your paved area. Due to the individual characteristics of hand quarried natural stone, each piece has its own unique look and may vary in color, texture and thickness from other pieces of the same type of stone. Kota Desert's decorating versatility remains incomparable.For this reason Kota Desert sandstone has become many architects' favorite constructing material It makes the room look elegant and gives timeless style. This is the reason it is one of the most sought after material when itcomes to flooring and paving.It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-CDYB",
    name: "Camel Dust / Yellow Buff",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Camel Dust Sandstone is a beautiful natural sandstone exhibiting mint colored light yellow, buff base with warm mellow colors reminiscent of drifting sands. Camel Dust Sandstone is a beautiful and versatile product that adds a feeling of warmth and timeless elegance to compliment or feature any design. Camel Dust Sandstone is bound to enliven any surroundings may it be an interior wall, pool feature or any exterior landscape leaving you with its freshness & mesmerizing feel. The tiles remain non-slip when wet. Camel Dust Sandstone is a good choice as it gives a contemporary traditional look. One can go for Camel Dust to give their home a brand new traditional décor & thus giving it a modern yet a traditional homely look. Each tile is different due to the bands of drifting sands in the stone that varies in color from Light buff colored to warm mellowed colors. Basically it gives a classic look to any construction form .It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-GRBF",
    name: "Green Buff",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Green Buff Sandstone is a beautiful natural sandstone exhibiting mint colored light green/brown, buff base with warm mellow colors reminiscent of drifting sands. Green buff Sandstone is a beautiful and versatile product that adds a feeling of warmth and timeless elegance to compliment or feature any design. Green buff Sandstone is bound to enliven any surroundings may it be an interior wall, pool feature or any exterior landscape leaving you with its freshness & mesmerizing feel. The tiles remain non-slip when wet. Green buff Sandstone is a good choice as it gives a contemporary traditional look. One can go for Green buff to give their home a brand new traditional décor & thus giving it a modern yet a traditional homely look. Each tile is different due to the bands of drifting sands in the stone that varies in color from Light buff colored to warm mellowed colors. Basically it gives a classic look to any construction form .It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-RSMN",
    name: "Rustic Mixed Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "This is the Rustic Mixed Sandstone. Its all have Grey, Chocolate, Raj Green, Buff, Brown Sandstone with rustic Texture on it. Any rough, broken stone suitable for rustic masonry, most common ly limestone or sandstone, usually set with the elongate dimension exposed horizontally. The tiles remain non-slip when wet. Rustic Mixed Sandstone is a good choice as it gives a contemporary traditional look. One can go for RUstic Mixed to give their home a brand new traditional decor & thus giving it a modern yet a traditional homely look. Each tile is different due to the bands of drifting sands in the stone that varies in color from Light buff colored to warm mellowed colors. Basically it gives a classic look to any construction form .It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-RPBF",
    name: "Rippon Buff",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Rippon is an attractive mix of colors set against a buff background, often having striking veining throughout. Ripon Sandstone is a selection of the Brown sandstone with color patterns of pink, grey and brown lines. Indian Rippon Sandstone (paving stones) is a mixture of different colored flagstones. This sandstone is characterized by multicolored pink, grey & yellow stripy patterns and is available in the format of tiles in sawn, honed or polished finishes. Ripon Sandstone slabs are also ideal for patio paving and garden paving. Ripon Buff sandstones are soft stones; and are excessively used for the purpose of paving, flooring and other construction purposes.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-RVNA",
    name: "Ravina Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Ravenna natural sandstone is a mix of purplish colours, set against a pale, grey and buff background. It is very striking, with natural variations of quarried stone. This stone cannot be replicated through man made stone. The variations are varied and bold and it offers something very special.It can be cut to any size as per the requirement of the clients.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-TKWD",
    name: "Teakwood",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Teakwood Sandstone also called Khatu Teak Sandstone is smooth light yellow veined sandstone. Teak Wood Sandstone is fine grained dense sandstone with beautiful variation whilst maintaining a blended appearance. Teak Wood Sandstone is very durable and perfect for outdoors especially pool surrounds. Teakwood Sawn Indian Sandstone is one of our distinct ranges of external paving, and can make a real statement with its bold and flamboyant coloring. It cannot be polished nor can be split. It is smoothly sawn on all six sides to give a totally crisp and clean feel whilst still being firm and non slip underfoot.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-RBNA",
    name: "Rainbow Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Rainbow Sandstone has fine grained quartz, the other mineral compositions impart attractive colors in the form of brown, violet and sometime reddish veins.This Contemporary Rainbow Sandstone is gorgeous ornament that can be used at any location to provide an upliftment to any surrounding whether landscape or Interiors. The straight lines and soft, multi-layered hues of Rainbow Sandstone will make a stunning focal point in any garden space.",
    mainImg: "",
    images: [],
    packaging: "",
  },
  {
    model: "AGI-RBNA",
    name: "Rainbow Natural",
    category: "Sandstone Slabs",
    size: "Customized",
    thickness: "Customized",
    description:
      "Rainbow Sandstone has fine grained quartz, the other mineral compositions impart attractive colors in the form of brown, violet and sometime reddish veins.This Contemporary Rainbow Sandstone is gorgeous ornament that can be used at any location to provide an upliftment to any surrounding whether landscape or Interiors. The straight lines and soft, multi-layered hues of Rainbow Sandstone will make a stunning focal point in any garden space.",
    mainImg: "",
    images: [],
    packaging: "",
  },
];

export { contacts, addresses, collections, products, awsBaseUrlFree, testimonialsData };
