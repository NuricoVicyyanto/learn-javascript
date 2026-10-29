import { labTitle, topics } from "./topics.js";

const name = process.argv[2];

if (!name) {
  console.log(`Lab: ${labTitle}`);
  console.log();
  console.log("Usage: node main.js <exercise>");
  console.log();
  console.log("Exercises:");
  for (const topic of topics) {
    console.log(`  ${topic.name}`);
  }
} else {
  const topic = topics.find((item) => item.name === name);

  if (!topic) {
    console.error(`unknown exercise "${name}"`);
    console.error("Run without arguments to list exercises.");
    process.exitCode = 2;
  } else {
    try {
      await topic.run();
    } catch (error) {
      console.error(`exercise "${name}":`, error.message);
      process.exitCode = 1;
    }
  }
}
