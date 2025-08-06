const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'StoneXHeartSMP.aternos.me',
  port: 54266,
  username: 'BotMinecraft123', //  version: '1.21.4'
});

bot.on('spawn', () => {
  console.log('✅ Bot conectat cu succes!');
});

bot.on('error', (err) => {
  console.log('❌ Eroare:', err);
});

bot.on('end', () => {
  console.log('🔁 Bot deconectat. Reconectare...');
  setTimeout(() => {
    require('child_process').fork(__filename);
  }, 5000);
});
