const displays = document.querySelector("input");

function addData(key){
    displays.value += key;
}
function clearData(){
    displays.value = "";
}
function percent(){
    displays.value = eval(displays.value)/100;
}
function calculator(){
    var current = displays.value;
    var last = current[current.length - 1];
    if(last ==="*"||last==="/"||last ==="+"||last==="-"){
        displays.value = "Error";
    }
    else{
       displays.value = eval(displays.value);
    }
    
}

