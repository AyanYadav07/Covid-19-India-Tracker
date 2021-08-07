$(document).ready(function(){
    var url="https://api.covid19india.org/data.json"
    $.getJSON(url,function(data){
        console.log(data)
        var total_active ,total_recovered,total_deaths,total_confirmed
        var state=[]
        var confirmed=[]
        var recovered=[]
        var deaths=[]
        $.each(data.statewise,function(id,obj){
            state.push(obj.state)
            recovered.push(obj.recovered)
            confirmed.push(obj.confirmed)
            deaths.push(obj.deaths)
        })
        state.shift();
        recovered.shift();
        confirmed.shift();
        deaths.shift();

        
        total_active=data.statewise[0].active
        total_recovered=data.statewise[0].recovered
        total_confirmed=data.statewise[0].confirmed
        total_deaths=data.statewise[0].deaths

        $("#active").append(total_active)
        $("#recovered").append(total_recovered)
        $("#confirmed").append(total_confirmed)
        $("#deaths").append(total_deaths)
        var myChart=document.getElementById("myChart").getContext('2d')
        var chart=new Chart(myChart,{
            type:'bar',
            data:{
                labels: state,
                datasets:[
                    {
                        label:'confirmed cases',
                        data:confirmed,
                        backgroundColor:"#f1c04f",
                        minBarLength: 100,
                    },
                    {
                        label:'recovered cases',
                        data:recovered,
                        backgroundColor:"#2ecc71",
                        minBarLength: 100,
                    },
                    {
                        label:'deceased',
                        data:deaths,
                        backgroundColor:"#e74c3c",
                        minBarLength: 100,
                    },
                ]
            },
            options:{}
        })
    })
})