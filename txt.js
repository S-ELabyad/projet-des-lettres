
function calcul(){
    var Phrase,Lettre,i,nbr=0;
    Phrase = document.getElementById("inpt1").value;
    Lettre = document.getElementById("inpt2").value;
    for(i=0; i<Phrase.length;i++)
    {
          if (Phrase.charAt(i)==Lettre)
          { nbr++; }
    }
    document.getElementById("result").value= nbr;
}