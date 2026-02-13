

const hookpage = document.querySelector("body"); // hook della pagina
/**
 * idea:
 *      titolo----save
 *      aside----main
 *        |     |        lista degli ordini con bottone +,-, remove  
 *      ordini---
 *        |     |
 *      Vecchi ordini                         btn-sort
 * 
 * quando clicci su remove dialog con sei sicuro, se si rimuove altrimenti torna indietro.
 */


/* seleziono i vari template da manipolare sul file js*/
const paginaTemplate = document.querySelector("#pag");
const dialogTemplate = document.querySelector("#dialog-template");
const orderCardTemplate = document.querySelector(".card");

/* ora per manipolare un nodo si fa: const node = document.importNode(template.content, true);*/


export function RenderShell(){
    const fragment = document.importNode(paginaTemplate.content, true);
    hookpage.appendChild(fragment);
}
function RenderDialog(){
    
}