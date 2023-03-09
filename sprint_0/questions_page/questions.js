const body = document.body;



const div = document.createElement("div");
div.classList.add("card-list");



// const card = document.createElement("div");
// card.classList.add("card", "card-shadow");


// const header= document.createElement("div");
// header.classList.add("card-header");
// header.textContent = "Placeholder";

// const cardBody = document.createElement("div");
// cardBody.textContent = "this is a simple test of a question body etc..."
// cardBody.classList.toggle("card-body");

// const cardFooter = document.createElement("div");
// cardFooter.classList.toggle("card-footer");

// const btn = document.createElement("button");
// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");

// btn.textContent = "Comment";
// btn1.textContent = "Save";
// btn2.textContent = "Report";

// btnStyler(btn);
// btnOutline(btn1);
// btnOutline(btn2);

// cardFooter.appendChild(btn);
// cardFooter.appendChild(btn1);
// cardFooter.appendChild(btn2);
// header.appendChild(cardBody);
// card.appendChild(header);
// card.appendChild(cardFooter);
// div.appendChild(card);

const magicBtn = document.createElement("button");
magicBtn.textContent = "Create a Question"
btnStyler(magicBtn);
magicBtn.onclick = function() {cardCreator()};



div.appendChild(magicBtn);
body.appendChild(div);




function btnStyler(btn){
    btn.classList.toggle("btn");
}

function btnOutline(btn){
    btn.classList.add("btn", "btn-outline");
}

function cardCreator(){ // creates new card/question table
    const card = document.createElement("div");
    card.classList.add("card", "card-shadow");
    const header= document.createElement("div");
    header.classList.add("card-header");
    header.textContent = "Placeholder";
    const cardBody = document.createElement("div");
    cardBody.textContent = "this is a simple test of a question body etc..."
    cardBody.classList.toggle("card-body");

    const cardFooter = document.createElement("div");
    cardFooter.classList.toggle("card-footer");

    const btn = document.createElement("button");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");

    btn.textContent = "Comment";
    btn1.textContent = "Save";
    btn2.textContent = "Report";
    btnStyler(btn);
    btnOutline(btn1);
    btnOutline(btn2);

    cardFooter.appendChild(btn);
    cardFooter.appendChild(btn1);
    cardFooter.appendChild(btn2);
    header.appendChild(cardBody);
    card.appendChild(header);
    card.appendChild(cardFooter);
    div.appendChild(card);
}