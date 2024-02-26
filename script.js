const cart = [];

// Sample data for your art pieces, you can replace this with your own data
const artPieces = [
    {
        title: "Broly",
        description: "Broly the Legendary Super Sayian",
        image: "images/Broly0001.png",
        price: "$50"
    },
    {
        title: "UE Vegeta",
        description: "UE Vegeta",
        image: "images/ue_vegeta.png",
        price: "$50"
    },
    {
        title: "David",
        description: "David from Cyberpunk",
        image: "images/David.png",
        price: "$15"
    },
    {
        title: "Zenistu",
        description: "Zenistu",
        image: "images/zenistu_rage.png",
        price: "$15"
    },
    {
        title: "Deku",
        description: "Deku",
        image: "images/deku.png",
        price: "$20"
    },
    {
        title: "Eren Yaeger",
        description: "Eren did NOTHING WRONG",
        image: "images/eren_titan.png",
        price: "$20"
    },
    {
        title: "Giyu",
        description: "Giyu Tomiyoka",
        image: "images/giyu.png",
        price: "$10"
    },
    {
        title: "Godzilla",
        description: "King of Monsters Godzilla in pixel",
        image: "images/godzilla_pixel.png",
        price: "$15"
    },
    {
        title: "Gon",
        description: "Rock, Paper, ...",
        image: "images/gon.png",
        price: "$18"
    },
    {
        title: "Jaab",
        description: "My orginal character Jaab",
        image: "images/jaab_oc.png",
        price: "$15"
    },
    {
        title: "Kamura",
        description: "My orginal character Kamura",
        image: "images/kamura_oc.png",
        price: "$18"
    },
    {
        title: "Killua",
        description: "Killua",
        image: "images/killua.png",
        price: "$15"
    },
    {
        title: "Venom",
        description: "Skinny Venom",
        image: "images/venom_skinny.png",
        price: "$20"
    },
    {
        title: "Sabo",
        description: "Sabo",
        image: "images/sabo.png",
        price: "$25"
    },
    {
        title: "Zapp",
        description: "Zapp OC",
        image: "images/zapp_oc.png",
        price: "$18"
    },
    {
        title: "Sasuke",
        description: "Sasuke",
        image: "images/sasuke.png",
        price: "$20"
    },
    {
        title: "Kurapika",
        description: "Kurapika",
        image: "images/kurapika.png",
        price: "$17"
    },
    {
        title: "Kurapika",
        description: "Kurapika",
        image: "images/kurapika_aura.png",
        price: "$20"
    },
    {
        title: "Venom & Carnage",
        description: "WE ARE VENOM",
        image: "images/symbiotes.png",
        price: "$20",
    },
    // Add more art pieces as needed
];

// Function to display art pieces on the webpage
function displayArtGallery() {
    const gallery = document.querySelector(".art-gallery");

    artPieces.forEach((artPiece) => {
        const artCard = document.createElement("div");
        artCard.classList.add("art-card");

        const image = document.createElement("img");
        image.src = artPiece.image;
        image.alt = artPiece.title;

        const title = document.createElement("h2");
        title.textContent = artPiece.title;

        const description = document.createElement("p");
        description.textContent = artPiece.description;

        const price = document.createElement("p");
        price.textContent = `Price: ${artPiece.price}`;

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.classList.add("buy-button");
        buyButton.setAttribute("data-product", artPiece.title);
        buyButton.setAttribute("data-price", artPiece.price);

        buyButton.addEventListener("click", () => {
            const product = buyButton.getAttribute("data-product");
            const price = buyButton.getAttribute("data-price");
            // Add code to handle adding the product to the cart here
        });

        artCard.appendChild(image);
        artCard.appendChild(title);
        artCard.appendChild(description);
        artCard.appendChild(price);
        artCard.appendChild(buyButton);

        gallery.appendChild(artCard);
    });
}

// Call the function to display the art gallery when the page loads
window.onload = displayArtGallery;
