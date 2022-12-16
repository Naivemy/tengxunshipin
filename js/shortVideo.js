let commentBtn = document.getElementById("commentBtn");

commentBtn.addEventListener("click", function (e) {
    popUpWindowCommentShow()
    e.stopPropagation();
});

function popUpWindowCommentClose(e) {
    let frame = document.getElementById("comment_window");
    let window = frame.querySelector(".window");
    frame.style.display = "none";
    frame.removeEventListener("click", popUpWindowCommentClose);
    window.removeEventListener("click", popUpWindowCommentContentClick);
    e.stopPropagation();
}

function popUpWindowCommentContentClick(e) {
    e.stopPropagation();
}

function popUpWindowCommentShow() {
    let frame = document.getElementById("comment_window");
    let window = frame.querySelector(".window");
    frame.style.display = "block";
    frame.addEventListener("click", popUpWindowCommentClose);
    window.addEventListener("click", popUpWindowCommentContentClick);
}