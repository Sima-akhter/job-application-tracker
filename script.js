
let interviewList = []
let rejectedList = []

let allCount = document.getElementById("allCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


const allJobsSection = document.getElementById("allJobs");
const mainContainer = document.querySelector('main');


function calculateCount(){
    allCount.innerText = allJobsSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()

function toggleStyle(id){

    
    allFilterBtn.classList.remove('bg-black','text-white')
    interviewFilterBtn.classList.remove('bg-black','text-white')
    rejectedFilterBtn.classList.remove('bg-black','text-white')

    allFilterBtn.classList.add('bg-gray-300')
    interviewFilterBtn.classList.add('bg-gray-300')
    rejectedFilterBtn.classList.add('bg-gray-300')

    
    const selected = document.getElementById(id)

    selected.classList.remove('bg-gray-300')
    selected.classList.add('bg-black','text-white')
}





