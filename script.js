const copyright = document.getElementById('copyright');

    let START_YEAR = 2021;
    let today = new Date(),
    currentYear = today.getFullYear();
    let result = "&copy;  " + START_YEAR;
    if (currentYear > START_YEAR) {
        result +=  "&ndash;" + currentYear;
    }
    
    
    copyright.innerHTML = result;
   


     