/* eslint-disable indent */
/* eslint-disable no-unused-vars */
'use strict';
var price;
var deviceName=[];
var min=350;
var max=750;
function devices(devicename,quantity,unitprice,category){
    // eslint-disable-next-line indent
    this.devicename=devicename;
    this.quantity=quantity;
    this.unitprice=[];

}
function getRandoomNumber(){
  price=Math.random() * (max - min + 1) + min;
}
// eslint-disable-next-line no-undef
console.log(price);
document.getElementById('table');
