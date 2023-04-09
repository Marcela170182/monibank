import ehUmCpf from "./valida-cpf";
import ehMaiorDeIdade from "./valida-idade";
const camposDoFormulario = document.querySelectorAll('[required]');

camposDoFormulario.forEach((campo)=> {
    campo.addEventListener("blur",()=> verificaCampo(campo));
})

function verificaCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
    console.log(campo.validity);
    
}