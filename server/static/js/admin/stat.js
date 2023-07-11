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
                updateChart(downloadValues,downloadLabels,"chartDownloads", "Lượt tải")

                downloadCateValues = data["download_cate_values"]
                downloadCateLabels = data["download_cate_labels"]
                updateChart(downloadCateValues,downloadCateLabels,"chartCateDownloads", "Lượt tải")
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

function submitChartUpload() {
    let startTime = document.getElementById("chartUploadStartTime").value
    let endTime = document.getElementById("chartUploadEndTime").value
    let period = document.getElementById("chartUploadPeriod").value
    console.log("ok")
    fetch('/admin/stat-upload', {
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
                uploadLabels = data["upload_labels"]
                uploadValues = data["upload_values"]
                updateChart(uploadValues,uploadLabels,"chartUploads", "Lượt đăng")

                uploadCateValues = data["upload_cate_values"]
                uploadCateLabels = data["upload_cate_labels"]
                updateChart(uploadCateValues,uploadCateLabels,"chartCateUploads", "Lượt đăng")
            }
            else
                alert("Nhập liệu không hợp lệ")
        }
    })
}

function resetChartUpload() {
    let startTimeControl = document.getElementById("chartUploadStartTime")
    let endTimeControl = document.getElementById("chartUploadEndTime")
    let periodControl = document.getElementById("chartUploadPeriod")

    startTimeControl.value = ""
    endTimeControl.value = ""
    periodControl.selectedIndex = 1

    submitChartUpload()
}