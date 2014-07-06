console.log("arctic-script.js loaded...");

//////////////////////////////////////////////////

var columnNo; // No. of columns.
var breakPoints = ["","","",""]	; // The breakpoints at which layout has to be redrawn.
var blocks = [	// List of images to be loaded, should be replaced with containers later on.
	"http://1.bp.blogspot.com/-c7ejjuJqffA/UIeciE5uxaI/AAAAAAAAKC0/4hawiq5QWKM/s640/Keira+Knightley+Photos+3.jpg",
	"http://4.bp.blogspot.com/-fnbgqsHBhr0/UCOmJYo-oNI/AAAAAAAABbU/zt6-obMm210/s1600/agnes+cecilee.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/250px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/b/bb/Willis_%28Sears%29_Tower_from_South_Loop.jpg",
	"http://3.bp.blogspot.com/_3frbnPPxRYg/TNhCbrB-97I/AAAAAAAAATI/ZDszuGaaaDQ/s400/cappuccino2.jpg",
	"http://images.nationalgeographic.com/wpf/media-live/photos/000/726/cache/eucalyptus-gold_72662_600x450.jpg",
	"http://webneel.com/daily/sites/default/files/images/daily/06-2013/1-best-portrait-photography.preview.jpg",
	"http://w8themes.com/wp-content/uploads/2014/03/Bird-Wallpaper-81.jpg",
	"http://cdn.lamborghini.com/content/models/aventador_lp700-4/av_lp700-4_ov1_1920x1080.jpg",
	"http://www.lightspacetime.com/wp-content/gallery/photography-2013-winners/hon-mention-harkins_2_photography_huntmarshscape.jpg",
	"http://assets.vancitybuzz.com/wp-content/uploads/2014/01/hastings-better.jpg?89c18c"
];

function addBlock(src,column)
{
	document.getElementById("main").children[column].appendChild(createBlock(src));
}

function createBlock(src)	
{
	var newBlock = document.createElement("div")
	newBlock.className = "block";

	var image = document.createElement("img")
	image.setAttribute("src",src);
	image.setAttribute("onload","this.parentNode.className += ' active';");
	
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

function drawBlocks()
{

	for( i=0 ; i<blocks.length ; i++)
		addBlock(blocks[i],i%columnNo);
}

function init()
{
	columnNo = 5;
	drawBlocks();
}

// Initialize 
init();

// addBlock("http://images3.wikia.nocookie.net/__cb20080424154432/uncyclopedia/images/0/0c/Master_Chief_1.jpg",0);
// addBlock("http://4.bp.blogspot.com/-fnbgqsHBhr0/UCOmJYo-oNI/AAAAAAAABbU/zt6-obMm210/s1600/agnes+cecilee.jpg",1);
// addBlock("http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/250px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg",2);
// addBlock("http://upload.wikimedia.org/wikipedia/commons/b/bb/Willis_%28Sears%29_Tower_from_South_Loop.jpg",3);



