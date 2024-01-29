import { cp, existsSync, mkdirSync } from 'node:fs'

const copy = async () => {
    const folderName = './files';
    const newFolderName = './files_copy'

    try {
        if (!existsSync(folderName) || existsSync(newFolderName)) {
            throw new Error('FS operation failed');
        }

        mkdirSync('files_copy');
        cp(folderName, newFolderName, { recursive: true }, (err) => {
            if (err) {
                throw new Error('Error occured. Can\'t proceed');
            }
        });
    } catch (err) {
        console.log(err.message);
    }
};

await copy();

/**
 * copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level 
 * (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
 */