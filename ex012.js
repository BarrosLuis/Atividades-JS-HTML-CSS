var agora = new Date()
var hora = agora.getHours
console.log (`Agora são exatamente ${hora} horas. `)
if (hora => 06 && hora <= 12) {
    console.log ("Bom dia!")
} else if (hora <= 18 && hora <00) {
    console.log ("Boa tarde!")
} else if (hora >18 && hora <00) {
    console.log ("Boa noite!")
} else if (hora >00 && hora <=05) {
    console.log ("Boa madrugada!")
}