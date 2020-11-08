ToDo:

Home/List Page
    [] GET all movies in database with router route 
        [] Saga to SET 
    [] Button to route to "Details" page and 
    [] Specify movie to GET Info for 

Details Page
    [] GET Info for movie clicked
    [] Button to route to List/Home page
    // build Details reducer for single movie + Details SAGA for GET request + Display on Details Page

Add Movie Page
    [] an input field (for the movie title)
    [] an input field (for the movie poster image URL))
    [] a textarea (for the movie description)
    [] a dropdown (for the genres)


### Home / List Page
This should display all of the movies in the movie database. When a movie poster is clicked, a user should be brought to the `/details` view.
### Details Page
This should show all details **including genres**, for the selected movie.
 > Hint : You can make a GET request for a specific movie.
The details page should have the button:
- `Back to List` button, which should bring the user to the Home Page
> Base functionality does not require the movie details to load correctly after refresh of the browser.
### Add Movie Page
This should show:
- an input field (for the movie title)
- an input field (for the movie poster image URL))
- a textarea (for the movie description)
- a dropdown (for the genres)
The Add Movie page should have the buttons:
- `Cancel` button, which should bring the user to the Home/List Page
- `Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)
> Hint: Look at the /api/movie POST route -- it's been made already
> Hint: You'll want to use the genres that are in the db for your dropdown
> Base functionality does not require being able to select more than one genre for a new movie

### General Tasks

As one of your last projects, it's possible you will be sharing this with employers, so be sure to follow best practices and make it look good!

- [ ] Invest some time in styling it up!
    - [ ] Research cards for your movie posters on the list page
    - [ ] Research grids for your movie posters on the Movie List page
- [ ] Commit your code frequently! You should have at 15+ commits on a project of this size. Use branches to help break down your features.
- [ ] Comment your code.
- [ ] Update this README to include a description of the project in your own words.
