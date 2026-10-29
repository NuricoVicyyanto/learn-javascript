function greet(name) {
  const trimmed = name.trim();
  return `Hello, ${trimmed}!`;
}

const name = process.argv[2] ?? "JavaScript";
console.log(greet(name));
