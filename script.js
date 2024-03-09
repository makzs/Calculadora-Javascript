const output = document.getElementById("output");

let valores = [];
let cont = 0;
let i = 0


function input(vlr)
{

    if (cont == 0)
    {
        valores[i] = vlr;
        output.innerHTML = (valores[i]);
        cont++;
    }
    else{
        
        if (vlr >= 0){
            valores[i] = valores[i] + "" + vlr;
            output.innerHTML = (valores[i]);
        }
        else if (vlr == '.')
        {
            valores[i] = valores[i] + "" + vlr;
            output.innerHTML = (valores[i]);
        }
        else if (vlr == '+')
        {
            valores[i+1] = valores[i] + "+";
            i++;
            output.innerHTML = (valores[i]);
        }
        else if (vlr == '-')
        {
            valores[i+1] = valores[i] + "-";
            i++;
            output.innerHTML = (valores[i]);
        }
        else if (vlr == '*')
        {
            valores[i+1] = valores[i] + "*";
            i++;
            output.innerHTML = (valores[i]);
        }
        else if (vlr == '/')
        {
            valores[i+1] = valores[i] + "/";
            i++;
            output.innerHTML = (valores[i]);
        }
    }
}

function calculation()
{
    let resultado = eval(valores[i]);
    valores[i] = resultado
    output.innerHTML = (resultado);
}

function backspace()
{
    valores[i] = 0;
    output.innerHTML = (0);
}