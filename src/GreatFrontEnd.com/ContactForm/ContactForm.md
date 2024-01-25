## Requirements

The form should contain the following elements:

- Fields: Name, Email, Message (should be a `<textarea>` as message can be long).
- Submit button: Contains the text "Send".
- The form and submission should be implemented mostly in HTML.
- There is no need to do any client-side validation on the fields. Validation will be done on the server side.

## Submission API

- Upon submission, POST the form data to <https://www.greatfrontend.com/api/questions/contact-form> with the following fields in the request body: `name`, `email`, `message`. The submit function has been already implemented for you.

- If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!
