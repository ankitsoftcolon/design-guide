"""Create a developer source snapshot from an explicit set of project files."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parent.parent
files = []
for directory in ("src", ".storybook", "scripts"):
    files.extend(path for path in (root / directory).rglob("*") if path.is_file())
for name in ("package.json", "package-lock.json", "tsconfig.json", "tsconfig.app.json", "tsconfig.node.json", "vite.config.ts", "components.json", ".oxlintrc.json", ".gitignore", "README.md", "docs/developer-handoff.md", "public/favicon.svg", "public/icons.svg"):
    path = root / name
    if path.is_file():
        files.append(path)
output = root / "public/bluebox-developer-handoff.zip"
with ZipFile(output, "w", ZIP_DEFLATED) as archive:
    for path in sorted(files):
        archive.write(path, Path("bluebox-design-system") / path.relative_to(root))
with ZipFile(output) as archive:
    assert archive.testzip() is None
print(f"Packaged {len(files)} project files: {output.name}")
