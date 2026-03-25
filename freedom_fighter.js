let images = document.querySelectorAll(".pics img"); //selects all images in main container
let favourites = document.getElementById("favourites");
let actions = document.getElementById("actions");
let counter = document.getElementById("counter");

let count = 0;
//used loop so each pic responds
for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("click", function () {
//prevent duplicate clicks
        if (images[i].classList.contains("selected")) {
            return;
        }

        favourites.appendChild(images[i]);//move img to favs

        images[i].classList.add("selected");
        images[i].style.border = "3px solid green";//styling in js so user can see choice

        count++;

        let li = document.createElement("li");
        li.textContent = "Moved " + images[i].src + " to favourites";
        actions.appendChild(li); //records user & item added when img is moved

        alert("Image " + (i + 1) + " selected as favourite number " + count);//order of img selection

        counter.textContent = "Remaining: " + (images.length - count);//how many images are left to choose

        if (count === images.length) {
            alert("All images have been selected!");
        }
    });
}
//goes back to normal
favourites.addEventListener("click", function (event) {

    let img = event.target;

    if (img.tagName !== "IMG") return;//makes sure only img triggers action

    document.querySelector(".pics").appendChild(img);

    img.classList.remove("selected");
    img.style.border = "";

    count--;

    let li = document.createElement("li");
    li.textContent = "Reverted " + img.src + " back to main list";
    actions.appendChild(li);

    counter.textContent = "Remaining: " + (images.length - count);
});