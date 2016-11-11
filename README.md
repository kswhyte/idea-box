# IdeaBox

Every developer has more ideas than time. As David Allen likes to say “the human brain is for creating ideas, not remembering them.” In this project, we’ll be building a simple application for recording and archiving our ideas (good and bad alike).

Throughout the project, one of my focuses was on providing a fluid and responsive client-side interface. To this end, I relied on JavaScript and jQuery to implement snappy filtering in the browser, and localStorage to persist all of the wonderful ideas between sessions.

###Architecture

For this project, I was increasingly thinking about the “server” and “client” as separate entities. I was using:

JavaScript (with jQuery) to manage client-side interactions.
JSON and localStorage to persist data between sessions.
My entire application consists of one HTML page or template.

Data Model

- An Idea has an id, title, a body, and a quality.
- The id is a unique identifier.
- title and body are free-form strings.
- quality is based on one of the following: “genius”, “plausible”, and “swill.”
- By default, the idea’s “quality” is the lowest setting (i.e. “swill”).

You can start saving your brilliant ideas and saving them in this [ideaBox](https://kswhyte.github.io/idea-box/) today!
