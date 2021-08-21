// Memory Price Calculate
function priceMemoryCalc(memory){
    const priceMemory = document.getElementById('memory-price');
    if (memory == 8){
        priceMemory.innerText = 0;
    }
    else{
        priceMemory.innerText = 180;
    }
    totalCost()
}
// Storage Price Calculate
function priceStorageCalc(storage){
    const priceStorage = document.getElementById('storage-price');
    if(storage == 256){
        priceStorage.innerText = 0;
    }
    else if (storage == 512) {
        priceStorage.innerText = 100;
    }
    else if (storage == 1024){
        priceStorage.innerText = 180;
    }
    totalCost()
}
// Delivery Price Calculate
function priceDeliveyCost(primeDelivery) {
    const priceDelivery = document.getElementById('delivery-price');
    if (primeDelivery == true){
        priceDelivery.innerText = 0;
    }
    else {
        priceDelivery.innerText = 20;
    }
    totalCost()   
}

//Total Price Calculate
function strToNum(idName) {
    const string = document.getElementById(idName).innerText;
    const number = parseInt(string);
    return number;
}
function totalCost() {
    const totalPrice = document.getElementById("total-price");
    const totalMain = document.getElementById('main-total');
    totalPrice.innerText = strToNum('normal-price') + strToNum('memory-price') + strToNum('storage-price') + strToNum("delivery-price");
    totalMain.innerText = strToNum('normal-price') + strToNum('memory-price') + strToNum('storage-price') + strToNum("delivery-price");
}
// MEmory 
document.getElementById('memory-8gb').addEventListener('click', function(){
    priceMemoryCalc(8);
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    priceMemoryCalc(16);
})
 // Storage
document.getElementById('storage-256gb').addEventListener('click', function(){
    priceStorageCalc(256);
})
document.getElementById('storage-512gb').addEventListener('click', function(){
    priceStorageCalc(512);
})
document.getElementById('storage-1tb').addEventListener('click', function(){
   priceStorageCalc(1024);
})
// Delivery
document.getElementById('delivery-free').addEventListener('click', function(){
    priceDeliveyCost(true);
})
document.getElementById('delivery-cost').addEventListener('click', function(){
   priceDeliveyCost(false);
})


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