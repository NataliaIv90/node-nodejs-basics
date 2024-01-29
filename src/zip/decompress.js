import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';

const decompress = async () => {
    const readStream = createReadStream('files/archive.gz');
    const writeStream = createWriteStream('files/fileToCompress.txt', { encoding: 'utf8' });
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
