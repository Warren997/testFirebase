// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArjj_oZ9mnDfJcAupxI1SBSLSC8yqSlLQ",
    authDomain: "fire9db-520d0.firebaseapp.com",
    projectId: "fire9db-520d0",
    storageBucket: "fire9db-520d0.appspot.com",
    messagingSenderId: "819039740872",
    appId: "1:819039740872:web:aff87ed6a8c4c5645216fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



import { getDatabase, ref, get, set, child, update, remove }
from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
const db = getDatabase();

// --------------- Reference
var namebox = document.getElementById("Namebox");
var rollbox = document.getElementById("Rollbox");
var secbox = document.getElementById("Secbox");
var genbox = document.getElementById("Genbox");

var insBtn = document.getElementById("Insbtn");
var selBtn = document.getElementById("Selbtn");
var updBtn = document.getElementById("Updbtn");
var delBtn = document.getElementById("Delbtn");


//set(ref(db,"will make table"+rollbox.value))

// -------------------------- Insert Data Function
function InsertData() {
    set(ref(db, "TheStudents/" + rollbox.value), {
            NameOfStd: namebox.value,
            RollNo: rollbox.value,
            Section: secbox.value,
            Gender: genbox.value
        })
        .then(() => {
            alert("data stored successfully");
        })
        .catch((error) => {
            alert("unsuccessful, error" + error);
        });
}



// ------------------------- Select Data Function
function SelectData() {
    const dbref = ref(db);

    get(child(dbref, "TheStudents/" + rollbox.value)).then((snapshot) => {
            if (snapshot.exists()) {
                namebox.value = snapshot.val().NameOfStd;
                secbox.value = snapshot.val().Section;
                genbox.value = snapshot.val().Gender;
            } else {
                alert("No data found");
            }
        })
        .catch((error) => {
            alert("unsuccessful, error" + error);
        });
}



// -------------------------- Update Data Function
function UpdateData() {
    update(ref(db, "TheStudents/" + rollbox.value), {
            NameOfStd: namebox.value,
            Section: secbox.value,
            Gender: genbox.value
        })
        .then(() => {
            alert("data update successfully");
        })
        .catch((error) => {
            alert("unsuccessful, error" + error);
        });
}


// ----------------------- Delete Data

function DeleteData() {
    remove(ref(db, "TheStudents/" + rollbox.value))
        .then(() => {
            alert("data removed successfully");
        })
        .catch((error) => {
            alert("unsuccessful, error" + error);
        });
}



// ---------------------- Assign Btn
insBtn.addEventListener('click', InsertData); // Calling The Functions When Clicked
selBtn.addEventListener('click', SelectData);
updBtn.addEventListener('click', UpdateData);
delBtn.addEventListener('click', DeleteData);