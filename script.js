const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repassword = document.getElementById('repassword')



function error (input,message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling
    div.innerText=message
    div.className = 'inavlid-feedback';
}
function succes(input) {
    input.className = 'form-control is-valid'
}

function checkEmail(input) {
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    if (validateEmail(input.value)) {
        succes(input);
    } else {
        error(input, 'Hatalı bir e-posta adresi');
    }
}


function checkRequired(inputs) {
    inputs.forEach(function(input){
        if (input.value ===''){
            error(input,`${input.id} is required.`)
        } else {
            succes(input);
        }
    })
   
}

function checkLength (input,min,max){
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır   `)
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmaldır`)
    } else {
        succes(input);
    }
}
function checkPasswords(input1,input2){
    if (input1.value !== input2.value) {
        error(input2,`Parolalar eşleşmiyor`)
    }
}

function checkPhone (input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value))
    error(input,`Telefon 10 karekterli olmalıdır`)
}
    


form.addEventListener('submit', function(e){
    e.preventDefault()
checkRequired([username,email,password,repassword,phone]);
checkEmail(email)
checkLength(username,7,15)
checkLength(password,7,12)
checkPasswords(password,repassword)
checkPhone(phone)












//   if (username.value === "") {
//     error(username,'username gerekli')
//   } else {
//     succes(username)
//   }
//   if (email.value === "") {
//     error(email,'email gerekli')
//   } else if (!validateEmail(email.value)){error(email,'düzgün bir mail adresi giriniz.')}
  
//   else {
//     succes(email)
//   }
//   if (password.value === "") {
//    error(password,'password gerekli')
//   } else {
//     succes(password)
//   }
//   if (repassword.value === "") {
//    error(repassword,'repassword gerekli')
//   } else {
//     succes(repassword)
//   }
});