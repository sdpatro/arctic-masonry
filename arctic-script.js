console.log("arctic-script.js loaded...");

//////////////////////////////////////////////////
var columnNo; // No. of columns.
var breakPoints;// The breakpoints at which layout has to be redrawn.
var blocks = new Array(100); // List of blocks
var blocksURI = [	// List of images to be loaded, should be replaced with containers later on.
	"http://1.bp.blogspot.com/-c7ejjuJqffA/UIeciE5uxaI/AAAAAAAAKC0/4hawiq5QWKM/s640/Keira+Knightley+Photos+3.jpg",
	"http://4.bp.blogspot.com/-fnbgqsHBhr0/UCOmJYo-oNI/AAAAAAAABbU/zt6-obMm210/s1600/agnes+cecilee.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/250px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sears_Tower1.JPG/240px-Sears_Tower1.JPG",
	"http://3.bp.blogspot.com/_3frbnPPxRYg/TNhCbrB-97I/AAAAAAAAATI/ZDszuGaaaDQ/s400/cappuccino2.jpg",
	"http://images.nationalgeographic.com/wpf/media-live/photos/000/726/cache/eucalyptus-gold_72662_600x450.jpg",
	"http://webneel.com/daily/sites/default/files/images/daily/06-2013/1-best-portrait-photography.preview.jpg",
	"http://w8themes.com/wp-content/uploads/2014/03/Bird-Wallpaper-81.jpg",
	"http://cdn.lamborghini.com/content/models/aventador_lp700-4/av_lp700-4_ov1_1920x1080.jpg",
	"http://www.lightspacetime.com/wp-content/gallery/photography-2013-winners/hon-mention-harkins_2_photography_huntmarshscape.jpg",
	"http://assets.vancitybuzz.com/wp-content/uploads/2014/01/hastings-better.jpg?89c18c"/*,
	"http://www.hellomagazine.com/imagenes/profiles/keira-knightley/5718-keira-knightley.jpg",
	"http://media.newindianexpress.com/keira_ap.jpg/2014/04/02/article2145177.ece/binary/original/keira_ap.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/d/d3/Keira_Knightley_at_BAFTA_Film_Awards_2008.jpg",
	"http://cdn.filmschoolrejects.com/images/Keira-Knightley.jpg",
	"http://imstars.aufeminin.com/stars/fan/keira-knightley/keira-knightley-20080117-364771.jpg",
	"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRTGQ_m9bJM_fOUt44OiN7yr1f2KxT8SQmIZBIt9Mxv26nBpKCtpg",
	"http://imstars.aufeminin.com/stars/fan/keira-knightley/keira-knightley-20090113-484044.jpg",
	"http://www.shortshairstyles.com/wp-content/uploads/2014/04/keira-knightley-short-hair.jpg",
	"http://cinematicpassions.files.wordpress.com/2008/09/keira-knightley-1.jpg"*/
];

function addBlock(block,column)
{
	document.getElementById("main").children[column].appendChild(block);
}

function createBlock(src)	
{
	var newBlock = document.createElement("div")
	newBlock.className = "block";

	var image = document.createElement("img")
	image.setAttribute("src",src);
	image.setAttribute("onload","this.parentNode.className = 'block active';");
	
	newBlock.appendChild(image);

	return newBlock;
}

function getMinColumn()			// Getting the column with the min height
{
	var bottoms = [0,0,0,0];

	for( i=0 ; i<columnNo ; i++)
	{
		bottoms[i] = document.getElementById("main").children[i].getBoundingClientRect().bottom;
	}

	var min=Math.min.apply(null,bottoms);

	return (bottoms.indexOf(min));
}

function drawBlocks(columnNo)
{
	for( i=0 ; i<blocks.length ; i++)
	{
		if(blocks[i])
		addBlock(blocks[i],i%columnNo);
	}
	
}

function loadBlocks()
{
	for( i=0 ; i<blocksURI.length ; i++)
		blocks[i] = createBlock(blocksURI[i]);
}

function setColumnWidth(columnNo)
{
	for(i=0 ; i<columnNo ; i++)
	{
		document.getElementById("main").children[i].className = "column no"+columnNo;
	}
}

function resizeHandler()
{
	var newColumnNo = getColumnNo();

	if(newColumnNo!=columnNo)
	{	columnNo = newColumnNo;
		setColumnWidth(columnNo);

		drawBlocks(columnNo);}
}

function getColumnNo()
{
	var calcColumnNo;
	mainWidth = document.getElementById("main").offsetWidth;

	if(mainWidth<400)
	{	
		calcColumnNo = 1;		
	}

	else if(mainWidth<600 && mainWidth>400)
	{	
		calcColumnNo = 2;		
	}

	else if(mainWidth<900 && mainWidth>600)
	{	
		calcColumnNo = 3;		
	}

	else if(mainWidth<1100 && mainWidth>900)
	{	
		calcColumnNo = 4;		
	}

	else if(mainWidth<1600 && mainWidth>1100)
	{
		calcColumnNo = 5;
	}

	else
		calcColumnNo = 6;

	return calcColumnNo;
}

function init()
{
	columnNo = getColumnNo();
	setColumnWidth(columnNo);
	loadBlocks();
	drawBlocks(columnNo);
}

window.addEventListener('resize',resizeHandler,true);

// Initialize 
init();



