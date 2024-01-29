import { createWriteStream } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/streams/files/fileToWrite.txt');

const write = async () => {
    const fileStream = createWriteStream(filePath);
    process.stdin.on('data', (chunk) => {
        fileStream.write(chunk);
        process.exit();
    });
};

await write();