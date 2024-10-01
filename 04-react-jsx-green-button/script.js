const App = ({ initialButtonText, initialClassText }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classText, setClassText] = React.useState(initialClassText);
  const onButtonClick = () => {
    setButtonText('Hello from react');
    setClassText('green-btn');
  };

  return (
    <div className="app">
      <button className={classText} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassText="" />);
