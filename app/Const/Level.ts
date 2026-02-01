export interface GameLevel {
  levelname: string;
  level: number;
  difficulty: "Easy" | "Medium" | "Hard" | "Extreme";
  firstNum: number;
  secondNum: number;
  result: number;
}

export const AllLevels: GameLevel[] = [
  {
    levelname: "Street Start",
    level: 1,
    difficulty: "Easy",
    firstNum: 2,
    secondNum: 3,
    result: 5,
  },
  {
    levelname: "Brick Lane",
    level: 2,
    difficulty: "Easy",
    firstNum: 4,
    secondNum: 3,
    result: 12,
  },
  {
    levelname: "Night Shift",
    level: 3,
    difficulty: "Easy",
    firstNum: 10,
    secondNum: 4,
    result: 6,
  },
  {
    levelname: "Iron Core",
    level: 4,
    difficulty: "Medium",
    firstNum: 6,
    secondNum: 2,
    result: 12,
  },
  {
    levelname: "Underground",
    level: 5,
    difficulty: "Medium",
    firstNum: 20,
    secondNum: 4,
    result: 5,
  },
  {
    levelname: "Overclocked",
    level: 6,
    difficulty: "Medium",
    firstNum: 5,
    secondNum: 3,
    result: 15,
  },
  {
    levelname: "No Mercy",
    level: 7,
    difficulty: "Hard",
    firstNum: 18,
    secondNum: 7,
    result: 11,
  },
  {
    levelname: "Red Zone",
    level: 8,
    difficulty: "Hard",
    firstNum: 9,
    secondNum: 8,
    result: 72,
  },
  {
    levelname: "Last Stand",
    level: 9,
    difficulty: "Hard",
    firstNum: 16,
    secondNum: 4,
    result: 4,
  },
  {
    levelname: "Endgame",
    level: 10,
    difficulty: "Extreme",
    firstNum: 7,
    secondNum: 6,
    result: 42,
  },
];
