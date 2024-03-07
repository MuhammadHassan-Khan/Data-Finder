const studentdata = [
  {
    id: 101,
    Name: "Hassan Khan",
    city: "Karachi",
    Age: 18,
    Class: "10th",
  },
  {
    id: 102,
    Name: "Ali Khan",
    city: "Lahore",
    Age: 18,
    Class: "10th",
  },
  {
    id: 103,
    Name: "Rehan Khan",
    city: "Faslabad",
    Age: 18,
    Class: "10th",
  },
  {
    id: 104,
    Name: "Huzaifa Khan",
    city: "Islamabad",
    Age: 18,
    Class: "10th",
  },
];

var citynode = document.getElementById("city");
var rollnonode = document.getElementById("rolno");
var shownode = document.getElementById("show");
for (var i = 0; i < studentdata.length; i++) {
  citynode.innerHTML += `<option value="${studentdata[i].city}">${studentdata[i].city}</option>`;
}

for (var i = 0; i < studentdata.length; i++) {
  rollnonode.innerHTML += `<option value="${studentdata[i].id}">${studentdata[i].id}</option>`;
}

for (let i = 0; i < studentdata.length; i++) {
    shownode.innerHTML +=`
    <h3>ID :<span>${studentdata[i].id}</span></h3>
    <h3>Name :<span>${studentdata[i].Name}</span></h3>
    <h3>City :<span>${studentdata[i].city}</span></h3>
    <h3>Class :<span>${studentdata[i].Class}</span></h3>
    `
}

citynode.addEventListener("change", function () {
  getvalue = citynode.value;
  shownode.innerHTML = "";
  console.log(getvalue);


  for (let i = 0; i < studentdata.length; i++) {

    if (studentdata[i].id !==   parseInt(rollnonode.value)) {
      rollnonode.innerText 
    }
    if (studentdata[i].city === getvalue) {

      shownode.innerHTML += `
    <h3>ID :<span>${studentdata[i].id}</span></h3>
    <h3>Name :<span>${studentdata[i].Name}</span></h3>
    <h3>City :<span>${studentdata[i].city}</span></h3>
    <h3>Class :<span>${studentdata[i].Class}</span></h3> `;
    }
  }
});

rollnonode.addEventListener("change", function () {
  getqvalue = rollnonode.value;
  shownode.innerHTML = "";
  console.log(getqvalue);
  for (let i = 0; i < studentdata.length; i++) {
  
    if (studentdata[i].id === parseInt(getqvalue)) {
      shownode.innerHTML += `
    <h3>ID :<span>${studentdata[i].id}</span></h3>
    <h3>Name :<span>${studentdata[i].Name}</span></h3>
    <h3>City :<span>${studentdata[i].city}</span></h3>
    <h3>Class :<span>${studentdata[i].Class}</span></h3> `;
    }
  }
});


