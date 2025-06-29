```tsx
function useQuery<T>(key: unknown[], fetcher: () => Promise<T>)
```

## Features to implement:

1. **State management**: Track `data`, `error`, and `loading` states
2. **Caching**: Only refetch when the `key` array changes
3. **Refetch capability**: Provide a `refetch` function
4. **Race condition handling**: Prevent stale data from updating state
5. Clear previous error/data states appropriately
6. **Fetcher stability**: Handle fetcher function changes without unnecessary refetches
