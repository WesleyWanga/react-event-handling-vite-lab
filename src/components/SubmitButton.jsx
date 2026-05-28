// Code SubmitButton Component Here

// It handles mouse hover events for security tracking

function SubmitButton() {
  // Runs when the mouse enters the button
  function handleEnter() {
    console.log("Mouse Entering");
  }

  // Runs when the mouse leaves the button
  function handleLeave() {
    console.log("Mouse Exiting");
  }

  return (
    <div>
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        Submit Password
      </button>
    </div>
  );
}

export default SubmitButton;
