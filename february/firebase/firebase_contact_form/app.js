// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyCN_tKSADW8oM2w9aWfi-VPX2iJEi06cik",
    authDomain: "testform-dc097.firebaseapp.com",
    projectId: "testform-dc097",
    storageBucket: "testform-dc097.appspot.com",
    messagingSenderId: "396043716853",
    appId: "1:396043716853:web:69e4e0e063b705623e9dbc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//..........................Contact Form....................................Start
let contactInfo = firebase.database().ref("infos");
document.querySelector('#contactForm').addEventListener('submit', submitForm)
function submitForm(e) {
    e.preventDefault()
    let name = this.name.value;
    let email = this.email.value;
    let message = this.message.value;
    // console.log(name.value)
    saveContactInfo(name, email, message)
    this.reset();
}
console.log(firebase.database())


// Save infos to firebase

function saveContactInfo(name, email, message){
    let newContactInfo = contactInfo.push()
    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    })
    newContactInfo.then(
        alert("Contact Form submitted successfully!")
    )
}
//..........................Student Form....................................Start

let studentForm = document.querySelector('#studentForm');
let studentInfo = firebase.database().ref("student_info")
studentForm.addEventListener('submit', studentFormSubmit)

function studentFormSubmit(e){
    e.preventDefault()
    let student_name = this.student_name.value;
    let year = this.year.value;
    let skills = this.skills.value;
    studentFormFirebase(student_name, year, skills)
    this.reset()
}

function studentFormFirebase(student_name, year, skills){
    let newStudentInfo = studentInfo.push();
    newStudentInfo.set({
        student_name: student_name,
        year: year,
        skills: skills
    }).then(
        alert("Student info successfully submitted")
    )
}


// ........................Student Form...................................End