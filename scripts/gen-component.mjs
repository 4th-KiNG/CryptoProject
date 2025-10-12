import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function pascalCase(name) {
  // Оставим, если уже PascalCase; иначе приведем "nav-menu" -> "NavMenu"
  return name
    .replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeIfAbsent(file, content) {
  if (fs.existsSync(file)) return; // не перезаписываем
  fs.writeFileSync(file, content, "utf8");
}

async function main() {
  // Аргументы: name, dir (необяз.)
  const [, , rawName, rawDir] = process.argv;
  if (!rawName) {
    console.error(
      "Usage: node scripts/gen-component.mjs <ComponentName> [dir]"
    );
    process.exit(1);
  }

  const Name = pascalCase(rawName);
  const baseDir = rawDir || "src/components";
  const targetDir = path.resolve(process.cwd(), baseDir, Name);

  ensureDir(targetDir);

  const tsxPath = path.join(targetDir, `${Name}.tsx`);
  const scssPath = path.join(targetDir, `${Name}.module.scss`);
  const indexPath = path.join(targetDir, `index.ts`);

  // Содержимое файлов — строго как ты просил
  const tsxContent = `import styles from "./${Name}.module.scss";

const ${Name} = () => {
  return <></>;
};

export default ${Name};
`;

  const scssContent = ``; // можно оставить пустым

  const indexContent = `export { default as ${Name} } from "./${Name}";
`;

  writeIfAbsent(scssPath, scssContent);
  writeIfAbsent(tsxPath, tsxContent);
  writeIfAbsent(indexPath, indexContent);

  console.log(
    `✅ Created ${Name} in ${path.relative(process.cwd(), targetDir)}`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
