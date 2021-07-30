function hide(id) {
    var x = document.getElementById(id);
    if(document.getElementById(id).classList.contains('hidee')) {
        x.classList.remove('hidee');
    }
    else {
        x.classList.add('hidee');
    }
}
/* function movBg() {
    var x = document.getElementById("bg__move");
    if(document.getElementById("bg__move").classList.contains('bg__transfer')) {
        x.classList.remove('bg__transfer');
    }
    else {
        x.classList.add('bg__transfer');
    }
}
function movBg3() {
    var x = document.getElementById("bg__move3");
    if(document.getElementById("bg__move3").classList.contains('bg3__transfer')) {
        x.classList.remove('bg3__transfer');
    }
    else {
        x.classList.add('bg3__transfer');
    }
} */
function move(id, clas) {
    var x = document.getElementById(id);
    if(document.getElementById(id).classList.contains(clas)) {
        x.classList.remove(clas);
    }
    else {
        x.classList.add(clas);
    }
}
/* function moveIntro() {
    var x = document.getElementById("intro__id");
    if(document.getElementById("intro__id").classList.contains('intro__mov')) {
        x.classList.remove('intro__mov');
    }
    else {
        x.classList.add('intro__mov');
    }
} */
/* function upBg() {
    var x = document.getElementById("bgr__up");
    if(document.getElementById("bgr__up").classList.contains('up')) {
        x.classList.remove('up');
    }
    else {
        x.classList.add('up');
    }
} */
function feature () {
    var y = document.getElementById("out__check");
    var x = document.getElementById("check__Feature");
    if(document.getElementById("check__Feature").classList.contains('feature___run')) {
        x.classList.remove("feature___run");
        y.classList.add("out__trans");
        hide("out__check");
       // movBg();
       // movBg3();
        move("bg__move","bg__transfer" );
        move("bg__move3","bg3__transfer" );
        move("para","mov__para" );
        move("intro__id","intro__mov" );
        

    }
    else {
        x.classList.add("feature___run");
        y.classList.remove("out__trans");
        hide("out__check");
       // movBg();
       // movBg3();
        move("bg__move","bg__transfer" );
        move("bg__move3","bg3__transfer" );
        move("para","mov__para" );
        move("intro__id","intro__mov" );

        if(document.getElementById("bgr__up").classList.contains('up')) {
            document.getElementById("bgr__up").classList.remove('up');
        }
        if(document.getElementById("svg__mv").classList.contains('svg__move')) {
            document.getElementById("svg__mv").classList.remove('svg__move');
        }
        if(document.getElementById("svg__mv2").classList.contains('svg__move2')) {
            document.getElementById("svg__mv2").classList.remove('svg__move2');
        }
        if(document.getElementById("bg__scale").classList.contains('bg__scale')) {
            document.getElementById("bg__scale").classList.remove('bg__scale');
        }


    }
}
function changeBg() {
    move("svg__mv","svg__move" );
    move("bg__scale","bg__scale" );
    move("rotate__text","rotate__h1" );

    move("svg__mv2","svg__move2" );
    move("bgr__up", "up");
}