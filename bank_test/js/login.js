document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPass = document.getElementById('user-pass').value;

    if(userEmail == 'sc@sc.com' && userPass == '123'){
        window.location.href =  'bank.html';
    }else{
        alert('Login Failed');
    }


})