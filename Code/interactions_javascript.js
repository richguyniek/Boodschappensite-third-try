/* test sectie start */
// gewoon om het uit te testen kunnen we het hier aanroepen
//example_schermbreedte();
/* test sectie einde */

/* dit gaat onze shoopingcart togglen wanneer op de header geklikt wordt */
function toggle_shoopingcart_onclick(){
    // let shoopingcart_element= document.getElementById("shooping-cart-list");
    // if (shoopingcart_element.style.display=="none"){
    //     shoopingcart_element.style.display="flex";
    // }
    // else if(shoopingcart_element.style.display=="flex"){
    //     shoopingcart_element.style.display="none";
    // }
    let shoopingcart_element = document.getElementById("hidden-container");
    
    //shoopingcart_element.classList.toggle("visible");

    if(window.innerWidth<="375"){
        shoopingcart_element.classList.toggle("visible")
    }

    else if(window.innerWidth>="375"){
        console.log("changed to 375px");
        shoopingcart_element.classList.remove("visible");
    }

        
    /*
        dit moeten we later aanpassen naar een check voor de display
        if(display == "none") dan zet het op flex en andersom
        het automatisch zichtbaar maken kunnen we doen via een class / css
        met media queries.

        zie toggle-example.html in testdummies map
    */
    
    console.log ("huidige display is : " + shoopingcart_element.style.display);
    
}


// voorbeeld om met scherm breedte te werken
function example_schermbreedte(){
    let shoopingcart_element= document.getElementById("shooping-cart-list");
    
    // voorbeeld om met scherm breedte te werken
    console.log(window.innerWidth);
    if(window.innerWidth <= "500"){
        console.log("changed to 500px");
        shoopingcart_element.style.display = "none";
    }
    else if (window.innerWidth >= "500"){
        console.log("bigger then 500");
        shoopingcart_element.style.display = "flex";
    }
    else{
        console.log("ERROR A1 : window.innerWidth.");
    }
    console.log (shoopingcart_element.style.display);
}