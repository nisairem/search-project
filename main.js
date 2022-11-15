const fullnameInput = document.getElementById("fullname")
const phoneInput = document.getElementById("phone")
const saveBtn = document.getElementById("saveBtn")
const listPeople = document.getElementById("listPeople")
const searchInput = document.getElementById("search")

// initial people
var people = []

// events
saveBtn.addEventListener("click", function () {
    if (fullnameInput.value === phoneInput.value === '') {
        alert("Ad ve Telefon alan zorunlu alanlardır ")
        return
    }
    const newPerson = {
        fullname: fullnameInput.value,
        phone: phoneInput.value,
    }
    people.push(newPerson)
    listPeopleFunc(people);
    fullnameInput.value = "";
    phoneInput.value = "";
});

searchInput.addEventListener("keyup", function(e){
    var tempArray=people.filter(item => item.fullname.includes(e.target.value))
    console.log("tempArr",tempArray)
    listPeopleFunc(tempArray)
})

// functions
function listPeopleFunc(parametre) {
    /*
    <!-- <div class="content">
             <h3>İrem Yilmaz</h3>
              <p>0555555555</p>
     </div> --> 
     */

     listPeople.innerHTML = "";


     for (let i = 0; i < parametre.length; i++) {
        const div = document.createElement('div')
        div.classList.add('content')
        const h3 = document.createElement('h3')
        h3.innerText = parametre[i].fullname
        const p = document.createElement('p')
        p.innerText =parametre[i].phone
        div.appendChild(h3)
        div.appendChild(p)
        listPeople.appendChild(div)


    }
}
