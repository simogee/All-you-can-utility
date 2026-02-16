

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
const orderCardTemplate = document.querySelector("#order-card");

/*ora per manipolare un nodo si fa: const node = document.importNode(template.content, true);*/


export function RenderShell(){
    const fragment = document.importNode(paginaTemplate.content, true);
    const refs = {
    header: fragment.querySelector("#hdr"),
    specialBtn: fragment.querySelector("#eheh"),
    aside: fragment.querySelector("#left-part"),
    main: fragment.querySelector("main"),
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
    export function RenderOrders(ords, container,title) { 

        container.replaceChildren(); // evita duplicati
        if(title){
            const titlepg= document.createElement("h2");
            titlepg.innerText=title;
            container.appendChild(titlepg);
        }
        
        ords.forEach(element => {

            const fragmentCard = orderCardTemplate.content.cloneNode(true);

            const nomePiatto = fragmentCard.querySelector(".nome-piatto");
            const numeroPiatto = fragmentCard.querySelector(".numero-piatto");
            const quantity = fragmentCard.querySelector(".quantità");

            const addPlate = fragmentCard.querySelector(".add");
            const delPlate = fragmentCard.querySelector(".del");
            const remPlate = fragmentCard.querySelector(".remove");

            nomePiatto.textContent = element.name;
            numeroPiatto.textContent = element.number;
            quantity.textContent = element.quantity;

            container.appendChild(fragmentCard);
        });
    }


export function RenderDialog(container) {

    const fragment = dialogTemplate.content.cloneNode(true);

    const dialog = fragment.querySelector("dialog");
    const form = fragment.querySelector("form");
    const nomeInput = fragment.querySelector("#nomepiatto");
    const numeroInput = fragment.querySelector("#numeropiatto");
    const submitBtn = fragment.querySelector('input[type="submit"]');
    const cancelBtn = fragment.querySelector('input[type="button"]');

    container.appendChild(fragment);

    return {
        dialog,
        form,
        nomeInput,
        numeroInput,
        submitBtn,
        cancelBtn
    };
}
