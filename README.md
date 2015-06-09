# Heads up User Guide
A live collaborative webapp for classroom participation

Students: <br>
<ol>
<li>Point your browser to http://headsup.bitballoon.com/</li>
<li>Type in your name. </li>
<li>Wait for a question to appear on your screen. Your teacher will instruct you. </li>
</ol>
*Teachers:*
	1. Point your browser to http://headsup.bitballoon.com/teacher.html. This is your hub of information. From here you can choose what question to ask your entire class, see who has answered, and oversee the class stats for each question.

	To write a new question:
	1. Click "New Question". A light blue box will appear. 
	2. Enter a question and answer into the text boxes. If you wish to ask an open-ended question, leave the answer field blank. 

	To ask a new question to the class:
	1. Click the question you would like to ask. 
	2. Click the "Open" button. Only one question may be open to the class at a time.
	3. The class can now see and submit answers to the open question! As answers come in, you will be able to see the percentage of students that have answered your question, and the percentage that got the answer correct in the "Question Stats" section.


*Installation guide:*
	1. Download the files.
	2. Set up a firebase server. 
		a. Go to https://www.firebase.com/ and sign up for an account. 
		b. Make a new app. Make note of the app name used in the URL. You'll need that! 
		c. Click "Manage app"
		d. Point your browser to https://[YOUR APP NAME].firebaseio.com/extra
		e. Click on the + next to  "extra". Add a variable underneath called "question_max" with a value of 0.
	3. Including your new server in the app
		a. Replace "flickering-fire-2155" with [YOUR APP NAME] in lines 8, 10 and 42 of app.js.
		b. Replace "flickering-fire-2155" with [YOUR APP NAME] in lines 3, 6, 7, 25, 42 and 49 of teacher.js.
	4. Upload the files on to a server that your students can access.
	Note: If you don't have access to a server, once you have finished updating all the files, you could deliver just the following files to your students. The files can be run on their local machines without a server. 
		index.html
		bootstrap.min.css
		app.js
		resources/
		style.css

*Frequently Asked Questions:*

	Q: Why is the code so... hack-y? 
	A: This project was completed for the 2015 Sydney SheHacks competition. Over the course of 24 hours, we designed, coded and presented this project to our peers. 

*Upcoming features:*
	- Password protected Teacher Portal.
