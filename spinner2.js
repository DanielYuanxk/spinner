const spinner = () => {
  let timer = 100;

  const spinnerr = "|/-\\|";

  for (const x of spinnerr) {
    setTimeout(() => {
      process.stdout.write(`\r${x}  `);
    }, timer);
    if (x === "|" && timer > 200) {
      setTimeout(() => {
        process.stdout.write(`\r${x}  \n`);
      }, timer);
    }
    timer += 200;
  }
};

spinner();
