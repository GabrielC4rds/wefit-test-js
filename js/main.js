function changeExibition() {
    //Itens Menu
    let menuItems = document.getElementsByClassName("btn-group-vertical")[0];
    let menuButtonsArray = document.getElementsByClassName("btn btn-secondary")
    menuItems.style.display = "flex";
    menuItems.style.flexDirection = "row";
    menuItems.style.width = "70%";
    for(var i = 0; i < menuButtonsArray.length; i++){
        menuButtonsArray[i].style.borderRadius = "3px";
        menuButtonsArray[i].style.width = "5px";
        menuButtonsArray[i].style.margin = "0 2px";
    }
    document.getElementsByClassName("btn btn-secondary")[0].style.borderRadius = "3px";
    //
    //Mudança no Header
    let headerBanner = document.getElementsByClassName("jumbotron")[0];
    headerBanner.style.background = "#6c757d";
    headerBanner.style.color = "#fff";
    headerBanner.style.display = "flex";
    headerBanner.style.flexDirection = "column";
    headerBanner.style.alignItems = "flex-end";
    headerBanner.style.textAlign = "end";
    document.getElementsByClassName("btn-primary btn-lg")[0].style.background = "green";
    document.getElementsByClassName("btn-primary btn-lg")[0].style.borderColor = "green";
    document.getElementsByClassName("my-4")[0].style.width = "100%"
    // 
    //Mudança nos cards
    let cardsMain = document.getElementsByClassName("row")[2];
    var arrayList = document.getElementsByClassName("col-lg-3");
    document.getElementsByClassName("btn btn-primary")[1].style.background = "green";
    document.getElementsByClassName("btn btn-primary")[1].style.borderColor = "green";
    cardsMain.insertBefore( arrayList[(arrayList.length - 1)],arrayList[0]);
    cardsMain.insertBefore( arrayList[(arrayList.length - 1)],arrayList[2]);
    //
    //Lista de itens
    var newLi = document.createElement("li")
    var content = document.createTextNode("Quarto item")
    var newLi2 = document.createElement("li")
    var content2 = document.createTextNode("Quinto item")
    var listGroup = document.getElementsByClassName("list-group")[0]
    newLi.classList.add("list-group-item")
    newLi.classList.add("active")
    newLi2.classList.add("list-group-item")
    newLi.appendChild(content);
    newLi2.appendChild(content2);
    listGroup.appendChild(newLi);
    listGroup.appendChild(newLi2);
    document.getElementsByClassName("list-group-item")[0].classList.remove("active")
    //
}

changeExibition();