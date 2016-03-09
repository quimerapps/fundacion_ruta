<%@page import="beans.Portafolio"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.sql.*,java.util.*,java.text.SimpleDateFormat"
    pageEncoding="ISO-8859-1" session="true"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<jsp:useBean id="bAdministrarPublicaciones" class="beans.AdministrarPublicaciones" scope="page" />
<%@page import="beans.Publicacion"%>
<%@page import="beans.Parametro"%>
<%@page import="beans.Seccion"%>
<%@page import="beans.RepositorioFotos"%>	
<html>
<head>
        <title>FUNDACIÓN FEDERICO RESTREPO CARVAJAL</title>
    <meta name="Description" content="FUNDACIÓN FEDERICO RESTREPO CARVAJAL">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />


 <script language="javascript" type="text/javascript">
function fMenu()
	{
		var vError1 = false;
		var vError2 = false;
		if(document.getElementById('usuario').value=="")
		{
			vError1=true;
		
		}
		if(document.getElementById('contrasena').value=="")
		{
			vError2=true;
		}
		if(vError1)
		{
			if(vError2)
			{
				alert('¡Debe digitar su documento y contraseña de administrador!');
				document.getElementById('usuario').focus();
				
			}else
			{
				alert('¡Debe digitar su documento!');
				document.getElementById('usuario').focus();
			}
		}else
		{
			if(vError2)
			{
				alert('¡Debe especificar la contraseña!');
				document.getElementById('contrasena').focus();
			}else
			{
				document.siss.submit();
			}
		
		}
		
	}
</script>
</head>
<body>
    <%
session.invalidate(); 
					response.setHeader("Cache-Control","no-store");
					response.setHeader("Pragma","no-cache");
					response.setDateHeader("Expires",0);
					
					
					Parametro parametro = new Parametro();
					String [] parametros2  = parametro.getarametros();
					 %>
					 
	

<form id="siss" name="siss" action="home.jsp" method="post"> 
			<p>Por favor ingrese al módulo administrador:<br/><br/></p>
			
		   	
			
			<div > 
				<input type="text" name="usuario"  id="usuario"  placeholder="* Documento : "  
                    onfocus="this.placeholder = ''" onBlur="this.placeholder = '* Documento :'" /><br><br><br><input type="password" name="contrasena" id="contrasena" placeholder="* Clave : " 
                    onfocus="this.placeholder = ''" onBlur="this.placeholder = '* Clave :'" /><br><br><input name="button" type="button"   onclick="fMenu()" value="Ingresar" style="background-color:red; color: white; width: 150px" />    
                </div>
				</form>


</body>

</html>
