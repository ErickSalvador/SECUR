const lot = document.querySelector('.out__btn');
const icn = document.querySelector('.out__icn');
const arw = document.querySelectorAll('.btn__mve');

var bgn = 1;

const opn_dor = () => {
    icn.classList.add('fa-door-open');
    icn.classList.remove('fa-door-closed');
}

const cls_dor = () => {
    icn.classList.add('fa-door-closed');
    icn.classList.remove('fa-door-open');
}

const loadUnit = () => {
    $.ajax({
        url: '../dvr/dvr_mod_get.php',
        type: 'POST',
        data: {
            pag_num: bgn
        }
    }).done(function (resp) {
        if(resp.length < 1){
            console.log('No hay módulos.');
        }else {
            
            $.ajax({
                url: '../dvr/dvr_mod_tmplt.php',
                type: 'POST',
                data: {
                    array: resp
                },
                success: function(data) {
                    $('#lsn_cnt').html(data);
                }
            })
        }
    })
}

const mveMod = (e) => {
    if(e.target.name == 'btn_bgn'){
        arw.forEach((btn) => {
            btn.classList.toggle('btn__dsb');
        });
    }else if(e.target.name == 'btn_lft' && bgn > 1){
        bgn = bgn - 1;
    } else if (e.target.name == 'btn_rgt') {
        bgn = bgn + 1;
    }
    loadUnit();
    loadLsn();
}

lot.addEventListener('mouseover', opn_dor);
lot.addEventListener('mouseout', cls_dor);
lot.addEventListener('click', function () {
    window.location.href = '../dvr/dvr_logout_usr.php';
});

arw.forEach((btn) => {
    btn.addEventListener('click', mveMod);
});

