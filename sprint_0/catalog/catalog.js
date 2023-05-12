const rightDiv = document.getElementById("right");
const cpscBtn = document.getElementById("cpsc");
const cpseBtn = document.getElementById("cpse");
const poliBtn = document.getElementById("poli");
const bioBtn = document.getElementById("bio");
const physBtn = document.getElementById("phys");
const socBtn = document.getElementById("soc");
const histBtn = document.getElementById("hist");

const classes = ["CPSC 100", "CPSC 102", "CPSC 131", "CPSC 223J", "CPSC 223N", "CPSC 240", "CPSC 253U", "CPSC 254", "CPSC 301", "CPSC 311", "CPSC 315", "CPSC 362", "CPSC 431", "CPSC 440", "CPSC 462"
  , "CPSC 464", "CPSC 466", "CPSC 471", "EGCE 201", "EGCE 206", "EGCE 214", "EGCE 214L", "EGCE 301", "EGCE 302", "EGCE 308", "EGCE 324L", "EGCE 325", "EGCE 377", "EGCE 401", "EGCE 408", "EGCE 418"
  , "EGCE 418", "EGCE 428", "EGCE 428L", "EGCE 430", "EGCE 432", "EGCE 435", "EGCE 436", "EGCE 468", "EGCE 532", "EGCE 556", "EGCE 583"];

function passClass() {
  var className = document.getElementById("mySearch").value;
  localStorage.setItem("classNameValue", className);
  return false;
}

cpscBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.remove();
    rightDiv.appendChild(input);
    const list = `
        <h2><u>Computer Science List of CLasses</u></h2>
        <br>
        <br>
        <p>
            <h3>100</h3>
            <ul>
              <li>CPSC 120 - Introduction to Programming (3)</li>
              <li>CPSC 121 - Object-Oriented Programming (3)</li>
              <li>CPSC 131 - Data Structures (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>200</h3>
            <ul>
              <li>CPSC 223J - Java Programming (3)</li>
              <li>CPSC 223N - Visual C# Programming (3)</li>
              <li>CPSC 240 - Computer Organization and Assembly Language (3)</li>
              <li>CPSC 253U - Workshop in UNIX (1)</li>
              <li>CPSC 254 - Software Development with Open Source Systems (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>300</h3>
            <ul>
              <li>CPSC 301 - Programming Lab Practicum (2)</li>
              <li>CPSC 311 - Technical Writing for Computer Science (3)</li>
              <li>CPSC 315 - Professional Ethics in Computing (3)</li>
              <li>CPSC 323 - Compilers and Languages (3)</li>
              <li>CPSC 332 - File Structures and Database Systems (3)</li>
              <li>CPSC 335 - Algorithm Engineering (3)</li>
              <li>CPSC 386 - Introduction to Game Design and Production (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>400</h3>
            <ul>
              <li>CPSC 431 - Database and Applications (3)</li>
              <li>CPSC 440 - Computer System Architecture (3)</li>
              <li>CPSC 462 - Software Design (3)</li>
              <li>CPSC 464 - Software Architecture (3)</li>
              <li>CPSC 466 - Software Process (3)</li>
              <li>CPSC 471 - Computer Communications (3)</li>
              <li>CPSC 474 - Parallel and Distributed Computing (3)</li>
            </ul>
        </p>
    `;
    rightDiv.innerHTML = list;
});

cpseBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.remove();
    rightDiv.appendChild(input);
    const list = `
        <h2><u>Computer Engineering List of CLasses</u></h2>
        <br>
        <br>
        <p>
            <h3>200</h3>
            <ul>
              <li>EGCE 201 - Statics (3)</li>
              <li>EGCE 206 - Computer-Aided Architectural and Civil Engineering Drafting (1)</li>
              <li>EGCE 214 - Engineering Surveying (2)</li>
              <li>EGCE 214L - Engineering Surveying Laboratory (1)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>300</h3>
            <ul>
              <li>EGCE 301 - Mechanics of Materials (3)</li>
              <li>EGCE 302 - Dynamics (3)</li>
              <li>EGCE 308 - Engineering Analysis (3)</li>
              <li>EGCE 324L - Soil Mechanics Laboratory (1)</li>
              <li>EGCE 325 - Structural Analysis (3)</li>
              <li>EGCE 377 - Civil Engineering Materials Laboratory (1)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>400</h3>
            <ul>
              <li>EGCE 401 - Engineering Economics and Professionalism (3)</li>
              <li>EGCE 408 - Reinforced Concrete Design (3)</li>
              <li>EGCE 418 - Foundation Design (3)</li>
              <li>EGCE 428 - Engineering Hydraulics (3)</li>
              <li>EGCE 428L - Engineering Hydraulics Laboratory (1)</li>
              <li>EGCE 430 - Structural Steel Design (3)</li>
              <li>EGCE 432 - Computer-Aided Design and Analysis in Civil Engineering (3)</li>
              <li>EGCE 435 - Design of Hydraulic Structures (3)</li>
              <li>EGCE 436 - Engineering Hydrology (3)</li>
              <li>EGCE 468 - Construction Engineering (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>500</h3>
            <ul>
              <li>EGCE 532 - Earthquake Engineering (3)</li>
              <li>EGCE 556 - Construction Cost Control, Scheduling and Planning (3)</li>
              <li>EGCE 583 - Air Pollution Control Engineering (3)</li>
            </ul>
        </p> 
    `;
    rightDiv.innerHTML = list;
});

poliBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.remove();
    rightDiv.appendChild(input);
    const list = `
        <h2><u>Political Science List of CLasses</u></h2>
        <br>
        <br>
        <p>
            <h3>100</h3>
            <ul>
              <li>POSC 100 - American Government (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>200</h3>
            <ul>
              <li>POSC 200 - Introduction to the Study of Politics (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>300</h3>
            <ul>
              <li>POSC 309 - Introduction to Local Government (3)</li>
              <li>POSC 310 - Political Behavior (3)</li>
              <li>POSC 315 - Introduction to Public Policy (3)</li>
              <li>POSC 320 - Introduction to Public Administration (3)</li>
              <li>POSC 321 - Research in Public Management (3)</li>
              <li>POSC 322 - Leadership for Public Service (3)</li>
              <li>POSC 330 - Politics in Nation-States (3)</li>
              <li>POSC 331 - Third World Politics Through Literature (3)</li>
              <li>POSC 340 - Political Philosophy (3)</li>
              <li>POSC 350 - International Relations (3)</li>
              <li>POSC 352 - American Foreign Policy (3)</li>
              <li>POSC 361 - Model United Nations (3)</li>
              <li>POSC 375 - Law, Politics and Society (3)</li>
              <li>POSC 381 - Religion and Politics in the United States (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>400</h3>
            <ul>
              <li>POSC 404 - Capital Punishment (3)</li>
              <li>POSC 405 - Campaigns and Elections (3)</li>
              <li>POSC 407 - Polls, Statistics and Political Interpretation (3)</li>
              <li>POSC 410 - Political Parties (3)</li>
              <li>POSC 412 - Practicing Politics (3)</li>
              <li>POSC 413 - U.S. Congress (3))</li>
              <li>POSC 416 - Presidents and the Presidency (3)</li>
              <li>POSC 417 - Film and Politics (3)</li>
            </ul>
        </p>     
    `;
    rightDiv.innerHTML = list;
});

bioBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.remove();
    rightDiv.appendChild(input);
    const list = `
        <h2><u>Biology List of CLasses</u></h2>
        <br>
        <br>
        <p>
            <h3>100</h3>
            <ul>
              <li>BIOL 101 - Elements of Biology (3)</li>
              <li>BIOL 101L - Elements of Biology Laboratory (1)</li>
              <li>BIOL 102 - Biology for Future Teachers (4)</li>
              <li>BIOL 191A - Integrated Human Anatomy and Physiology A (4)</li>
              <li>BIOL 191B - Integrated Human Anatomy and Physiology B (4)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>200</h3>
            <ul>
              <li>BIOL 210 - Human Anatomy and Physiology (3)</li>
              <li>BIOL 280R - Research Preparatory Proseminar (1)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>300</h3>
            <ul>
              <li>BIOL 300 - Environmental Biology and Sustainability (3)</li>
              <li>BIOL 301 - Problems in Environmental Biology (3)</li>
              <li>BIOL 302 - General Microbiology (5)</li>
              <li>BIOL 303 - Intermediate Cell Biology (3)</li>
              <li>BIOL 306 - Biology of Aging (3)</li>
              <li>BIOL 309 - Intermediate Molecular Biology (3)</li>
              <li>BIOL 310 - Human Physiology (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>400</h3>
            <ul>
              <li>BIOL 400 - Seminar in Biology Education (3)</li>
              <li>BIOL 401 - Biogeography (3)</li>
              <li>BIOL 402 - Computer Lab in Molecular Systematics (3)</li>
            </ul>
        </p> 
    `;
    rightDiv.innerHTML = list;
});

physBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.remove();
    rightDiv.appendChild(input);
    const list = `
        <h2><u>Physics List of CLasses</u></h2>
        <br>
        <br>
        <p>
            <h3>100</h3>
            <ul>
              <li>PHYS 101 - Survey of Physics (3)</li>
              <li>PHYS 101L - Survey of Physics Laboratory (1)</li>
              <li>PHYS 102 - Physical Science for Future Elementary Teachers (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>200</h3>
            <ul>
              <li>PHYS 211 - Elementary Physics (3)</li>
              <li>PHYS 211L - Elementary Physics: Laboratory (1)</li>
              <li>PHYS 225 - Fundamental Physics: Mechanics (3)</li>
              <li>PHYS 225L - Fundamental Physics: Laboratory (1)</li>
              <li>PHYS 226 - Fundamental Physics: Electricity and Magnetism (3)</li>
              <li>PHYS 226L - Fundamental Physics: Laboratory (1)</li>
              <li>PHYS 227 - Fundamental Physics: Waves, Optics, and Modern Physics (1-3)</li>
              <li>PHYS 227L - Fundamental Physics: Laboratory (1)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>300</h3>
            <ul>
              <li>PHYS 300 - Survey of Mathematical Physics (3)</li>
              <li>PHYS 301 - Energy and Sustainability (3)</li>
              <li>PHYS 310 - Thermodynamics, Kinetic Theory, and Statistical Physics (3)</li>
              <li>PHYS 315 - Computational Physics (3)</li>
              <li>PHYS 320 - Classical Mechanics (3)</li>
              <li>PHYS 330A - Electromagnetic Theory I (3)</li>
              <li>PHYS 330B - Electromagnetic Theory II (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>400</h3>
            <ul>
              <li>PHYS 411 - Modern Optics (3)</li>
              <li>PHYS 416 - Thermal and Statistical Physics (3)</li>
              <li>PHYS 454 - Introduction to the Solid State of Matter (3)</li>
            </ul>
        </p>   
    `;
    rightDiv.innerHTML = list;
});

socBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.remove();
    rightDiv.appendChild(input);
    const list = `
        <h2><u>Sociology List of CLasses</u></h2>
        <br>
        <br>
        <p>
            <h3>100</h3>
            <ul>
              <li>SOCI 101 - Introduction to Sociology (3)</li>
              <li>SOCI 133 - Introduction to Aging Studies (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>300</h3>
            <ul>
              <li>SOCI 300 - Social Work (3)</li>
              <li>SOCI 302 - Social Research Methods (3)</li>
              <li>SOCI 303 - Statistics for the Social Sciences (3)</li>
              <li>SOCI 304 - Black Families in America (3)</li>
              <li>SOCI 305 - Social Work Practice (3)</li>
              <li>SOCI 325 - The American Drug Scene (3)</li>
              <li>SOCI 341 - Social Interaction (3)</li>
              <li>SOCI 345 - Sociology of Communication (3)</li>
              <li>SOCI 348 - Social Movements (3)</li>
              <li>SOCI 350 - Social Relationships and Emotions (3)</li>
              <li>SOCI 351 - Sociology of Families (3)</li>
              <li>SOCI 352 - The Sociology of Education (3)</li>
              <li>SOCI 353 - Sociology of Children and Youth (3)</li>
              <li>SOCI 354 - Gender, Sex and Society (3)</li>
            </ul>
        </p>
        <br>
        <p>
            <h3>400</h3>
            <ul>
              <li>SOCI 410 - Theories of Social Behavior (3)</li>
              <li>SOCI 411 - Criminology (3)</li>
              <li>SOCI 495 - Sociological Internship (3)</li>
            </ul>
        </p>  
    `;
    rightDiv.innerHTML = list;
});

histBtn.addEventListener("click", () => {
    let input = document.createElement("div");
    input.remove();
    rightDiv.appendChild(input);
    const list = `
        <h2>History List of CLasses</h2>
        <br>
        <p>
            List...
        </p>    
    `;
    rightDiv.innerHTML = list;
});

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
}

autocomplete(document.getElementById("mySearch"), classes);
