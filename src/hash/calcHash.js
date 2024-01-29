import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const filePath = 'files/fileToCalculateHashFor.txt';

    const readStream = createReadStream(filePath);     // Create a readable stream from the file

    const hash = createHash('sha256');     // Create a hash object with the SHA256 algorithm

    readStream.pipe(hash);    // Pipe the file stream through the hash object

    await new Promise((resolve) => {
        hash.once('finish', resolve);
    });     // Wait for the 'finish' event to ensure the hash calculation is complete

    const hexHash = hash.digest('hex');     // Get the calculated hash in hexadecimal format

    console.log(`SHA256 hash for ${filePath}: ${hexHash}`);     // Log the hash to the console

};

await calculateHash();
