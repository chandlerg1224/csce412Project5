var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)

    let sheet = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    let attri = mainStyleSheet.getAttribute("href");
    var x = "../css/style.css";

    // 1 (c) Determine new stylesheet file name
    if(attri == "../css/style.css")
    {
        x = "../css/style2.css";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    else
    {
        x = "../css/style.css";
    }

    mainStyleSheet.setAttribute("href", x)
    localStorage.setItem("href",x);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    

    // 2 (b) get html style element by ID
    let element = document.getElementById("mainStyleSheet");
    var y = localStorage.getItem("href") || "../css/style.css"
    // 2 (c) replace href attribute of html element.
    element.setAttribute("href", y);
    
    
}


