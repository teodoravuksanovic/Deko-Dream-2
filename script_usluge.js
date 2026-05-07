const usluge = {
    dekoracije: [
        {
            naziv: "Dekorisanje svadbi i venčanja",
            opis: "Svaka ljubavna priča zaslužuje savršenu scenografiju...",
            cena: "Od 250€",
            detalji: [
                "Cvetni aranžmani",
                "Baneri dobrodošlice",
                "Dekoracije stolova",
                "Rasveta",
                "Foto kutak"
            ]
        },
        {
            naziv: "Dekorisanje rođendana",
            opis: "Dizajniramo dekoracije koje oslikavaju radost...",
            cena: "Od 150€",
            detalji: [
                "Baloni i dekoracije od balona",
                "Neonski natpisi",
                "Dekoracije stolova",
                "Foto kutak"
            ]
        },
        {
            naziv: "Dekorisanje krštenja",
            opis: "Nežne i elegantne dekoracije za poseban porodični trenutak...",
            cena: "Od 120€",
            detalji: [
                "Cvetni aranžmani",
                "Dekoracije od balona",
                "Dekoracije stolova",
                "Foto kutak"
            ]
        }
    ],

    organizacija: [
        {
            naziv: "Organizacija svadbi i venčanja",
            opis: "Planiramo vaš veliki dan sa pažnjom i preciznošću.",
            cena: "Od 100€",
            detalji: [
                "Kompletno planiranje i dekorisanje prostora",
                "Izbor teme i boja",
                "Raspored stolova",
                "Usklađivanje svih dekorativnih detalja sa željom mladenaca"
            ]
        },
        {
            naziv: "Organizacija rođendana",
            opis: "Kompletna organizacija bez stresa, od ideje do realizacije.",
            cena: "Od 50€",
            detalji: [
                "Kompletno planiranje i dekorisanje prostora",
                "Osmišljavanje koncepta rođendana prema uzrastu i temi",
                "Usklađivanje svih dekorativnih detalja sa željom slavljenika"
            ]
        },
        {
            naziv: "Organizacija krštenja",
            opis: "Topla i skladna organizacija uz poštovanje tradicije.",
            cena: "Od 50€",
            detalji: [
                "Elegantno i nežno dekorisanje u skladu sa prilikom",
                "Organizacija prostora za slavlje nakon ceremonije",
                "Izbor svetlih tonova, cvetnih i simboličnih detalja"
            ]
        }
    ],

    fotoVideo: [
        {
            naziv: "Fotografisanje novorođenčadi i trudnica",
            opis: "Nežni i emotivni trenuci zabeleženi sa posebnom pažnjom.",
            cena: "Od 50€",
            detalji: ["Nežno i emotivno fotografisanje i snimanje koje beleži posebne trenutke trudnoće i prvih dana bebe, uz pažljivo stilizovane kadrove i rekvizite."]
        },
        {
            naziv: "Fotografisanje i snimanje događaja",
            opis: "Profesionalno beleženje važnih trenutaka.",
            cena: "Od 50€",
            detalji: ["Profesionalno dokumentovanje važnih trenutaka poput svadbi, rođendana i proslava, kroz fotografije i video koji prenose atmosferu i emociju događaja."]
        },
        {
            naziv: "Tematsko fotografisanje",
            opis: "Kreativni koncepti i fotografije koje ostavljaju utisak.",
            cena: "Od 50€",
            detalji: ["Kreativno osmišljeni setovi i scenografije prema izabranoj temi, uz stilizovane kostime, dekor i rekvizite za jedinstvene i upečatljive fotografije."]
        }
    ]
};

let aktivnaKategorija = "dekoracije";
let poslednjeUsluge = [];

function prikaziUsluge(kategorija, element){
    zatvoriPopup();

    aktivnaKategorija = kategorija;

    document.querySelectorAll(".usluge a")
        .forEach(a => a.classList.remove("aktivan"));

    element.classList.add("aktivan");

    let sadrzaj = "";

    for(let i = 0; i < usluge[kategorija].length; i++){
        sadrzaj += `
        <div class="kartica">
            <h2>${usluge[kategorija][i].naziv}</h2>

            <p>${usluge[kategorija][i].opis}</p>

            <button class="dugme" onclick="saznajVise('${kategorija}', ${i})">Saznaj vise</button>
        </div>`;
    }

    document.getElementById("detalji").innerHTML = sadrzaj;
}

function saznajVise(kategorija, indeks){
    let usluga = usluge[kategorija][indeks];

    dodajNedavno(usluga.naziv);

    let prozor = `
        <div class="popup">
            <h1>${usluga.naziv}</h1>
            <p>${usluga.opis}</p>
            <h3>${usluga.cena}</h3>
            <ul>
    `;
        
    for(let i = 0; i < usluga.detalji.length; i++){
        prozor += `
        <li>${usluga.detalji[i]}</li>
        `;
    }
        prozor += `
        </ul>
        <button class="dugme" onclick="zatvoriPopup()">
            Zatvori
        </button>

    </div>
    `;
    document.getElementById("popupBox").innerHTML = prozor;
    document.getElementById("popupBox").style.display = "flex";
}

function dodajNedavno(naziv){
    poslednjeUsluge.unshift(naziv);

    if(poslednjeUsluge.length > 5){
        poslednjeUsluge.pop();
    }

    prikaziNedavno();
}

function prikaziNedavno(){
    tabela = "";
        poslednjeUsluge.forEach(function(item){
            tabela += `<tr><td>${item}</td></tr>`;
        });
       document.getElementById("listaPregledanih").innerHTML = tabela;
}

function Nedavno(){

    let sekcija = document.getElementById("nedavnoPregledano");
    let dugme = document.getElementById("nedavnoDugme");

    if(sekcija.style.display === "none" || sekcija.style.display === ""){
        sekcija.style.display = "block";
        dugme.innerText = "Sakrij nedavno pregledano";
    } else {
        sekcija.style.display = "none";
        dugme.innerText = "Prikaži nedavno pregledano";
    }
}


function zatvoriPopup(){
    document.getElementById("popupBox").innerHTML = "";
    document.getElementById("popupBox").style.display = "none";
}

window.onload = function(){
    let prvi = document.querySelector(".usluge a");
    prikaziUsluge("dekoracije", prvi);
};

document.getElementById("popupBox").addEventListener("click", function(e){
    if(e.target.id === "popupBox"){
        this.style.display = "none";
    }
});

