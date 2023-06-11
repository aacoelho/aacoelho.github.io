# aacoelho.github.io

Portfolio.

## Requirements

- nvm
- node
- Ruby manager (rbenv)
- RubyGems
- Jekyll gem
- Bundler gem

## Getting started

### Useful Resources

- [Jekyll](https://jekyllrb.com/docs/)
- [Ruby/Gems](https://stackoverflow.com/questions/51126403/you-dont-have-write-permissions-for-the-library-ruby-gems-2-3-0-directory-ma)
- [The Definitive Guide To Installing Ruby Gems on a Mac](https://www.moncefbelyamani.com/the-definitive-guide-to-installing-ruby-gems-on-a-mac/)
- [How to fix "command not found" after installing gems](https://www.moncefbelyamani.com/troubleshooting-command-not-found-in-the-terminal/)
- [Script to set up macOS for Ruby development](https://www.moncefbelyamani.com/ruby-script/)
- [Laptop](https://github.com/monfresh/laptop)
- [Ruby manager: rbenv](https://github.com/rbenv/rbenv)
- [Install nvm](https://tecadmin.net/install-nvm-macos-with-homebrew/)

### Setup

If ruby manager and gems not installed:

- Setup ruby manager:
  - `brew install rbenv` - install ruby manager
  - `rbenv init` - follow printed instructions
  - Install latest stable version
    - At the moment it's working with 3.2.0
- Setup ruby and gems on project:
  - `rbenv local VERSION_NUMBER` - sets local ruby version on project directory
  - `gem install jekyll bundler` - install the jekyll and bundler gems (use sudo if needed)

After ruby manager and gems installed:

- `bundle install` - install dependencies
- `bundle update` - update dependencies
- `bundle exec jekyll serve` - build the site and make it available on a local server
  - If it doesn't work try to comment jekyll-autoprefixer inside `_config.yml` file

### Launch

- `bundle exec jekyll serve` - run project

### URLs

- Website at [localhost:4000](http://localhost:4000/)

## Deployment

When we push to the master git branch, website is automatically deployed to production.

- `master` - deploy branch

### URLs

- [aacoelho.github.io](aacoelho.github.io)
- [angelacoelho.com](https://angelacoelho.com/)
