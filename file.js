// memory-event-button
const memory8gb = document.getElementById('memory1');
    memory8gb.addEventListener('click',function(){
    memory(true);
    
});
const memory16gb = document.getElementById('memory2');
    memory16gb.addEventListener('click',function(){
    memory(false);
    
});
// memory-function
function memory(memoryAll){
    const extraMemory = document.getElementById('extra-memory');
    if(memoryAll == true){
        extraMemory.innerText = 0;
    }
    else{
        extraMemory.innerText = 180;
    }
    totalCost()
};

//storage-event-button

const storage256gb = document.getElementById('storage1');
storage256gb.addEventListener('click',function(){
    storage(0);    
});

const storage512gb = document.getElementById('storage2');
storage512gb.addEventListener('click',function(){
    storage(100);   
});

const storage1tb = document.getElementById('storage3');
storage1tb.addEventListener('click',function(){
    storage(180);   
});

//storage-function
function storage(storageAll){
    const extraStorage = document.getElementById('extra-storage');
    if(storageAll == 0){
        extraStorage.innerText = 0;
    }
    else if(storageAll == 100){
        extraStorage.innerText = 100;
    }
    else if(storageAll == 180){
        extraStorage.innerText = 180;
    }
    totalCost()
};

//delivery-event-button
const delivery1 = document.getElementById('delivery1');
delivery1.addEventListener('click',function(){
   delivery(true);    
});

const delivery2 = document.getElementById('delivery2');
delivery2.addEventListener('click',function(){
    delivery(false); 
});

//delivery-function
function delivery(deliveryAll){
    const deliveryCharge = document.getElementById('delivery-charge');
    if(deliveryAll == true){
        deliveryCharge.innerText = 0;
    }
    else{
        deliveryCharge.innerText = 20;
    }
    totalCost()
};

// total-function
function strToNum(idName) {
    const string = document.getElementById(idName).innerText;
    const number = parseInt(string);
    return number;
}
function totalCost() {
    const totalPrice = document.getElementById("total-price");
    const totalMain = document.getElementById('main-total');
    totalPrice.innerText = strToNum('best-price') + strToNum('extra-memory') + strToNum('extra-storage') + strToNum("delivery-charge");
    totalMain.innerText = strToNum('best-price') + strToNum('extra-memory') + strToNum('extra-storage') + strToNum("delivery-charge");
}




// Promo  Code use
document.getElementById('promo-apply').addEventListener('click', function(){
    const totalPrice = document.getElementById('total-price');
    const totalPriceNumber = parseFloat(totalPrice.innerText);
    const totalMain = document.getElementById('main-total');
    const promoCodeCall = document.getElementById('discount-code');
    const promoCode = promoCodeCall.value;
    if (promoCode == 'stevekaku'){
        const afterPromoUse = (totalPriceNumber * 20) / 100 ;
    const afterPromoUseTotal = totalPriceNumber - afterPromoUse
    totalMain.innerText = afterPromoUseTotal;
    promoCodeCall.value = '';
    }
    else {
        promoCodeCall.value = '';
    }
    
})
