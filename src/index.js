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