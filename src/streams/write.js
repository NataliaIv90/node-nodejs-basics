import { createWriteStream } from 'node:fs';

const write = async () => {
    const writeStream = createWriteStream('files/fileToWrite.txt', { encoding: 'utf8' });

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });
};

await write();
