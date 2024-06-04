let animation = ["|","/","-","\\","|","/","-","\\",];
let timer = 100;
animation.forEach(character => {
  setTimeout(() => {
    process.stdout.write(`\r${character}`);
  }, timer);
  timer += 200;
});
setTimeout(() => console.log(),timer);