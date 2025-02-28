import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
} from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PortfolioRecommendationProps {
  profile: 'conservative' | 'moderate' | 'aggressive' | null;
  onNext: () => void;
  onBack: () => void;
  onAmountChange: (amount: number) => void;
}

const portfolioAllocations = {
  conservative: [
    { name: 'Poupança', percentage: 5 },
    { name: 'Tesouro Direto', percentage: 25 },
    { name: 'Previdência Privada', percentage: 20 },
    { name: 'Fundos de Renda Fixa', percentage: 25 },
    { name: 'CDB, LCI, LCA', percentage: 20 },
    { name: 'Fundo Imobiliário, Ações', percentage: 5 },
  ],
  moderate: [
    { name: 'Tesouro Direto', percentage: 20 },
    { name: 'Previdência', percentage: 20 },
    { name: 'Fundos de Renda Fixa', percentage: 20 },
    { name: 'CDB, LCI, LCA', percentage: 15 },
    { name: 'Poupança', percentage: 5 },
    { name: 'Ações, COE, Fundos Imobiliários, Multimercado', percentage: 20 },
  ],
  aggressive: [
    { name: 'Tesouro Direto', percentage: 10 },
    { name: 'Previdência Privada', percentage: 20 },
    { name: 'Fundos de Renda Fixa', percentage: 10 },
    { name: 'Ações, COE, Fundos Imobiliários, Multimercado, etc.', percentage: 60 },
  ],
};

const chartColors = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#4BC0C0',
  '#9966FF',
  '#FF9F40',
];

const PortfolioRecommendation: React.FC<PortfolioRecommendationProps> = ({
  profile,
  onNext,
  onBack,
  onAmountChange,
}) => {
  const [amount, setAmount] = useState<string>('');

  if (!profile) {
    return <Typography>Please complete the investment profile questionnaire first.</Typography>;
  }

  const allocation = portfolioAllocations[profile];

  const chartData: ChartData<'doughnut'> = {
    labels: allocation.map((item) => item.name),
    datasets: [
      {
        data: allocation.map((item) => item.percentage),
        backgroundColor: chartColors.slice(0, allocation.length),
        borderWidth: 1,
      },
    ],
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value);
    onAmountChange(Number(value) || 0);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Recomendação de Carteira - Perfil {profile.charAt(0).toUpperCase() + profile.slice(1)}
      </Typography>

      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ height: 300, mb: 4 }}>
          <Doughnut data={chartData} options={{ maintainAspectRatio: false }} />
        </Box>

        <Box sx={{ mt: 3 }}>
          {allocation.map((item, index) => (
            <Typography key={item.name} variant="body1" gutterBottom>
              {item.name}: {item.percentage}%
              {amount && ` - R$ ${((Number(amount) * item.percentage) / 100).toFixed(2)}`}
            </Typography>
          ))}
        </Box>

        <TextField
          fullWidth
          label="Valor a Investir (R$)"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          sx={{ mt: 3 }}
        />
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={!amount}
        >
          Próximo
        </Button>
      </Box>
    </Box>
  );
};

export default PortfolioRecommendation; 