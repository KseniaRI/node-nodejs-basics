import { mkdir, access, readdir, readFile, writeFile } from 'fs';
import { resolve } from 'path';

const destPath = resolve('src/fs/files_copy');
const srcPath = resolve('src/fs/files');

const copy = async () => {
    access(destPath, (err) => {
        if (!err) throw new Error("FS operation failed");
        
        mkdir(destPath, (err) => {
            if (err) throw err;
        }); 
        readdir(srcPath, (err, files) => {
            if (err) throw new Error("FS operation failed");;

            files.map(file => {
                readFile(`${srcPath}/${file}`, (err, data) => {
                    if (err) throw err;
                     
                    writeFile(`${destPath}/${file}`, data, (err) => {
                        if (err) throw err;
                    }); 
                }); 
            })
        })
    })
};

await copy();
