function formChange(value) {
    var element = document.getElementById('form1');
    var element1 = document.getElementById('form2');
    switch (value) {
        case '0':
            element.style.display = 'none';
            element1.style.display = 'none';
            break;
        case '1':
            element.style.display = 'initial';
            element1.style.display = 'none';

            break;
        case '2':
            element.style.display = 'none';
            element1.style.display = 'initial';
             controlarConversor(document.getElementById('opcionConversor').value) ;
            break;
    }
}
function validar(key) {
    var out = '';
    var filtro = '1234567890';

    for (var i = 0; i < filtro.length; i++)
        if (key.key == filtro.charAt(i))
            return true


    return false;
}
function convertirInteres(i, n, ti) {
    switch (ti) {
        case 'efectivo':
            break;

        case 'nominal':
            i = efectivatonominal(i, n);
            break;
        case 'nominal_anticipado':
            i = efectivatonominal(i, n);
            i = interesAnticipado(i);

            break;
    }
    i = i * 100;
    document.getElementById('i2').value = i;
    console.log(i);

}
function interesAnticipado(i) {
    return i / (1 + Number(i));
}
function calcularInteresConvertir(i, n1, n2) {
    return Math.pow((1 + Number(i)), ((12 / n1) / (12 / n2))) - 1;;
}
function efectivatonominal(i, n) {
    return i * (12 / n);
}
function nominaltoefectiva(i, n) {
    return i / (12 / n);
}
function Convertir(a) {

    var i1 = document.getElementById('i1').value;
    var i2 = document.getElementById('i2').value;
    var ti1 = document.getElementById('TipoInteres1').value;
    var ti2 = document.getElementById('TipoInteres2').value;
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    if (a) { //Calcular interes final
        var interes = 0;
        i1 = i1 / 100;
        switch (ti1) {
            case 'efectivo':
                interes = calcularInteresConvertir(i1, n1, n2);
                convertirInteres(interes, n2, ti2);
                break;
            case 'nominal':
                interes = nominaltoefectiva(i1, n1);
                convertirInteres(interes, n2, ti2);
                break;
            case 'nominal_anticipado':
                interes = nominaltoefectiva(i1, n1);
                interes = interesAnticipado(interes);
                convertirInteres(interes, n2, ti2);
                break;
        }
    }
}

function controlarConversor(value) {
    switch (value) {
        case '1':
            ActivarInputs();
            document.getElementById('i2').disabled = true;
            document.getElementById('n2').disabled = false;

            document.getElementById('i2').style.border = '2px solid blue';
            document.getElementById('n2').style.border = '0px';

            break;
        case '2':
            document.getElementById('n2').disabled = true;
            document.getElementById('i2').disabled = false;
            document.getElementById('i2').style.border = '0px';
            document.getElementById('n2').style.border = '2px solid blue';
            break;
        default:
            ActivarInputs();
            document.getElementById('i1').disabled = true;
            document.getElementById('i2').disabled = true;
            document.getElementById('TipoInteres1').disabled = true;
            document.getElementById('TipoInteres2').disabled = true;
            document.getElementById('n1').disabled = true;
            document.getElementById('n2').disabled = true;
            break;
    }
}
function ActivarInputs() {

    document.getElementById('i1').disabled = false;
    document.getElementById('i2').disabled = false;
    document.getElementById('TipoInteres1').disabled = false;
    document.getElementById('TipoInteres2').disabled = false;
    document.getElementById('n1').disabled = false;
    document.getElementById('n2').disabled = false;
}

function validarcampos() {
    switch (document.getElementById('opcionForm').value) {
        case '1':

            break;
        case '2':
            if(document.getElementById('i1').value == "" | document.getElementById('TipoInteres1').value == "" 
            | document.getElementById('TipoInteres2').value == "" | document.getElementById('n1').value == ""  
            ){
                alert('Ingrese todos los campos')
            }
            switch(document.getElementById('opcionConversor').value){
                case '1': 
                if(document.getElementById('n2').value ==""){
                    alert('Ingrese todos los campos')
                }else{
                    Convertir(true)
                }
                break;
                case '2':
                    if(document.getElementById('i2').value ==""){
                        alert('Ingrese todos los campos')
                    }else{
                        Convertir(false)
                    }


            }
            break;
    }
}