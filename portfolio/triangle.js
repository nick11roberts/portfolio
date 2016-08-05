var WIDTH = 50;
var HEIGHT = 100;
var NUM_VERTICES = 3;

var rand = new Array(NUM_VERTICES);

for( i = 0; i < NUM_VERTICES; i++ ){
	rand[i] = new Point(Math.random() * WIDTH,
						Math.random() * HEIGHT);
}

for( i = 0; i < NUM_VERTICES; i++ ){
	var path = new Path.Line(rand[i],
							 rand[(i + 1) % NUM_VERTICES]);
	path.strokeColor = 'red';
}
/*
for( i = 0; i < NUM_VERTICES; i++ ){
	rand[i] = new Point((Math.random() * WIDTH) + 100,
						Math.random() * HEIGHT);
}

for( i = 0; i < NUM_VERTICES; i++ ){
	var path = new Path.Line(rand[i],
							 rand[(i + 1) % NUM_VERTICES]);
	path.strokeColor = 'red';
}
*/
