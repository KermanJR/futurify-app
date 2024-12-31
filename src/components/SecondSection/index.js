import React from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const features = [
  {
    icon: <SpeedIcon />,
    title: 'Desenvolvimento Ágil',
    desc: 'Sprints semanais com entregas contínuas e resultados mensuráveis',
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
  },
  {
    icon: <SecurityIcon />,
    title: 'Suporte Enterprise',
    desc: 'Atendimento 24/7 com SLA garantido e equipe dedicada',
    gradient: 'linear-gradient(135deg, #4ECDC4, #556270)',
  },
  {
    icon: <CodeIcon />,
    title: 'Stack Moderna',
    desc: 'Tecnologias de ponta com arquitetura escalável e performática',
    gradient: 'linear-gradient(135deg, #A8E6CF, #3EECAC)',
  },
];

export default function EnhancedSecondSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #0F172A, #1E293B)',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Header Section */}
          <Grid item xs={12}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontWeight: 800,
                  mb: 8,
                  background: 'linear-gradient(to right, #60A5FA, #34D399)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Inovação em Cada Pixel
              </Typography>
            </MotionBox>
          </Grid>

          {/* Features Section */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <MotionBox
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: feature.gradient,
                        },
                      }}
                    >
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: '12px',
                              background: feature.gradient,
                              color: 'white',
                            }}
                          >
                            {feature.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                              {feature.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'gray.300' }}>
                              {feature.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      mb: 4,
                      textAlign: 'center',
                      background: 'linear-gradient(to right, #60A5FA, #34D399)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                    }}
                  >
                    Comece sua Jornada
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 2,
                      px: 4,
                      background: 'linear-gradient(to right, #60A5FA, #34D399)',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 30px rgba(96, 165, 250, 0.3)',
                      },
                    }}
                  >
                    Agendar Demonstração
                  </Button>

                  <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                      }}
                    >
                      <span role="img" aria-label="sparkles">✨</span>
                      Primeira consulta gratuita
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        color: 'rgba(255,255,255,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                      }}
                    >
                      <span role="img" aria-label="rocket">🚀</span>
                      Resposta em até 24h
                    </Typography>
                  </Box>

                  {/* Testimonial Section */}
                  <Box
                    sx={{
                      mt: 4,
                      p: 3,
                      borderRadius: '16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: 'italic',
                        color: 'rgba(255,255,255,0.8)',
                        mb: 2,
                      }}
                    >
                      "Uma experiência transformadora para nosso negócio"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'linear-gradient(to right, #60A5FA, #34D399)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        JD
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          João Silva
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                          CEO, TechCorp
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        </Grid>

        {/* Bottom Stats Section */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {[
              { number: '500+', label: 'Projetos Entregues' },
              { number: '98%', label: 'Satisfação' },
              { number: '24/7', label: 'Suporte' },
            ].map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      background: 'linear-gradient(to right, #60A5FA, #34D399)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: 'rgba(255,255,255,0.7)', mt: 1 }}
                  >
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}