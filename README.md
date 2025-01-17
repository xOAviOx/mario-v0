Platform Adventure Game
A challenging platformer game built with Kaboom.js featuring multiple levels, enemies, and collectibles.
Show Image
🎮 Play Now
Try the game here: Play Platform Adventure
✨ Features

8 challenging levels with increasing difficulty
Multiple enemy types and hazards
Collectible coins and special items
Platform-based puzzles
Smooth character controls
Progressive difficulty scaling

🎯 How to Play

Arrow Keys or WASD: Move and jump
Collect coins for points
Avoid spikes and enemies
Reach the portal to complete each level
Find special prize boxes for power-ups

🛠️ Built With

Kaboom.js - Game development library
HTML5 & JavaScript
CSS for styling

🚀 Getting Started
Prerequisites

Node.js (v14 or higher recommended)
npm or yarn

Installation

Clone the repository

bashCopygit clone https://github.com/your-username/platform-game.git

Navigate to the project directory

bashCopycd platform-game

Install dependencies

bashCopynpm install

Start the development server

bashCopynpm run dev

Open your browser and visit http://localhost:5173

📁 Project Structure
Copyplatform-game/
├── public/
│ └── assets/ # Game sprites and sounds
├── src/
│ ├── main.js # Game initialization
│ ├── levels.js # Level designs
│ └── config.js # Game configuration
├── index.html
└── package.json
🎨 Game Elements

Player: The main character you control
Platforms: Various types of surfaces to jump on
Enemies: Moving obstacles to avoid
Coins: Collectibles for scoring
Spikes: Deadly obstacles
Portals: Level completion points
Prize Boxes: Special power-up containers

🔧 Customization
Adding New Levels
Add new levels in the levels.js file following this format:
javascriptCopyexport const LEVELS = [
[
" $ $ $ ",
" = = = ",
" @ ",
"==================="
]
];
Sprites Legend

$: Coin
=: Platform
@: Portal
^: Spike

> : Enemy
> %: Prize Box
> 0: Special Block

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
🤝 Contributing

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

👏 Acknowledgments

Kaboom.js Documentation
Game assets from [your-asset-source]
Inspired by classic platformer games

🐛 Known Issues

Report any bugs in the Issues section

📫 Contact
Your Name - @your_twitter - email@example.com
Project Link: https://github.com/your-username/platform-game
