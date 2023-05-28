// بداية لازم نربط نطلع قيمة الصندوق تبع السيرش 

let userName = document.getElementById("searchSpace");




function fetchData() {
    fetch(`https://api.github.com/users/${userName.value}`)
    .then ((Response) => Response.json())
    .then ((data) => { // هاي عبارة عن اروو فانكشين 
        fetch(`https://api.github.com/users/${userName.value}/repos`)
        .then((Response1) => Response1.json())
        .then((data1) => {  // محمد هاض عبارة عن اروو فانكشين عادي ,,, يعني الداتا ون هاي الارقيومنت يلي جبناها من الفيتش ,بعدين فتحت اقواس الفنكشين و حطيت فيه الكود طبيعي
        replaceData(data);
        console.log(data)
        console.log(data1);
        console.log(`Array of allDivs`);
        let Divs = document.querySelectorAll(".repos-Card");
        let arrDivs = Array.from(Divs);
        console.log(arrDivs);

        console.log(`||||| After Slice |||||`);
        let slicedArr = arrDivs.slice(parseInt (data["public_repos"]) , 7);
        console.log(slicedArr);
        
        console.log(`======================`)
        let x = document.querySelectorAll(".link");
        console.log(x);
        let y = document.querySelectorAll(`.dot_title`);
        console.log(y);
        if(parseInt(data["public_repos"]) < 6) { // لو كانت عدد المشاريع اقل من 6 , بس انتبه انو لازم تحولها  لانتجر 
            slicedArr.forEach(element => {
                element.remove();
            });
            for(let i = 0; i < parseInt (data["public_repos"]) ; i++) {
                x[i].innerHTML = data1[i]["name"]
            y[i].innerHTML =  `<span class="dot"></span> ${data1[i]["language"]}`
            }
        } else {
            for(let i = 0; i < 6 ; i++) {
                x[i].innerHTML = data1[i]["name"]
                y[i].innerHTML =  `<span class="dot"></span> ${data1[i]["language"]}` 
                if(i === 6) {
                    break;
                }
            }
        }
        
        })
        }
        
    );
}


//هاض الفنكشين بتقدر كله تحطه في داخل الفيتش الاولى عادي جدا 
function replaceData(data) {
    document.getElementById("userName").innerHTML = data["login"];
    document.getElementById('imgPic').src = data["avatar_url"];
    document.getElementById("followers").innerHTML = data["followers"];
    document.getElementById("following").innerHTML = data["following"];
    document.getElementById("Repositories").innerHTML = data["public_repos"];
    document.getElementById("imgNav").src = data["avatar_url"];
}


userName.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter') {
        fetchData();
    }
})







console.log(`====================================`)

let x = document.querySelectorAll(".link");
console.log(x);

x.forEach(element => {
    // element.remove();
});

let arr = document.querySelectorAll(".repos-Card");
console.log(arr);

arr.forEach(element => {
    // element.remove();
})


// Very Important ::::::: 

// let newArr = Array.from(arr);
// console.log(newArr);

// let a1 = newArr.slice(1 , 3); 
// a1.forEach(element => {
//     element.remove();
// });

