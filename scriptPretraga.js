
let unos = document.getElementById("unos");
function Pretraga(){

    let filter = unos.value.toLowerCase();

    let sadrzaj = "";

    for(let kategorija in usluge){
        for(let i = 0; i < usluge[kategorija].length; i++){
            let usluga = usluge[kategorija][i];
            if(usluga.naziv.toLowerCase().includes(filter)){

                sadrzaj += `
                    <div class="kartica">
                        <h2>${usluga.naziv}</h2>
                        <p>${usluga.opis}</p>
                        <button class="dugme" onclick="saznajVise('${kategorija}', ${i})">
                            Saznaj više
                        </button>
                    </div>
                `;
            }
        }
    }
    if(sadrzaj === ""){
    sadrzaj = "<p>Nema pronađenih usluga.</p>";
}
    document.getElementById("detalji").innerHTML = sadrzaj;
}

function obrisiPretragu(){
    unos.value = "";
    let prvi = document.querySelector(".usluge a");
    prikaziUsluge("dekoracije", prvi);
    return prvi;
}