import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
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

interface CustomCalculatorProps {
  onBack: () => void;
}

type CalculationType = 'montante' | 'taxa' | 'capital' | 'periodo';

const CustomCalculator: React.FC<CustomCalculatorProps> = ({ onBack }) => {
  const [calculationType, setCalculationType] = useState<CalculationType>('montante');
  const [capital, setCapital] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [period, setPeriod] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateMontante = () => {
    const c = parseFloat(capital);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(period);
    return c * (1 + r * t);
  };

  const calculateTaxa = () => {
    const c = parseFloat(capital);
    const m = parseFloat(amount);
    const t = parseFloat(period);
    return ((m / c - 1) / t) * 100;
  };

  const calculateCapital = () => {
    const m = parseFloat(amount);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(period);
    return m / (1 + r * t);
  };

  const calculatePeriodo = () => {
    const c = parseFloat(capital);
    const m = parseFloat(amount);
    const r = parseFloat(rate) / 100;
    return (m / c - 1) / r;
  };

  const handleCalculate = () => {
    let calculatedResult: number;

    switch (calculationType) {
      case 'montante':
        calculatedResult = calculateMontante();
        break;
      case 'taxa':
        calculatedResult = calculateTaxa();
        break;
      case 'capital':
        calculatedResult = calculateCapital();
        break;
      case 'periodo':
        calculatedResult = calculatePeriodo();
        break;
      default:
        return;
    }

    setResult(calculatedResult);
  };

  const generateChartData = () => {
    if (!result) return null;

    let data: number[] = [];
    const periods = Array.from({ length: 13 }, (_, i) => i);

    switch (calculationType) {
      case 'montante':
        data = periods.map(p => parseFloat(capital) * (1 + (parseFloat(rate) / 100) * p));
        break;
      case 'taxa':
        data = periods.map(p => parseFloat(capital) * (1 + (result / 100) * p));
        break;
      case 'capital':
        data = periods.map(p => result * (1 + (parseFloat(rate) / 100) * p));
        break;
      case 'periodo':
        const r = parseFloat(rate) / 100;
        data = periods.map(p => parseFloat(capital) * (1 + r * p));
        break;
    }

    return {
      labels: periods.map(p => `Mês ${p}`),
      datasets: [
        {
          label: 'Projeção',
          data,
          borderColor: '#1976d2',
          tension: 0.1,
        },
      ],
    };
  };

  const chartData = generateChartData();

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Calculadora Personalizada
      </Typography>

      <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Tipo de Cálculo</InputLabel>
              <Select
                value={calculationType}
                label="Tipo de Cálculo"
                onChange={(e) => setCalculationType(e.target.value as CalculationType)}
              >
                <MenuItem value="montante">Calcular Montante</MenuItem>
                <MenuItem value="taxa">Calcular Taxa</MenuItem>
                <MenuItem value="capital">Calcular Capital</MenuItem>
                <MenuItem value="periodo">Calcular Período</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {calculationType !== 'capital' && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Capital Inicial (R$)"
                type="number"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
              />
            </Grid>
          )}

          {calculationType !== 'taxa' && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Taxa (%)"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Grid>
          )}

          {calculationType !== 'periodo' && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Período (meses)"
                type="number"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              />
            </Grid>
          )}

          {(calculationType === 'taxa' || calculationType === 'capital' || calculationType === 'periodo') && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Montante Final (R$)"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              onClick={handleCalculate}
              sx={{ mt: 2 }}
            >
              Calcular
            </Button>
          </Grid>
        </Grid>

        {result !== null && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Resultado:
              {calculationType === 'montante' && ` R$ ${result.toFixed(2)}`}
              {calculationType === 'taxa' && ` ${result.toFixed(2)}%`}
              {calculationType === 'capital' && ` R$ ${result.toFixed(2)}`}
              {calculationType === 'periodo' && ` ${result.toFixed(2)} meses`}
            </Typography>

            {chartData && (
              <Box sx={{ height: 300, mt: 4 }}>
                <Line data={chartData} options={{ maintainAspectRatio: false }} />
              </Box>
            )}
          </Box>
        )}
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
        <Button variant="outlined" onClick={onBack}>
          Voltar
        </Button>
      </Box>
    </Box>
  );
};

export default CustomCalculator; 