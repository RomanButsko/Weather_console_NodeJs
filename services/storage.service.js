import {homedir} from 'os';
import {join} from 'path';
import {promises} from 'fs';

const filePath = join(homedir(), 'weather-data.json');

export const TOKEN = {
    token: 'TOKEN',
    city: 'city'
}

export const saveKeyValue = async (key, value) => {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file)
    }
    data[key] = value;

    await promises.writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file)
        return data[key];
    }  
    return undefined
}

const isExist = async(filepath) => {
    try {
        await promises.stat(filepath);
        return true;
    } catch (e) {
        return false;
    }
}
