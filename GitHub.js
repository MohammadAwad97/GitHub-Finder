// بداية لازم نربط نطلع قيمة الصندوق تبع السيرش 

let userName = document.getElementById("searchSpace");
let allCardsCont = document.getElementById("cards");


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
        
        let Cont = document.getElementById("cards");

        let Divs = document.querySelectorAll(".repos-Card");
        let arrDivs = Array.from(Divs);
        console.log(arrDivs);

        console.log(`||||| After Slice |||||`);
        let slicedArr = arrDivs.slice((data["public_repos"]) , 7);
        console.log(slicedArr);
        
        console.log(`======================`)
        // let x = document.querySelectorAll(".link");
        // console.log(x);
        // let y = document.querySelectorAll(`.dot_title`);
        // console.log(y);
        // console.log(data["public_repos"]);

        if((data["public_repos"]) < 6) { // لو كانت عدد المشاريع اقل من 6 , بس انتبه انو لازم تحولها  لانتجر 
            
            // console.log(data["public_repos"]);
            // slicedArr.forEach(element => {
            //     element.remove();
            // });
            Cont.innerHTML = "";
            for(let i = 0; i < data.public_repos ; i++) {
                // let mydiv = document.createElement(`div`)
                // mydiv.innerHTML = `<div id="card1" class="repos-Card"><div class="linkDot"><a class="link" href="">${data1[i].name}</a>
                // // <span class="dot_title"><span class="dot"></span>${data1[i].language}</span></div>`
                // Cont.appendChild(mydiv);
                let div = `<div id="card1" class="repos-Card"><div class="linkDot"><a class="link" href="">${data1[i].name}</a>
                <span class="dot_title"><span class="dot"></span>${data1[i].language}</span></div>

                <div class="divStatus"><span class="status">Puplic</span></div>
                </div>`;
                Cont.innerHTML += div;
                
            
            // y[i].innerHTML =  `<span class="dot"></span> ${data1[i]["language"]}`
            }
        } else {
            Cont.innerHTML = "";
            for(let i = 0; i < 6 ; i++) {
                let div = `<div id="card1" class="repos-Card"><div class="linkDot"><a class="link" href="">${data1[i].name}</a>
                <span class="dot_title"><span class="dot"></span>${data1[i].language}</span></div>

                <div class="divStatus"><span class="status">Puplic</span></div>
                </div>`;
                Cont.innerHTML += div;
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














let mainDiv = `<div id="card1" class="repos-Card"><a class="link" href="">First-Html-</a>
        <span class="dot_title"><span class="dot"></span>HTML</span>
        <span class="status">Puplic</span>
    </div>`;
    console.log(mainDiv);
