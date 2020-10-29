function display(val){
    console.log(val);
    document.getElementById("result").value +=val;
}
function calculation(){
    var x = document.getElementById("result").value;
    var finalResult= eval(x);
    document.getElementById("result").value =finalResult;
}

function clr(){
    document.getElementById("result").value = "";
}