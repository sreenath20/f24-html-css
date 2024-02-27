const nameArrray = ["India", "USA", "UK", "Japan"];

function sortNames(){
    return nameArrray.sort();
}
function findName(name) {
    let location = nameArrray.indexOf(name);
    if (location < 0) {
        console.log("Element not found");
    }
    else
        console.log("Element found @ : " + location);
}
function getAllNames() {
    return nameArrray;
}
function addName(name) {
    console.log(name);
    nameArrray.push(name);
}
function getName(index) {
    return nameArrray.at(index);
}
function updateName(newName, index) {
    if (index >= 0 && index <= nameArrray.length) {
        nameArrray.splice(index, 1, newName);
    }
    else
        console.log("index out of range for update");
}
function deleteNameByIndex(index) {
    if (index >= 0 && index <= nameArrray.length) {
        nameArrray.splice(index, 1);
    }
    else
        console.log("index out of range for delete");
}


