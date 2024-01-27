const parseArgs = () => {
    const args = [...process.argv.slice(2)];
    const entries = [];

    for (let i = 0; i < args.length; i += 2) {
        entries.push(args.slice(i, i + 2));
    }

    const parsedArgs = entries.map(([key, value]) => `${key.replace('--', '')} is ${value}`);
    console.log(parsedArgs.join(', ' ))
};

parseArgs();