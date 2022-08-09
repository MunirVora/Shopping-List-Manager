function addItem(){
    let item = document.getElementById("item").value

    if(item == ""){
        alert("Enter item first!!")
        return false
    }
    else{
        const ul = document.getElementById("take")
        ul.innerHTML += '<li>' + item + '<button onclick="removeItem()">&#10006;</button></li>'
    }
}
// remove item
function removeItem(){
    var allSubjectName = document.querySelectorAll("#take li");
    for (var index = 0; index < allSubjectName.length; index++){
        allSubjectName[index].addEventListener("click", function(){
            this.classList.toggle("active");
        });
        allSubjectName[index].querySelector("#take li button").addEventListener("click",
        function removeItem(){
            this.closest("#take li").remove();
        });
    }
}