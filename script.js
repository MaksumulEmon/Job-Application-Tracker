let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total');
let minTotal = document.getElementById('minTotal');
let iinterview = document.getElementById('iinterview');


const allFilterButton = document.getElementById('all-filter-button');
const interviewFilterButton = document.getElementById('interview-filter-button');
const rejectedFilterButton = document.getElementById('rejected-filter-button');


const allcardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

function calculateCount() {
    total.innerText = allcardSection.children.length;
    minTotal.innerText = allcardSection.children.length;

    iinterview.innerText = interviewList.length;
    rrejected.innerText = rejectedList.length;

}
calculateCount();


// -------------------------------------

function toggleStyle(id) {
    // Added Biue Bg for all
    allFilterButton.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterButton.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterButton.classList.remove('bg-[#3B82F6]', 'text-white')

    //  if any buttons has Black than remove
    allFilterButton.classList.add('bg-white', 'text-[#323B49]')
    interviewFilterButton.classList.add('bg-white', 'text-[#323B49]')
    rejectedFilterButton.classList.add('bg-white', 'text-[#323B49]')


    const selected = document.getElementById(id);

    // Added Biue Bg for Cursor
    selected.classList.remove('bg-white', 'text-[#323B49]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}



mainContainer.addEventListener('click', function(event){
    console.log(event.target.parentNode.parentNode);
})