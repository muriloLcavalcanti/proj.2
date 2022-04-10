var valorNota = ''

function gtNota(nota){
    valorNota = nota;

    var x = document.getElementsByClassName('nota');

    for(let i = 0 ; i < x.length ; i++){
        x[i].style.backgroundColor = "#434851"
        console.log(x[i])
    }
    
    document.getElementById(nota).style.backgroundColor =  "#fb7413";
    document.getElementById(nota).style.color =  "white";
    
} 

function submit(){
    window.location.href = "app/html/thanks.html?valorNota=" + valorNota;  
}
