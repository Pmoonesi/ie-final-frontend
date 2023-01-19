// handle scroll to books part

// handle book info overlay

// handle overlay menu

function toggleNav(event) {
    var nav = document.getElementById("myNav");
    if (nav.style.width == "100%") {
        nav.style.width = "0%";
    } else {
        nav.style.width = "100%";
    }
}

document.getElementById("check").addEventListener("click", toggleNav);