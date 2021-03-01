const buttonStatus = (status) => {
    if(status.style.backgroundColor=="white"){
       return status.style.backgroundColor="grey"
    }
    else return status.style.backgroundColor="white";
};

const addInstrument = (times) => {
    var newDiv = document.createElement("div");
    newDiv.id="testingId";
    newDiv.classList="testingClass";
    console.log(newDiv)
}