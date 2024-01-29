import { spawn } from'child_process';
import { resolve } from 'path';

const filePath = resolve('src/cp/files/script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [filePath, ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout)
};

spawnChildProcess( ['someArgument1', 'someArgument2'] );
