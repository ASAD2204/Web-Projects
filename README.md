# Web-Projects

This repository is a collection of small front-end projects built by ASAD2204. Each project is stored in its own directory and can be viewed live using GitHub Pages.

Live (GitHub Pages): https://asad2204.github.io/Web-Projects/

How this index works
- I added a simple static portfolio index page (index.html + style.css) at the repository root. It shows all project folders and provides quick links to the live demo (via GitHub Pages) and to each folder in the repository.
- The index page uses a small JavaScript array to list projects. Update the array inside index.html when you add or remove project folders.

How to view a project
- Live demo URL pattern: https://asad2204.github.io/Web-Projects/<folder-name>
  - Note: Folder names that contain spaces or special characters will be URL-encoded automatically by the index page.
- Repository folder URL pattern: https://github.com/ASAD2204/Web-Projects/tree/main/<folder-name>

How to add a new project
1. Create a new folder at the repository root with your project files.
2. Ensure the project has an entrypoint (usually index.html) so GitHub Pages can serve it.
3. Add the folder name to the projects array in the root `index.html` file (or update the list there).
4. Commit and push.

Suggestions / Next improvements
- Automatically generate the project list using the GitHub API instead of maintaining a static array.
- Add thumbnails or short descriptions for each project.
- Make the index page fetch README or metadata files from each project folder to display descriptions automatically.

License
- Feel free to reuse and adapt these projects.
