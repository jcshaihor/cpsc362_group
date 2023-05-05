let cardList = document.getElementById("card-list");
const questionTitle = document.getElementById("question");
const questionBtn = document.getElementById("btn-question");
const likeBtn = document.getElementById("material-symbols-outlined");

function card() {
    let cards = document.createElement("div");
    cards.classList.add("card");
    cardList.appendChild(cards);

    let likes = document.createElement("div");
    cards.appendChild(likes);
    likes.innerHTML = `<div class="likes-style"><button class="material-symbols-outlined">star</button><span id="counter">0</span></div>`;

    let cardHeader = document.createElement("div");
    cards.appendChild(cardHeader);
    cardHeader.innerHTML = `<div class="card-header">What is a linked list?</div>`;

    let cardBody = document.createElement("div");
    cards.appendChild(cardBody);
    cardBody.innerHTML = `<div class="card-body">mnchow98</div>`;

    let answerBtn = document.createElement("button");
    answerBtn.classList.add("btn");
    answerBtn.innerHTML = `Answer`;
    answerBtn.addEventListener("click", () => {

        answerBtn.remove();

        let answerContainer = document.createElement("div");
        answerContainer.classList.add("answer-container");
        cards.appendChild(answerContainer);

        let answer = document.createElement("textarea");
        answer.style.width = "100%";
        answerContainer.appendChild(answer);

        let postBtn = document.createElement("button");
        postBtn.classList.add("btn");
        postBtn.style.float = "right";
        postBtn.innerHTML = `Post`;
        answerContainer.appendChild(postBtn);
        postBtn.addEventListener("click", () => {
            answer.remove();
            postBtn.remove();
            deleteDraftBtn.remove();

            if (!answer.value) {
                alert("Must type in an answer!");
                answerContainer.appendChild(answer);
                answerContainer.appendChild(postBtn);
                answerContainer.appendChild(deleteDraftBtn);
                return false;
            }

            answerContainer.innerHTML = `<hr><div class="posted-answer">${answer.value}</div><div class="posted-by">mnchow98</div>`;
            cards.append(answerBtn);
        });

        let deleteDraftBtn = document.createElement("button");
        deleteDraftBtn.classList.add("btn-delete-draft");
        deleteDraftBtn.style.float = "right";
        deleteDraftBtn.innerHTML = `Delete Draft`;
        answerContainer.appendChild(deleteDraftBtn);
        deleteDraftBtn.addEventListener("click", () => {
            answerContainer.remove();
            cards.append(answerBtn);
        });
    });

    cards.appendChild(answerBtn);
    document.getElementById("cardList").appendChild(cards);
};

function card() {
    let cards = document.createElement("div");
    cards.classList.add("card");
    cardList.appendChild(cards);

    let likes = document.createElement("div");
    cards.appendChild(likes);
    likes.innerHTML = `<div class="likes-style"><button class="material-symbols-outlined">star</button><span id="counter">0</span></div>`;

    let cardHeader = document.createElement("div");
    cards.appendChild(cardHeader);
    cardHeader.innerHTML = `<div class="card-header">What is a linked list?</div>`;

    let cardBody = document.createElement("div");
    cards.appendChild(cardBody);
    cardBody.innerHTML = `<div class="card-body">mnchow98</div>`;

    let answerBtn = document.createElement("button");
    answerBtn.classList.add("btn");
    answerBtn.innerHTML = `Answer`;
    answerBtn.addEventListener("click", () => {

        answerBtn.remove();

        let answerContainer = document.createElement("div");
        answerContainer.classList.add("answer-container");
        cards.appendChild(answerContainer);

        let answer = document.createElement("textarea");
        answer.style.width = "100%";
        answerContainer.appendChild(answer);

        let postBtn = document.createElement("button");
        postBtn.classList.add("btn");
        postBtn.style.float = "right";
        postBtn.innerHTML = `Post`;
        answerContainer.appendChild(postBtn);
        postBtn.addEventListener("click", () => {
            answer.remove();
            postBtn.remove();
            deleteDraftBtn.remove();

            if (!answer.value) {
                alert("Must type in an answer!");
                answerContainer.appendChild(answer);
                answerContainer.appendChild(postBtn);
                answerContainer.appendChild(deleteDraftBtn);
                return false;
            }

            answerContainer.innerHTML = `<hr><div class="posted-answer">${answer.value}</div><div class="posted-by">mnchow98</div>`;
            cards.append(answerBtn);
        });

        let deleteDraftBtn = document.createElement("button");
        deleteDraftBtn.classList.add("btn-delete-draft");
        deleteDraftBtn.style.float = "right";
        deleteDraftBtn.innerHTML = `Delete Draft`;
        answerContainer.appendChild(deleteDraftBtn);
        deleteDraftBtn.addEventListener("click", () => {
            answerContainer.remove();
            cards.append(answerBtn);
        });
    });

    cards.appendChild(answerBtn);
    document.getElementById("cardList").appendChild(cards);
};



card();

// Submit question button function
questionBtn.addEventListener("click", () => {
    if (!questionTitle.value) {
        alert("Must type in a question!");
        return false;
    }
    cardCreator(questionTitle.value);
    questionTitle.value = "";
});

// Like button function
/*likeBtn.addEventListener("click", () => {

});*/

// Get class name
document.getElementById("result").innerHTML = localStorage.getItem("classNameValue");
