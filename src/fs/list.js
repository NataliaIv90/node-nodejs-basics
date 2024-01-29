import { existsSync, readdirSync } from 'node:fs';

const list = async () => {
    const folderName = './files';

    try {
        if (!existsSync(folderName)) {
            throw new Error('FS operation failed');
        }

        let filenames = readdirSync(folderName);
        console.log(filenames);
    } catch (err) {
        console.log(err.message);
    }
};

await list();

/**
 * list.js - implement function that prints all array of filenames from files folder into console 
 * (if files folder doesn't exists Error with message FS operation failed must be thrown)
 */