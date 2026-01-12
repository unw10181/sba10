# Recipe Discovery App

## Reflection

Most challenging part: The hardest part of this project was managing API data across multiple dynamic routes while keeping loading and error states consistent.

Design decision: I created a reusable useFetch hook to centralize data-fetching logic and reduce duplication across components. Using Context combined with a useLocalStorage hook allowed favorites to persist across sessions without prop drilling, making the application easier to scale and maintain.

by Uchenna Williams

Link:
https://github.com/unw10181/sba10
