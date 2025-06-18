
import React from 'react';

interface ExamplePromptProps {
  emoji: string;
  text: string;
  onClick: () => void;
}

const ExamplePrompt = ({ emoji, text, onClick }: ExamplePromptProps) => {
  return (
    <button
      onClick={onClick}
      className="group bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600 rounded-xl p-4 text-left transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
          {emoji}
        </span>
        <span className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
          {text}
        </span>
      </div>
    </button>
  );
};

export default ExamplePrompt;
