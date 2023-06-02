

function formChange(value) {
    var element = document.getElementById('form1');
    var element1 = document.getElementById('form2');
    var element2 = document.getElementById('form3');
    switch (value) {
        case '0':
            element.style.display = 'none';
            element1.style.display = 'none';
            element2.style.display = 'none';
            break;
        case '1':
            element.style.display = 'initial';
            element1.style.display = 'none';
            element2.style.display = 'none';
            controlarConversor(value, document.getElementById('opcionCalcular').value)

            break;
        case '2':
            element.style.display = 'none';
            element1.style.display = 'initial';
            element2.style.display = 'none';
            controlarConversor(value, document.getElementById('opcionConversor').value);
            break;

        default:
            if (value == '5' | value == '6') {
                document.getElementById('selectFinal').style.display = 'initial';
                document.getElementById('anticipada').style.display = 'initial';
                document.getElementById('anualidadvalor').style.display = 'initial';
                document.getElementById('TPanualidad').style.display = 'none';
                var selectOption = (value == 5) ? 'Valor Futuro' : 'Valor Presente';
                $("#textoAnualidad").text(selectOption);
                controlarConversor(value, document.getElementById('opcionAnualidad').value);

                $('#labelValor').text(selectOption)

            } else {

                document.getElementById('selectFinal').style.display = 'none';
                document.getElementById('TPanualidad').style.display = 'initial';
                document.getElementById('anualidadvalor').style.display = 'none';
                document.getElementById('anticipada').style.display = 'none';
                $('#labelValor').text((value == '3') ? 'Valor de deuda' : 'Valor para ahorrar')


            }
            element2.style.display = 'initial';
            element.style.display = 'none';
            element1.style.display = 'none';
            break;

    }
}
function validar(key) {
    var out = '';
    var filtro = '1234567890';

    for (var i = 0; i < filtro.length; i++)
        if (key.key == filtro.charAt(i) || key.key == '.')
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
    return i;

}
function ValorFuturo(p, n, i) {
    return p * (Math.pow((1 + i), n));
}
function ValorPresente(s, n, i) {
    return s / (Math.pow((1 + i), n));
}
function TiempoTasa(s, p, i) {
    return ((Math.log((s / p)) / Math.log(1 + i)));
}
function calcularInteres(s, p, n) {
    return (Math.pow((s / p), (1 / n)) - 1);
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
function auxConvInteres(ti1, i1, n1, n2) {
    var interes = 0;
    switch (ti1) {
        case 'efectivo':
            interes = calcularInteresConvertir(i1, n1, n2);
            break;
        case 'nominal':
            interes = nominaltoefectiva(i1, n1);
            break;
        case 'nominal_anticipado':
            interes = nominaltoefectiva(i1, n1);
            interes = interesAnticipado(interes);
            break;
    }
    interes = convertirInteres(interes, n2, ti1);
    return interes;
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
        interes = auxConvInteres(ti1, i1, n1, n2);

        interes = interes * 100;
        document.getElementById('i2').value = interes.toFixed(2);
        console.log(interes);
    }
}
function controlarConversor(form, value) {
    ActivarInputs();
    switch (form) {
        case '1':

            switch (value) {
                case '1':
                    document.getElementById('i').disabled = true;
                    document.getElementById('i').style.border = '2px solid blue';

                    break;
                case '2':
                    document.getElementById('n').disabled = true;
                    document.getElementById('n').style.border = '2px solid blue';

                    break;
                case '3':
                    document.getElementById('P').disabled = true;
                    document.getElementById('P').style.border = '2px solid blue';

                    break;
                case '4':
                    document.getElementById('s').disabled = true;
                    document.getElementById('s').style.border = '2px solid blue';

                    break;
                default:
                    document.getElementById('i').disabled = true;
                    document.getElementById('n').disabled = true;
                    document.getElementById('s').disabled = true;
                    document.getElementById('P').disabled = true;

                    break;
            }
            break;
        case '2':
            switch (value) {
                case '1':
                    document.getElementById('i2').disabled = true;
                    document.getElementById('i2').style.border = '2px solid blue';


                    break;
                case '2':
                    document.getElementById('n2').disabled = true;
                    document.getElementById('n2').style.border = '2px solid blue';
                    break;
                default:
                    document.getElementById('i1').disabled = true;
                    document.getElementById('i2').disabled = true;
                    document.getElementById('TipoInteres1').disabled = true;
                    document.getElementById('TipoInteres2').disabled = true;
                    document.getElementById('n1').disabled = true;
                    document.getElementById('n2').disabled = true;
                    break;
            }
            break;
        default:
            if (form == '5' | form == '6') {
                switch (value) {
                    case '1':
                        document.getElementById('AnualidadTabla').disabled = true;
                        document.getElementById('AnualidadTabla').style.border = '2px solid blue';

                        break;
                    case '2':
                        document.getElementById('nTabla').disabled = true;
                        document.getElementById('nTabla').style.border = '2px solid blue';

                        break;
                    case '3':
                        document.getElementById('iTabla').disabled = true;
                        document.getElementById('iTabla').style.border = '2px solid blue';

                        break;
                    case '4':
                        document.getElementById('ValorTabla').disabled = true;
                        document.getElementById('ValorTabla').style.border = '2px solid blue';

                        break;
                    default:
                        document.getElementById('ValorTabla').disabled = true;
                        document.getElementById('iTabla').disabled = true;
                        document.getElementById('nTabla').disabled = true;
                        document.getElementById('n2Tabla').disabled = true;
                        document.getElementById('AnualidadTabla').disabled = true;

                        document.getElementById('tiempointeresTabla').disabled = true;
                        document.getElementById('TipoInteresesTabla').disabled = true;

                        break;


                }
            }
            break;
    }
}
function ActivarInputs() {


    var forms = this.document.getElementsByTagName("input");
    for (var i = 0; i < forms.length; i++) {
        forms[i].disabled = false;
        forms[i].style.border = '0px';
    }

    var select_op = this.document.getElementsByTagName("select");
    for (var i = 0; i < select_op.length; i++) {
        if (select_op[i].id != "opcionForm" | select_op[i].id != "opcionAnualidad " | select_op[i].id != "opcionCalcular" | select_op[i].id != "opcionConversor") {
            select_op[i].disabled = false;
        }
    }
}

function Cuotaanualidad(valor, interes, tiempo, anticipada, SoP) {
    var cuota = 0;
    if (SoP) {
        cuota = (valor * interes) / (1 - Math.pow((1 + interes), -tiempo));
    } else {
        cuota = (valor * interes) / (Math.pow((1 + interes), tiempo) - 1);
    }
    if (anticipada) {
        cuota = cuota / (1 + interes);
    }
    return cuota;
}
function ValorAnualidad(anualidad, interes, tiempo, anticipada, SoP) {
    var final = 0;
    if (SoP) {
        final = anualidad * ((1 - Math.pow((1 + interes), -tiempo)) / interes);
    } else {
        final = (anualidad) * ((Math.pow((1 + interes), tiempo) - 1) / interes);
    }
    if (anticipada) {
        final = final * (1 + interes);
    }
    return final;
}
function TiempoAnualidad(anualidad, interes, valor, SoP) {
    var Tiempo = 0;
    if (SoP) {
        Tiempo = "no se calcula"
    } else {
        Tiempo = (Math.log((valor * interes / anualidad) + 1)) / (Math.log(1 + interes));
    }
    return Tiempo;
}

function validarcampos() {
    var element = document.getElementById('opcionForm').value;
    switch (element) {
        case '1':
            var tipiI = document.getElementById('TipoIntereses').value;
            var tiempoI = document.getElementById('tiempointeres').value;
            var nI = document.getElementById('n').value;
            var p = document.getElementById('P').value;
            var s = document.getElementById('s').value;
            var interesCalcular = document.getElementById('i').value;
            var intereses = Number(interesCalcular) / 100;
            if (tipiI == "" | tiempoI == "") {
                alert('Ingrese todos los campos')
            } else {
                switch (document.getElementById('opcionCalcular').value) {
                    case '1':
                        if (nI == "" | s == "" | p == "") {
                            alert('Ingrese todos los campos')
                        } else {
                            document.getElementById('i').value = calcularInteres(Number(s), Number(p), Number(nI)) * 100;

                        }
                        break;
                    case '2':
                        if (interesCalcular == "" | s == "" | p == "") {
                            alert('Ingrese todos los campos')
                        } else {
                            document.getElementById('n').value = TiempoTasa(Number(s), Number(p), intereses);
                        }
                        break;
                    case '3':
                        if (interesCalcular == "" | s == "" | nI == "") {
                            alert('Ingrese todos los campos')
                        } else {
                            document.getElementById('P').value = ValorPresente(Number(s), Number(nI), intereses)
                        }
                        break;
                    case '4':

                        if (interesCalcular == "" | nI == "" | p == "") {
                            alert('Ingrese todos los campos')
                        } else {
                            document.getElementById('s').value = ValorFuturo(Number(p), Number(nI), intereses)
                        }
                        break;
                }
            }
            break;
        case '2':
            if (document.getElementById('i1').value == "" | document.getElementById('TipoInteres1').value == ""
                | document.getElementById('TipoInteres2').value == "" | document.getElementById('n1').value == ""
            ) {
                alert('Ingrese todos los campos')
            } else {
                switch (document.getElementById('opcionConversor').value) {
                    case '1':
                        if (document.getElementById('n2').value == "") {
                            alert('Ingrese todos los campos')
                        } else {
                            Convertir(true)
                        }
                        break;
                    case '2':
                        if (document.getElementById('i2').value == "") {
                            alert('Ingrese todos los campos')
                        } else {
                            Convertir(false)
                        }


                }

            }
            break;
        default:
            var data = {
                tipoPago: Number(document.getElementById('n2Tabla').value),
                valorIteracion: 0,
                interesValor: 0,
                final: 0,
                cuota: 0,
                anualidad: Number(document.getElementById('AnualidadTabla').value),
                anticipada: (document.getElementById('Anticipada').checked == true) ? true : false,
                dataForm: element,
                tipoForm: (element == '3') ? true : false,
                i: Number(document.getElementById('iTabla').value),
                TipoInteres: document.getElementById('TipoInteresesTabla').value,
                iteraciones: Number(document.getElementById('nTabla').value),
                TiempoInteres: Number(document.getElementById('tiempointeresTabla').value),
                Valor: Number(document.getElementById('ValorTabla').value),
            }
            if (element == '5' | element == '6') {
                if (data.TipoInteres == "" | data.TiempoInteres == "") {
                    alert('Ingrese todos los campos')
                } else {
                data.tipoForm = (element != '5') ? true : false;
                    data.i = data.i / 100;
                    if (data.TipoInteres == 'nominal' | data.TipoInteres == 'nominal_anticipado') {
                        data.i = nominaltoefectiva(data.i, data.TiempoInteres);
                        if (data.TipoInteres == 'nominal_anticipado') {
                            data.i = interesAnticipado(data.i);
                        }
                    }

                    switch (document.getElementById('opcionAnualidad').value) {

                        case '1':
                            if (data.Valor == "" | data.iteraciones == "" | data.i == "") {
                                alert('Ingrese todos los campos')
                            } else {
                                document.getElementById('AnualidadTabla').value = Cuotaanualidad(data.Valor, data.i, data.iteraciones, data.anticipada, data.tipoForm).toFixed(2) + '';

                            }
                            break;
                        case '2':
                            if (data.Valor == "" | data.anualidad == "" | data.i == "") {
                                alert('Ingrese todos los campos')
                            } else {
                                document.getElementById('nTabla').value = TiempoAnualidad(data.anualidad, data.i, data.Valor, data.tipoForm).toFixed(2) + '';
                            }
                            break;
                        case '4':

                            if (data.anualidad == "" | data.iteraciones == "" | data.i == "") {
                                alert('Ingrese todos los campos')
                            } else {
                                document.getElementById('ValorTabla').value = ValorAnualidad(data.anualidad, data.i, data.iteraciones, data.anticipada, data.tipoForm).toFixed(2) + '';
                            }
                            break;
                    }


                }
            } else {

                if (data.i == "" | data.Valor == ""
                    | data.TipoInteres == "" | data.TiempoInteres == "") {
                    alert('Ingrese todos los campos')
                } else {
                    var tablahtml = '<table><thead><tr><th>#</th><th>Saldo</th><th>Interes</th><th>Cuota</th><th>Amortización</th></tr></thead><tbody>';
                    data.i = data.i / 100;
                    if (data.TipoInteres == 'nominal' | data.TipoInteres == 'nominal_anticipado') {
                        data.i = nominaltoefectiva(data.i, data.TiempoInteres);
                        if (data.TipoInteres == 'nominal_anticipado') {
                            data.i = interesAnticipado(data.i);
                        }
                    }
                    data.i = calcularInteresConvertir(data.i, data.TiempoInteres, data.tipoPago);
                    var i = 0;

                    data.cuota = Cuotaanualidad(data.Valor, data.i, data.iteraciones, data.anticipada, data.tipoForm);
                    if (element == '3') {
                        data.iteraciones++;
                        data.valorIteracion = data.Valor;
                    }
                    for (i = 0; i < data.iteraciones; i++) {
                        data = calcularIteracion(data, i);
                        tablahtml += '<tr><th>' + ((element == '3') ? i : i + 1) + '</th><th>' + data.valorIteracion.toFixed(2) + '</th><th>' + data.interesValor.toFixed(2) + '</th><th>' + data.cuota.toFixed(2) + '</th><th>' + data.final.toFixed(2) + '</th></tr>'
                    }
                    tablahtml += '</tbody></table>';
                    document.getElementById('tablaValores').innerHTML = tablahtml;


                }
            }
            break;
    }
}

function calcularIteracion(data, i) {
    if (data.dataForm == '3') {
        data.interesValor = data.valorIteracion * data.i;
        if (i != 0) {
            data.final = data.cuota - data.interesValor;
            data.valorIteracion = data.valorIteracion - data.final;
        }

    } else {
        data.interesValor = data.valorIteracion * data.i;
        data.final = data.cuota + data.interesValor;
        data.valorIteracion = data.valorIteracion + data.final;

    }
    return data;
}

function limpiarCampos() {
    var forms = this.document.getElementsByTagName("input");
    for (var i = 0; i < forms.length; i++) {
        forms[i].value = '';
    }
    var select_op = this.document.getElementsByTagName("select");
    for (var i = 0; i < select_op.length; i++) {
        if (select_op[i].id != "opcionForm") {
            select_op[i].value = '';
        }
    }
    document.getElementById("tablaValores").innerHTML = "";
}
