# Personal Website

The basis of this website was taken from [mldangelo.com](https://mldangelo.com). Michael D'Angelo has open source his personal website which you can fork from [here](https://github.com/mldangelo/personal-site) - I have started a new repo since I intend to diverge quite a bit from the original.

Thanks [Jose Donato](https://github.com/jose-donato) for helping me with everything I know about web development.


## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Deploying to Github Pages

1. Modify the environmental variables and git remote url in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Modify `homepage` in `package.json` to point to where you plan to host your site. If you do not plan on using a custom domain name, it should look like `https://[your-gh-username].github.io/[repository-name - default:personal-site]/`
3. If you plan on using a custom domain, modify `public/CNAME`. If you don't, delete `public/CNAME`.

Make a commit to `main` and push your changes. That's it.

### Static Export

To statically export the site without deploying to github pages, delete or disable `.github/workflows/github-pages.yml` and run `npm run predeploy`. This generates a static export of the website as `personal-site/build/`. Copy this and self-host or deploy to a CDN.

