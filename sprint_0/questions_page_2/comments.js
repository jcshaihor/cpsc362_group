var defaultThreads;

async function fetchData() {
  const response = await fetch("https://us-west-2.aws.data.mongodb-api.com/app/application-0-qcsaz/endpoint/getQuestions2");
  const data = await response.json();
  defaultThreads = data;
  console.log(defaultThreads);
}

function displayData() {
  var id = window.location.search.slice(1);
  console.log(id);
  var thread = defaultThreads.find(t => t._id == id);
  console.log(defaultThreads);
  var header = document.querySelector('.header');
  var headerHtml = `
      <h4 class="title">
          ${thread.title}
      </h4>
      <div class="bottom">
          <p class="timestamp">
              ${new Date(thread.date).toLocaleString()}
          </p>
          <p class="comment-count">
              ${thread.comments.length} comments
          </p>
      </div>
  `
  header.insertAdjacentHTML('beforeend', headerHtml)

  function addComment(comment) {
      var commentHtml = `
          <div class="comment">
              <div class="top-comment">
                  <p class="user">
                      ${comment.author}
                  </p>
                  <p class="comment-ts">
                      ${new Date(comment.date).toLocaleString()}
                  </p>
              </div>
              <div class="comment-content">
                  ${comment.content}
              </div>
          </div>
      `
      comments.insertAdjacentHTML('beforeend', commentHtml);
  }

  var comments = document.querySelector('.comments');
  for (let comment of thread.comments) {
      addComment(comment);
  }

  var btn = document.querySelector('button');
  btn.addEventListener('click', function() {
      var txt = document.querySelector('textarea');
      var comment = {
          content: txt.value,
          date: Date.now(),
          author: 'Admin'
      }
      addComment(comment);
      txt.value = '';
      thread.comments.push(comment);
      localStorage.setItem('math150a', JSON.stringify(defaultThreads));
  })

  window.addEventListener('beforeunload', function() {
    localStorage.setItem('math150a', JSON.stringify(defaultThreads));
  });
}

if (localStorage && localStorage.getItem('math150a')) {
  defaultThreads = JSON.parse(localStorage.getItem('math150a'));
  displayData();
} else {
  fetchData()
    .then(() => {
      displayData();
      localStorage.setItem('math150a', JSON.stringify(defaultThreads));
    })
    .catch((error) => console.log(error));
}
