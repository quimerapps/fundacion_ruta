
<%
	response.setHeader("Cache-Control", "no-store");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", 0);
%>

<%@ page contentType="text/html; charset=iso-8859-1" language="java"
	import="java.sql.*,java.util.*,java.text.SimpleDateFormat,java.net.URLEncoder" errorPage=""
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






List<Object[]> mujeres = bAdministrarPublicaciones.getCasos(n,a,d);
	if (mujeres.size() > 0) {
%>
<table width="100%" border="0" cellspacing="2" cellpadding="2">
	<tr>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">ITEM</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">CASO</div>
		</td>
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">FECHA REGISTRO</div>
		</td>
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">MUJER</div>
		</td>
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">IDENTIFICACIÓN</div>
		</td>
		<td bgcolor="#EE486C" colspan="3">
		<div align="center" style="color:#FFFFFF; font-size:12px">INFORMACIÓN DE LOS HECHOS VICTAMIZANTES</div>
		</td>
		
		<td bgcolor="#EE486C" colspan="3">
		<div align="center" style="color:#FFFFFF; font-size:12px">INFORMACIÓN DEL IMPACTO PSICOSOCIAL</div>
		</td>
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px">AGRESORES</div>
		</td>
		
		
		<td bgcolor="#EE486C">
		<div align="center" style="color:#FFFFFF; font-size:12px"></div>
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
		<td align="center" bgcolor="<%=color %>"><font color="black" style="font-size: 12px" ><%=j%></font></td>
		<td align="center" bgcolor="<%=color %>">
		<div align="center"><font color="black" style="font-size: 12px"><%="C"+i[0]  %></font></div>
		</td>
		<td align="center" bgcolor="<%=color %>">
		<div align="center"><font color="black" style="font-size: 12px"><%=i[2]  %></font></div>
		</td>
		<td align="center" bgcolor="<%=color %>">
		<div align="left"><font color="black" style="font-size: 12px"><%=i[3] + " " + i[4] %></font></div>
		</td>
		<td align="center" bgcolor="<%=color %>">
		<div align="left"><font color="black" style="font-size: 12px"><%= i[5]%></font></div>
		</td>
		
		  
		<td align="center" bgcolor="<%=color %>" ><a href="amenazas.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" style="font-size: 12px">Amenazas</a></td>
		<td align="center" bgcolor="<%=color %>" ><a href="delitos.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" style="font-size: 12px">Delitos</a></td>	
		<td align="center" bgcolor="<%=color %>" ><a href="libertades.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" style="font-size: 12px">Libertades</a></td>	
		
		
		<td align="center" bgcolor="<%=color %>" ><a href="individuales.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" style="font-size: 12px">Impactos individuales</a></td>
		<td align="center" bgcolor="<%=color %>" ><a href="familiares.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" style="font-size: 12px">Impactos familiares</a></td>	
		<td align="center" bgcolor="<%=color %>" ><a href="colectivos.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" style="font-size: 12px">Impactos colectivos / organizativos</a></td>
		
		<td align="center" bgcolor="<%=color %>" ><a href="agresores.jsp?id=<%=i[0]%>&nc=<%="C"+i[0] + " - "+i[3] + " " + i[4]  %>" style="font-size: 12px">administrar agresores</a></td>
		
		
		<td align="center" bgcolor="<%=color %>" ><a href="#" onclick="cargarEliminarCaso('<%=i[0] %>'); return false;" style="font-size: 12px">Eliminar</a></td>
		
	</tr>
	<%
		}
	%>
</table>

<%
	} else {
%>
Aún no existen casos registrados en el sistema
<%
	}
%>



