//konstruktor Pytanie
function Pytanie(tresc,odpowiedzi,odpowiedzWlasciwa){
	this.tresc = tresc;
    this.odpowiedzi = odpowiedzi;
    this.odpowiedzWlasciwa = odpowiedzWlasciwa;

}

//pytania są dodawane do puli pytań
var pytaniaLista = {
    allPytania: [],
    
    addPytanie: function (pytanie) {
        if (pytanie instanceof Pytanie) {
            this.allPytania.push(pytanie);
        }
    }
   
};

//generuje quiz na podstawie listy pytań/quiz zwraca numery pytań, które mają być użyte
var Quiz={

 //losowanie numerów pytań z puli pytań
 losujPytania: function (){
  var wylosowanePytania=[];
  var wylosowano;
  var czyWstawic;

  var i=0;
  while( i<5){
    wylosowano= Math.floor(Math.random()*(pytaniaLista.allPytania.length));
    czyWstawic=true;

    console.log(wylosowano);
    console.log(wylosowanePytania);

    for(var j=0;j<i+1;j++){
      if(wylosowano===wylosowanePytania[j]){
        console.log('brak');
        czyWstawic=false;
      }
    }

    if(czyWstawic){
      wylosowanePytania.push(wylosowano);
      i++;
    }
  }

  return wylosowanePytania.sort();
},
};

//wyświela widok quizu
var QuizView=function(pytaniaQuiz){
  var that = this;
  this.pytaniaQuiz = pytaniaQuiz;
  var wylosowane=this.pytaniaQuiz;
  //this.punkty=0;
  this.currentQuestion=0;
  this.refresh();
  this.tablicaPunktow=[];
  this.listaPrawidlowychOdpowiedzi=function(wylosowane){
    var listaOdpowiedzi=[];
    for(var n=0;n<wylosowane.length;n++){
       listaOdpowiedzi[n]=pytaniaLista.allPytania[wylosowane[n]].odpowiedzWlasciwa;
    }
    console.log(listaOdpowiedzi);
    return listaOdpowiedzi;
  };

  this.iloscPunktow=function(listaPrawidlowychOdpowiedzi, tablicaPunktow){
    var punkty=0;
    
    if(listaPrawidlowychOdpowiedzi.length===tablicaPunktow.length){
      for(var t=0;t<listaPrawidlowychOdpowiedzi.length;t++){
        
        if(listaPrawidlowychOdpowiedzi[t]==tablicaPunktow[t]){

          punkty++;
        }
      }
    }
    return punkty;
  };



  console.log('Prawidlowe '+this.listaPrawidlowychOdpowiedzi(this.pytaniaQuiz));
 

    var submit=document.getElementsByClassName("btn");
    var elementTresc = document.getElementById("pytanie");

    submit[0].addEventListener('click', function(e){
       e.preventDefault();
      

      console.log('Aktywne pytanie', that.currentQuestion);
      console.log('currentQuestion: '+that.currentQuestion);
      console.log('dlugosc tablicy wylosowane: '+wylosowane.length);

      //ograniczenie ilości pytań w quizie do ilości wylosowanych wcześniej indeksów zawartych w tablicy
      if(that.currentQuestion<=wylosowane.length){


        //wstawienie treści pytania
        if(that.currentQuestion<wylosowane.length){
          
        elementTresc.innerHTML=that.currentQuestion+1+' '+pytaniaLista.allPytania[wylosowane[that.currentQuestion]].tresc;

        for(var j=0; j<pytaniaLista.allPytania[wylosowane[that.currentQuestion]].odpowiedzi.length;j++){
          document.getElementsByTagName('input')[j].removeAttribute('checked');
          var odpowiedz=document.getElementById("opcja"+(j));
          odpowiedz.innerHTML=pytaniaLista.allPytania[wylosowane[that.currentQuestion]].odpowiedzi[j];
          document.getElementsByTagName('input')[j].removeAttribute('class');
        }
      }

        var inputs=document.getElementsByName("optionsRadios");

        for(var m=0; m<inputs.length; m++){
      
          if(inputs[m].checked===true){
            that.tablicaPunktow[that.currentQuestion-1]=inputs[m].value;
          }
        }
   
      }
      else if(that.currentQuestion==(wylosowane.length+1)){
        var podsumowaniePunktow=that.iloscPunktow(that.listaPrawidlowychOdpowiedzi(that.pytaniaQuiz),that.tablicaPunktow);
        var paragraf = document.createElement('span');
        elementTresc.innerHTML='Koniec gry!!!';
        document.getElementsByTagName('form')[0].setAttribute('class','hidden');
        paragraf.innerText=" Zdobyte punkty: "+podsumowaniePunktow;
        document.getElementsByTagName('p')[0].appendChild(paragraf);
        submit[0].innerHTML=" Zagraj ponownie ";
       
      }
      else{
        submit[0].removeEventListener();
        location.reload();
      }

      that.currentQuestion++;
      console.log(that.tablicaPunktow);
    });

};

//metoda wyświetlająca pytania 
QuizView.prototype.refresh = function (){
 
};

QuizView.prototype.liczPunkty = function(listaPytan,listaWylosowanychPytan,biezacePytanie){

};

//tresci pytan, odpowiedz i dodanie do puli pytań
var tresc1='Czerwony Kapturek to: ';
var odpowiedzi1=['Postać z bajki', 'Polityk', 'Celebryta'];
var prawidlowa1=1;

var pytanie1=new Pytanie(tresc1,odpowiedzi1,prawidlowa1);
pytaniaLista.addPytanie(pytanie1);


var tresc2='Calineczka to: ';
var odpowiedzi2=['Miara długości', 'Tytułowa postać z bajki', 'Przyrząd do mierzenia odległości'];
var prawidlowa2=2;

var pytanie2=new Pytanie(tresc2,odpowiedzi2,prawidlowa2);
pytaniaLista.addPytanie(pytanie2);

var tresc3='Kaj i Gerda: ';
var odpowiedzi3=['Rodzaj zamka do drzwi', 'Nazwa klubu fitness', 'Rodzeństwo z bajki'];
var prawidlowa3=3;

var pytanie3=new Pytanie(tresc3,odpowiedzi3,prawidlowa3);
pytaniaLista.addPytanie(pytanie3);

var tresc4='Nowe szaty cesarza: ';
var odpowiedzi4=['Nazwa sklepu', 'Nazwa miesięcznika', 'Tytuł bajki'];
var prawidlowa4=3;

var pytanie4=new Pytanie(tresc4,odpowiedzi4,prawidlowa4);
pytaniaLista.addPytanie(pytanie4);

var tresc5='Słowik: ';
var odpowiedzi5=['Ptak z rodziny słowikowatych', 'Opowiadanie R. Piątkowskiej', 'Zabawka'];
var prawidlowa5=1;

var pytanie5=new Pytanie(tresc5,odpowiedzi5,prawidlowa5);
pytaniaLista.addPytanie(pytanie5);

var tresc6='Dziewczynka z zapałkami: ';
var odpowiedzi6=['Nazwa kampanii społecznej', 'Film przygodowy dla dzieci', 'Bohaterka baśni Andersena'];
var prawidlowa6=3;

var pytanie6=new Pytanie(tresc6,odpowiedzi6,prawidlowa6);
pytaniaLista.addPytanie(pytanie6);

var tresc7='Kajowi wpadł do oka: ';
var odpowiedzi7=['Nic mu nie wpadło', 'Kawałek szkła', 'Pyłek'];
var prawidlowa7=2;

var pytanie7=new Pytanie(tresc7,odpowiedzi7,prawidlowa7);
pytaniaLista.addPytanie(pytanie7);

var tresc8='Śpiąca królewna: ';
var odpowiedzi8=['Cierpiała na bezsenność', 'Zasnęła na 5 godzin', 'Zasnęła na 100 lat'];
var prawidlowa8=3;

var pytanie8=new Pytanie(tresc8,odpowiedzi8,prawidlowa8);
pytaniaLista.addPytanie(pytanie8);


var tresc9='Pinokio: ';
var odpowiedzi9=['Drewniany pajacyk', 'Nazwa promu kosmicznego', 'Dyscyplina sportowa'];
var prawidlowa9=1;

var pytanie9=new Pytanie(tresc9,odpowiedzi9,prawidlowa9);
pytaniaLista.addPytanie(pytanie9);

var tresc10='Świnka Peppa: ';
var odpowiedzi10=['Świnka morska', 'Świnka z bajki', 'Nazwa miejscowości'];
var prawidlowa10=2;

var pytanie10=new Pytanie(tresc10,odpowiedzi10,prawidlowa10);
pytaniaLista.addPytanie(pytanie10);



var nowyQuiz =  Quiz.losujPytania();
var nowyView = new QuizView(nowyQuiz);
