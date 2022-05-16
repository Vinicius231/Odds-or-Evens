var evodd = document.getElementById('evodd')
function clicou() {
    var input = document.getElementById('number').value;
    var calculo = input%2
    if(calculo==0){
        evodd.innerHTML += `<p>The number ${input} entered is <b>EVEN.</b></p>`

    }else{
        evodd.innerHTML += `<p>The number ${input} entered is <b>ODD.</b></p>`
    }
}
