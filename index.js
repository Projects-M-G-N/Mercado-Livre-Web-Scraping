import puppeteer from 'puppeteer-core';

const url = "https://lista.mercadolivre.com.br/celular#D[A:celular]";

(async () => {
    const navegador = await puppeteer.launch();
    const pagina = await navegador.newPage();

    await pagina.goto(url, {waitUntil: 'networkidle2'});

    await pagina.screenshot({path: './print.png', fullPage: true});

    await navegador.close();
})()
