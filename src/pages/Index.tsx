
import React, { useState, useRef, useEffect } from 'react';
import { ChefHat, RotateCcw, Settings, Share } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';
import ExamplePrompt from '../components/ExamplePrompt';
import ChatInput from '../components/ChatInput';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const responses = [
      "That sounds delicious! Here's a great recipe for you:\n\n🍝 **Classic Lasagna**\n\nIngredients:\n- 12 lasagna noodles\n- 1 lb ground beef\n- 2 cups ricotta cheese\n- 2 cups mozzarella cheese\n- 1/2 cup parmesan cheese\n- 2 cups marinara sauce\n- 2 eggs\n- Italian seasoning\n\nInstructions:\n1. Cook noodles according to package directions\n2. Brown the ground beef with seasonings\n3. Mix ricotta with eggs and half the mozzarella\n4. Layer ingredients in baking dish\n5. Bake at 375°F for 45 minutes\n\nEnjoy your homemade lasagna! 🧄✨",
      
      "Perfect for a quick meal! Here's a 20-minute recipe:\n\n🍤 **Garlic Shrimp Pasta**\n\nIngredients:\n- 1 lb shrimp, peeled\n- 8 oz pasta\n- 4 cloves garlic, minced\n- 1/4 cup olive oil\n- 1/4 cup white wine\n- Fresh parsley\n- Lemon juice\n- Red pepper flakes\n\nInstructions:\n1. Cook pasta while preparing shrimp\n2. Sauté garlic in olive oil for 1 minute\n3. Add shrimp, cook 2-3 minutes per side\n4. Add wine, lemon juice, and seasonings\n5. Toss with pasta and fresh parsley\n\nReady in under 20 minutes! 🍋🌿",
      
      "Here's an impressive dessert that's easier than it looks:\n\n🍰 **Chocolate Lava Cake**\n\nIngredients:\n- 4 oz dark chocolate\n- 4 tbsp butter\n- 2 large eggs\n- 2 tbsp sugar\n- 2 tbsp flour\n- Pinch of salt\n- Butter for ramekins\n\nInstructions:\n1. Melt chocolate and butter together\n2. Whisk eggs and sugar until thick\n3. Fold in chocolate mixture and flour\n4. Pour into buttered ramekins\n5. Bake at 425°F for 12-14 minutes\n\nServe immediately with vanilla ice cream! 🍨✨"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(messageText),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleExampleClick = (exampleText: string) => {
    handleSendMessage(exampleText);
  };

  const handleResetChat = () => {
    setMessages([]);
  };

  const examples = [
    {
      emoji: "🍝",
      text: "Craving classic comfort? Got a killer lasagna recipe? 🧄"
    },
    {
      emoji: "⏰⚡",
      text: "Super short on time! What's a delicious meal I can make in under 30 minutes?"
    },
    {
      emoji: "🎂👑",
      text: "Party dessert panic! Help me suggest something sweet and show-stopping! ✨"
    },
    {
      emoji: "🌍🍜",
      text: "Take my taste buds on a trip! Suggest a recipe from a specific cuisine (like Thai or Italian)!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Recipe ChefBot</h1>
              <p className="text-sm text-slate-400">Your personal kitchen assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleResetChat}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              title="Reset to default model"
            >
              <RotateCcw className="w-5 h-5 text-slate-400" />
            </button>
            <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <Share className="w-5 h-5 text-slate-400" />
            </button>
            <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col h-[calc(100vh-80px)]">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            /* Welcome Screen */
            <div className="max-w-4xl mx-auto px-4 py-8">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Recipe ChefBot
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Your personal kitchen assistant for finding, creating, and managing delicious food recipes. 
                  Ask for specific dishes, ingredients you have, or get new meal ideas!
                </p>
              </div>

              {/* Assistant Info */}
              <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-200">About this Assistant</h3>
                  <span className="text-sm text-slate-500">ChefBot7</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Internet access
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Has tools
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    10+ users
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-6 text-slate-200">Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {examples.map((example, index) => (
                    <ExamplePrompt
                      key={index}
                      emoji={example.emoji}
                      text={example.text}
                      onClick={() => handleExampleClick(example.text)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Chat Messages */
            <div className="max-w-4xl mx-auto">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isBot={message.isBot}
                  timestamp={message.timestamp}
                />
              ))}
              {isLoading && (
                <div className="flex gap-3 p-4 bg-slate-800/50">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 text-slate-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <span className="ml-2 text-sm">ChefBot is cooking up a response...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;
