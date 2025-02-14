```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Count:', count);
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // This effect runs after every render, but this is to demonstrate
    // that you don't need the empty array effect for it
    console.log('Count updated:',count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```