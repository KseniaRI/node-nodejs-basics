import { resolve } from 'path';
import { rename as renameFs, readFile } from 'fs';

const wrongFilePath = resolve('src/fs/files/wrongFilename.txt');
const properFilePath = resolve('src/fs/files/properFilename.md');

const rename = async () => {
    readFile(wrongFilePath, (err) => {
        if (err) throw new Error('FS operation failed');

        readFile(properFilePath, (err) => {
            if (!err) throw new Error('FS operation failed');
        })

        renameFs(wrongFilePath, properFilePath, (err) => {
            if (err) throw err;
            console.log('Rename complete!');
        });
    })
};

await rename();