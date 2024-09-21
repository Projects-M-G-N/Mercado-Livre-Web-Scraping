const { default: puppeteer } = require("puppeteer");

const url = "https://lista.mercadolivre.com.br/computador#D[A:computador]";

const main = async () => {
    const navegador = await puppeteer.launch();
    const pagina = await navegador.newPage();
    await pagina.goto(url);
    await page.screenshot({path: 'captura.png'});
    await navegador.close();
}

main();