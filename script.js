let start_button_div = document.querySelector("#start_button_div") // start quiz button 
start_button_div.style.pointerEvents = "none" // no pointer action on button 
start_button_div.style.opacity = "0.8" // decrease the opacity 
let category_type = document.querySelectorAll("#category_box .category_type") // selecting all category button 
let isSelected = false; // flag ⭐ : Ek flag lagao jo pehle click ke baad sabhi categories ko disable kar de
let rule_box = document.querySelector("#rule_box") // Rule box jo abhi Disable none hai 

category_type.forEach(function (btn) {

    btn.addEventListener("click", function () {

        if (isSelected) return; // agar pehle hi select ho gaya toh kuch mat karo ⭐
        category_type.forEach(b => b.style.backgroundColor = ""); // // sabka background reset ⭐

        btn.style.backgroundColor = "rgb(0, 255, 0)" // on click
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
            // let p = document.createElement("p") // create element to show category Selected ?
            // p.innerText = `${btn.textContent}`// value daal de 
            // p.classList.add("showing_category") // ek class dede
            // main_2.append(p) // main_2 me prepend karde
            rule_box.style.display = "none"


        })
        isSelected = true


        rule_box.style.display = "block" // after click the category ye dikhega 
    });

})



// NEXT phase 2 of Quiz 
let input = document.querySelector("#input_number_of_question") // input le lenge number of Question
let button = document.querySelector("#done") // done button click hoga after selecting the number of question 
let main_2 = document.querySelector("#main_2")

button.addEventListener("click", function () {
    console.log(`Selected number of question ${input.value}`) // Debuggin the Code 

    if (input.value == 0) { // Agr 0 hua to alert De dena 

        alert("NUMBER OF QUESTION SELECTED 0 ⚠️ NOT ABLE TO PLAY ❌ PLEASE SELECT QUESTION GREATER THEN 0 ✅ ")
        selected_number_of_question_text.style.display = "none"
        input.value = "" // Input click karo 

    } else {

        let existingH1 = document.querySelector(".showing_number_of_selected_Question")

        if (existingH1) {

            // ❌ ERROR (Reason):
            // Har baar "DONE" button click par naya <h1> create ho raha tha,
            // isliye pehle se jo number display ho raha hai wo update nahi ho raha tha,
            // sirf pehli baar ka value (jaise 15) dikh raha tha.
            // Solution: Pehle check karo agar .showing_number_of_selected_Question exist hai,
            // to uska innerText update karo, warna naya create karo.

            existingH1.innerText = input.value
        } else {

            // LOVELY UPDATE 💖 : ONLY NUMBER LIKE 15 / 20 / 30
            let h1 = document.createElement("h1")
            h1.classList.add("showing_number_of_selected_Question")
            h1.innerText = (input.value)
            main_2.append(h1)
        }

    }




    let selected_number_of_question_text = document.querySelector("#selected_number_of_question_text")
    selected_number_of_question_text.style.display = "block"



})

// phase 3 of quiz
