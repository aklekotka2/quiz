//konstruktor Pytanie
function Pytanie(tresc,odpowiedzi,odpowiedzWlasciwa){
	this.tresc = tresc;
    this.odpowiedzi = odpowiedzi;
    this.odpowiedzWlasciwa = odpowiedzWlasciwa;

};

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
//będzie tez zwracal ilość zdobytych punktów
var Quiz={

 //losowanie numerów pytańz puli pytań
   losujPytania: function () {
   	    var wylosowanePytania=[];
   	    var wylosowano;
   	    var czyWstawic   ;

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
//tu będę zliczała punkty
    // liczPunkty: function(){
    // 	return punkty;

    // }

};

//wyświela widok quizu
var QuizView=function(pytaniaQuiz){
  
  this.pytaniaQuiz = pytaniaQuiz;
  this.refresh();
  this.liczPunkty();
}

//metoda wyświetlająca pytania 
QuizView.prototype.refresh = function () {
	var i=0; 
	
    var wylosowane=this.pytaniaQuiz;
	  var submit=document.getElementsByClassName("btn");
    
    submit[0].addEventListener('click', function(e){
	  e.preventDefault();

	  //ograniczenie ilości pytań w quizie do 5
    if(i<5){
	    this.elementTresc=document.getElementById("pytanie");	  
     //wstawienie treści pytania
      this.elementTresc.innerHTML=i+1+' '+pytaniaLista.allPytania[wylosowane[i]].tresc;

        for(var j=0; j<pytaniaLista.allPytania[wylosowane[i]].odpowiedzi.length;j++){
          
           this.odpowiedz=document.getElementById("opcja"+(j+1));
           this.odpowiedz.innerHTML=pytaniaLista.allPytania[wylosowane[i]].odpowiedzi[j];

        }
      }
     else{
        alert("Koniec");
      }
	  i++;
	});
};

QuizView.prototype.liczPunkty = function () {

}





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
