
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.text.SimpleDateFormat" errorPage=""
	session="false"%>
<%@page import="beans.Administrador"%>
<jsp:useBean
	id="bAdministrarPublicaciones" class="beans.AdministrarPublicaciones"
	scope="page" />



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%


//List<Object[]> mujeres = bAdministrarPublicaciones.getMujeres();


String n = request.getParameter("n");
String a = request.getParameter("a");
String d = request.getParameter("d");






if(n!=null && n.equals("null")){
	n = null;	
	
}

if(a!=null && a.equals("null")){
	a = null;	
	
}
if(d!=null && d.equals("null")){
	
	d = null;	
}






List<Object[]> mujeres = bAdministrarPublicaciones.getMujeresS(n,a,d);
	if (mujeres.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF">ITEM</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF">NOMBRE</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="left" style="color:#FFFFFF">No. IDENTIFICACIÓN</div>
		</td>
		
		<td bgcolor="#EE486C" colspan="3">
		<div align="center" style="color:#FFFFFF">INFORMACIÓN SOCIO DEMOGRÁFICA</div>
		</td>
		
		
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
	</tr>
	<%
		int j = 0;
			for (Object[] i : mujeres) {
				j++;
				
				
				String color ="#EEEEEE";
				if(j%2==0){
					color ="#FFFFFF";
				}
	%>
	<tr >
		<td align="center" bgcolor="<%=color %>"><font color="black" ><%=j%></font></td>
		<td align="center" bgcolor="<%=color %>">
		<div align="left"><font color="black" ><%=i[1] + " " + i[2]  %></font></div>
		</td>
		<td align="left" bgcolor="<%=color %>" ><font color="black" ><%=i[4] %></font></td>
		  
		<td align="center" bgcolor="<%=color %>" ><a href="nivelesEducativos.jsp?id=<%=i[0]%>&nc=<%=i[1] + " " + i[2]  %>">Niveles educativos</a></td>
		<td align="center" bgcolor="<%=color %>" ><a href="actividadesEconomicas.jsp?id=<%=i[0]%>&nc=<%=i[1] + " " + i[2]  %>">Ocupaciones actuales</a></td>		
		<td align="center" bgcolor="<%=color %>" ><a href="participaciones.jsp?id=<%=i[0]%>&nc=<%=i[1] + " " + i[2]  %>">Organizaciones pertenecientes</a></td>
		
		<td align="center" bgcolor="<%=color %>" "><a href="#" onclick="window.open('/web/editarInformacionMujer.jsp?id=<%=i[0]%>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=970, height=650'); return false;" style="text-decoration:none">Ver / Editar</a></td>
		<td align="center" bgcolor="<%=color %>" ><a href="#" onclick="cargarEliminarMujer('<%=i[0] %>'); return false;">Eliminar</a></td>
		
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen mujeres de la fundación creadas en el sistema
<%
	}
%>



