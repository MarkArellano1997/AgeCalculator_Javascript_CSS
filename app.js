const form = document.getElementById('form')
const inputBirthday = document.getElementById('birthday')
const resultContainer = document.getElementById('resultContainer')
const result = document.getElementById('result')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const today = new Date()
    const birthday = inputBirthday.value.split('-')
    const year = birthday[2]
    const month = birthday[0] - 1
    const day = birthday[1]

    const birthDate = new Date(year, month, day)
    console.log(year);
    console.log(month);
    console.log(day);
    console.log(birthday);
    console.log(inputBirthday.value);

    const isValidate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        )
    }

    if (!isValidate(birthDate)) {
        alert('Formato invalido: Por favor ingrese una fecha valida DD-MM-YYYY')
        return
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000)
    const ageInMinutes = Math.floor(ageInSeconds / 60)
    const ageInHours = Math.floor(ageInMinutes / 60)
    const ageInDays = Math.floor(ageInHours / 24)
    const ageInWeeks = Math.floor(ageInDays / 7)
    const ageInMonths = Math.floor(ageInDays / 30.436875)
    const ageInYears = Math.floor(ageInMonths / 12)

    result.innerHTML = `
    <div id="resultItem">
        <h3>Age:</h3>
        <p>${ageInYears} years ${ageInMonths%12} months ${ageInDays%30} days</p>
    </div>
    <div id="resultItem">
        <h3>Months Passed:</h3>
        <p>${ageInMonths}</p>
    </div>
    <div id="resultItem">
        <h3>Weeks Passed:</h3>
        <p>${ageInWeeks}</p>
    </div>
    <div id="resultItem">
        <h3>Days Passed:</h3>
        <p>${ageInDays}</p>
    </div>
    <div id="resultItem">
        <h3>Hours Passed:</h3>
        <p>${ageInHours}</p>
    </div>
    <div id="resultItem">
        <h3>Minutes Passed:</h3>
        <p>${ageInMinutes}</p>
    </div>
    <div id="resultItem">
        <h3>Seconds Passed:</h3>
        <p>${ageInSeconds}</p>
    </div>
    `

    resultContainer.classList.add('resultContainer')
    result.classList.add('result')

    console.log(ageInYear);
})