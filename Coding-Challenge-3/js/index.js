logger = []
let input = document.getElementById('user');
let log = document.getElementsByClassName('seccionComments ');
let comm = document.getElementById('userComment');


function addElement(){

    let addCom = document.querySelector('.submitBut');
    let cheers= "";
    addCom.addEventListener('click',(event) =>{
        console.log(input.value, comm.value);
        if(input.value != "" & comm.value != ""){
            
            let push = input.value + " " + comm.value;
            logger.push(push)
            for(let i = 0; i < logger.length; i++){
                cheers = cheers.concat(logger[i] + "\n");
            }
        }
    });




}

function init(){
    addElement();

}