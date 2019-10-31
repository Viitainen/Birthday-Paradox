$(document).ready(function() {
    //Read from json file here

    $.getJSON('results.json', {}, function(res) {

        var resData = res.results;
        var data = [];
        var labels = [];
        for(var i = 0; i < resData.length; i++) {
            // var dataObj = {};
            // dataObj.x = resData[i].peopleAmount;
            // dataObj.y = resData[i].probability;
            // data.push(dataObj);
            //data.push(resData[i].probability);
            var peopleAmount = resData[i].peopleAmount;
            if (peopleAmount%10 === 0) {
                labels.push(resData[i].peopleAmount);
            } else {
                labels.push("");
            }

            data.push(resData[i].probability);
        }
        console.log(data);

        var ctx = $('#chart');

        var chart = new Chart(ctx, {
            type: 'line',
            labels: labels,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Probability',

                    data
                }]
            }
        });
    });


});