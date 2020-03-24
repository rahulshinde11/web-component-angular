const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
    const files = [
        './dist/custom-test/runtime-es5.js',
        './dist/custom-test/polyfills-es5.js',
        './dist/custom-test/main-es5.js'
      ];

      await fs.ensureDir('output');
      await concat(files, 'output/contact-form.js');
}
concatenate();
