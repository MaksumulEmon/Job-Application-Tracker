let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total');
let minTotal = document.getElementById('minTotal');
let iinterview =document.getElementById('iinterview');
let rrejected =document.getElementById('rrejected');
// console.log(rrejected);

const allcardSection = document.getElementById('allCards');

const mainContainer =document.querySelector('main');
console.log(mainContainer);

function calculateCount (){
    total.innerText=allcardSection.children.length;
    minTotal.innerText =allcardSection.children.length;

    iinterview.innerText =interviewList.length;
    rrejected.innerText =rejectedList.length;

}
calculateCount();


// -------------------------------------

function toggleStyle(id){
    console.log("click")
}