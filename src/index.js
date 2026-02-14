import "./styles.css";

import {RenderShell,RenderOrders} from "./render.js";

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



parts.ordersContainer.addEventListener("click", (ev) => {
  const card = ev.target.closest(".card");
  if (!card) return;

  const number = Number(card.querySelector(".numero-piatto").textContent);
  const nome = card.querySelector(".nome-piatto").textContent;
  if (ev.target.closest(".add")) {
    AddOrder(nome, number);
  } else if (ev.target.closest(".remove")) {
    ReduceOrder(number);
  } else if (ev.target.closest(".del")) {
    DeleteOrder(number);
  } else {
    return;
  }

  RenderOrders(getOrders(), parts.ordersContainer);
});

parts.ordBtn.addEventListener("click", ()=>{
    RenderOrders(getOrders(), parts.ordersContainer);
})
parts.oldOrdBtn.addEventListener("click", ()=>{
    RenderOrders(getOldOrders(), parts.ordersContainer);
})
parts.addBtn