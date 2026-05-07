let j = 0; 
const br = 7;
let slike = [];


for (let i = 1; i <= br; i++) {
    slike.push("slike/slika" + i + ".jpg");
}

const slikaElement = document.getElementById("slika");
const tacke = document.querySelectorAll(".tacka");

function osveziPrikaz() {

    slikaElement.src = slike[j];


    tacke.forEach((tacka, index) => {
        if(index === j) {
            tacka.classList.add("active");
        } else {
            tacka.classList.remove("active");
        }
    });
}

function automatski() {
    j++;
    if (j >= slike.length) j = 0;
    osveziPrikaz();
}

let tajmer = setInterval(automatski, 4000);

function sledece(n) {
    clearInterval(tajmer); 
    j += n;
    if (j >= slike.length) j = 0;
    if (j < 0) j = slike.length - 1;
    osveziPrikaz();
    tajmer = setInterval(automatski, 4000);
}

function trenutni_slajd(indeks) {
    clearInterval(tajmer);
    j = indeks;
    osveziPrikaz();
    tajmer = setInterval(automatski, 4000);
}

osveziPrikaz();
