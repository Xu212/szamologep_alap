window.addEventListener("load", init);
var muvjel="";
var muvelet="";
function init(){
    /**                <button id="osszeadas">+</button>
                <button id="kivonas">-</button>
                <button id="szorzas">*</button>
                <button id="osztas">/</button>
                <button id=".">.</button>
                <br />
                <button id="egyenlo">=</button>
                <button id="torles">C</button> */
    document.querySelector("footer").innerHTML="Xu Jiyu";
    document.querySelector("title").innerHTML="Xu Jiyu";
    document.querySelector(".szamok").innerHTML="<button id='nulla'>0</button>"+
                                                "<button id='egy'>1</button>"+
                                                "<button id='ketto'>2</button>"+
                                                "<button id='harom'>3</button>"+
                                                "<button id='negy'>4</button>"+
                                                "<button id='ot'>5</button>"+
                                                "<button id='hat'>6</button>"+
                                                "<button id='het'>7</button>"+
                                                "<button id='nyolc'>8</button>"+
                                                "<button id='kilenc'>9</button>"
    document.getElementById("osszeadas").addEventListener("click", elemszerzes);
    document.getElementById("kivonas").addEventListener("click", elemszerzes);
    document.getElementById("szorzas").addEventListener("click", elemszerzes);
    document.getElementById("osztas").addEventListener("click", elemszerzes);
    document.getElementById("torles").addEventListener("click", clearing);
    document.getElementById("egyenlo").addEventListener("click", egyenloseg)
    document.getElementById(".").addEventListener("click", tizedes)
    document.get
    var szamoktomb = document.querySelectorAll(".szamok>button");
    for (let index = 0; index < szamoktomb.length; index++) {
        szamoktomb[index].addEventListener("click", szamszerzes);
    }
}
function elemszerzes(){
    muvjel = event.target.innerHTML;
    if(document.querySelector(".kifejezes").innerHTML==""){
        muvjel="";
    }
    muvelet+=muvjel
    document.querySelector(".kifejezes").innerHTML=muvelet;
}
function clearing(){
    muvelet="";
    document.querySelector(".kifejezes").innerHTML=muvelet;
    document.querySelector(".eredmeny").innerHTML="";
}
function szamszerzes(){
    var kertelem = event.target.innerHTML;
    muvelet+=kertelem;
    document.querySelector(".kifejezes").innerHTML=muvelet;
}
function egyenloseg(){
    var szamok = muvelet.split(muvjel);
    var vegeredmeny;
    if(muvjel==="+"){
        vegeredmeny = parseFloat(szamok[0]) + parseFloat(szamok[1]);
    }
    else if(muvjel==="-"){
        vegeredmeny = parseFloat(szamok[0]) - parseFloat(szamok[1]);
    }
    else if(muvjel==="*"){
        vegeredmeny = parseFloat(szamok[0]) * parseFloat(szamok[1]);
    }
    else if(muvjel==="/"){
        vegeredmeny = parseFloat(szamok[0]) / parseFloat(szamok[1]);
    }
    document.querySelector(".eredmeny").innerHTML=" = "+vegeredmeny;
}
function tizedes(){
    var pont = event.target.innerHTML;
    if(document.querySelector(".kifejezes").innerHTML==""){
        muvjel="";
    }
    muvelet+=pont
    document.querySelector(".kifejezes").innerHTML=muvelet;
}