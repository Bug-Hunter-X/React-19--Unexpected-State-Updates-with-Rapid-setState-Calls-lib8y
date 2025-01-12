# React 19: Unexpected State Updates
This repository demonstrates a subtle bug in React 19 related to rapidly calling state update functions.  The problem arises when multiple `setState` calls are made in quick succession.  Due to React's batching optimizations, subsequent updates might override earlier ones, leading to unexpected behavior.

## The Issue
In the `bug.js` file, the `handleClick` function calls `setCount` twice. If the button is clicked rapidly, the second update might override the first, resulting in an increment of only one instead of two.

## The Solution
The `bugSolution.js` file demonstrates a solution using `useCallback` to memoize the `handleClick` function.  This prevents unnecessary re-renders and ensures that both `setCount` calls are processed correctly, even with rapid button clicks.  Alternatively using `setTimeout` or other debouncing/throttling techniques can mitigate the issue.