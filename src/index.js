// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("CONTENT LOADED!");
// });

function fetchData() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(res => sendDataToBrowser(res.results[0]))
}

fetchData();

const fullname = document.querySelector('#fullname');

function sendDataToBrowser(data) {
  fullname.innerHTML = `${data.name.first} ${data.name.last}`;
  email.innerHTML = `${data.email}`;
  street.innerHTML = `${data.location.street.number}  ${data.location.street.name}`;
  city.innerHTML = `${data.location.city}`;
  state.innerHTML = `${data.location.state}`;
  postcode.innerHTML = `${data.location.postcode}`;
  phone.innerHTML = `${data.phone}`
  cell.innerHTML = `${data.cell}`
  date_of_birth.innerHTML = `${data.dob.date.split('T')[0]}`
}