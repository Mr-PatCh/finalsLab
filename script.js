
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.3;

const button = document.getElementById("send");
const greeting = document.getElementById("name");
const details = document.getElementById("details");


const formContainer = document.getElementsByClassName("form-container")[0];


const allInputs = document.getElementsByTagName("input");

button.addEventListener("click", function () {


    const name = document.querySelector("#getName").value.trim() || "stranger";
    const age = document.querySelector("#getAge").value.trim();
    const birthday = document.querySelector("#getBirthDate").value;
    const school = document.querySelector("#getSchool").value.trim();
    const talent = document.querySelector("#getTalent").value.trim();
    const email = document.querySelector("#getEmail").value.trim();
    const grade = document.querySelector("#getGrade").value;
    const bio = document.querySelector("#getBio").value.trim();
    const color = document.querySelector("#favcolor").value;

    const selectedSex = document.querySelector('input[name="sex"]:checked');


    if (age !== "" && (isNaN(age) || Number(age) <= 0)) {
        alert("Please enter a valid age.");
        return;
    }

    let sexValue = "Not provided";
    if (selectedSex) {
        sexValue = selectedSex.value;
    }


    greeting.textContent = `Hello, ${name}!`;

    details.innerHTML = `
    
        <li>Age: ${age || "Not provided"}</li>
        <li>Birthday: ${birthday || "Not provided"}</li>
        <li>Sex: ${sexValue}</li>
        <li>School: ${school || "Not provided"}</li>
        <li>Talent: ${talent || "Not provided"}</li>
        <li>Email: ${email || "Not provided"}</li>
        <li>Grade level: ${grade || "Not provided"}</li>
        <li>About you: ${bio || "Not provided"}</li>
        <li>Favorite color: ${color}</li>
    `;


    formContainer.style.borderColor = color;

    console.log(`This form has ${allInputs.length} input fields.`);
});