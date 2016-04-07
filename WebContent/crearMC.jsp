<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*" import="java.util.*,java.text.SimpleDateFormat"
	session="false"%>
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
</head>
<body>
	<div id="contenedor">
	
		<form method="post" name="form1" id="form1">
			<table border="0" width="100%" cellpadding="2">
				<tr>
					<td>No. identificación :</td>
					<td><input id="documento" name="documento" type="text" value="" /></td>
					<td></td>
					<td></td>
				</tr>
				<tr>

					<td>Nombres :</td>
					<td><input id="nombres" name="nombres" type="text" value="" /></td>
					<td>Apellidos:</td>
					<td><input id="apellidos" name="apellidos" type="text" value="" /></td>


				</tr>
				
				
			</table>
			<center>
			
			<br /> <input
									type="button" value=" Consultar " onclick="cargarMujeres2();" /> <br />
			
			</center>
			
			<span id="detalleAdministradores"></span>
		</form>
	</div>
</body>
</html>
