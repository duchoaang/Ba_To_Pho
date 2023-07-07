function submitChartDownload() {
    let startTime = document.getElementById("chartDownloadStartTime").value
    let endTime = document.getElementById("chartDownloadEndTime").value
    let period = document.getElementById("chartDownloadPeriod").value
    console.log("ok")
    fetch('/admin/stat-download', {
        method: "post",
        body: JSON.stringify({
            "period": period,
            "start_time": startTime,
            "end_time": endTime,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then((data) => {
        if (data) {
            console.log(data)
            if (data['status'] == 200) {
                downloadLabels = data["download_labels"]
                downloadValues = data["download_values"]
                updateDownloadChart(downloadValues,downloadLabels,"chartDownloads", "Lượt tải")

                downloadCateValues = data["download_cate_values"]
                downloadCateLabels = data["download_cate_labels"]
                updateDownloadCateChart(downloadCateValues,downloadCateLabels,"chartDownloads", "Lượt tải")
            }
            else
                alert("Nhập liệu không hợp lệ")
        }
    })
}

function resetChartDownload() {
    let startTimeControl = document.getElementById("chartDownloadStartTime")
    let endTimeControl = document.getElementById("chartDownloadEndTime")
    let periodControl = document.getElementById("chartDownloadPeriod")

    startTimeControl.value = ""
    endTimeControl.value = ""
    periodControl.selectedIndex = 1

    submitChartDownload()
}