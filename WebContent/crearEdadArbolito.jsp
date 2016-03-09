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
<title>FUNDACIÓN FEDERICO RESTREPO CARVAJAL</title>
    <meta name="Description" content="FUNDACIÓN FEDERICO RESTREPO CARVAJAL ">


<? header("Cache-Control: no-cache, must-revalidate");?>
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="pragma" content="no-cache" />
<meta name="resource-type" content="document" />

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<link href="estilos/estilos.css" rel="stylesheet" type="text/css">
<style type="text/css">

body {
	background-image: url();
	background-color: #98C5E9;
}

</style>
<style type="text/css">
<!--
.Estilo4 {
	font-size: 12px;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
}
-->
</style>

<script>
	function cargarImagen()
	{

		mensaje ="";	

 
		if (document.getElementById('descripcion').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* Escriba una breve descripcion\n";
		}

		if (document.getElementById('edad').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* Escriba una edad para el arbolito\n";
		}else{

			if (parseInt(document.getElementById('edad').value.replace(/^\s*|\s*$/g, "")) <= 0) {
					mensaje = mensaje + "* La edad debe ser mayor a cero\n";
	
			}

		}

		if (document.getElementById('tipo_edad').value.replace(/^\s*|\s*$/g, "") == "") {
			mensaje = mensaje + "* Seleccione si son meses o años\n";
		}

		if(!document.frm_cargar.fil_imagen.value)
		{	mensaje = mensaje + "* Debe seleccionar una imagen. Clic en el botón examinar y seleccione la imagen ";
		}

		

		if(mensaje==""){

						document.frm_cargar.action='recibirEdadArbolito.jsp?id='+document.getElementById('id').value+"&descripcion="+document.getElementById('descripcion').value+"&edad="+document.getElementById('edad').value+"&tipo_edad="+document.getElementById('tipo_edad').value;
						document.frm_cargar.submit();  
					
			

		}else{


						alert(mensaje);

		}


		
		
	
	}

</script>
</head>
<body>
<%
//String tu = request.getParameter("tu");
//String us = request.getParameter("us");
String id = request.getParameter("id");


%>


<form action="recibirEdadArbolito.jsp?id=<%=id%>" method="post" enctype="multipart/form-data" name="frm_cargar">
  <table>
  <tr>   
		<td ><span class="Estilo3"><span
			class="Estilo4 Estilo8">*</span>Breve descripción:</span></td>
		<td colspan="2">
		<input name="descripcion" type="text" id="descripcion"
			class="searchfield"  /></td>
	</tr>	
	
	<tr>   
		<td ><span class="Estilo3"><span
			class="Estilo4 Estilo8">*</span>Edad:</span></td>
		<td >
		
		
		<input name="edad" type="text" id="edad"
			class="searchfield"  />
		
		</td>
			<td >
			<select name="tipo_edad" id="tipo_edad" style="width:100px">
					<option value="" selected>Seleccione...</option>
					<option value="M">MESES</option>
					<option value="A">AÑOS</option>
					
		</select>
			</td>
	</tr>	
	<tr>   
		<td ><span class="Estilo3"><span
			class="Estilo4 Estilo8">*</span>Imagen:</span></td>
		<td colspan="2">
		
		
		 <input name="fil_imagen" type="file" size="40">
		
		</td>
	</tr>	
	
	
	 
	 
  </table>
        <input name="id" type="hidden" id="id" value="<%=id%>">
       
        <p class="Estilo4">* (formatos de imágenes aceptados: jpg, png, gif, jpeg:</p> 
 
        <p align="center">         
          <input type="button" name="btn_cargar" value="Aceptar" onClick="cargarImagen();" class="searchbutton" style="cursor: hand">        
                </p>
</form>
</body>
</html>
