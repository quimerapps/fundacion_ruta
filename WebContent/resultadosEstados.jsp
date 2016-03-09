
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.text.SimpleDateFormat, java.text.DecimalFormat" errorPage=""
	session="false"%>
<%@page import="beans.Administrador"%>
<jsp:useBean
	id="bAdministrarPublicaciones" class="beans.AdministrarPublicaciones"
	scope="page" />



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%


List<Object[]> cursos = bAdministrarPublicaciones.getEstados();

	if (cursos!=null && cursos.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#F2D017">
		<div align="left" style="color:#302014">ITEM</div>
		</td>
		<td bgcolor="#F2D017">
		<div align="left" style="color:#302014">ESTADO</div>
		</td>
		<td bgcolor="#F2D017">
		<div align="left" style="color:#302014"></div>
		</td>
		
		<td bgcolor="#F2D017">
		<div align="center" style="color:#302014"></div>
		</td>
		<td bgcolor="#F2D017">
		<div align="center" style="color:#302014"></div>
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
				
				if((""+i[2]).equals("S")){
					i[2] = "Estado inicial";
				}else{
					i[2] = " ";
					
				}
				
				
	%>
	<tr>
		<td align="left" bgcolor="<%=color %>" ><font color="black"><%=j%></font></td>
		<td align="left" bgcolor="<%=color %>">
		<div align="left" ><font color="black"><%=i[1] %></font></div>
		</td>
		
		<td align="left" bgcolor="<%=color %>">
		<div align="left"><font color="black"><%=i[2] %></font></div>
		</td> 
		
		<td align="center" bgcolor="<%=color %>" ><a href="#" onclick="cargarEliminarEstado('<%=i[0]%>'); return false;">Eliminar</a></td>
		<td align="center" bgcolor="<%=color %>" ><a href="#" onclick="window.open('/web/editarEstado.jsp?id=<%=i[0] %>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=650, height=350'); return false;" style="text-decoration:none">Editar</a></td>  
		  
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen estados creados en el sistema
<%
	}
%>



