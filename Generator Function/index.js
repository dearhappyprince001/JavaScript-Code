function* generate() {
  yield "Hello";
  yield "World";
  return "Done";
}

const generator = generate();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
