function drawBasicChart(data,labels, canvasName, value_labels, type) {
    const canvas = document.getElementById(`${canvasName}`)
    var chart = Chart.getChart(canvas);
    if (chart)
        return
    chart = document.getElementById(`${canvasName}`).getContext('2d')
    myChart = new Chart(chart, {
                type: type,
                data: {
                  labels: labels,
                  datasets: [{
                    label: value_labels,
                    data: data,
                    borderWidth: 1
                  }]
                },
                options: {
                      scales: {
                            y: {
                              beginAtZero: true
                            }
                      },
                      responsive: true

                }
              });
    return myChart
}

function updateChart(data,labels, canvasName, value_labels) {
    let canvas = document.getElementById(`${canvasName}`)
    var chart = Chart.getChart(canvas);
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].label = value_labels;
    chart.data.labels = labels;
    // Cập nhật biểu đồ với dữ liệu mới
    chart.update();
}