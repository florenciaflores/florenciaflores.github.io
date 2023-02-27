
const bienvenidos = document.querySelector(".bienvenidos-texto")


let writing = str => {
    let arrFromStr = str.split('');
    let i= 0;
    let printStr = setInterval(function(){
        bienvenidos.innerHTML += arrFromStr[i];
        i++;

        if(i === arrFromStr.length) {
            bienvenidos.innerHTML = "";
            i=0;

        }

    },300);

};
writing('Bienvenidos            ');