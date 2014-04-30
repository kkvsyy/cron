<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!Doctype html>
<html xmlns=http://www.w3.org/1999/xhtml>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="resources/css/ext-all.css">
<link rel="stylesheet" type="text/css" href="css/cron.css">
<script type="text/javascript" src="js/ext-all-debug.js"></script>
<script type="text/javascript">
	Ext.Loader.setConfig({
		enabled : true,
		paths : {
			//'类名前缀':'所在真实路径'  
			'CEB' : 'src'
		}
	});

	Ext.onReady(function() {
		Ext.QuickTips.init();
		Ext.create('CEB.app.Cron');
	});
</script>
<title>Quartz表达式生成器</title>
</head>
<body>
</body>
</html>