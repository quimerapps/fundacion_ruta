<%@ page language="java" contentType="text/html; charset=iso-8859-1" import="java.sql.*,java.util.*,java.text.SimpleDateFormat"
     session="true" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<jsp:useBean id="bSeguridad" class="beans.Seguridad" scope="page" />
<jsp:useBean id="bUsuario" class="beans.Usuario" scope="session" />
<jsp:useBean id="bAdministrarPublicaciones"
	class="beans.AdministrarPublicaciones" scope="page" />
<%@page import="beans.Publicacion"%>	<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
      <title>FUNDACIÓN FEDERICO RESTREPO CARVAJAL</title>
    <meta name="Description" content="FUNDACIÓN FEDERICO RESTREPO CARVAJAL">
<meta name="viewport" content="initial-scale=1.0,width=device-width">
    <script type="text/javascript" src="Scripts/noticias.js" charset="UTF-8"></script>
<script type="text/javascript" src="Scripts/claves.js" charset="UTF-8"></script>
<link rel="stylesheet" type="text/css" href="home_files/bootstrap.css">
<link rel="stylesheet" type="text/css"
	href="home_files/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="home_files/style.css">

<style>
.filters:before {
	width: 0% !important;
}
</style>
<style>
.fluidvids-elem {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
}

.fluidvids {
	width: 100%;
	position: relative;
}
</style>
<style>
.filters:before {
	width: 100% !important;
}
</style>
<style>
.filters:before {
	width: 100% !important;
}
</style>
<style>
.filters:before {
	width: 0% !important;
}
</style>
<style>
.filters:before {
	width: 0% !important;
}
</style>
<link rel="stylesheet" href="assets/css/font-awesome.css" type="text/css" />



</head>  
<!--****************************INICIO SESION************************************* -->
<%
	java.util.Date fechaActual = new java.util.Date();
	SimpleDateFormat vFormato = new SimpleDateFormat("dd'/'MMMM'/'yyyy");
	String vFechaActual = vFormato.format(fechaActual);

	String url = "";
	String field = "";
	String tipoUsuario = new String();
	String contrasena = new String();
	String usuario = new String();
	String rol = new String();
	int usuarioEncontrado = 0;

	if (session.isNew()) {
		//out.println("IdSesion: " + session.getId());
		usuario = (String) request.getParameter("usuario");
		contrasena = (String) request.getParameter("contrasena");


		if (usuario != null && !usuario.trim().equals("")) {
			usuarioEncontrado = bSeguridad.consultarExistenciaUsuario(usuario, contrasena, null).intValue();
			if (usuarioEncontrado != 0) {
				bUsuario = bSeguridad.registrarSesion(usuario, contrasena, usuarioEncontrado);
				if (bUsuario != null) {
					session.setAttribute("sesionCreada", bUsuario);
					session.setMaxInactiveInterval(7200); //2h-7200
					bUsuario = (beans.Usuario) session.getAttribute("sesionCreada");
				} else {
					session.invalidate();
					url = "notificacion.jsp";
					field = "*Su documento y/o contraseñas son incorrectos*";
				}

			} else {
				session.invalidate();
				url = "notificacion.jsp";
				field = "*Su documento y/o contraseñas son incorrectos*";
			}

		}

	} else {
		bUsuario = (beans.Usuario) session.getAttribute("sesionCreada");
		if (bUsuario == null) {
			session.invalidate();
			url = "notificacion.jsp";
			field = "Debe ingresar con su documento y contraseña...";
		}
	}

	if (!field.equals("")) {
%>
<jsp:forward page="<%=url%>">
	<jsp:param name="campo" value="<%=field%>" />
</jsp:forward>
<%
	}
	
	String tipoEgresado = "ADMINISTRADOR";
	
	
	String curso = request.getParameter("id");
	String nombreCurso = request.getParameter("nc");
	
%>


<!--****************************FIN SESION************************************* -->
<body> <form  name="form1" id="form1" method="post">

<input type="hidden" value="<%=curso%>" name="id" id="id"> 

</form> 


<!--HEADER-->  
	<header style="background-color: #F6F2F1"><img src="home_files/logo.png" alt="logo" width="300px" height="130px">
	<div class="container">
		
		<!--MENU-->
		<a href="" id="responsive-menu-button"><i class="fa fa-bars"></i></a>
		<nav class="menu" style="display: block;">
		
		<%@include file="menu.html" %>
		</nav>
		<!--END MENU-->
		<p><%=bUsuario.getPrimerNombre().trim() + " " + bUsuario.getSegundoNombre().trim() + " " + bUsuario.getPrimerApellido().trim() + " " + bUsuario.getSegundoApellido().trim()%><a
				href="#"
				onclick="document.getElementById('form1').action='index.jsp?sesion=false'; document.getElementById('form1').submit()"
				class="cerrar" style="text-decoration: none;"> (Cerrar sesión)</a>
		</p>
	</div>
	</header>
	<!--END HEADER-->
		<!--MAIN SECTION-->
	<div class="main work-page">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<!--POST-->
					<div class="post">

						<div class="content">
							<h4>Imágenes carrito compras arbolito: <%=nombreCurso %></h4>

<br/><br/>
<a href="#" onclick="window.open('/web/crearImagenArbolito.jsp?id=<%=curso %>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=500, height=350'); return false;" style="text-decoration:none">(Ingresar nueva imagen)</a><br><br>
	    <center><span id="detalleProcesos"></span>
<span id="detalleAdministradores"></span>
<input name="hdnUs" id="hdnUs" type="hidden"
	value="<%=bUsuario.getIdUsuario()%>" />
	   <script>
	 
	   cargarImagenes(<%=curso%>);
</script> 

<br>
<input
									type="button" value=" REGRESAR " onclick="document.form1.action='arbolitos.jsp'; document.form1.submit(); " />
	    </center>

<br/><br/><br/><br/>

						</div>
					</div>
					<!--END POST-->


				</div>
			</div>
		</div>
	</div>
	<!--END MAIN SECTION-->

	<!--FOOTER-->
	<footer><center>
	<div class="container">
		<img src="home_files/logo-sm.png" alt="">
		<ul class="list-inline social">
			<li><a href="https://www.facebook.com/fundacionmujeryfuturo" target="_blank"><i class="fa fa-facebook"></i></a></li>
			<li><a href="http://www.mujeryfuturo.org" target="_blank" ><i class="fa fa-twitter"></i></a></li>
			

		</ul>
		<p>
			Contacto: contacto@fundacionfrc.com<br>http://www.fundacionfrc.com<br>Diseñado por: quimerapps.com
		</p>
	</div></center>
	</footer>
	<!--END FOOTER-->

	<script src="home_files/jquery-1.11.0.min.js"></script>
	<script src="home_files/jquery-migrate-1.2.1.js"></script>

	<script src="home_files/smoothscroll.js"></script>
	<script src="home_files/snap.svg-min.js"></script>
	<script src="home_files/jquery.bxslider.js"></script>
	<script src="home_files/retina.min.js"></script>
	<script src="home_files/imagesloaded.pkgd.min.js"></script>
	<script src="home_files/masonry.pkgd.min.js"></script>
	<script src="home_files/classie.js"></script>
	<script src="home_files/modernizr.custom.js"></script>
	<script src="home_files/cbpGridGallery.js"></script>
	<script src="home_files/jquery.resizestop.min.js"></script>
	<script src="home_files/fluidvids.js"></script>
	<script src="home_files/doubletaptogo.js"></script>

	<script src="home_files/main.js"></script>

</body>
</html>
	
