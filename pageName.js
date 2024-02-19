const homePage = document.getElementsByClassName("homeName")
const xpPage = document.getElementsByClassName("xpName")
const projectPage = document.getElementsByClassName("projectName")
const refEduPage = document.getElementsByClassName("refEduName")

//Changes name of page and matching H1 header
namechange({e:homePage,name:"Curriculum Vitae"})
namechange({e:xpPage,name:"Job Experience"})
namechange({e:projectPage,name:"Projects"})
namechange({e:refEduPage,name:"References and Education"})

function namechange({e,name}){
    for(i=0; i<e.length;i++){
        e[i].innerHTML = name
    }
}