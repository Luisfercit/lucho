/** 
 * bucles,o estructuras de repeticion
 * permite repetir un codigo n de veces
 * 



for(let index =0; index < 10; index++){
    console.log( `esta es la vuelta ${index}`);
    console.log('esta es la vuelta'+ index);
}
    */
let index = 0;
//while( index < 10){
  //  console.log('esta es la vuelta ' + index );
    //index++
//}
/*do{
    console.log('esta es la vuelta ' + index );
    index++  
}while(index <10)*/

let estado = true
while(estado){
    let edad = prompt( 'ingrese su edad :')
    let opcion =prompt('selecione:\n1 -continuar\n2 -finalizar')
    if(opcion === '2'){
        estado = false
    }
}