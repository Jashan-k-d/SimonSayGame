//game start--------------------------------------------------------------------------------------------
let body = document.querySelector('body');
body.addEventListener('keypress', startGame);

let currentbox = null;
let list = document.querySelectorAll('.box1');
console.log(list);
let numbers = [];
let level = 1;
function startGame() {
    document.querySelector('h1').innerText = "Game Start";
    document.querySelector('p').innerText = "Level 1";
    console.log("game started");
    userInput();
}
function randomColorChanger() {
    let randomno = Math.floor(Math.random() * list.length);
    numbers.push(randomno);
    let randomBox = list[randomno];
    console.log(randomBox);
    console.log(randomno);
    randomBox.classList.remove(`btn${randomno}`);
    console.log('box flashed');
    console.log(randomBox.classList);
    setTimeout(() => {
        randomBox.classList.add(`btn${randomno}`);
        console.log(randomBox.classList);
    }, 700);
    return randomBox;
};

function userInput() {
    currentbox = randomColorChanger();
}

let userinputs = [];
list.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        console.log("user clicked box");
        userinputs.push(index);
        matchingpattern();
    });
});
function matchingpattern() {
    let step = userinputs.length - 1;
    if (userinputs[step] !== numbers[step]) {
        document.querySelector('h1').innerText = "Game End";
        document.querySelector('p').innerText = `Oops! Try Again`;
        return;
    }

    if (userinputs.length === numbers.length) {
        level++;
        document.querySelector('p').innerText = `Correct! Level ${level}`;
        userinputs = [];
        setTimeout(() => {
            userInput();
        }, 1000);
    }
}
//game end 
//--------------------------------------------------------------------------------------------------
//practice --> callback hell

// function savetoDB(data, success, failure) {
//     let speed = Math.floor(Math.random() * 10) + 1;
//     if (speed > 4) {
//         success();
//     } else {
//         failure();

//     }
// }

// savetoDB("first message", () => {
//     console.log('Data saved. -first db message');
//     savetoDB("second message", () => {
//         console.log('Data saved. -second db message');
//         savetoDB("third message", () => {
//             console.log('Data saved. -third db message');
//         }, () => {
//             console.log("weak connection -db third message");
//         });
//     }, () => {
//         console.log("weak connection -db second message");
//     });
// }, () => {
//     console.log("weak connection -db  first message");
// });

//-------------------------------------------------------------------------------------------------------
//Practice=promises

// function savetodb(data) {
//     return new Promise((resolve, reject) => {
//         let speed = Math.floor(Math.random() * 10) + 1;
//         if (speed > 4) {
//             resolve("success-data saved");
//         } else {
//             reject("failed-weak connection");
//         }
//     })
// }

// savetodb("first messsage")
//     .then((result) => {
//         console.log("fullfilled -1");
//         console.log(result);
//         return savetodb('second message')
//     })
//     .then((result) => {
//         console.log("fullfilled -2");
//         console.log(result);
//         return savetodb('second message')
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("fullfilled -3");

//     })
//     .catch((error) => {
//         console.log("error -rejected .");
//         console.log(error);
//     });

//-----------------------------------------------------------------------------------------
// Practice- color changing with promise chaining

let h1 = document.querySelector('h1');
function colorChange(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve('success-color changed');
        }, 1000)
    })
}
//using promise chaining -------------------------------------------------------

// colorChange('red')
//     .then((result) => {
//         console.log("red color");
//         return colorChange('orange')
//     })
//     .then((result) => {
//         console.log("orange color");
//         return colorChange('green')
//     })
//     .then((result) => {
//         console.log("green color");
//     })
// using asunc/await----------------------------------------------------------

async function output() {
    await colorChange('red');
    await colorChange('orange');
    colorChange('green');
}

output();
//------------------------------------------------------------------------------------------------------------
//await keyword used on async functions only

function randomnumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random() * 10) + 1;
            console.log(number);
            resolve();
        }, 2000);
    });
}
async function getnumber() {
    await randomnumber();
    await randomnumber();
    await randomnumber();
    randomnumber();
}
getnumber();

//-------------------------------------------------------------------------------------------------------
//fetch --- api requests
// let url = "https://catfact.ninja/fact";

// // async function getFacts() {
// //     try {
// //         let res = await fetch(url);
// //         let data = await res.json()
// //             .then((data) => { console.log(data); })


// //         let res2 = await fetch(url);
// //         let data2 = await res2.json();
// //         console.log(data2);
// //     }
// //     catch (err) {
// //         console.log("error", err);
// //     }
// // }
// // getFacts();
// //----------------------------------------------------------------------------------------------
// //https requests using axios
// let btn = document.querySelector('button');
// let h2 = document.querySelector('h2');
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res);
//         h2.innerText = res.data.fact;
//     }
//     catch (err) {
//         console.log("error", err);
//     }
// }

// btn.addEventListener("click", getFacts);
// //--------------------------------------------------------------------------------------
// //Exercise-printing college namees

// let url2 = "http://universities.hipolabs.com/search?country=India";
// let button = document.querySelector(".collegelist");

// let unlist = document.querySelector('ul');

// button.addEventListener('click', async () => {
//     unlist.innerHTML = "";
//     let city = document.querySelector("input").value;
//     let collegelist = await getCollegelists();
//     filterColleges(collegelist, city);

// })
// async function getCollegelists() {
//     let res = await axios.get(url2);
//     console.log(res.data);
//     return res.data;
// }
// function filterColleges(list, city) {
//     for (college of list) {
//         if (college["state-province"]?.toLowerCase() === city.toLowerCase()) {
//             let li = document.createElement('li');
//             li.innerText = college.name;
//             unlist.append(li);
//         };
//     }

// }
//add new feature to js to learn the github commands
let namE = 'repo';
console.log("hi", namE);
console.log("hello", namE);

