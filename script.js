const countValue = document.getElementById('counter');

function increment(){
    
    // get value from UI
    let value = parseInt(countValue.innerText);

    // update value 
    value = value+1;

    // set the value on to UI
    countValue.innerText = value;
};

function decrement(){
    
    // get value from UI
    let value = parseInt(countValue.innerText);

    // update value 
    value = value-1;

    // set the value on to UI
    countValue.innerText = value;
};

function reset(){
    countValue.innerText = "0";
}

function increment10(){
    
    // get value from UI
    let value = parseInt(countValue.innerText);

    // update value 
    value = value+10;

    // set the value on to UI
    countValue.innerText = value;
};

function decrement10(){
    
    // get value from UI
    let value = parseInt(countValue.innerText);

    // update value 
    value = value-10;

    // set the value on to UI
    countValue.innerText = value;
};
