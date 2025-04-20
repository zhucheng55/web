function getStorage() {
    let name = document.getElementById("name").value;
    let pw = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, password: pw })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === '登录成功') {
            document.location.href = "index.html";
        } else {
            document.getElementById('msg').innerHTML = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('msg').innerHTML = '登录失败，请重试';
    });

    return false;
}