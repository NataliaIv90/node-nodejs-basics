import { writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const create = async () => {
    try {
        if (existsSync("files/fresh.txt")) {
            throw new Error('FS operation failed: File already exists');
        }
        const content = 'I am fresh and young';
        await writeFile('files/fresh.txt', content);
    } catch (err) {
        console.log(err);
    }
};

await create();

/*implement function that creates new file fresh.txt with content 'I am fresh and young' inside of the files folder
(if file already exists Error with message FS operation failed must be thrown)
*/
