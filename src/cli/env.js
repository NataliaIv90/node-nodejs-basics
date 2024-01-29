import dotenv from 'dotenv';
dotenv.config();

const parseEnv = () => {
    Object.entries(process.env)
        .map(([key, value]) => console.log(`RSS_${key}=${value}/n`))
};


parseEnv();