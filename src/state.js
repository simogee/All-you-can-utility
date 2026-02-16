
let orders=[];

let oldOrders=[]; // lista dei vecchi ordini, just in case..

export function createOrder(name, number){
    return{
        name: name,
        number: number,
        quantity: 1,
    }

}
function sortByNumber(a,b){ // funzione di sorting.
    if(a.number < b.number)
        return -1;
    if(a.number > b.number)
        return 1;
    return 0;
}

export function AddOrder(name,number){
    const newOrder = createOrder(name,number);
    const ord = orders.find( o => o.number === newOrder.number); // trovo l'order relativo
    if(ord === undefined)
        orders.push(newOrder);
    else
        ord.quantity++; 
}

export function ReduceOrder(number){

    const indx = orders.findIndex(o => o.number == number);
    if (indx === -1) return;
    if(orders[indx].quantity <= 0){
        oldOrders.push(orders[indx]);
        orders.splice(indx,1);
    }
    else if(orders[indx].quantity>0){
        orders[indx].quantity--;
    }    
    else{
        orders[indx].quantity=0;
    }
}

export function getOrders()
{
    
    const merge= orders.slice().reduce((acc,curr)=>{
        const found = acc.find(o => o.number === curr.number);

        if (found) {
            found.quantity += curr.quantity;
        } else {
            acc.push({ ...curr });
    }

  return acc;

    }, []);
    console.log(merge);
    return merge;
}
export function getOldOrders(){

    const merge= oldOrders.slice().reduce((acc,curr)=>{
        const found = acc.find(o => o.number === curr.number);

        if (found) {
            found.quantity += curr.quantity;
        } else {
            acc.push({ ...curr });
    }

  return acc;

    }, []);
    
    return merge;

}
export function DeleteOrder(num){
    const indx = orders.findIndex(o => o.number == num);
    if(indx == -1) return;
    orders.splice(indx,1);

}

export function Sorting(array){
    array.sort(sortByNumber(f,s));
}