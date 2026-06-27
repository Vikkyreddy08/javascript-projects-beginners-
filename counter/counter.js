
let count=0;
const countElement=document.getElementById('count');
const incrementButton=document.getElementById('increment');
const decrementButton=document.getElementById('decrement');
const resetButton=document.getElementById('reset');

countElement.textContent=count;

incrementButton.addEventListener('click',()=>{
    count++;
    countElement.textContent=count;
});
decrementButton.addEventListener('click',()=>{
    count--;
    countElement.textContent=count;
});
resetButton.addEventListener('click',()=>{
    count=0;
    countElement.textContent=count;
});