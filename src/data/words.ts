export type Word = {
  id: number;
  english: string;
  japanese: string;
  options: string[];
};

export const words: Word[] = [
  {
    id: 1,
    english: "apple",
    japanese: "りんご",
    options: ["りんご", "バナナ", "オレンジ", "ぶどう"]
  },
  {
    id: 2,
    english: "book",
    japanese: "本",
    options: ["本", "ペン", "ノート", "鉛筆"]
  },
  {
    id: 3,
    english: "cat",
    japanese: "猫",
    options: ["猫", "犬", "鳥", "魚"]
  },
  {
    id: 4,
    english: "house",
    japanese: "家",
    options: ["家", "車", "自転車", "電車"]
  },
  {
    id: 5,
    english: "water",
    japanese: "水",
    options: ["水", "お茶", "コーヒー", "ジュース"]
  }
];