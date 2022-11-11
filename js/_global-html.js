$("document").ready(function() {
	$("#global").html(`<header id="header">
		<div id="logo">Trabalho de Tópicos Especiais</div>
		<nav id="nav-bar" class="clearfix">
			<ul>
				<li><a href="index.html">Página inicial</a></li>
				<li><a href="*">html</a></li>
				<li><a href="*">css</a></li>
				<li><a href="*">JavaScript</a></li>
				<li><a href="*">JQuery</a></li>
				<li><a href="*">TypeScript</a></li>
			</ul>
		</nav>
	</header>

	<section id="content" class="clearfix">
		${createAside()}

	</section>
	`);			
	
	let content = $("#content");
	let tempContent = $("#temp-content");
	content.html(tempContent.html() + content.html());
	tempContent.remove();
	
	$("footer").html("Trabalho de Tópicos Especiais, por Júlio César Rodrigues de Oliveira");
});

function createAside() {
	return `
		<aside>
			<div class="topico">
				<h3>Tópicos</h3>
				<p>Tópico 1</p>
				<p>Tópico 2</p>
				<p>Tópico 3</p>
				<p>Tópico 4</p>
				<p>Tópico 5</p>
				<p>Tópico 6</p>
				<p>Tópico 7</p>
			</div>
			<div class="topico">
				<h3>Tópicos</h3>
				<p>Tópico 1</p>
				<p>Tópico 2</p>
				<p>Tópico 3</p>
				<p>Tópico 4</p>
				<p>Tópico 5</p>
				<p>Tópico 6</p>
				<p>Tópico 7</p>
			</div>
		</aside>
	`;
};