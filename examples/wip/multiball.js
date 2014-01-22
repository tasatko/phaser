
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

	game.load.image('arrow', 'assets/sprites/asteroids_ship.png');
	game.load.image('ball', 'assets/sprites/shinyball.png');
	game.load.spritesheet('gameboy', 'assets/sprites/gameboy_seize_color_40x60.png', 40, 60);

}

var gameboy;
var sprites;
var bmd;

function create() {

	game.stage.backgroundColor = '#124184';

	bmd = game.add.bitmapData(800, 600);
	bmd.fillStyle('#ffffff');
	var bg = game.add.sprite(0, 0, bmd);
	bg.body.moves = false;

	game.physics.gravity.y = 250;

	sprites = game.add.group();

	for (var i = 0; i < 40; i++)
	{
		var s = sprites.create(game.rnd.integerInRange(100, 700), game.rnd.integerInRange(32, 200), 'ball');
		s.body.velocity.x = game.rnd.integerInRange(-400, 400);
		s.body.velocity.y = game.rnd.integerInRange(-200, 200);
		s.name = 'ball' + i;
	}

	sprites.setAll('body.collideWorldBounds', true);
	sprites.setAll('body.bounce.x', 0.9);
	sprites.setAll('body.bounce.y', 0.9);
	sprites.setAll('body.minBounceVelocity', 0.8);

	gameboy = game.add.sprite(300, 50, 'gameboy', 0);
	gameboy.name = 'gameboy';
	gameboy.body.collideWorldBounds = true;
	gameboy.body.bounce.setTo(0.9, 0.9);
	gameboy.body.velocity.x = game.rnd.integerInRange(-400, 400);
	gameboy.body.velocity.y = game.rnd.integerInRange(-200, 200);

}

function update() {

	game.physics.collide(gameboy, sprites);
	game.physics.collide(sprites);

	// sprite.rotation = sprite.body.angle;

	// if (sprite)
	// {
	// 	bmd.fillStyle('#ffff00');
	// 	bmd.fillRect(sprite.body.center.x, sprite.body.center.y, 2, 2);
	// }

	// if (sprite2)
	// {
	// 	bmd.fillStyle('#ff00ff');
	// 	bmd.fillRect(sprite2.body.center.x, sprite2.body.center.y, 2, 2);
	// }

}

function render() {


}
