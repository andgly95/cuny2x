function firstButtonClick(){
    document.getElementById("argument").textContent = "I'm Right";
    //console.log("PUSH");

}

function secondButtonClick(){
    document.getElementById("argument").textContent = "No, I'm right";
    //console.log("PULL");
}

function hover(){
    alert("Hey, I told you not to hover over me!");
}

function getVolume(){
    var radius = document.getElementById("radius").value;
    document.getElementById("Volume").textContent = "The volume is "  + ( (4/3) * Math.PI * (radius * radius * radius) );
}

