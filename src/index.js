import "./styles.css";

import {RenderShell,RenderOrders, RenderDialog} from "./render.js";

import{createOrder,AddOrder,ReduceOrder,getOrders,getOldOrders,DeleteOrder} from "./state.js"


/**
 *  header 
    specialBtn -> per ottenere ref su bottone "dai clicca qui"
    aside 
    ordBtn -> ordini
    oldOrdBtn -> vecchi ordini
    ordersContainer -> dove vengono renderizzate le cards
    addBtn -> aggiunta nuovo ordine -> dialog e salvataggio dati form
    sortBtn -> mette in ordine di numero gli ordini
 */


const parts = RenderShell();


function testOrder(n){
    for(let i = 0; i < n; i++){
        AddOrder("prova",123);
        AddOrder("gigi",222);
    }
        console.log(getOrders());

}


testOrder(10);
const dialog = RenderDialog(document.querySelector("body"));


parts.ordersContainer.addEventListener("click", (ev) => { // qui c'è qualche bug con la creazione nuovo ordine e poi aggiunta di un ordine tramite click
  const card = ev.target.closest(".card");
  if (!card) return;
  const number = Number(card.querySelector(".numero-piatto").textContent);
  const nome = card.querySelector(".nome-piatto").textContent;
  if (ev.target.closest(".add")) {
    AddOrder(nome, Number(number));
  } else if (ev.target.closest(".remove")) {
    ReduceOrder(Number(number));
  } else if (ev.target.closest(".del")) {
    DeleteOrder(Number(number));
  } else {
    return;
  }

  RenderOrders(getOrders(), parts.ordersContainer);
});

parts.ordBtn.addEventListener("click", ()=>{
    RenderOrders(getOrders(), parts.ordersContainer);
});
parts.oldOrdBtn.addEventListener("click", ()=>{
    RenderOrders(getOldOrders(), parts.ordersContainer);
});
parts.addBtn.addEventListener("click",()=>{ // mostra la dialog box
   dialog.dialog.showModal();
});

//dialog events

dialog.cancelBtn.addEventListener("click", ()=>{
    //cancella i dati dal form e nasconde
});

dialog.form.addEventListener("submit",(ev)=>{ // questa quasi sicuramente è corretta
    //prevent default e fa addOrder poi render order
    
   
    const data = new FormData(dialog.form);
    const nomePiatto = data.get("nomepiatto");
    const numeroPiatto = Number(data.get("numeropiatto"));
    console.log(numeroPiatto);
    AddOrder(nomePiatto,numeroPiatto);
    RenderOrders(getOrders(),parts.ordersContainer);
    ev.preventDefault();
    dialog.form.reset();
    dialog.dialog.close();
});