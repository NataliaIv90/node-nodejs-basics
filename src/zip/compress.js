import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';

const compress = async () => {
    const readStream = createReadStream('files/fileToCompress.txt', { encoding: 'utf8' });

    const writeStream = createWriteStream('files/archive.gz');

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
