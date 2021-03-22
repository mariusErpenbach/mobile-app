const buttonStatus = (status) => {
    if(status.style.backgroundColor=="white"){
       return status.style.backgroundColor="grey"
    }
    else return status.style.backgroundColor="white";
};


const addInstrument = () => {
    const InstrumentSet=[
        "kick",
        "Snare",
        "HiHat",
        "Crash"
    ]
    
    // new pattern div
    var newPatternDiv = document.createElement("div");
    newPatternDiv.classList="pattern";
    // new instrument button 
    var newInstrumentButton = document.createElement("select"); //declare
    newInstrumentButton.classList="instrument"; // give class name
    newInstrumentButton.name="instrumentChoice";
    for (i=0;i<InstrumentSet.length;i++){
    var newOption = document.createElement("option");      // give new options to instrument select
    newOption.innerHTML=InstrumentSet[i];                             // EXCHANGE WITH LOOPING THROUGH AN ARRAY
    newInstrumentButton.appendChild(newOption);
    }
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
