let img = [];
let text_titles = [];
let ranNum = 0;
let table;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQumdtbxPmDzg5Kh9Jj7ULGDtgF4OFIMgtnGd6BZ2LNdWdmSgEWnkDu5_gzaDb8TfsEAB6Py58h3zYz/pub?gid=0&single=true&output=csv";
let file_name;
let title;
let item_count;
let portrait = false;
let counter=61;
let trans,two_trans;
// let url = "assets/NG_Stories_Digital_Dossier_Demo_db - Sheet1.csv";

function preload() {
	table = loadTable(url, 'csv', 'header');
}

function setup() {
	item_count = table.getRowCount();
	console.log("item_count = " + item_count);
	//console.log(table.getColumnCount() + ' total columns in table');
	file_name = table.getColumn('file_name');
	title = table.getColumn('title');
	createCanvas(windowWidth, windowHeight);
	for (i = 0; i < item_count; i++) {
		//	img[i] = loadImage("artworks/" + file_name[i] + ".jpg");
		img[i] = createImg(file_name[i],'image for db demo');
		img[i].hide();
		text_titles[i] = title[i];
	}
	textAlign(CENTER);
	frameRate(15);
}

function draw() {
	// background('#eee');
	background(0);
	if (counter<30){
	
		ranNum = int(random(item_count));
		counter++;
		 trans=220;
	}else{
		 trans=0;
	}
	let perScale;
	if (img[ranNum].height > img[ranNum].width) {
		let perc1 = 100 / img[ranNum].height;
		let perc2 = perc1 * windowHeight;
		perScale = perc2 / 200;
		// console.log("perc1 = "+perc1);
		// console.log("perc2 = "+perc2);
		// console.log("perScale = "+perScale);
	} else {
		console.log("landscape");
		let perc1 = 100 / img[ranNum].width;
		let perc2 = perc1 * windowWidth;
		perScale = perc2 / 300;
	}
	//	img[ranNum].resize(img[ranNum].width * perScale, img[ranNum].height * perScale);
	// image(img[ranNum], windowWidth / 2 - img[ranNum].width * perScale / 2, windowHeight / 2 - img[ranNum].height * perScale / 2, img[ranNum].width * perScale, img[ranNum].height * perScale);
	image(img[ranNum], windowWidth / 2 - (img[ranNum].width * perScale) / 2, windowHeight / 2 - (img[ranNum].height * perScale) / 2, img[ranNum].width * perScale, img[ranNum].height * perScale);
	
	fill(220);
	text(text_titles[ranNum], width / 2, 30);
	fill(0,trans);
	rect(0,0,width,height);
	
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		counter=0;
	}
}

function mousePressed() {
		counter=0;
}
function touchStarted() {
		counter=0;
  }