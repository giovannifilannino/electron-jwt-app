const jwt = require('angular2-jwt-simple')

let tokenParsed = ''
let token = document.getElementById("tokenTextArea");
let tokenParedArea = document.getElementById("tokenTranslatedTextArea");

function analyze(){
    if(null != token && undefined != token){
        tokenParsed = token.value;
    }

    let decoded = jwt.decode(token.value,'sad',true,'HS512');

    let iat = decoded.iat * 1000;
    let exp = decoded.exp * 1000;

    let dateIat = new Date(iat);
    let dateExp = new Date(exp);

    decoded.iat = convertDate(dateIat);
    decoded.exp = convertDate(dateExp);

    console.log(decoded);

    if(null != decoded && undefined != decoded){
    tokenParedArea.value = JSON.stringify(decoded,null, "\t");
    } else {
        tokenParedArea.value = 'ERRORE PARSING DEL TOKEN';
    }
}

function convertDate(dateIat){
    let hour = dateIat.getUTCHours() + 2;
    return dateIat.getDay() + "-" + dateIat.getMonth() + "-" + dateIat.getFullYear() + "  " + hour + ":" + dateIat.getUTCMinutes() + ":" + dateIat.getUTCSeconds();
}
