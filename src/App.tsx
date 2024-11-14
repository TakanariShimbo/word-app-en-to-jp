import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { words } from './data/words';
import { QuizCard } from './components/QuizCard';
import { ResultCard } from './components/ResultCard';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === words[currentQuestion].japanese;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "正解！",
        description: `${words[currentQuestion].english} = ${words[currentQuestion].japanese}`,
        variant: "default",
      });
    } else {
      toast({
        title: "不正解",
        description: `正解は「${words[currentQuestion].japanese}」でした。`,
        variant: "destructive",
      });
    }
    
    setTimeout(() => {
      if (currentQuestion + 1 < words.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {showResult ? (
          <ResultCard
            score={score}
            totalQuestions={words.length}
            onRestart={restartQuiz}
          />
        ) : (
          <QuizCard
            currentQuestion={currentQuestion}
            totalQuestions={words.length}
            score={score}
            word={words[currentQuestion]}
            onAnswerSelect={handleAnswer}
          />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;