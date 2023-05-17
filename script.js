function sim() {
    alert("VOCÊ ACEITOU PAGAR A FEIJOADA CARAAAA:) ÁS 14H VIU");
    // redireciona para um URL apos aceitar
    location.href="https://www.google.com/maps/place/Padaria+Bandeirantes+2/@-23.7105245,-46.6983725,17z/data=!4m10!1m2!2m1!1spadaria+bandeirantes!3m6!1s0x94ce4fbb61d7b3a9:0x4675a07cef377458!8m2!3d-23.71052!4d-46.6947727!15sChRwYWRhcmlhIGJhbmRlaXJhbnRlc1oWIhRwYWRhcmlhIGJhbmRlaXJhbnRlc5IBBmJha2VyeeABAA!16s%2Fg%2F11bx43dlz8?hl=pt-BR";
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
