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
    const amountBase = parseFloat(amountFixed);
    let safe = 0;
    let deposit = 0;
    let week = 1;
    const totalRows = 55;
    
    if(amountBase)
    {    
        clearContent();
        
        for (let row = 1; row <= totalRows; row++)
        {
            const div = document.createElement('div');
    
            if(tableHeader(row))
            {
                div.setAttribute('class','row bg-success text-white');
            }
            else
            {
                deposit += amountBase;
                safe += deposit;
    
                let classValue = 'row';
                if (row % 2 === 0)
                {
                    classValue = 'row bg-light'
                }
                div.setAttribute('class',classValue);
            }
    
            for(let col = 0 ; col < 3; col++)
            {
                const span = document.createElement('span');
                
                if(tableHeader(row))
                {
                    span.setAttribute('class','col');                
                    span.innerHTML = labelRow(col);
                }
                else
                {
                    span.setAttribute('class','col border');
                    span.innerHTML = valueRow(col, week, deposit, safe);
                }
                
                div.appendChild(span);
            }

            let sectionNumber = selectTable(week);
            const section = document.querySelector(`#section${sectionNumber}`);
            section.appendChild(div);
    
            if(!tableHeader(row))
            {
                week++;
            }
        }
    }
}

/**
 * function clearContet
 */
function clearContent () 
{
    for (let clearSection = 1 ; clearSection < 4 ; clearSection++) 
    {
        document.getElementById(`section${clearSection}`).innerHTML = '';
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
 * @param int row
 * @return int
*/
function tableHeader(row)
{
    return row == 1 || row == 19 || row == 37;
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
