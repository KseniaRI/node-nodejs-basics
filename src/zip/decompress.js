import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { resolve } from 'path';

const zipPath = resolve('src/zip/files/archive.gz');
const filePath = resolve('src/zip/files/fileToCompress.txt');

const decompress = async () => {
    const gunzip = createGunzip();
    const source = createReadStream(zipPath);
    const destination = createWriteStream(filePath);

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        } else {
          console.log('File was decompressed');
        }
    });
};

await decompress();