let f = kontakt;
let ime_prezime = f.ime_prezime;
let email = f.email;
let datum = f.datum;
let usluga = f.usluga;
let opis =  f.opis;
let poruka = "";
let pregled = "";

let tamno = document.getElementById('tamno');

const datum_unos = document.getElementById('datum');
datum_unos.min = new Date().toISOString().split('T')[0];

function proveriImePrezime(imePrezime){
    let delovi = imePrezime.trim().split(" ");
    if(delovi.length<2){
        return false;
    }
    else{
        return true;
    }
}

function formatirajIme(ime){

    return ime.charAt(0).toUpperCase() + ime.slice(1);
}

function potvrdiFormu(event) {
    event.preventDefault();

    if(ime_prezime.value !== "" && email.value !== "" && opis.value !== "" && usluga.value !==""){
        if (!proveriImePrezime(ime_prezime.value)){
            alert("Unesite puno ime i prezime!");
            return;
        }
        else {
            let ime_i_prezime = ime_prezime.value.split(" ");
            let ime = ime_i_prezime[0];
           let veliko_ime = formatirajIme(ime);

            let selektovana_usluga = usluga.options[usluga.selectedIndex].text;
            pregled = `${veliko_ime}, hvala što ste rezervisali ${selektovana_usluga.toLowerCase()}!`;
            alert(pregled);
            f.reset();
        }
    }
    else {
        alert("Sva polja moraju biti popunjena!");
    }
}
