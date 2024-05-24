let inputCount = 2;
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addInput");
    const inputsContainer = document.querySelector(".container");

    addButton.addEventListener("click", function(event) {
        event.preventDefault();

        const newInput = document.createElement("input");
        newInput.type = "text";
        inputCount++
        newInput.id = `Vote option ${inputCount}`;
        newInput.placeholder = `Vote option ${inputCount}`;
        newInput.classList.add("box");
        inputsContainer.insertBefore(newInput, addButton);
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const removeButton = document.getElementById("removeInput");
    const inputsContainer = document.querySelector(".container");
    
    removeButton.addEventListener("click",function(event){
        event.preventDefault();
        const toFind = `Vote option ${inputCount}`
        console.log(toFind)
        let elementToRemove = document.getElementById(toFind)
        if(inputCount === 2){
            alert("There has to be at least 2 vote options")
        }
        else if(elementToRemove){
        elementToRemove.remove()
        inputCount--;
        }else{
            console.log("can't remove")
        }
    })
})