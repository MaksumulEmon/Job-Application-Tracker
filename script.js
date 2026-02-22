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
const filterSection = document.getElementById('filtered-section')

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

    if (id == 'interview-filter-button') {
        allcardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
    } else if (id == 'all-filter-button') {
        allcardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
}



mainContainer.addEventListener('click', function (event) {
    // console.log(event.target.parentNode.parentNode);

    if (event.target.classList.contains('interview')) {
        const parentNode = event.target.parentNode.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText
        const jobTitle = parentNode.querySelector('.jobTitle').innerText
        const jobInfo = parentNode.querySelector('.jobInfo').innerText
        const statusButton = parentNode.querySelector('.statusButton').innerText
        const jobDescription = parentNode.querySelector('.jobDescription').innerText


        const cardInfo = {
            companyName,
            jobTitle,
            jobInfo,
            statusButton,
            jobDescription
        }

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);

        // Staus Button Change 
        const statusBtn = parentNode.querySelector('.statusButton');
        statusBtn.innerText = "Interview";
        statusBtn.classList.remove("bg-[#eef4ff]");
        statusBtn.classList.add("bg-green-400", "text-black");

        // Staus Button Change end


        if (!companyExist) {
            interviewList.push(cardInfo)
        }
        renderInterview();
    }
})




function renderInterview() {

    filterSection.innerHTML = '';

    for (let inter of interviewList) {
        console.log(inter);
        let div = document.createElement('div');
        div.className = 'card flex justify-between  shadow-2xl  rounded-lg p-6';
        div.innerHTML = `
            <div class="space-y-6 ">
                    <!-- part 1 -->
                    <div>
                        <p class="companyName text-lg font-semibold text-[#002C5C]">${inter.companyName}</p>
                        <p class="jobTitle text-base font-normal text-gray-500">${inter.jobTitle}</p>
                    </div>

                    <!-- part 2 -->
                    <p class="jobInfo text-gray-500 ">${inter.jobInfo}
                        </p>

                    <!-- part 3 -->
                    <button class="statusButton bg-[#eef4ff] py-2 px-3 rounded ">Interview</button>

                    <p class="jobDescription text-[#323B49] font-normal">${inter.jobDescription}</p>

                    <div class="flex gap-5">
                         <button 
                            class="interview  border-2 border-green-500 text-green-500 font-semibold px-4 py-2 rounded-lg cursor-pointer   hover:bg-green-500 hover:text-white active:bg-green-600 active:text-white transition-colors duration-300">Interview</button>
                        <button
                            class=" rejected  border-2 border-red-500 text-red-500 font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white  active:bg-red-600 active:text-white  transition-colors duration-300 ">Rejected</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <img src="./images/Vector (1).png" alt=""
                        class="rounded-full border-2 border-[#F1F2F4]  ring-[#F1F2F4] p-2 w-8 h-8">
                </div>

        `
        filterSection.appendChild(div)
    }







}