<%@page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html> 
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>HEC webbase</title>

		<script src="/webbase/lib/shim.min.js"></script>
		<script src="/webbase/lib/zone.js"></script>
		<script src="/webbase/lib/Reflect.js"></script>
		<script src="/webbase/lib/system.src.js"></script>
		<script src="/webbase/lib/systemjs.config.js"></script>

		<script>
			System.import('app').catch(function(err){ console.error(err); });
		</script>

		<link rel="stylesheet" type="text/css" href="css/style.css" />
	</head>
	
	<body id="body">
		<h1>Hec Web Base</h1>

		<webbase></webbase>
	</body>
</html>
