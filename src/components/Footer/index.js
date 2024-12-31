import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #001F3F 0%, #003366 100%)',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
}));

const FooterContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #007FFF, #0059B2)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 800,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#ffffff',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#ffffff',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-3px)',
  },
}));

const AnimatedShape = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  background: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '50%',
}));

const NewsletterInput = styled('input')(({ theme }) => ({
  padding: '10px 15px',
  borderRadius: '25px 0 0 25px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#ffffff',
  '&::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
}));

const NewsletterButton = styled(Button)(({ theme }) => ({
  borderRadius: '0 25px 25px 0',
  padding: '10px 20px',
  backgroundColor: theme.palette.primary.main,
  color: '#ffffff',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <AnimatedShape
        style={{ top: '-5%', left: '-5%', width: '300px', height: '300px' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <AnimatedShape
        style={{ bottom: '-5%', right: '-5%', width: '250px', height: '250px' }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <FooterContent maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <GradientText variant="h4" gutterBottom>
              Futurify
            </GradientText>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Transformando ideias em realidade digital. Criamos soluções inovadoras que impulsionam o sucesso dos nossos clientes.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SocialIcon aria-label="facebook">
                <FacebookIcon />
              </SocialIcon>
              <SocialIcon aria-label="twitter">
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon aria-label="linkedin">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon aria-label="instagram">
                <InstagramIcon />
              </SocialIcon>
              <SocialIcon aria-label="github">
                <GitHubIcon />
              </SocialIcon>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Links Rápidos
            </Typography>
            <Grid container spacing={2}>
              {['Início', 'Serviços', 'Portfólio', 'Sobre Nós', 'Contato'].map((link) => (
                <Grid item xs={6} key={link}>
                  <FooterLink href="#" variant="body2">{link}</FooterLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Fique por dentro
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Assine nossa newsletter para receber as últimas novidades e ofertas especiais.
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <NewsletterInput placeholder="Seu e-mail" />
              <NewsletterButton variant="contained">
                Assinar
              </NewsletterButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © 2024 Futurify. Todos os direitos reservados.
          </Typography>
          <Box>
            <FooterLink href="#" variant="body2" sx={{ mr: 2 }}>Termos de Uso</FooterLink>
            <FooterLink href="#" variant="body2">Política de Privacidade</FooterLink>
          </Box>
        </Box>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;