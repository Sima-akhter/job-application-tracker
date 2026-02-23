
// ================= VARIABLES =================

let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allJobsSection = document.getElementById("allJobs");
const filterSection = document.getElementById("filtered-section");

const totalCount = document.getElementById("allCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCount = document.getElementById("jobCount");

const mainContainer = document.querySelector("main");


// ================= COUNT =================

function calculateCount() {
  totalCount.innerText = allJobsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  jobCount.innerText = allJobsSection.children.length;
}

calculateCount();


// ================= FILTER TOGGLE =================

function toggleStyle(id) {

  [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
    btn.classList.remove("bg-black","text-white");
    btn.classList.add("bg-gray-300");
  });

  const selected = document.getElementById(id);
  selected.classList.remove("bg-gray-300");
  selected.classList.add("bg-black","text-white");

  currentStatus = id;

  if (id === "all-filter-btn") {
    allJobsSection.classList.remove("hidden");
    filterSection.classList.add("hidden");
  }

  if (id === "interview-filter-btn") {
    allJobsSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  }

  if (id === "rejected-filter-btn") {
    allJobsSection.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}


// ================= EVENT DELEGATION =================

mainContainer.addEventListener("click", function (event) {

  const card = event.target.closest(".card-body");
  if (!card) return;

  const company = card.querySelector("h2").innerText;
  const position = card.querySelectorAll("p")[0].innerText;
  const description = card.querySelectorAll("p")[1].innerText;
  const badge = card.querySelector(".badge");

  const jobData = { company, position, description };

  // ================= INTERVIEW =================
  if (event.target.innerText === "INTERVIEW") {

    if (!interviewList.find(item => item.company === company)) {
      interviewList.push(jobData);
    }

    rejectedList = rejectedList.filter(item => item.company !== company);

    if (badge) {
      badge.innerText = "INTERVIEW";
      badge.className = "badge bg-green-100 text-green-700 border-none px-4 py-3";
    }

    calculateCount();

    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
  }


  // ================= REJECTED =================
  if (event.target.innerText === "REJECTED") {

    if (!rejectedList.find(item => item.company === company)) {
      rejectedList.push(jobData);
    }

    interviewList = interviewList.filter(item => item.company !== company);

    if (badge) {
      badge.innerText = "REJECTED";
      badge.className = "badge bg-red-100 text-red-700 border-none px-4 py-3";
    }

    calculateCount();

    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
  }


  // ================= DELETE =================
  if (event.target.innerText === "🗑️") {

    interviewList = interviewList.filter(item => item.company !== company);
    rejectedList = rejectedList.filter(item => item.company !== company);

    card.remove();

    calculateCount();

    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
  }

});


// ================= RENDER INTERVIEW =================

function renderInterview() {

  filterSection.innerHTML = "";

  if (interviewList.length === 0) {
    filterSection.innerHTML = `
  <div class="text-center py-20">
            <div class="text-6xl mb-4 flex items-center justify-center">
                <img src="./jobs.png" alt="">
            </div>
            <h2 class="text-2xl font-bold">No Jobs Available</h2>
            <p class="text-gray-500 mt-2">
                You have not added any jobs to this section yet.
            </p>
        </div>
`;
    return;
  }

  interviewList.forEach(job => {

    filterSection.innerHTML += `
      <div class="card-body bg-base-100 shadow-md border-gray-200">
        <h2 class="text-xl font-bold text-gray-600">${job.company}</h2>
        <p class="text-gray-500">${job.position}</p>

        <span class="badge bg-green-100 text-green-700 border-none px-4 py-3 mt-3">
          INTERVIEW
        </span>

        <p class="text-gray-600 mt-4">${job.description}</p>

        <div class="mt-6 flex gap-3">
          <button class="btn btn-outline btn-success btn-sm">INTERVIEW</button>
          <button class="btn btn-outline btn-error btn-sm">REJECTED</button>
        </div>
      </div>
    `;
  });
}


// ================= RENDER REJECTED =================

function renderRejected() {

  filterSection.innerHTML = "";

  if (rejectedList.length === 0) {
    filterSection.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-2xl font-bold">No Rejected Jobs</h2>
      </div>
    `;
    return;
  }

  rejectedList.forEach(job => {

    filterSection.innerHTML += `
      <div class="card-body bg-base-100 shadow-md border-gray-200">
        <h2 class="text-xl font-bold text-gray-600">${job.company}</h2>
        <p class="text-gray-500">${job.position}</p>

        <span class="badge bg-red-100 text-red-700 border-none px-4 py-3 mt-3">
          REJECTED
        </span>

        <p class="text-gray-600 mt-4">${job.description}</p>

        <div class="mt-6 flex gap-3">
          <button class="btn btn-outline btn-success btn-sm">INTERVIEW</button>
          <button class="btn btn-outline btn-error btn-sm">REJECTED</button>
        </div>
      </div>
    `;
  });
}