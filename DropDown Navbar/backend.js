// ----------------------------- product item --------------------------
let product = document.getElementById("products");
let productItem = document.getElementById("product-items");

product.addEventListener("mouseover", function dropdown() {
    productItem.style.display = "flex";
});

product.addEventListener("mouseleave", function hideDropDown() {
    productItem.style.display = "none";
});

// ------------------------------ contact item ---------------------
let contact = document.getElementById("contact");
let contactItem = document.getElementById("contactItem");

contact.addEventListener("mouseover", function showContact() {
    contactItem.style.display = "flex";
});

contact.addEventListener("mouseleave", function hideContact() {
    contactItem.style.display = "none";
});

// -------------------------- VIDEO EDITOR --------------------------
let videoEditor = document.getElementById("video-editor");
let vidItem = document.getElementById("vid-items");

console.log(videoEditor);
console.log(vidItem);

videoEditor.addEventListener("mouseover", function vidShow() {
    vidItem.style.display = "block";
});
videoEditor.addEventListener("mouseleave", function vidHide() {
    vidItem.style.display = "none";
});