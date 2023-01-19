// handle book info overlay

function openInfo(event, i) {
    var info = document.getElementById(`book-info-${i}`);
    info.style.display = "block";
    info.classList.add('fade-in');
}

function closeInfo(event, i) {
    event.stopPropagation();
    var info = document.getElementById(`book-info-${i}`);
    info.classList.add('fade-out')
    setTimeout(()=>{
        info.style.display = 'none';
        info.classList.remove('fade-out')
      },500)
    if (info.classList.contains('fade-in')) {
        info.classList.remove('fade-in');
    }
}


function onModalClickHandler(event) {
    event.stopPropagation();
    if (event.target.id.startsWith('book-info')) {
        closeInfo(event, event.target.id.split('-')[2]);
    }
}

document.getElementById("open-detail-btn-1").addEventListener("click", () => openInfo(event, 1));
document.getElementById("open-detail-btn-2").addEventListener("click", () => openInfo(event, 2));
document.getElementById("open-detail-btn-3").addEventListener("click", () => openInfo(event, 3));

document.getElementById("close-detail-btn-1").addEventListener("click", () => closeInfo(event, 1));
document.getElementById("close-detail-btn-2").addEventListener("click", () => closeInfo(event, 2));
document.getElementById("close-detail-btn-3").addEventListener("click", () => closeInfo(event, 3));

document.getElementById("book-info-1").addEventListener("click", onModalClickHandler);
document.getElementById("book-info-2").addEventListener("click", onModalClickHandler);
document.getElementById("book-info-3").addEventListener("click", onModalClickHandler);

// handle redirection

const book1 = 'https://www.amazon.com/gp/product/1491952024/'
const book2 = 'https://www.amazon.com/Road-learn-React-pragmatic-React-js/dp/172004399X/ref=d_pd_sbs_sccl_2_3/130-5751593-0029724?pd_rd_w=m9yJh&content-id=amzn1.sym.3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=MN81G3T0MAX9FR9FAENV&pd_rd_wg=XsyuS&pd_rd_r=c3fff6b6-0e60-41bd-b038-2e16c81b5390&pd_rd_i=172004399X&psc=1'
const book3 = 'https://www.amazon.fr/dp/1491941952?psc=1&th=1&linkCode=gs2&tag=vhpoet0ca-21'

function redirectToAmazon(event, book) {
    if (book === 1) {
        location.href = book1;
    } else if (book === 2) {
        location.href = book2;
    } else if (book === 3) {
        location.href = book3;
    }
}

document.getElementById("redirect-book-1").addEventListener("click", () => redirectToAmazon(event, 1));
document.getElementById("redirect-book-2").addEventListener("click", () => redirectToAmazon(event, 2));
document.getElementById("redirect-book-3").addEventListener("click", () => redirectToAmazon(event, 3));

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

let links = document.getElementById('nav-links').children
for (const link of links) {
    link.addEventListener('click', toggleNav)
}