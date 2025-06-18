👨‍🍳 Recipe ChefBot 🤖
Your intelligent kitchen assistant for finding, creating, and managing delicious food recipes!

✨ About the Project
Recipe ChefBot is an AI-powered chatbot designed to be your ultimate culinary companion. Inspired by the common challenge of deciding what to cook with available ingredients or finding specific recipes, this bot aims to make your cooking experience easier, more creative, and more enjoyable. It leverages advanced AI to understand your needs and provide instant, helpful recipe solutions.

This project was developed for the Google Cloud Multi-Agent Hackathon.

🚀 Features
Recipe ChefBot offers a range of functionalities to assist you in the kitchen:

Recipe Search: Find recipes by dish name, specific ingredients you have, cuisine type, or dietary restrictions.
Generative Recipes: Get creative! Ask the bot to generate brand new recipes based on unique prompts (e.g., "healthy weeknight meal with tofu and spinach").
Ingredient Substitutions: Get suggestions for alternative ingredients if you're missing something.
Cooking Tips: Receive handy advice and tricks to improve your culinary skills.
Friendly & Knowledgeable Persona: The bot is designed to be a helpful, encouraging, and clear guide in your cooking journey.
Engaging Start Messages: Kickstart your cooking queries with pre-defined prompts for easy interaction.
🧪 How It's Built
Recipe ChefBot is orchestrated using an Agent Development Kit (ADK) and built with a powerful stack:

Core AI Model (The Brain): Utilizes a Large Language Model (e.g., meta-llama/Llama-3.3-70B-Instruct) for natural language understanding and recipe generation.
System Prompt: A concise system prompt guides the AI's behavior, ensuring it acts as a dedicated food recipe assistant, staying on topic, and providing helpful, clear instructions.
Community Tools Integration:
Hugging Face Transformers library: For interacting with the core language model.
Hugging Face Datasets library: For efficient management and processing of recipe data.
Gradio: For creating the interactive and user-friendly web interface.
💻 Getting Started (Local Development)
(Note: These are general steps. Specific setup might vary based on your exact implementation.)

Clone the repository:
Bash

git clone https://github.com/your-username/recipe-chefbot.git
cd recipe-chefbot
Install dependencies:
Bash

pip install -r requirements.txt
(requirements.txt would list transformers, datasets, gradio, etc.)
Set up API keys/access (if needed):
Ensure you have access to the specified LLM (e.g., Hugging Face API token for Meta Llama models or Google Cloud credentials for Vertex AI).
Run the application:
Bash

python app.py # Or your main application file
Open your web browser and navigate to the local address provided by Gradio (usually http://127.0.0.1:7860).
🤔 Challenges & Learnings
Developing Recipe ChefBot presented unique challenges, particularly in prompt engineering. Crafting a system prompt that consistently guides the LLM to generate accurate, practical, and safe recipes, all while adhering to character limits, required extensive experimentation. Balancing creative freedom with factual integrity and ensuring the bot politely redirects out-of-scope queries were key learning experiences.

💡 Future Enhancements
Integration with external recipe APIs for a wider database.
User accounts for saving favorite recipes and meal plans.
Voice-activated interaction for hands-free cooking.
Shopping list export functionality.
Advanced personalization based on user history and preferences.
🤝 Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

