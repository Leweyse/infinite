class ContrastRatio {
    ratio: number = NaN;

    constructor(hex1: string, hex2: string) {
        this._contrast(hex1, hex2);
    }

    _contrast(hex1: string, hex2: string) {
        let rgb1 = this._helperHexToRgb(hex1);
        let rgb2 = this._helperHexToRgb(hex2);

        let lum1 = this._helperLuminance(rgb1[0], rgb1[1], rgb1[2]) + 0.05;
        let lum2 = this._helperLuminance(rgb2[0], rgb2[1], rgb2[2]) + 0.05;

        let brightest = Math.max(lum1, lum2);
        let darkest = Math.min(lum1, lum2);

        let result = brightest / darkest;

        if (result < 1) result = 1 / result;

        this.ratio = result;
    }

    _helperHexToRgb(hex: string) {
        let hexArray = hex.split('');
        hexArray.shift();

        let hexValue = hexArray.join('');

        let bigint = parseInt(hexValue, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;

        return [r, g, b];
    }

    _helperLuminance(r: number, g: number, b: number) {
        let a = [r, g, b].map((v) => {
            v /= 255;
            return v <= 0.03928
                ? v / 12.92
                : Math.pow((v + 0.055) / 1.055, 2.4);
        });

        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }
}

export default ContrastRatio;
