let placeholderArr = [
    "119请回答",
    "真实成长",
    "大江大河",
    "在希望的田野上",
    "大考",
    "追光者",
    "勇敢者的征程",
];
let arrCur = 1;
let search = document.getElementById("search");
search.setAttribute("placeholder", placeholderArr[0]);
setInterval(function() {
    if (arrCur >= placeholderArr.length) {
        arrCur = 0;
    }
    search.setAttribute("placeholder", placeholderArr[arrCur]);
    arrCur++;
}, 3000);
window.onload = function () {
    document.onkeydown = function (e) {
        if (e.keyCode == 13 && document.activeElement.id == "search") {
            let input = document.getElementById("search").value;
            let historyList = document.getElementById("history");
            let elem = `<li><p>${input}</p></li>`
            historyList.innerHTML += elem;
            document.getElementById("search").value = "";
        }
    }
}
