# Platform Adventure Game

A challenging platformer game built with Kaboom.js featuring multiple levels, enemies, and collectibles.

## 🎮 Play Now

[Try the game here: Play Platform Adventure](#)

---

## ✨ Features

- **8 challenging levels** with increasing difficulty
- **Multiple enemy types and hazards**
- **Collectible coins and special items**
- **Platform-based puzzles**
- **Smooth character controls**
- **Progressive difficulty scaling**

---

## 🎯 How to Play

- **Arrow Keys or WASD**: Move and jump
- **Collect coins** for points
- **Avoid spikes and enemies**
- **Reach the portal** to complete each level
- **Find special prize boxes** for power-ups

---

## 🛠️ Built With

- [Kaboom.js](https://kaboomjs.com/) - Game development library
- **HTML5 & JavaScript**
- **CSS** for styling

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/platform-game.git
   ```

2. Navigate to the project directory:

   ```bash
   cd platform-game
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

---

## 📁 Project Structure

```plaintext
platform-game/
├── public/
│   └── assets/        # Game sprites and sounds
├── src/
│   ├── main.js        # Game initialization
│   ├── levels.js      # Level designs
│   └── config.js      # Game configuration
├── index.html
└── package.json
```

---

## 🎨 Game Elements

- **Player**: The main character you control
- **Platforms**: Various types of surfaces to jump on
- **Enemies**: Moving obstacles to avoid
- **Coins**: Collectibles for scoring
- **Spikes**: Deadly obstacles
- **Portals**: Level completion points
- **Prize Boxes**: Special power-up containers

---

## 🔧 Customization

### Adding New Levels

Add new levels in the `levels.js` file following this format:

```javascript
export const LEVELS = [
  [
    " $   $   $ ",
    " =   =   = ",
    "     @     ",
    "==================="
  ]
];
```

### Sprites Legend

- **$**: Coin
- **=**: Platform
- **@**: Portal
- **^**: Spike
- **>**: Enemy
- **%**: Prize Box
- **0**: Special Block

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👏 Acknowledgments

- [Kaboom.js Documentation](https://kaboomjs.com/docs)
- Game assets from [your-asset-source]
- Inspired by classic platformer games

---

## 🐛 Known Issues

Report any bugs in the [Issues](../../issues) section.

---

## 📫 Contact

**Your Name** - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/your-username/platform-game](https://github.com/your-username/platform-game)
