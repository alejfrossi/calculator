let result ;
let lastBttnPressed ; let operatorBttnPressed = false ;

let displayRecord = document.getElementById('record');
let displayInput = document.getElementById('input');

let bttns = Array.from( document.getElementsByTagName('button') );

bttns.forEach( bttn => bttn.addEventListener( 'click' , () => {

    if ( bttn.innerText === 'CLEAR' ) {
        displayInput.innerText = '0'; displayRecord.innerText = '';
    }

    else if ( bttn.innerText === 'DELETE' ) {
        if ( displayInput.innerText.length > 1 ) {
            displayInput.innerText = displayInput.innerText.slice(0, -1);
        }
        else {
            displayInput.innerText = '0';
        }
    }

    else if ( bttn.className === 'number' ) {
        if ( displayInput.innerText === '0' ) {
            displayInput.innerText = displayInput.innerText.slice(0, -1);
        }
        if ( lastBttnPressed === 'equal' ) {
            displayRecord.innerText = '';
            displayInput.innerText = bttn.innerText;
        }
        else if ( displayInput.innerText.length > 9 ) {
            displayInput.innerText = displayInput.innerText.slice(1, -1);
            displayInput.innerText += bttn.innerText;
        }
        else {
            displayInput.innerText += bttn.innerText;
        }
        lastBttnPressed = 'number';
    }

    else if ( bttn.className === 'operator' ) {
        if ( lastBttnPressed === 'number' ) {
            displayRecord.innerText = displayInput.innerText + " " + bttn.innerText;
        }
        else if ( lastBttnPressed === 'operator') {
            displayRecord.innerText += " " + displayInput.innerText + " " + bttn.innerText;
        }
        else if ( displayInput.innerText  === 'ERROR' ) {
            displayRecord.innerText = "0" + bttn.innerText;
        }
        else {
            displayRecord.innerText = displayInput.innerText + " " + bttn.innerText;
        }
        lastBttnPressed = 'operator';
        displayInput.innerText = '0';
    }

    else if ( bttn.id === 'spot' ) {
        if ( displayInput.innerText === '0' ) {
            displayInput.innerText = displayInput.innerText.slice(0, -1);
            }
            displayInput.innerText += bttn.innerText;
    }

    else {
        if ( lastBttnPressed === 'number' ) {
            displayRecord.innerText += displayInput.innerText;
        }
        else if ( lastBttnPressed === 'operator' ) {
            displayRecord.innerText = displayRecord.innerText.slice(0, -1);
        }
        try {
            displayInput.innerText = eval( displayRecord.innerText );
            lastBttnPressed = 'equal';
            if ( displayInput.innerText.length > 9 ) {
                displayRecord.innerText = ''
                displayInput.innerText = 'ERROR';
            }
        }
        catch {
            displayInput.innerText = 'ERROR';
        }
    }

}));
