
const updateAccountProfileBtn = document.querySelector('#updateAccountProfileBtn')
const inputFirstName = document.querySelector('#firstName')
const inputLastName = document.querySelector('#lastName')
const displayFullName = document.querySelector('#displayFullName')

updateAccountProfileBtn.addEventListener('click', onUpdateAccountProfile)
function onUpdateAccountProfile(e){

    e.preventDefault()
    console.log(`first name: ${inputFirstName.value}`)
    console.log(`last name: ${inputLastName.value}`)

    const fullName = inputFirstName.value + " " + inputLastName.value

    console.log(`full name: ${fullName}`)

    displayFullName.value = fullName


}