alleBillettene = [];
$(function(){
    hentAlleBilletter();
})

function hentAlleBilletter(){
    $.get('/hentAlle',function(billettinfo){
        FormaterBilletter(billettinfo);
    });
}
function slettAlleBilletter() {
    alleBillettene = [];
    let nullstill = document.getElementById("billettene");
    nullstill.innerHTML = "";
    $.get('/slettAlle',function (){
        hentAlleBilletter();
    });
}

//lager billett
function bestilling() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefonnr = $("#telefonnr").val();
    const epost = $("#epost").val();

    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    }

    // Input-validering
    const regexEpost = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
    const regexTlf = /^(4[0-9]{7}|9[0-9]{7})$/;

    if (fornavn.trim() === "") {
        $("#feilFornavn").text("Må skrive noe inn i fornavnet");
    } else {
        $("#feilFornavn").text("");
    }
    if (etternavn.trim() === "") {
        $("#feilEtternavn").text("Må skrive noe inn i etternavnet");
    } else {
        $("#feilEtternavn").text("");
    }
    if (telefonnr.trim() === "") {
        $("#feilTelefonnr").text("Må skrive noe inn i telefonnr");
    } else if (!regexTlf.test(telefonnr)) {
        $("#feilTelefonnr").text("Ugyldig telefonnr");
    } else {
        $("#feilTelefonnr").text("");
    }
    if (epost.trim() === "") {
        $("#feilEpost").text("Må skrive noe inn i epost");
    } else if (!regexEpost.test(epost)) {
        $("#feilEpost").text("Ugyldig epost");
    } else {
        $("#feilEpost").text("");
    }

    if (antall !== "" && fornavn.trim() !== "" && etternavn.trim() !== "" &&
        telefonnr.trim() !== "" && regexTlf.test(telefonnr) && epost.trim() !== "" && regexEpost.test(epost)) {
        alleBillettene.push(billett);
        //tømmer input-feltene etter at en billett er ferdig registrert
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");

        FormaterBilletter(alleBillettene);
    }

    $.post("/lagre", billett, function (){
        hentAlleBilletter();
    });
}
function FormaterBilletter(billetter){
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>E-post</th>" +
        "</tr>";
    for(let b of billetter){
        ut+="<tr><td>"+b.film+"</td><td>"+b.antall+"</td><td>"+b.fornavn+"</td><td>"
            +b.etternavn+"</td><td>"+b.telefonnr+"</td><td>"+b.epost+"</td></tr>"
    }
    ut+="</table>";

    $("#billettene").html(ut);
}