##Task for Valinteca
1- You need to create a 3-page website as shown here at figma:
https://www.figma.com/file/6DeOGqcKRgnraPT9ivDqaR/Signup-Flow-UI-(Community)?node-id=
106%3A220&t=sUDAD21WSxWjMwPH-0
2- In the first page (welcome screen), the “get started” button should open the “register page”
3- In the second page (register page), user is asked to enter some data such as username, email,
password, you need to validate the form
- Username must consist of 5 to 15 characters, only letters and numbers are allowed, with no
numbers at the beginning or the end, ahmed0saber is valid, 0ahmedsaber is not valid,
ahmedsaber0 is not valid, ahmed_saber is not valid, etc...
- Email must be in a valid format
- Password must be at least 8 characters
- Display frontend validation errors below each input
- Use “fetch” to send user data to this endpoint https://goldblv.com/api/hiring/tasks/register,
using “POST” method and type of “application/json”, request body should have username,
email, password and password_confirmation
- Display validation errors from api below each input
- If no errors from api, direct user to the last page (logged in successfully), where his email is
displayed from sessionStorage, localStorage or cookies
4- Upload your completed task to GitHub, then use link to repository to submit your job
application form
5- Don’t forget to pay attention to clean code

---
## some defeculties 
-REGEX =>>> regular expresstion : for making user input from 0-15 and contain only letters and numbers , first and last letter shouldn't be number 
/^[A-Za-z][A-Za-z0-9]{3,13}[A-Za-z]$/
