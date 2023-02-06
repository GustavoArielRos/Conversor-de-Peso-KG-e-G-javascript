
/*adicionando evento de click */
document.getElementById('convert').onclick = pesoconvert;
document.getElementById('reset').onclick = reset_all;

function pesoconvert(){
    var kg = document.getElementById('Quilograma').value; 
    var g = document.getElementById('Grama').value; 


    if(isNaN(kg) || isNaN(g)){
        alert('digite um número válido')
        return
    }else if(kg === ''){
        kg = g/1000;
    }else if(g === ''){
        g = kg * 1000;
    }

    document.getElementById('Quilograma').value = kg;
    document.getElementById('Grama').value = g;
}


function reset_all(){
    document.getElementById('Quilograma').value = "";
    document.getElementById('Grama').value = "";

}