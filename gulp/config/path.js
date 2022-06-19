//Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        images: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        images: `${srcFolder}/img/**/*.+(png|jpg|gif|ico|svg|webp)`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,//html
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.+(png|jpg|gif|ico|svg|webp)`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,//html
        files: `${srcFolder}/svgicons/*.svg`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test`
} 