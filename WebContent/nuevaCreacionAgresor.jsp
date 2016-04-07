
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.text.SimpleDateFormat" errorPage=""
	session="false"%>

<jsp:useBean id="bAdministrarPublicaciones"
	class="beans.AdministrarPublicaciones" scope="page" />


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<%
	
	
	String actor = request.getParameter("actor");
	
	
	Object [] valores = new Object[10];
	
	valores[0] = request.getParameter("id"); //id_caso
	valores[1] = request.getParameter("conocido"); //conocido
	valores[2] = request.getParameter("nombre");
	valores[3]= request.getParameter("sexo");
	valores[4] = request.getParameter("genero");
	valores[5] = request.getParameter("edad");
	valores[6] = request.getParameter("cual_actor");
	valores[7] = request.getParameter("tipo_actor");
	valores[8] = request.getParameter("cual_tipoactor");
	valores[9] = null;


	String[] separar = actor.split("-");
	if (separar != null) {

		valores[9] = separar[0];

	}
	
	
	for(int i = 0; i<=9; i++){
		
		if(valores[i]!=null && (""+valores[i]).trim().equals("")){
			valores[i] = null;
		}
		out.println("i="+i+" - "+valores[i]+"<br>");
	}
	

	bAdministrarPublicaciones.guardarAgresor(valores);

	int exito = 0;
%>

<input name="hdnExito" type="hidden" value="<%=exito%>" id="hdnExito" />







