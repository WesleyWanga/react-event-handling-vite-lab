// Code PasswordInput Component 

// It handles password typing events

function PasswordInput() {
  
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input
        type="password"
        onChange={handleChange}
      />
    </div>
  );
}

export default PasswordInput;
