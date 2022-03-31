// Pagrindinė funkcija
window.onload = function() {
    // Pagrindinės funkcijos kintamieji
    let sk1 = 10;
    let sk1Kvadratu;

    let sumosRezultatas;


    // Iškvieciu funkciją
    sk1Kvadratu = pakeltiSkaiciuKvadratu(sk1);
    console.log(sk1 + " pakelta kvadratu yra lygu: " + sk1Kvadratu);


    // Iškviečiu sudėties funckiją, jos rezultatą išsaugoju rezultate ir išvesiu tą rezultatą.
    sumosRezultatas = sudetis(20, 147);
    console.log("Sumos rezultatas yra: " + sumosRezultatas);
}


// papildomos funkcijos
function pakeltiSkaiciuKvadratu(x) {
    // funkcijos "vidiniai" kintamieji
    let rezultatas;
    rezultatas = x * x;
    return rezultatas;
}



function sudetis(x, y) {
    let rezultatas;
    rezultatas = x + y;
    return rezultatas;
}