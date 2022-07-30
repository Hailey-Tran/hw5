// POST
let outputResult = document.getElementById("result");
let post = document.getElementById("postBtn");

post.addEventListener("click", () => {
    var data = new FormData(document.getElementById("testForm"));

    fetch("https://httpbin.org/post", { 
        method: "POST", 
        body: data
    })
    .then(res => res.json())
    //.then(data => console.log(data))

    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        timeDate();
    })
});

// GET
let get = document.getElementById("getBtn");

get.addEventListener("click", () => {
    var data = new FormData(document.getElementById("testForm"));

    fetch("https://httpbin.org/get", { 
        method: "GET", 
        //body: data
    })
    .then(res => res.json())
    //.then(data => console.log(data))

    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        timeDate();
        console.log(data)
    })
});

//PUT
let put = document.getElementById("putBtn");

put.addEventListener("click", () => {
    var data = new FormData(document.getElementById("testForm"));

    fetch("https://httpbin.org/put", { 
        method: "PUT", 
        body: data
    })
    .then(res => res.json())
    //.then(data => console.log(data))

    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        timeDate();
        console.log(data)
    })
});

//DELETE
let deletePress = document.getElementById("deleteBtn");

deletePress.addEventListener("click", () => {
    //var data = new FormData(document.getElementById("testForm"));
    //data.append("idNum", document.getElementById("idNum").value);
    //data.append("articleName", document.getElementById("articleName").value);
    //data.append("articleBody", document.getElementById("articleBody").value);

    fetch("https://httpbin.org/delete", { 
        method: "DELETE", 
        //body: data
    })
    .then(() => {
        outputResult.innerHTML = ('Delete successful');
        timeDate();
    })
    /*
    .then(res => res.json())
    //.then(data => console.log(data))

    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        console.log(data)
    })
    */
});


//DATE & TIME
function timeDate() {
    var current = new Date();
    var currentTime = current.toLocaleTimeString();
    var currentDate = current.toLocaleDateString();
    let outputTimeDate = document.getElementById("date");
    outputTimeDate.innerHTML = "Time & Date of post generate: \n" + "Time:" + currentTime + "Date" + currentDate;
}






