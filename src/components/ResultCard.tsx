import { type FC } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from 'lucide-react';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultCard: FC<ResultCardProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <Card className="w-full shadow-xl backdrop-blur-sm bg-white/90 dark:bg-slate-900/90">
      <CardHeader className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-6">
            <Trophy className="h-16 w-16 text-primary" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            テスト完了！
          </h1>
          <p className="text-muted-foreground text-lg">おつかれさまでした！</p>
        </div>
      </CardHeader>

      <CardContent className="space-y-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 py-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">正解数</p>
            <div className="bg-primary/5 rounded-2xl p-4">
              <p className="text-5xl sm:text-6xl font-bold text-primary">{score}</p>
              <p className="text-sm text-muted-foreground mt-1">/ {totalQuestions}</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">正答率</p>
            <div className="bg-primary/5 rounded-2xl p-4">
              <p className="text-5xl sm:text-6xl font-bold text-primary">{percentage}%</p>
              <p className="text-sm text-muted-foreground mt-1">達成</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 text-center">
          <p className="text-xl font-medium text-primary">
            {percentage >= 80
              ? "素晴らしい結果です！"
              : percentage >= 60
              ? "よく頑張りました！"
              : "まだまだ伸びしろがありますね！"}
          </p>
        </div>
      </CardContent>

      <CardFooter className="pb-8">
        <Button
          onClick={onRestart}
          className="w-full py-6 text-lg gap-2 shadow-lg"
          variant="default"
        >
          <RotateCcw className="h-5 w-5" />
          もう一度チャレンジ
        </Button>
      </CardFooter>
    </Card>
  );
};