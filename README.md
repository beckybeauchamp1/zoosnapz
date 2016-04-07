# ZoosnapZ

## Overview and Purpose of the Application

ZoosnapZ was designed to provide a more mobile-friendly and user-friendly experience of the data about the various animals at the [Smithsonian National Zoological Park] (https://nationalzoo.si.edu/). We found the user experience on the existing National Zoo website to be somewhat cumbersome, with useful content buried on the third or fourth level of the information architecture (IA) and divided among multiple pages (e.g., reptile fact sheets were separate from the "about" pages for the Zoo's various reptiles).

We wanted to make an app that would bring the focus back to the animals in the various exhibits, without including ancillary information and promotional materials about Zoo events. We envisioned a single landing page with some basic information about the zoo as well as some social content in the form of Instagram posts sorted by geographic location (i.e., at the National Zoo), tag (e.g., #smithsonianzoo or #nationalzoo), or official user account.

The homepage of the app does, in fact, display some information about the National Zoo (hours of operation, location, etc.), and it also includes a navigation bar with links to pages displaying an index of mammals or reptiles. The most prominent feature of the homepage is the Instagram widget, which we initially planned to include via an integration with Instagram's API. In order to facilitate the integration, we acquired a client ID and API  

## Technologies Used

This web application was built using using the following technologies:

- AngularJS (version 1.5.3) on the front end
  - Angular UI Router and ngResource included as dependencies
- Bootstrap (version 3.3.6) as well as custom stylesheets
- [Lightwidget] (https://lightwidget.com/) for Instagram integration
- Ruby on Rails (version 4.2.6) on the back end
- PostgreSQL as the database
