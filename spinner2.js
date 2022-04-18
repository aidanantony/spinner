let time = 100;
let spin = ['|','/', '-', '\\', '|', '/', '-', '\\'];
for (let line of spin) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(`\r${line}    `);
  }, time);
}

