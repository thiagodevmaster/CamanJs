const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile  = document.getElementById('upload-file');
const revertBtn   = document.getElementById('revert-btn');

// ADD Filters & Effects
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('brigthness-add')){
            Caman('#canvas', img, function(){
                this.brightness(5).render();
            });
        }else if (e.target.classList.contains('brigthness-remove')){
            Caman('#canvas', img, function(){
                this.brightness(-5).render();
            });
        }else if (e.target.classList.contains('contrast-add')){
            Caman('#canvas', img, function(){
                this.contrast(5).render();
            });
        }else if (e.target.classList.contains('contrast-remove')){
            Caman('#canvas', img, function(){
                this.contrast(-5).render();
            });
        }else if (e.target.classList.contains('saturation-add')){
            Caman('#canvas', img, function(){
                this.saturation(5).render();
            });
        }else if (e.target.classList.contains('saturation-remove')){
            Caman('#canvas', img, function(){
                this.saturation(-5).render();
            });
        }else if (e.target.classList.contains('vibrance-add')){
            Caman('#canvas', img, function(){
                this.vibrance(5).render();
            });
        }else if (e.target.classList.contains('vibrance-remove')){
            Caman('#canvas', img, function(){
                this.vibrance(-5).render();
            });
        }


        // EFFECTS
        else if (e.target.classList.contains('vintage-add')){
            Caman('#canvas', img, function(){
                this.vintage().render();
            });
        }else if (e.target.classList.contains('lomo-add')){
            Caman('#canvas', img, function(){
                this.lomo().render();
            });
        }else if (e.target.classList.contains('clarity-add')){
            Caman('#canvas', img, function(){
                this.clarity().render();
            });
        }else if (e.target.classList.contains('sin-city-add')){
            Caman('#canvas', img, function(){
                this.sinCity().render();
            });
        }else if (e.target.classList.contains('crossprocess-add')){
            Caman('#canvas', img, function(){
                this.crossProcess().render();
            });
        }else if (e.target.classList.contains('pinhole-add')){
            Caman('#canvas', img, function(){
                this.pinhole().render();
            });
        }else if (e.target.classList.contains('nostalgia-add')){
            Caman('#canvas', img, function(){
                this.nostalgia().render();
            });
        }else if (e.target.classList.contains('hermajesty-add')){
            Caman('#canvas', img, function(){
                this.herMajesty().render();
            });
        }
    }
});


// Revert Filters 
revertBtn.addEventListener('click', () => {
    Caman('#canvas', img, function(){
        this.revert();
    });
});



// UPLOAD FILE
uploadFile.addEventListener('change', (e) => {
// GET FILE
const file = document.getElementById('upload-file').files[0];

// INIT FileReader
const reader = new FileReader();

if(file){
    // SET File Name
    fileName = file.name;
    // Read data as URL
    reader.readAsDataURL(file);
}

// ADD img to canvas
reader.addEventListener('load', () => {
    // Create img 
    img = new Image();
    // Set src
    img.src = reader.result;
    // On image load add to canvas
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute('data-caman-id');
    }
}, false);

});


// DOWNLOAD BUTTON
downloadBtn.addEventListener('click', () => {
    // GET FILE ext
    const fileExtension = fileName.slice(-4);

    // Initialize a new fileName
    let newFileName;

    // Check  image type
    if(fileExtension === '.jpg' || fileExtension === '.png'){
        newFileName = fileName.substring(0, fileName.length - 4) + 'edit.jpg';
    }

    // Call Dowload
    download(canvas, newFileName);
});

function download(canvas, newFileName){
    // INIT Event
    let e;
    // Create Link
    const link = document.createElement('a');
    link.download = fileName; 
    link.href = canvas.toDataURL('image/jpeg', 0.8);

    // new mouse event
    e = new MouseEvent('click');

    // dispatcher event
    link.dispatchEvent(e);
}
