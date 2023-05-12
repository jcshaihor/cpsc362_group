var defaultThreads;


// make API request and store JSON data in global variable
fetch("https://us-west-2.aws.data.mongodb-api.com/app/application-0-qcsaz/endpoint/getQuestions")
  .then(response => response.json())
  .then(data => {
    defaultThreads = data;
    console.log(defaultThreads);
  });

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

