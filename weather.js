#!/usr/bin/env node
import { getAtgs } from './healpers/args.js';
import {getWeather} from './services/api.service.js';
import { currentWeather, printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue, TOKEN } from './services/storage.service.js';

const saveValue = async (token) => {
    if (!token.length) {
        printError("Нет токена")
    }
    try {
        await saveKeyValue(TOKEN.token, token);
        printSuccess("Токен сохранен")
    } catch(err) {
        printError(err)
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError("Не передан город")
    }
    try {
        await saveKeyValue(TOKEN.city, city);
        printSuccess("Город сохранен")
    } catch(err) {
        printError(err)
    }
}

const getForcast = async(city) => {
    try {
        const weather = await getWeather(city);
        return currentWeather(weather)
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('Город указан неверно')
        }
         else if (e?.response?.status == 401) {
            printError('Неверно указан токен')
        }else {
            printError(e.message)
        }
    }
}


const initCLI = () => {
    const args = getAtgs(process.argv);
    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        saveCity(args.s)
    }

    if (args.t) {
        return saveValue(args.t)
    }
        return getForcast("Moscow")
}
initCLI();