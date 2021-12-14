function signingIn (inps) {
    var account = new Array();

    for ( var i = 1;i < inps.length - 1; i++) {
        account[i-1] = inps[i-1].value;
    }

    $.ajax({
        url: '../dvr/dvr_sign_acct.php',
            type: 'POST',
            data: {
                nom: account[0],
                app: account[1],
                apm: account[2],
                hbd: account[3],
                eml: account[4],
                pwd: account[5]
            }
        }).done(function () {
            $.ajax({
                url: '../dvr/dvr_aut_usr.php',
                type: 'POST',
                data: {
                    user: account[4],
                    pass: account[5]
                }
            }).done(function (resp) {
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
            })
        })
}