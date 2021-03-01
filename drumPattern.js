const buttonStatus = (status) => {
    if(status.style.backgroundColor=="white"){
       return status.style.backgroundColor="grey"
    }
    else return status.style.backgroundColor="white";
};

const addInstrument = () => {

    // new pattern div
    var newPatternDiv = document.createElement("div");
    newPatternDiv.classList="pattern";
    // new instrument button 
    var newInstrumentButton = document.createElement("button"); //declare
    newInstrumentButton.classList="instrument"; // give class name
    newPatternDiv.appendChild(newInstrumentButton); // append to mother div
    // new pattern squares
    for (i=0;i<8;i++){
        var newPatternSqr = document.createElement("button"); 
        newPatternSqr.classList="patternSqr";
        newPatternSqr.innerHTML=i+1;
        newPatternSqr.onclick =function(){buttonStatus(this)}
    

        newPatternDiv.appendChild(newPatternSqr);
    }

    console.log(newPatternDiv)
//   document.patternTable.appendChild(newPatternDiv)
   var currentDiv = document.getElementById("patternTable");
   document.body.insertBefore(newPatternDiv, currentDiv);
} 
