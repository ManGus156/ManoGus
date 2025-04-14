let prod = 4;
let quant = 3;
let preco;
let totalfinal;
let taxadentrega = 4

switch(prod){
    case 1:
        console.log("Compra de Hamburguer");
        preco = 23;
        break;
    case 2:
        console.log("Compra De Bolo De Pote");
        preco = 17.50;
        break;
    case 3:
        console.log("Compra De Pizza");
        preco = 82.90;
        break;
    case 4:
        console.log("Compra De HotDog")
        preco = 22;
        break;
    case 5:
        console.log("Compra De Refrigerante")
        preco = 8;
        break;
    default:
        console.log("Codigo De Compra Invalido")
}
console.log("Valor Da Taxa De Entrega: R$ "+ taxadentrega)
//Calculo Preço Final
if (prod >= 1 && prod <= 5){
    totalfinal = (quant*preco)+taxadentrega
    console.log(`A Compra final ficou no valor de: R$ ${totalfinal.toFixed(2)}`);
}




