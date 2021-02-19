function ShowMusing(file, title) { 
    var page = document.getElementById('page');
    page.src = "./musings/" + file;

    var titleDisplay = document.getElementById('musing-title');
    titleDisplay.innerHTML = title;
} 

function ShowComponent(file, title) { 
    var page = document.getElementById('page');
    page.src = "./musings/components/" + file;

    var titleDisplay = document.getElementById('musing-title');
    titleDisplay.innerHTML = title;
} 