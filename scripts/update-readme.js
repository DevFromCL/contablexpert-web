// scripts/update-readme.js
const fs = require("fs");
const path = require("path");

// Construir tabla simple solo con nombre y versión
function buildDepsTable(sectionTitle, deps) {
  const header = "| Paquete | Versión |\n| ------- | ------- |";
  const rows = Object.keys(deps).map((name) => `| \`${name}\` | ${deps[name]} |`);
  return `## ${sectionTitle}\n\n${header}\n${rows.join("\n")}\n\n`;
}

// === Main ===
function updateReadme() {
  const readmePath = path.join(process.cwd(), "README.md");
  const pkgPath = path.join(process.cwd(), "package.json");

  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  let readme = fs.readFileSync(readmePath, "utf-8");

  // Construir tablas de dependencias
  const mainDeps = buildDepsTable("🛠️ Dependencias principales", pkg.dependencies || {});
  const devDeps = buildDepsTable("⚙️ Dependencias de desarrollo", pkg.devDependencies || {});

  // Reemplazar o agregar las secciones completas
  readme = readme.replace(/## 🛠️ Dependencias principales[\s\S]*?## ⚙️ Dependencias de desarrollo/, mainDeps + devDeps);
  readme = readme.replace(/## ⚙️ Dependencias de desarrollo[\s\S]*/, devDeps);

  fs.writeFileSync(readmePath, readme);
  console.log("✅ README.md actualizado");
}

updateReadme();
