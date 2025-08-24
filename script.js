let start_button_div = document.querySelector("#start_button_div") // start quiz button 
start_button_div.style.pointerEvents = "none" // no pointer action on button 
start_button_div.style.opacity = "0.8" // decrease the opacity 
let category_type = document.querySelectorAll("#category_box .category_type") // selecting all category button 
let isSelected = false; // flag ⭐ : Ek flag lagao jo pehle click ke baad sabhi categories ko disable kar de

category_type.forEach(function (btn) {

    btn.addEventListener("click", function () {

        if (isSelected) return; // agar pehle hi select ho gaya toh kuch mat karo ⭐
        category_type.forEach(b => b.style.backgroundColor = ""); // // sabka background reset ⭐

        btn.style.backgroundColor = "pink" // on click
        start_button_div.style.opacity = "1" // on click
        start_button_div.style.pointerEvents = "auto" // on click
        // console.log(btn.textContent)

        // Hide main after button start is click ⭐
        let main = document.querySelector("#main")    

        // show the quiz main_2 box 
        let main_2 = document.querySelector("#main_2")

        start_button_div.addEventListener("click", function () { // on click start button function trigger 
            main.style.display = "none" // hide main box
            main_2.style.display = "block" // show main_2 box
            let p = document.createElement("p") // create element to show category Selected ?
            p.innerText = `${btn.textContent}`// value daal de 
            p.classList.add("showing_category") // ek class dede
            main_2.append(p) // main_2 me prepend karde










        })
        isSelected = true

    });

})




