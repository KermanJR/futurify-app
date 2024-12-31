import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  Button,
  Typography,
  IconButton,
  Toolbar,
  Drawer,
  useTheme,
  useMediaQuery,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import { motion } from 'framer-motion';

const StyledGradientBox = styled(motion.div)(({ theme }) => ({
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  boxShadow: '0 10px 30px rgba(0, 127, 255, 0.1)',
  border: '1px solid rgba(0, 127, 255, 0.2)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 40px rgba(0, 127, 255, 0.2)',
  }
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #007FFF, #0059B2)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
  textShadow: '0 2px 10px rgba(0, 127, 255, 0.3)'
}));

const AnimatedBackground = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  zIndex: -1,
});

const AnimatedShape = styled(motion.div)({
  position: 'absolute',
  background: 'linear-gradient(45deg, rgba(0, 127, 255, 0.1), rgba(0, 89, 178, 0.1))',
  borderRadius: '50%',
});

const FirstSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <CodeIcon fontSize="large" />, title: 'Desenvolvimento', desc: 'Soluções web modernas' },
    { icon: <CloudIcon fontSize="large" />, title: 'Cloud Native', desc: 'Infraestrutura escalável' },
    { icon: <StorageIcon fontSize="large" />, title: 'Dados', desc: 'Análise inteligente' }
  ];

  return (
    <Box sx={{ 
      bgcolor: '#ffffff',
      minHeight: '100vh',
      color: '#1a1a1a',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <AnimatedBackground>
        <AnimatedShape
          style={{ top: '-5%', left: '-10%', width: '500px', height: '500px' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <AnimatedShape
          style={{ bottom: '-10%', right: '-5%', width: '400px', height: '400px' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </AnimatedBackground>

      <AppBar 
        position="fixed" 
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: `1px solid ${alpha('#007FFF', 0.1)}`,
          transition: 'all 0.3s'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #007FFF, #0059B2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Futurify
            </Typography>

            {!isMobile && (
              <Box sx={{ ml: 4, display: 'flex', gap: 3 }}>
                {['Produtos', 'Docs', 'Preços', 'Sobre', 'Blog'].map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: '#1a1a1a',
                      '&:hover': {
                        bgcolor: alpha('#007FFF', 0.1)
                      }
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <IconButton sx={{ color: '#1a1a1a' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton sx={{ color: '#1a1a1a' }}>
                <LightModeIcon />
              </IconButton>
              {isMobile && (
                <IconButton 
                  sx={{ color: '#1a1a1a' }}
                  onClick={() => setMobileOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="xl" sx={{ pt: { xs: 12, md: 20 }, pb: 8 }}>
        <Box sx={{ 
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, rgba(0, 127, 255, 0.08) 0%, transparent 70%)',
            zIndex: 0
          }
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText variant="h2" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 3 }}>
              Soluções digitais para
              <br />
              o futuro dos negócios
            </GradientText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#666666',
                maxWidth: '800px',
                margin: '0 auto',
                mb: 6
              }}
            >
              Desenvolvemos tecnologias inovadoras que impulsionam 
              a transformação digital da sua empresa
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 8 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ChevronRightIcon />}
                sx={{
                  bgcolor: '#007FFF',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 127, 255, 0.3)',
                  '&:hover': {
                    bgcolor: '#0059B2',
                    boxShadow: '0 6px 25px rgba(0, 127, 255, 0.4)',
                  }
                }}
              >
                Quero um orçamento
              </Button>
            </Box>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              position: 'relative',
              zIndex: 1
            }}
          >
            {features.map((feature, index) => (
              <StyledGradientBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: 3,
                      bgcolor: alpha('#007FFF', 0.1),
                      color: '#007FFF',
                      mb: 3
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#1a1a1a' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666666' }}>
                    {feature.desc}
                  </Typography>
                </Box>
              </StyledGradientBox>
            ))}
          </Box>
        </Box>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: '#ffffff',
            width: 280,
            borderLeft: `1px solid ${alpha('#007FFF', 0.1)}`
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          {['Produtos', 'Docs', 'Preços', 'Sobre', 'Blog'].map((item) => (
            <Button
              key={item}
              fullWidth
              sx={{
                color: '#1a1a1a',
                justifyContent: 'flex-start',
                py: 1.5,
                '&:hover': {
                  bgcolor: alpha('#007FFF', 0.1)
                }
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default FirstSection;