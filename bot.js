const { Telegraf, Markup } = require('telegraf');

// 1. Pega aquí el token que te dio @BotFather
const bot = new Telegraf('9260092701:AAFCK5LsySkBIDW8ix1SyPS3Dl-JIoQxWOs');

bot.start(async (ctx) => {
    const userName = ctx.from.first_name || 'Amigo';
    
    // 2. La imagen de la portada de tu lead magnet
    const urlImagen = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe';
    
    // 3. El texto descriptivo (puedes usar etiquetas HTML básicas)
    const texto = 
        '<b>Primera Ganancia Online: Guía para Empezar y Crear Ingresos por Internet</b>\n\n' +
        'Ideal para principiantes que quieren ganar dinero online. ' +
        'Obtén resultados claros con una guía práctica paso a paso.\n\n' +
        '<b>Gratis</b>';
    
    // 4. Los botones interactivos apilados verticalmente
    const keyboard = Markup.inlineKeyboard([
        [Markup.button.url('Obtener gratis', 'https://tuweb.com/tu-recurso.pdf')],
        [Markup.button.url('Ver en el sitio web', 'https://tuweb.com')],
        [Markup.button.callback('Volver', 'volver_menu')]
    ]);

    // 5. Envía la foto junto con el texto y los botones
    await ctx.replyWithPhoto(urlImagen, {
        caption: texto,
        parse_mode: 'HTML',
        ...keyboard
    });
});

// Inicia el bot
bot.launch();
console.log('¡Bot de Node.js iniciado correctamente!');

// Habilitar cierre seguro
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));