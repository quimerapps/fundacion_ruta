<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.io.*,org.apache.commons.fileupload.*,java.text.SimpleDateFormat"
	errorPage=""%>
<%@page import="beans.Parametro"%>  
<jsp:useBean id="bAdministrarPublicaciones"
	class="beans.AdministrarPublicaciones" scope="page" />
<%
	Parametro parametro = new Parametro();
	String[] parametros2 = parametro.getarametros();
	String directorio_ruta = application.getRealPath("imagenes")+"/arbolitos/";

	String id = request.getParameter("id");
	//String us = request.getParameter("us");

	int guardo = 0;
	// Si se ha enviado correctamente el formulario con la imagenes se carga la imagen al servidor	
	int l = 0;
	int campo = 1;
	int tamano_maximo_archivo = 1024;
	String solonombrearchivo = new String();
	// verifica si tenemos un request de file upload
	boolean isMultipart = FileUpload.isMultipartContent(request);
	if (isMultipart == true) { //valida q si haya un archivo para subir
		// Crea a nuevo manejador de file upload
		DiskFileUpload upload = new DiskFileUpload();
		// Analiza el request   
		List items = upload.parseRequest(request);
		// Crea un iterador para procesar los items
		Iterator iter = items.iterator();
		// Procesa los items subidos
		String[] parametros = new String[10];
		while (iter.hasNext()) {
			FileItem item2 = (FileItem) iter.next();

			if (item2.isFormField()) {
				parametros[l] = item2.getString();
				l++;
			}

			else {
				String fieldName = item2.getFieldName();
				String fileName = item2.getName();
				String contentType = item2.getContentType();
				boolean isInMemory = item2.isInMemory();
				long sizeInBytes = (item2.getSize() / 1024);
				int punto = fileName.lastIndexOf('.');
				String ext = fileName.substring(punto + 1);
				ext = ext.toUpperCase(); //solo vamos aceptar minusculas
				if (ext.equals("JPG") || ext.equals("GIF") || ext.equals("PNG")  || ext.equals("JPEG")    ) {//valida q extensiones puedo subir
					int slash = fileName.lastIndexOf('/');
					int backslash = fileName.lastIndexOf('\\');
					int finpath = backslash;
					if (slash > backslash) {
						finpath = slash;
					}

					solonombrearchivo = fileName.substring(finpath + 1);
					String nombre = solonombrearchivo;
					
					//aqui colocamos el maximo nombre
					
					
					
					
					int puntos = nombre.indexOf('.');
					nombre = nombre.substring(0, puntos);
					nombre = nombre.toUpperCase();
					File dir = new File(directorio_ruta);
					if (dir.exists()) {
						String[] nombres = dir.list();
						for (int i = 0; i < nombres.length; i++) {
							String nombredir = nombres[i];
							int pto = nombredir.indexOf('.');
							nombredir = nombredir.substring(0, pto);
							nombredir = nombredir.toUpperCase();
							if (1==2) {
%><script language="javascript">window.alert("Existe una imagen con el mismo nombre. C�mbieselo o busque otra foto");</script>


<%
	//i=nombres.length;
								break;
							}//fin if de comparacion para q no sobrescriba
							else {
								if (i == nombres.length - 1) {
									if (sizeInBytes <= tamano_maximo_archivo) {
										
										int ultima = bAdministrarPublicaciones.ingresarImagenArbolito(id);
										
										File uploadedFile = new File(directorio_ruta + "arbolito_"+ultima+".jpg");
										item2.write(uploadedFile);
										guardo = 1;   


%>
<script>alert('Imagen cargada con �xito, se cerrar� la ventana. Si esto no sucede haga clic en el bot�n cerrar'); 
try{
	window.opener.document.form1.submit();
	
}catch(e) {
	//alert('La ventana desde la que se abri� �sta, fue cerrada. La foto se carg�, pero para visualizarla abra la ventana repositorio de fotos nuevamente');
}
window.close();

</script>
<%
	} else {
%><script language="javascript">window.alert("La foto excede el tama�o m�ximo de: "+ <%=tamano_maximo_archivo%> +"KB"); window.close();</script>
<%
	}
								}//fin if q va dentro del else copia solo cuando llega al ultivo archivo
							}//fin else de comparacion para q no sobrescriba
						}//fin for nombres.length
					}//fin if dir
				}//fin if ext
				else {
%><script language="javascript">window.alert("Solo se pueden cargar Im�genes"); window.close();</script>

<%
	}
			}//fin else
		}//fin while
	}//fin if
%>
<html>
<head>
 <title>FUNDACI�N FEDERICO RESTREPO CARVAJAL</title>
    <meta name="Description" content="FUNDACI�N FEDERICO RESTREPO CARVAJAL">
   

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

</head>
<body>
<p />
<p />
<p />
<p />
<form name="form1" action="crearImagenArbolito.jsp?id=<%=id %>">
<%
	if (guardo == 1) {
%>
<center><strong>Cierre la ventana para continuar</strong><br />
<br />
<input class="searchbutton" name="btnCerrar" id="btnCerrar"
	type="button" style="cursor: hand" value="Cerrar"
	onclick="window.close(); return false;" /></center>
<%
	} else {
%>
<center><strong>Haga clic en volver para agregar otra
imagen</strong><br />
<br />
<input class="searchbutton" name="btnVolver" id="btnVolver"
	type="button" style="cursor: hand" value="Volver"
	onclick="document.form1.action='crearImagenArbolito.jsp'; document.form1.submit(); return false;" /></center>
<%
	}
%>
</form>
</body>
</html>