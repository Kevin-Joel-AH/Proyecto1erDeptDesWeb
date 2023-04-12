/*se declaran las constantes para poder obtener los sonidos de: seleccionar personaje,
fondo, al saltar y al obtener puntos, además, se inicializa la canción de fondo.*/
const sonidofondo = document.getElementById("sonidofondo");
const sonidosalto = document.getElementById("sonidosalto");
const sonidopuntos = document.getElementById("sonidopuntos");
const seleccionar = document.getElementById("seleccionar");
const disparo = document.getElementById("disparo");
/*Se le asigna un nombre de variable al elemento con la Id "btn_his"*/
const btn_his = document.getElementById('btn_his');
/*Se le asigna un nombre de variable al elemento con la Id "video"*/
const video = document.getElementById('vid');
/*Se le asigna un nombre de variable al elemento con la Id "fondo"*/
const fondo = document.getElementById('fondo');
/*Se le asigna un nombre de variable al elemento con la Id "personaje"*/
const personaje = document.getElementById('personaje');
/*Se le asigna un nombre de variable a los atributos del div "personaje" antes asignado
Estos campos son:
- Bottom
- Right
- Width*/
let personajeBottom = parseInt(window.getComputedStyle(personaje).getPropertyValue('bottom'));
let personajeRight = parseInt(window.getComputedStyle(personaje).getPropertyValue('right'));
let personajeWidth = parseInt(window.getComputedStyle(personaje).getPropertyValue('width'));
/*Se le asigna un nombre de variable al elemento con la Id "suelo"*/
const suelo = document.getElementById('suelo');
/*Se le asigna un nombre de variable a los atributos del div "suelo" antes asignado
Estos campos son:
- Bottom
- Height*/
let sueloBottom = parseInt(window.getComputedStyle(suelo).getPropertyValue('bottom'));
let sueloHeight = parseInt(window.getComputedStyle(suelo).getPropertyValue('height'));
/*Se le asigna un nombre de variable al elemento con la Id "puntaje"*/
const Puntaje = document.getElementById('puntaje');
/*Se le asigna un nombre de variable al elemento con la Id "credito"*/
const Credito = document.getElementById('credito');
/*Se le asigna un nombre de variable al elemento con la Id "muniText"*/
const muniText = document.getElementById('muniText');
/*Se le asigna un nombre de variable al elemento con la Id "cost"*/
const Cost = document.getElementById('cost');
/*Se le asigna un nombre de variable a los elementos que conformen los diferentes colores de personaje
Estos colores son:
- Verde     - Rojo      - Azul
- Morado    - Cafe      - Naranja
- Rosa      - Blanco    - Negro*/
const verde = document.getElementById('verde');
const rojo = document.getElementById('rojo');
const azul = document.getElementById('azul');
const morado = document.getElementById('morado');
const cafe = document.getElementById('cafe');
const naranja = document.getElementById('naranja');
const rosa = document.getElementById('rosa');
const blanco = document.getElementById('blanco');
const negro = document.getElementById('negro');
/*Se crean dos variables de tipo boleanos.
Serviran para identificar si se encuentra activo
un proceso durante el juego.*/
let Saltando = false;
let Inicio = false;
/*Se crean dos varibles enteras.
Serviran para almacenar el tiempo que el personaje
permanesca arriba o subiendo y el tiempo que el
personaje permanesca abajo o bajando.*/
let tArriba;
let tAbajo;
/*Variable donde se almacenara el puntaje en partida del jugador*/
let score = 0;
/*Variable donde se almacenara la munición en partida del jugador*/
let muni = 0;
/*Se crean 2 variables enteras donde su función es
almacenar el intervalo en el que los puntos y
los enemigos avanzan en partida*/
let interPoi = 11;
let interEne = 13;
/*Se crean 3 variables de tipo String.
Serviran para almacenar los url que se requieran
segun el color que el jugador seleccione*/
let principalPerso = 'url("imagenes/SpartanVerde4.gif")';
let personajeMovimiento = 'url("imagenes/SpartanVerdeM.gif")';
let personajeSalto = 'url("imagenes/SpartanVerdeS.gif")';
/*Se crean 2 variables de tipo String.
Serviran para almacenar los url que se requieran
segun el tipo de enemigo solicitado en partida*/
let EneGrande = 'none';
let EneChico = 'none';
/*Se crea una variable entera que servira
para almacenar un numero aleatorio en partida
que ayudara a determinar que enemigo crear*/
let defineEnemigo = 0;
/*Se crea una variable entera que servira
para almacenar un numero aleatorio en partida
que ayudara a determinar la distancia entre 
cada enemigo creado*/
let randomTOEne = 2000;
/*Se crean variables boleanas que permitiran
identificar si se compraron o no los colores del personaje*/
let RojoEna = false;
//localStorage.setItem('RojoEna');
let AzulEna = false;
//localStorage.setItem('AzulEna');
let MoradoEna = false;
//localStorage.setItem('MoradoEna');
let CafeEna = false;
//localStorage.setItem('CafeEna');
let NaranjaEna = false;
//localStorage.setItem('NaranjaEna');
let RosaEna = false;
//localStorage.setItem('RosaEna');
let BlancoEna = false;
//localStorage.setItem('BlancoEna');
let NegroEna = false;
//localStorage.setItem('NegroEna');
/*Se le asigna al div "personaje" un background-Image de la variable principalPerso*/
personaje.style.backgroundImage = principalPerso;

/*Se crea una variable que almacenará los creditos del jugador,
además se le asignara un almacenamiento dentro de la página que
permitira guardar los creditos incluso si se cierra la pagina.*/
var creditos = 0;

let cerrar;

/*Función que permitira almacenar y cargar el progeso del jugador*/
function Progreso(){
    if(localStorage.getItem('creditos') == null){
        localStorage.setItem('creditos', creditos);
    }
    if(typeof localStorage.getItem('RojoEna') == 'null'){
        localStorage.setItem('RojoEna', RojoEna);
    }
    if(typeof localStorage.getItem('AzulEna') == 'null'){
        localStorage.setItem('AzulEna', AzulEna);
    }
    if(typeof localStorage.getItem('MoradoEna') == 'null'){
        localStorage.setItem('MoradoEna', MoradoEna);
    }
    if(typeof localStorage.getItem('CafeEna') == 'null'){
        localStorage.setItem('CafeEna', CafeEna);
    }
    if(typeof localStorage.getItem('NaranjaEna') == 'null'){
        localStorage.setItem('NaranjaEna', NaranjaEna);
    }
    if(typeof localStorage.getItem('RosaEna') == 'null'){
        localStorage.setItem('RosaEna', RosaEna);
    }
    if(typeof localStorage.getItem('BlancoEna') == 'null'){
        localStorage.setItem('BlancoEna', BlancoEna);
    }
    if(typeof localStorage.getItem('NegroEna') == 'null'){
        localStorage.setItem('NegroEna', NegroEna);
    }
    creditos = parseInt(localStorage.getItem('creditos'));
    RojoEna = !!localStorage.getItem('RojoEna');
    AzulEna = !!localStorage.getItem('AzulEna');
    MoradoEna = !!localStorage.getItem('MoradoEna');
    CafeEna = !!localStorage.getItem('CafeEna');
    NaranjaEna = !!localStorage.getItem('NaranjaEna');
    RosaEna = !!localStorage.getItem('RosaEna');
    BlancoEna = !!localStorage.getItem('BlancoEna');
    NegroEna = !!localStorage.getItem('NegroEna');
    Credito.innerText = creditos;
}
Progreso();
    /*Se le asignan valores segun el color seleccionado a las variables:
    - principalPerso
    - personajeMovimiento
    - personajeSalto
    Luego se le asigna al div "personaje" un
    background-Image de la variable principalPerso
    Existen 9 funciones correspondientes a cada color:*/

/*Botón que uestra el video de la historia del juego*/
btn_his.onclick = function(){
    video.style.width = 50+'%';
    video.style.height = 50+'%';
    video.innerHTML = '<div id="cerrar"></div><iframe width="529" height="361" src="https://www.youtube.com/embed/tqEQhFOG4aY" title="HALO_Juego_JavScript_Historia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    cerrar = document.getElementById('cerrar');
        /*Botón que cierra el video de la historia del juego*/
    cerrar.onclick = function(){
    video.style.width = 0+'%';
    video.style.height = 0+'%';
    video.innerHTML = '';
}
}


/*Función que al clikear sobre el div "verde"
permite seleccionar el color Verde para el personaje*/
verde.onclick = function(){
    Cost.style.color = 'olivedrab';
    //se agrega sonido al seleccionar
    seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
    principalPerso = 'url("imagenes/SpartanVerde4.gif")';
    personajeMovimiento = 'url("imagenes/SpartanVerdeM.gif")';
    personajeSalto = 'url("imagenes/SpartanVerdeS.gif")';
    personaje.style.backgroundImage = principalPerso;
    Cost.innerText = 'Gratis';
}
/*Función que al clikear sobre el div "rojo"
permite seleccionar el color Rojo para el personaje*/
rojo.onclick = function(){
    Cost.style.color = 'darkred';
    Cost.innerText = '2000';
    if(RojoEna == false && creditos>=2000){
        RojoEna = true;
        creditos = creditos - 2000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('RojoEna', RojoEna);
    }
    if(RojoEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanRojo4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanRojoM.gif")';
        personajeSalto = 'url("imagenes/SpartanRojoS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}
/*Función que al clikear sobre el div "azul"
permite seleccionar el color Azul para el personaje*/
azul.onclick = function(){
    Cost.style.color = 'navy';
    Cost.innerText = '2000';
    if(AzulEna == false && creditos>=2000){
        AzulEna = true;
        creditos = creditos - 2000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('AzulEna', AzulEna);
    }
    if(AzulEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanAzul4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanAzulM.gif")';
        personajeSalto = 'url("imagenes/SpartanAzulS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}
/*Función que al clikear sobre el div "morado"
permite seleccionar el color Morado para el personaje*/
morado.onclick = function(){
    Cost.style.color = 'blueviolet';
    Cost.innerText = '2000';
    if(MoradoEna == false && creditos>=2000){
        MoradoEna = true;
        creditos = creditos - 2000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('MoradoEna', MoradoEna);
    }
    if(MoradoEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanMorado4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanMoradoM.gif")';
        personajeSalto = 'url("imagenes/SpartanMoradoS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}
/*Función que al clikear sobre el div "cafe"
permite seleccionar el color Cafe para el personaje*/
cafe.onclick = function(){
    Cost.style.color = 'chocolate';
    Cost.innerText = '2000';
    if(CafeEna == false && creditos>=2000){
        CafeEna = true;
        creditos = creditos - 2000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('CafeEna', CafeEna);
    }
    if(CafeEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanCafe4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanCafeM.gif")';
        personajeSalto = 'url("imagenes/SpartanCafeS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}
/*Función que al clikear sobre el div "naranja"
permite seleccionar el color Naranja para el personaje*/
naranja.onclick = function(){
    Cost.style.color = 'orange';
    Cost.innerText = '5000';
    if(NaranjaEna == false && creditos>=5000){
        NaranjaEna = true;
        creditos = creditos - 5000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('NaranjaEna', NaranjaEna);
    }
    if(NaranjaEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanNaranja4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanNaranjaM.gif")';
        personajeSalto = 'url("imagenes/SpartanNaranjaS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}
/*Función que al clikear sobre el div "rosa"
permite seleccionar el color Rosa para el personaje*/
rosa.onclick = function(){
    Cost.style.color = 'deeppink';
    Cost.innerText = '5000';
    if(RosaEna == false && creditos>=5000){
        RosaEna = true;
        creditos = creditos - 5000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('RosaEna', RosaEna);
    }
    if(RosaEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanRosa4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanRosaM.gif")';
        personajeSalto = 'url("imagenes/SpartanRosaS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}
/*Función que al clikear sobre el div "blanco"
permite seleccionar el color Blanco para el personaje*/
blanco.onclick = function(){
    Cost.style.color = 'darkgray';
    Cost.innerText = '10000';
    if(BlancoEna == false && creditos>=10000){
        BlancoEna = true;
        creditos = creditos - 10000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('BlancoEna', BlancoEna);
    }
    if(BlancoEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanBlanco4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanBlancoM.gif")';
        personajeSalto = 'url("imagenes/SpartanBlancoS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}
/*Función que al clikear sobre el div "negro"
permite seleccionar el color Negro para el personaje*/
negro.onclick = function(){
    Cost.style.color = '#343642';
    Cost.innerText = '10000';
    if(NegroEna == false && creditos>=10000){
        NegroEna = true;
        creditos = creditos - 10000;
        Credito.innerText = creditos;
        localStorage.setItem('creditos', creditos);
        localStorage.setItem('NegroEna', NegroEna);
    }
    if(NegroEna == true){
        //se agrega sonido al seleccionar
        seleccionar.innerHTML = '<audio src ="musica/seleccionar.mp3" autoplay></audio>';
        principalPerso = 'url("imagenes/SpartanNegro4.gif")';
        personajeMovimiento = 'url("imagenes/SpartanNegroM.gif")';
        personajeSalto = 'url("imagenes/SpartanNegroS.gif")';
        personaje.style.backgroundImage = principalPerso;
        Cost.innerText = 'Comprado';
    }
}

/*Función que sirve para que el personaje
realice la acción de saltar:*/
function jump(){
    /*Si ya se encuentra saltando el
    personaje, se finalizara la función.
    (Si la variable Saltando es 'true',
    retorna sin hacer nada, si es 'false',
    realiza los siguientes pasos:)*/
    if(Saltando) return;
    
    /*Se inicia un intervalo que servira
    para realizar la acción de subida del
    personaje a la hora de saltar
    (   Sintaxis:
        VARIABLE = setInterval(() => {}, DURACION);
    )*/
    tArriba = setInterval(() => {
        /*Si el personaje supera o iguala una
        altura mayor a 220 pixeles del suelo,
        entonces este se detiene.*/
        if(personajeBottom >= sueloHeight + 220){
            clearInterval(tArriba);
            //se agrega sonido al saltar
            sonidosalto.innerHTML = '<audio src ="musica/son-salto.mp3" autoplay></audio>';
            /*Se inicia un intervalo que servira
            para realizar la acción de bajada del
            personaje a la hora de saltar*/
            tAbajo = setInterval(() => {
                /*Si el personaje queda por debajo o
                iguala una altura mayor a 10 pixeles
                del suelo, entonces este se detiene.*/
                if(personajeBottom <= sueloHeight + 10){
                    clearInterval(tAbajo);
                    /*Se declara la acción boleana Saltando como 'false'*/
                    Saltando = false;
                    /*Si la variable Inicio es 'false' entonces:
                    - Se le asigna a personaje en Background-Image
                    el contenido de principalPerso
                    - De lo contrario se le asigna a personaje en
                    Background-Image el contenido de personajeMovimiento*/
                    if(Inicio === false){
                        personaje.style.backgroundImage = principalPerso;
                    }else{
                        personaje.style.backgroundImage = personajeMovimiento;
                    }
                }
                /*Se decrementa en 10 el contenido de
                la variable entera personajeBottom y
                se le asigna a personaje en bottom el
                contenido de esta variable junto con
                la terminación px de pixeles*/
                personajeBottom -= 10;
                personaje.style.bottom = personajeBottom + 'px';
            }, 30);
        }
        /*Se incrementa en 10 el contenido de
        la variable entera personajeBottom y
        se le asigna a personaje en bottom el
        contenido de esta variable junto con
        la terminación px de pixeles*/
        personajeBottom += 10;
        personaje.style.bottom = personajeBottom + 'px';
        /*Se declara la acción boleana Saltando como 'true'*/
        Saltando = true;
        /*Se le asigna a personaje en Background-Image 
        el contenido de personajeSalto*/
        personaje.style.backgroundImage = personajeSalto;
    }, 25);
}

/*Función que sirve para que el personaje
realice la acción de disparar:*/
function shoot(){
    /*Si ya se encuentra saltando el
    personaje, se finalizara la función.
    (Si la variable Saltando es 'true',
    retorna sin hacer nada, si es 'false',
    realiza los siguientes pasos:)*/
    if(Saltando) return;
    if(muni > 0){
        //se agrega sonido al disparar
        disparo.innerHTML = '<audio src ="musica/pium.mp3" autoplay></audio>';
        muni--;
        muniText.innerText = muni;
        generarDisparos();
    }

}

/*Función que crea los Disparos que realiza el jugador*/
function generarDisparos(){
    /*Se le asigna un nombre de variable a los elementos con la clase ".disparos"*/
    let disparos = document.querySelector('.disparos');
    /*Se le asigna un nombre de variable al div creado*/
    let disparo = document.createElement('div');
    /*Se le asigna como atributo en class el nombre de 'disparo'*/
    disparo.setAttribute('class','disparo');
    /*Se le integra el div disparo creado anteriormente*/
    disparos.appendChild(disparo);

    /*Se crean variables para los atributos de los Disparos (Posición y Dimensiones)*/
    let disparoRight = 1125 ;
    let disparoBottom = 182;
    let disparoWidth = 7;
    let disparoHeight = 3;
    /*Se le asigna a disparo en Background-Image la url
    donde viene la imagen o GIF del disparo en cuestion*/
    disparo.style.backgroundImage = 'url("imagenes/Bala.png")';

    /*Función que realiza el movimiento de los disparos
    y determina cuando se colisiona con un enemigo*/
    function movimientoDisparos(){
        /*Se incrementa en 5 el contenido de la variable entera disparoLeft y
        se le asigna a disparo en left el contenido de esta variable junto con
        la terminación px de pixeles, lo mismo con las variables disparoBottom,
        disparoWidth y disparoHeight en bottom, width y height en ese orden.*/
        disparoRight -= 5;
        disparo.style.right = disparoRight + 'px';
        disparo.style.bottom = disparoBottom + 'px';
        disparo.style.width = disparoWidth + 'px';
        disparo.style.height = disparoHeight + 'px';
    }

    /*Se crea una variable que será la que almacene el 
    intervalo de la velocidad de movimiento de los disparos*/
    let intervaloDisparos = setInterval(movimientoDisparos, 10);
    
}

/*Función que crea los Puntos que se encuentran en el trascurso del juego*/
function generarPuntos(){
    
    /*Manda a llama a la función nivel que modifica valores como la
    velocidad o cantidad en que enemigos aparecen, además de igual
    delimitar los fondos del juego para clasificarlo por niveles de
    dificultad en el trascurso del juego*/
    Nivel();

    /*Se le asigna un nombre de variable a los elementos con la clase ".puntos"*/
    let puntos = document.querySelector('.puntos');
    /*Se le asigna un nombre de variable al div creado*/
    let punto = document.createElement('div');
    /*Se le asigna como atributo en class el nombre de 'punto'*/
    punto.setAttribute('class','punto');
    /*Se le integra el div punto creado anteriormente*/
    puntos.appendChild(punto);
    

    /*Variable entera que genera un numero aleatorio.
    Sirve para determinar la concurrencia en la que los
    puntos son creados durante la partida*/
    let randomTOP = Math.floor(Math.random() * 2500) + 2500;
    /*Se crean variables para los atributos de los Puntos (Posición y Dimensiones)*/
    let puntoRight = -30;
    let puntoBottom = 300;
    let puntoWidth = 30;
    let puntoHeight = 50;
    /*Se le asigna a punto en Background-Image la url
    donde viene la imagen o GIF del punto en cuestion*/
    punto.style.backgroundImage = 'url("imagenes/Punto.gif")';
    

    /*Función que realiza el movimiento de los puntos
    y determina cuando se recolectan puntos*/
    function movimientoPuntos(){
        /*Se incrementa en 5 el contenido de la variable entera puntoRight y
        se le asigna a punto en right el contenido de esta variable junto con
        la terminación px de pixeles, lo mismo con las variables puntoBottom,
        puntoWidth y puntoHeight en bottom, width y height en ese orden.*/
        puntoRight += 5;
        punto.style.right = puntoRight + 'px';
        punto.style.bottom = puntoBottom + 'px';
        punto.style.width = puntoWidth + 'px';
        punto.style.height = puntoHeight + 'px';

        /*Si se cumplen los valores dentro de esta instrucción,
        la variable score incrementara tu contenido según se cumpla
        y en la variable Puntaje se insertara el contenido de score*/
        if(personajeRight >= (puntoRight - personajeWidth)-30 && 
            personajeRight <= (puntoRight + personajeWidth)-30 &&
            personajeBottom <= (puntoBottom + puntoHeight)-30 &&
            personajeBottom >= (puntoBottom - puntoHeight)-30){
                //Se agrega el sonido al obtener puntos
                sonidopuntos.innerHTML = '<audio src ="musica/puntos.mp3" autoplay></audio>';
                score++;
                creditos ++;
                Puntaje.innerText = score;
                Credito.innerText = creditos;
            }
    }

    /*Se crean variables que serán las que almacenen el 
    intervalo de la velocidad de movimiento de los puntos
    y a su ves se crea un Timeout que servira para darle 
    separación a cada punto creado*/
    let intervaloPuntos = setInterval(movimientoPuntos, interPoi);
    let puntosTimeOut = setTimeout(generarPuntos, randomTOP);

}

/*Función que crea la Munición que se encuentran en el trascurso del juego*/
function generarMunicion(){
    /*Se le asigna un nombre de variable a los elementos con la clase ".municion"*/
    let municion = document.querySelector('.municion');
    /*Se le asigna un nombre de variable al div creado*/
    let ammo = document.createElement('div');
    /*Se le asigna como atributo en class el nombre de 'ammo'*/
    ammo.setAttribute('class','ammo');
    /*Se le integra el div ammo creado anteriormente*/
    municion.appendChild(ammo);

    /*Variable entera que genera un numero aleatorio.
    Sirve para determinar la concurrencia en la que la
    municion es creada durante la partida*/
    let randomTOM = Math.floor(Math.random() * 50000) + 50000;
    /*Se crean variables para los atributos de la Munición (Posición y Dimensiones)*/
    let ammoRight = -30;
    let ammoBottom = 100;
    let ammoWidth = 40;
    let ammoHeight = 40;
    /*Se le asigna a ammo en Background-Image la url
    donde viene la imagen o GIF de la munición en cuestion*/
    ammo.style.backgroundImage = 'url("imagenes/Municion.png")';

    /*Función que realiza el movimiento de la munición
    y determina cuando se recolectan balas*/
    function movimientoMunicion(){
        /*Se incrementa en 5 el contenido de la variable entera ammoRight y
        se le asigna a ammo en right el contenido de esta variable junto con
        la terminación px de pixeles, lo mismo con las variables ammoBottom,
        ammoWidth y ammoHeight en bottom, width y height en ese orden.*/
        ammoRight += 5;
        ammo.style.right = ammoRight + 'px';
        ammo.style.bottom = ammoBottom + 'px';
        ammo.style.width = ammoWidth + 'px';
        ammo.style.height = ammoHeight + 'px';

        /*Si se cumplen los valores dentro de esta instrucción,
        la variable muni incrementara tu contenido según se cumpla
        y en la variable muniText se insertara el contenido de muni*/
        if(personajeRight >= (ammoRight - personajeWidth) && 
            personajeRight <= (ammoRight + personajeWidth) &&
            personajeBottom <= (ammoBottom + ammoHeight) &&
            personajeBottom >= (ammoBottom - ammoHeight)){
                muni++;
                muniText.innerText = muni;
            }
    }

    /*Se crean variables que serán las que almacenen el 
    intervalo de la velocidad de movimiento de la munición
    y a su ves se crea un Timeout que servira para darle 
    separación a cada munición creada*/
    let intervaloMunicion = setInterval(movimientoMunicion, 15);
    let municionTimeOut = setTimeout(generarMunicion, randomTOM);
}

/*Función que crea los Enemigos que se encuentran en el trascurso del juego*/
function generarEnemigos(){
    /*Manda a llama a la función nivel que modifica valores como la
    velocidad o cantidad en que enemigos aparecen, además de igual
    delimitar los fondos del juego para clasificarlo por niveles de
    dificultad en el trascurso del juego*/
    Nivel();
    /*Se le asigna un nombre de variable a los elementos con la clase ".enemigos"*/
    let enemigos = document.querySelector('.enemigos');
    /*Se le asigna un nombre de variable al div creado*/
    let enemigo = document.createElement('div');
    /*Se le asigna como atributo en class el nombre de 'enemigo'*/
    enemigo.setAttribute('class','enemigo');
    /*Se le integra el div enemigo creado anteriormente*/
    enemigos.appendChild(enemigo);

    /*Se crean variables para los atributos de los Enemigos (Posición y Dimensiones)*/
    let enemigoRight = -30;
    let enemigoBottom = 100;
    let enemigoWidth = 100;
    let enemigoHeight = 129;
    /*Si la variable defineEnemigo es superior o igual
    a 78 y es menor a 1000, entonces:
    - Asigna unas dimenciones especificas para el enemigo
    y se le asigna a enemigo en Background-Image el
    contenido de EneGrande.
    Si la variable defineEnemigo es igual a 1000, entonces:
    - Asigna unas dimenciones especificas para el enemigo
    y se le asigna a enemigo en Background-Image la url
    donde viene la imagen o GIF del enemigo en cuestion.
    Si no se cumplen las condiciones anteriores, entonces:
    - Asigna unas dimenciones especificas para el enemigo
    y se le asigna a enemigo en Background-Image el
    contenido de EneChico.*/
    if (defineEnemigo >= 78 && defineEnemigo < 1000){
        enemigoWidth = 100;
        enemigoHeight = 125;
        enemigo.style.backgroundImage = EneGrande;
    }else if(defineEnemigo == 1000){
        enemigoWidth = 114;
        enemigoHeight = 132;
        enemigo.style.backgroundImage = 'url("imagenes/Inquisidor4.gif")';
    }else{
        enemigoWidth = 81;
        enemigoHeight = 81;
        enemigo.style.backgroundImage = EneChico;
    }

    /*Función que realiza el movimiento de los enemigos
    y determina cuando se colisiona con un enemigo*/
    function movimientoEnemigos(){
        /*Se incrementa en 5 el contenido de la variable entera enemigoRight y
        se le asigna a enemigo en right el contenido de esta variable junto con
        la terminación px de pixeles, lo mismo con las variables enemigoBottom,
        enemigoWidth y enemigoHeight en bottom, width y height en ese orden.*/
        enemigoRight += 5;
        enemigo.style.right = enemigoRight + 'px';
        enemigo.style.bottom = enemigoBottom + 'px';
        enemigo.style.width = enemigoWidth + 'px';
        enemigo.style.height = enemigoHeight + 'px';

        /*Si se cumplen los valores dentro de esta instrucción,
        Se lanza una alerta en pantalla con la leyenda Game Over!
        luego se limpiaran el intervaloEnemigos y el enemigosTimeOut
        creados al final de esta función, y se recargara la página.*/
        if(personajeRight >= (enemigoRight - personajeWidth)-40 && 
            personajeRight <= (enemigoRight + personajeWidth)-40 && 
            personajeBottom <= (enemigoBottom + enemigoHeight)-40){
                alert('Game Over!');
                localStorage.setItem('creditos', creditos);
                clearInterval(intervaloEnemigos);
                clearTimeout(enemigosTimeOut);
                location.reload();
            }
        /*Si se cumplen los valores dentro de esta instrucción,
        se eliminaran los enemigos y balas al colisionar.*/
        if(enemigoRight >= (this.parseInt(window.getComputedStyle(document.querySelector('.disparo')).getPropertyValue('right')) - enemigoWidth)-30 &&
            enemigoRight <= (this.parseInt(window.getComputedStyle(document.querySelector('.disparo')).getPropertyValue('right')) + enemigoWidth)-30){
                creditos++;
                Credito.innerText = creditos;
                localStorage.setItem('creditos', creditos);
                let Desaparece = setInterval(() => {
                    enemigoRight = -30;
                    enemigo.style.bottom = enemigoBottom;
                }, 15);
                document.querySelector('.disparo').remove(),enemigo.remove();
            }
        /*Si se cumplen los valores dentro de esta instrucción,
        se eliminaran los enemigos por superar los extremos de la pantalla.*/
        if(1500 <= this.parseInt(window.getComputedStyle(document.querySelector('.enemigo')).getPropertyValue('right'))){
                enemigo.remove();
            }
    }

    /*Se crean variables que serán las que almacenen el 
    intervalo de la velocidad de movimiento de los enemigos
    y a su ves se crea un Timeout que servira para darle 
    separación a cada enemigo creado*/
    let intervaloEnemigos = setInterval(movimientoEnemigos, interEne);
    let enemigosTimeOut = setTimeout(generarEnemigos, randomTOEne);
}


/*Función que modifica valores como la velocidad de movimiento de los enemigos,
cantidad en la que los enemigos aparecen, velocidad en la que los puntos se mueven,
asignar el cambio de enemigos y el cambio del entorno segun el puntaje del jugador
en el trascurso de la partida*/
function Nivel(){
    /*
    - Asigna los intervalos de movimiento de los Enemigos y Puntos.
    - Le da un valor numerico aleatorio al TimeOut de los enemigos,
      haciendo que aparezcan separados, equidistantes o juntos.
    - Le da un valor numerico aleatorio a la variable defineEnemigo,
      para que la función generarEnemigo determine que enemigo crear
      o asigna un valor determinado para establecer un tipo de enemigo en especifico.
    - Asigna una url a las varaibles EneGrande y EneChico con los enemigos a aparecer.
    - Asigna una clase al fondo para determinar el cambio de escenario
      (Elimina y asigna segun el caso).
    */
    /*Intervalo entre 0 - 500*/
    if(score >= 0 && score < 251){
        interEne = 13;
        interPoi = 13;
        randomTOEne = Math.floor(Math.random() * 1700) + 1700;
        defineEnemigo = Math.floor(Math.random() *50) + 50;
        EneGrande = 'url("imagenes/EliteAzul4.gif")';
        EneChico = 'url("imagenes/GruntNaranja4.gif")';
        
        document.getElementById('fondo').classList.add('Dia')

    }
    /*Intervalo entre 500 - 1000*/
    if(score > 250 && score <= 500){
        interEne = 12;
        interPoi = 12;
        randomTOEne = Math.floor(Math.random() * 1600) + 1600;
        defineEnemigo = Math.floor(Math.random() *50) + 50;
        EneGrande = 'url("imagenes/EliteRojo4.gif")';
        EneChico = 'url("imagenes/GruntRojo4.gif")';

        document.getElementById('fondo').classList.remove('Dia')
        document.getElementById('fondo').classList.add('Noche')
    }
    /*Intervalo entre 1000 - 1500*/
    if(score > 500 && score <= 750){
        interEne = 11;  
        interPoi = 11;
        randomTOEne = Math.floor(Math.random() * 1500) + 1500;
        defineEnemigo = 78;
        EneGrande = 'url("imagenes/EliteAmarillo4.gif")';

        document.getElementById('fondo').classList.remove('Noche')
        document.getElementById('fondo').classList.add('Base')
    }
    /*Intervalo entre 1500 - 2000*/
    if(score > 750 && score <= 1000){
        interEne = 10;
        interPoi = 10;
        randomTOEne = Math.floor(Math.random() * 1400) + 1400;
        defineEnemigo = 78;
        EneGrande = 'url("imagenes/EliteBlanco4.gif")';
        
        document.getElementById('fondo').classList.remove('Base')
        document.getElementById('fondo').classList.add('Nave')
    }
    /*Superior a 2000*/
    if(score > 1000){
        interEne = 9;
        interPoi = 10;
        randomTOEne = Math.floor(Math.random() * 1200) + 1200;
        defineEnemigo = 1000;

        document.getElementById('fondo').classList.remove('Nave')
        document.getElementById('fondo').classList.add('N-Pow')
    }
}

/*Función que determina el comienzo de la partida*/
function start(){
    //Se agrega el sonido al fondo
    sonidofondo.innerHTML = '<audio src ="musica/halo.mp3" autoplay loop></audio>';
    /*Llama a las funciones generarMunicin, generarPuntos y
    generarEnemigos para comenzar la creación y
    movimiento de la munición, de los puntos y de los enemigos*/
    generarMunicion();
    generarPuntos();
    generarEnemigos();
    /*Se le dan valores nulos o vacios a los objetos:
    - nombre    - leyenda   - instrucciones
    - botones   - colores
    para que desaparezcan al momento de comenzar la partida,
    y se le asigna un color visible al objeto score y muni.*/
    document.getElementById('nombre').innerText = '';
    document.getElementById('leyenda').innerText = '';
    document.getElementById('instrucciones').innerText = '';
    document.getElementById('botones').style.backgroundImage = "none";
    document.getElementById('btn_his').style.backgroundImage = "none";
    document.getElementById('score').style.color = "white";
    document.getElementById('score').style.bottom = 70+"px";
    document.getElementById('muniT').style.color = "white";
    document.getElementById('creditos').style.color = "white";
    document.getElementById('creditos').style.left = 10+"px";
    document.getElementById('creditos').style.bottom = 10+"px";
    document.getElementById("colores").innerHTML = '';
    document.getElementById("eleccion").innerHTML = '';
    document.getElementById("usuario").innerHTML = '';
}

/*Función que permite reconocer teclas del teclado
para poder tener una mejor experiencia al jugar*/
function control(e){
    /*Si se preciona en el teclado la flecha
    hacia arriba o la barra espaciadora, se
    llama a la función jump.*/
    if(e.key == 'ArrowUp'){
        jump();
    }
    if(e.key == ' '){
        shoot();
    }
    /*Si la varaible boleana Inicio es 'false'
    y se preciona en el teclado Enter, se llama
    a la función start, declara la variable boleana
    Inicio como 'true' y asigna a personaje en
    Background-Image el contenido de personajeMovimiento.*/
    if(Inicio === false && e.which === 13){
        start();
        Inicio = true;
        personaje.style.backgroundImage = personajeMovimiento;
    }
}

/*Al pulsar cualquier tecla del teclado llmara a la función control.*/
document.addEventListener('keydown', control);