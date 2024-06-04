import React from "react";

export default function EmailTemplate({ firstName }) {
  return (
    <div style={{ fontSize: 30, color: "black" }}>
      Hi {firstName} We Will call u on your Phone Number when ur Command is
      ready ! <br />
      stay Soon ! <br />
      Thanks you
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmkwYmdkMGp4MjBub2x0d2Y2MTJqOWc5aWo3Z20wcmpyMzlvaTllcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QkIeGKAcSQxKPuHyai/giphy.webp"
        className="w-full h-[500px]"
      />
    </div>
  );
}
