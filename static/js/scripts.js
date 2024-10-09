if (localStorage.getItem('lang') == 'en') {
    if (window.location.href.includes('/en')) {
        english();
    } else {
        window.location.href = "/en";
    }
}
 else {
    farsi();
}

function farsi() {
    $(document).ready(function () {
        $('#prediction-form').on('submit', function (event) {
            event.preventDefault();

            let inputData = [
                $('#gender').val(),
                $('#education').val(),
                $('#occupation').val(),
                $('#age').val(),
                $('#marital-status').val(),
                $('#children').val(),
                $('#exercise').val(),
                $('#music').val(),
                $('#religion').val(),
                $('#travel').val(),
                $('#economy').val()
            ].map(Number);

            $.ajax({
                url: '/predict',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ data: inputData }),
                success: function (response) {
                    $('#result').html(`<h3>احتمال افسردگی کم:${response.prediction[0].toFixed(2)}</h3><br><h3>احتمال افسردگی متوسط:${response.prediction[1].toFixed(2)}</h3><br><h3>احتمال افسردگی زیاد: ${response.prediction[2].toFixed(2)}</h3>`);
                    drawChart(response.prediction);
                }
            });
        });

        function drawChart(prediction) {
            let ctx = document.getElementById('prediction-chart').getContext('2d');
            $('#prediction-chart').show();
        
            let chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['کم', 'متوسط', 'زیاد'],
                    datasets: [{
                        label: 'نتیجه پیش بینی افسردگی',
                        data: prediction,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    });
}
function english() {
    $(document).ready(function () {
        $('#prediction-form').on('submit', function (event) {
            event.preventDefault();

            let inputData = [
                $('#gender').val(),
                $('#education').val(),
                $('#occupation').val(),
                $('#age').val(),
                $('#marital-status').val(),
                $('#children').val(),
                $('#exercise').val(),
                $('#music').val(),
                $('#religion').val(),
                $('#travel').val(),
                $('#economy').val()
            ].map(Number);

            $.ajax({
                url: '/predict',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ data: inputData }),
                success: function (response) {
                    $('#result').html(`<h3>low depression rate:${response.prediction[0].toFixed(2)}</h3><br><h3>medium depression rate:${response.prediction[1].toFixed(2)}</h3><br><h3>high depression rate: ${response.prediction[2].toFixed(2)}</h3>`);
                    drawChart(response.prediction);
                }
            });
        });

        function drawChart(prediction) {
            let ctx = document.getElementById('prediction-chart').getContext('2d');
            $('#prediction-chart').show();
    
            let chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['low', 'medium', 'high'],
                    datasets: [{
                        label: 'result of your depression test',
                        data: prediction,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    });
}