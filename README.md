# Felicidades — Christmas video page

This is a minimal static webpage that shows the video `Felicidades.mp4` full-screen with a falling snow overlay.

Setup
- Copy the video into this folder as `Felicidades.mp4`.
- You can run the helper script to copy it from the original path (adjust if needed):

```bash
chmod +x setup_copy_video.sh
./setup_copy_video.sh
```

Preview locally

Start a simple static server and open http://localhost:8000

```bash
python3 -m http.server 8000
```

Notes
- The page autoplays muted to allow playback in browsers. Click the video to toggle audio (unmute).
- The snow is drawn on a transparent canvas layered above the video.

Deploy
- This is a static site; you can deploy it to GitHub Pages or any static host. Ensure `Felicidades.mp4` is included in the deployed files.

Git / GitHub

- Initialize a local git repo and commit the site files:

```bash
cd "$(pwd)"
git init
git add .
git commit -m "Initial commit: Christmas video page"
```

- Create a repository on GitHub and push. If you have the GitHub CLI (`gh`) installed you can run:

```bash
gh repo create <OWNER>/<REPO-NAME> --public --source=. --remote=origin --push
```

- If you don't have `gh`, create a repo at https://github.com/new then add the remote and push:

```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

- Note about the video file: `.gitignore` currently excludes `Felicidades.mp4` to keep the repo small. To include the video in your repo anyway, remove that line from `.gitignore` or force-add it:

```bash
git add -f Felicidades.mp4
git commit -m "Add video"
git push
```

