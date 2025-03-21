Source: https://frontendeval.com/questions/shopping-list
Nice to do as this is quite similar to Autocomplete

## Requirements

- Entering more than two characters in the input should show a list of partially matching items (starting with the same characters). **Should have debounce**
- Clicking an item in the list of partially matching items should add it to the list
- Adding the same item multiple times is allowed
- Pressing the 'X' next to an item should delete it from the list
- Pressing the '✓' next to an item should check it off (i.e. strikethrough text and partially grey out text/buttons)
- Pressing the '✓' next to a checked-off item should uncheck it again

## Follow up

- Add a way for the user to input a quantity for each item. This can either be with a small input adjacent to each item that only accepts numbers, or '+' and '-' button.
- Make the autocomplete list navigable with a keyboard: pressing up/down on the keyboard should change the highlighted item in the list of partially matching items (e.g. press down = highlight the next item, press up = highlight the previous item). Pressing enter with an item highlighted should add it to the list.

## API endpoints

- Method: GET
- URL: https://api.frontendeval.com/fake/food/:food
- Example request URL: https://api.frontendeval.com/fake/food/mi
- Example response: ['milk', 'milkshake', 'mint', 'mixed herbs']
- Notes: Only accepts items with a minimum of two characters (e.g. 'mi' is fine, 'm' will return an empty array')

![Illu1](https://frontendeval.com/images/shopping-list-1.png)
![Illu2](https://frontendeval.com/images/shopping-list-2.png)
