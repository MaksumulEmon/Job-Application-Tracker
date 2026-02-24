let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'


let total = document.getElementById('total');
let minTotal = document.getElementById('minTotal');
let iinterview = document.getElementById('iinterview');
let rrejected = document.getElementById('rrejected');


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

    updateMinTotal();

}
calculateCount();


// -------------------------------------

function toggleStyle(id) {
    allFilterButton.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewFilterButton.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedFilterButton.classList.remove('bg-[#3B82F6]', 'text-white')

    //  if any buttons has Black than remove
    allFilterButton.classList.add('bg-white', 'text-[#323B49]')
    interviewFilterButton.classList.add('bg-white', 'text-[#323B49]')
    rejectedFilterButton.classList.add('bg-white', 'text-[#323B49]')


    const selected = document.getElementById(id);
    currentStatus = id

    // Added Biue Bg for Cursor
    selected.classList.remove('bg-white', 'text-[#323B49]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    if (id == 'interview-filter-button') {
        allcardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')


        // Length == 0 Than Show No Items Box
        if (interviewList.length == 0) {
            filterSection.innerHTML = `

          <div class=" flex  flex-col justify-center items-center bg-[#F1F2F4] rounded-lg py-25 mb-20 mt-4">
            <img src="./images/jobs.png" alt="" class="items-center">
            <p class="text-2xl text-[#002C5C] font-semibold">No jobs available</p>
            <p class="text-[#64748B] text-center">Check back soon for new job opportunities</p>
         </div>
            `;
        }

        renderInterview()

       

        // Button Color Change When toggle click

    } else if (id == 'all-filter-button') {
        allcardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')


    } else if (id == 'rejected-filter-button') {
        allcardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');

        renderRejected()
       
    }

    updateMinTotal();
}



// Main Container

mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('delete')) {
        const div = event.target.parentNode.parentNode;
        div.remove();

        calculateCount();


        if (currentStatus == 'interview-filter-button') {
            renderInterview();
        } else if (currentStatus == 'rejected-filter-button') {
            renderRejected();
        }
        renderAllEmpty();

    }



    // interview
    if (event.target.classList.contains('interview')) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText
        const jobTitle = parentNode.querySelector('.jobTitle').innerText
        const location = parentNode.querySelector('.location').innerText
        const type = parentNode.querySelector('.type').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const statusButton = parentNode.querySelector('.statusButton').innerText
        const jobDescription = parentNode.querySelector('.jobDescription').innerText
        const statusBtn = parentNode.querySelector('.statusButton');

        statusBtn.innerText = "Interview";
        statusBtn.classList.remove(
            "bg-[#eef4ff]", "bg-red-500", "text-white", "text-black",

        );

        statusBtn.classList.add("bg-green-500", "text-black");


        const cardInfo = {
            companyName,
            jobTitle,
            location,
            type,
            salary,
            statusButton: 'Interview',
            jobDescription
        }

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);


        if (!companyExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)



        if (currentStatus == 'interview-filter-button') {
            renderInterview();
        } else if (currentStatus == 'rejected-filter-button') {
            renderRejected();
        }


        calculateCount();


        // Rejected
    } else if (event.target.classList.contains('rejected')) {
        const parentNode = event.target.parentNode.parentNode.parentNode;
        // const parentNode =event.target.closest('.card');

        const companyName = parentNode.querySelector('.companyName').innerText
        const jobTitle = parentNode.querySelector('.jobTitle').innerText
        const location = parentNode.querySelector('.location').innerText
        const type = parentNode.querySelector('.type').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const statusButton = parentNode.querySelector('.statusButton').innerText
        const jobDescription = parentNode.querySelector('.jobDescription').innerText


        parentNode.querySelector('.statusButton').innerText = 'Rejected'

        const statusBtn = parentNode.querySelector('.statusButton');
        statusBtn.innerText = "Rejected";
        statusBtn.classList.remove(
            "bg-[#eef4ff]", "bg-green-500", "text-black", "text-white"

        );
        statusBtn.classList.add("bg-red-500", "text-black")

        const cardInfo = {
            companyName,
            jobTitle,
            location,
            type,
            salary,
            statusButton: 'Rejected',
            jobDescription
        }

        const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

        if (!companyExist) {
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        if (currentStatus == 'interview-filter-button') {
            renderInterview();
        }

        calculateCount()
    }
})


// update side Count jobs
function updateMinTotal() {
    if (currentStatus == 'all-filter-button') {
        minTotal.innerText = `${allcardSection.children.length} `;
    } else if (currentStatus == 'interview-filter-button') {
        minTotal.innerText = `${interviewList.length} of ${allcardSection.children.length} `;
    } else if (currentStatus == 'rejected-filter-button') {
        minTotal.innerText = `${rejectedList.length} of ${allcardSection.children.length} `;
    }
}



// Empty allCard Section delete
function renderAllEmpty() {
    if (allcardSection.children.length == 0) {
        allcardSection.innerHTML = `
         <div class="flex flex-col justify-center items-center bg-[#F1F2F4] rounded-lg py-25 mb-20 mt-4">
            <img src="./images/jobs.png" alt="" class="items-center">
            <p class="text-2xl text-[#002C5C] font-semibold">No jobs available</p>
            <p class="text-[#64748B] text-center">Check back soon for new job opportunities</p>
          </div>
        `
    }
}



function renderInterview() {

    filterSection.innerHTML = '';

    if (interviewList.length == 0) {
        filterSection.innerHTML = `
          <div class="flex flex-col justify-center items-center bg-[#F1F2F4] rounded-lg py-25 mb-20 mt-4">
            <img src="./images/jobs.png" alt="" class="items-center">
            <p class="text-2xl text-[#002C5C] font-semibold">No jobs available</p>
            <p class="text-[#64748B] text-center">Check back soon for new job opportunities</p>
          </div>
        `;
    }



    for (let inter of interviewList) {
        // console.log(inter);
        let div = document.createElement('div');
        div.className = 'card flex justify-between  shadow-2xl  rounded-lg p-6 mb-5';
        div.innerHTML = `
            <div class="space-y-6 ">
                    <!-- part 1 -->
                    <div>
                        <p class="companyName text-lg font-semibold text-[#002C5C]">${inter.companyName}</p>
                        <p class="jobTitle text-base font-normal text-gray-500">${inter.jobTitle}</p>
                    </div>

                    
                    <!-- part 2 -->
                    <!-- location,type and salary -->
                    <div class="flex gap-2 text-[14px] text-[#64748B]">
                        <span class="location">${inter.location}</span>
                        <ul class="flex gap-2">
                            <li class="type flex items-center gap-1.5"><i class="fa-solid fa-circle text-[5px]"></i>${inter.type}</li>
                            <li class="salary flex items-center gap-1.5"><i class="fa-solid fa-circle text-[5px]"></i>${inter.salary} </li>
                        </ul>
                    </div>



                     <!-- part 3 -->

                <!-- e  -->
                    <button class="statusButton bg-green-500 text-black py-2 px-3 rounded ">${inter.statusButton}</button>

                    <p class="jobDescription text-[#323B49] font-normal">${inter.jobDescription}
                    </p>

                    <div class="flex gap-5">
                         <button 
                            class="interview  border-2 border-green-500 text-green-500 font-semibold px-4 py-2 rounded-lg cursor-pointer   hover:bg-green-500 hover:text-white active:bg-green-600 active:text-white transition-colors duration-300">Interview</button>
                        <button
                            class=" rejected  border-2 border-red-500 text-red-500 font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white  active:bg-red-600 active:text-white  transition-colors duration-300 ">Rejected</button>
                    </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <img src="./images/delete.png" alt=""
                        class="delete rounded-full border-2 border-[#F1F2F4]  ring-[#F1F2F4] p-2 w-10 h-10 cursor-pointer">
                </div>
        `;

        filterSection.appendChild(div)
    }

}



// Rejected  render Function

function renderRejected() {

    filterSection.innerHTML = '';


    if (rejectedList.length === 0) {
        filterSection.innerHTML = `
          <div class="flex flex-col justify-center items-center bg-[#F1F2F4] rounded-lg py-25 mb-20 mt-4">
            <img src="./images/jobs.png" alt="" class="items-center">
            <p class="text-2xl text-[#002C5C] font-semibold">No jobs available</p>
            <p class="text-[#64748B] text-center">Check back soon for new job opportunities</p>
          </div>
        `;

    }


    for (let reje of rejectedList) {
        // console.log(inter);
        let div = document.createElement('div');
        div.className = 'card flex justify-between  shadow-2xl  rounded-lg p-6 mb-5';
        div.innerHTML = `
            <div class="space-y-6 ">
                    <!-- part 1 -->
                    <div>
                        <p class="companyName text-lg font-semibold text-[#002C5C]">${reje.companyName}</p>
                        <p class="jobTitle text-base font-normal text-gray-500">${reje.jobTitle}</p>
                    </div>

                    
                    <!-- part 2 -->
                    <!-- location,type and salary -->
                    <div class="flex gap-2 text-[14px] text-[#64748B]">
                        <span class="location">${reje.location}</span>
                        <ul class="flex gap-2">
                            <li class="type flex items-center gap-1.5"><i class="fa-solid fa-circle text-[5px]"></i>${reje.type}</li>
                            <li class="salary flex items-center gap-1.5"><i class="fa-solid fa-circle text-[5px]"></i>${reje.salary} </li>
                        </ul>
                    </div>



                     <!-- part 3 -->

                <!-- e  -->
                    <button class="statusButton bg-red-500 text-black py-2 px-3 rounded ">${reje.statusButton}</button>

                    <p class="jobDescription text-[#323B49] font-normal">${reje.jobDescription}
                    </p>

                    <div class="flex gap-5">
                         <button 
                            class="interview  border-2 border-green-500 text-green-500 font-semibold px-4 py-2 rounded-lg cursor-pointer   hover:bg-green-500 hover:text-white active:bg-green-600 active:text-white transition-colors duration-300">Interview</button>
                        <button
                            class=" rejected  border-2 border-red-500 text-red-500 font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white  active:bg-red-600 active:text-white  transition-colors duration-300 ">Rejected</button>
                    </div>
                </div>

                <!-- main part 2 -->
               <div>
                    <img src="./images/delete.png" alt=""
                        class="delete rounded-full border-2 border-[#F1F2F4]  ring-[#F1F2F4] p-2 w-10 h-10 cursor-pointer">
                </div>

        `
        filterSection.appendChild(div)
    }
}