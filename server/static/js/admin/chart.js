let downloadChart
let downloadCateChart
let uploadChart
let uploadCateChart
function drawBasicChart(data,labels, name, value_labels, type) {
    const chart = document.getElementById(`${name}`).getContext('2d')
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

function drawDownloadChart(data,labels, name, value_labels, type) {
    downloadChart = drawBasicChart(data,labels, name, value_labels, type)
}

function drawUploadChart(data,labels, name, value_labels, type) {
    uploadChart = drawBasicChart(data,labels, name, value_labels, type)
}

function drawDownloadCategoryChart(data,labels, name, value_labels, type) {
    downloadCateChart = drawBasicChart(data,labels, name, value_labels, type)
}

function drawUploadCategoryChart(data,labels, name, value_labels, type) {
    uploadCateChart = drawBasicChart(data,labels, name, value_labels, type)
}

function updateDownloadChart(data,labels, name, value_labels) {
    downloadChart.data.datasets[0].data = data;
    downloadChart.data.datasets[0].label = value_labels;
    downloadChart.data.labels = labels;
    // Cập nhật biểu đồ với dữ liệu mới
    downloadChart.update();
}


function updateDownloadCateChart(data,labels, name, value_labels) {
    downloadCateChart.data.datasets[0].data = data;
    downloadCateChart.data.datasets[0].label = value_labels;
    downloadCateChart.data.labels = labels;
    // Cập nhật biểu đồ với dữ liệu mới
    downloadCateChart.update();
}