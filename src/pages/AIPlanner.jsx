import "./AIPlanner.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function AIPlanner() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function generatePlan() {
    if (!prompt) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("https://raahistay.onrender.com/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (data.reply) {
        setReply(data.reply);
      } else {
        setReply(data.message || "Something went wrong.");
      }
    } catch {
      setReply("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="ai-page">

      

      <div className="ai-planner-card">

        <h2>🌿 Where would you like to travel?</h2>

        <textarea
          className="ai-textarea"
          placeholder="Plan a 5-day trip to Manali with cafés, hidden gems, scenic viewpoints and adventure activities..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="ai-btn"
          onClick={generatePlan}
          disabled={loading}
        >
          {loading ? "✨ Creating..." : "✨ Create My Journey"}
        </button>

      </div>

      {loading && (
        <div className="ai-loading-card">
          🌸 Creating your dream itinerary...
        </div>
      )}

      {reply && (
        <div className="ai-result-card">

          <div className="ai-result-title">
            📍 Your Personalised Travel Guide
          </div>

          <ReactMarkdown>{reply}</ReactMarkdown>

        </div>
      )}

    </div>
  );
}

export default AIPlanner;