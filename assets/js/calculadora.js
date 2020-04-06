const btnCalculate = document.querySelector('#calculate');
var amount = document.querySelector("#amount");
// var table = "";

btnCalculate.addEventListener('click', calculate);

/**
 * Function calculate
 */
function calculate()
{    
    let amountFixed = amount.value.replace(",",".");
    let amountBase = parseFloat(amountFixed);
    let safe = 0;
    let deposit = 0;
    let week = 1;
    const totalRows = 55;
    
    if(amountBase)
    {    
        clearContent();
        
        for(let counter = 1; counter <= totalRows; counter++) 
        {            
            let htmlTable = selectTable(week);            
            let table = document.querySelector(`#table${htmlTable}`);
            table.setAttribute('class','table table-bordered');
            
            const tbody = document.createElement('tbody');

            var tr = document.createElement('tr');
            
            // TODO: need to separate this section to another function
            if (verifyCount(counter)) 
            {
                continue;
            }
            else
            {
                deposit += amountBase;
                safe += deposit;
            }
            // end section

            for (let count = 0; count < 3; count++)
            {
                if (verifyCount(counter)) 
                {
                    let th = document.createElement('th');
                    
                    th.innerHTML = labelRow(count);

                    tr.appendChild(th);
                } 
                else 
                {                    
                    let td = document.createElement('td');
                    
                    td.innerHTML = valueRow(count, week, deposit, safe);

                    tr.appendChild(td);                
                }
            }   

            tbody.appendChild(tr);
            table.appendChild(tbody);

            if(counter > 1) 
            {
                week++;
                counter == 19 || counter == 37 ? week--: null;
            }
        }        
    }
}

/**
 * function clearContet
 */
function clearContent () 
{
    for (let clearTable = 1 ; clearTable < 4 ; clearTable++) 
    {
        document.getElementById(`table${clearTable}`).innerHTML = '';
    }
}

/**
 * function selectTable
 * @param string week 
 */
function selectTable (week) 
{
    if (week <= 17) 
    {
        return "1";
    }
    else if (week <= 34) 
    {
        return "2";
    } 
    else 
    {
        return "3";
    }
}

/** 
 * function verifyCount
 * @param int counter
 * @return int
*/
function verifyCount(counter)
{
    return counter == 1 || counter == 19 || counter == 37;
}

/**
 * labelRow
 * @param int count
 * @return string
 */
function labelRow(count)
{
    switch (count)
    {
        case 0:
            return 'Semana';            
        case 1:
            return "Depositar";            
        case 2:
            return "Guardado";
    }
}

/**
 * function valueRow
 * @param int count
 * @param int week
 * @param float deposit
 * @param float safe
 * @return string
 */
function valueRow(count, week, deposit, safe)
{
    switch (count)
    {
        case 0:
            return week;
        case 1:
            return deposit.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
        case 2:
            return safe.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});     
    }
}
