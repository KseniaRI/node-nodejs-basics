import { Worker } from 'worker_threads';
import { resolve } from 'path';
import { cpus } from 'os';

const filePath = resolve('src/wt/worker.js');

const performCalculations = async () => {
    const numCores = cpus().length;
    const allWorkerPromises = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(filePath, {
            workerData: 10 + i
        });

        const workerPromise = new Promise((resolve) => {
            worker.on('message', msg => resolve({ status: 'resolved', data: msg }));
            worker.on('error', err => resolve({ status: 'error', data: null }));
        })
        allWorkerPromises.push(workerPromise);   
    }
    const results = await Promise.all(allWorkerPromises);
    console.log(results);
};

await performCalculations();