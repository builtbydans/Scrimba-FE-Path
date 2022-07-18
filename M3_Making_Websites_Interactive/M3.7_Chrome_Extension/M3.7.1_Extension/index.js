const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("del-btn");

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
};

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
  };

  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

tabBtn.addEventListener("click", function() {
  chrome.tabs.query( {active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("dblclick", function() {
  alert("Are you sure you want to delete your leads? This action cannnot be reversed!");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
