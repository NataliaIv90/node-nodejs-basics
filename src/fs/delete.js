import { rm, existsSync } from 'node:fs';

const remove = async () => {
    const fileToRemove = './files/fileToRemove.txt';

    try {
        if (!existsSync(fileToRemove)) {
            throw new Error('FS operation failed');
        }
        rm(fileToRemove, { recursive: true }, (err) => {
            if (err) {
                throw new Error('Oops, something went wrong');
            }
        })
    } catch (err) {
        console.log(err.message);
    }
};

await remove();

/**
 * delete.js - implement function that deletes file fileToRemove.txt 
 * (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
 */