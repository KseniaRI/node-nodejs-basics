import { resolve } from 'path';
import { readFile } from 'fs';

const filePath = resolve('src/fs/files/fileToRead.txt');

const read = async () => {
    readFile(filePath, (err, data) => {
        if (err) throw new Error('FS operation failed');
        console.log(data.toString())
    })
};

await read();