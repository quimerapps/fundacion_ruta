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
<title>FUNDACIÓN MUJER Y FUTURO</title>
    <meta name="Description" content="FUNDACIÓN MUJER Y FUTURO ">


<? header("Cache-Control: no-cache, must-revalidate");?>
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="pragma" content="no-cache" />
<meta name="resource-type" content="document" />

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<link href="estilos/estilos.css" rel="stylesheet" type="text/css">
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
.Estilo4 {
	font-size: 12px;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
}
-->


	
</style>


</head>
<body>
<%
//String tu = request.getParameter("tu");
//String us = request.getParameter("us");
String id = request.getParameter("id");


%>

<div id="contiene-imagenes" style="width:500px; height: 500px">
<img src="imagenes/logosFinanciadores/logo_financiador_<%=id %>.jpg" alt="FINANCIADOR" title="FINANCIADOR"/>
</div>

</body>
</html>
