import * as fs from 'fs';

const watch = (filepath, timer, cb) => {

};

const write = (filepath, content, cb) => {
  fs.writeFile(filepath, content, (err, data) => {
    if (err) throw err;
    cb(null, data);
  });
};

const id = watch(filepath, 500, (err) => {
  console.log('Wow!');
});

setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700);
setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд
