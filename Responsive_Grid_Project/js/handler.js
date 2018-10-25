
var user = 'ELEAZARMAESTRE', pass= 'Boole_999520_HANA', solo='solo', grupo= 'vticker';

function Parsing(data){
    
    var granjas = data['granjas'], grupos = []
    
    granjas.forEach(element => {
        if(grupos.includes(element["grupo"])){
            //Si existe el grupo
            
            $('#g' + element['grupo'] + '-cod').append('<li>' + element["codigo"] + '</li>')
            $('#g' + element['grupo'] + '-lat').append('<li>' + element["geo1"] + '</li>')
            $('#g' + element['grupo'] + '-lon').append('<li>' + element["geo2"] + '</li>')
            $('#g' + element['grupo'] + '-nom').append('<li>' + element["nombre"] + '</li>')
            $('#g' + element['grupo'] + '-desc').append('<li>' + element["descripcion"] + '</li>')
            $('#g' + element["grupo"]+'-1, #g' + element["grupo"]+'-2,#g'+ element["grupo"]+'-3, #g'+ element["grupo"]+'-4, #g'+ element["grupo"]+'-5').removeClass('vticker').addClass('vticker')

        }else{
            // Si no existe
            $('.cuadricula').append(
                "<li class='elemento border'>\
                    <div class='elemento-grid'>\
                        <div class='Codigo-Excepcion border campos'>\
                            <div id='g"+ element["grupo"]+"-1'>\
                                <ul id='g"+ element["grupo"] +"-cod' class='lista'>\
                                    <li>" + element["codigo"] + "</li>\
                                </ul>\
                            </div>\
                        </div>\
                        <div class='Numero-de-Grupo border campos'>\
                            "+ element["grupo"] +"\
                        </div>\
                        <div class='Nombre-de-Granja border campos'>\
                            <div id='g"+ element["grupo"]+"-2' class='lista''>\
                                <ul id='g"+ element["grupo"] +"-nom'>\
                                    <li>"+ element["nombre"] +"</li>\
                                </ul>\
                            </div>\
                        </div>\
                        <div class='Latitud border campos'>\
                            <div id='g"+ element["grupo"]+"-3' class='lista'>\
                                <ul id='g"+ element["grupo"] +"-lat'>\
                                    <li>"+ element["geo1"] +"</li>\
                                </ul>\
                            </div>\
                        </div>\
                        <div class='Longitud border campos'>\
                            <div id='g"+ element["grupo"]+"-4' class='lista'>\
                                <ul id='g"+ element["grupo"] +"-lon'>\
                                    <li>"+ element["geo2"] +"</li>\
                                </ul>\
                            </div>\
                        </div>\
                        <div class='Descripcion border campos'>\
                            <div id='g"+ element["grupo"]+"-5' class='lista'>\
                                <ul id='g"+ element["grupo"] +"-desc'>\
                                    <li>"+ element["descripcion"] +"</li>\
                                </ul>\
                            </div>\
                        </div>\
                    </div>\
                </li>"
            )
        }
    
        grupos.push(element["grupo"])  
    });
    
    var dd = $('.vticker').easyTicker({
        direction: 'up',
        easing: 'easeInOutBack',
        speed: 'slow',
        interval: 2000,
        height: 'auto',
        visible: 1,
        mousePause: 0,
        controls: {
            up: '.up',
            down: '.down',
            toggle: '.toggle',
            stopText: 'Stop !!!'
        }
    }).data('easyTicker');
}

$(document).ready(
    function(){

        var example = '\
            {\
                "granjas": \
                    [\
                        {\
                            "codigo": "1234","grupo": "0","geo1": "9.456667","geo2": "-67.48694444","nombre": "Granja 1","descripcion": "Robo de Alimento","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                            "codigo": "5678","grupo": "0","geo1": "9.650587","geo2": "-66.785249","nombre": "Granja 2","descripcion": "Temperatura Elevada","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                            "codigo": "3320","grupo": "1","geo1": "10.650587","geo2": "-68.785249","nombre": "Granja 3","descripcion": "Robo de Alimento","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2232","grupo": "2","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 4","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2332","grupo": "3","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 5","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2432","grupo": "2","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 6","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2532","grupo": "5","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 7","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2432","grupo": "2","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 8","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2545","grupo": "5","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 9","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2435","grupo": "6","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 10","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2536","grupo": "7","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 11","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2222","grupo": "8","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 12","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "3333","grupo": "8","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 13","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "4444","grupo": "9","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 14","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        },\
                        {\
                        "codigo": "2532","grupo": "1","geo1": "11.650587","geo2": "-65.785249","nombre": "Granja 15","descripcion": "Temperatura Baja","coordinates": "09°27´24´´N 68°30´47´´W"\
                        }\
                    ]\
            }';
       
        Parsing(JSON.parse(example))
       
    }
   
    // function(){
    //     var myVar = setInterval(myTimer, 5000);
    //     var previousData = ''
    //     var currentData = ''
    //     function myTimer() {
    //         console.log("--------------" + previousData + "---------------")
    //         console.log("--------------" + currentData + "----------------")
    //         // Peticion Ajax
    //         $.ajax({
    //             type: "GET",
    //             xhrFields: {
    //                 withCredentials: true
    //             },
    //             dataType: "json",
    //             contentType: "application/x-www-form-urlencoded;charset=utf8",
    //             data: "",
            
    //             crossDomain: true,
    //             username: user,
    //             password: pass,
    //             url: "https://ir7b164b04a7.us1.hana.ondemand.com/COIL_DEV/DigitalMap/Services/DigitalMapService.xsjs",
    //             success: function (jsonData) { 
    //                 if(previousData == ''){
    //                     //alert('1')
    //                     previousData = JSON.stringify(jsonData['farms'])
    //                     Parsing(jsonData)
    //                 }else{
    //                     //alert(1.5)
    //                     currentData = JSON.stringify(jsonData['farms'])
    //                     if(previousData != currentData){
    //                         //alert('2')
    //                         Parsing(jsonData)
    //                         previousData = currentData;
    //                     }
    //                 }   
    //                 console.log("--------------" + previousData + "---------------")
    //                 console.log("--------------" + currentData + "----------------") 
    //             },
    //             error: function (request, textStatus, errorThrown) {
    //                 alert('fail')
    //                 console.log(request.responseText)
    //                 console.log(textStatus)
    //                 console.log(errorThrown)
    //                 return("ERROR");    
    //             }     
    //         })
    //     }
    //}
);

