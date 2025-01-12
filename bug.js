```javascript
// In a React 19 functional component:

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1); // Correct usage
    setCount(prevCount => prevCount + 1); //This might lead to unexpected behavior if called rapidly
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```