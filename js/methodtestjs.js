// POST
let outputResult = document.getElementById("result");
let post = document.getElementById("postBtn");

post.addEventListener("click", () => {
    var data = new FormData(document.getElementById("testForm"));
    var current = new Date();
    data.append("Date: ", current);
    fetch("https://httpbin.org/post", { 
        method: "POST", 
        body: data
    })
    .then(res => res.json())
    //.then(data => console.log(data))

    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        
    })
});

// GET
let get = document.getElementById("getBtn");

get.addEventListener("click", () => {
    var data = new FormData(document.getElementById("testForm"));
    var idNumber = data.get('idNum');
    var artName = data.get('articleName');
    var artBody = data.get('articleBody');
    var current = new Date();
    var date = data.append("Date: ", current);

    fetch("https://httpbin.org/get?idNum="+idNumber+"&articleName="+artName+"&articleBody="+artBody+"&date="+date, { 
        method: "GET", 
        //body: data
        headers: {Accept: 'application/json'}
    })
    .then(res => res.json())

    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        console.log(data)
    })
});

//PUT
let put = document.getElementById("putBtn");
put.addEventListener("click", () => {
    var data = new FormData(document.getElementById("testForm"));
    var idNumber = data.get('idNum');
    var artName = data.get('articleName');
    var artBody = data.get('articleBody');
    var current = new Date();
    var date = data.append("Date: ", current);

    data = JSON.stringify({ idNum: idNumber, articleName: artName, articleBody: artBody, date });
    fetch("https://httpbin.org/put", { 
        method: "PUT", 
        body: data,
        headers: {Accept:'application/json'}

    })
    .then(res => res.json())
    //.then(data => console.log(data))

    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        console.log(data)
    })
});

//DELETE
let deletePress = document.getElementById("deleteBtn");

deletePress.addEventListener("click", () => {
    var data = new FormData(document.getElementById("testForm"));
    var idNumber = data.get('idNum');
    var artName = data.get('articleName');
    var artBody = data.get('articleBody');
    var current = new Date();
    var date = data.append("Date: ", current);

    data = JSON.stringify({ idNum: idNumber, articleName: artName, articleBody: artBody, "Date " :date });

    fetch("https://httpbin.org/delete", { 
        method: "DELETE", 
        body: data,
        headers: {Accept:'application/json'}
    })
    .then(res => res.json())
    .then((data) => {
        outputResult.innerHTML = JSON.stringify(data,null,4);
        console.log(data);
    })
});

