import { writeFile } from 'node:fs/promises';

const create = async () => {
    try {
        const content = 'I am fresh and young';
        await writeFile('files/fresh.txt', content);
    } catch (err) {
        console.log(err);
    }
};

await create();

/*
create.js - 
implement function that creates new file fresh.txt with content 
'I am fresh and young' inside of the files folder
(if file already exists Error with message FS operation failed must be thrown)
*/
