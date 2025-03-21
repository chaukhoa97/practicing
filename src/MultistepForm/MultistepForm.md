![Example](https://frontendeval.com/images/multi-step-form.png)

- Name, email, date of birth, and password

The specs are as follows:

- Back links appear on every screen other than the first one, going back to the step the user was just on
- Input is required on every screen prior to proceeding to the next.
- On the last screen, provide a submit button that calls a `handleSubmit({ name: ..., email: ..., password: ... })` function passing in the values of all the fields
- Show a success screen
