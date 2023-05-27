//Get all elements:
let firstCompititor = document.getElementById("first_Compititor");
let firstName = document.getElementById(`First_Name`);
let repoNum1 = document.getElementById(`Repositories1`);
let followers1 = document.getElementById(`followers1`);

let secondCompititor = document.getElementById("second_Compititor");
let secondName = document.getElementById(`Second_Name`);
let repoNum2 = document.getElementById(`Repositories2`);
let followers2 = document.getElementById(`followers2`);

let finalResult = document.getElementById("finalResult");
let btn = document.getElementById("event");

//First Person:

btn.addEventListener("click", () => {

  fetch(`https://api.github.com/users/${firstCompititor.value}`)
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      firstName.innerText = data["login"];
      repoNum1.innerText = data["public_repos"];
      followers1.innerText = data["followers"];
      fetch(`https://api.github.com/users/${secondCompititor.value}`)
        .then((Response1) => Response1.json())
        .then((data1) => {
          secondName.innerText = data1["login"];
          repoNum2.innerText = data1["public_repos"];
          followers2.innerText = data1["followers"];


          //هون حطيناها في داخل الفيتش الثانية 
            if (
              firstCompititor.value === null ||  // Must ask the coach.
              firstCompititor.value === "" ||
              secondCompititor.value === null ||
              secondCompititor.value === ""
            ) {
              alert("Please fill the data");
            } else {
                console.log(true)
              if (data["public_repos"] > data1["public_repos"]) {
                finalResult.innerText = `~||${firstCompititor.value}||~`;
              } else if (data.followers < data1.followers) {
                finalResult.innerText = `~||${secondCompititor.value}||~`;
              } else {
                if(data.followers > data1.followers) {
                  finalResult.innerText = `~||${firstCompititor.value}||~`;
                } else if(data.followers < data1.followers) {
                  finalResult.innerText = `~||${secondCompititor.value}||~`
                } else {
                  finalResult.innerText =
                  `~"Tie"~`;
                }


                
              }
            }
        });
    });
})

// function replaceData1(data) {
//   // >> هاي اضافة مهمة جدا تجبر انك تدخل اليوزر الاول بس
// }

// //Second Person:
// function getData2() {}
// function replaceData2(data) {
//   // >> هاي اضافة مهمة جدا تجبر انك تدخل اليوزر الاول بس
// }
