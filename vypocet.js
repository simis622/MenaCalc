let czk = 1;       
let eur = 24.5;    
let usd = 22.5;    

function prevod() {
    let castka = document.getElementById('castka').value;
    let zmeny = document.getElementById('zmena').value;
    let domeny = document.getElementById('domena').value;
    let vysledek = 0;

    if (castka === "" || castka == 0) {
        alert("Nezadali jste správnou částku!");
        return;
    }

    let v_czk = 0;

    if (zmeny === "CZK") v_czk = castka * czk;
    else if (zmeny === "EUR") v_czk = castka * eur;
    else if (zmeny === "USD") v_czk = castka * usd;

    if (domeny === "CZK") vysledek = v_czk / czk;
    else if (domeny === "EUR") vysledek = v_czk / eur;
    else if (domeny === "USD") vysledek = v_czk / usd;

    document.getElementById('vysledek').textContent = vysledek.toFixed(3) + " " + domeny;
}

