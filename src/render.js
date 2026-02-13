

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

/*ora per manipolare un nodo si fa: const node = document.importNode(template.content, true);*/


export function RenderShell(){
    const fragment = document.importNode(paginaTemplate.content, true);
    const refs = {
    header: fragment.querySelector("#hdr"),
    specialBtn: fragment.querySelector("#eheh"),
    aside: fragment.querySelector("#left-part"),
    ordBtn: fragment.querySelector("#ord-btn"),
    oldOrdBtn: fragment.querySelector("#old-ord-btn"),
    ordersContainer: fragment.querySelector("#orders-container"),
    addBtn: fragment.querySelector("#add"),
    sortBtn: fragment.querySelector("#sort"),
  };

    hookpage.appendChild(fragment);
    
    return refs;
}



/* prendi ordini da lista passata e crei cards. */
export function RenderOrders(ords,container){
    ords.forEach(element => {
        const fragmentCard = orderCardTemplate.content.cloneNode(true);
        const nomePiatto = fragmentCard.querySelector("#nome-piatto");
        const numeroPiatto = fragmentCard.querySelector("#numero-piatto");
        const quantity = fragmentCard.querySelector("#quantità");
        const addPlate = fragmentCard.querySelector("#add");
        const delPlate = fragmentCard.querySelector("#del");
        const remPlate= fragmentCard.querySelector("#remove");
        
        nomePiatto.textContent = element.name;
        numeroPiatto.textContent = element.number;
        quantity.textContent = element.quantity;
        container.appendChild(fragmentCard);
    });
}
