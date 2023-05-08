const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("birthday")
const resultElement = document.getElementById('result')

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("please enter your birthday")
    } else {
        const age = getAge(birthdayValue);
        resultElement.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'} old`
    }

}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    console.log(age);

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }
    return age;
}

btnEl.addEventListener("click", calculateAge);