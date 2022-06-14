import hexToHSL from '@/helpers/color/hexToHSL';
import data from './data/images.json';

// @ts-ignore
const ColorScheme = require('color-scheme');
const scheme = new ColorScheme();

class ImgService {
    randImg: any;
    imageColor: string;
    imageHue: number | undefined;
    colorsArray: [];

    _setValues(rand: number) {
        this.randImg = data[Math.floor(rand * data.length)];
        this.imageColor = this.randImg.color;
        this.imageHue = hexToHSL(this.imageColor);

        scheme.from_hue(this.imageHue).scheme('mono').variation('light');

        this.colorsArray = scheme.colors();
    }

    _getValues() {
        return {
            img: this.randImg,
            clr: this.imageColor,
            clrArr: this.colorsArray,
        };
    }
}

export default ImgService;
