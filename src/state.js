
let orders[];

let oldOrders[]; // lista dei vecchi ordini, just in case..

function createOrder(name, number){
    return{
        name: name,
        number: number,
        quantity: 1,
    }

}
function sortbyNumber(a,b){ // funzione di sorting.
    if(a.number < b.number)
        return -1;
    if(a.number > b.number)
        return 1;
    return 0;
}

function AddOrder(name,number){
    const newOrder = createOrder(name,number);
    const ord = orders.find( o => o.number === newOrder.number); // trovo l'order relativo
    if(ord == undefined)
        orders.push(newOrder);
    else
        ord.quantity++; 
}

function ReduceOrder(number){
    const indx = orders.findIndex(o => o.number == number);
    if(orders[indx].quantity <= 0){
        oldOrders.push(orders[index]);
        orders.splice(indx,1);
    }
    else if(orders[indx].quantity>0){
        orders[indx].quantity--;
    }    
    else{
        return;
    }
}

function getOrders()
{
    return orders.slice(); // ritorna copia degli ordini
}
function getOldOrders(){
    return oldOrders.slice();
}