var valorNota = ''

function gtNota(nota){
    valorNota = nota;

    var x = document.getElementsByClassName('nota');

    for(let i = 0 ; i < x.length ; i++){
        x[i].style.backgroundColor = "#434851"
        console.log(x[i])
    }
    
    document.getElementById(nota).style.backgroundColor =  "#fb7413";
} 


function submit(){
    window.location.href = "thanks.html?valorNota=" + valorNota;  
}
