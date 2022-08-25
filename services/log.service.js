import chalk from 'chalk';
import dedent from 'dedent-js';

export const printError = (error) => {
    console.log(chalk.bgRed('Error') + error)
}

export const printSuccess = (message) => {
    console.log(chalk.bgGreen('Success') + message)
}

export const printHelp = () => {
    console.log(
        dedent `${chalk.bgGray('Help')} + 
        -s [CITY] для устанвки погоды
        -h для вывода помощи 
        -t [API] для сохранения токена
        `
    )
}

export const currentWeather = (weather) => {
    return (
        console.log(
            dedent`Погода на данный момент:
            ${chalk.italic.bold(`${weather.name}`)} ${chalk.rgb(234, 107, 172).underline(`${weather.weather[0].description}`)}
            ${chalk.rgb(219, 242, 150).underline('Температура')} ${weather.main.temp}
            ${chalk.rgb(182, 246, 232).underline('Ощущается как')} ${weather.main.feels_like}
            `
            )
    )
}