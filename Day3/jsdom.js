function js_style() {
    paragraph.style.fontSize = "14pt";
    paragraph.style.fontFamily = "Comic Sans MS";
    paragraph.style.color = "green";
}

function getFormValue() {
    var firstname = document.querySelector('input[name=fname]').value
    var lastname = document.getElementById("lname").value

    console.log(firstname)
    console.log(lastname)
}