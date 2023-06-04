function addToCart(id, name, price) {
    event.preventDefault()

    fetch('/api/add-cart', {
        method: 'post',
        body: JSON.stringify({
            'id' : id,
            'name': name,
            'price': price
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(res){
        console.info(res)
        return res.json()
    }).then(function(data){
        console.info(data)

        let counter = document.getElementsByClassName('cartCounter')
        for (let i = 0; i < counter.length; i++) {
            counter[i].innerText = data.total_quantity
        }
    }).catch(function(err){
        console.error(err)
    })

}

function pay() {
    if(confirm('Bạn chắc chắn thanh toán không?') == true) {
        fetch('/api/pay', {
            method: 'post'
        }).then(function(res){
            console.info(res)
            return res.json()
        }).then(function(data){
            if (data.code == 200)
                alert('Thanh toán thành công')
                location.reload()
        }).catch(function(err){
            console.error(err)
        })
    }
}

function pay2() {
    if(confirm('Bạn chắc chắn muốn thanh toán không?') == true) {
        fetch('/api/pay2', {
            method: 'post'
        }).then(function(res){
            console.info(res)
            return res.json()
        }).then(function(data){
            if (data.code == 200)
                alert('Thanh toán thành công\n Mã hóa đơn của bạn là: ' + data.receipt + '\nHãy thanh toán trong: ' + data.time +' giờ tới' )
                location.reload()
        }).catch(function(err){
            console.error(err)
        })
    }
}




function updateCart(id, obj) {
    fetch('/api/update-cart', {
            method: 'put',
            body: JSON.stringify({
                'id': id,
                'quantity': parseInt(obj.value)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res){
            console.info(res)
            return res.json()
        }).then(function(data){
            let counter = document.getElementsByClassName('cartCounter')
            for (let i = 0; i < counter.length; i++) {
                counter[i].innerText = data.total_quantity
            }

            let amount = document.getElementById('totalAmount')

            amount.innerText = data.total_amount
        }).catch(function(err){
            console.error(err)
        })
}


function deleteCart(id) {
    if (confirm("Bạn chắc chắn xóa sản phẩm này không") == true) {
        fetch('/api/delete-cart/' + id, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res){
            console.info(res)
            return res.json()
        }).then(function(data){
            let counter = document.getElementsByClassName('cartCounter')
            for (let i = 0; i < counter.length; i++) {
                counter[i].innerText = data.total_quantity
            }

            let amount = document.getElementById('totalAmount')

            amount.innerText = data.total_amount

            let e = document.getElementById('product' + id)
            e.style.display = "none"
        }).catch(function(err){
            console.error(err)
        })
    }
}

