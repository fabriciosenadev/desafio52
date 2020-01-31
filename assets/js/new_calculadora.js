let btnCalculate = document.querySelector('#calculate');
let inputAmount = document.querySelector('#amount');
let showResult = document.querySelector('#showResult');

btnCalculate.addEventListener("click", calcular);

function calcular () 
{
    console.log(showResult.childNodes.length);
    let amount = parseFloat(inputAmount.value);
    let deposit = 0;
    let safe = 0;

    let column1 = document.createElement('div');
    if(showResult.childNodes.length > 3) {
        showResult.removeChild(showResult.childNodes[3]);
    } 
    showResult.appendChild(column1);
    column1.className = 'col-md';

    let table = document.createElement('table');
    table.setAttribute('border', '1');

    let tbody = document.createElement('tbody');


    for (let week = 0; week <= 52; week++)
    {
        // adiciona coluna por coluna
        var tr = document.createElement('tr');

        for (let count = 0; count < 3; count++)
        {
            if (week == 0) {

                var th = document.createElement('th');
                switch (count){
                    case 0: 
                        th.innerHTML = 'semana';
                        break;
                    case 1: 
                        th.innerHTML = 'valor depositar';
                        break;
                    case 2: 
                        th.innerHTML = 'valor guardado';
                        break;
                }
                
                tr.appendChild(th);

            } else {

                var td = document.createElement('td');
                switch (count){
                    case 0: 
                        td.innerHTML = week;
                        break;
                    case 1: 
                        td.innerHTML = deposit += amount;
                        break;
                    case 2: 
                        td.innerHTML = safe += deposit;
                        break;
                }
                
                tr.appendChild(td);   
            }
        }
        
        tbody.appendChild(tr);
    }
    
    // table.appendChild(thead);
    table.appendChild(tbody);
    column1.appendChild(table);
    
}