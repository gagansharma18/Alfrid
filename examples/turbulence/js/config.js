(function() {
<<<<<<< HEAD
	
	var projectJsFolder = "";
=======
>>>>>>> 6d975a773a6f2ad091b88f932153c0dd9582bcba
	var alfridJsFolder = "../../../js/";
	
	requirejs.config(
		{
			"paths": {
<<<<<<< HEAD
				"alfrid": alfridJsFolder + "alfrid"
			},
			"map": {
				
			},
			"shim": {
				
=======
				"alfrid": alfridJsFolder + "alfrid",
				"glMatrix": ["../../../js/libs/gl-matrix-2.2.2-min"],
				"SimpleImageLoader": ["../../../js/bongiovi/SimpleImageLoader"],
				"Scheduler": ["../../../js/bongiovi/Scheduler"]
			},
			"shim": {
				"glMatrix": "glMatrix",
				"SimpleImageLoader": "SimpleImageLoader",
				"Scheduler": "Scheduler",
				"Perlin": "Perlin"
>>>>>>> 6d975a773a6f2ad091b88f932153c0dd9582bcba
			}
		}
	);
	
	requirejs(["app"]);
})();