var agora = new Date ()
var hora = agora.getHours ()
console.log(`Agora são ${hora} horas.`)
if ( hora < 12) {
    console.log('Bom dia!')
} else if ( hora <=18) {
        console.log ('Boa Tarde!')
} else { 
        console.log ('Boa Noite!')
    } if (hora >= 24 || hora <= 5){
        console.log('Boa Madrugada')
    }
   