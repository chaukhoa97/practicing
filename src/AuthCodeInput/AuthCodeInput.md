![Example](https://www.greatfrontend.com/img/questions/auth-code-input/auth-code-input-example.png)

## Requirements

- Each input field should only allow one digit between 0 to 9.
- Entering a valid input will move focus to the next input except when it is the last input.
- Hitting Backspace will:
  - Clear the current field if is not empty.
  - Move focus to the previous field if the current field is empty.
- "Submit" button submits the OTP. It is disabled until all the input fields are filled.
- "Reset" button clears all the fields. It is disabled if all the input fields are empty.
- Submitting the form should make a POST request to https://www.greatfrontend.com/api/questions/auth-code-input with a body of { otp: '6_DIGIT_OTP' }.
  - HTTP 204 is returned if the OTP is '123456' (the API is hardcoded to only accept this value).
  - HTTP 403 is returned otherwise.
- Display a success/failure message depending on the response.
- (Hard) Pasting should clear all fields and replace the fields with the pasted content.
