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
import { GitHub, Menu, LightMode, ChevronRight, Code, Cloud, Database } from 'lucide-react';

// Styled components
const StyledGradientBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(45deg, 
    ${alpha(theme.palette.primary.main, 0.15)},
    ${alpha(theme.palette.secondary.main, 0.15)})`,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(2),
  backdropFilter: 'blur(10px)',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800
}));

export default function LandingPage(){
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
    { icon: <Code />, title: 'Desenvolvimento', desc: 'Soluções web modernas' },
    { icon: <Cloud />, title: 'Cloud Native', desc: 'Infraestrutura escalável' },
    { icon: <Database />, title: 'Dados', desc: 'Análise inteligente' }
  ];

  return (
    <Box sx={{ 
      bgcolor: '#0A1929',
      minHeight: '100vh',
      color: 'white'
    }}>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 24 : 0}
        sx={{
          bgcolor: scrolled ? 'rgba(10, 25, 41, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: `1px solid ${alpha('#fff', 0.1)}`,
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
              devmin
            </Typography>

            {!isMobile && (
              <Box sx={{ ml: 4, display: 'flex', gap: 3 }}>
                {['Produtos', 'Docs', 'Preços', 'Sobre', 'Blog'].map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: 'white',
                      '&:hover': {
                        bgcolor: alpha('#fff', 0.1)
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
              <IconButton sx={{ color: 'white' }}>
                <GitHub />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <LightMode />
              </IconButton>
              {isMobile && (
                <IconButton 
                  sx={{ color: 'white' }}
                  onClick={() => setMobileOpen(true)}
                >
                  <Menu />
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
            background: 'radial-gradient(circle at center, #007FFF22 0%, transparent 70%)',
            zIndex: 0
          }
        }}>
          <GradientText variant="h2" component="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.75rem' }, mb: 3 }}>
            Soluções digitais para
            <br />
            o futuro dos negócios
          </GradientText>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: alpha('#fff', 0.7),
              maxWidth: '800px',
              margin: '0 auto',
              mb: 6
            }}
          >
            Desenvolvemos tecnologias inovadoras que impulsionam 
            a transformação digital da sua empresa
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 8 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ChevronRight />}
              sx={{
                bgcolor: '#007FFF',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#0059B2'
                }
              }}
            >
              Começar agora
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: alpha('#fff', 0.2),
                px: 4,
                py: 1.5,
                borderRadius: 2,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: alpha('#fff', 0.1)
                }
              }}
            >
              Documentação
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              position: 'relative',
              zIndex: 1
            }}
          >
            {features.map((feature, index) => (
              <StyledGradientBox key={index}>
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: alpha('#007FFF', 0.1),
                      color: '#007FFF',
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: alpha('#fff', 0.7) }}>
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
            bgcolor: '#0A1929',
            width: 280,
            borderLeft: `1px solid ${alpha('#fff', 0.1)}`
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          {['Produtos', 'Docs', 'Preços', 'Sobre', 'Blog'].map((item) => (
            <Button
              key={item}
              fullWidth
              sx={{
                color: 'white',
                justifyContent: 'flex-start',
                py: 1.5,
                '&:hover': {
                  bgcolor: alpha('#fff', 0.1)
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
