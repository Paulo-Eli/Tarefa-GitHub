$("document").ready(function() {
	
	var css_js = document.getElementById("css-js");
	var css_js_ideal = document.getElementById("css-js-ideal");
	var css_jquery = $("#css-jquery");
	
	// usando cssText
	css_js.addEventListener("click", function () {
		css_js.style.cssText +=
		`background: black; 
		color: white;`;
	});
	
	css_js.addEventListener("dblclick", function () {
		css_js.style.padding = "35px";
	});
	
	// usando Object.assing
	css_js_ideal.addEventListener("click", function () {
		Object.assign(css_js_ideal.style,{background: "black", 
										  color: "white"});
	});
	
	css_js_ideal.addEventListener("dblclick", function () {
		Object.assign(css_js_ideal.style,{padding: "35px"});
	});
	
	// usando jQuery
	css_jquery.click(function () {
	   css_jquery.css({background: "black", 
					   color: "white"});
	});
	
	css_jquery.dblclick(function() {
		css_jquery.css("padding", "35px");
	});
});