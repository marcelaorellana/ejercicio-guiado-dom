function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar Datos";
	button.innerHTML = "iniciar sesión";
}

translate();

function myFunction(){
	
	var res = document.getElementById("inputEmail").value;
	var ras = document.getElementById("inputPassword").value;
	respuesta.innerHTML = "<h2>Datos de Formulario</h2> " + "<br>El correo electrónico ingresado es: <br><br>" + res + "<br><br>La contraseña es: <br><br>" + ras;
}

/*var button = document.getElementsByClassName("btn")[0];
button.addEventListener("click",function(e){
	e.preventDefault();
	respuesta.innerHTML = "<h3>Datos de Formulario</h3><br><p>correo Electrónico <br>" + document.getElementById("inputEmail").value + "<br><p>Datos de Formulario</p><br>" + document.getElementById("inputPassword").value;
})
*/