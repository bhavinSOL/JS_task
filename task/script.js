let count=0
let value=document.getElementById('cont')
function inc(){
    count +=1
    value.textContent=count;
}
function dec(){
    count -=1
    value.textContent=count;
}
function res(){
    count =0
    value.textContent=count;
}