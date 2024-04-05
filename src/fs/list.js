import { readdir } from 'fs';
import { resolve } from 'path';

const filePath = resolve('src/fs/files');

const list = async () => {
    readdir(filePath, (err, files) => {
        if (err) throw new Error("FS operation failed");
        console.log(files)
    })
};

await list();