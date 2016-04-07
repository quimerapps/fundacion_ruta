<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*" import="java.util.*,java.text.SimpleDateFormat"
	session="false"%>
	<jsp:useBean id="bAdministrarPublicaciones"
	class="beans.AdministrarPublicaciones" scope="page" />
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
   <title>MUASOFT Software - Fundación Ruta Pacífica de las Mujeres</title>
    <meta name="Description" content="MUASOFT Software - Fundación Ruta Pacífica de las Mujeres">
  

<? header("Cache-Control: no-cache, must-revalidate");?>
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="pragma" content="no-cache" />
<meta name="resource-type" content="document" />

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta http-equiv="X-UA-Compatible" content="IE=7">
<script type="text/javascript" src="Scripts/noticias.js"></script>


<style type="text/css">
<!--
body {
	background-image: url();
background-color: #FBD7EB;
}
-->
</style>
<style type="text/css">
<!--
.Estilo5 {
	font-size: 12px;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
}

.Estilo6 {
	font-size: 12px;
	font-weight: bold;
}
-->
</style>

<link rel="stylesheet" type="text/css" href="css/epoch_styles.css" />
<script type="text/javascript" src="Scripts/epoch_classes2.js"></script>
<script language="JavaScript">
	//Este script debe ponerse antes del Formulario
	//Empieza Calendario
	var dp_cal;
	var dp_cal2;
	window.onload = function() {
		dp_cal = new Epoch('dp_cal', 'popup', document
				.getElementById('fecha_nacimiento'));


		

	};
	//Termina Calendario
	//Esta funcion asigna el calendario al campo5  del formulario
</script>
<link rel="stylesheet" type="text/css" href="home_files/style.css">
</head>
<body><div id="contenedor">
<%
		String [] datos = null;
		String [] division = null;	
		
		String hdnGuardarPublicacion = request.getParameter("hdnGuardarPublicacion");
	 	int numeroDatos = 33;

		int actualizo = 0;
		if(hdnGuardarPublicacion!=null && hdnGuardarPublicacion.equals("1")){

					datos = new String[numeroDatos];
					
					
					int filas = 0;
					datos[filas] = request.getParameter("nombres"); filas++;
					datos[filas] = request.getParameter("apellidos"); filas++;
					
					datos[filas] = request.getParameter("tipo_identificacion"); 
					division  = datos[filas].split("-");
					datos[filas] = division[0];
					filas++;
					if(division!=null && division[1].equals("S")){
						datos[filas] = request.getParameter("cual_tipo_documento"); filas++;
					}else{
						datos[filas] = null; filas++;
					}
					
					
					datos[filas] = request.getParameter("documento"); filas++;
					datos[filas] = request.getParameter("municipio_nacimiento"); filas++;
					datos[filas] = request.getParameter("fecha_nacimiento"); filas++;
					datos[filas] = request.getParameter("sexo"); filas++;
					datos[filas] = request.getParameter("genero"); filas++;
					
					datos[filas] = request.getParameter("estado_civil");
					division  = datos[filas].split("-");
					datos[filas] = division[0];
					filas++;
					if(division!=null && division[1].equals("S")){
						datos[filas] = request.getParameter("cual_estado_civil"); filas++;
					}else{
						datos[filas] = null; filas++;
					}
					
					
					datos[filas] = request.getParameter("etnia"); filas++;
					
					datos[filas] = request.getParameter("regimen"); 
					if(datos[filas].equals("N")){
						filas++;
						datos[filas] = null; filas++;
						datos[filas] = null; filas++;
						
					}else{
						filas++;
						datos[filas] = request.getParameter("eps_ars"); 
						division  = datos[filas].split("-");
						datos[filas] = division[0];
						filas++;
						if(division!=null && division[1].equals("O")){
							datos[filas] = request.getParameter("cual_eps_ars"); filas++;
						}else{
							datos[filas] = null; filas++;
						}
					}
					
					
					datos[filas] = request.getParameter("profesion"); filas++;
					datos[filas] = request.getParameter("cabeza_hogar"); filas++;
					
					
					datos[filas] = request.getParameter("subsidio"); 
					if(!(datos[filas].equals("I"))){
						filas++;
						datos[filas] = request.getParameter("cual_subsidio"); filas++;
					}else{
						filas++;
						datos[filas] = null; filas++;
					}
					
					
					datos[filas] = request.getParameter("hijas"); filas++;
					datos[filas] = request.getParameter("hijos"); filas++;
					datos[filas] = request.getParameter("municipio_residencia"); filas++;
					datos[filas] = request.getParameter("direccion"); filas++;
					datos[filas] = request.getParameter("telefonos"); filas++;
					
					datos[filas] = request.getParameter("liderazgo");
					if(datos[filas].equals("S")){
						filas++;
						datos[filas] = request.getParameter("anos_liderazgo"); filas++;
						datos[filas] = request.getParameter("meses_liderazgo"); filas++;
					}else{
						filas++;
						datos[filas] = null; filas++;
						datos[filas] = null; filas++;
						
					}
					
					datos[filas] = request.getParameter("h_rango_edad1"); filas++;
					datos[filas] = request.getParameter("h_rango_edad2"); filas++;
					datos[filas] = request.getParameter("h_rango_edad3"); filas++;
					datos[filas] = request.getParameter("h_rango_edad4"); filas++;
					datos[filas] = request.getParameter("h_rango_edad5"); filas++;
					datos[filas] = request.getParameter("correo"); filas++;
					
					
					
					for(int i=0; i<=numeroDatos-1; i++){
						
						
						if(datos[i]!=null && datos[i].trim().equals("")){
							datos[i] = null;
						}
						
						if(datos[i]!=null && datos[i].trim().equals("null")){
							datos[i] = null;
						}
					}
					
					   
					actualizo = bAdministrarPublicaciones.guardarHojaVida(datos);
					
		
			}	 		
			
		if(actualizo==1){
	%>
	<script>
		alert("DATOS GENERALES DE LA MUJER FUERON INGRESADOS CON EXITO");

		try {
			window.opener.document.form1.submit();
		} catch (e) {
		}
		window.close();
	</script>
	<%
		}




	%>
<%


java.util.Date fechaActual = new java.util.Date();
SimpleDateFormat vFormato = new SimpleDateFormat("dd'/'MMMM'/'yyyy");
String vFechaActual = vFormato.format(fechaActual);
SimpleDateFormat vFormato2 = new SimpleDateFormat("yyy-MM-dd");
String vFechaActual2 = vFormato2.format(fechaActual);

//List<Object[]> proyectos = bAdministrarPublicaciones.getProyectos();


List<Object[]> departamentos = bAdministrarPublicaciones.getDepartamentos();
List<Object[]> tiposDocumento = bAdministrarPublicaciones.getTiposDocumento();
List<Object[]> generos = bAdministrarPublicaciones.getGeneros();
List<Object[]> estadosCiviles = bAdministrarPublicaciones.getEstadosCiviles();
List<Object[]> etnias = bAdministrarPublicaciones.getEtnias();


%>

<form method="post" name="form1" id="form1">  
<table border="0" cellspacing="2" cellpadding="2"
										style="width: 100%">
										<tr>

											<td colspan="4" style="text-align: left"><strong>Ingreso de Mujeres - Aspectos Demográficos</strong><br /> <br /></td>



										</tr>
										
										<tr>

											<td>Nombres *:</td>
											<td><input id="nombres" name="nombres" type="text"
												value="" style="width:250px"/></td>
											<td>Apellidos *:</td>
											<td><input id="apellidos" name="apellidos" type="text"
												value="" style="width:250px"/></td>


										</tr>
										
										<tr>
											<td>Tipo identificación *:</td>
											<td><select name="tipo_identificacion" id="tipo_identificacion" style="width:250px" onchange="cambiarVisibilidadTI()">
											<option value="">Seleccione...</option>
											<%
												if(tiposDocumento!=null && tiposDocumento.size()>0){
													for(Object[] d: tiposDocumento){%>
														
														<option value="<%=d[0] %>-<%=d[2] %>" ><%=d[1] %></option>
														
														
														<%
													}
												}
												%>
											    
											</select>
											
											</td>
											<td>No. *:</td>
											<td><input id="documento" name="documento" type="text"
												value="" style="width:250px"/>
													

											</td>
										</tr>
										<tr>

											<td><span id="span_ti1" style="color: black;">¿ Cuál tipo de identificación ? *:</span></td>
											<td><span id="span_ti2"><input id="cual_tipo_documento" name="cual_tipo_documento" type="text"
												value="" style="width:250px"/></span></td>
											<td></td>
											<td><script type="text/javascript">cambiarVisibilidadTI();</script></td>


										</tr>
										
										<tr>
											<td>Departamento nacimiento *:</td>
											<td><select name="departamento_nacimiento" id="departamento_nacimiento" style="width:250px" onchange="cargarMunicipioCombo('municipio_nacimiento','departamento_nacimiento')">
													<option value="" selected>Seleccione..</option>
												<%
												if(departamentos!=null && departamentos.size()>0){
													for(Object[] d: departamentos){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
											</select></td>
											<td>Municipio nacimiento *:</td>
											<td><span id="span_municipio_nacimiento"><select name="municipio_nacimiento" id="municipio_nacimiento" style="width:250px">
																<option value="" selected>Seleccione...</option>
											</select></span></td>
										</tr>
										<tr>
											<td>Fecha Nacimiento *:</td>
											<td><input name="fecha_nacimiento" id="fecha_nacimiento" class="texto"
												type="text"
												style="background-color: #D1D6E2; text-align: center; vertical-align: middle; width: 220px"
												readonly="true" 
												value="" /> <img id="cal" name="cal" 
												style="vertical-align: middle"
												src="images/iconocalendario.gif" title="Calendario"
												width="25" height="25" onClick="dp_cal.toggle();" /></td>
											<td>Edad:</td>
											<td><input name="edad" id="edad" class="texto"
												type="text"
												style="background-color: #D1D6E2; width:250px; text-align: center; vertical-align: middle"
												readonly="true" " 
												 /></td>
										</tr>
										
										<tr>
											<td>Sexo *:</td>
											<td><select name="sexo" id="sexo" style="width:250px">
													<option value="" selected>Seleccione..</option>
													<option value="M">MASCULINO</option>
													<option value="F">FEMENINO</option>
													

											</select></td>
											<td>Género *:</td>
											<td><select name="genero" id="genero" style="width:250px">
													<option value="" selected>Seleccione..</option>
													<%
												if(generos!=null && generos.size()>0){
													for(Object[] d: generos){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>

											</select></td>
										</tr>
										
										<tr>
											<td>Estado Civil *:</td>
											<td><select name="estado_civil" id="estado_civil" style="width:250px" onchange="cambiarVisibilidadEC()">
													<option value="" selected>Seleccione..</option>
													<%
												if(estadosCiviles!=null && estadosCiviles.size()>0){
													for(Object[] d: estadosCiviles){%>
														
														<option value="<%=d[0] %>-<%=d[2] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
													
													
													
													
											</select></td>
											<td>Etnia *:</td>
											<td><select name="etnia" id="etnia" style="width:250px">
													<option value="" selected>Seleccione..</option>
												<%
												if(etnias!=null && etnias.size()>0){
													for(Object[] d: etnias){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
													

											</select></td>
										</tr>
										
										<tr>

											<td><span id="span_ec1" style="color: black;">¿ Cuál estado civil ? *:</span></td>
											<td><span id="span_ec2"><input id="cual_estado_civil" name="cual_estado_civil" type="text"
												value="" style="width:250px"/></span></td>
											<td></td>
											<td><script type="text/javascript">cambiarVisibilidadEC();</script></td>


										</tr>
										
										
										<tr>
											<td>Régimen de salud *:</td>
											<td><select name="regimen" id="regimen" style="width:250px" onchange="cargarEpsArs()">
													<option value="" selected>Seleccione..</option>
													<option value="C" >CONTRIBUTIVO</option>
													<option value="S" >SUBSIDIADO</option>
													<option value="N" >NINGUNO</option>
											</select></td>
											<td><span id="span_eps_ars2" style="color:black;">EPS / ARS *:</span></td>
											<td><span id="span_eps_ars"><select name="eps_ars" id="eps_ars" style="width:250px" onchange="cambiarVisibilidadEpsArs()">
													<option value="" selected>Seleccione..</option>
											
											</select></span></td>
										</tr>
										<tr>

											<td><span id="span_eps1" style="color: black;">¿ Cuál eps/ars ? *:</span></td>
											<td><span id="span_eps2"><input id="cual_eps_ars" name="cual_eps_ars" type="text"
												value="" style="width:250px"/></span></td>
											<td></td>
											<td><script type="text/javascript">cargarEpsArs();</script></td>


										</tr>
										
										<tr>
											<td>Profesión u oficio *:</td>
											<td ><input id="profesion" name="profesion" type="text"
												value="" style="width:250px"/></td>
												<td></td>
												<td></td>
												
										</tr>
										
										<tr>
											<td>Cabeza de hogar *:</td>
											<td><select name="cabeza_hogar" id="cabeza_hogar" style="width:250px">
													<option value="" selected>Seleccione..</option>
													<option value="S" >SI</option>
													<option value="N" >NO</option>
													
											</select></td>
											<td>Subsidio recibido *:</td>
											<td><select name="subsidio" id="subsidio" style="width:250px" onchange="cambiarVisibilidadSubsidio();">
													<option value="" selected>Seleccione..</option>
													<option value="N" >NACIONAL</option>
													<option value="M" >MUNICIPAL</option>
													<option value="I" >NINGUNO</option>
													
													
											</select></td>
										</tr>
										<tr>
											<td><span id="span_subsidio1" style="color:black;">¿ Cuales subsidios ? *:</span></td>
											<td ><span id="span_subsidio2" style="color:black;"><input id="cual_subsidio" name="cual_subsidio" type="text"
												value="" style="width:250px"/></span></td>
												<td></td>
												<td><script type="text/javascript">cambiarVisibilidadSubsidio();</script></td>
										</tr>
										
										
										<tr>
											<td>Número Hijas *:</td>
											<td><input id="hijas" name="hijas" type="text"
												value="0" style="width: 30px" /></td>
											<td>Número Hijos *:</td>
											<td><input id="hijos" name="hijos" type="text"
												value="0" style="width: 30px" /></td>
										</tr>
										
										
										<tr>
											<td>Edades hijos *:</td>
											<td colspan="2" ><input type="checkbox" name="rango_edad1" id="rango_edad1" value="S"> 0-5 años&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" name="rango_edad2" id="rango_edad2" value="S">6-10 años <input type="checkbox" name="rango_edad3" id="rango_edad3" value="S"> 11-14 años</td>
											
										</tr>
										
										<tr>
											<td><input type="hidden" name="h_rango_edad1" id="h_rango_edad1"><input type="hidden" name="h_rango_edad2" id="h_rango_edad2"><input type="hidden" name="h_rango_edad3" id="h_rango_edad3"><input type="hidden" name="h_rango_edad4" id="h_rango_edad4"><input type="hidden" name="h_rango_edad5" id="h_rango_edad5"></td>
											<td colspan="2" ><input type="checkbox" name="rango_edad4" id="rango_edad4" value="S"> 15-21 años <input type="checkbox" name="rango_edad5" id="rango_edad5" value="S"> Mayores de 21 años</td>
											
										</tr>
										
										
										
										
										
										<tr>
											<td>Departamento residencia *:</td>
											<td><select name="departamento_residencia" id="departamento_residencia" style="width:250px" onchange="cargarMunicipioCombo('municipio_residencia','departamento_residencia')">
													<option value="" selected>Seleccione..</option>
												<%
												if(departamentos!=null && departamentos.size()>0){
													for(Object[] d: departamentos){%>
														
														<option value="<%=d[0] %>" ><%=d[1] %></option>
														
														
														<%
													}
													
												}
												%>
											</select></td>
											<td>Municipio residencia *:</td>
											<td><span id="span_municipio_residencia"><select name="municipio_residencia" id="municipio_residencia" style="width:250px">
																<option value="" selected>Seleccione...</option>
											</select></span></td>
										</tr>
										<tr>
											<td>Dirección *:</td>
											<td><input id="direccion" name="direccion" type="text"
												value="" style="width:250px"/></td>
											<td>Teléfono(s) *:</td>
											<td><input id="telefonos" name="telefonos" type="text"
												value=""  style="width:250px"/></td>
										</tr>
										<tr>
											<td>Correo electrónico:</td>
											<td><input id="correo" name="correo" type="text"
												value=""  style="width:250px"/></td>
											<td></td>
											<td></td>

										</tr>
										<tr>
											<td>¿ Ha ejercido liderazgo ?*:</td>
											<td><select name="liderazgo" id="liderazgo"  style="width:250px" onchange="cambiarVisibilidadLiderazgo();"
												>
													<option value="" selected>Seleccione...</option>
													<option value="S">SI</option>
													<option value="N">NO</option>
											</select></td>
											<td><span id="span_liderazgo" style="color: black;">Años-Meses de liderazgo *:</span></td>
											<td><table><tr><td><select name="anos_liderazgo" id="anos_liderazgo" style="width: 80px" >
													<option value="0">0 años</option>
													<option value="1">1 año</option>
													
													<%
													for(int i=2; i<=100; i++){
														%>
														<option value="<%=i%>"><%=i%> años</option>
														<%
													}
													%>
												</select></td><td><select name="meses_liderazgo" id="meses_liderazgo" style="width: 80px" >
													<option value="0">0 meses</option>
													<option value="1">1 mes</option>
													
													<%
													for(int i=2; i<=12; i++){
														%>
														<option value="<%=i%>"><%=i%> meses</option>
														<%
													}
													%>
												</select></td></tr>
												</table>
												<script type="text/javascript">cambiarVisibilidadLiderazgo();</script>
												</td>
										</tr>

										<tr>
											<td><span id="span_1"></span></td>
											<td><span id="span_2"></span></td>
											<td><span id="span_3"></span></td>
											<td><span id="span_4"></span></td>
										</tr>
	<tr>
		<td colspan="4"><div align="center"><span id="detalleActualizarDatos">
		 <input
									type="button" value=" Guardar " onclick="validarMujer();" />
	    </span></div></td>
	</tr>
</table>
<span id="detalle"></span>

	<input name="hdnGuardarPublicacion" id="hdnGuardarPublicacion"
			type="hidden" value="0" />
</form>
</div>
</body>
</html>
