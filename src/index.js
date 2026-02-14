import "./styles.css";

import {RenderShell,RenderOrders} from "./render.js";

import{createOrder,AddOrder,ReduceOrder,getOrders} from "./state.js"





const parts = RenderShell();


function testOrder(n){
    for(let i = 0; i < n; i++){
        AddOrder("prova",123);
        AddOrder("gigi",222);
    }
        console.log(getOrders());

}


testOrder(10);
RenderOrders(getOrders(),parts.ordersContainer);



parts.ordersContainer.addEventListener("click", (ev) => {
  const card = ev.target.closest(".card");
  if (!card) return;

  const number = Number(card.querySelector(".numero-piatto").textContent);

  if (ev.target.closest(".add")) {
    AddOrder("blah", number);
  } else if (ev.target.closest(".remove")) {
    ReduceOrder(number);
  } else if (ev.target.closest(".del")) {
    // qui chiamerai DeleteOrder(number) se ce l’hai
  } else {
    return;
  }

  RenderOrders(getOrders(), parts.ordersContainer);
});
