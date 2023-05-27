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



//First Member:
firstCompititor.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter') {
        fetchData1()
    }
    
})

function fetchData1() {
    fetch(`https://api.github.com/users/${firstCompititor.value}`)
    .then((Response) => Response.json())
    .then((data) => 
    replaceData1(data)
    // console.log(data)
    )
}

function replaceData1(data) {
    firstName.innerText = data["login"];
    repoNum1.innerText = data["public_repos"]
    followers1.innerText = data["followers"];
    secondCompititor.disabled = false; // >> هاي اضافة مهمة جدا تجبر انك تدخل اليوزر الاول بس
}


//Second Member:
secondCompititor.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter') {
        fetchData2()
    }
})


function fetchData2() {
    fetch(`https://api.github.com/users/${secondCompititor.value}`)
    .then((Response) => Response.json())
    .then((data) => 
    replaceData2(data)
    )
}

function replaceData2(data) {
    secondName.innerText = data["login"];
    repoNum2.innerText = data["public_repos"]
    followers2.innerText = data["followers"];

    
    
        compare();
    
     // >> الفكرة هون انو بعد استدعيت كل الداتا و عملت ريبليس بروح و بستدعي اقتران المقارنة و راح يطبق الوضع 
}



//Result : 


function compare() {
    const repo1 = parseInt(repoNum1.innerText);
    const repo2 = parseInt(repoNum2.innerText);

    if(repo1 > repo2) {
        finalResult.innerText = `${firstName.innerText} has more repositories`;
    } else if(repo1 < repo2) {
        finalResult.innerText = `${secondName.innerText} has more repositories`
    } else {
        finalResult.innerText = "Both competitors have the same number of repositories";
    }
}



//Or :

// Compare repositories and print the winner
// function compareRepositories() {
//     const repoNum1Value = parseInt(repoNum1.innerText);
//     const repoNum2Value = parseInt(repoNum2.innerText);
  
//     if (repoNum1Value > repoNum2Value) {
//       finalResult.innerText = `${firstName.innerText} has more repositories`;
//     } else if (repoNum1Value < repoNum2Value) {
//       finalResult.innerText = `${secondName.innerText} has more repositories`;
//     } else {
//       finalResult.innerText = "Both competitors have the same number of repositories";
//     }
//   }
  
//   // Add event listener to both repoNum elements
//   repoNum1.addEventListener('input', compareRepositories);
//   repoNum2.addEventListener('input', compareRepositories);  >> هون حطينا المقارنة على الانبوتس تبعت النتائج ، يعني حطلي حدث المقارنة لما يصير في انبوت في الديفات هاي
