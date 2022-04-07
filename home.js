showNotes();
const modalcontainer = document.getElementById("modalcontainer");
const exit = document.getElementById("close");
let user = sessionStorage.getItem("userLoggedin"); 
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    let addTitle = document.getElementById("addTitle");
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (addTitle.value == "" || addText.value == "") {
        modalcontainer.classList.add("show");
        let target = document.getElementById("text");
        let html = `Please fill both boxes`;
        target.innerHTML = html;
        addTitle.value="";
        addText.value="";
    }
    else {
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);                   
        }
        let myObj = {
            admin: user,
            title: addTitle.value,
            text: addText.value
        }
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTitle.value = "";
        addText.value = "";
        showNotes();
    }
});
exit.addEventListener("click", () => {
    modalcontainer.classList.remove("show");
})
function showNotes() {
    let user = sessionStorage.getItem("userLoggedin");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    function isAdmin(myObj) {
        return myObj.admin === user;
    }
    let element = [];
    let elempass;
    let notesCopy = [];
    for (let i = 0; i < notesObj.length; i++) {
        element = [notesObj[i]];
        elempass = element.find(isAdmin);
        if (elempass != undefined) {
            notesCopy.push(elempass);
        }
    }
    let notesElem = document.getElementById("cards");
    let html = "";
    function get(element, index) {
        html += `
        <div class="item">
        <h3 id="cardTitle"> ${element.title.toUpperCase()}</h3>
        <p class="cardText">${element.text}</p>
        <input type="button" value="Delete" class="delBtn" onclick="deleteNotes(this.id)" id="${index}">
        </div>
        `
    }
    if (notesCopy.length != 0) {
        for (let i = 0; i < notesCopy.length; i++) {
            get(notesCopy[i], i);
            notesElem.innerHTML = html;
        }
    }
    else {
        notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
};
function deleteNotes(index) {
    let notesElem = document.getElementById("cards");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        notesElem.innerHTML = "Nothing to display, create notes now!";                   
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let searchField = document.getElementById("searchField");
searchField.addEventListener("input", function () {
    let inputVal = searchField.value.toLowerCase();
    let item = document.getElementsByClassName("item");
    Array.from(item).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        let sort=cardText.toLowerCase();
        if (sort.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})