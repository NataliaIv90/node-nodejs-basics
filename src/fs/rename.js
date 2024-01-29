import fs from 'node:fs';

const rename = async () => {
    const wrongFilename = './files/wrongFilename.txt';
    const properFilename = './files/properFilename.md';

    try {
        if (!fs.existsSync(wrongFilename) || fs.existsSync(properFilename)) {
            throw new Error('FS operation failed');
        }

        fs.rename(wrongFilename, properFilename, (error) => {
            if (error) {
                throw new Error('Oops, something went wrong');
            }
        });
    } catch (err) {
        console.log(err.message);
    }
};

await rename();


/**
 * rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md 
 * (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
 */