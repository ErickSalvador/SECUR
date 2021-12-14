const form = document.getElementById('frm_sgn');
const inp = document.querySelectorAll('#frm_sgn input');  

const exp = {
    nom_exp: /^[a-zA-Z\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    pwd_exp: /^[a-zA-Z0-9\_\-\.]{8,20}$/, // Letras, numeros, guion y guion_bajo
    eml_exp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	hbd_exp: /(19[3-9]{1}|20[0-2]{1})[0-9]{1}-[0-9]{2}-[0-9]{2}/
}

const flds = {
    usr: false,
    app: false,
	apm: false,
	hbd: false,
    eml: false,
	pwd: false
}

const valFrm = (e) => {
    switch (e.target.name) {
        case 'nom_usr':
            valFld(exp.nom_exp, e.target, 'usr');
        break;
        case 'app_usr':
            valFld(exp.nom_exp, e.target, 'app');
        break;
        case 'apm_usr':
            valFld(exp.nom_exp, e.target, 'apm');
        break;
		case 'hbd_usr':
            valFld(exp.hbd_exp, e.target, 'hbd');
        break;
        case 'eml_usr':
            valFld(exp.eml_exp, e.target, 'eml');
        break;
        case 'pwd_usr':
            valFld(exp.pwd_exp, e.target, 'pwd');
            valPwd();
        break;
        case 'cnf_usr':
            valPwd();
        break;
    }
}

const valFld = (xpr, npt, fld) => {
	if(xpr.test(npt.value)){
		document.getElementById(`grp_${fld}`).classList.remove('frm__grp-bad');
		document.getElementById(`grp_${fld}`).classList.add('frm__grp-oky');
		document.querySelector(`#grp_${fld} i`).classList.add('fa-check-circle');
		document.querySelector(`#grp_${fld} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grp_${fld} .frm__inp-err`).classList.remove('frm__inp-err-ena');
		flds[fld] = true;
	} else {
		document.getElementById(`grp_${fld}`).classList.add('frm__grp-bad');
		document.getElementById(`grp_${fld}`).classList.remove('frm__grp-oky');
		document.querySelector(`#grp_${fld} i`).classList.add('fa-times-circle');
		document.querySelector(`#grp_${fld} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grp_${fld} .frm__inp-err`).classList.add('frm__inp-err-ena');
		flds[fld] = false;
	}
}

const valPwd = () => {
	const inp_pwd = document.getElementById('pwd_usr');
	const inp_cnf = document.getElementById('cnf_usr');

	if(inp_pwd.value !== inp_cnf.value){
		document.getElementById(`grp_cnf`).classList.add('frm__grp-bad');
		document.getElementById(`grp_cnf`).classList.remove('frm__grp-oky');
		document.querySelector(`#grp_cnf i`).classList.add('fa-times-circle');
		document.querySelector(`#grp_cnf i`).classList.remove('fa-check-circle');
		document.querySelector(`#grp_cnf .frm__inp-err`).classList.add('frm__inp-err-ena');
		flds['pwd'] = false;
	} else {
		document.getElementById(`grp_cnf`).classList.remove('frm__grp-bad');
		document.getElementById(`grp_cnf`).classList.add('frm__grp-oky');
		document.querySelector(`#grp_cnf i`).classList.remove('fa-times-circle');
		document.querySelector(`#grp_cnf i`).classList.add('fa-check-circle');
		document.querySelector(`#grp_cnf .frm__inp-err`).classList.remove('frm__inp-err-ena');
		flds['pwd'] = true;
	}
}

const allRight = () => {
	const trm = document.getElementById('trm_usr');
	if(flds.usr && flds.app && flds.apm && flds.hbd && flds.eml && flds.pwd && trm.checked){
		document.getElementById('frm_msg-scs').classList.add('frm__msg-scs-ena');
		setTimeout(() => {
			document.getElementById('frm_msg-scs').classList.remove('frm__msg-scs-ena');
		}, 5000);

		document.querySelectorAll('.frm__grp-oky').forEach((ico) => {
			ico.classList.remove('frm__grp-oky');
		});

		signingIn(inp);

	} else {
		document.getElementById('frm_msg').classList.add('frm__msg-ena');
	}
}

inp.forEach((input) => {
	if (input.name !== 'trm_usr') {
    	input.addEventListener('keyup', valFrm);
    	input.addEventListener('blur', valFrm);
	}
});