// Because neocities can not provide server side code to get all the file names of the images,
// for now I will have to do it individually
const allWork = ['IDMTHY-poster_GraphicDesign.jpeg', 'TMOLH-poster_GraphicDesign.jpeg', 'blond-poster_GraphicDesign.jpeg', 'brat-poster_GraphicDesign.jpeg', 
    'earfquake-poster_GraphicDesign.jpeg', 'grow-success_GraphicDesign.jpeg', 'hepatology-conference_GraphicDesign.jpeg', 'image-poster_GraphicDesign.jpeg', 'imaginal-disk_GraphicDesign.jpeg', 'lost-success_GraphicDesign.jpeg', 'mbdtf-poster_GraphicDesign.jpeg',
    'noid-poster_GraphicDesign.jpeg', 'reach-success_GraphicDesign.jpeg', 'rodeo-poster_GraphicDesign.jpeg', 'st-chroma-poster_GraphicDesign.jpeg', 'utopia-poster_GraphicDesign.jpeg', 'velour-wanted_GraphicDesign.jpeg',
    'velour1_GraphicDesign.jpeg', 'yeezus-poster_GraphicDesign.jpeg', 'ib-work-green-funeral-home_VisualArt.jpeg', 'lahai-poster_GraphicDesign.jpeg', 'e360-sticker-art_VisualArt.png', 'e360-sticker-2_VisualArt Large.jpeg', 'ib-work-obelisk_VisualArt.jpeg',
    'lahai-poster-alt-artwork_VisualArt.jpeg', 'ib-work-guillotine_VisualArt.jpeg', 'ib-work-mary-turner_VisualArt.jpeg'

];

//todo: make all the images OBJECTS so you can assign them values like tags, date, description, name

const waterfallSection = document.querySelector('.waterfall');
const portfolioDialog = document.querySelector('dialog');
const dialogCloseBtn = document.querySelector('.dialog-close-btn');
const dialogArt = document.querySelector('.focused-work');

//for some reason, when the dialog is open, the imgElement of the currently opened dialog dissapears in the bg but it
// reappears when the dialog closes. for a quick fix, i'll just make it unnoticeable with a higher modalbg opacity
function displayWaterfall() {
    waterfallSection.innerHTML = '';
    for (artwork in allWork) {
        const fileSrc = `../portfolio_work/${allWork[artwork]}`;
        const imgElement = document.createElement('img');
        imgElement.src = fileSrc;
    
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('waterfall-card');
        imgDiv.addEventListener('click', () => {
            portfolioDialog.showModal();
    
            dialogArt.innerHTML = '';
            dialogArt.appendChild(imgElement);
            dialogArt.style.width = '40vw';
            dialogArt.style.height = '100vh';
        });
    
        imgDiv.appendChild(imgElement);
        waterfallSection.appendChild(imgDiv);
    }
}
displayWaterfall();

dialogCloseBtn.addEventListener('click', () => {
    portfolioDialog.close();
    displayWaterfall();
});

