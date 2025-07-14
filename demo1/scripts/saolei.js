class Minesweeper {
  constructor() {
    this.board = [];
    this.revealed = [];
    this.flagged = [];
    this.gameStarted = false;
    this.gameOver = false;
    this.gameWon = false;
    this.timer = 0;
    this.timerInterval = null;

    // 难度配置
    this.difficulties = {
      beginner: { rows: 9, cols: 9, mines: 10 },
      intermediate: { rows: 16, cols: 16, mines: 40 },
      expert: { rows: 16, cols: 30, mines: 99 },
    };

    this.currentDifficulty = "beginner";
    this.config = this.difficulties[this.currentDifficulty];

    this.initGame();
    this.bindEvents();
  }

  initGame() {
    this.gameStarted = false;
    this.gameOver = false;
    this.gameWon = false;
    this.timer = 0;
    this.clearTimer();

    // 获取当前难度配置
    this.config = this.difficulties[this.currentDifficulty];

    // 初始化游戏板
    this.board = Array(this.config.rows)
      .fill()
      .map(() => Array(this.config.cols).fill(0));
    this.revealed = Array(this.config.rows)
      .fill()
      .map(() => Array(this.config.cols).fill(false));
    this.flagged = Array(this.config.rows)
      .fill()
      .map(() => Array(this.config.cols).fill(false));

    this.updateMineCount();
    this.updateTimer();
    this.updateGameStatus("");
    this.renderBoard();
  }

  placeMines(firstClickRow, firstClickCol) {
    let minesPlaced = 0;

    while (minesPlaced < this.config.mines) {
      const row = Math.floor(Math.random() * this.config.rows);
      const col = Math.floor(Math.random() * this.config.cols);

      // 确保第一次点击的位置和周围不放雷
      if (
        this.board[row][col] === -1 ||
        (Math.abs(row - firstClickRow) <= 1 &&
          Math.abs(col - firstClickCol) <= 1)
      ) {
        continue;
      }

      this.board[row][col] = -1; // -1 表示雷
      minesPlaced++;
    }

    // 计算每个格子周围的雷数
    this.calculateNumbers();
  }

  calculateNumbers() {
    for (let row = 0; row < this.config.rows; row++) {
      for (let col = 0; col < this.config.cols; col++) {
        if (this.board[row][col] !== -1) {
          this.board[row][col] = this.countAdjacentMines(row, col);
        }
      }
    }
  }

  countAdjacentMines(row, col) {
    let count = 0;

    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (
          r >= 0 &&
          r < this.config.rows &&
          c >= 0 &&
          c < this.config.cols &&
          this.board[r][c] === -1
        ) {
          count++;
        }
      }
    }

    return count;
  }

  revealCell(row, col) {
    if (
      this.gameOver ||
      this.gameWon ||
      this.revealed[row][col] ||
      this.flagged[row][col]
    ) {
      return;
    }

    // 第一次点击时放置雷
    if (!this.gameStarted) {
      this.placeMines(row, col);
      this.gameStarted = true;
      this.startTimer();
    }

    this.revealed[row][col] = true;

    // 点到雷了
    if (this.board[row][col] === -1) {
      this.gameOver = true;
      this.gameOverHandler(row, col);
      return;
    }

    // 如果是空格子，自动揭开周围的格子
    if (this.board[row][col] === 0) {
      this.revealAdjacentCells(row, col);
    }

    this.checkWinCondition();
    this.renderBoard();
  }

  revealAdjacentCells(row, col) {
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (
          r >= 0 &&
          r < this.config.rows &&
          c >= 0 &&
          c < this.config.cols &&
          !this.revealed[r][c] &&
          !this.flagged[r][c]
        ) {
          this.revealCell(r, c);
        }
      }
    }
  }

  toggleFlag(row, col) {
    if (this.gameOver || this.gameWon || this.revealed[row][col]) {
      return;
    }

    this.flagged[row][col] = !this.flagged[row][col];
    this.updateMineCount();
    this.renderBoard();
  }

  gameOverHandler(explodedRow, explodedCol) {
    this.clearTimer();

    // 显示所有雷
    for (let row = 0; row < this.config.rows; row++) {
      for (let col = 0; col < this.config.cols; col++) {
        if (this.board[row][col] === -1) {
          this.revealed[row][col] = true;
        }
      }
    }

    this.updateGameStatus("游戏结束！", "game-over");
    this.renderBoard();

    // 使用requestAnimationFrame确保DOM更新完成后再添加爆炸效果
    requestAnimationFrame(() => {
      const explodedCell = document.querySelector(
        `[data-row="${explodedRow}"][data-col="${explodedCol}"]`
      );
      if (explodedCell) {
        explodedCell.classList.add("mine-exploded");
      }
    });
  }

  checkWinCondition() {
    let revealedCount = 0;

    for (let row = 0; row < this.config.rows; row++) {
      for (let col = 0; col < this.config.cols; col++) {
        if (this.revealed[row][col] && this.board[row][col] !== -1) {
          revealedCount++;
        }
      }
    }

    const totalNonMines =
      this.config.rows * this.config.cols - this.config.mines;

    if (revealedCount === totalNonMines) {
      this.gameWon = true;
      this.clearTimer();
      this.updateGameStatus("恭喜获胜！", "game-won");
    }
  }

  renderBoard() {
    const minefield = document.getElementById("minefield");
    minefield.innerHTML = "";

    for (let row = 0; row < this.config.rows; row++) {
      const rowDiv = document.createElement("div");
      rowDiv.className = "row";

      for (let col = 0; col < this.config.cols; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;

        if (this.flagged[row][col] && !this.revealed[row][col]) {
          // 只有未揭开的格子才显示旗帜
          cell.classList.add("flagged");
          cell.textContent = "🚩";
        } else if (this.revealed[row][col]) {
          cell.classList.add("revealed");

          if (this.board[row][col] === -1) {
            cell.classList.add("mine");
            cell.textContent = "💣";
          } else if (this.board[row][col] > 0) {
            cell.textContent = this.board[row][col];
            cell.classList.add(`number-${this.board[row][col]}`);
          }
        }

        rowDiv.appendChild(cell);
      }

      minefield.appendChild(rowDiv);
    }
  }

  bindEvents() {
    document.getElementById("minefield").addEventListener("click", (e) => {
      if (e.target.classList.contains("cell")) {
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        this.revealCell(row, col);
      }
    });

    document
      .getElementById("minefield")
      .addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("cell")) {
          const row = parseInt(e.target.dataset.row);
          const col = parseInt(e.target.dataset.col);
          this.toggleFlag(row, col);
        }
      });

    document.getElementById("difficulty").addEventListener("change", (e) => {
      this.currentDifficulty = e.target.value;
      this.initGame();
    });
  }

  // 中键双击快速揭开功能
  handleMiddleClick(row, col) {
    if (
      !this.revealed[row][col] ||
      this.board[row][col] === 0 ||
      this.gameOver ||
      this.gameWon
    ) {
      return;
    }

    // 计算周围标记的雷数
    let flaggedCount = 0;
    const adjacentCells = [];

    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (r >= 0 && r < this.config.rows && c >= 0 && c < this.config.cols) {
          if (this.flagged[r][c]) {
            flaggedCount++;
          } else if (!this.revealed[r][c]) {
            adjacentCells.push([r, c]);
          }
        }
      }
    }

    // 如果标记的雷数等于该格子的数字，则揭开周围所有未揭开的格子
    if (flaggedCount === this.board[row][col]) {
      adjacentCells.forEach(([r, c]) => {
        this.revealCell(r, c);
      });
    }
  }
  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer++;
      this.updateTimer();
    }, 1000);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimer() {
    document.getElementById("timer").textContent = this.timer;
  }

  updateMineCount() {
    const flaggedCount = this.flagged.flat().filter((f) => f).length;
    const remaining = this.config.mines - flaggedCount;
    document.getElementById("mine-count").textContent = remaining;
  }

  updateGameStatus(message, className = "") {
    const statusEl = document.getElementById("game-status");
    statusEl.textContent = message;
    statusEl.className = className;
  }
}

// 全局函数
let game;

function newGame() {
  game = new Minesweeper();
}

function toggleInstructions() {
  const instructions = document.getElementById("instructions");
  instructions.style.display =
    instructions.style.display === "none" ? "block" : "none";
}

// 页面加载完成后初始化游戏
document.addEventListener("DOMContentLoaded", function () {
  newGame();

  // 添加中键点击事件
  document.getElementById("minefield").addEventListener("mousedown", (e) => {
    if (e.button === 1 && e.target.classList.contains("cell")) {
      // 中键
      e.preventDefault();
      const row = parseInt(e.target.dataset.row);
      const col = parseInt(e.target.dataset.col);
      game.handleMiddleClick(row, col);
    }
  });
});
