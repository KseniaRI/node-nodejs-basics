import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { resolve } from 'path';

const filePath = resolve('src/zip/files/fileToCompress.txt');
const zipPath = resolve('src/zip/files/archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(zipPath);

    pipeline(source, gzip, destination, (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
        }
        console.log('File was compressed');
    });
};

await compress();