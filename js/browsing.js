console.log("browsing linked");

const productList = [
    {
        id:101,
        img: "img/p1.png",
        name: "Global Version Xiaomi Redmi Note 11 Smartphone Snapdragon 680 Octa...",
        store: "Xiami Mi Store",
        price:282,
        cents:77,
        reviews: "32,632"
    },
    {
        id:102,
        img: "img/p2.png",
        name: "1080P PTZ Wifi IP Camera Outdoor 4X Digital Zoom AI Human Detect Wireless...",
        store: "ANIBUX Offical Store",
        price:37,
        cents:99,
        reviews: "16,230"
    },
    {
        id:103,
        img: "img/p3.png",
        name: "ZEUSLAP portable gaming monitor ultrathin 15.6inch 1080p/touch for options...",
        store: "ZUESLAP Offical Store",
        price:219,
        cents:95,
        reviews: "24,003"
    },
    {
        id:104,
        img: "img/p4.png",
        name: "ANYCUBIC Photon Mono 4K LCD UV Resin 3D Printer High-Speed 3D Printing...",
        store: "ANYCUBIC Offical Store",
        price:334,
        cents:64,
        reviews: "1,033"
    },
    {
        id:105,
        img: "img/p5.png",
        name: "50L 1000D Nylon Waterproof Trekking Fishing Hunting Bag Backpack...",
        store: "Bag Guy Store",
        price:32,
        cents:21,
        reviews: "233"
    },
    {
        id:106,
        img: "img/p6.png",
        name: "LAUNCH X431 CR3001 Car Full OBD2 Diagnostic Tools Automotive Professional...",
        store: "LAUNCH Offical Store",
        price:31,
        cents:47,
        reviews: "12,345"
    },
    {
        id:107,
        img: "img/p7.png",
        name: "CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military...",
        store: "Curren Offical Store",
        price:31,
        cents:11,
        reviews: "32,231"
    },
    {
        id:108,
        img: "img/p8.png",
        name: "ZWN 1:12 / 1:16 4WD RC Car Radio Gesture Induction Music Light Stunt Remote...",
        store: "zwn Offical Store",
        price:33,
        cents:77,
        reviews: "24,003"
    },
    {
        id:109,
        img: "img/p9.png",
        name: "Redragon GS520 Anvil aux 3.5mm stereo surround music RGB speakers soun...",
        store: "REDRAGON Offical Store",
        price:57,
        cents:12,
        reviews: "14,344"
    },
    {
        id:110,
        img: "img/p10.jpeg",
        name: "HOTO Laser Tape Measure, Smart Laser Rangefinder, Intelligent, 30M, OLED...",
        store: "HOTO Offical Store",
        price:56,
        cents:16,
        reviews: "23,434"
    },
];

function generateProducts(){
    for(let i = 0; i<productList.length; i++){
        $("#productlist").append(
            `
            <div class="product" id="${productList[i].id}">
                <div class="product-preview">
                    <img alt="product-image" src="${productList[i].img}">
                </div>
                <p class="product-name">${productList[i].name}</p>
                <p class="product-seller">${productList[i].store}</p>
                <div class="product-price">
                    <p>NZD ${productList[i].price}</p>
                    <p class="cents">.${productList[i].cents}</p>
                </div>
                <img class="review-image" alt="rating image" src="img/rating.png">
                <p class="product-reviews">${productList[i].reviews} Reviews</p>
            </div>
            `
        );
    };
};
generateProducts();
generateProducts(); 