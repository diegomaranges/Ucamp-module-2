import {value as v} from './value.js';

/*function getpost(success, error) {
    
}

function getPost() {
    let req = new Promise(
        function (res, rej) {
            
            res()
            rej()
        }
    )
}

getpost(function (r) { console.log(r)}, function (r){ console.log("error") })

getPost().then().catch()*/

/*
let myPromesa = new Promise(()=>{return 5})
.then(a => {

})
*/

function getAResponse(success, error) {
    setTimeout(() => {
        if (v === 1) {
            success("success");
        } else {
            error();
        }
    }, 1000)
}

getAResponse(function (r) { console.log(r)}, function (r){ console.log("error") });

function getAResponseP() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (v === 2) {
                resolve("salio todo bien");
            } else {
                reject("salio mal");
            }
        }, 4000)
    })   
}

getAResponseP()
.then(r => {console.log(r)})
.catch(e => {console.log(e)});

function getImageOne() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (v === 1) {
                resolve("salio todo bien");
            } else {
                reject("salio mal");
            }
        }, 20000)
    })
}
function getImageTwo() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (v === 2) {
                resolve("salio todo bien");
            } else {
                reject("salio mal");
            }
        }, 10000)
    })
}
function getImagethree() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (v === 1) {
                resolve("salio todo bien");
            } else {
                reject("salio mal");
            }
        }, 12000)
    })
}

function displeyBlock(id) {
    document.getElementById(id).style.display = "inline-block";  
}

async function waitForIt() {
    getImageOne().then(r => {
        displeyBlock("s1");
    }).catch(e => console.log("error"));
    
    await getImageTwo().then(r => {
        displeyBlock("s2");
    }).catch(e => console.log("error"));
    
    await getImagethree().then(r => {
        displeyBlock("s3");
    }).catch(e => console.log("error"));
}
async function wait() {
    await waitForIt();
    console.log("finished my function");
}

wait();
/*
fetch().then(response => {return response.json}).then(json =>{
    
})*/
