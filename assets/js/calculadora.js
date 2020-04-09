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
    const totalLines = 55;
    
    if(amountBase)
    {    
        clearContent();
        
        for(let line = 1; line <= totalLines; line++) 
        {            
            // TODO: need to separate this section to another function
            if (!tableHeader(line)) 
            {
                deposit += amountBase;
                safe += deposit;
            }
            // end section
            
            const tr = document.createElement('tr');

            for (let row = 0; row < 3; row++)
            {
                if (tableHeader(line)) 
                {
                    let th = document.createElement('th');
                    th.setAttribute('class','thead');
                    th.innerHTML = labelRow(row);

                    tr.appendChild(th);

                    continue;
                } 

                const td = document.createElement('td');
                    
                td.innerHTML = valueRow(row, week, deposit, safe);

                tr.appendChild(td);                
            }
            
            let htmlTable = selectTable(week);            
            const table = document.querySelector(`#table${htmlTable}`);
            table.setAttribute('class','table table-bordered');
            
            const tbody = document.createElement('tbody');

            tbody.appendChild(tr);
            table.appendChild(tbody);

            if(line > 1) 
            {
                week++;
                line == 19 || line == 37 ? week--: null;
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
 * function tableHeader
 * @param int line
 * @return int
*/
function tableHeader(line)
{
    return line == 1 || line == 19 || line == 37;
}

/**
 * labelRow
 * @param int row
 * @return string
 */
function labelRow(row)
{
    switch (row)
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
 * @param int row
 * @param int week
 * @param float deposit
 * @param float safe
 * @return string
 */
function valueRow(row, week, deposit, safe)
{
    switch (row)
    {
        case 0:
            return week;
        case 1:
            return deposit.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
        case 2:
            return safe.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});     
    }
}
