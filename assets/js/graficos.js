$(document).ready(function () {



    io.socket.get('/getDatoGrafico',function (Grafico) {


        console.log(Grafico.cont);

    var ctx = document.getElementById("grafico1");
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Con empleo", "Sin empleo"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#0000ff", "#ff0000"],
        data: [Grafico.cont,Grafico.sint]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Comparacion de egresados con empleos'
      }
    }
    });
});









});




 
// usar esa query select count(*) from egresado where id_egresado = any (select id_egresado from empleo);