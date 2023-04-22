var defaultThreads = [
    {
        id: 1,
        title: "When is our Final Exam?",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [],
    },
    {
        id: 2,
        title: "Empty Title",
        author: "John Cena",
        date: Date.now(),
        content: "Thread content 2",
        comments: [],
    },
    {
        id: 3,
        title: "How to link javascript with HTML",
        author: "CSS",
        date: Date.now(),
        content: "Thread content",
        comments: [],
    },
    {
        id: 4,
        title: "How to submit a form",
        author: "Baron",
        date: Date.now(),
        content: "Thread content",
        comments: [],
    },
    {
        id: 5,
        title: "Question Question",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [],
    },
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

