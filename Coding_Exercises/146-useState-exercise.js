import React from 'react';
// Don't modify this line. It is here to make React
// work correctly in this exercise environment.
const useState = React.useState;

// don't change the Component name "App"
export default function App() {
    const [count, setCount] = useState(0)    
    
    const onButtonClick = () => {
        setCount(count + 1)
    };
    
    return (
        <div>
            <button onClick={onButtonClick}>Click Me!</button>
            
            <h1>Current Count: {count}</h1>
        </div>
    );
}