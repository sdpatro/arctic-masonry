console.log("arctic-script.js loaded...");

//////////////////////////////////////////////////
var columnNo; // No. of columns.
var breakPoints;// The breakpoints at which layout has to be redrawn.
var containers = new Array(100); // List of containers
var blocksURI = [	// List of images to be loaded, should be replaced with containers later on.
	"http://4.bp.blogspot.com/-kmQNCBK0GWY/UNxCYzMxYVI/AAAAAAAARRw/9aWAYj3OesE/s400/NATALIE-PORTMAN-forbes.jpg",
	"http://4.bp.blogspot.com/-fnbgqsHBhr0/UCOmJYo-oNI/AAAAAAAABbU/zt6-obMm210/s1600/agnes+cecilee.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/250px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sears_Tower1.JPG/240px-Sears_Tower1.JPG",
	"http://3.bp.blogspot.com/_3frbnPPxRYg/TNhCbrB-97I/AAAAAAAAATI/ZDszuGaaaDQ/s400/cappuccino2.jpg",
	"http://images.nationalgeographic.com/wpf/media-live/photos/000/726/cache/eucalyptus-gold_72662_600x450.jpg",
	"http://webneel.com/daily/sites/default/files/images/daily/06-2013/1-best-portrait-photography.preview.jpg",
	"http://w8themes.com/wp-content/uploads/2014/03/Bird-Wallpaper-81.jpg",
	"http://cdn.lamborghini.com/content/models/aventador_lp700-4/av_lp700-4_ov1_1920x1080.jpg",
	"http://www.lightspacetime.com/wp-content/gallery/photography-2013-winners/hon-mention-harkins_2_photography_huntmarshscape.jpg",
	"http://assets.vancitybuzz.com/wp-content/uploads/2014/01/hastings-better.jpg?89c18c",
	"http://1.bp.blogspot.com/-c7ejjuJqffA/UIeciE5uxaI/AAAAAAAAKC0/4hawiq5QWKM/s640/Keira+Knightley+Photos+3.jpg",
	"http://4.bp.blogspot.com/-fnbgqsHBhr0/UCOmJYo-oNI/AAAAAAAABbU/zt6-obMm210/s1600/agnes+cecilee.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg/250px-Reproduction-of-the-1805-Rembrandt-Peale-painting-of-Thomas-Jefferson-New-York-Historical-Society_1.jpg",
	"http://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sears_Tower1.JPG/240px-Sears_Tower1.JPG"
];

function addContainer(container,column)
{
	document.getElementById("main").children[column].appendChild(container);
}

function createContainer(src)	
{
	var newBlock = document.createElement("div");
	newBlock.className = "block";

	var image = document.createElement("img");
	image.setAttribute("src",src);
	image.setAttribute("onload","this.parentNode.className = 'block active';");
	
	newBlock.appendChild(image);

	var newContainer = document.createElement("div");
	newContainer.className = "container";
	newContainer.appendChild(newBlock);

	return newContainer;
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

function drawContainers(columnNo)
{
	document.getElementById("main").style.display = "block";
	
	setTimeout(function() {
		document.getElementById("main").className = "active";
	},200);

	for( i=0 ; i<containers.length ; i++)
	{
		if(containers[i])
		addContainer(containers[i],i%columnNo);
	}	
}

function loadContainers()
{
	for( i=0 ; i<blocksURI.length ; i++)
		containers[i] = createContainer(blocksURI[i]);
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

		document.getElementById("main").style.display = "none";
		document.getElementById("main").className = "inactive";
		setTimeout(function() {
			drawContainers(columnNo);},100);
	}
}

function getColumnNo()
{
	var calcColumnNo;
	mainWidth = document.getElementById("main").clientWidth;

	if(mainWidth<400)
	{	
		calcColumnNo = 1;		
	}

	else if(mainWidth<700 && mainWidth>=400)
	{	
		calcColumnNo = 2;		
	}

	else if(mainWidth<900 && mainWidth>=700)
	{	
		calcColumnNo = 3;		
	}

	else if(mainWidth<1100 && mainWidth>=900)
	{	
		calcColumnNo = 4;		
	}

	else if(mainWidth<1600 && mainWidth>=1100)
	{
		calcColumnNo = 5;
	}

	else if(mainWidth<1950 && mainWidth>=1600)
	{
		calcColumnNo = 6;
	}

	else if(mainWidth<2200 && mainWidth>=1950)
	{
		calcColumnNo = 7;	
	}

	else if(mainWidth<2400 && mainWidth>2200)
	{
		calcColumnNo = 8;	
	}

	else if(mainWidth<2500 && mainWidth>2250)
	{
		calcColumnNo = 9;	
	}

	else
		calcColumnNo = 10;
	

	return calcColumnNo;
}

function loadMore()
{
	
}

function init()
{
	console.log(document.getElementById("main").clientWidth);
	columnNo = getColumnNo();
	setColumnWidth(columnNo);
	loadContainers();
	drawContainers(columnNo);
}

window.addEventListener('resize',resizeHandler,true);
window.onkeypress = function loadMore() {
	console.log("Load MOAR!");
	loadContainers();
	drawContainers(columnNo);
}

// Initialize 
init();



