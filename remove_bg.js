const { Jimp } = require('jimp');

async function removeBackground() {
    try {
        const image = await Jimp.read('public/images/footer_transparent.png');
        
        const tolerance = 230;

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            if (r >= tolerance && g >= tolerance && b >= tolerance) {
                this.bitmap.data[idx + 3] = 0; 
            }
        });
        
        await image.write('public/images/footer_transparent_real.png');
        console.log("Success");
    } catch (e) {
        console.error(e);
    }
}

removeBackground();
