import { unlink, readFile } from 'node:fs';
import { resolve } from 'path';

const filePath = resolve('src/fs/files/fileToRemove.txt'); 

const remove = async () => {
    readFile(filePath, (err) => {
        if (err) throw new Error('FS operation failed');

        unlink(filePath, (err) => {
            if (err) throw err;
            console.log('File was deleted');
        });
    })
};

await remove();