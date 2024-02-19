
const navBar = [
document.getElementById("homeNav"),
document.getElementById("workXpNav"),
document.getElementById("projectsNav"),
document.getElementById("refEduNav")
]
const page = [
document.getElementById("homePage"),
document.getElementById("workXpPage"),
document.getElementById("examplePage"),
document.getElementById("eduRefPage")
]
//ini set all pages to 0 opac and bottom bar to 0
//then set up onclick function for site navigation
for (let i=0; i < navBar.length; i++){
    page[i].style.opacity = 0.0
    navBar[i].style.borderBottom = "0px solid #ffffff"
    page[i].style.scale = "0%"
    page[i].style.top = "-50%"
    navBar[i].onclick = function(){displayPage({newPage:i})};
}
//then set home page visable
page[0].style.opacity = 1.0
navBar[0].style.borderBottom = "6px solid #ffffff"
page[0].style.scale = "100%"
page[0].style.top = "0%"



//site nav function
//sets all pages to invisable
//then sets selected page to visable
//then runs page speciffic script
function displayPage({newPage = 0}){
    clearInterval(ehh)
    if(newPage === 2){
    start()
    //Reset Projects page values to default when naved to
    }

    scroll(0,0)
    for (let i=0; i < navBar.length; i++){
        page[i].style.opacity = 0.0
        navBar[i].style.borderBottom = "0px solid #ffffff"
        page[i].style.scale = "0%"
        page[i].style.top = "-50%"
        //setting scale and top these values 0% and -50%
        //moves page out of the away to correct
        //over scrolling
    }
    page[newPage].style.opacity = 1.0
    navBar[newPage].style.borderBottom = "6px solid #ffffff"
    page[newPage].style.scale = "100%"
    page[newPage].style.top = "0%"
}
