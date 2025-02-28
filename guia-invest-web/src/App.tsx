import React, { useState, useMemo } from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  Container, 
  Box, 
  Paper, 
  Typography, 
  Stepper, 
  Step, 
  StepLabel,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Logo from './components/Logo';

// Create components directory and import components
import InvestmentProfile from './components/InvestmentProfile';
import PortfolioRecommendation from './components/PortfolioRecommendation';
import ReturnCalculator from './components/ReturnCalculator';
import CustomCalculator from './components/CustomCalculator';

const steps = [
  'Determine Investment Profile',
  'Portfolio Recommendation',
  'Return Calculation',
  'Custom Calculator',
];

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');
  const [activeStep, setActiveStep] = useState(0);
  const [investorProfile, setInvestorProfile] = useState<'conservative' | 'moderate' | 'aggressive' | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState<number>(0);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#00D37F', // XP's green
            contrastText: '#fff',
          },
          secondary: {
            main: '#0C2C52', // XP's dark blue
          },
          background: {
            default: mode === 'dark' ? '#0A1929' : '#F5F5F5',
            paper: mode === 'dark' ? '#0C2C52' : '#FFFFFF',
          },
          text: {
            primary: mode === 'dark' ? '#FFFFFF' : '#0C2C52',
          },
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h4: {
            fontWeight: 700,
          },
          h5: {
            fontWeight: 600,
          },
          h6: {
            fontWeight: 600,
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'dark' ? '#0C2C52' : '#FFFFFF',
                boxShadow: 'none',
                borderBottom: '1px solid',
                borderColor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 12,
              },
            },
          },
        },
      }),
    [mode]
  );

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <InvestmentProfile onNext={handleNext} onProfileSelect={setInvestorProfile} />;
      case 1:
        return (
          <PortfolioRecommendation
            profile={investorProfile}
            onNext={handleNext}
            onBack={handleBack}
            onAmountChange={setInvestmentAmount}
          />
        );
      case 2:
        return (
          <ReturnCalculator
            profile={investorProfile}
            amount={investmentAmount}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return <CustomCalculator onBack={handleBack} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Logo height={40} />
            </Box>
            <IconButton 
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              color="inherit"
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 10, mb: 4, flex: 1 }}>
          <Paper 
            elevation={mode === 'dark' ? 2 : 1} 
            sx={{ 
              p: 4,
              background: theme.palette.background.paper,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{ color: theme.palette.text.primary }}
            >
              Investment Guide
            </Typography>
            <Stepper 
              activeStep={activeStep} 
              sx={{ 
                pt: 3, 
                pb: 5,
                '& .MuiStepLabel-label': {
                  color: theme.palette.text.primary,
                },
                '& .MuiStepIcon-root': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box sx={{ mt: 2 }}>
              {getStepContent(activeStep)}
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 