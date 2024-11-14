import { type FC } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { type Word } from '@/data/words';
import { BookOpen } from 'lucide-react';

interface QuizCardProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  word: Word;
  onAnswerSelect: (value: string) => void;
}

export const QuizCard: FC<QuizCardProps> = ({
  currentQuestion,
  totalQuestions,
  score,
  word,
  onAnswerSelect,
}) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <Card className="w-full shadow-xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90">
      <CardHeader className="space-y-4 pb-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">英単語クイズ</h3>
          </div>
          <div className="bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-primary font-semibold">
              スコア: {score}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              問題 {currentQuestion + 1} / {totalQuestions}
            </p>
            <p className="text-sm text-muted-foreground">
              {Math.round(progress)}% 完了
            </p>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>

      <CardContent className="pb-8">
        <div className="space-y-8">
          <div className="text-center space-y-3 py-4">
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {word.english}
            </h2>
            <p className="text-sm text-muted-foreground">
              以下から正しい日本語訳を選んでください
            </p>
          </div>

          <RadioGroup
            onValueChange={onAnswerSelect}
            className="grid sm:grid-cols-2 gap-4"
          >
            {word.options.map((option, index) => (
              <div key={index} className="relative">
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex p-4 bg-white dark:bg-slate-800 rounded-lg cursor-pointer border-2 border-transparent transition-all hover:bg-primary/5 peer-checked:border-primary peer-checked:bg-primary/10 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full border-2 border-primary/50 flex items-center justify-center peer-checked:bg-primary">
                      <span className="text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-lg font-medium">{option}</span>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};