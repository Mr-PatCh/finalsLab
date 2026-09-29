
const sendBtn = document.querySelectorAll(".send")[0]; 
const showInfoBtn = document.querySelectorAll(".send")[1]; 
const outputForm = document.getElementById("myFormOutput");

const greeting = document.getElementById("name");
const details = document.getElementById("details");
const formContainer = document.getElementsByClassName("form-container")[0];





let userData = null;

sendBtn.addEventListener("click", function () {
    const name = document.querySelector("#getName").value.trim();
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

  
    userData = {
        name: name || "stranger",
        age: age || "Not provided",
        birthday: birthday || "Not provided",
        sex: selectedSex ? selectedSex.value : "Not provided",
        school: school || "Not provided",
        talent: talent || "Not provided",
        email: email || "Not provided",
        grade: grade || "Not provided",
        bio: bio || "Not provided",
        color: color
    };

    alert("Info sent!");
});

showInfoBtn.addEventListener("click", function () {
  
    if (!userData) {
        alert("Please fill out the form and click 'Send' first!");
        return;
    }

    greeting.textContent = `Hello, ${userData.name}!`;

    details.innerHTML = `
        <li>Age: ${userData.age}</li>
        <li>Birthday: ${userData.birthday}</li>
        <li>Sex: ${userData.sex}</li>
        <li>School: ${userData.school}</li>
        <li>Talent: ${userData.talent}</li>
        <li>Email: ${userData.email}</li>
        <li>Grade level: ${userData.grade}</li>
        <li>About you: ${userData.bio}</li>
        <li>Favorite color: ${userData.color}</li>
    `;




});
