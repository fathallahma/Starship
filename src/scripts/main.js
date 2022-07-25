import game from './game.js';

const init = () => {

	window.addEventListener("keydown", game.keyDownActionHandler.bind(game));
  window.addEventListener("keyup", game.keyUpActionHandler.bind(game));

	const saucerButton = document.getElementById("nouvelleSoucoupe");
	saucerButton.addEventListener("click", () => {
		game.addSaucer();
		document.activeElement.blur();
	});

 	const display = document.getElementById("score");
	game.display = display;


	const boutonFlotteSoucoupe = document.getElementById("flotteSoucoupes");
	boutonFlotteSoucoupe.addEventListener("click", () => {
		game.animate();
		document.activeElement.blur();
	});

	game.moveAndDraw();
}

window.addEventListener("load",init);

console.log('le bundle a été généré');
