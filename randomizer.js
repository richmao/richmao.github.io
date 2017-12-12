var buttonIDs = ["academicsB", "financesB", "personalInfoB", "classButtonB", "holdsB", "toDoB", "enrollmentB", "recordsB"];
var sectionIDs = ["academics", "finances", "personalInfo", "classButton", "holds", "toDo", "enrollment", "records"];
var buttonText = ["Academics", "Finances", "Personal Information", "Class Button", "Holds", "To Do List", "Enrollment", "Records"]; //text that goes in the buttons

let htmlRules = {
    'origin': ['#rowColumns#', '<div class="row">#rowColumns#</div><div class="row">#rowColumns#</div>', '<div class="row">#rowColumns#</div><div class="row">#rowColumns#</div><div class="row">#rowColumns#</div>'],
    'rowColumns': ['<div class="col-lg-7" >#leftStyleColumn#</div><div class="col-lg-1"></div><div class="col-lg-3">#rightStyleColumn#</div>', '<div class="col-lg-3" >#leftStyleColumn#</div><div class="col-lg-1"></div><div class="col-lg-7" >#rightStyleColumn#</div>', '<div class="col-lg-5" >#leftStyleColumn#</div><div class="col-lg-1"></div><div class="col-lg-5" >#rightStyleColumn#</div>', '<div class="col-lg-3" >#leftStyleColumn#</div><div class="col-lg-1"></div><div class="col-lg-3">#rightStyleColumn#</div><div class="col-lg-1"></div><div class="col-lg-3">#leftStyleColumn#</div>'],
    'leftStyleColumn': ['#sections# #sections# #sections#'],
    'rightStyleColumn': ['#sections#<div class=\"vertSpacer\"></div>#sections#<div class=\"vertSpacer\"></div>#sections#<div class=\"vertSpacer\"></div>#sections#<div class=\"vertSpacer\"></div>#sections#'],
    'sections': ['#classButton#', '#holds#', '#toDo#', '#enrollment#', '#records#', '#academics#', '#personalInfo#', '#finances#'],
    'classButton': ['<div id=\"classButton\"><div class=\"border\"><h5 class=\"button\">SEARCH FOR CLASSES</h5></div></div><div class=\"vertSpacer\"></div>'],
    'holds': ['<div id=\"holds\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Holds</th><th class=\"box\"></th></tr><tr class=\"boxHold\"><td class=\"box\">No Holds</td><td class=\"box\"></td></tr></table></div>'],
    'toDo': ['<div id=\"toDo\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">To Do List</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxLink\">Authorization to Release Info</td><td class=\"box\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxSpacer\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxEnder\">more<img src=\"arrow3.png\"></td></tr></table></div>'],
    'enrollment': ['<div id=\"enrollment\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Enrollment Dates</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxDescriptor\">Enrollment Appointment</td><td class=\"box\"></td></tr><tr class=\"box\"><td class=\"box\">You may begin enrolling for the 2018 Winter Quarter Regular Academic Session session on November 27, 2017</td>    <td class=\"boxSpacer\"></td></tr><tr class=\"box\"><td class=\"boxSpacer\"></td><td class=\"boxEnder\">details<img src=\"arrow3.png\"></td></tr></table></div>'],
    'records': ['<div id=\"records\"><table class=\"schedule\"><tr class=\"notSchedule\"><th class=\"box\"><img src=\"arrow.png\">Student Records and Enrollment</th><th class=\"box\"></th></tr><tr class=\"box\"><td class=\"boxLink\">California Voter Registration</td><td class=\"box\"></td></tr></table></div>'],

    'academics': ['<div class=\"row\" id=\"academics\"><div class=\"col-lg-12\" id=\"box\"><h4 class=\"box\"><img src=\"arrow.png\">Academics</h4>#academicsColumns#</div></div>'],
    'academicsContent': ['#academicsLinks#', '<div class=\"vertSpacer\"></div>', '<div class=\"row\"><div class=\"col-lg-8\"><div class=\"row\" id=\"dropdown\"><div class=\"col-lg-9\"><p class=\"box\">more links...</p></div><div class=\"col-lg-1\"><img class=\"arrow2\" src=\"arrow2.png\"></div></div></div><div class=\"col-lg-1\"><img src=\"go.png\"></div></div>', '<div class=\"row\" id=\"dropdown\"><div class=\"col-lg-4\"><p>#academicsImg##academicsImgLabel#</p></div><div class=\"col-lg-3\"><p>#academicsImg##academicsImgLabel#</p></div></div>', '<h5 class=\"box\">This Week\'s Schedule</h5>', '<table class=\"schedule\"><tr class=\"schedule\"><th class=\"schedule\"></th><th class=\"schedule\">Class</th><th class=\"schedule\">Schedule</th></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr><tr class=\"schedule\"><td class=\"schedule\">#academicsImg#</td><td class=\"schedule\">#academicsClasses#</td><td class=\"schedule\">#academicSched#</td></tr></table>', '<p class=\"ender\">weekly schedule<img src=\"arrow3.png\"></p>', '<p class=\"ender\">enrollment schedule<img src=\"arrow3.png\"></p>'],
    'academicsContentAmount': ['#academicsContent# #academicsContent# #academicsContent#', '#academicsContent# #academicsContent# #academicsContent# #academicsContent#'],
    'academicsColumns': ['<div class=\"col-lg-4\">#academicsContentAmount#</div><div class=\"col-lg-8\">#academicsContentAmount#</div>', '<div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-10\">#academicsContentAmount#</div>', '<div class=\"col-lg-6\">#academicsContentAmount#</div><div class=\"col-lg-6\">#academicsContentAmount#</div>', '<div class=\"col-lg-10\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div>', '<div class=\"col-lg-8\">#academicsContentAmount#</div><div class=\"col-lg-4\">#academicsContentAmount#</div>', '<div class=\"col-lg-4\">#academicsContentAmount#</div><div class=\"col-lg-4\">#academicsContentAmount#</div><div class=\"col-lg-4\">#academicsContentAmount#</div>', '<div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div>', '<div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div><div class=\"col-lg-3\">#academicsContentAmount#</div>', '<div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div><div class=\"col-lg-2\">#academicsContentAmount#</div>'],
    'academicsLinks': ['<div class=\"links\">#academicsLink# #academicsLink# #academicsLink# #academicsLink# #academicsLink# #academicsLink#</div>'],
    'academicsLinkContent': ['Search', 'Plan', 'Enroll', 'Grades', 'My Academics', 'My Scheduler'],
    'academicsLink': ['<p class=\"link\">#academicsLinkContent#</p>', '<p class=\"bigLink\">#academicsLinkContent#</p>'],
    'academicsImg': ['<img src=\"calendar.png\">', '<img src=\"computerBook.png\">'],
    'academicsImgLabel': ['URL', 'Deadlines'],
    'academicsClasses': ['CMPM 148-01 LEC(22864)', 'CMPM 170-01 LEC(22917)', 'CMPM 170-01G DIS(22924)', 'CMPM 179-01 LEC(23812)', 'TIM 198F-01 IND(17347)'],
    'academicSched': ['MoWeFr 4:00 PM - 5:05PM Merrill Acad 102', 'TuTh 3:20 PM - 4:55PM Kresge Clrm 321', 'Fr 10:40 AM - 11:45AM Soc Sci 2 137', 'MoWeFr 2:40 PM - 3:45PM Kresge Clrm 327', 'Room: TBA'],

    'personalInfo': ['<div class=\"row\" id=\"personalInfo\"><div class=\"col-lg-12\" id=\"box\"><h4 class=\"box\"><img src=\"arrow.png\">Personal Information</h4>#personalInfoColumns#</div></div>'],
    'personalInfoContent': ['#personalInfoLinks#', '<div class=\"vertSpacer\"></div>', '<div class=\"row\"><div class=\"col-lg-8\"><div class=\"row\" id=\"dropdown\"><div class=\"col-lg-9\"><p class=\"box\">more links...</p></div><div class=\"col-lg-1\"><img class=\"arrow2\" src=\"arrow2.png\"></div></div></div><div class=\"col-lg-1\"><img src=\"go.png\"></div></div>', '<div class=\"col-lg-8\"><table class=\"notSchedule\"><tr class=\"notSchedule\"><th class=\"notSchedule\">Contact Information</th><th class=\"notSchedule\"></th></tr><tr class=\"notSchedule\"><td class=\"link\">Mailing Address</td><td class=\"link\">Billing Address</td></tr><tr class=\"notSchedule\"><td class=\"notSchedule\">1156 High St, Santa Cruz, CA 95064</td><td class=\"notSchedule\">None</td></tr><tr class=\"notSchedule\"><td class=\"link\">Cell Phone</td><td class=\"link\">Campus Email Address</td></tr><tr class=\"notSchedule\"><td class=\"notSchedule\">None</td><td class=\"notSchedule\">chancellor@ucsc.edu</td></tr></table></div>'],
    'personalInfoContentAmount': ['#personalInfoContent# #personalInfoContent# #personalInfoContent#', '#personalInfoContent# #personalInfoContent# #personalInfoContent# #personalInfoContent#'],
    'personalInfoColumns': ['<div class=\"col-lg-4\">#personalInfoContentAmount#</div><div class=\"col-lg-8\">#personalInfoContentAmount#</div>', '<div class=\"col-lg-8\">#personalInfoContentAmount#</div><div class=\"col-lg-4\">#personalInfoContentAmount#</div>', '<div class=\"col-lg-6\">#personalInfoContentAmount#</div><div class=\"col-lg-6\">#personalInfoContentAmount#</div>', '<div class=\"col-lg-4\">#personalInfoContentAmount#</div><div class=\"col-lg-4\">#personalInfoContentAmount#</div><div class=\"col-lg-4\">#personalInfoContentAmount#</div>'],
    'personalInfoLinks': ['<div class=\"links\">#personalInfoLink# #personalInfoLink# #personalInfoLink# #personalInfoLink# #personalInfoLink# #personalInfoLink#</div>'],
    'personalInfoLink': ['<p class=\"link\">#personalInfoLinkContent#</p>', '<p class=\"bigLink\">#personalInfoLinkContent#</p>'],
    'personalInfoLinkContent': ['Names', 'Private Policy', 'Mailing Address', 'Cell Phone', 'Billing Address', 'Campus Email Address'],

    'finances': ['<div class=\"row\" id=\"finances\"><div class=\"col-lg-12\" id=\"box\"><h4 class=\"box\"><img src=\"arrow.png\">Finances</h4>#financesColumns#</div></div>'],
    'financesContent': ['#financesLinks#', '<div class=\"vertSpacer\"></div>', '<div class=\"row\"><div class=\"col-lg-8\"><div class=\"row\" id=\"dropdown\"><div class=\"col-lg-9\"><p class=\"box\">more links...</p></div><div class=\"col-lg-1\"><img class=\"arrow2\" src=\"arrow2.png\"></div></div></div><div class=\"col-lg-1\"><img src=\"go.png\"></div></div>', '<div class=\"col-lg-8\"><table class=\"notSchedule\"><tr class=\"notSchedule\"><th class=\"notSchedule\">Account Summary</th><th class=\"notSchedule\"></th></tr><tr class=\"notSchedule\"><td class=\"descriptor\">You owe 6,969.69</td><td class=\"link\">View Charges Due Date</td></tr><tr class=\"notSchedule\"><td class=\"vertSpacer\"></td><td class=\"vertSpacer\"></td></tr><tr class=\"notSchedule\"><th>Currency is US Dollars</th><th></th></table></div>'],
    'financesContentAmount': ['#financesContent# #financesContent# #financesContent#', '#financesContent# #financesContent# #financesContent# #financesContent# #financesContent#'],
    'financesColumns': ['<div class=\"col-lg-4\">#financesContentAmount#</div><div class=\"col-lg-8\">#financesContentAmount#</div>', '<div class=\"col-lg-8\">#financesContentAmount#</div><div class=\"col-lg-4\">#financesContentAmount#</div>', '<div class=\"col-lg-4\">#financesContentAmount#</div><div class=\"col-lg-4\">#financesContentAmount#</div><div class=\"col-lg-4\">#financesContentAmount#</div>'],
    'financesLinks': ['<div class=\"links\">#financesLink# #financesLink# #financesLink# #financesLink#</div>'],
    'financesLinkContent': ['Account Inquiry', 'View Financial Aid', 'Accept/Decline Financial Aid', 'Report Other Financial Aid', 'Payment Estimator'],
    'financesLink': ['<p class=\"link\">#financesLinkContent#</p>'],
}

let cssRules = {
    'font-family': ['Impact', '\"Comic Sans MS\"', '\"Lucida Console\"', '\'Gloria Hallelujah\', cursive', '\'Bonbon\', cursive'],
    'text-align': ['left', 'right', 'center', 'justify', 'initial', 'inherit'],
    'properties': ['font-family', 'text-align'],
    'origin': ['font-family text-align color background-color font-size']
}

function htmlRedo() {
    let htmlGrammar = tracery.createGrammar(htmlRules);

    $('#ContentRow').empty();
    $('#ContentRow').append(htmlGrammar.flatten('#origin#'));
}

//should scramble only html section that has class
function htmlRedoSection(sectionClass) {
    let htmlGrammar = tracery.createGrammar(htmlRules);
    $('.' + sectionClass + '').empty();
    let sectionType = "";
    for (let i = 0; i < sectionIDs.length; i++) {
        //console.log(sectionClass+"looking for in "+sectionIDs[i]+": "+sectionIDs[i].search(sectionClass));
        if (sectionClass.search(sectionIDs[i]) != -1) {//sectionIDs[i].length){
            sectionType = sectionIDs[i];
            break;
        }
    }
    $('.' + sectionClass).append(htmlGrammar.flatten('#' + sectionType + '#'));
}

//gives a section a unique class anme
function markSection(sectionID, index) {
    let sections = $('[id=' + sectionID + ']');
    let section = sections[index];
    let newClassName = "" + sectionID + index;
    section.className += " ";
    section.className += newClassName;
    let children = $('.' + newClassName + ' *').addClass(newClassName);
    return newClassName;
}

cssRedo = function (t) {
    let cssGrammar = tracery.createGrammar(cssRules);
    let tags = ["h5", "h4", "p", "h5", "tr", "td", "th",
        "body", "hr", "h4.title", "h4.box", "h5.box", "h5.button", "p.link", "p.bigLink", "p.linkDescriptor", "p.ender",
        "div.links", "div.vertSpacer", "div#dropdown", "div.border", "img.arrow2", "table.schedule", "table.notSchedule",
        "table.box", "tr.schedule", "tr.box", "tr.boxHolder", "th.schedule", "th.notSchedule", "th.box", "td.schedule",
        "td.vertSpacer", "td.descriptor", "td.link", "td.box", "td.boxLink", "td.boxSpacer", "td.boxEnder", "td.boxDescriptor",
        "button#reRollB", "button#academicsB", "button#financesB", "button#personalInfoB", "button#classButtonB", "button#holdsB", "button#toDoB", "button#enrollmentB", "button#recordsB"
    ];
    if (t == "") {
        tags.forEach(function (tag) {
            var toChange = cssGrammar.flatten("#origin#").split(" ");
            for (let i = 0; i < toChange.length; i++) {
                var property = toChange[i];
                if (property == 'color' || property == 'background-color') {
                    $(tag).css(property, randomColor());
                } else if (property == 'font-size') {
                    $(tag).css(property, randomSize());
                } else {
                    $(tag).css(property, cssGrammar.flatten("#" + property + "#"));
                }
            }
        });
    }
    else {
        tags.forEach(function (tag) {
            var toChange = cssGrammar.flatten("#origin#").split(" ");
            for (let i = 0; i < toChange.length; i++) {
                var property = toChange[i];
                if (property == 'color' || property == 'background-color') {
                    $('.' + t + ' ' + tag).css(property, randomColor());
                } else if (property == 'font-size') {
                    $('.' + t + ' ' + tag).css(property, randomSize());
                } else {
                    $('.' + t + ' ' + tag).css(property, cssGrammar.flatten("#" + property + "#"));
                }
            }
        });
    }
}

window.onload = function () {
    document.getElementById("reRollB").addEventListener("click", function () {
        htmlRedo();
        resetButtons();
        cssRedo("");

    })
    resetButtons();
}

//https://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//https://stackoverflow.com/questions/45791859/random-font-size-and-set-a-min-and-max-of-the-character
function randomSize() {
    return Math.floor((Math.random() * 12) + 12) + "px";
}

function resetButtons() {
    let numButtons = 0;
    for (let i = 0; i < buttonIDs.length; i++) {
        //Remove existing buttons
        let buttons = $("[id=" + buttonIDs[i] + "]");
        for (let j = 0; j < buttons.length; j++) {
            buttons.remove();
        }
        //Create new buttons
        if (document.getElementById(sectionIDs[i]) != null) {
            let elements = $("[id=" + sectionIDs[i] + "]");
            numButtons += elements.length;
            for (let j = 0; j < elements.length; j++) {
                if (j == 0) {
                    $('#buttons').append('<button id="' + buttonIDs[i] + '">' + buttonText[i] + '</button>');
                } else {
                    let displayedNum = j + 1;
                    $('#buttons').append('<button id="' + buttonIDs[i] + '">' + buttonText[i] + ' ' + displayedNum + '</button>');
                }
                let buttonsOfType = $('[id="' + buttonIDs[i] + '"]');
                let newClassName = markSection(sectionIDs[i], j);
                buttonsOfType[j].addEventListener("click", function () {
                    htmlRedoSection(newClassName);
                    cssRedo(newClassName);
                });
            }
        }
    }
}

//https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}