import replace from "gulp-replace";//Поиск и замена
import plumber from "gulp-plumber";//Обработка ошибок
import notify from "gulp-notify";// Сообщения (подсказки)
import browsersync from "browser-sync";// Локальный сервер
import newer from 'gulp-newer'; //check обновления 
import ifPlugin from 'gulp-if';//Условное ветвление

//export object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}