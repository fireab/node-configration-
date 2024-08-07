import config from 'config';
import dotenv from 'dotenv';

function setupConfig() {
    const env = process.env.NODE_ENV || 'development';
    dotenv.config({ path: `.env.${env}` });

    // Override config values with environment variables
    config.util.extendDeep(config, {
        "secret": {
            KEY: process.env.KEY
        }
    });
    console.log(`Running in ${env} mode`);
}

export default setupConfig;