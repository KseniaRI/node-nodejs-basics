const parseEnv = () => {
    const prefix = 'RSS_';
    const variablesFilteredByPrefix = Object.entries(process.env)
        .filter(([key]) => key.startsWith(prefix));

    const parsedVariables = variablesFilteredByPrefix.map(([key, value]) => `${key}=${value}`);

    console.log(parsedVariables.join('; '));
};

parseEnv();