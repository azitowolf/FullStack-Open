0.1
  read basics of HTML ✅

0.2
  read basics of CSS ✅

0.3
  read HTML Forms ✅

0.4

title Example App Form Post Classic

Browser->Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
Server-> Browser: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
Browser->Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
Server-->Browser: HTML-code
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Server-->Browser: main.css
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
Server-->Browser: main.js

note over Browser:
browser starts executing js-code
that requests JSON data from server 
end note

Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
Server-->Browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

0.5

title Example App SPA Page Load

Browser -> Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
Server-->Browser: HTML-code
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
Server-->Browser: main.css
Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
Server-->Browser: spa.js

note over Browser:
browser starts executing js-code
that requests JSON data from server 
end note

Browser->Server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
Server-->Browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

0.6

title Example App Form Post SPA

Browser->Server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
note over Browser
Payload Content like
{
content: "testing this ish "
date: "2020-04-16T23:04:32.816Z"
}
end note
Server-> Browser: HTTP Response
note over Server
Response JSON like
{
"message":"note created"
}

Note: on response received, 
JS triggers re-render of the page UI
end note
