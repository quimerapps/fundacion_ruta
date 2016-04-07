var mensaje3 = "";




function isEmailAddress2(theElement, nombre_del_elemento) {
	mensaje3 = "";
	var s = theElement.value;
	var filter = /^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+\.[A-Za-z0-9_.]+[A-za-z]$/;
	if (s.length == 0)
		return true;
	if (filter.test(s))
		return true;
	else
		mensaje3 = "* INGRESE UNA DIRECCION DE CORREO VALIDA\n";
	// theElement.focus();
	return false;
}





function nuevaParticipacion(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione la organización\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearParticipacion(id);

	} else {
		alert(mensaje);
	}

}



function nuevaCapacitacion(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione capacitación recibida\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (document.getElementById('percepcion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione la percepción\n";
	}
	
	if (document.getElementById('institucion').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Escriba la institución\n";
	}
	
	if (document.getElementById('tiempo').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione el tiempo\n";
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearCapacitacion(id);

	} else {
		alert(mensaje);
	}

}


function nuevaDelito(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un delito\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearDelito(id);

	} else {
		alert(mensaje);
	}

}


function nuevaLibertad(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione una libertad\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearLibertad(id);

	} else {
		alert(mensaje);
	}

}


function nuevoIndividual(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un impacto individual\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearIndividual(id);

	} else {
		alert(mensaje);
	}

}

function nuevoFamiliar(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un impacto familiar\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearFamiliar(id);

	} else {
		alert(mensaje);
	}

}


function nuevoColectivo(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un impacto colectivo\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearColectivo(id);

	} else {
		alert(mensaje);
	}

}

function nuevoAgresor(id) {
var mensaje = "";
	
	if (document.getElementById('conocido').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* CONOCE O NO EL AGRESOR ?\n";
		
		
	}else{
		
		if (document.getElementById('conocido').value.replace(/^\s*|\s*$/g, "") == "S") {
			
			if (document.getElementById('nombre').value.replace(/^\s*|\s*$/g, "") == "") {
				mensaje = mensaje + "* ESCRIBA EL NOMBRE O ALIAS DEL AGRESOR\n";
			}
			
			
		}else{
			
			document.getElementById('nombre').value =  "";
			
		}
			
		
	}
	
	if (document.getElementById('sexo').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL SEXO\n";
	}
	
	
	if (document.getElementById('genero').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE EL GENERO\n";
	}
	
	if (document.getElementById('edad').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE LA EDAD\n";
	}
	
	
	if (document.getElementById('actor').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* SELECCIONE UN ACTOR\n";
	}else{
		
		datos = document.getElementById('actor').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual_actor').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* ESPECIFIQUE CUAL ACTOR ?.\n";
				
			}
		}
		
		
	
		if(!(datos!=null && datos!="" && parseInt(datos[0])==7)){ //persona natural
			
			if (document.getElementById('tipo_actor').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* ESPECIFIQUE TIPO DE ACTOR(UNIDAD, FRENTE, BLOQUE, OTRO).\n";
				
			}else{
				
				if (document.getElementById('cual_tipoactor').value.replace(/^\s*|\s*$/g, "") == "") {
					mensaje = mensaje + "* ESPECIFIQUE A CUAL UNIDAD, FRENTE, BLOQUE, OTRO PERTENECE.\n";
				}
				
			}
		}else{
			
			document.getElementById('tipo_actor').value = "";
			document.getElementById('cual_tipoactor').value = "";
		}
		
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearAgresor(id);

	} else {
		alert(mensaje);
	}

}



function nuevaAmenaza(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione una amenaza\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearAmenaza(id);

	} else {
		alert(mensaje);
	}

}


function nuevoNivel(id) {

	var mensaje = "";
	
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione un nivel\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearNivel(id);

	} else {
		alert(mensaje);
	}

}

function nuevaActividad(id) {

	var mensaje = "";
	swrango=0;
	
	if (document.getElementById('niveles').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* Seleccione una ocupación\n";
	}else{
		
		datos = document.getElementById('niveles').value.split("-");
		if(datos!=null && datos[1]=="S"){
			
			if (document.getElementById('cual').value.replace(/^\s*|\s*$/g, "") == "") {
				
				mensaje = mensaje + "* Especifique cual ?.\n";
				
			}
			
		}
			
	}
	

		
	
	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearActividad(id);

	} else {
		alert(mensaje);
	}

}







function validarFechas2(date, date2) {
	var x = new Date();
	var y = new Date();
	var fecha = date.split("-");
	var fecha2 = date2.split("-");
	x.setFullYear(fecha[0], fecha[1] - 1, fecha[2]);
	y.setFullYear(fecha2[0], fecha2[1] - 1, fecha2[2]);

	if (x > y)
		return true;
	else
		return false;
}





function cambiarNivel(){
	
	document.getElementById("label").style.display = 'none';
	document.getElementById("cual").style.display = 'none';
	
	if(document.getElementById("niveles").value!=""){
		
		valores = document.getElementById("niveles").value.split("-");
		
		if(valores[1]=="S"){
			
			document.getElementById("label").style.display = 'block';
			document.getElementById("cual").style.display = 'block';
		}
		
		
	}
	
	
}


function cargarCrearActividad(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+document.getElementById("cual").value;
	url = "/web/nuevaCreacionActividad.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('OCUPACION ACTUAL AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA OCUPACION ACTUAL');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarCrearCapacitacion(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+document.getElementById("cual").value+"&institucion="+document.getElementById("institucion").value+"&percepcion="+document.getElementById("percepcion").value+"&tiempo="+document.getElementById("tiempo").value;
	url = "/web/nuevaCreacionCapacitacion.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('CAPACITACION AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA CAPACITACION');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearDelito(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/web/nuevaCreacionDelito.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('DELITO AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL DELITO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearLibertad(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/web/nuevaCreacionLibertad.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('LIBERTAD AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA LIBERTAD');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearIndividual(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/web/nuevaCreacionIndividual.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('IMPACTO INDIVIDUAL AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL IMPACTO INDIVIDUAL');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearFamiliar(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/web/nuevaCreacionFamiliar.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('IMPACTO FAMILIAR AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL IMPACTO FAMILIAR');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCrearColectivo(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/web/nuevaCreacionColectivo.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('IMPACTO COLECTIVO AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL IMPACTO COLECTIVO AGREGADO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarCrearAgresor(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id
					   + "&conocido="+ encodeURIComponent(document.getElementById("conocido").value)
					   + "&nombre="+ encodeURIComponent(document.getElementById("nombre").value)
					   + "&sexo="+ encodeURIComponent(document.getElementById("sexo").value)
					   + "&genero="+ encodeURIComponent(document.getElementById("genero").value)
					   + "&edad="+ encodeURIComponent(document.getElementById("edad").value)
					   + "&actor="+ encodeURIComponent(document.getElementById("actor").value)
					   + "&cual_actor="+ encodeURIComponent(document.getElementById("cual_actor").value)
					   + "&tipo_actor="+ encodeURIComponent(document.getElementById("tipo_actor").value)
					   + "&cual_tipoactor="+ encodeURIComponent(document.getElementById("cual_tipoactor").value);
	url = "/web/nuevaCreacionAgresor.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('AGRESOR AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL AGRESOR');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			} else {
				document.getElementById('detalle').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarCrearAmenaza(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/web/nuevaCreacionAmenaza.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('AMENAZA AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA AMENAZA');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarCrearNivel(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+encodeURIComponent(document.getElementById("cual").value);
	url = "/web/nuevaCreacionNivel.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('NIVEL DE ESTUDIO AGREGADO CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR EL NIVEL DE ESTUDIO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarCrearParticipacion(id) {
	ajax = nuevoAjax();
	parametros = "id=" + id + "&c="
			+ encodeURIComponent(document.getElementById("niveles").value)+"&cual="+document.getElementById("cual").value;
	url = "/web/nuevaCreacionParticipacion.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('ORGANIZACION AGREGADA CON EXITO');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE AGREGAR LA ORGANIZACION');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function nuevoAdmin() {

	var mensaje = "";

	if (document.getElementById('txtDocumento').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL DOCUMENTO DE IDENTIFICACION\n";
	}

	if (document.getElementById('txtNombre1').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL PRIMER NOMBRE\n";
	}

	if (document.getElementById('txtApellido1').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL PRIMER APELLIDO\n";
	}

	if (document.getElementById('txtCorreo').value.replace(/^\s*|\s*$/g, "") == "") {
		mensaje = mensaje + "* DIGITE EL CORREO ELECTRONICO\n";
	} else {
		isEmailAddress2(document.getElementById('txtCorreo'), 'txtCorreo');
		mensaje = mensaje + mensaje3;
	}

	var claveIncorrecta = 0;
	if (document.getElementById("txtClave").value == "") {
		mensaje = mensaje + "* DIGITE UNA NUEVA CLAVEa\n";
		claveIncorrecta = 1;
	}
	if (claveIncorrecta == 0
			&& document.getElementById("txtClave2").value == "") {
		mensaje = mensaje + "* DEBE DIGITAR NUEVAMENTE LA CLAVE\n";
		claveIncorrecta = 2;
	}
	if (claveIncorrecta == 0
			&& document.getElementById("txtClave").value != document
					.getElementById("txtClave2").value) {
		mensaje = mensaje + "* LAS CLAVES NO COINCIDEN\n";
	} else {
		if (claveIncorrecta == 0
				&& document.getElementById("txtClave").value.length < 4) {
			mensaje = mensaje
					+ "* LA CLAVE DEBE TENER POR LO MENOS 4 CARACTERES\n";
		}
	}

	if (mensaje.replace(/^\s*|\s*$/g, "") == "") {
		cargarCrearAdmin();

	} else {
		alert(mensaje);
	}

}

function cargarCrearMC(id_mujer) {
	ajax = nuevoAjax();
	parametros = "id_mujer=" + id_mujer;
	url = "/web/nuevaCreacionMC.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('NUEVO CASO PARA LA MUJER CREADO EXITOSAMENTE');
					// window.opener.cargarTemas(id);
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {  
					alert('NO SE PUEDE CREAR EL CASO');
					window.close();
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarCrearAdmin() {
	ajax = nuevoAjax();
	parametros = "pn=" + document.getElementById("txtNombre1").value + "&sn="
			+ document.getElementById("txtNombre2").value + "&pa="
			+ document.getElementById("txtApellido1").value + "&sa="
			+ document.getElementById("txtApellido2").value + "&correo="
			+ document.getElementById("txtCorreo").value + "&clave="
			+ document.getElementById("txtClave").value + "&doc="
			+ document.getElementById("txtDocumento").value;
	url = "/web/nuevaCreacion.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalle').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> ";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalle').innerHTML = "";
				document.getElementById('detalle').style.background = "";
				document.getElementById('detalle').innerHTML = ajax.responseText;

				if (parseInt(document.getElementById("hdnExito").value) == 1) {
					alert('ADMINISTRADOR(A) CREADO CON EXITO');
					window.opener.cargarAdministradores();
					try {
						window.opener.document.form1.submit();
					} catch (e) {
					}
					window.close();
				} else {
					alert('NO SE PUEDE CREAR EL ADMINISTRADOR CON ESE DOCUMENTO');
				}

			} else if (ajax.status == 404) {
				document.getElementById('detalle').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalle').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}




function nuevoAjax() {
	var xmlhttp = false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); // Creacion del objeto
		// AJAX para navegadores
		// no IE.
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // Creacion del
			// objet AJAX
			// para IE.
		} catch (E) {
			xmlhttp = false;
		}
	}

	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}



function seleccionarCombo(numero, valor) {

	document.getElementById("control" + numero).value = "" + valor;
}


function cargarEliminarCaso(admin) {

	if (confirm('REALMENTE DESEA ELIMINAR EL CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarCaso.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('CASO ELIMINADO CON EXITO');
						document.form1.submit();

					} else {
						alert('NO SE PUEDE ELIMINAR EL CASO PUES TIENE ASOCIADA CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarMujer(admin) {

	if (confirm('REALMENTE DESEA ELIMINAR LA HOJA DE VIDA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarMujer.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando hoja de vida espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('HOJA DE VIDA ELIMINADA CON EXITO');
						cargarMujeres();

					} else {
						alert('NO SE PUEDE ELIMINAR LA HOJA DE VIDA PUES TIENE ASOCIADA CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarMC(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL LA MUJER DEL CURSO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarMC.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando tema del curso espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('MUJER DEL CURSO ELIMINADA CON EXITO');
						cargarMujeresCurso(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA MUJER DEL CURSO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}






function cargarEliminarActividad(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA OCUPACION ACTUAL SELECCIONADA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarActividad.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('OCUPACION ACTUAL ELIMINADA CON EXITO');
						cargarActividades(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA OCUPACION PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarParticipaciones(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA ORGANIZACION REGISTRADA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarParticipacion.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('ORGANIZACION ELIMINADA CON EXITO');
						cargarParticipaciones(curso);

					} else {
						
						alert('NO SE PUEDE ELIMINAR LA ORGANIZACION PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarCapacitacion(admin, curso) {
 
	if (confirm('REALMENTE DESEA ELIMINAR LA CAPACITACION RECIBIDA?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarCapacitacion.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert("CAPACITACION ELIMINADA CON EXITO");
						cargarCapacitaciones(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA CAPACITACION PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}



function cargarEliminarDelito(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL DELITO DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarDelito.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('DELITO ELIMINADO CON EXITO');
						cargarDelitos(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL DELITO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}



function cargarEliminarLibertad(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA LIBERTAD DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarLibertad.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('LIBERTAD ELIMINADA CON EXITO');
						cargarLibertades(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA LIBERTAD PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarIndividual(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL IMPACTO INDIVIDUAL DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarIndividual.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('IMPACTO INDIVIDUAL ELIMINADO CON EXITO');
						cargarIndividuales(curso);  

					} else {
						alert('NO SE PUEDE ELIMINAR EL IMPACTO INDIVIDUAL PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarFamiliar(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL IMPACTO FAMILIAR DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarFamiliar.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('IMPACTO FAMILIAR ELIMINADO CON EXITO');
						cargarFamiliares(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL IMPACTO FAMILIAR PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarColectivo(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL IMPACTO COLECTIVO DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarColectivo.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('IMPACTO COLECTIVO ELIMINADO CON EXITO');
						cargarColectivos(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL IMPACTO COLECTIVO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}

function cargarEliminarAmenaza(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR LA AMENAZA DE ESTE CASO?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarAmenaza.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('AMENAZA ELIMINADA CON EXITO');
						cargarAmenazas(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR LA AMENAZA PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function cargarEliminarNivel(admin, curso) {

	if (confirm('REALMENTE DESEA ELIMINAR EL NIVEL EDUCATIVO DE LA MUJER?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarNivel.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('NIVEL EDUCATIVO ELIMINADO CON EXITO');
						cargarNiveles(curso);

					} else {
						alert('NO SE PUEDE ELIMINAR EL NIVEL EDUCATIVO PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}








function cargarEliminarAdministrador(admin) {

	if (confirm('REALMENTE DESEA ELIMINAR EL ADMINISTRADOR?')) {
		ajax = nuevoAjax();
		parametros = "id=" + admin;
		url = "/web/eliminarAdministrador.jsp";
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 1) {
				document.getElementById('detalleProcesos').innerHTML = "<img src='images/ajax/ajax-loader3.gif'> Eliminando administrador espere un momento...";
			} else if (ajax.readyState == 4) {
				if (ajax.status == 200) {
					document.getElementById('detalleProcesos').innerHTML = "";
					document.getElementById('detalleProcesos').style.background = "";
					document.getElementById('detalleProcesos').innerHTML = ajax.responseText;

					if (parseInt(document.getElementById('hdnElimino').value) == 1) {
						alert('ADMINISTRADOR ELIMINADO CON EXITO');
						cargarAdministradores();

					} else {
						alert('NO SE PUEDE ELIMINAR EL ADMINISTRADOR PUES TIENE ASOCIADO CONTENIDO.');

					}

				} else if (ajax.status == 404) {
					document.getElementById('detalleProcesos').innerHTML = "-Inexistencia, contacte administrador-";
				} else {
					document.getElementById('detalleProcesos').innerHTML = "-Error, contacte administrador";
				}
			}
		}

		ajax.open("POST", url, true);
		ajax.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded; charset=utf-8');
		ajax.send(parametros);

	}
}


function validarMujer() {
	
	
	
		try {
		
		
			//controles vacíos

			sw = 0;
			mensaje = "";
			hijaosIncorrecto = 0;
			checkLleno = 0;
		
				
			if(document.getElementById("nombres").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;
			}
			if(document.getElementById("apellidos").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("tipo_identificacion").value.replace(/^\s*|\s*$/g, "") == ""){
					sw=1;
			
			}else{
				
				datos = document.getElementById('tipo_identificacion').value.split("-");
				if(datos!=null && datos[1]=="S"){
			
					if(document.getElementById("cual_tipo_documento").value.replace(/^\s*|\s*$/g, "") == ""){
						sw=1;
					}
				}
				
			}
			if(document.getElementById("documento").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("departamento_nacimiento").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;		
			}
			if(document.getElementById("municipio_nacimiento").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("fecha_nacimiento").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("sexo").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("genero").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("estado_civil").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				datos = document.getElementById('estado_civil').value.split("-");
				if(datos!=null && datos[1]=="S"){
			
					if(document.getElementById("cual_estado_civil").value.replace(/^\s*|\s*$/g, "") == ""){
						sw=1;
					}
				}
				
			}
			if(document.getElementById("etnia").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("regimen").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				if(document.getElementById('regimen').value!="N"){
					
					if(document.getElementById("eps_ars").value.replace(/^\s*|\s*$/g, "") == ""){
						sw = 1;
					}else{
						
						datos = document.getElementById('eps_ars').value.split("-");
						if(datos!=null && datos[1]=="O"){
							
							if(document.getElementById("cual_eps_ars").value.replace(/^\s*|\s*$/g, "") == ""){
								sw=1;
							}
						}
						
						
					}
					
				}
			}
			if(document.getElementById("profesion").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("cabeza_hogar").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("subsidio").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				if(document.getElementById('subsidio').value!="I"){
					
					if(document.getElementById("cual_subsidio").value.replace(/^\s*|\s*$/g, "") == ""){
						sw=1;
					}
				}
				
				
			}
			if(document.getElementById("hijas").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				
				var h2 = parseInt(document.getElementById("hijas").value
						.replace(/^\s*|\s*$/g, ""));
				if (isNaN(h2)) {
					hijaosIncorrecto = 1;
					mensaje += "* NUMERO DE HIJAS DEBE SER NUMERICO SIN PUNTOS NI COMAS\n";
				} else {

					if (h2 < 0) {
						mensaje += "* NUMERO DE HIJAS DEBE SER MAYOR O IGUAL A CERO\n";
					}

				}
				
				
				
			}
			if(document.getElementById("hijos").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}else{
				
				var h3 = parseInt(document.getElementById("hijos").value
						.replace(/^\s*|\s*$/g, ""));
				if (isNaN(h3)) {
					hijaosIncorrecto = 1; 
					mensaje += "* NUMERO DE HIJOS DEBE SER NUMERICO SIN PUNTOS NI COMAS\n";
				} else {

					if (h3 < 0) {
						mensaje += "* NUMERO DE HIJOS DEBE SER MAYOR O IGUAL A CERO\n";
					}

				}
				
				
			}
			if(document.getElementById("departamento_residencia").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("municipio_residencia").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("direccion").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("telefonos").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			}
			if(document.getElementById("liderazgo").value.replace(/^\s*|\s*$/g, "") == ""){
			sw=1;	
			
			
			}else{
				
				if(document.getElementById("liderazgo").value.replace(/^\s*|\s*$/g, "") == "S"){
					
						if(document.getElementById("anos_liderazgo").value.replace(/^\s*|\s*$/g, "") == "0" && document.getElementById("meses_liderazgo").value.replace(/^\s*|\s*$/g, "") == "0"){
							
							mensaje += "* SI EJERCE LIDERAZGO POR LO MENOS DEBE SER DE 1 MES\n";
							
						}
				}
				
			}



			if (sw == 1) {
				mensaje = "* EXISTEN CAMPOS REQUERIDOS QUE DEBE DILIGENCIAR (POSEEN UN *)\n" + mensaje;
			}
			
			
			if(hijaosIncorrecto==0){
				suma = parseInt(document.getElementById("hijos").value.replace(/^\s*|\s*$/g, "")) + parseInt(document.getElementById("hijas").value.replace(/^\s*|\s*$/g, ""));
			
				document.getElementById("h_rango_edad1").value = "N";
				document.getElementById("h_rango_edad2").value = "N";
				document.getElementById("h_rango_edad3").value = "N";
				document.getElementById("h_rango_edad4").value = "N";
				document.getElementById("h_rango_edad5").value = "N";
				
				
				if(suma>0){
					checkLleno = 0;
					if(document.getElementById("rango_edad1").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad1").value = "S";
					}
					if(document.getElementById("rango_edad2").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad2").value = "S";
					}
					if(document.getElementById("rango_edad3").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad3").value = "S";
					}
					if(document.getElementById("rango_edad4").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad4").value = "S";
					}
					if(document.getElementById("rango_edad5").checked){
						checkLleno = 1;
						document.getElementById("h_rango_edad5").value = "S";
					}
					
					if(checkLleno==0){
						
						mensaje += "* DEBE SELECCIONAR POR LO MENOS UN RANGO DE EDAD\n";
					}
					
				}
				
				if(suma==1){
					checkLleno = 0;
					if(document.getElementById("rango_edad1").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad2").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad3").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad4").checked){
						checkLleno += 1;
					}
					if(document.getElementById("rango_edad5").checked){
						checkLleno += 1;
					}
					
				    if(checkLleno>1){
						
						mensaje += "* DEBE SELECCIONAR SOLO UN RANGO DE EDAD\n";
					}
					
				}
				
			}
			
			
		
			} catch (e) {
				snumeros = 1;
				mensaje += "* EXISTE INFORMACIÓN INCORRECTA, REVISE.\n";
			}
			

			// valida correo
			if(document.getElementById("correo").value.replace(/^\s*|\s*$/g, "") != ""){
					isEmailAddress2(document.getElementById('correo'), 'correo');
					mensaje = mensaje + mensaje3;
			}
	
	
			if (mensaje != "") {
				alert("CORRIJA LO SIGUIENTE:\n\n" + mensaje);
			} else {
				if (confirm('DESEA ACTUALIZAR LA INFORMACION INGRESADA ?')) {
					document.getElementById("hdnGuardarPublicacion").value = "1";
					document.form1.submit();
				}
			}
	
	
}

function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}






function cargarMujeres2() {
	ajax = nuevoAjax();
	url = "/web/mujeresConsultadas.jsp";

	parametros = "n="
	+ encodeURIComponent(document.getElementById("nombres").value)
	+ "&a="
	+ encodeURIComponent(document.getElementById("apellidos").value)
	+ "&d="
	+ encodeURIComponent(document.getElementById("documento").value);
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
				
			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}






function cargarMujeres() {
	ajax = nuevoAjax();
	url = "/web/resultadosMujeres.jsp";
	
	parametros = "n="
	+ encodeURIComponent(document.getElementById("nombres").value)
	+ "&a="
	+ encodeURIComponent(document.getElementById("apellidos").value)
	+ "&d="
	+ encodeURIComponent(document.getElementById("documento").value);
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarCasos() {
	ajax = nuevoAjax();
	url = "/web/resultadosCasos.jsp";
	
	parametros = "n="
	+ encodeURIComponent(document.getElementById("nombres").value)
	+ "&a="
	+ encodeURIComponent(document.getElementById("apellidos").value)
	+ "&d="
	+ encodeURIComponent(document.getElementById("documento").value);
	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}




function cargarMujeresCurso(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosMujeresCurso.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cambiarVisibilidadTipoActor(){
	
	
	if(document.getElementById('tipo_actor').value!=""){

		document.getElementById('span_ta2').style.display = "block";
		document.getElementById('span_ta3').style.display = "block";
		
		
	}else{
		document.getElementById('span_ta2').style.display = "none";
		document.getElementById('span_ta3').style.display = "none";
	
	}
	
}

function cambiarVisibilidadConocido(){
	
	
	if(document.getElementById('conocido').value!="" && document.getElementById('conocido').value!="N"){

		document.getElementById('nombre').style.display = "block";
		document.getElementById('span_nombre').style.display = "block";
		
		
	}else{
		document.getElementById('nombre').style.display = "none";
		document.getElementById('span_nombre').style.display = "none";
	
	}
	
}




function cambiarVisibilidadLiderazgo(){
	
	
	if(document.getElementById('liderazgo').value!="" && document.getElementById('liderazgo').value!="N"){

		document.getElementById('anos_liderazgo').style.display = "block";
		document.getElementById('meses_liderazgo').style.display = "block";
		document.getElementById('span_liderazgo').style.display = "block";
		
		
	}else{
		document.getElementById('anos_liderazgo').style.display = "none";
		document.getElementById('meses_liderazgo').style.display = "none";
		document.getElementById('span_liderazgo').style.display = "none";
	}
	
}


function cambiarVisibilidadSubsidio(){
	
	
	if(document.getElementById('subsidio').value!="" && document.getElementById('subsidio').value!="I"){

		document.getElementById('span_subsidio1').style.display = "block";
		document.getElementById('span_subsidio2').style.display = "block";
	
		
	}else{
		document.getElementById('span_subsidio1').style.display = "none";
		document.getElementById('span_subsidio2').style.display = "none";
	}
	
}


function cambiarVisibilidadActor(){
	
	datos = document.getElementById('actor').value.split("-");
	if(datos!=null && datos[1]=="S"){

		document.getElementById('span_ac1').style.display = "block";
		document.getElementById('span_ac2').style.display = "block";
		
	
		
	}else{
		document.getElementById('span_ac1').style.display = "none";
		document.getElementById('span_ac2').style.display = "none";
	}
	
	if(datos!=null && datos!="" && parseInt(datos[0])!=7){
		
		document.getElementById('span_ta1').style.display = "block";
		document.getElementById('span_ta2').style.display = "block";
		document.getElementById('span_ta3').style.display = "block";
		document.getElementById('tipo_actor').style.display = "block";
		
		if(document.getElementById('tipo_actor').value!=""){

			document.getElementById('span_ta2').style.display = "block";
			document.getElementById('span_ta3').style.display = "block";
			
			
		}else{
			document.getElementById('span_ta2').style.display = "none";
			document.getElementById('span_ta3').style.display = "none";
		
		}
		
		
	}else{
		
		document.getElementById('span_ta1').style.display = "none";
		document.getElementById('span_ta2').style.display = "none";
		document.getElementById('span_ta3').style.display = "none";
		document.getElementById('tipo_actor').style.display = "none";
	}
	
	
	
}



function cambiarVisibilidadEpsArs(){
	
	datos = document.getElementById('eps_ars').value.split("-");
	if(datos!=null && datos[1]=="O"){

		document.getElementById('span_eps1').style.display = "block";
		document.getElementById('span_eps2').style.display = "block";
	
		
	}else{
		document.getElementById('span_eps1').style.display = "none";
		document.getElementById('span_eps2').style.display = "none";
	}
	
}


function cargarEpsArs() {
	ajax = nuevoAjax();

	url = "/web/resultadosEpsArs.jsp";
	parametros = "regimen=" + document.getElementById('regimen').value;
	
	
	if(document.getElementById('regimen').value=="" || document.getElementById('regimen').value=="N"){
		
		document.getElementById('span_eps_ars2').style.display = "none";
		document.getElementById('span_eps_ars').style.display = "none";
		document.getElementById('span_eps1').style.display = "none";
		document.getElementById('span_eps2').style.display = "none";
		
	}else{
		
		document.getElementById('span_eps_ars2').style.display = "block";
		document.getElementById('span_eps_ars').style.display = "block";
		document.getElementById('span_eps1').style.display = "block";
		document.getElementById('span_eps2').style.display = "block";
		
		
	}

	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('span_eps_ars').innerHTML = "Cargando...";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('span_eps_ars').innerHTML = "";
				document.getElementById('span_eps_ars').style.background = "";
				document.getElementById('span_eps_ars').innerHTML = ajax.responseText;
				
				cambiarVisibilidadEpsArs();

			} else if (ajax.status == 404) {
				document.getElementById('span_eps_ars').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('span_eps_ars').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarMunicipioCombo(combo_municipio,combo_departamento) {
	ajax = nuevoAjax();

	url = "/web/resultadosMunicipios.jsp";
	parametros = "departamento=" + document.getElementById(combo_departamento).value+"&nombre_combo_municipio="+combo_municipio;
	

	
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('span_'+combo_municipio).innerHTML = "Cargando...";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('span_'+combo_municipio).innerHTML = "";
				document.getElementById('span_'+combo_municipio).style.background = "";
				document.getElementById('span_'+combo_municipio).innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('span_'+combo_municipio).innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('span_'+combo_municipio).innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}









function cargarActividades(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosActividades.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarParticipaciones(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosParticipaciones.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarDelitos(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosDelitos.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarLibertades(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosLibertades.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}



function cargarIndividuales(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosIndividuales.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarFamiliares(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosFamiliares.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarColectivos(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosColectivos.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarAgresores(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosAgresores.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}

function cargarAmenazas(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosAmenazas.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}


function cargarNiveles(curso) {
	ajax = nuevoAjax();

	url = "/web/resultadosNiveles.jsp";
	parametros = "id=" + curso;
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(parametros);
}







function cargarAdministradores() {
	ajax = nuevoAjax();
	url = "/web/resultadosAdministradores.jsp";
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 1) {
			document.getElementById('detalleAdministradores').innerHTML = "<img src='images/ajax/ajax-loader3.gif'>";
		} else if (ajax.readyState == 4) {
			if (ajax.status == 200) {
				document.getElementById('detalleAdministradores').innerHTML = "";
				document.getElementById('detalleAdministradores').style.background = "";
				document.getElementById('detalleAdministradores').innerHTML = ajax.responseText;

			} else if (ajax.status == 404) {
				document.getElementById('detalleAdministradores').innerHTML = "-Inexistencia, contacte administrador-";
			} else {
				document.getElementById('detalleAdministradores').innerHTML = "-Error, contacte administrador";
			}
		}
	}

	ajax.open("POST", url, true);
	ajax.setRequestHeader('Content-Type',
			'application/x-www-form-urlencoded; charset=utf-8');
	ajax.send(null);
}



function cambiarVisibilidadEC(){
	
		datos = document.getElementById('estado_civil').value.split("-");
		if(datos!=null && datos[1]=="S"){
	
			document.getElementById('span_ec1').style.display = "block";
			document.getElementById('span_ec2').style.display = "block";
		
			
		}else{
			document.getElementById('span_ec1').style.display = "none";
			document.getElementById('span_ec2').style.display = "none";
		}
		
}


function cambiarVisibilidadTI(){
	if(document.getElementById('tipo_identificacion').value!=""){}
		datos = document.getElementById('tipo_identificacion').value.split("-");
		if(datos!=null && datos[1]=="S"){
	
			document.getElementById('span_ti1').style.display = "block";
			document.getElementById('span_ti2').style.display = "block";
		
			
		}else{
			document.getElementById('span_ti1').style.display = "none";
			document.getElementById('span_ti2').style.display = "none";
		}
}
	









