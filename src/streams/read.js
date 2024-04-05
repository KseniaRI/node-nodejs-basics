import { createReadStream } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/streams/files/fileToRead.txt');

const read = async () => {
    const input = createReadStream(filePath);
    input.on('readable', () => {
        const data = input.read();
        if (data) {
            process.stdout.write(data);
        }
    });
};

await read();