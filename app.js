let inputBox = document.querySelector("#input-box")
let list = document.querySelector("#list")



const listArray = [];


function renderList() {

    for (let i = 0; i < listArray.length; i++) {
        list.innerHTML += `
        <li>${listArray[i]}
        <button class= "btn1" onclick="editList(${i})">Edit</button> 
        <button class= "btn2" onclick="deleteList(${i})">Delete</button>               
        </li>`
        
    }
    
}

function addTask() {

    if (inputBox.value === "") {

        alert("Please Enter Some Task")
        
    }
    else{

    list.innerHTML = '';
    listArray.push(inputBox.value);
    renderList();
  
        
    }
    inputBox.value = "";

}


function deleteList(i) {

    list.innerHTML = '';
    listArray.splice(i , 1);
    console.log(listArray);
    renderList();
    
}


function editList(i) {



//     let updatedValue = prompt("Enter Update Value");
//     if (updatedValue === "") {
//         alert("Please Input Some Value")
//     }

//     else{

//         updatedValue = prompt("Enter Update Value");
//         list.innerHTML = "";
//         listArray.splice(i , 1 , updatedValue);
//         renderList();

//   }

    let updatedValue = prompt("Enter Update Value");
    if (updatedValue !== "") {

    list.innerHTML = "";
    listArray.splice(i , 1 , updatedValue);
    renderList();
        
    }

    else{
        alert("Please Enter Value");
        updatedValue = prompt("Enter Update Value");
        list.innerHTML = "";
        listArray.splice(i , 1 , updatedValue);
        renderList();

}

inputBox.value = "";

}


function removeAllTask(i) {
    list.innerHTML = "";
    listArray.splice(i)
    renderList();
    
    
}




