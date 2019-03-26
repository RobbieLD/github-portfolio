# GiHhub Portfolio

## Description
Github Portfolio is a simple web project to help showcase you're projects and skills on GitHub and provide an online Resume of sorts to show off. The iead is that you'll fork this repo to your own GitHub account and modify it to present your own customized show case. Detailed instructions on that are as follows. 

## Set up
1. Fork this repository
2. Clone the code to your local machine
3. Install all the npm packages with `npm install`
4. Create the `src/assets/config.json` based on the `config.json.sample` file. Details on how to set it up are in the config section below.
5. Run up the deverlopment server to test your changes by running `npm run serve`
6. Once you're happy with the look of your profile create a distribution using the command `npm build`
7. All the files you need are in the `dist` directory. Simply deploy them with [GitHub Pages](https://pages.github.com/).
8. Optional: Buy a domain (such as a [.dev](https://domains.google/tld/dev/) one) and point it at your new profile site.

## Config File
The config file defines what data will be pulled from the GitHub account and how it will be displayed in the profile. Below are descriptions of each of the sections of the config file.

### githubUser
This is your GitHub username and defines the user for which the portfolio will display information. 

### profile
The section displayed how the profile is displayed.

#### class
This determines which css class is used to style the profile section. All the colour css classes come from [bulma.io hero](https://bulma.io/documentation/layout/hero/) element.

#### showLocation
This is a boolean which determins if you're GitHub location is displayed on the user profile section at the start of the portfolio

#### interestTypes
This defines the legend to be used for the little tag colors displayed on the profile section. Each of these is a named object which has a title and colour class. The name of the object is used as the key when you're setting up the interests tags later on. 

The title is simply the title of the tag and the colorClass is the bulma css. It's the same classes as mentioned in the profile class section. The possible values are:
- is-primary
- is-info
- is-warning
- is-danger
- is-success
- is-light
- is-dark

#### interests
TODO

### social
This is an array of objects which create the menu items in the right of the nav bar. These objects configure which social media and other sites you'd like as icon links in the nav bar on the right. Each objects in the social array consists of the follwing two properties.

#### url
The url the link points to.

#### service
This is the name of the site. The supported sites so far are as follows.  
- twitter 
- bitbucket
- stack-overflow
- npm

### sections

### externalRepositories
A string array of repositories outside the account specified by `githubUser` in the form `{username}/{repositoryName}`.
The name of the repository can then be used in the `sections` to have the repository displayed - username is not required in the sections.


## Themes
To pick a theme for your site, have a look at [Bulmaswatch](https://jenil.github.io/bulmaswatch/) and pick a theme. Change the name of the default them in the `src/assets/app.scss` import line to be the name of your chosen theme. For example if you're wanting to use the 'minty' theme make the theme import line read as follows: `@import '~bulmaswatch/minty/bulmaswatch.scss';`

You can also add in overrides to the colours in the `app.scss` file to make the theme truely yours. The avaliable colours and fonts which can be overriden as listed [here](https://github.com/jenil/bulmaswatch/blob/gh-pages/darkly/_variables.scss)

## Advanced
TODO: customising menus etc. 