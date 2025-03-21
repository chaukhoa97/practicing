## Requirements

- Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.
- At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.
- Note: You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

## (Lower Priority) Keyboards Events

- When `Tab` key is pressed:
  - When focus moves into the tab list, places focus on the active tab element.
  - When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel.
- When focus is on a tab element in the tab list:
  - `Left Arrow`: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.
  - `Right Arrow`: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab.
  - `Home`: Moves focus to the first tab. Shows tabpanel content of the newly focused tab.
  - `End`: Moves focus to the last tab. Shows tabpanel content of the newly focused tab.

## Starter Code

```jsx
export default function Tabs({ sections }) {
  return <></>
}
```
