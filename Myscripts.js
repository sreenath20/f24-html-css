var globalData = "NASA";

function myFunction2() {
    //document.write("Hello Ford");
    // console.log("myFunction called");
    // this.window.alert("Danger");
    //automatic
    name = "ford";
    console.log(name);
    const pi = 3.14;
    { // if block
        var localName = "India";
        let blockCity = "Chennai";
        const pi = 3.14;
        console.log(pi);
    }
    console.log(localName);
    //console.log(blockCity);
    
    document.getElementById("textId1").innerHTML = "New Text";
}
function myFunction3() {

    // console.log(countryName);
    console.log(globalData);
}
