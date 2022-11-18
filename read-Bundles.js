var bundleNuevo = `
using System.Web;
using System.Web.Optimization;

namespace OneCard_ServicioCliente
{
public class BundleConfig
{
//***********************************************************************************************************************************************
//********************************************************COLECCION DE LIBRERIAS SCRIPT**********************************************************
//***********************************************************************************************************************************************
/*
Conjunto de librerias para bundles en Mainjs
*/
private static string[] bundleMainJs = new string[] {
"~/Scripts/bootstrap.js",
"~/Scripts/select2.js",
"~/Scripts/main.js",//lib oc
"~/Scripts/jquery-3.1.1.js",
"~/Scripts/swag.js"};

/*
Biblioteca multiplataforma de JavaScript
v2.2.3
https://www.cdnpkg.com/jquery/2.2.3
*/
private static string[] jqueryv2_2_3 = new string[] {
"~/Scripts/jquery-{version}.js",
"~/Scripts/onecard-core.js"};

/*
Biblioteca multiplataforma de JavaScript 
V3.1.1
https://www.cdnpkg.com/jquery/3.1.1
*/
private static string[] jqueryv3_1_1 = new string[] {
"~/Scripts/jquery-3.1.1.js"};

/*
Plugin para validar un formualrio en lado cliente
v1.16.0
https://learn.microsoft.com/en-us/aspnet/ajax/cdn/jquery-validate/
*/
private static string[] jqueryvalidatev1_16_0 = new string[] {
"~/Scripts/jquery.validate*"};

/*
Es una librería que nos permite conocer la compatibilidad del navegador con tecnologías HTML5 y CSS3
v2.8.3
https://www.cdnpkg.com/modernizr/2.8.3
*/
private static string[] modernizrv2_8_3 = new string[] {
"~/Scripts/modernizr-*"};

/*
FrameworkJS para crear interfaces con un diseño responsive. Ofrece herramientas y funciones 
v3.3.7
https://blog.getbootstrap.com/2016/07/25/bootstrap-3-3-7-released/
*/
private static string[] bootstrapv3_3_7 = new string[] {
"~/Scripts/bootstrap.js"};

/*
Script que permite diseños web responsivos en navegadores que no soportan CSS3 Media Queries
v1.4.0
https://www.cdnpkg.com/respond.js/1.4.0
*/
private static string[] respondv1_4_0 = new string[] {
"~/Scripts/respond.js"};

/*
Calendario personalizable, selecciones de fechas asociacion HTML, entradas formularios
v1.4.0
https://www.cdnpkg.com/bootstrap-datepicker/1.4.0
*/
private static string[] bootstrap_datepickerv1_4_0 = new string[] {
"~/Scripts/bootstrap-datepicker.js",
"~/Scripts/bootstrap-datepicker-es.js"};

/*
Selector de elementos con un cuadro de búsqueda, para encontrar la seleccion del usuario
v4.0.1
https://www.cdnpkg.com/select2/4.0.1
*/
private static string[] select2v4_0_1 = new string[] {
"~/Scripts/select2.js"};
private static string[] facturacion_select2v4_0_1 = new string[] {
"~/Scripts/Facturacion/select2.js"};

/*
Motor de búsqueda de css's aplicable al marcado HTML cuando se renderiza y a una lista de datos
v0.13.0
https://www.cdnpkg.com/jets/0.13.0
*/
private static string[] jetsv0_13_0 = new string[] {
"~/Scripts/jets.js"};

/*
Es una herramienta para manipular colecciones de datos en javascript
v2.2.0.2
https://www.cdnpkg.com/linq.js/2.2.0.2
*/
private static string[] linqv2_2_0_2 = new string[] {
"~/Scripts/jquery.linq.js"};

/*
Método para personalizar alertas en las aplicaciones, sitios web y juegos
v4.1.7
https://www.cdnpkg.com/sweetalert2/4.1.7
*/
private static string[] sweetalert2v4_1_7 = new string[] {
"~/Scripts/sweetalert2.js"};

/*
Biblioteca que ayuda a analizar, validar, manipular y mostrar la fecha/hora en JavaScript
v?
https://www.cdnpkg.com/moment
*/
private static string[] moment_js = new string[] {
"~/Scripts/moment.js"};
private static string[] reportes_moment_js = new string[] {
"~/Scripts/Reportes/ScriptsReportes/moment/moment.js"};

/*
Biblioteca para plantillas de páginasW reutilizables. Combinación de HTML, texto y expresiones
v4.1.2
https://www.cdnpkg.com/handlebars.js/4.1.2
*/
private static string[] handlebarsv4_1_2 = new string[] {
"~/Scripts/handlebars v4.1.2.js"};
private static string[] core_handlebars = new string[] {
"~/Scripts/Core.handlebars.js"};
private static string[] jquery_handlebars = new string[] {
"~/Areas/Products/Scripts/jquery.handlebars.js"};

/*
Un calendario totalmente personalizable, donde se pueden realizar selecciones de fechas
v1.4.0
https://www.cdnpkg.com/bootstrap-datepicker/1.4.0
*/
private static string[] datetimepickerv2_4_5 = new string[] {
"~/Scripts/jquery.datetimepicker.js"};

//********************************************************BOOTSTRAP TABLE AND EXPORT*************************************************************
/*
Una tabla ampliada a la integración con algunos de los frameworks CSS más utilizados
v1.12.2
https://www.cdnpkg.com/bootstrap-table/1.12.2?id=370590
*/
private static string[] bootstrap_tablev1_12_2 = new string[] {
"~/Scripts/bootstrap-table.js",
"~/Scripts/bootstrap-table-es-ES.js"};

/*
Una tabla ampliada a la integración con algunos de los frameworks CSS más utilizados.
v1.11.1
https://www.cdnpkg.com/bootstrap-table/1.11.1?id=370590
*/
private static string[] bootstrap_tablev1_11_1 = new string[] {
"~/Scripts/Facturacion/bootstrap-table.js"};

/*
Una tabla ampliada a la integración con algunos de los frameworks CSS más utilizados.
v1.11.0
https://www.cdnpkg.com/bootstrap-table/1.11.1?id=370590
*/
private static string[] bootstrap_tablev1_11_0 = new string[] {
"~/Scripts/bootstrap-table-v1_11.js",
"~/Scripts/bootstrap-table-es-ES.js"};

/*
Una tabla ampliada a la integración con algunos de los frameworks CSS más utilizados
v1.10.16
https://github.com/hhurz/tableExport.jquery.plugin
*/
private static string[] bootstrapTableExportv1_10_16 = new string[] {
"~/Scripts/btTablev1-15-5/tableExport.js"};//version v1.10.16

/*
Una tabla ampliada a la integración con algunos de los frameworks CSS más utilizados
v1.16.0
https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.16.0/bootstrap-table.min.js
*/
private static string[] bootstrapTableExport_minv1_16_10 = new string[] {
"~/Scripts/btTablev1-15-5/extensions/export/bootstrap-table-export.min.js"}; //version v1.16.0

/*
An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma
v1.15.5
https://bootstrap-table.com  -  http://wenzhixin.net.cn/
*/
private static string[] bootstrapTableExportv1_15_5 = new string[] {
"~/Scripts/btTablev1-15-5/bootstrap-table.min.js",
"~/Scripts/btTablev1-15-5/bootstrap-table-es-MX.min.js"};

/*
Paquete para editar con bootstrap 3 
v1.5.1 
https://www.cdnpkg.com/bootstrap-editable  -   https://www.cdnpkg.com/bootstrap-editable
*/
private static string[] bootstrap_editablev1_5_1 = new string[] {
"~/Scripts/Intranet/bootstrap-editable/bootstrap-editable.js"};

/*
Plugin jQuery que permite convertir rápida y dinámicamente tablas HTML en hojas de cálculo de Excel
tableExport - https://github.com/hhurz/tableExport.jquery.plugin 
boostrap - https://www.cdnpkg.com/bootstrap-table/1.10.9?id=370590
*/
private static string[] bootstrap_table_export_js = new string[] {
"~/Scripts/Invoice/RFCValidator/tableExport.min.js",
"~/Scripts/Invoice/RFCValidator/bootstrap-table-export.js"};
//********************************************************BOOTSTRAP TABLE AND EXPORT*************************************************************

/*
Libreria con tecnicas para el desarrollo de aplicaciones asíncronas
v?
https://www.cdnpkg.com/jquery-ajax-native
*/
private static string[] jquery_ajax_native_js = new string[] {
"~/Scripts/jquery-ajax-native.js"};

/*
Librería para la creación, lectura y edición de archivos .zip, desde su API.
v?
https://www.cdnpkg.com/jszip
*/
private static string[] jszip_js = new string[] {
"~/Scripts/Excel/jszip.js"};

/*
Plugin para extencion de achivos de microsoft xlsx o xls  
v?
https://www.cdnpkg.com/xlsx-js
*/
private static string[] xlsx_js = new string[] {
"~/Scripts/btTablev1-15-5/libs/js-xlsx/xlsx.core.min.js",
"~/Scripts/Excel/xlsx.js"};
private static string[] reportes_xlsx_js = new string[] {
"~/Scripts/Reportes/ScriptsReportes/excelMasivo/xlsx.core.min.js"};

/*
Libreria que partir de datos produce infogramas dinámicos e interactivos en la web
v?
https://www.cdnpkg.com/d3.js
*/
private static string[] d3_js = new string[] {
"~/Scripts/Reportes/ScriptsReportes/d3/d3.js"};

/*
Screenshots con JavaScript
v1_0_0_alpha_12
<https://html2canvas.hertzen.com>
*/
private static string[] html2canvasv1_0_0_alpha_12 = new string[] {
"~/Scripts/Reportes/ScriptsReportes/canvas/html2canvas.js"};

/*
Plugin para crear indicadores de actividad que giran (imagenes, GIFs, videos)
v?
https://www.cdnpkg.com/spin.js?id=70801
*/
private static string[] spin_js = new string[] {
"~/Scripts/Intranet/ExcelMassive/spin.js"};

/*
Define un icono en el formato de archivo GIF, PNG o ICO para sitio web
v0.3.10
https://unpkg.com/favico.js@0.3.10/favico.js // NO CHANGE NAME
*/
private static string[] favicov0_3_10 = new string[] {
"~/Scripts/Intranet/BlockCards/favico-0.3.10.js"};

/*
Creciente colección de ayudas para el manillar .js
V0.6.1
https://www.cdnpkg.com/swag/0.6.1
*/
private static string[] swagv0_6_1 = new string[] {
"~/Scripts/swag.js"};

/*
Plugin jQuery para crear carruseles/deslizadores personalizables, para móviles
V?
https://www.cdnpkg.com/slick
*/
private static string[] slick_js = new string[] {
"~/Scripts/Intranet/Anuncios/slick.js"};

/*
Biblioteca para integrae marcos de trabajo de JavaScript como Vue, React y Angular
v4
https://fullcalendar.io/docs/v4
*/
private static string[] fullcalendarJsv4 = new string[] {
"~/Areas/RH/Content/FullCalendar/core/main.js", //v4.3.1
"~/Areas/RH/Content/FullCalendar/bootstrap/main.js", //v4.3.0
"~/Areas/RH/Content/FullCalendar/daygrid/main.js",//v4.3.0
"~/Areas/RH/Content/FullCalendar/timegrid/main.js",//v4.3.0
"~/Areas/RH/Content/FullCalendar/list/main.js",//v4.3.0
"~/Areas/RH/Content/FullCalendar/luxon/main.js",//v4.3.0
"~/Areas/RH/Content/FullCalendar/moment/main.js"};//v4.3.0

/*
Manejador de parametros de URL
v?
https://github.com/alrusdi/jquery-plugin-query-object
*/
private static string[] jQueryUrlQueryObject_js = new string[] {
"~/Scripts/jquery.query-object.js"};

/*
Repetidor dinamicos de elementos HTML 
v?
https://www.jqueryscript.net/form/Form-Fields-Repeater.html
*/
private static string[] jQueryFormRepeater_js = new string[] {
"~/Areas/Conciliacion/Scripts/External/repeater.js"};

/*
Plugin para enmascarar inputs de moneda 
v3.1.1 
https://plentz.github.io/jquery-maskmoney/
*/
private static string[] jQueryMaskMoneyv3_1_1 = new string[] {
"~/Areas/Conciliacion/Scripts/External/jquery.maskMoney.min.js"};

/*
Biblioteca para añadir la funcionalidad de arrastrar y soltar archivos a sus formularios web 
V?
http://www.dropzonejs.com
*/
private static string[] Dropzone_js = new string[] {
"~/Areas/Products/Scripts/dropzone.js"};

/*
Chart
v0.6.8
https://www.cdnpkg.com/c3/0.6.8
*/
private static string[] c3v0_6_8 = new string[] {
"~/Scripts/Reportes/ScriptsReportes/c3/c3.js"};

/*
Easy import packege project
v?
https://github.com/vesln/package
*/
private static string[] Package_js = new string[] {
"~/Scripts/Package/Package.js"};

/*
Biblioteca de componentes intractivos jquery        
https://www.cdnpkg.com/jqueryui/file/jquery-ui.min.js/
*/
private static string[] jqueryui_js = new string[] {
"~/Scripts/jquery-ui.min.js"};

/*
An HTML5 saveAs() FileSaver implementation.
https://www.cdnpkg.com/FileSaver.js
http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js
*/
private static string[] FileSaver_js = new string[] {
"~/Scripts/Reportes/ScriptsReportes/excelMasivo/FileSaver.js"};

/*
Biblioteca para manejar .xslx
https://www.npmjs.com/package/xlsx-style
*/
private static string[] Jhxlsx_js = new string[] {
"~/Scripts/Reportes/ScriptsReportes/excelMasivo/Jhxlsx.js"};

/*
proporciona una forma declarativa de validar objetos javascript. Apto para producción 
v0.11.9
https://www.cdnpkg.com/validator   -   https://www.cdnpkg.com/validator.js
*/
private static string[] validatorv0_11_9 = new string[] {
"~/Areas/RH/Scripts/Validator/validator.js"};

//***********************************************************************************************************************************************
//********************************************************COLECCION DE LIBRERIAS STYLE***********************************************************
//***********************************************************************************************************************************************

/*
The iconic SVG, font, and CSS toolkit 
v4.7.0
https://www.cdnpkg.com/font-awesome/4.7.0
*/
private static string[] font_awesomev4_7_0 = new string[] {
"~/Content/font-awesome.css"};

/*
Plantillas de diseño basadas en HTML y CSS para la tipografía, los formularios, los botones, las tablas, la navegación
v3.3.7
https://www.cdnpkg.com/bootstrap-css/3.3.7
*/
private static string[] bootstrapcssv3_3_7 = new string[] {
"~/Content/bootstrap.css"};

/*
Selector de elementos con un cuadro de búsqueda, haciendo más sencillo encontrar lo que desea seleccionar el usuario.
https://www.cdnpkg.com/select2/file/select2.css/  
*/
private static string[] select2_css = new string[] {
"~/Content/select2.css"};

/*
Simple css to make select2 widgets fit in with bootstrap
v0.1.0-beta.4 
https://www.cdnpkg.com/select2-bootstrap-css 
*/
private static string[] select2_bootstrapv0_1_0_beta_4 = new string[] {
"~/Content/select2-bootstrap.css",
"~/Content/Facturacion/select2-bootstrap.css",};

/*
Seleccion de fecha y Estilos
https://www.cdnpkg.com/jquery-datetimepicker/file/jquery.datetimepicker.css/
*/
private static string[] datetimepicker_css = new string[] {
"~/Content/jquery.datetimepicker.css"};

/*
Cross-browser LESS animation library for Bootstrap
Documenation: https://github.com/machito/animate.less
*/
private static string[] site_css = new string[] {
"~/Content/site.css"};

/*
An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features.- 
v1.17.1
https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.17.1/bootstrap-table.css
*/
private static string[] bootstrap_table_cssv1_17_1 = new string[] {
"~/Content/bootstrap-table.css"};
private static string[] bootstrap_table_cssv1_11_1 = new string[] {
"~/Content/Facturacion/bootstrap-table.css"};

/*
Datepicker for Bootstrap 
v1.4.0 
(https://github.com/eternicode/bootstrap-datepicker)
*/
private static string[] bootstrap_datepicker_css = new string[] {
"~/Content/bootstrap-datepicker.css"};

/*
Simple loaders for your web applications using only one div and pure CSS 
V3.3.3
https://cdnjs.cloudflare.com/ajax/libs/css-loader/3.3.3/css-loader.css

*/
private static string[] loaderv3_3_3 = new string[] {
"~/Content/css-loader.css"};

/*
personalizar alertas en las aplicaciones, sitios web y juegos. Permite al usuario cambiarlas con un botón estándar de JavaScript
https://www.cdnpkg.com/sweetalert/file/sweet-alert.css/
*/
private static string[] sweetalert_css = new string[] {
"~/Content/sweetalert.css"};

/*
creacion de diseno de tablas
v1.15.5
https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.15.5/bootstrap-table.min.css
*/
private static string[] bootstraptTablev1_15_5 = new string[] {
"~/Content/btTable/bootstrap-table.min.css"};

/*
Handles drag and drop of files for you.             
https://www.cdnpkg.com/dropzone/file/dropzone.css/
*/
private static string[] Dropzone_css = new string[] {
"~/Content/dropzone.css"};

/*
biblioteca para integrage de marcos css para Vue, React y Angular
v4
https://fullcalendar.io/docs/v4
*/
private static string[] fullcalendarcssv4 = new string[] {
"~/Areas/RH/Content/FullCalendar/bootstrap/main.css",
"~/Areas/RH/Content/FullCalendar/core/main.css",
"~/Areas/RH/Content/FullCalendar/daygrid/main.css",
"~/Areas/RH/Content/FullCalendar/timegrid/main.css",
"~/Areas/RH/Content/FullCalendar/list/main.css"};

public static void RegisterBundles(BundleCollection bundles){
//LIBRERIAS EXTERNAS
bundles = BundlesExternos(bundles);
//BUNDLES ONECARD
bundles = BundlesConciliacion(bundles);
bundles = BundlesHemsa(bundles);
bundles = BundlesIntegrador(bundles);
bundles = BundlesIntranet(bundles);
bundles = BundlesInvoice(bundles);
bundles = BundlesReportes(bundles);
bundles = BundlesRH(bundles);
bundles = BundlesSTP(bundles);
bundles = BundlesTravex(bundles);
bundles = BundlesHelpDesk(bundles);
bundles = BundlesAccountViews(bundles);
//LIBRERIAS LAYOUT     
bundles = BundlesLayout(bundles);
//LIBRERIAS MIXTAS 
bundles = BundlesMixtos(bundles);
//LIBRERIAS INUSABLES
bundles = BundlesInusables(bundles);
}

public static BundleCollection BundlesExternos(BundleCollection bundles){
bundles.Add(new ScriptBundle("~/bundles/handlebars").Include(handlebarsv4_1_2));

bundles.Add(new ScriptBundle("~/bundles/select2").Include(select2v4_0_1));

bundles.Add(new ScriptBundle("~/bundles/linq").Include(linqv2_2_0_2));

bundles.Add(new ScriptBundle("~/bundles/swal").Include(sweetalert2v4_1_7));

bundles.Add(new ScriptBundle("~/bundles/moment").Include(moment_js));

bundles.Add(new ScriptBundle("~/bundles/datetimepicker").Include(datetimepickerv2_4_5));

bundles.Add(new ScriptBundle("~/bundles/table_all").Include(bootstrap_tablev1_12_2));

bundles.Add(new ScriptBundle("~/bundles/table_clarification").Include(bootstrap_tablev1_11_0));

bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/c3").Include(c3v0_6_8));

bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/d3").Include(d3_js));

bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/canvas").Include(html2canvasv1_0_0_alpha_12));

bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/moment").Include(reportes_moment_js));//moment_js

bundles.Add(new ScriptBundle("~/ajax/native").Include(jquery_ajax_native_js));

bundles.Add(new ScriptBundle("~/bundles/salajuntas/fullcalendarJs").Include(fullcalendarJsv4));

bundles.Add(new ScriptBundle("~/bundles/btTableExportv1-15-5")
.Include(bootstrapTableExportv1_10_16)
.Include(xlsx_js)
.Include(bootstrapTableExportv1_15_5)
.Include(bootstrapTableExport_minv1_16_10));

bundles.Add(new ScriptBundle("~/bundles/PantallasFacturacion")
.Include(jqueryvalidatev1_16_0)
.Include(bootstrap_tablev1_11_1)
.Include(facturacion_select2v4_0_1));

bundles.Add(new ScriptBundle("~/bundles/jets").Include(jetsv0_13_0));

bundles.Add(new ScriptBundle("~/bundles/Package").Include(Package_js));

bundles.Add(new ScriptBundle("~/bundles/jQueryUrlQueryObject").Include(jQueryUrlQueryObject_js));

bundles.Add(new ScriptBundle("~/bundles/jQueryFormRepeater").Include(jQueryFormRepeater_js));

bundles.Add(new ScriptBundle("~/bundles/jQueryMaskMoney").Include(jQueryMaskMoneyv3_1_1));

bundles.Add(new ScriptBundle("~/bundles/Dropzone").Include(Dropzone_js));

bundles.Add(new ScriptBundle("~/bundles/favico").Include(favicov0_3_10));

bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/excelMasivo")
.Include(FileSaver_js)
.Include(Jhxlsx_js)
.Include(reportes_xlsx_js));

//***CSS SECTION****
bundles.Add(new StyleBundle("~/Content/select2").Include(select2_css));

bundles.Add(new StyleBundle("~/Content/select2-bootstrap").Include(select2_bootstrapv0_1_0_beta_4));

bundles.Add(new StyleBundle("~/Content/datetimepicker").Include(datetimepicker_css));

bundles.Add(new StyleBundle("~/Content/loader").Include(loaderv3_3_3));

bundles.Add(new StyleBundle("~/Content/table_all").Include(bootstrap_table_cssv1_17_1));

bundles.Add(new StyleBundle("~/Content/swal").Include(sweetalert_css));

bundles.Add(new StyleBundle("~/Content/DropzoneCSS").Include(Dropzone_css));

bundles.Add(new StyleBundle("~/bundles/SalaJuntas/fullcalendarCss").Include(fullcalendarcssv4));

bundles.Add(new StyleBundle("~/bundles/Classifications/MainCSS")
.Include(bootstrapcssv3_3_7)
.Include(select2_css));

bundles.Add(new StyleBundle("~/bundles/UserDepartment/MainCSS")
.Include(bootstrapcssv3_3_7)
.Include(select2_css));

bundles.Add(new StyleBundle("~/bundles/RegisterUser/MainCSS")
.Include(bootstrapcssv3_3_7)
.Include(select2_css));

bundles.Add(new StyleBundle("~/bundles/RH/Departments/MainCSS")
.Include(bootstrapcssv3_3_7)
.Include(select2_css));
return bundles;
}

public static BundleCollection BundlesIntranet(BundleCollection bundles){
bundles.Add(new ScriptBundle("~/bundles/clarification").Include(
"~/Scripts/intranet/clarification/clarification.js",
"~/Scripts/intranet/clarification/ClarificationSeg.js"));

//Despositos CUENTA MAESTRA
bundles.Add(new ScriptBundle("~/bundles/DepositsCM").Include(
"~/Scripts/DepositsCM/DepositsCM.js"));

//SCRITS MasterAccountRefillReports
bundles.Add(new ScriptBundle("~/bundles/MasterAccountRefillReports").Include(
"~/Scripts/MasterAccountRefillReports/MasterAccountRefillReports.js"));

//INFO CARD
bundles.Add(new ScriptBundle("~/bundles/infoCard").Include(
"~/Scripts/InfoCard/InfoCard.js"));

//Cambio de estatus masivo
bundles.Add(new ScriptBundle("~/bundles/StatusMassive").Include(
"~/Scripts/Intranet/StatusMassive/StatusMassive.js"));

//Cambio de producto a tarjeta masivo
bundles.Add(new ScriptBundle("~/bundles/ProductsCardMassive").Include(
"~/Scripts/Intranet/ProductsCardMassive/ProductsCardMassive.js"));

//Cambio de producto a tarjeta 
bundles.Add(new ScriptBundle("~/bundles/ProductChange").Include(
"~/Scripts/Intranet/ProductChange/ProductChange.js"));

bundles.Add(new ScriptBundle("~/bundles/ConfigAutomaticRefill").Include(
"~/Scripts/Soporte/ConfigAutomaticRefill/ConfigAutomaticRefill.js"));

bundles.Add(new ScriptBundle("~/bundles/StatusOperation").Include(
"~/Scripts/Soporte/StatusOperations/StatusOperations.js"));

//Reporte - ReportMovsCloud
bundles.Add(new ScriptBundle("~/bundles/ReportMovsCloud").Include(
"~/Scripts/Intranet/ReportMovsCloud/ReportMovsCloud.js"));

//Reporte - ReportMovs
bundles.Add(new ScriptBundle("~/bundles/ReportMovs").Include(
"~/Scripts/Intranet/ReportMovs/ReportMovs.js"));

//Reporte - MasterAccount
bundles.Add(new ScriptBundle("~/bundles/ReportMasterAccount").Include(
"~/Scripts/Intranet/ReportMasterAccount/ReportMasterAccount.js"));

// - MembershipLock
bundles.Add(new ScriptBundle("~/bundles/MembershipLock").Include(
"~/Scripts/Intranet/MembershipLock/MembershipLock.js"));

// - Reports Fuel
bundles.Add(new ScriptBundle("~/bundles/Fuel").Include(
"~/Scripts/Intranet/Fuel/Fuel.js"));

// - Reports FuelStation
bundles.Add(new ScriptBundle("~/bundles/FuelStation").Include(
"~/Scripts/Intranet/FuelStation/FuelStation.js"));

// - Reports Employees
bundles.Add(new ScriptBundle("~/bundles/ReportEmployees").Include(
"~/Scripts/Intranet/ReportEmployees/ReportEmployees.js"));

bundles.Add(new ScriptBundle("~/bundles/ReportEmployees2").Include(
"~/Scripts/Intranet/ReportEmployees/ReportEmployees2.js"));

// - BatchRefll
bundles.Add(new ScriptBundle("~/bundles/BatchRefill").Include(
"~/Scripts/Intranet/BatchRefill/BatchRefill.js"));

// - BlockCards
bundles.Add(new ScriptBundle("~/bundles/BlockCards").Include(
"~/Scripts/Intranet/BlockCards/BlockCards.js"));

// - Aprovisionar
bundles.Add(new ScriptBundle("~/bundles/Aprovisionar").Include(
"~/Scripts/Intranet/Aprovisionar/Aprovisionar.js"));

// - MasterAccountRefill
bundles.Add(new ScriptBundle("~/bundles/MasterAccountRefill").Include(
"~/Scripts/Intranet/MasterAccountRefill/MasterAccountRefill.js"));

bundles.Add(new ScriptBundle("~/bundles/ManualRefill").Include(
"~/Scripts/Intranet/ManualRefill/ManualRefill.js"));

bundles.Add(new ScriptBundle("~/bundles/ManualRefillLog").Include(
"~/Scripts/Intranet/ManualRefillLog/ManualRefillLog.js"));

bundles.Add(new ScriptBundle("~/bundles/RFCCURP_Validate").Include(
"~/Scripts/Intranet/ValidateCurpRfc/RFCCURP_Validate.js"));

//PLD Prevencion de antilavado
bundles.Add(new ScriptBundle("~/bundles/CardReplace").Include(
"~/Scripts/Intranet/CardReplace/CardReplace.js"));

// - Certification
bundles.Add(new ScriptBundle("~/bundles/CertificationJS").Include(
"~/Scripts/Intranet/Certification/Certification.js"));

// - ClosingAct
bundles.Add(new ScriptBundle("~/bundles/ClosingActJS").Include(
"~/Scripts/Intranet/ClosingAct/ClosingAct.js"));

// - Usuarios de oxxo
bundles.Add(new ScriptBundle("~/bundles/OxxoUsersJS").Include(
"~/Scripts/Intranet/OxxoUsers/OxxoUsers.js"));

// - FuelCardLock
bundles.Add(new ScriptBundle("~/bundles/FuelCardLock").Include(
"~/Scripts/Intranet/FuelCardLock/FuelCardLock.js"));

// - Agreement
bundles.Add(new ScriptBundle("~/bundles/Agreement").Include(
"~/Scripts/Intranet/Agreement/Agreement.js"));

// - Affiliations
bundles.Add(new ScriptBundle("~/bundles/Affiliations").Include(
"~/Scripts/Intranet/Affiliations/Affiliations.js"));

//***CSS SECTION****
bundles.Add(new StyleBundle("~/Content/Reports/CardHistory").Include(
"~/Areas/Intranet/Styles/Reports/CardHistory/cardhistory.css"));

//Despositos CUENTA MAESTRA
bundles.Add(new StyleBundle("~/Content/StylesDepositCM").Include(
"~/Content/StylesDepositsCM/Deposits_CM.css"));

//Cambio de estatus masivo
bundles.Add(new StyleBundle("~/Content/StatusMassive").Include(
"~/Content/Intranet/StatusMassive/Status_Massive.css"));

//Cambio de producto a tarjeta masivo
bundles.Add(new StyleBundle("~/Content/ProductsCardMassive").Include(
"~/Content/Intranet/ProductsCardMassive/Products_CardMassive.css"));

//RECARGA AUTOMATICA
bundles.Add(new StyleBundle("~/bundles/recargaAutomatica").Include(
"~/Content/Intranet/ConfigAutomaticRefill/Config_AutomaticRefill.css"));

//ESTATUS RECARGA AUTOMATICA
bundles.Add(new StyleBundle("~/bundles/EstatusOperacion").Include(
"~/Content/Intranet/StatusOperations/Status_Operations.css"));

//Reporte - ReportMovsCloud
bundles.Add(new StyleBundle("~/bundles/ReportMovsCloud_CSS").Include(
"~/Content/Intranet/ReportMovsCloud/ReportMovsCloud_Styles.css"));

//Reporte - ReportMovs
bundles.Add(new StyleBundle("~/bundles/ReportMovs_CSS").Include(
"~/Content/Intranet/ReportMovs/ReportMovs_Styles.css"));

//Reporte - MasterAccount
bundles.Add(new StyleBundle("~/bundles/ReportMasterAccount_CSS").Include(
"~/Content/Intranet/ReportMasterAccount/ReportMasterAccount_Styles.css"));

// - MembershipLock
bundles.Add(new StyleBundle("~/bundles/MembershipLockt_CSS").Include(
"~/Content/Intranet/MembershipLock/MembershipLock_Styles.css"));

// - Reports Fuel
bundles.Add(new StyleBundle("~/bundles/Fuel_CSS").Include(
"~/Content/Intranet/Fuel/Fuel_Styles.css"));

// - Reports FuelStation
bundles.Add(new StyleBundle("~/bundles/FuelStation_CSS").Include(
"~/Content/Intranet/FuelStation/FuelStation_Styles.css"));

// - Reports Employees
bundles.Add(new StyleBundle("~/bundles/ReportEmployees_CSS").Include(
"~/Content/Intranet/ReportEmployees/ReportEmployees_Styles.css"));

// - Reports Employees2
bundles.Add(new StyleBundle("~/bundles/ReportEmployees2_CSS").Include(
"~/Content/Intranet/ReportEmployees/ReportEmployees2_Styles.css"));

//Conciliacion Recargas
bundles.Add(new StyleBundle("~/bundles/ConciliacionRecargas_CSS").Include(
"~/Content/Intranet/Conciliacion/ConciliacionRecargas.css"));

// - BatchRefll
bundles.Add(new StyleBundle("~/Content/BatchRefill_CSS").Include(
"~/Content/Intranet/BatchRefill/BatchRefill_Styles.css"));

// - BlockCards
bundles.Add(new StyleBundle("~/Content/BlockCards_CSS").Include(
"~/Content/Intranet/BlockCards/BlockCards_Styles.css"));

// - Aprovisionar
bundles.Add(new StyleBundle("~/Content/Aprovisionar_CSS").Include(
"~/Content/Intranet/Aprovisionar/Aprovisionar_Styles.css"));

// - MasterAccountRefill
bundles.Add(new StyleBundle("~/Content/MasterAccountRefill_CSS").Include(
"~/Content/Intranet/MasterAccountRefill/MasterAccountRefill_Styles.css"));

//Reporte ManualRefill
bundles.Add(new StyleBundle("~/bundles/ManualRefillLogCSS").Include(
"~/Content/Intranet/ManualRefillLog/ManualRefillLog_Styles.css"));

//Validate RFC / CURP
bundles.Add(new StyleBundle("~/bundles/RFCCURP_ValidateCSS").Include(
"~/Content/Intranet/ValidateCurpRfc/RFCCURP_Validate_Styles.css"));

//PLD Prevencion de antilavado
bundles.Add(new StyleBundle("~/Content/CardReplaceCSS").Include(
"~/Content/Intranet/CardReplace/CardReplace_Styles.css"));

bundles.Add(new StyleBundle("~/Content/FuelCardLockCSS").Include(
"~/Content/Intranet/FuelCardLock/FuelCardLock_Styles.css"));

bundles.Add(new StyleBundle("~/bundles/AgreementCss").Include(
"~/Content/Intranet/Agreement/Agreement_Styles.css"));

bundles.Add(new StyleBundle("~/bundles/AffiliationsCss").Include(
"~/Content/Intranet/Affiliations/Affiliations_Styles.css"));

// BinSponsor -> Produccion de tarjetas para fintech
bundles.Add(new ScriptBundle("~/bundles/BinSponsorJS").Include(
"~/Areas/Intranet/Scripts/BinSponsor/Index.js"));

bundles.Add(new StyleBundle("~/bundles/BinSponsorCSS").Include(
"~/Areas/Intranet/Styles/BinSponsor/Index.css"));
return bundles;
}


public static BundleCollection BundlesReportes(BundleCollection bundles) {
bundles.Add(new ScriptBundle("~/bundles/Reportes/OnecardCierre").Include(
"~/Scripts/Reportes/OnecardCierre/OnecardCierre.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/OnecardDetalle").Include(
"~/Scripts/Reportes/OnecardDetalle/OnecardDetalle.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/HemsaBalance").Include(
"~/Scripts/Reportes/HemsaBalance/HemsaBalance.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/HemsaReportes").Include(
"~/Scripts/Reportes/HemsaReportes/HemsaReportes.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/Prosa").Include(
"~/Scripts/Reportes/Prosa/Prosa.js"));

bundles.Add(new ScriptBundle("~/bundles/ReportHemsa").Include(
"~/Scripts/Reportes/ReportesTarjetasHemsa/ReportHemsa.js"));

//***CSS SECTION****
//Chart
bundles.Add(new StyleBundle("~/Content/Reportes/chart_C3").Include(
"~/Content/Reportes/c3/c3.css"));

//loading
bundles.Add(new StyleBundle("~/Content/ReportesLoading").Include(
"~/Content/Reportes/loadingReporte.css"));

// - Reportes/Hemsa
bundles.Add(new StyleBundle("~/Content/ReportHemsa_CSS").Include(
"~/Content/Reportes/ReporteTarjetaHemsa/ReportHemsa_Styles.css"));
return bundles;
}


public static BundleCollection BundlesInvoice(BundleCollection bundles) {
//Precios Combustibles Nacionales y Fronteras
bundles.Add(new ScriptBundle("~/bundles/Invoice/PreciosCombustiblesFronteras").Include(
"~/Scripts/Invoice/PreciosCombustiblesFronteras/PreciosCombustiblesFronteras.js"));

bundles.Add(new ScriptBundle("~/bundles/Invoice/PrecioCombustible").Include(
"~/Scripts/Invoice/PrecioCombustible/PreciosCombustible.js"));

bundles.Add(new ScriptBundle("~/bundles/Invoice/ActualizarPreciosCombustibles").Include(
"~/Scripts/Invoice/ActualizarPreciosCombustibles.js"));

//Reporte Invoice facturas
bundles.Add(new ScriptBundle("~/bundles/ReportInvoice").Include(
"~/Scripts/Invoice/ReportInvoice/ReportInvoice.js"));

//Reporte de operaciones por facturas
bundles.Add(new ScriptBundle("~/bundles/OperacionesFacturas").Include(
"~/Scripts/Invoice/OperacionesFacturas/GetInvoicePendings.js"));

bundles.Add(new ScriptBundle("~/bundles/CancelFacturacion").Include(
"~/Scripts/Invoice/Cancel/InvoiceCancel.js"));

//***CSS SECTION****
bundles.Add(new StyleBundle("~/bundles/ReportInvoiceCSS").Include(
"~/Content/Invoice/ReportInvoice/Report_Invoice.css"));

//Reporte de operaciones por facturas
bundles.Add(new StyleBundle("~/bundles/ReportInvoicePending_CSS").Include(
"~/Content/Invoice/ReportInvoicePending/Report_InvoicePending.css"));

//RFC - validator
bundles.Add(new StyleBundle("~/Content/RFCValidator").Include(
"~/Content/Invoice/RFCValidator/RFCValidator.css"));

bundles.Add(new StyleBundle("~/Content/CancelFacturacion_CSS").Include(
"~/Content/Invoice/CancelFacturacion/Cancel_Styles.css"));
return bundles;
}


public static BundleCollection BundlesHemsa(BundleCollection bundles) {
// - Autorizacion - Hemsa
bundles.Add(new ScriptBundle("~/bundles/HemsaAutorizacion").Include(
"~/Scripts/Hemsa/HemsaAutorizacion/HemsaAutorizacion.js"));

//***CSS SECTION****
// - Autorizacion - Hemsa
bundles.Add(new StyleBundle("~/Content/HemsaAutorizacionCSS").Include(
"~/Content/Hemsa/HemsaAutorizacion/HemsaAutorizacion.css"));
return bundles;
}


public static BundleCollection BundlesSTP(BundleCollection bundles){
// - STPReference
bundles.Add(new ScriptBundle("~/bundles/Reference").Include(
"~/Scripts/STP/STPReference.js"));

//PLD Prevencion de antilavado
bundles.Add(new ScriptBundle("~/bundles/PLD").Include(
"~/Scripts/STP/PLD.js"));

//***CSS SECTION****
// - STPReference
bundles.Add(new StyleBundle("~/Content/Reference_CSS").Include(
"~/Content/STP/Reference_Styles.css"));

//PLD Prevencion de antilavado
bundles.Add(new StyleBundle("~/Content/PLDcss").Include(
"~/Content/STP/PLD_Styles.css"));
return bundles;
}


public static BundleCollection BundlesIntegrador(BundleCollection bundles){
// - RolesAdmin Integrador
bundles.Add(new ScriptBundle("~/bundles/RolesAdmin").Include(
"~/Scripts/Integrador/RolesAdmin/RolesAdmin.js"));

// - Convenio-Usuario Integrador
bundles.Add(new ScriptBundle("~/bundles/AssignAgreementUser").Include(
"~/Scripts/Integrador/AssignAgreementUser/AssignAgreementUser.js"));

// - Nuevo Usuario Integrador
bundles.Add(new ScriptBundle("~/bundles/Account").Include(
"~/Scripts/Integrador/Account/Account.js"));

bundles.Add(new ScriptBundle("~/bundles/Employees").Include(
"~/Scripts/Integrador/Employees/Employees.js"));

// - InfoUsuarios
bundles.Add(new ScriptBundle("~/bundles/UnlockUser").Include(
"~/Scripts/Integrador/Account/UnlockUser.js"));

//***CSS SECTION****
bundles.Add(new StyleBundle("~/Content/RolesAdminCSS").Include(
"~/Content/Integrador/RolesAdmin/RolesAdmin_Styles.css"));

// - Convenio-Usuario Integrador
bundles.Add(new StyleBundle("~/Content/AssignAgreementUserCSS").Include(
"~/Content/Integrador/AssignAgreementUser/AssignAgreementUser_Styles.css"));

// - Nuevo Usuario Integrador
bundles.Add(new StyleBundle("~/Content/AccountCSS").Include(
"~/Content/Integrador/Account/Account_Styles.css"));

// - Employees Integrador
bundles.Add(new StyleBundle("~/Content/EmployeesCSS").Include(
"~/Content/Integrador/Employees/Employees_Styles.css"));
return bundles;
}


public static BundleCollection BundlesConciliacion(BundleCollection bundles){
//Reconciliation Files Management
bundles.Add(new ScriptBundle("~/bundles/ReconciliationFilesManagement").Include(
"~/Areas/Conciliacion/Scripts/FilesManagement.js"));

bundles.Add(new ScriptBundle("~/bundles/Reconciliacion-Operations").Include(
"~/Areas/Conciliacion/Scripts/Departments/Operations.js"));

bundles.Add(new ScriptBundle("~/bundles/Reconciliacion-Clarifications").Include(
"~/Areas/Conciliacion/Scripts/Departments/Clarifications.js"));

//Reconciliation - Cobranza Extemporanea
bundles.Add(new ScriptBundle("~/bundles/CobranzaExtemporanea").Include(
"~/Areas/Conciliacion/Scripts/CobranzaExtemporanea.js"));

//***CSS SECTION****
bundles.Add(new StyleBundle("~/Content/Reconciliacion_CSS").Include(
"~/Areas/Conciliacion/Styles/Conciliacion.css"));

bundles.Add(new StyleBundle("~/Content/Reconciliacion-Operations_CSS").Include(
"~/Areas/Conciliacion/Styles/Operations.css"));

bundles.Add(new StyleBundle("~/Content/Reconciliacion-Clarifications_CSS").Include(
"~/Areas/Conciliacion/Styles/Clarifications.css"));

bundles.Add(new StyleBundle("~/Content/ReconciliationFilesManagementCSS").Include(
"~/Areas/Conciliacion/Styles/FilesManagement.css"));
return bundles;
}

public static BundleCollection BundlesTravex(BundleCollection bundles){
// - InfoUsuarios
bundles.Add(new ScriptBundle("~/bundles/InfoUsuariosJS").Include(
"~/Scripts/Travex/InfoUsuarios/InfoUsuarios.js"));

//***CSS SECTION****
bundles.Add(new StyleBundle("~/Content/InfoUsuariosCSS").Include(
"~/Content/Travex/InfoUsuarios/InfoUsuarios.css"));
return bundles;
}


public static BundleCollection BundlesRH(BundleCollection bundles){
bundles.Add(new ScriptBundle("~/bundles/RH/Departments/DepatmentsJS").Include(
"~/Areas/RH/Scripts/Announcements/Department.js"));

//RH/Vacations
bundles.Add(new ScriptBundle("~/bundles/RH/Vacations").Include(
"~/Areas/RH/Scripts/Vacations/Vacations.js",
"~/Areas/RH/Scripts/Vacations/frm_Vacations.js"));

bundles.Add(new ScriptBundle("~/bundles/RH/AuthorizationJS").Include(
"~/Areas/RH/Scripts/Vacations/Authorization.js"));
return bundles;
}


public static BundleCollection BundlesHelpDesk(BundleCollection bundles){
bundles.Add(new ScriptBundle("~/bundles/Classifications").Include(
"~/Areas/HelpDesk/Scripts/Clasificaciones/Classifications.js"));

bundles.Add(new ScriptBundle("~/bundles/UserDepartment").Include(
"~/Areas/HelpDesk/Scripts/Clasificaciones/UserDepartment.js"));

//***CSS SECTION****            
//  Users/Departments           
bundles.Add(new StyleBundle("~/bundles/UserDepartment/UserDepartmentCSS").Include(
"~/Areas/HelpDesk/Content/UserDepartment.css"));
return bundles;
}


public static BundleCollection BundlesAccountViews(BundleCollection bundles) {
// - InfoUsuarios
bundles.Add(new ScriptBundle("~/bundles/adminRoles").Include(
"~/Scripts/Admin.js"));

//***CSS SECTION****
// - firtsAccesChangeNewPassword
bundles.Add(new StyleBundle("~/Content/firstAccesChangeNewPasswordCSS").Include(
"~/Content/Account/firstAccessChangePassword/firstAccesChangePasswordStyles.css"));

// Login
bundles.Add(new StyleBundle("~/Content/loginCSS").Include(
"~/Content/Account/login/loginStyles.css"));
return bundles;
}


public static BundleCollection BundlesLayout(BundleCollection bundles) {
bundles.Add(new ScriptBundle("~/bundles/jquery").Include(jqueryv2_2_3));

bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(jqueryvalidatev1_16_0));//lib lay 

bundles.Add(new ScriptBundle("~/bundles/Scripts/js")
.Include(select2v4_0_1)
.Include("~/Scripts/main.js"));//lib lay

bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(modernizrv2_8_3));

bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(jqueryui_js));

bundles.Add(new ScriptBundle("~/bundles/bootstrap")
.Include(bootstrapv3_3_7)
.Include(respondv1_4_0)
.Include(bootstrap_datepickerv1_4_0));

//***CSS SECTION****
bundles.Add(new StyleBundle("~/Content/font-awesome").Include(font_awesomev4_7_0));

bundles.Add(new StyleBundle("~/Content/css")
.Include(font_awesomev4_7_0)
.Include(bootstrapcssv3_3_7)
.Include(bootstrap_datepicker_css)
.Include(select2_css)
.Include(select2_bootstrapv0_1_0_beta_4)
.Include(bootstrap_table_cssv1_11_1)
.Include(site_css));

bundles.Add(new StyleBundle("~/Content/newCSS").Include(
"~/Content/NuevoMain/NuevoMainCss.css"));
return bundles;
}

public static BundleCollection BundlesMixtos(BundleCollection bundles) {
bundles.Add(new ScriptBundle("~/bundles/Reconciliacion")
.Include(core_handlebars)
.Include(
"~/Scripts/jquery.oc-core-intranet.js",
"~/Areas/Conciliacion/Scripts/TableFormatters.js",
"~/Areas/Conciliacion/Scripts/RevisionConciliacion_defaults.js",
"~/Areas/Conciliacion/Scripts/DetalleTransaccion_defaults.js",
"~/Areas/Conciliacion/Scripts/Conciliacion.js",
"~/Areas/Conciliacion/Scripts/Brands/OXXO.js",
"~/Areas/Conciliacion/Scripts/Brands/Mastercard.js",
"~/Areas/Conciliacion/Scripts/Brands/Carnet.js",
"~/Areas/Conciliacion/Scripts/Conciliacion_helpers.js",
"~/Areas/Conciliacion/Scripts/Catalogs/globalVariables.js"));

bundles.Add(new ScriptBundle("~/bundles/MassiveReplacement")
.Include(jszip_js)
.Include(xlsx_js)
.Include("~/Scripts/Excel/MassiveReplacement.js"));

//libreria para cambio de estatus y producto masivo
bundles.Add(new ScriptBundle("~/bundles/ExcelMassive")
.Include(spin_js)
.Include(
"~/Scripts/Intranet/ExcelMassive/xlsx.full.min.js",
"~/Scripts/Intranet/ExcelMassive/dropsheet.js"));

// - RFC Validator
bundles.Add(new ScriptBundle("~/bundles/RFCValidator")
.Include(bootstrap_table_export_js)
.Include("~/Scripts/Invoice/RFCValidator/RFCValidator.js"));//lib oc

//RH sala de juntas
bundles.Add(new ScriptBundle("~/bundles/salajuntas/components")
.Include(bootstrap_tablev1_11_1)
.Include(handlebarsv4_1_2)
.Include(core_handlebars)
.Include(swagv0_6_1)
.Include(sweetalert2v4_1_7));

bundles.Add(new ScriptBundle("~/bundles/salajuntas/adminstracion/solicitudes")
.Include(bootstrap_tablev1_11_1)
.Include(
"~/Areas/RH/Scripts/petitionsFunc.js",//lib oc x3
"~/Areas/RH/Scripts/horariosFunc.js",
"~/Areas/RH/Scripts/Administracion/solicitudes.js"));

bundles.Add(new ScriptBundle("~/bundles/salajuntas/adminstracion/salas")
.Include(bootstrap_tablev1_11_1)
.Include(
"~/Areas/RH/Scripts/petitionsFunc.js",//lib oc x2
"~/Areas/RH/Scripts/Administracion/salas.js"));

bundles.Add(new ScriptBundle("~/bundles/salajuntas/visualization/index")
.Include(bootstrap_tablev1_11_1)
.Include(
"~/Areas/RH/Scripts/petitionsFunc.js",//lib oc x3
"~/Areas/RH/Scripts/horariosFunc.js",
"~/Areas/RH/Scripts/Visualization/index.js"));

// - Abonos
bundles.Add(new ScriptBundle("~/bundles/AbonosJS")
.Include(bootstrap_table_export_js)
.Include("~/Scripts/Intranet/Abonos/Abonos.js"));//lib oc

bundles.Add(new ScriptBundle("~/bundles/products/designsJs")
.Include(Dropzone_js)
.Include("~/Areas/Products/Scripts/designs.js"));//lib oc

bundles.Add(new ScriptBundle("~/bundles/products/ProductionHistoryJs")
.Include("~/Areas/Products/Scripts/ProductionHistory.js")//lib oc
.Include(jquery_handlebars)
.Include(bootstrap_datepickerv1_4_0));

bundles.Add(new ScriptBundle("~/bundles/UserDepartment/MainJS").Include(bundleMainJs));
// RH/RegisterUser
bundles.Add(new ScriptBundle("~/bundles/RegisterUser/MainJS").Include(bundleMainJs));

bundles.Add(new ScriptBundle("~/bundles/RegisterUser")
.Include(
"~/Areas/RH/Scripts/RegisterUser/RegisterUser.js",
"~/Areas/RH/Scripts/RegisterUser/FamilyInfo.js",
"~/Areas/RH/Scripts/RegisterUser/JobInfo.js",
"~/Areas/RH/Scripts/RegisterUser/StudiesInfo.js")
.Include(validatorv0_11_9));//lib oc x4

//RH/Departments
bundles.Add(new ScriptBundle("~/bundles/RH/Departments/MainJS")
.Include(bundleMainJs)
.Include("~/Areas/RH/Scripts/Announcements/Department.js"));
//RH/Groups
bundles.Add(new ScriptBundle("~/bundles/RH/Groups/MainJS").Include(bundleMainJs));

bundles.Add(new ScriptBundle("~/bundles/excel")
.Include(jszip_js)
.Include(xlsx_js)
.Include("~/Scripts/Excel/SiscardMasivo.js"));

bundles.Add(new ScriptBundle("~/bundles/export").Include(
"~/Scripts/export/shim.js",//lib oc
"~/Scripts/export/jszip.js",//lib oc
"~/Scripts/export/xlsx.js",
"~/Scripts/export/ods.js"));

//Facturación 4.0
bundles.Add(new ScriptBundle("~/bundles/FacturacionJS")
.Include(select2v4_0_1)
.Include(sweetalert2v4_1_7)
.Include(moment_js)
.Include(handlebarsv4_1_2)
.Include(core_handlebars)  
.Include(linqv2_2_0_2)
.Include(datetimepickerv2_4_5)
.Include(bootstrap_tablev1_12_2)
.Include("~/Areas/Invoice40/Scripts/Invoice40/Invoice40.js")
.Include("~/Areas/Invoice40/Scripts/Invoice40/Pagos.js"));

bundles.Add(new ScriptBundle("~/bundles/Facturacion")
.Include(jqueryvalidatev1_16_0)
.Include("~/Scripts/Facturacion/Facturacion.js")
.Include("~/Scripts/Facturacion/Pagos.js")
.Include(bootstrap_tablev1_11_1)
.Include(facturacion_select2v4_0_1));

//***CSS SECTION****
/*
Handles drag and drop of files for you.  
Para Products           
https://www.cdnpkg.com/dropzone/file/dropzone.css/
*/
bundles.Add(new StyleBundle("~/bundles/products/designsCss")
.Include(Dropzone_css)
.Include("~/Areas/Products/Content/designs.css"));

/*
Datepicker for Bootstrap 
v1.4.0 
(https://github.com/eternicode/bootstrap-datepicker)
*/    
bundles.Add(new StyleBundle("~/bundles/products/ProductionHistoryCss")
.Include("~/Areas/Products/Content/ProductionHistory.css")
.Include(bootstrap_datepicker_css));   

// RH --Sala De Juntas            
bundles.Add(new StyleBundle("~/SalaJuntas/css")
.Include(sweetalert_css)
.Include(
"~/Areas/RH/Content/rhSalas.css",
"~/Areas/RH/Content/Administration/tableOC.css"));   

bundles.Add(new StyleBundle("~/bundles/Facturacion40CSS")
.Include(select2_css)
.Include(sweetalert_css)
.Include(datetimepicker_css)
.Include(bootstrap_table_cssv1_17_1)
.Include("~/Areas/Invoice40/Content/Invoice40/Invoice40.css")); 
return bundles;
}

public static BundleCollection BundlesInusables(BundleCollection bundles) {
bundles.Add(new ScriptBundle("~/bundles/bootstrapTableExport").Include(bootstrap_table_export_js));

// bundle usado para corregir un error en bootstratable al usar los filtros de busqueda, se usa la version 1.53
bundles.Add(new ScriptBundle("~/bundles/table_clarificationSearch").Include(
"~/Scripts/bootstrap-table-v1_53.js",
"~/Scripts/bootstrap-table-es-ES-v1_53.js"));

bundles.Add(new ScriptBundle("~/bundles/bootstrap-editable").Include(bootstrap_editablev1_5_1));

//  Classifications
bundles.Add(new ScriptBundle("~/bundles/Classifications/MainJS").Include(bundleMainJs));

// - btTablev1.1.15.5
bundles.Add(new ScriptBundle("~/bundles/jsbtTablev1-15-5").Include(bootstrapTableExportv1_15_5));

bundles.Add(new ScriptBundle("~/bundles/AltaAnunciosJS")
.Include(slick_js)
.Include(swagv0_6_1)
.Include("~/Scripts/Intranet/Anuncios/nicEdit.js")
.Include("~/Scripts/Intranet/Anuncios/Anuncios.js"));//lib oc

bundles.Add(new ScriptBundle("~/bundles/login").Include(
"~/Scripts/Account/login.js"));// SIN ARCHIVO

bundles.Add(new ScriptBundle("~/bundles/FirtsAccessChangePassword").Include(
"~/Scripts/Account/FirtsAccessChangePassword.js"));

bundles.Add(new ScriptBundle("~/bundles/Reports/CardHistory").Include(
"~/Areas/Intranet/Scripts/Reports/CardHistory/cardhistory.js"));

// -_ChangePasswordPartial
bundles.Add(new ScriptBundle("~/bundles/_ChangePasswordPartial").Include(
"~/Scripts/Account/_ChangePasswordPartial/OnecardCierre.js"));//SIN ARCHIVO

//Cambio de producto masivo bootstrap-editable 
bundles.Add(new ScriptBundle("~/bundles/Cuenta_Limite").Include(
"~/Scripts/Intranet/AccountLimit/AccountLimit.js"));//SIN ARCHIVO

//dudoso a posible libreria JS
bundles.Add(new ScriptBundle("~/bundles/RH/Groups/GroupsJS").Include(
"~/Areas/RH/Scripts/Announcements/Groups.js"));

//***CSS SECTION****
//INFO CARD
bundles.Add(new StyleBundle("~/Content/info_Card").Include(
"~/Content/infoCard/CardInfo.css"));

// - Alta Anuncios
bundles.Add(new StyleBundle("~/Content/AnunciosCSS").Include(
"~/Content/Intranet/Anuncios/slick-theme.css",//slick sin archivo
"~/Content/Intranet/Anuncios/Anuncios.css"));

bundles.Add(new StyleBundle("~/bundles/CuentaLimite").Include(
"~/Content/Intranet/AccountLimit/Account_Limit.css"));

// paquetreria para editar con bootstrap3 https://www.cdnpkg.com/bootstrap-editable
bundles.Add(new StyleBundle("~/bundles/bootstrapEditable").Include(
"~/Content/Intranet/bootstrap3Editable-1.5.1/bootstrap-editable.css"));

//Recarga Manual
bundles.Add(new StyleBundle("~/bundles/ManualRefillCSS").Include(
"~/Content/Intranet/ManualRefill/ManualRefill_Styles.css"));

// bundle usado para corregir un error en bootstratable al usar los filtros de busqueda, se usa la version 1.53
bundles.Add(new StyleBundle("~/Content/table_allSearch").Include(
"~/Content/bootstrap-table-v1_53.css")); //sin archivo


return bundles;
}
}
}
`
var bundleViejo = `
using System.Web;
using System.Web.Optimization;

namespace OneCard_ServicioCliente
{
public class BundleConfig
{
// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
public static void RegisterBundles(BundleCollection bundles)
{

var Select2_css = new[] { "~/Content/select2.css" };
var Select2_js = new[] { "~/Scripts/select2.js" };

var Swal2_css = new[] { "~/Content/sweetalert.css" };
var Swal2_js = new[] { "~/Scripts/sweetalert2.js" };

var datetimepicker_css = new[] { "~/Content/jquery.datetimepicker.css" };
var datetimepicker_js = new[] { "~/Scripts/jquery.datetimepicker.js" };

var bootstrapTable_css = new[] { "~/Content/bootstrap-table.css" };
var bootstrapTable_js = new[] {
"~/Scripts/bootstrap-table.js",
"~/Scripts/bootstrap-table-es-ES.js"
};

var Moment_js = new[] { "~/Scripts/moment.js" };
var Linq_js = new[] { "~/Scripts/jquery.linq.js" };

var Handlebars_js = new[] {
"~/Scripts/handlebars v4.1.2.js",
"~/Scripts/Core.handlebars.js" };

bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
"~/Scripts/jquery-{version}.js",
"~/Scripts/onecard-core.js"));

bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
"~/Scripts/jquery-ui.min.js"));

bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
"~/Scripts/jquery.validate*"));

// Use the development version of Modernizr to develop with and learn from. Then, when you're
// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
"~/Scripts/modernizr-*"));

bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
"~/Scripts/bootstrap.js",
"~/Scripts/respond.js",
"~/Scripts/bootstrap-datepicker.js",
"~/Scripts/bootstrap-datepicker-es.js"));

bundles.Add(new ScriptBundle("~/bundles/Scripts/js").Include(
"~/Scripts/select2.js",
"~/Scripts/main.js"));

bundles.Add(new ScriptBundle("~/bundles/jets").Include(
"~/Scripts/jets.js"));


bundles.Add(new ScriptBundle("~/bundles/select2").Include(Select2_js));

bundles.Add(new StyleBundle("~/Content/select2").Include(Select2_css));

bundles.Add(new StyleBundle("~/Content/font-awesome").Include(
"~/Content/font-awesome.css"));

bundles.Add(new ScriptBundle("~/bundles/linq").Include(Linq_js));

bundles.Add(new ScriptBundle("~/bundles/swal").Include(Swal2_js));

bundles.Add(new ScriptBundle("~/bundles/moment").Include(Moment_js));
bundles.Add(new ScriptBundle("~/bundles/bootstrapTableExport").Include(
"~/Scripts/Invoice/RFCValidator/bootstrap-table-export.js"));

bundles.Add(new ScriptBundle("~/bundles/handlebars").Include(Handlebars_js));

bundles.Add(new ScriptBundle("~/bundles/Facturacion").Include(
"~/Scripts/jquery.validate.js",
"~/Scripts/Facturacion/Facturacion.js",
"~/Scripts/Facturacion/Pagos.js",
"~/Scripts/Facturacion/bootstrap-table.js",
"~/Scripts/Facturacion/select2.js"
));

bundles.Add(new ScriptBundle("~/bundles/PantallasFacturacion").Include(
"~/Scripts/jquery.validate.js",
"~/Scripts/Facturacion/bootstrap-table.js",
"~/Scripts/Facturacion/select2.js"
));

bundles.Add(new StyleBundle("~/Content/datetimepicker").Include(datetimepicker_css));

bundles.Add(new ScriptBundle("~/bundles/datetimepicker").Include(datetimepicker_js));

bundles.Add(new StyleBundle("~/Content/CancelFacturacion_CSS").Include(
"~/Content/Invoice/CancelFacturacion/Cancel_Styles.css"
));
bundles.Add(new ScriptBundle("~/bundles/CancelFacturacion").Include(
"~/Scripts/Invoice/Cancel/InvoiceCancel.js"
));

bundles.Add(new StyleBundle("~/Content/css").Include(
"~/Content/font-awesome.css",
"~/Content/bootstrap.css",
"~/Content/bootstrap-datepicker.css",
"~/Content/select2.css",
"~/Content/Facturacion/select2-bootstrap.css",
"~/Content/Facturacion/bootstrap-table.css",
"~/Content/site.css"));

bundles.Add(new StyleBundle("~/Content/loader").Include(
"~/Content/css-loader.css"));

bundles.Add(new StyleBundle("~/Content/table_all").Include(
"~/Content/bootstrap-table.css"));

// bundle usado para corregir un error en bootstratable al usar los filtros de busqueda, se usa la version 1.53
bundles.Add(new StyleBundle("~/Content/table_allSearch").Include(
"~/Content/bootstrap-table-v1_53.css"));

bundles.Add(new StyleBundle("~/Content/swal").Include(Swal2_css));

bundles.Add(new StyleBundle("~/Content/select2-bootstrap").Include(
"~/Content/select2-bootstrap.css"));

bundles.Add(new ScriptBundle("~/bundles/table_all").Include(
"~/Scripts/bootstrap-table.js",
"~/Scripts/bootstrap-table-es-ES.js"));

bundles.Add(new ScriptBundle("~/bundles/table_clarification").Include(
"~/Scripts/bootstrap-table-v1_11.js",
"~/Scripts/bootstrap-table-es-ES.js"));

// bundle usado para corregir un error en bootstratable al usar los filtros de busqueda, se usa la version 1.53
bundles.Add(new ScriptBundle("~/bundles/table_clarificationSearch").Include(
"~/Scripts/bootstrap-table-v1_53.js",
"~/Scripts/bootstrap-table-es-ES-v1_53.js"));

bundles.Add(new ScriptBundle("~/bundles/clarification").Include(
"~/Scripts/intranet/clarification/clarification.js",
"~/Scripts/intranet/clarification/ClarificationSeg.js"
));

bundles.Add(new ScriptBundle("~/bundles/export").Include(
"~/Scripts/export/shim.js",
"~/Scripts/export/jszip.js",
"~/Scripts/export/xlsx.js",
"~/Scripts/export/ods.js"));

bundles.Add(new ScriptBundle("~/bundles/excel").Include(
"~/Scripts/Excel/jszip.js",
"~/Scripts/Excel/xlsx.js",
"~/Scripts/Excel/SiscardMasivo.js"
));

bundles.Add(new ScriptBundle("~/bundles/MassiveReplacement").Include(
"~/Scripts/Excel/jszip.js",
"~/Scripts/Excel/xlsx.js",
"~/Scripts/Excel/MassiveReplacement.js"
));

bundles.Add(new ScriptBundle("~/ajax/native").Include(
"~/Scripts/jquery-ajax-native.js"));

bundles.Add(new ScriptBundle("~/bundles/Package").Include(
"~/Scripts/Package/Package.js"
));

//Nuevo Main Styles CSS
bundles.Add(new StyleBundle("~/Content/newCSS").Include(
"~/Content/NuevoMain/NuevoMainCss.css"));

// Login
bundles.Add(new StyleBundle("~/Content/loginCSS").Include(
"~/Content/Account/login/loginStyles.css"));
bundles.Add(new ScriptBundle("~/bundles/login").Include(
"~/Scripts/Account/login.js"));

// - firtsAccesChangeNewPassword
bundles.Add(new StyleBundle("~/Content/firstAccesChangeNewPasswordCSS").Include(
"~/Content/Account/firstAccessChangePassword/firstAccesChangePasswordStyles.css"));

bundles.Add(new ScriptBundle("~/bundles/FirtsAccessChangePassword").Include(
"~/Scripts/Account/FirtsAccessChangePassword.js"));

// -_ChangePasswordPartial
bundles.Add(new ScriptBundle("~/bundles/_ChangePasswordPartial").Include(
"~/Scripts/Account/_ChangePasswordPartial/OnecardCierre.js"));

//bundles Reportes intranet...

bundles.Add(new ScriptBundle("~/bundles/Reportes/OnecardCierre").Include(
"~/Scripts/Reportes/OnecardCierre/OnecardCierre.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/OnecardDetalle").Include(
"~/Scripts/Reportes/OnecardDetalle/OnecardDetalle.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/HemsaBalance").Include(
"~/Scripts/Reportes/HemsaBalance/HemsaBalance.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/HemsaReportes").Include(
"~/Scripts/Reportes/HemsaReportes/HemsaReportes.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/Prosa").Include(
"~/Scripts/Reportes/Prosa/Prosa.js"));

bundles.Add(new ScriptBundle("~/bundles/Reports/CardHistory").Include(
"~/Areas/Intranet/Scripts/Reports/CardHistory/cardhistory.js"));
bundles.Add(new StyleBundle("~/Content/Reports/CardHistory").Include(
"~/Areas/Intranet/Styles/Reports/CardHistory/cardhistory.css"));

//Chart
bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/c3").Include(
"~/Scripts/Reportes/ScriptsReportes/c3/c3.js"));

bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/d3").Include(
"~/Scripts/Reportes/ScriptsReportes/d3/d3.js"));

bundles.Add(new StyleBundle("~/Content/Reportes/chart_C3").Include(
"~/Content/Reportes/c3/c3.css"));
//loading
bundles.Add(new StyleBundle("~/Content/ReportesLoading").Include(
"~/Content/Reportes/loadingReporte.css"));
//canvas
bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/canvas").Include(
"~/Scripts/Reportes/ScriptsReportes/canvas/html2canvas.js"));

//Excel masivo 
bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/excelMasivo").Include(
"~/Scripts/Reportes/ScriptsReportes/excelMasivo/FileSaver.js",
"~/Scripts/Reportes/ScriptsReportes/excelMasivo/Jhxlsx.js",
"~/Scripts/Reportes/ScriptsReportes/excelMasivo/xlsx.core.min.js"));
bundles.Add(new ScriptBundle("~/bundles/Reportes/ScriptsReportes/moment").Include(
"~/Scripts/Reportes/ScriptsReportes/moment/moment.js"));

//Precios Combustibles Nacionales y Fronteras
bundles.Add(new ScriptBundle("~/bundles/Invoice/PreciosCombustiblesFronteras").Include(
"~/Scripts/Invoice/PreciosCombustiblesFronteras/PreciosCombustiblesFronteras.js"));
bundles.Add(new ScriptBundle("~/bundles/Invoice/PrecioCombustible").Include(
"~/Scripts/Invoice/PrecioCombustible/PreciosCombustible.js"));
bundles.Add(new ScriptBundle("~/bundles/Invoice/ActualizarPreciosCombustibles").Include(
"~/Scripts/Invoice/ActualizarPreciosCombustibles.js"));

//Despositos CUENTA MAESTRA
bundles.Add(new ScriptBundle("~/bundles/DepositsCM").Include(
"~/Scripts/DepositsCM/DepositsCM.js"));
bundles.Add(new StyleBundle("~/Content/StylesDepositCM").Include(
"~/Content/StylesDepositsCM/Deposits_CM.css"));

//SCRITS MasterAccountRefillReports
bundles.Add(new ScriptBundle("~/bundles/MasterAccountRefillReports").Include(
"~/Scripts/MasterAccountRefillReports/MasterAccountRefillReports.js"));

//INFO CARD
bundles.Add(new ScriptBundle("~/bundles/infoCard").Include(
"~/Scripts/InfoCard/InfoCard.js"));
bundles.Add(new StyleBundle("~/Content/info_Card").Include(
"~/Content/infoCard/CardInfo.css"));

//Cambio de estatus masivo
bundles.Add(new ScriptBundle("~/bundles/StatusMassive").Include(
"~/Scripts/Intranet/StatusMassive/StatusMassive.js"));
bundles.Add(new StyleBundle("~/Content/StatusMassive").Include(
"~/Content/Intranet/StatusMassive/Status_Massive.css"));

//Cambio de producto a tarjeta masivo
bundles.Add(new ScriptBundle("~/bundles/ProductsCardMassive").Include(
"~/Scripts/Intranet/ProductsCardMassive/ProductsCardMassive.js"));
bundles.Add(new StyleBundle("~/Content/ProductsCardMassive").Include(
"~/Content/Intranet/ProductsCardMassive/Products_CardMassive.css"));

//Cambio de producto a tarjeta 
bundles.Add(new ScriptBundle("~/bundles/ProductChange").Include(
"~/Scripts/Intranet/ProductChange/ProductChange.js"));



//libreria para cambio de estatus y producto masivo
bundles.Add(new ScriptBundle("~/bundles/ExcelMassive").Include(
"~/Scripts/Intranet/ExcelMassive/xlsx.full.min.js",
"~/Scripts/Intranet/ExcelMassive/dropsheet.js",
"~/Scripts/Intranet/ExcelMassive/spin.js"));

//RECARGA AUTOMATICA
bundles.Add(new StyleBundle("~/bundles/recargaAutomatica").Include(
"~/Content/Intranet/ConfigAutomaticRefill/Config_AutomaticRefill.css"));
bundles.Add(new ScriptBundle("~/bundles/ConfigAutomaticRefill").Include(
"~/Scripts/Soporte/ConfigAutomaticRefill/ConfigAutomaticRefill.js"));

//ESTATUS RECARGA AUTOMATICA
bundles.Add(new StyleBundle("~/bundles/EstatusOperacion").Include(
"~/Content/Intranet/StatusOperations/Status_Operations.css"));
bundles.Add(new ScriptBundle("~/bundles/StatusOperation").Include(
"~/Scripts/Soporte/StatusOperations/StatusOperations.js"));

//Reporte Invoice facturas
bundles.Add(new ScriptBundle("~/bundles/ReportInvoice").Include(
"~/Scripts/Invoice/ReportInvoice/ReportInvoice.js"));
bundles.Add(new StyleBundle("~/bundles/ReportInvoiceCSS").Include(
"~/Content/Invoice/ReportInvoice/Report_Invoice.css"));

//Cambio de producto masivo bootstrap-editable 
bundles.Add(new ScriptBundle("~/bundles/Cuenta_Limite").Include(
"~/Scripts/Intranet/AccountLimit/AccountLimit.js"));
bundles.Add(new StyleBundle("~/bundles/CuentaLimite").Include(
"~/Content/Intranet/AccountLimit/Account_Limit.css"));
bundles.Add(new ScriptBundle("~/bundles/bootstrap-editable").Include(
"~/Scripts/Intranet/bootstrap-editable/bootstrap-editable.js"));
bundles.Add(new StyleBundle("~/bundles/bootstrapEditable").Include(
"~/Content/Intranet/bootstrap3Editable-1.5.1/bootstrap-editable.css"));

//Reporte de operaciones por facturas
bundles.Add(new ScriptBundle("~/bundles/OperacionesFacturas").Include(
"~/Scripts/Invoice/OperacionesFacturas/GetInvoicePendings.js"));
bundles.Add(new StyleBundle("~/bundles/ReportInvoicePending_CSS").Include(
"~/Content/Invoice/ReportInvoicePending/Report_InvoicePending.css"));

//Reporte - ReportMovsCloud
bundles.Add(new ScriptBundle("~/bundles/ReportMovsCloud").Include(
"~/Scripts/Intranet/ReportMovsCloud/ReportMovsCloud.js"));
bundles.Add(new StyleBundle("~/bundles/ReportMovsCloud_CSS").Include(
"~/Content/Intranet/ReportMovsCloud/ReportMovsCloud_Styles.css"));

//Reporte - ReportMovs
bundles.Add(new ScriptBundle("~/bundles/ReportMovs").Include(
"~/Scripts/Intranet/ReportMovs/ReportMovs.js"));
bundles.Add(new StyleBundle("~/bundles/ReportMovs_CSS").Include(
"~/Content/Intranet/ReportMovs/ReportMovs_Styles.css"));

//Reporte - MasterAccount
bundles.Add(new ScriptBundle("~/bundles/ReportMasterAccount").Include(
"~/Scripts/Intranet/ReportMasterAccount/ReportMasterAccount.js"));
bundles.Add(new StyleBundle("~/bundles/ReportMasterAccount_CSS").Include(
"~/Content/Intranet/ReportMasterAccount/ReportMasterAccount_Styles.css"));

// - MembershipLock
bundles.Add(new ScriptBundle("~/bundles/MembershipLock").Include(
"~/Scripts/Intranet/MembershipLock/MembershipLock.js"));
bundles.Add(new StyleBundle("~/bundles/MembershipLockt_CSS").Include(
"~/Content/Intranet/MembershipLock/MembershipLock_Styles.css"));

// - Reports Fuel
bundles.Add(new ScriptBundle("~/bundles/Fuel").Include(
"~/Scripts/Intranet/Fuel/Fuel.js"));
bundles.Add(new StyleBundle("~/bundles/Fuel_CSS").Include(
"~/Content/Intranet/Fuel/Fuel_Styles.css"));

// - Reports FuelStation
bundles.Add(new ScriptBundle("~/bundles/FuelStation").Include(
"~/Scripts/Intranet/FuelStation/FuelStation.js"));
bundles.Add(new StyleBundle("~/bundles/FuelStation_CSS").Include(
"~/Content/Intranet/FuelStation/FuelStation_Styles.css"));

// - Reports Employees
bundles.Add(new ScriptBundle("~/bundles/ReportEmployees").Include(
"~/Scripts/Intranet/ReportEmployees/ReportEmployees.js"));
bundles.Add(new StyleBundle("~/bundles/ReportEmployees_CSS").Include(
"~/Content/Intranet/ReportEmployees/ReportEmployees_Styles.css"));

// - Reports Employees2
bundles.Add(new ScriptBundle("~/bundles/ReportEmployees2").Include(
"~/Scripts/Intranet/ReportEmployees/ReportEmployees2.js"));
bundles.Add(new StyleBundle("~/bundles/ReportEmployees2_CSS").Include(
"~/Content/Intranet/ReportEmployees/ReportEmployees2_Styles.css"));

//Conciliacion Recargas
bundles.Add(new StyleBundle("~/bundles/ConciliacionRecargas_CSS").Include(
"~/Content/Intranet/Conciliacion/ConciliacionRecargas.css"));

// - RFC Validator
bundles.Add(new ScriptBundle("~/bundles/RFCValidator").Include(
"~/Scripts/Invoice/RFCValidator/bootstrap-table-export.js",
"~/Scripts/Invoice/RFCValidator/tableExport.min.js",
"~/Scripts/Invoice/RFCValidator/RFCValidator.js"));
bundles.Add(new StyleBundle("~/Content/RFCValidator").Include(
"~/Content/Invoice/RFCValidator/RFCValidator.css"));


// - BatchRefll
bundles.Add(new ScriptBundle("~/bundles/BatchRefill").Include(
"~/Scripts/Intranet/BatchRefill/BatchRefill.js"));
bundles.Add(new StyleBundle("~/Content/BatchRefill_CSS").Include(
"~/Content/Intranet/BatchRefill/BatchRefill_Styles.css"));

// - BlockCards
bundles.Add(new ScriptBundle("~/bundles/BlockCards").Include(
"~/Scripts/Intranet/BlockCards/BlockCards.js"));
bundles.Add(new ScriptBundle("~/bundles/favico").Include(
"~/Scripts/Intranet/BlockCards/favico-0.3.10.js"));
bundles.Add(new StyleBundle("~/Content/BlockCards_CSS").Include(
"~/Content/Intranet/BlockCards/BlockCards_Styles.css"));

// - Aprovisionar
bundles.Add(new ScriptBundle("~/bundles/Aprovisionar").Include(
"~/Scripts/Intranet/Aprovisionar/Aprovisionar.js"));

bundles.Add(new StyleBundle("~/Content/Aprovisionar_CSS").Include(
"~/Content/Intranet/Aprovisionar/Aprovisionar_Styles.css"));

// - MasterAccountRefill
bundles.Add(new ScriptBundle("~/bundles/MasterAccountRefill").Include(
"~/Scripts/Intranet/MasterAccountRefill/MasterAccountRefill.js"));

bundles.Add(new StyleBundle("~/Content/MasterAccountRefill_CSS").Include(
"~/Content/Intranet/MasterAccountRefill/MasterAccountRefill_Styles.css"));

// - Reportes/Hemsa
bundles.Add(new ScriptBundle("~/bundles/ReportHemsa").Include(
"~/Scripts/Reportes/ReportesTarjetasHemsa/ReportHemsa.js"));
bundles.Add(new StyleBundle("~/Content/ReportHemsa_CSS").Include(
"~/Content/Reportes/ReporteTarjetaHemsa/ReportHemsa_Styles.css"));


// - Autorizacion - Hemsa
bundles.Add(new ScriptBundle("~/bundles/HemsaAutorizacion").Include(
"~/Scripts/Hemsa/HemsaAutorizacion/HemsaAutorizacion.js"));
bundles.Add(new StyleBundle("~/Content/HemsaAutorizacionCSS").Include(
"~/Content/Hemsa/HemsaAutorizacion/HemsaAutorizacion.css"));


// - STPReference
bundles.Add(new ScriptBundle("~/bundles/Reference").Include(
"~/Scripts/STP/STPReference.js"));
bundles.Add(new StyleBundle("~/Content/Reference_CSS").Include(
"~/Content/STP/Reference_Styles.css"));
// RH --Sala De Juntas
bundles.Add(new ScriptBundle("~/bundles/salajuntas/components").Include(
"~/Scripts/Facturacion/bootstrap-table.js",
"~/Scripts/handlebars v4.1.2.js",
"~/Scripts/Core.handlebars.js",
"~/Scripts/swag.js",
"~/Scripts/sweetalert2.js"));
bundles.Add(new ScriptBundle("~/bundles/salajuntas/adminstracion/solicitudes").Include(
"~/Scripts/Facturacion/bootstrap-table.js",
"~/Areas/RH/Scripts/petitionsFunc.js",
"~/Areas/RH/Scripts/horariosFunc.js",
"~/Areas/RH/Scripts/Administracion/solicitudes.js"));
bundles.Add(new ScriptBundle("~/bundles/salajuntas/adminstracion/salas").Include(
"~/Scripts/Facturacion/bootstrap-table.js",
"~/Areas/RH/Scripts/petitionsFunc.js",
"~/Areas/RH/Scripts/Administracion/salas.js"));
bundles.Add(new ScriptBundle("~/bundles/salajuntas/visualization/index").Include(
"~/Scripts/Facturacion/bootstrap-table.js",
"~/Areas/RH/Scripts/petitionsFunc.js",
"~/Areas/RH/Scripts/horariosFunc.js",
"~/Areas/RH/Scripts/Visualization/index.js"));
bundles.Add(new StyleBundle("~/SalaJuntas/css").Include(
"~/Areas/RH/Content/rhSalas.css",
"~/Areas/RH/Content/Administration/tableOC.css",
"~/Content/sweetalert.css"));
bundles.Add(new StyleBundle("~/bundles/SalaJuntas/fullcalendarCss").Include(
"~/Areas/RH/Content/FullCalendar/bootstrap/main.css",
"~/Areas/RH/Content/FullCalendar/core/main.css",
"~/Areas/RH/Content/FullCalendar/daygrid/main.css",
"~/Areas/RH/Content/FullCalendar/timegrid/main.css",
"~/Areas/RH/Content/FullCalendar/list/main.css"));
bundles.Add(new ScriptBundle("~/bundles/salajuntas/fullcalendarJs").Include(
"~/Areas/RH/Content/FullCalendar/core/main.js",
"~/Areas/RH/Content/FullCalendar/bootstrap/main.js",
"~/Areas/RH/Content/FullCalendar/daygrid/main.js",
"~/Areas/RH/Content/FullCalendar/timegrid/main.js",
"~/Areas/RH/Content/FullCalendar/list/main.js",
"~/Areas/RH/Content/FullCalendar/luxon/main.js",
"~/Areas/RH/Content/FullCalendar/moment/main.js"));
//------

//Recarga Manual
bundles.Add(new StyleBundle("~/bundles/ManualRefillCSS").Include(
"~/Content/Intranet/ManualRefill/ManualRefill_Styles.css"));
bundles.Add(new ScriptBundle("~/bundles/ManualRefill").Include(
"~/Scripts/Intranet/ManualRefill/ManualRefill.js"));

//Reporte ManualRefill
bundles.Add(new StyleBundle("~/bundles/ManualRefillLogCSS").Include(
"~/Content/Intranet/ManualRefillLog/ManualRefillLog_Styles.css"));
bundles.Add(new ScriptBundle("~/bundles/ManualRefillLog").Include(
"~/Scripts/Intranet/ManualRefillLog/ManualRefillLog.js"));

//Validate RFC / CURP
bundles.Add(new StyleBundle("~/bundles/RFCCURP_ValidateCSS").Include(
"~/Content/Intranet/ValidateCurpRfc/RFCCURP_Validate_Styles.css"));
bundles.Add(new ScriptBundle("~/bundles/RFCCURP_Validate").Include(
"~/Scripts/Intranet/ValidateCurpRfc/RFCCURP_Validate.js"));


//PLD Prevencion de antilavado
bundles.Add(new StyleBundle("~/Content/PLDcss").Include(
"~/Content/STP/PLD_Styles.css"));
bundles.Add(new ScriptBundle("~/bundles/PLD").Include(
"~/Scripts/STP/PLD.js"));

//PLD Prevencion de antilavado
bundles.Add(new StyleBundle("~/Content/CardReplaceCSS").Include(
"~/Content/Intranet/CardReplace/CardReplace_Styles.css"));
bundles.Add(new ScriptBundle("~/bundles/CardReplace").Include(
"~/Scripts/Intranet/CardReplace/CardReplace.js"));

// - RolesAdmin Integrador
bundles.Add(new ScriptBundle("~/bundles/RolesAdmin").Include(
"~/Scripts/Integrador/RolesAdmin/RolesAdmin.js"));
bundles.Add(new StyleBundle("~/Content/RolesAdminCSS").Include(
"~/Content/Integrador/RolesAdmin/RolesAdmin_Styles.css"));

// - Convenio-Usuario Integrador
bundles.Add(new ScriptBundle("~/bundles/AssignAgreementUser").Include(
"~/Scripts/Integrador/AssignAgreementUser/AssignAgreementUser.js"));
bundles.Add(new StyleBundle("~/Content/AssignAgreementUserCSS").Include(
"~/Content/Integrador/AssignAgreementUser/AssignAgreementUser_Styles.css"));

// - Nuevo Usuario Integrador
bundles.Add(new ScriptBundle("~/bundles/Account").Include(
"~/Scripts/Integrador/Account/Account.js"));
bundles.Add(new StyleBundle("~/Content/AccountCSS").Include(
"~/Content/Integrador/Account/Account_Styles.css"));

// - Employees Integrador
bundles.Add(new ScriptBundle("~/bundles/Employees").Include(
"~/Scripts/Integrador/Employees/Employees.js"));
bundles.Add(new StyleBundle("~/Content/EmployeesCSS").Include(
"~/Content/Integrador/Employees/Employees_Styles.css"));
// - Certification
bundles.Add(new ScriptBundle("~/bundles/CertificationJS").Include(
"~/Scripts/Intranet/Certification/Certification.js"));

// - ClosingAct
bundles.Add(new ScriptBundle("~/bundles/ClosingActJS").Include(
"~/Scripts/Intranet/ClosingAct/ClosingAct.js"));

// - Abonos
bundles.Add(new ScriptBundle("~/bundles/AbonosJS").Include(
"~/Scripts/Invoice/RFCValidator/bootstrap-table-export.js",
"~/Scripts/Invoice/RFCValidator/tableExport.min.js",
"~/Scripts/Intranet/Abonos/Abonos.js"));

// - Alta Anuncios
bundles.Add(new StyleBundle("~/Content/AnunciosCSS").Include(
"~/Content/Intranet/Anuncios/slick-theme.css",
"~/Content/Intranet/Anuncios/Anuncios.css"));
bundles.Add(new ScriptBundle("~/bundles/AltaAnunciosJS").Include(
"~/Scripts/Intranet/Anuncios/slick.js",
"~/Scripts/swag.js",
"~/Scripts/Intranet/Anuncios/nicEdit.js",
"~/Scripts/Intranet/Anuncios/Anuncios.js"));

// - FuelCardLock
bundles.Add(new ScriptBundle("~/bundles/FuelCardLock").Include(
"~/Scripts/Intranet/FuelCardLock/FuelCardLock.js"));
bundles.Add(new StyleBundle("~/Content/FuelCardLockCSS").Include(
"~/Content/Intranet/FuelCardLock/FuelCardLock_Styles.css"));

// - btTablev1.1.15.5
bundles.Add(new ScriptBundle("~/bundles/jsbtTablev1-15-5").Include(
"~/Scripts/btTablev1-15-5/bootstrap-table.min.js",
"~/Scripts/btTablev1-15-5/bootstrap-table-es-MX.min.js"));

bundles.Add(new ScriptBundle("~/bundles/btTableExportv1-15-5").Include(
"~/Scripts/btTablev1-15-5/tableExport.js",
"~/Scripts/btTablev1-15-5/libs/js-xlsx/xlsx.core.min.js",
"~/Scripts/btTablev1-15-5/bootstrap-table.min.js",
"~/Scripts/btTablev1-15-5/bootstrap-table-es-MX.min.js",
"~/Scripts/btTablev1-15-5/extensions/export/bootstrap-table-export.min.js"));

bundles.Add(new StyleBundle("~/Content/cssbtTablev1-15-5").Include(
"~/Content/btTable/bootstrap-table.min.css"));

bundles.Add(new ScriptBundle("~/bundles/Reconciliacion").Include(
"~/Areas/Conciliacion/Scripts/Core.handlebars.js",
"~/Scripts/jquery.oc-core-intranet.js",
"~/Areas/Conciliacion/Scripts/TableFormatters.js",
"~/Areas/Conciliacion/Scripts/RevisionConciliacion_defaults.js",
"~/Areas/Conciliacion/Scripts/DetalleTransaccion_defaults.js",
"~/Areas/Conciliacion/Scripts/Conciliacion.js",
"~/Areas/Conciliacion/Scripts/Brands/OXXO.js",
"~/Areas/Conciliacion/Scripts/Brands/Mastercard.js",
"~/Areas/Conciliacion/Scripts/Brands/Carnet.js",
"~/Areas/Conciliacion/Scripts/Conciliacion_helpers.js",
"~/Areas/Conciliacion/Scripts/Catalogs/globalVariables.js"
));
bundles.Add(new StyleBundle("~/Content/Reconciliacion_CSS").Include(
"~/Areas/Conciliacion/Styles/Conciliacion.css"));
bundles.Add(new ScriptBundle("~/bundles/Reconciliacion-Operations").Include(
"~/Areas/Conciliacion/Scripts/Departments/Operations.js"
));
bundles.Add(new StyleBundle("~/Content/Reconciliacion-Operations_CSS").Include(
"~/Areas/Conciliacion/Styles/Operations.css"));
bundles.Add(new ScriptBundle("~/bundles/Reconciliacion-Clarifications").Include(
"~/Areas/Conciliacion/Scripts/Departments/Clarifications.js"
));
bundles.Add(new StyleBundle("~/Content/Reconciliacion-Clarifications_CSS").Include(
"~/Areas/Conciliacion/Styles/Clarifications.css"));

//Reconciliation Files Management
bundles.Add(new ScriptBundle("~/bundles/ReconciliationFilesManagement").Include(
"~/Areas/Conciliacion/Scripts/FilesManagement.js"));
bundles.Add(new StyleBundle("~/Content/ReconciliationFilesManagementCSS").Include(
"~/Areas/Conciliacion/Styles/FilesManagement.css"));

//Reconciliation - Cobranza Extemporanea
bundles.Add(new ScriptBundle("~/bundles/CobranzaExtemporanea").Include(
"~/Areas/Conciliacion/Scripts/CobranzaExtemporanea.js"));

// - Dropzone
bundles.Add(new ScriptBundle("~/bundles/Dropzone").Include(
"~/Scripts/dropzone.js"));
bundles.Add(new StyleBundle("~/Content/DropzoneCSS").Include(
"~/Content/dropzone.css"));

// - Manejador de parametros de URL - https://github.com/alrusdi/jquery-plugin-query-object
bundles.Add(new ScriptBundle("~/bundles/jQueryUrlQueryObject").Include(
"~/Scripts/jquery.query-object.js"));

// - Repetidor dinamicos de elementos HTML - https://www.jqueryscript.net/form/Form-Fields-Repeater.html
bundles.Add(new ScriptBundle("~/bundles/jQueryFormRepeater").Include(
"~/Areas/Conciliacion/Scripts/External/repeater.js"));

// - Plugin para enmascarar inputs de moneda - https://plentz.github.io/jquery-maskmoney/
bundles.Add(new ScriptBundle("~/bundles/jQueryMaskMoney").Include(
"~/Areas/Conciliacion/Scripts/External/jquery.maskMoney.min.js"));


// - InfoUsuarios
bundles.Add(new ScriptBundle("~/bundles/InfoUsuariosJS").Include(
"~/Scripts/Travex/InfoUsuarios/InfoUsuarios.js"));
bundles.Add(new StyleBundle("~/Content/InfoUsuariosCSS").Include(
"~/Content/Travex/InfoUsuarios/InfoUsuarios.css"));

// - Usuarios de oxxo
bundles.Add(new ScriptBundle("~/bundles/OxxoUsersJS").Include(
"~/Scripts/Intranet/OxxoUsers/OxxoUsers.js"));
//Products
bundles.Add(new StyleBundle("~/bundles/products/designsCss").Include(
"~/Areas/Products/Content/dropzone.css",
"~/Areas/Products/Content/designs.css"));
bundles.Add(new StyleBundle("~/bundles/products/ProductionHistoryCss").Include(
"~/Areas/Products/Content/ProductionHistory.css",
"~/Content/bootstrap-datepicker.css"));
bundles.Add(new ScriptBundle("~/bundles/products/designsJs").Include(
"~/Areas/Products/Scripts/dropzone.js",
"~/Areas/Products/Scripts/designs.js"));
bundles.Add(new ScriptBundle("~/bundles/products/ProductionHistoryJs").Include(
"~/Areas/Products/Scripts/ProductionHistory.js",
"~/Areas/Products/Scripts/jquery.handlebars.js",
"~/Scripts/bootstrap-datepicker.js",
"~/Scripts/bootstrap-datepicker-es.js"));


// - InfoUsuarios
bundles.Add(new ScriptBundle("~/bundles/UnlockUser").Include(
"~/Scripts/Integrador/Account/UnlockUser.js"));

// - InfoUsuarios
bundles.Add(new ScriptBundle("~/bundles/adminRoles").Include(
"~/Scripts/Admin.js"));

// - Agreement
bundles.Add(new ScriptBundle("~/bundles/Agreement").Include(
"~/Scripts/Intranet/Agreement/Agreement.js"));
bundles.Add(new StyleBundle("~/bundles/AgreementCss").Include(
"~/Content/Intranet/Agreement/Agreement_Styles.css"));

// - Affiliations
bundles.Add(new ScriptBundle("~/bundles/Affiliations").Include(
"~/Scripts/Intranet/Affiliations/Affiliations.js"));
bundles.Add(new StyleBundle("~/bundles/AffiliationsCss").Include(
"~/Content/Intranet/Affiliations/Affiliations_Styles.css"));

// <---- HELPDESK ---->

//  Classifications
bundles.Add(new ScriptBundle("~/bundles/Classifications/MainJS").Include(
"~/Scripts/bootstrap.js",
"~/Scripts/select2.js",
"~/Scripts/main.js",
"~/Scripts/jquery-3.1.1.js",
"~/Scripts/swag.js"
));

bundles.Add(new ScriptBundle("~/bundles/Classifications").Include(
"~/Areas/HelpDesk/Scripts/Clasificaciones/Classifications.js"));

bundles.Add(new StyleBundle("~/bundles/Classifications/MainCSS").Include(
"~/Content/bootstrap.css",
"~/Content/select2.css"
));

//  Users/Departments

bundles.Add(new ScriptBundle("~/bundles/UserDepartment/MainJS").Include(
"~/Scripts/bootstrap.js",
"~/Scripts/select2.js",
"~/Scripts/main.js",
"~/Scripts/jquery-3.1.1.js",
"~/Scripts/swag.js"
));
bundles.Add(new ScriptBundle("~/bundles/UserDepartment").Include(
"~/Areas/HelpDesk/Scripts/Clasificaciones/UserDepartment.js"));

bundles.Add(new StyleBundle("~/bundles/UserDepartment/UserDepartmentCSS").Include(
"~/Areas/HelpDesk/Content/UserDepartment.css"
));

bundles.Add(new StyleBundle("~/bundles/UserDepartment/MainCSS").Include(
"~/Content/bootstrap.css",
"~/Content/select2.css"
));


// BinSponsor -> Produccion de tarjetas para fintech
bundles.Add(new ScriptBundle("~/bundles/BinSponsorJS").Include(
"~/Areas/Intranet/Scripts/BinSponsor/Index.js"));
bundles.Add(new StyleBundle("~/bundles/BinSponsorCSS").Include(
"~/Areas/Intranet/Styles/BinSponsor/Index.css"
));

// RH/RegisterUser
bundles.Add(new ScriptBundle("~/bundles/RegisterUser/MainJS").Include(
"~/Scripts/bootstrap.js",
"~/Scripts/select2.js",
"~/Scripts/main.js",
"~/Scripts/jquery-3.1.1.js",
"~/Scripts/swag.js"
));

bundles.Add(new ScriptBundle("~/bundles/RegisterUser").Include(
"~/Areas/RH/Scripts/RegisterUser/RegisterUser.js",
"~/Areas/RH/Scripts/RegisterUser/FamilyInfo.js",
"~/Areas/RH/Scripts/RegisterUser/JobInfo.js",
"~/Areas/RH/Scripts/RegisterUser/StudiesInfo.js",
"~/Areas/RH/Scripts/Validator/validator.js"));

bundles.Add(new StyleBundle("~/bundles/RegisterUser/MainCSS").Include(
"~/Content/bootstrap.css",
"~/Content/select2.css"
));

//RH/Departments
bundles.Add(new ScriptBundle("~/bundles/RH/Departments/MainJS").Include(
"~/Scripts/bootstrap.js",
"~/Scripts/select2.js",
"~/Scripts/main.js",
"~/Scripts/jquery-3.1.1.js",
"~/Scripts/swag.js",
"~/Areas/RH/Scripts/Announcements/Department.js"
));

bundles.Add(new ScriptBundle("~/bundles/RH/Departments/DepatmentsJS").Include(
"~/Areas/RH/Scripts/Announcements/Department.js"
));

bundles.Add(new StyleBundle("~/bundles/RH/Departments/MainCSS").Include(
"~/Content/bootstrap.css",
"~/Content/select2.css"
));

//RH/Groups
bundles.Add(new ScriptBundle("~/bundles/RH/Groups/MainJS").Include(
"~/Scripts/bootstrap.js",
"~/Scripts/select2.js",
"~/Scripts/main.js",
"~/Scripts/jquery-3.1.1.js",
"~/Scripts/swag.js"
));

bundles.Add(new ScriptBundle("~/bundles/RH/Groups/GroupsJS").Include(
"~/Areas/RH/Scripts/Announcements/Groups.js"
));


//RH/Vacations
bundles.Add(new ScriptBundle("~/bundles/RH/Vacations").Include(
"~/Areas/RH/Scripts/Vacations/Vacations.js",
"~/Areas/RH/Scripts/Vacations/frm_Vacations.js"
));

bundles.Add(new ScriptBundle("~/bundles/RH/AuthorizationJS").Include(
"~/Areas/RH/Scripts/Vacations/Authorization.js"
));

//Facturación 4.0
bundles.Add(new ScriptBundle("~/bundles/FacturacionJS")
.Include(Select2_js)
.Include(Swal2_js)
.Include(Moment_js)
.Include(Handlebars_js)
.Include(Linq_js)
.Include(datetimepicker_js)
.Include(bootstrapTable_js)
.Include("~/Areas/Invoice40/Scripts/Invoice40/Invoice40.js")
.Include("~/Areas/Invoice40/Scripts/Invoice40/Pagos.js"));

bundles.Add(new StyleBundle("~/bundles/Facturacion40CSS")
.Include(Select2_css)
.Include(Swal2_css)
.Include(datetimepicker_css)
.Include(bootstrapTable_css)
.Include("~/Areas/Invoice40/Content/Invoice40/Invoice40.css"));
}
}
}
`

generalOperations(bundleViejo,bundleNuevo)
function generalOperations(bundlesOld,bundlesNew) {
    var bundleViejo = bundlesOld.split('\n')
    var bundleNuevo = bundlesNew.split('\n')

    bundleViejo = bundleViejo.filter(filterBundles)
    bundleNuevo = bundleNuevo.filter(filterBundles)

    bundleViejo = cleanBundles(bundleViejo)
    bundleNuevo = cleanBundles(bundleNuevo)
    console.log(bundleViejo)
    console.log(bundleNuevo)

    compareBundles(bundleViejo,bundleNuevo)
}

function filterBundles(line) {
    return line.includes("new ScriptBundle") || line.includes("new StyleBundle");
}

function cleanBundles(_bundle){
    var bundlesArr = _bundle.map(function(element){
        //guarda lo del medio del string de esos dos indexs
        element = element.substring(element.indexOf(`(`)+1, element.indexOf(`)`));
        return  element;
    });
    bundlesArr = bundlesArr.map(function(element){
        element = element.substring(element.indexOf(`(`)+1);
        return  element;
    });
    return bundlesArr
}

function compareBundles(bundlesOld,bundlesNew){
    // elementos del newBundles que no estan en el oldBundles
    //elementos del oldBundles que no estan en el newBundles
    var difference = bundlesNew.filter(x => bundlesOld.indexOf(x) === -1);
    console.log(difference);
}