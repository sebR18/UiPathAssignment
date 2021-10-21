# UiPathAssignment
This is a simple one page website to collect a user email and invoke a UiPath automation. This automation will scrape Seahawks schedule from the Seahawks website, download it into a .CSV file and will send it to the user email provided. The email will come from my personal email account '12sebastian@gmail.com'.

The main file is 'index.html' and it uses UiPath JS SDK and 'utils.js' to activate the automation by name ("Generate.Seahawks.Schedule").

The UiPath automation project is in a separate file called "GenerateSeahawksScheduleTemplate.zip".

This is a small experimental assignment, there is no unit test coverage for the JS part of the project. This can be added later if requested.
