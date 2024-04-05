import { resolve } from 'path';
import { writeFile, readFile } from 'fs';

const content = 'I am fresh and young';
const filePath = resolve('src/fs/files/fresh.txt');

const create = async () => {
    readFile(filePath, (err) => {
        if (!err) throw new Error('FS operation failed');

        writeFile(filePath, content, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    }); 
};

await create();