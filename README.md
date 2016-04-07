# ZoosnapZ – Snapshots of the National Zoo in Washington, DC

## Overview and Purpose of the Application

[**ZoosnapZ**](http://zoosnapz.herokuapp.com/) is a web application application comprised of an API developed in Ruby on Rails that is connected to a front end built with AngularJS. The [Smithsonian National Zoological Park] (https://nationalzoo.si.edu/) in Washington, DC (commonly known as the National Zoo) hosts a large quantity of information about the 1,800 different species that reside there.

ZoosnapZ was designed to provide a mobile-friendly and user-friendly experience of the data about the various animals at the Zoo. When one visits the Zoo in person, it is challenging to locate informational placards when surrounded by huge crowds of tourists and locals. Unfortunately, the Zoo's website isn't much help either: we found the user experience on the existing site to be somewhat cumbersome, with useful content buried in the third or fourth level of the information architecture (IA) and divided among multiple pages (e.g., reptile fact sheets were separate from the "about" pages for the Zoo's various reptiles). There is a mobile app (iOS and Android) available for $2.00; however, even this small cost may constitute a barrier to entry for many users.

We wanted to make an app that would bring the focus back to the animals in the various exhibits, without including ancillary information and promotional materials about Zoo events. We envisioned a single landing page with some basic information about the zoo as well as some social content in the form of Instagram posts sorted by geographic location (i.e., at the National Zoo), tag (e.g., #smithsonianzoo or #nationalzoo), or official user account.

The homepage of the app does, in fact, display some information about the National Zoo (hours of operation, location, etc.), and it also includes a navigation bar with links to pages displaying an index of mammals or reptiles. The most prominent feature of the homepage is the Instagram widget, which we initially planned to include via an integration with Instagram's API. In order to facilitate the integration, we acquired a client ID and API access token from Instagram, which required registration on Instagram's developer website.

We successfully implemented the Figaro Gem in Rails to protect our access token from exposure on GitHub, and we began the process of testing the API endpoints that would be utilized by our application. It was at this point that we realized that a policy change at Instagram in 2015 would require us to demonstrate our fully functional application to Instagram in order to receive full access to public data via their API. Given the tight time frame for this project, we elected to utilize a widget called Lightwidget instead of the Instagram API: this allowed us to include posts on our homepage without difficulty.

The mammal and reptile sections of the app are structured similarly, in that they show lists of animals by photo along with a simple search bar to filter results by animal name. The detail pages for each animal include a large amount of content in categories (reproduction, status, diet, etc.), each of which can be expanded by clicking on the associated `+` symbol.

Next time you visit the zoo, check out [**ZoosnapZ**](http://zoosnapz.herokuapp.com/) on your smartphone or tablet to learn more about the Zoo and its animals, and to explore the latest photo and video content!

## Technologies Used

This web application was built using using the following technologies:

- AngularJS (version 1.5.3), HTMl, and CSS on the front end
  - Angular UI Router and ngResource included as dependencies
- Bootstrap (version 3.3.6) as well as custom stylesheets
- [Lightwidget] (https://lightwidget.com/) for Instagram integration
- Ruby on Rails (version 4.2.6) on the back end
  - RESTful API, renders data as JSON
- PostgreSQL database
- Hosted on Heroku

## Installation instructions

*For Users*

Visit the application at [http://zoosnapz.herokuapp.com](http://zoosnapz.herokuapp.com]) and navigate through the app to learn more about your favorite animals.

*For Developers*

Be sure that you install the latest versions of Ruby and Rails, and then run `$ bundle install` from the command line to install all dependencies listed in the `Gemfile`. You will also need to use PostgreSQL as your database; therefore, please make certain that the tell-tale "blue elephant" is running when you open the app. Please note that the Lightwidget Instagram widget will not work with `https`; you must use `http` instead.

## Unsolved Problems

* Due to issues with Instagram's API policies, a third-party service was used to embed a widget that allows Instagram images to populate on our zoo show page. As it stands now, the widget can only display images from a single Instagram account, namely `@smithsonianzoo`.
* In an attempt to keep our code as DRY as possible, we started to create a custom directive for our animal index views, but ran into issues because the link that directs a user to each animal's respective show page is different.

* Converting the modal from Vanilla JS to AngularJS was difficult.

## Future Plans

* Should policies with Instagram's API change, this app will pull images from Instagram's API to populate view pages with images marked with relevant hashtags and geo-locations.
* Add more data from other zoos and animals (i.e., birds, amphibians, fish, and invertebrates).
