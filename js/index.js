
const updateAccountProfileBtn = document.querySelector('#updateAccountProfileBtn')
const inputFirstName = document.querySelector('#firstName')
const inputLastName = document.querySelector('#lastName')
const displayFullName = document.querySelector('#displayFullName')

/* 
    Just incase this was the intended way to change the placeholder attributes
    inputFirstName.placeholder = "John"
    inputLastName.placeholder = "Hancock"

    displayFullName.value = inputFirstName.placeholder + " " + inputLastName.placeholder
*/

updateAccountProfileBtn.addEventListener('click', onUpdateAccountProfile)
function onUpdateAccountProfile(e){

    e.preventDefault()
    
    // console.log(`first name: ${inputFirstName.value}`)
    // console.log(`last name: ${inputLastName.value}`)

    const fullName = inputFirstName.value + " " + inputLastName.value

    // console.log(`full name: ${fullName}`)

    displayFullName.value = fullName


}