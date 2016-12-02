(function(global) {
	System.config({
		paths: {
			"npm:": "/webbase/lib/"
		},
		
		map: {
			// App
			app: "/webbase/app",

			// Angular
			"@angular/core": "npm:@angular/core/bundles/core.umd.min.js",
			"@angular/common": "npm:@angular/common/bundles/common.umd.min.js",
			"@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.min.js",
			"@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.min.js",
			"@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js",
			"@angular/http": "npm:@angular/http/bundles/http.umd.min.js",
			"@angular/router": "npm:@angular/router/bundles/router.umd.min.js",
			"@angular/forms": "npm:@angular/forms/bundles/forms.umd.min.js",

			// Rxjs
			"rxjs": "npm:rxjs"
		},

		// Packages tells the System loader how to load when no filename and/or no extension
		packages: {
			app: {
				main: "./main.js",
				defaultExtension: "js"
			},

			rxjs: {
				defaultExtension: "js"
			}
		}
	});
})(this);
