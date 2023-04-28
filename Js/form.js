console.log("hello world")
const firstName = document.getElementById("first-name")
const secondName = document.getElementById("second-name")
const submitButton = document.getElementById("submit")
submitButton.onclick = function(){
        if(firstName.value == ""){
            console.log("fill out the form dickheead")
        }else{
            console.log("wll done muppet")
        }
}