import { existsSync, readFileSync } from 'node:fs';

const read = async () => {
    const fileToRead = './files/fileToRead.txt';

    try {
        if (!existsSync(fileToRead)) {
            throw new Error('FS operation failed');
        }

        const data = readFileSync(fileToRead, 'utf8');
        console.log(data);

    } catch (err) {
        console.log(err.message);
    }
};

await read();

/**
 * read.js - implement function that prints content of the fileToRead.txt into console 
 * (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
 */