function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}
function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}




function Agence() {
    return {
        array: [],
        addVoyage: addVoyage,
        handleReservation:handleReservation,
        displayReservation:displayReservation
    };
}

function Voyages(destination, datedepart, datearrive, nbreOfPersone, nbreOfTickets) {
    return {
        destination: destination,
        datedepart: datedepart,
        datearrive: datearrive,
        nbreOfPersone: nbreOfPersone,
        nbreOfTickets: nbreOfTickets,
    };
}

function addVoyage(destination, datedepart, datearrive, nbreOfPersone, nbreOfTickets) {

    this.array.push(Voyages(destination, datedepart, datearrive, nbreOfPersone, nbreOfTickets));
    return "yes"
    
   // displayReservation(newVoyage.destination, newVoyage.datedepart, newVoyage.datearrive, newVoyage.nbreOfPersone, newVoyage.nbreOfTickets);
}
var agence = Agence()
function handleReservation() {
    var dest = $("#dest").val();
    var depart = $("#dateDepart").val();
    var arrive = $("#dateArrive").val();
    var personne = $("#nbreOfPersonne").val();
    var tickets = $("#nbreOfTickets").val();

    if (!dest && !depart && !arrive && !personne && !tickets) {
        alert("Please fill in all the required fields.");
    // }else {
    // this.addVoyage(dest, depart, arrive, personne, tickets);
    // }
}}

function displayReservation(destination, datedepart, datearrive, nbreOfPersone, nbreOfTickets) {
    var timestamp = new Date()
    var message = "Reservation Details:";
    message = message + "Destination: " + destination ;
    message = message + "Departure Date: " + datedepart ;
    message = message + "Arrival Date: " + datearrive ;
    message = message + "Number of Persons: " + nbreOfPersone ;
    message = message + "Number of Tickets: " + nbreOfTickets ;
    message = message + "Timestamp:" + timestamp;

    // alert("You are registred!");
}



agence.addVoyage('russia', '2024-12-24', '2024-08-02', '2', '3')

agence.addVoyage('russia', '2024-12-24', '2024-08-02', '2', '3')
agence.addVoyage('espagne', '2024-12-24', '2024-08-02', '2', '3')
agence.addVoyage('france','2024-12-24', '2024-08-02', '2', '3')
agence.addVoyage('england','2024-12-24', '2024-08-02', '2', '3')
agence.addVoyage('usa','2024-12-24', '2024-08-02', '2', '3')
agence.addVoyage('australie','2024-12-24', '2024-08-02', '2', '3')
// var voyages7=Voyages('allemagne','2024-12-24', '2024-08-02', '2', '3')
// var voyages8=Voyages('italie','2024-12-24', '2024-08-02', '2', '3')
// var voyages9=Voyages('autriche','2024-12-24', '2024-08-02', '2', '3')
// var voyages10=Voyages('netherlands','2024-12-24', '2024-08-02', '2', '3')
// var voyages11=Voyages('kazakhstan','2024-12-24', '2024-08-02', '2', '3')




    $(document).ready(function () {
        $("#submitBtn").click(function () {
            // handleReservation();
            var dest = $("#dest").val();
            var depart = $("#dateDepart").val();
            var arrive = $("#dateArrive").val();
            var personne = $("#nbreOfPersonne").val();
            var tickets = $("#nbreOfTickets").val();
        
            if (!dest && !depart && !arrive && !personne && !tickets) {
                alert("Please fill in all the required fields.");
            }else {
                alert("your registration has been validated");
            this.addVoyage(dest, depart, arrive, personne, tickets);
           
           
            }
        });
    })    

    // $(document).ready(function () {
    //     $("#submitBtn").click(function () {
    //         handleReservation();
    //     });
    // })    



























































    


