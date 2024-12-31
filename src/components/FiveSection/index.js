import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
  Chip,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SpeedIcon from '@mui/icons-material/Speed';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced styled components
const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #007FFF 0%, #0059B2 50%, #003380 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 900,
  letterSpacing: '-0.02em',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #007FFF, #0059B2)',
    borderRadius: '2px',
  }
}));

// Add custom Stepper styling
const StyledStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepLabel-root': {
    padding: theme.spacing(2),
  },
  '& .MuiStepLabel-label': {
    fontWeight: 600,
    '&.Mui-active': {
      color: '#007FFF',
    }
  },
  '& .MuiStepIcon-root': {
    width: '32px',
    height: '32px',
    '&.Mui-active': {
      color: '#007FFF',
    },
    '&.Mui-completed': {
      color: '#0059B2',
    }
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    transition: 'all 0.2s ease',
    backgroundColor: 'rgba(0, 127, 255, 0.02)',
    '&:hover': {
      backgroundColor: 'rgba(0, 127, 255, 0.05)',
    },
    '&.Mui-focused': {
      backgroundColor: '#fff',
      boxShadow: '0 0 0 2px rgba(0, 127, 255, 0.2)',
    }
  }
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '8px',
  padding: '20px 12px',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  '&.MuiChip-colorPrimary': {
    background: 'linear-gradient(135deg, #007FFF 0%, #0059B2 100%)',
  }
}));

const AnimatedGlow = styled(motion.div)({
  position: 'absolute',
  width: '200px',
  height: '200px',
  background: 'radial-gradient(circle, rgba(0, 127, 255, 0.1) 0%, rgba(0, 127, 255, 0) 70%)',
  borderRadius: '50%',
  pointerEvents: 'none',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(0, 127, 255, 0.08)',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #007FFF, #0059B2)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 32px rgba(0, 0, 0, 0.08)',
    }
  }
}));

// Enhance the WhatsApp button
const WhatsAppButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '12px',
  fontWeight: 600,
  letterSpacing: '0.5px',
  textTransform: 'none',
  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
  '&:hover': {
    background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.6)',
  },
}));

const BackgroundAnimation = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 0,
  }));
  
  const AnimatedIcon = styled(motion.div)(({ theme }) => ({
    position: 'absolute',
    color: theme.palette.primary.light,
    opacity: 0.1,
  }));

const AnimatedTextField = motion(StyledTextField);
const AnimatedButton = motion(Button);

const FifthSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: [5000, 50000],
    technologies: [],
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBudgetChange = (event, newValue) => {
    setFormData({ ...formData, budget: newValue });
  };

  const handleTechChange = (tech) => {
    const updatedTech = formData.technologies.includes(tech)
      ? formData.technologies.filter(t => t !== tech)
      : [...formData.technologies, tech];
    setFormData({ ...formData, technologies: updatedTech });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpenSnackbar(true);
    setActiveStep(0);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: [5000, 50000],
      technologies: [],
      message: '',
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/67992369127', '_blank');
  };

  const backgroundIcons = [
    { Icon: CodeIcon, size: 60, x: '10%', y: '20%' },
    { Icon: DesignServicesIcon, size: 80, x: '80%', y: '60%' },
    { Icon: SpeedIcon, size: 70, x: '60%', y: '10%' },
    { Icon: CodeIcon, size: 50, x: '30%', y: '80%' },
    { Icon: DesignServicesIcon, size: 90, x: '90%', y: '30%' },
  ];

  const steps = [
    {
      label: 'Informações Pessoais',
      content: (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <AnimatedTextField
              fullWidth
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AnimatedTextField
              fullWidth
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </Grid>
          <Grid item xs={12}>
            <AnimatedTextField
              fullWidth
              label="Telefone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </Grid>
        </Grid>
      ),
    },
    {
      label: 'Detalhes do Projeto',
      content: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Tipo de Projeto</Typography>
            <RadioGroup
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              <FormControlLabel value="website" control={<Radio />} label="Website" />
              <FormControlLabel value="mobileApp" control={<Radio />} label="Aplicativo Móvel" />
              <FormControlLabel value="webApp" control={<Radio />} label="Aplicação Web" />
              <FormControlLabel value="ecommerce" control={<Radio />} label="E-commerce" />
              <FormControlLabel value="outros" control={<Radio />} label="Outros" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>Orçamento Estimado (R$)</Typography>
            <Slider
              value={formData.budget}
              onChange={handleBudgetChange}
              valueLabelDisplay="auto"
              min={5000}
              max={100000}
              step={1000}
            />
            <Typography variant="body2" color="textSecondary">
              R$ {formData.budget[0]} - R$ {formData.budget[1]}
            </Typography>
          </Grid>
        </Grid>
      ),
    },
    {
      label: 'Tecnologias',
      content: (
        <Grid container spacing={2}>
          {['React', 'Angular', 'Vue', 'Node.js', 'Python', 'Java', 'PHP', 'MongoDB', 'MySQL', 'AWS', 'Azure', 'Google Cloud'].map((tech) => (
            <Grid item key={tech}>
              <Chip
                label={tech}
                onClick={() => handleTechChange(tech)}
                color={formData.technologies.includes(tech) ? "primary" : "default"}
                clickable
              />
            </Grid>
          ))}
        </Grid>
      ),
    },
    {
      label: 'Mensagem Adicional',
      content: (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AnimatedTextField
              fullWidth
              label="Mensagem"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Grid>
        </Grid>
      ),
    },
  ];

  return (

    <Box sx={{ 
      bgcolor: '#f8f9fa',
      py: 10,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 127, 255, 0.03) 0%, rgba(0, 127, 255, 0) 70%)',
        pointerEvents: 'none',
      }
    }}>
            <BackgroundAnimation>
        {backgroundIcons.map((icon, index) => (
          <AnimatedIcon
            key={index}
            style={{ top: icon.y, left: icon.x }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1,
              rotate: [0, 360],
              transition: { 
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }
            }}
          >
            <icon.Icon style={{ fontSize: icon.size }} />
          </AnimatedIcon>
        ))}
      </BackgroundAnimation>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <GradientText variant="h2" component="h2" sx={{ mb: 2 }}>
                Vamos Criar Algo Incrível Juntos
              </GradientText>
              <Typography variant="h5" sx={{ color: '#666666' }}>
                Conte-nos sobre seu projeto e vamos transformar sua visão em realidade.
              </Typography>
            </Box>
    
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <StyledPaper elevation={3}>
                  <StyledStepper  activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                        <StepContent>
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5 }}
                            >
                              {step.content}
                            </motion.div>
                          </AnimatePresence>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <AnimatedButton
                                variant="contained"
                                onClick={index === steps.length - 1 ? handleSubmit : handleNext}
                                sx={{ mt: 1, mr: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {index === steps.length - 1 ? 'Enviar' : 'Próximo'}
                              </AnimatedButton>
                              <AnimatedButton
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Voltar
                              </AnimatedButton>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </StyledStepper >
                </StyledPaper>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledPaper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Precisa de uma Resposta Rápida?
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4 }}>
                    Estamos a apenas uma mensagem de distância. Clique abaixo para iniciar uma conversa no WhatsApp e obter respostas imediatas para suas dúvidas.
                  </Typography>
                  <WhatsAppButton
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleWhatsAppClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    component={motion.button}
                  >
                    Conversar no WhatsApp
                  </WhatsAppButton>
                </StyledPaper>
              </Grid>
            </Grid>
          </Container>

          <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, #007FFF, #0059B2)',
          zIndex: 2,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
    
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message="Sua solicitação foi enviada com sucesso! Entraremos em contato em breve."
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          />
        </Box>
      );
    };
    
    export default FifthSection;