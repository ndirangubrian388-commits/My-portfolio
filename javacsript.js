// 1. start with an array of hobbies
let hobbies = ["coding", "gaming", "playing basketball"];
 
// 2.Add item to the array
function addFavorite() {
    let newThing = document.getElementById("favoriteInput").value;

    if(newThing===""){
        alert("Please type something");
    return;
    }

    // adding the new item to the array
    hobbies.push(newThing);
    alert(newThing + " has been added to your favorite list!");
    document.getElementById("favoriteInput").value = ""; // clear the input field
}

// 3. show random items
function showHobbies() {
    let randomIndex = Math.floor(Math.random() * hobbies.length);
    document.getElementById("randomThing").innerHTML = hobbies[randomIndex];
}
