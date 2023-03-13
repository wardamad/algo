
// ex 1 

// La valeur de C est 24 

// ex 2 

// La valeur de C est "12312"

// exo3

function prix () {

    let prixHT = prompt("Entrez le prix hors taxe :"); 
    let prixTTC = prixHT * 1.196;
    
    console.log("Le prix TTC est de " + prixTTC + " euros.")
}
   
// ex4 

function bonjour() {
    let prenom = prompt("Quel est votre prenom ?"); 
    let nom = prompt("Quel est votre nom ?"); 
    
    console.log("Bonjour " + prenom + " votre nom est " + nom );
}
//bonjour()

// ------------------------------------------------------------------------- 
 ex5
 function numbre (){
      let numbreA= prompt ("entrer numbreA")
      let numbreB= prompt("entre numbreB")
      let produit = numbreA * numbreB; 
if (produit > 0) {
     console.log("Le produit est positif.");
else if (produit < 0) {
     console.logt("Le produit est negatif.");
   }else {
     console.log("Le produit est nul.");
   }
 }
 }
// ------------------------------------------------------------------------- 
//exo6
function age (){
    let age=prompt("entrer votre age" ) 
    if (age <13){
        console.log("aller voir'Action Man'")
    }
    else if (age >=13   && age <= 18){
        console.log("aller voir 'Matrix'")
    }
    else {
        console.log("aller voir'Evil Dead'")   
    }
}
//age()

// ------------------------------------------------------------------------- //
//exo7
function Random() {

    let number = -1;

    let randomm = Math.floor(Math.random()*11)

    while (number !== randomm) {
        number = parseInt(prompt("entrer un number entre 0 et 10"));
    } 
    console.log('barvo')
}

//Random()


//exo8...................................................................................................
function chiffre(){
let chiffre 

}
//exo9...............................................................................................
let random = Math.floor(Math.random()*-1)
function Chiffres() {
        let chiffre = prompt("Entrez un chiffre :");
        chiffre = parseInt(chiffre);
  if (isNaN(chiffre)) {
         console.log("Veuillez entrer un nombre valide.");
    
  }
  for (let i = chiffre; i >= 0; i--) {
    console.log(i);
  }
}


function devinerNombre() {
    const DEBUTaDeviner = 14;
    let tentative = parseInt(prompt("Devinez le chiffre :"));
  
    while (tentative !== DEBUTaDeviner) {
         if (tentative < DEBUTaDeviner) {
        tentative = parseInt(prompt("Le chiffre est plus grand. Essayez encore :"));
      }  else {
        tentative = parseInt(prompt("Le chiffre est plus petit. Essayez encore :"));
      }
    }
  
    alert("Bravo, vous avez deviné le chiffre !");
  }

  //ex9
function devinernumber(){
    let deviner = 14
    let essayer= parseInt (prompt( "rentrer un numero" ))

    while (essayer!== deviner){ 

        if (essayer < deviner){
            console.log (prompt ("Le chiffre est plus petit. Essayez encore"));
        }
        else if (essayer > deviner) {
            console.log(prompt ("Le chiffre est plus grand. Essayez encore"));
        }
        else {
            console.log("bravo");
        }
    }
}

//devinernumber();

//exo 10......................................................................
function notes(){
   let tableau = [10, 15, 20, 15, 14, 8]
   let i= 0;
for (i=0; i > tableau.lenght; i++ ){
            somme+=tableau;
            console.log (somme) 
        
}
}
//notes()

//exo11.......................................................................
function notes(){
    let notes =[];
    let nombre = parseInt(prompt("Entrez le nombre d'élèves"));
for (var i=0 ; i < nombre ;i++){
         var note = parseInt(prompt("Entrez la note de l'élève"));
         notes.push(note)
 }

   console.log(notes)
}
//.........................................................
// exo12
function moyenne(){
    let nombre = ('');
    let dessus = parseInt(prompt("Entrez le nombre d'élèves"));
       for (var i=0 ; i < nombre ;i++){
            let nombre=+1;
            var note = parseInt(prompt("Entrez la note de l'élève"+1));
            notes.push(note);
        
        }
    }

    //exo 13...............................................................
function plusgrand(){
    let nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]]
        let max = Math.max(...nbres)
            console.log(...Max);
}




//exo14.....................................................................................

function compter(){
    let mot= ("entrer un mot");
    let nombre= 0;
        if( i=0 ;i<mot; i++){
            console.log (nombre+1);
        }
      
        }
    //exo15.................................................................................
    function aléatoire(){
    
            let number = 0;
        
            let randomm = Math.floor(Math.random()*6)
        
            while (number !== randomm) {
                if (number= parseInt(prompt("plus grand")));
            
       
            } 




            console.log('barvo')  


    }

    ////ex16

    function retourne(){
       while (A &&B)= 0;{
            if (A > B){
               console.log(0);}
            else{console.log(1);
            }   
       }
    }

    ////exo18...............................................................

    function tableau(){
            letnombreplusgrand= ('');
        for (let i=1; i < tableau.length; i++){
            if [i] > nombreplusgrand {
                console.log(plusgrand);
            }
       }
    }
////exo19.................................................................................

function voyelle(string){
        let voyelle= 0;
   for(i=0;i<string.length;i++){
       if (
        string[i]==="a"||
        string[i]==="e"||
        string[i]==="i"||
        string[i]==="o"||
        string[i]==="u"||
        string[i]==="y"||
        string[i]==="A"||
        string[i]==="E"||
        string[i]==="I"||
        string[i]==="O"||
         string[i]==="U"||
         string[i]==="Y"||
      
       voiyalle++)
    
     console.log=voiyalle;
       }

    } 




/////////exo20................................................................................

function pairs(){
    let nouveautableaux=[] ;
    let nombrepairs= (''); 
       for (i=0; i<tableaux.length;i++){
            if (tableau[i] %2===0){
                nouveautableaux=[i].paushtableau[i]
            }

            }

       console.log(nouveautableaux)

    }

   



