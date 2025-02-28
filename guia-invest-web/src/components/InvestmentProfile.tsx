import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
} from '@mui/material';

interface InvestmentProfileProps {
  onNext: () => void;
  onProfileSelect: (profile: 'conservative' | 'moderate' | 'aggressive') => void;
}

const questions = [
  {
    question: 'Por quanto tempo você pretende deixar seu dinheiro investido?',
    options: [
      { value: 'A', label: 'Menos de 6 meses', points: 0 },
      { value: 'B', label: 'Entre 6 meses e 1 ano', points: 2 },
      { value: 'C', label: 'Entre 1 ano e 3 anos', points: 3 },
      { value: 'D', label: 'Acima de 3 anos', points: 4 },
    ],
  },
  {
    question: 'Qual o objetivo desse investimento?',
    options: [
      { value: 'A', label: 'Preservação do capital para não perder valor ao longo do tempo, assumindo baixos riscos de perdas', points: 0 },
      { value: 'B', label: 'Aumento gradual do capital ao longo do tempo, assumindo riscos moderados', points: 2 },
      { value: 'C', label: 'Aumento do capital acima da taxa de retorno média do mercado, mesmo que isso implique assumir riscos de perdas elevada', points: 3 },
      { value: 'D', label: 'Obter no curto prazo retornos elevados e significativamente acima da taxa de retorno média do mercado, assumindo riscos elevados', points: 4 },
    ],
  },
  // Add more questions from the original C++ code here
];

const InvestmentProfile: React.FC<InvestmentProfileProps> = ({ onNext, onProfileSelect }) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const calculateProfile = () => {
    let totalPoints = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const question = questions[parseInt(questionIndex)];
      const option = question.options.find((opt) => opt.value === answer);
      if (option) {
        totalPoints += option.points;
      }
    });

    if (totalPoints <= 14) {
      onProfileSelect('conservative');
    } else if (totalPoints <= 35) {
      onProfileSelect('moderate');
    } else {
      onProfileSelect('aggressive');
    }
    onNext();
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <Box sx={{ mt: 2 }}>
      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="h6" gutterBottom>
              {currentQuestionData.question}
            </Typography>
          </FormLabel>
          <RadioGroup
            value={answers[currentQuestion] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
          >
            {currentQuestionData.options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (currentQuestion < questions.length - 1) {
              setCurrentQuestion(currentQuestion + 1);
            } else {
              calculateProfile();
            }
          }}
          disabled={!answers[currentQuestion]}
        >
          {currentQuestion < questions.length - 1 ? 'Próxima' : 'Finalizar'}
        </Button>
      </Box>
    </Box>
  );
};

export default InvestmentProfile; 