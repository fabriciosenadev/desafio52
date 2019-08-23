/**
 * Function calculate
 */
function calculate(){
    
    var amount = document.getElementById("amount").value;
    var amountFixed = amount.replace(",",".");
    var amountBase = parseFloat(amountFixed);
    var table = "";
    var htmlTable;
    var safe = deposit = 0;
    var firstWeek = 1;
    var totalWeeks = 52;
    var clearTable = 1;
    console.log(amountBase);
    // table = clearContent(table);
    
    
    if(amountBase){

        while (clearTable < 4) {

            if (clearTable == 1) {
                htmlTable = "table1";
            }
            if (clearTable == 2) {
                htmlTable = "table2";
            }
            if (clearTable == 3) {
                htmlTable = "table3";
            }

            document.getElementById(htmlTable).innerHTML = table;
            clearTable++;
            
        }
        
        for(week = firstWeek; week <= totalWeeks; week++) {

            htmlTable = selectTable(week);
            
            table = document.getElementById(htmlTable).innerHTML;
            
            deposit += amountBase;
            safe += deposit 
            
            table += "<tr>";
            
            table +=    "<td width='40px'>"+ week +"</td>" + "<td width='60px'>" + deposit.toFixed(2) + "</td> <td width='60px'>" + safe.toFixed(2) +" </td>";
            
            table += "<td>";
            
            document.getElementById(htmlTable).innerHTML = table;
            
        }
        
    }

}

/**
 * function clearContet
 * @param {string} content 
 * TODO: need to fix the clear
 */
function clearContent (content){
    if(content){
        content = "";
    }
    return content;
}

/**
 * function selectTable
 * @param {string} week 
 */
function selectTable (week) {
    var table;

    if (week <= 17) {
        table = "table1";
    }
    if ( (week >= 18) && (week <=34) ) {
        table = "table2";
    }
    if (week >= 35) {
        table = "table3";
    }
    
    return table;
}





