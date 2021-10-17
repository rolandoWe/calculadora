
let textoP=document.querySelector(".texto_calc");
let datos=document.querySelectorAll(".dato");
let limpiar=document.querySelector(".limpiar")
let igual=document.querySelector(".igual")

function borrar(){
    textoP.value="";
}
function operacion(){
    let er="Error"
    try{
        textoP.value=eval(textoP.value)
    }
    catch{
        textoP.value=er;
    }
}
function digitando(r){
let resultado=r.value;
textoP.value+=resultado;
}
datos.forEach(function(d){
d.addEventListener("click",function(j){
    digitando(j.target)
})
})
limpiar.addEventListener("click",function(){
    borrar()
})
igual.addEventListener("click",function(){
operacion()
})