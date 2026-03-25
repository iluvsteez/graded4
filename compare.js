let compareBtn = document.getElementById("compare-btn");
let clearBtn = document.getElementById("clear-btn");

compareBtn.addEventListener("click", function () {

    let expected = document.getElementById("expected").value;//get what user typed
    let actual = document.getElementById("actual").value;
    let result = document.getElementById("result");

    result.innerHTML = "";//prevent duplicates

    if (expected === "" && actual === "") {//stops if nothing is entered
        let li = document.createElement("li");
        li.textContent = "Enter text in both areas";
        result.appendChild(li);
        return;
    }

    let expectedLines = expected.split("\n");//split lines
    let actualLines = actual.split("\n");

    let hasDifferences = false;
//loop using expected length
    for (let i = 0; i < expectedLines.length; i++) {

        if (expectedLines[i] !== actualLines[i]) {
            let li = document.createElement("li");
            li.textContent = "Line " + (i + 1) + " is different";
            result.appendChild(li);
            hasDifferences = true;
        }
    }
//check if number of lines differ
    if (expectedLines.length !== actualLines.length) {
        let li = document.createElement("li");
        li.textContent = "Number of lines is different";
        result.appendChild(li);
        hasDifferences = true;
    }

    if (hasDifferences) {
        result.className = "change";

        let msg = document.createElement("li");
        msg.textContent = "Texts are different";
        result.insertBefore(msg, result.firstChild);

    } else {
        result.className = "nochange";

        let li = document.createElement("li");
        li.textContent = "No differences found";
        result.appendChild(li);
    }
});

clearBtn.addEventListener("click", function () {
    document.getElementById("expected").value = "";
    document.getElementById("actual").value = "";
    document.getElementById("result").innerHTML = "";
});