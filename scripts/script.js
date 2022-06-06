let compteur = 0; 
let compteur1 = 0;
let compteur2=0;	  	   
			 
			
function tirageNum() {   
    document.getElementById("ancre").innerHTML =  "Temps : 45 s";
	compteur2++;
    if (compteur2>1) {
		alert("Pas bon en cours de partie !");
	}
	else if (compteur2<=1){      // la fonction qui permet le tirage des chiffres
        document.form1.nom.value="";
		document.form1.nom.focus();
		document.form1.nom.select(); 
        let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 50, 75, 100];
		let timer,  temps,  init;			
        trNew = document.createElement('tr');
        tdNew = document.createElement('td');            
        tdNew.setAttribute('id', 'gg');
        tdNew.setAttribute('align', 'center');
        trNew.appendChild(tdNew);
        tdNew.innerHTML = "&nbsp;" + num[Math.floor(Math.random() * 14)] + "&nbsp;"
        trNew1 = document.createElement('tr');
        tdNew1 = document.createElement('td');          
        tdNew1.setAttribute('id', 'gg');
        tdNew1.setAttribute('align', 'center');
        trNew.appendChild(tdNew1);
            setTimeout(function() { tdNew1.innerHTML = "&nbsp;" + num[Math.floor(Math.random() * 14)] + "&nbsp;"  }, 2000);
        trNew2 = document.createElement('tr');
        tdNew2 = document.createElement('td');           
        tdNew2.setAttribute('id', 'gg');
        tdNew2.setAttribute('align', 'center');
        trNew.appendChild(tdNew2);
            setTimeout(function() {tdNew2.innerHTML = "&nbsp;" + num[Math.floor(Math.random() * 14)] + "&nbsp;" }, 4000);
        trNew3 = document.createElement('tr');
        tdNew3 = document.createElement('td');           
        tdNew3.setAttribute('id', 'gg');
        tdNew3.setAttribute('align', 'center');
        trNew.appendChild(tdNew3);
            setTimeout(function() { tdNew3.innerHTML = "&nbsp;" + num[Math.floor(Math.random() * 14)] + "&nbsp;" }, 6000);
        trNew4 = document.createElement('tr');
        tdNew4 = document.createElement('td');           
        tdNew4.setAttribute('id', 'gg');
        tdNew4.setAttribute('align', 'center');
        trNew.appendChild(tdNew4);
            setTimeout(function() {tdNew4.innerHTML = "&nbsp;" + num[Math.floor(Math.random() * 14)] + "&nbsp;" }, 8000);
        trNew5 = document.createElement('tr');
        tdNew5 = document.createElement('td');            
        tdNew5.setAttribute('id', 'gg');
        tdNew5.setAttribute('align', 'center');
        trNew.appendChild(tdNew5);
            setTimeout(function() {tdNew5.innerHTML = "&nbsp;" + num[Math.floor(Math.random() * 14)] + "&nbsp;"}, 10000);
        tableau.appendChild(trNew);
        trNewa = document.createElement('tr');
        tdNewa = document.createElement('td');
        tdNewa.setAttribute('id', 'aa');
        tdNew.setAttribute('align', 'center');
        trNewa.appendChild(tdNewa);
            setTimeout(function() {tdNewa.innerHTML = "&nbsp;" + Math.floor(Math.random() * (999 - 101 + 1) + 101) + "&nbsp;" }, 12900);
        resultat.appendChild(trNewa);	
        let sec = 0;
	    let chronometre=(function(){	//le chronomètre
            let ancre2 = document.getElementById("ancrage");
		    let kanv = document.createElement("canvas");   
            kanv.setAttribute("width","150px");
            kanv.setAttribute("height","150px");
            kanv.setAttribute("id", "canvas");
            kanv.innerHTML = "Utilisez un navigateur qui gère l'outil 'Canvas', svp !"
            ancre2.appendChild(kanv);
                function clock() {
                    let now = new Date();	
                    let ctx = document.getElementById('canvas').getContext('2d');
                    ctx.save();
                    ctx.clearRect(0,0,150,150);
				    ctx.translate(75,75);
                    ctx.scale(0.4,0.4);
                    ctx.rotate(-Math.PI/2);
                    ctx.strokeStyle = "black";
                    ctx.fillStyle = "white";
                    ctx.lineWidth = 8;
                    ctx.lineCap = "round"; 
                    // Marquage des heures
                    ctx.save();
                    for (let i=0;i<12;i++){
                        ctx.beginPath();
                        ctx.rotate(Math.PI/6);
                        ctx.moveTo(100,0);
                        ctx.lineTo(120,0);
	                    ctx.strokeStyle = "gold";
                        ctx.stroke();
                    }
                    ctx.restore();
                     // Marquage des minutes
                    ctx.save();
                    ctx.lineWidth = 5;
                    for (i=0;i<60;i++){
                        if (i%5!=0) {
                            ctx.beginPath();
                            ctx.moveTo(117,0);
                            ctx.lineTo(120,0);
	                        ctx.strokeStyle = "gold";
                            ctx.stroke();
                        }
                        ctx.rotate(Math.PI/30);
                    }
                    ctx.restore();       
                    // Aiguille des secondes
			        ctx.save();      
	                sec += 1;		
                    ctx.rotate(sec * Math.PI/30);
                    ctx.strokeStyle = "#D40000";
                    ctx.fillStyle = "#D40000";
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.moveTo(-30, 0);
                    ctx.lineTo(100, 0);    
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
                    ctx.fill();
                    ctx.restore();
                    ctx.beginPath();
                    ctx.lineWidth = 14;
                    ctx.strokeStyle = '#325FA2';
                    ctx.arc(0,0,142,0,Math.PI*2,true);
                    ctx.strokeStyle = "brown";
                    ctx.stroke();
                    ctx.restore();
                    if (sec === 46){
                        document.getElementById("ancrage").innerHTML = "Le compte est bon, Bertrand ?";
                        document.getElementById("ancre").innerHTML = "";
                        return clock;
                    }
                    setTimeout(clock, 1000);   
                } 
                    setTimeout(clock, 15000);
		})();
       
    }	    
}
	 			
function createBouton(){ // bouton du choix " Consonnes ou voyelles "
	document.getElementById("ancre").innerHTML =  "Temps : 40 s";
	resultat.innerHTML ="";
	tableau.innerHTML="";
	compteur1++
	if (compteur1 <=1){
		let tableau2= document.getElementById("tableau2");
		tableau2.setAttribute("style", "border : 4px solid white; border-radius: 5px ; width: 200px; cursor:pointer");
		let tdtableau2 = document.createElement('td');	                    			 
		let center1 = document.createElement('center');
		let input =     document.createElement('input');
		input.type = "button";
		input.value = "Consonnes/Voyelles";
		input.setAttribute("onclick", "tirageLet()");  
		input.setAttribute("style","font-family:'Segoe Script', MV Boli, Calibri, Verdana, Arial, sans-serif; color:white; font-size: 16px; font-weight : bold; background-color: #537960; border : 1px solid white; border-radius : 5px; cursor : pointer");			 
		tdtableau2.appendChild(input);	
        center1.appendChild(input);		 
		tableau2.appendChild(center1);
		let center2 = document.createElement('center');			
		let label = document.createElement("label");  
        label.setAttribute("style","cursor : pointer;")		 
        center2.appendChild(label);	
		let input1 = document.createElement("input"); // On crée un input               
        input1.type = "radio";
        input1.value = "Consonnes"
		input1.name = "alphabet";
        input1.id = "alphabet";                
        let lab2 = document.createTextNode("Consonne");
		label.appendChild(lab2);
        label.appendChild(input1);	//	On place l'input dans la cellule,  
        let input2 = document.createElement("input"); // On crée un input               
        input2.type = "radio";
        input2.value = "Voyelles";
		input2.name = "alphabet";
        input2.id = "alphabet";  				
		let lab3 =document.createTextNode("Voyelle");
		label.appendChild(lab3);
        label.appendChild(input2);				
        tableau2.appendChild(label);
	}	
    else {
		alert("Pas bon en cours de partie !");
	}		 
}
				
function tirageLet() {	// tirage des lettres				 
	let cons = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
    let voye = ["A", "E", "I", "O", "U", "Y"];                 
	let tirCons = document.form1.alphabet[0].checked;
    let tirVoye = document.form1.alphabet[1].checked;
	compteur++;
	if (compteur <10){				 
        tdNew6 = document.createElement('td');               
        tdNew6.setAttribute('id', 'ff');
        tdNew6.setAttribute('align', 'center');
        if (tirCons === true && tirVoye === false){
			tdNew6.innerHTML = "&nbsp;" + cons[Math.floor(Math.random() * 20)] + "&nbsp;"
        }
		else if (tirCons === false && tirVoye === true) {
			tdNew6.innerHTML = "&nbsp;" + voye[Math.floor(Math.random() * 6)] + "&nbsp;"
		}
		else if  (tirCons === false && tirVoye === false) {
			alert("Aucun choix !");
			compteur--;				
		}
        resultat.appendChild(tdNew6); 
				 
	}
	else if (compteur ===10) {
		tdNew6 = document.createElement('td');               
        tdNew6.setAttribute('id', 'ff');
        tdNew6.setAttribute('align', 'center');
        if (tirCons === true && tirVoye === false){
			tdNew6.innerHTML = "&nbsp;" + cons[Math.floor(Math.random() * 20)] + "&nbsp;"
        }
		else if (tirCons === false && tirVoye === true)  {
			tdNew6.innerHTML = "&nbsp;" + voye[Math.floor(Math.random() * 6)] + "&nbsp;"
		}
		else if  (tirCons === false && tirVoye === false) {
			alert("Aucun choix !");
			compteur--;				
		}               
		resultat.appendChild(tdNew6);  
		let sec1 = 0;			
	    let chronometre1=(function(){	
	        let ancre2 = document.getElementById("ancrage");
            let kanv = document.createElement("canvas");   
            kanv.setAttribute("width","150px");
            kanv.setAttribute("height","150px");
            kanv.setAttribute("id", "canvas");
            kanv.innerHTML = "Utilisez un navigateur qui gère l'outil 'Canvas', svp !"
            ancre2.appendChild(kanv);	
            function clock1() {
                let now = new Date();	
                let ctx = document.getElementById('canvas').getContext('2d');
                ctx.save();
                ctx.clearRect(0,0,150,150);
                ctx.translate(75,75);
                ctx.scale(0.4,0.4);
                ctx.rotate(-Math.PI/2);
                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.lineWidth = 8;
                ctx.lineCap = "round"; 
                // Marquage des heures
                ctx.save();
                for (let i=0;i<12;i++){
                    ctx.beginPath();
                    ctx.rotate(Math.PI/6);
                    ctx.moveTo(100,0);
                    ctx.lineTo(120,0);
	                ctx.strokeStyle = "gold";
                    ctx.stroke();
                }
                ctx.restore();
                // Marquage des minutes
                ctx.save();
                ctx.lineWidth = 5;
                for (i=0;i<60;i++){
                    if (i%5!=0) {
                        ctx.beginPath();
                        ctx.moveTo(117,0);
                        ctx.lineTo(120,0);
	                    ctx.strokeStyle = "gold";
                        ctx.stroke();
                    }
                    ctx.rotate(Math.PI/30);
                }
                ctx.restore();     
			    // Aiguille des secondes
			    ctx.save();      
	            sec1 += 1;		
                ctx.rotate(sec1 * Math.PI/30);
                ctx.fillStyle = "#D40000";
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(-30, 0);
                ctx.lineTo(100, 0);    
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.restore();
                ctx.beginPath();
                ctx.lineWidth = 14;
                ctx.strokeStyle = '#325FA2';
                ctx.arc(0,0,142,0,Math.PI*2,true);
                ctx.strokeStyle = "brown";
                ctx.stroke();
                ctx.restore();
                if (sec1 === 41) {
                    document.getElementById("ancrage").innerHTML = "Le mot le plus long, Max ?";
                    document.getElementById("ancre").innerHTML = "";
                    return clock1;
                }
                setTimeout(clock1, 1000);   
            } 
                setTimeout(clock1, 1000);   
        })();

	}
				  
}
                