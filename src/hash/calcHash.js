import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/hash/files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(filePath);

    input.on('readable', () => {
        const data = input.read();
        if (data)
           hash.update(data);
        else {
            console.log(hash.digest('hex'));
        }
    });
};

await calculateHash();