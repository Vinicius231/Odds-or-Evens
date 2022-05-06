function clicou() {
    var evodd = document.getElementById('evodd')

    var number = window.prompt('Enter some number:')

    var parim = number%2

    if (parim == 0) {

        evodd.innerHTML += `<p>The number ${number} entered is <b>EVEN.</b>` 
    }else {
        evodd.innerHTML += `<p> The number ${number} entered is <b>ODD.</b>`
    } 





    
}
