import React from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ReturnCalculatorProps {
  profile: 'conservative' | 'moderate' | 'aggressive' | null;
  amount: number;
  onNext: () => void;
  onBack: () => void;
}

const annualReturns = {
  conservative: {
    'Poupança': 6,
    'Tesouro Direto': 10,
    'Previdência Privada': 12,
    'Fundos de Renda Fixa': 7,
    'CDB, LCI, LCA': 12,
    'Fundo Imobiliário, Ações': 27,
  },
  moderate: {
    'Tesouro Direto': 10,
    'Previdência': 12,
    'Fundos de Renda Fixa': 7,
    'CDB, LCI, LCA': 12,
    'Poupança': 6,
    'Ações, COE, Fundos Imobiliários, Multimercado': 27,
  },
  aggressive: {
    'Tesouro Direto': 10,
    'Previdência Privada': 12,
    'Fundos de Renda Fixa': 7,
    'Ações, COE, Fundos Imobiliários, Multimercado, etc.': 35,
  },
};

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

const ReturnCalculator: React.FC<ReturnCalculatorProps> = ({
  profile,
  amount,
  onNext,
  onBack,
}) => {
  if (!profile) {
    return <Typography>Please complete the investment profile questionnaire first.</Typography>;
  }

  const allocation = portfolioAllocations[profile];
  const returns = annualReturns[profile];

  const calculateTotalReturn = () => {
    return allocation.reduce((total, item) => {
      const returnRate = returns[item.name as keyof typeof returns];
      return total + (amount * (item.percentage / 100) * (returnRate / 100));
    }, 0);
  };

  const totalReturn = calculateTotalReturn();
  const percentageReturn = (totalReturn / amount) * 100;

  // Calculate projected values for the next 12 months
  const monthlyData = Array.from({ length: 13 }, (_, i) => {
    const monthlyReturn = totalReturn / 12;
    return amount + (monthlyReturn * i);
  });

  const chartData: ChartData<'line'> = {
    labels: Array.from({ length: 13 }, (_, i) => `Mês ${i}`),
    datasets: [
      {
        label: 'Projeção de Investimento',
        data: monthlyData,
        borderColor: '#1976d2',
        tension: 0.1,
      },
    ],
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Simulação de Rendimentos
      </Typography>

      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tipo de Investimento</TableCell>
                <TableCell align="right">Alocação (%)</TableCell>
                <TableCell align="right">Retorno Anual (%)</TableCell>
                <TableCell align="right">Valor (R$)</TableCell>
                <TableCell align="right">Retorno (R$)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allocation.map((item) => {
                const returnRate = returns[item.name as keyof typeof returns];
                const allocatedAmount = amount * (item.percentage / 100);
                const returnAmount = allocatedAmount * (returnRate / 100);

                return (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">{item.percentage}</TableCell>
                    <TableCell align="right">{returnRate}</TableCell>
                    <TableCell align="right">
                      {allocatedAmount.toFixed(2)}
                    </TableCell>
                    <TableCell align="right">
                      {returnAmount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={3}><strong>Total</strong></TableCell>
                <TableCell align="right"><strong>{amount.toFixed(2)}</strong></TableCell>
                <TableCell align="right"><strong>{totalReturn.toFixed(2)}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Retorno Anual Esperado: {percentageReturn.toFixed(2)}% ou R$ {totalReturn.toFixed(2)}
        </Typography>

        <Box sx={{ height: 300, mt: 4 }}>
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        </Box>

        <Typography variant="caption" sx={{ display: 'block', mt: 2 }}>
          * Esses valores são baseados em dados históricos e são apenas uma simulação. Os rendimentos futuros podem variar de acordo com o mercado.
        </Typography>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
        <Button variant="contained" onClick={onNext}>
          Próximo
        </Button>
      </Box>
    </Box>
  );
};

export default ReturnCalculator; 