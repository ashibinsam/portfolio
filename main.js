const typing = document.getElementsByClassName("dynamicText");
const dynamicWords = [" a Software Developer", " an Embedded Systems Developer", " an Algorithmic Problem Solver"];

let letterIndex = 0;
let wordIndex =0;
let cursorState=true;

function printLetters(phrase) {
    for(element of typing) {
        //element.textContent="";
        if(element.textContent.length == phrase.length) {
            element.textContent = phrase;
            if(letterIndex == 0) {
                wordIndex++; 
                wordIndex = wordIndex<dynamicWords.length ? wordIndex : 0;
                element.textContent = "";
                setTimeout(function() {printLetters(dynamicWords[wordIndex])},200);
            }
            else {

                letterIndex = 0;
                setTimeout(function() {printLetters(phrase)},2000);
            }
            
        }
        else {
            element.textContent += phrase.charAt(letterIndex);
            letterIndex++;
            // console.log("element length:" + element.textContent.length);
            // console.log("phrase length:" + phrase.length);
            setTimeout(function() {printLetters(phrase)},110);
        }
        
        
        
    }
    
}

function printCursor() {
    const text = document.getElementById("cursor");
    if(cursorState == false) {
        cursorState = true;
        text.textContent = "|";
        setTimeout(()=>printCursor(),300);
    }
    else {
        cursorState = false;
        text.innerHTML = "&nbsp";
        setTimeout(()=>printCursor(),300);
    }
    
}
printLetters(dynamicWords[0]);
printCursor();



