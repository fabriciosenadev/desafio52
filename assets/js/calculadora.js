const btnCalculate = document.querySelector('#calculate');
var amount = document.querySelector("#amount");
// var table = "";

btnCalculate.addEventListener('click', calculate);

/**
 * Function calculate
 */
function calculate(){
    
    let amountFixed = amount.value.replace(",",".");
    let amountBase = parseFloat(amountFixed);
    let safe = deposit = 0;
    let week = 1;
    let totalWeeks = 52;
    
    if(amountBase){
        
        clearContent();
        
        for(let counter = 1; counter <= 55; counter++) 
        {
            
            let htmlTable = selectTable(week);            
            let table = document.querySelector(`#${htmlTable}`);
            table.setAttribute('border', '1');
            
            let tbody = document.createElement('tbody');

            var tr = document.createElement('tr');
            
            deposit += amountBase;
            safe += deposit;
            if (counter == 1 || counter == 19 || counter == 37) {
                deposit -= amountBase;
                safe -= deposit;

            }

            for (let count = 0; count < 3; count++)
            {
                if (counter == 1 || counter == 19 || counter == 37) {
                    let th = document.createElement('th');
                    
                    switch (count)
                    {
                        case 0:
                            th.innerHTML = 'Semana';
                            break;
                        case 1:
                            th.innerHTML = "Depositar";
                            break;
                        case 2:
                            th.innerHTML = "Guardado";
                            break;
                    }
                    
                    tr.appendChild(th);

                } else {
                    
                    let td = document.createElement('td');
                    
                    switch (count)
                    {
                        case 0:
                            td.innerHTML = week;
                            break;
                        case 1:
                            td.innerHTML = deposit.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
                            // td.innerHTML = deposit.toFixed(2);
                            break;
                        case 2:
                            td.innerHTML = safe.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
                            break;                                    
                    }
                    
                    tr.appendChild(td);
                
                }
            }   
            tbody.appendChild(tr);
            table.appendChild(tbody);

            if(counter > 1) {
                week++;
                counter == 19 || counter == 37 ? week--: null;
            }
        }
        
    }

}

/**
 * function clearContet
 * @param {string} content 
 * TODO: need to fix the clear
 */
function clearContent (content) {
    var clearTable = 1;
    
    if(content || content == undefined){
        content = "";
    }

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

        document.getElementById(htmlTable).innerHTML = content;
        clearTable++;
        
    }
}

/**
 * function selectTable
 * @param {string} week 
 */
function selectTable (week) {
    let table;

    if (week <= 17) {
        table = "table1";
    }else if (week <= 34) {
        table = "table2";
    } else {
        table = "table3";
    }
    
    return table;
}





