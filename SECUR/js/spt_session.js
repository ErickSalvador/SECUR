function blankIt (fld) {
    document.getElementById(fld).value = "";
}

const loggingIn = () => {
    var usr = document.getElementById('eml_usr').value;
    var pwd = document.getElementById('pwd_usr').value;

    if (usr.length < 1 || pwd.length < 1) {
        alert("Primero debe llenar los campos requeridos.");
        blankIt('pwd_usr');
    }

    $.ajax({
        url: '../dvr/dvr_aut_usr.php',
        type: 'POST',
        data: {
            user: usr,
            pass: pwd
        }
    }).done(function (resp) {
        if(resp.length < 1){
            blankIt('pwd_usr');
            alert('Verifica los datos ingresados.');
        }else {
            var ssn_active = JSON.parse(resp);
            $.ajax({
                url: '../dvr/dvr_login_usr.php',
                type: 'POST',
                data: {
                    ide_usr: ssn_active[0][0],
                    nom_usr: ssn_active[0][1],
                    pnt_usr: ssn_active[0][2]
                }
            }).done(function () {
                location.reload(true);
            })
        }
    })
}