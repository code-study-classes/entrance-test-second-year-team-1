import { Command } from 'commander';
const program = new Command();

import sethotels from './function/addhotels.js';
import gethotels from './function/book-display.js'; // потом

program
  .name('somile')
  .description('просматривать отели')
  .version('0.1.0');

program.command('hotel-display')
  .description('отображает список отелей')
  .action(() => {
    console.log(gethotels()); 
  });

  program.command('hotel-add')
  .description('добавить отель')
  .argument('<name>', 'добавить новый отель')
  .option('-r, --region <region>', 'добавить регион отеля')
  .action((name, options) => { 
    console.log(sethotels(name,options.region));
  });

  program.command('hotel-delite')
  .description('удалить отель')
  .argument('<name>', 'удалить новый отель')
  .action((hotel) => {
    console.log(sethotels(hotel));
  });

program.parse();