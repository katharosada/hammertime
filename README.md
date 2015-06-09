# Heads up User Guide
A live collaborative webapp for classroom participation

<h2>Students:</h2>
<ol>
<li>Point your browser to http://headsup.bitballoon.com/</li>
<li>Type in your name. </li>
<li>Wait for a question to appear on your screen. Your teacher will instruct you. </li>
</ol>
<h2>Teachers:</h2>
<ol>
<li> Point your browser to http://headsup.bitballoon.com/teacher.html. This is your hub of information. From here you can choose what question to ask your entire class, see who has answered, and oversee the class stats for each question.</li>
<li>
To write a new question:
<ol><li>Click "New Question". A light blue box will appear. </li>
<li>
Enter a question and answer into the text boxes. If you wish to ask an open-ended question, leave the answer field blank. </li></ol></li>

	<li>To ask a new question to the class:
	<ol><li>Click the question you would like to ask. </li>
<li>Click the "Open" button. Only one question may be open to the class at a time.</li>
<li>The class can now see and submit answers to the open question! As answers come in, you will be able to see the percentage of students that have answered your question, and the percentage that got the answer correct in the "Question Stats" section.
</li></ol>

<h2>Installation guide:</h2>
<ol><li>Download the files.</li>
<li>Set up a firebase server. 
		<ol><li>Go to https://www.firebase.com/ and sign up for an account. </li>
<li>Make a new app. Make note of the app name used in the URL. You'll need that! </li>
<li> Click "Manage app"</li>
<li> Point your browser to https://[YOUR APP NAME].firebaseio.com/extra</li>
<li> Click on the + next to  "extra". Add a variable underneath called "question_max" with a value of 0.
</li></ol></li>
<li>Including your new server in the app
		<ol><li>Replace "flickering-fire-2155" with [YOUR APP NAME] in lines 8, 10 and 42 of app.js.</li>
<li> Replace "flickering-fire-2155" with [YOUR APP NAME] in lines 3, 6, 7, 25, 42 and 49 of teacher.js.
</li></ol></li>
<li> Upload the files on to a server that your students can access.<br>
*Note: If you don't have access to a server, once you have finished updating all the files, you could deliver just the following files to your students.* The files can be run on their local machines without a server. <br>
		index.html<br>
		bootstrap.min.css<br>
		app.js<br>
		resources/<br>
		style.css
</li></ol>
<h2>Frequently Asked Questions:</h2>

Q: Why is the code so... hack-y? <br>
A: This project was completed for the 2015 Sydney SheHacks competition. Over the course of 24 hours, we designed, coded and presented this project to our peers. 

<h2>Upcoming features:</h2>
Password protected Teacher Portal.
