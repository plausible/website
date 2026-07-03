# Contributing

This is a Jekyll site. You can run it either with Docker (recommended — no local Ruby/Node setup) or directly on your machine.

## Development with Docker

Requires Docker with Compose. 

- To start, run `docker compose up` (add `--build` after Gemfile or package.json changes)
- The website will be available at `http://localhost:4000/`
- Edit any file and the website should reload automatically
- Stop: `docker compose down`

## Development without Docker

Ruby and Node are required. `asdf` users can run `asdf install` and be on their way. The site is bundled with `bundler 2.3.x` — ensure you have the correct major version: `bundle --version`.

- Install dependencies: `bundle` and `npm install`.
- Run a development server: `bundle exec jekyll server`.
- The website will be available at `http://127.0.0.1:4000/`