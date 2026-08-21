# CLAUDE.md

Astro site for inosaint.github.io. Content lives in `src/content/{work,writing}/<slug>/index.md`
with images colocated in the same folder.

## Image handling

**Convention: all content images are `.webp`, max 2000px wide.** Astro re-optimizes at build
time, but source images still live in git — so compress before committing, not after.

When adding images to a content folder (or when asked to "compress images"):

```sh
cd src/content/writing/<slug>   # or work/<slug>
for f in *.png *.jpeg *.jpg; do
  [ -e "$f" ] || continue
  magick "$f" -resize '2000x>' -strip -quality 82 -define webp:method=6 "${f%.*}.webp"
done
```

Then update references in `index.md` and delete the originals:

```sh
# body images: ![](./name.png)  →  ![](./name.webp)
sed -i '' -E 's/\.(png|jpeg|jpg)\)/.webp)/g' index.md
# frontmatter cover: image: ./name.png  →  image: ./name.webp
sed -i '' -E 's|^(image: \./[a-z0-9._-]+)\.(png|jpeg|jpg)$|\1.webp|' index.md
rm -f *.png *.jpeg *.jpg
```

Gotchas:
- The frontmatter `image:` line has no closing `)` or quote, so a paren-anchored sed misses it.
  Always handle both patterns, then `grep -nE '\.(png|jpe?g)' index.md` to confirm none are left.
- Back originals up outside the repo before `rm` — untracked files aren't recoverable from git.
- zsh errors on non-matching globs; `setopt null_glob` or guard with `[ -e "$f" ]`.
- Verify with `npm run build` — a broken image path is a build error, not a silent 404.

Typical savings on screenshots/AI renders: 90-95% (e.g. 40MB → 2.3MB across two folders).

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build; also the check that image paths resolve
