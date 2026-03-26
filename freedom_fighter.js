let images = document.querySelectorAll("#pics img");
let favourites = document.getElementById("favorites");
let actions = document.getElementById("actions");

let count = 0;
let total = images.length;

// create counter display
let counter = document.createElement("p");
counter.textContent = "Remaining: " + total;
document.body.insertBefore(counter, actions);

// move to favourites
for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("click", function () {

        if (images[i].classList.contains("selected")) {
            return;
        }

        favourites.appendChild(images[i]);

        images[i].classList.add("selected");
        images[i].style.border = "3px solid green";

        count++;

        let li = document.createElement("li");
        li.textContent = "Moved " + images[i].src + " to favorites";
        actions.appendChild(li);

        alert("Image " + (i + 1) + " selected as favorite number " + count);

        counter.textContent = "Remaining: " + (total - count);

        if (count === total) {
            alert("All images have been selected!");
        }
    });
}

// revert back
favourites.addEventListener("click", function (event) {

    let img = event.target;

    if (img.tagName !== "IMG") return;

    document.getElementById("pics").appendChild(img);

    img.classList.remove("selected");
    img.style.border = "";

    count--;

    let li = document.createElement("li");
    li.textContent = "Reverted " + img.src + " back to main list";
    actions.appendChild(li);

    counter.textContent = "Remaining: " + (total - count);
});



