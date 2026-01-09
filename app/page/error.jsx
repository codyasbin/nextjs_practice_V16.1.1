"use client";

export default function Error(error, reset) {
  return (
    <div>
      <h1>500 - Server Error</h1>
      <h2>{error.message}</h2>
      <p>Oops! Something went wrong on our end.</p>
        <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}