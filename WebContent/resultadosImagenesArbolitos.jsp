
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page language="java" contentType="text/html; charset=iso-8859-1" import="java.sql.*,java.util.*,java.text.SimpleDateFormat"
     session="false" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="beans.Administrador"%>
<jsp:useBean
	id="bAdministrarPublicaciones" class="beans.AdministrarPublicaciones"
	scope="page" />




<%

String id=request.getParameter("id");


List<Object[]> cursos = bAdministrarPublicaciones.getImagenesArbolito(id);

	if (cursos!=null && cursos.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#F2D017">
		<div align="left" style="color:#302014">ITEM</div>
		</td>
		
		<td bgcolor="#F2D017">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#F2D017">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		
	</tr>
	<%
		int j = 0;
			for (Object[] i : cursos) {
				j++;
				
				String color ="#EEEEEE";
				if(j%2==0){
					color ="#FFFFFF";
				}
	%>  
	<tr >
		<td align="left" bgcolor="<%=color %>"><font color="black"><%="Imagen "+j%></font></td>
		<td align="left" bgcolor="<%=color %>">
		<div align="left"><a href="#" onclick="window.open('/web/verImagen.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=650, height=350'); return false;" style="text-decoration:none">Ver imagen</a></div>
		</td>
		  
		<td align="center" bgcolor="<%=color %>"><a href="#" onclick="cargarEliminarImagen('<%=i[0]%>','<%=id %>'); return false;">Eliminar</a></td>  
				
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen imagenes creadas para el arbolito
<%
	}
%>



