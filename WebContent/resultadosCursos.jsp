
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


List<Object[]> cursos = bAdministrarPublicaciones.getCursos();

	if (cursos!=null && cursos.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#E81D8F">
		<div align="left" style="color:#FFFFFF">ITEM</div>
		</td>
		<td bgcolor="#E81D8F">
		<div align="left" style="color:#FFFFFF">CURSO</div>
		</td>
		<td bgcolor="#E81D8F">
		<div align="left" style="color:#FFFFFF">PROYECTO AL QUE PERTENECE</div>
		</td>
		<td bgcolor="#E81D8F">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#E81D8F">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#E81D8F">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#E81D8F">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#E81D8F">
		<div align="center" style="color:#FFFFFF"></div>
		</td>
		<td bgcolor="#E81D8F">
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
		<td align="left" bgcolor="<%=color %>" style="font-size:11px"><font color="black"><%=j%></font></td>
		<td align="left" bgcolor="<%=color %>" style="font-size:11px">
		<div align="left" ><font color="black"><%=i[1] %></font></div>
		</td>
		<td align="left" bgcolor="<%=color %>" style="font-size:11px">
		<div align="left"><font color="black"><%=i[3] %></font></div>
		</td>  
		<td align="center" bgcolor="<%=color %>" style="font-size:11px"><a href="mujeresCurso.jsp?id=<%=i[0]%>&nc=<%=i[1] %>">Mujeres del curso</a></td>
		<td align="center" bgcolor="<%=color %>" style="font-size:11px"><a href="temas.jsp?id=<%=i[0]%>&nc=<%=i[1] %>">Temas</a></td>
		<td align="center" bgcolor="<%=color %>" style="font-size:11px"><a href="lineasCurso.jsp?id=<%=i[0]%>&nc=<%=i[1] %>">L�neas estrat�gicas</a></td>
		<td align="center" bgcolor="<%=color %>" style="font-size:11px"><a href="financiadoresCurso.jsp?id=<%=i[0]%>&nc=<%=i[1] %>">Financiadores</a></td>
		<td align="center" bgcolor="<%=color %>" style="font-size:11px"><a href="#" onclick="cargarEliminarCurso('<%=i[0]%>'); return false;">Eliminar</a></td>
		<td align="center" bgcolor="<%=color %>" style="font-size:11px"><a href="#" onclick="window.open('/web/editarCurso.jsp?id=<%=i[0] %>', 'popup', 'toolbar=no, menubar=no, scrollbars=no, resizable=no, width=650, height=350'); return false;" style="text-decoration:none">Editar</a></td>  
		  
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
A�n no existen cursos creados en el sistema
<%
	}
%>



