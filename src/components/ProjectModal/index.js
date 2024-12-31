import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Grid,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';

const ModalContent = styled(motion.div)(({ theme }) => ({
  background: '#ffffff',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  maxWidth: 800,
  width: '90%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
}));

const CloseButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  minWidth: 'auto',
  padding: theme.spacing(1),
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

const PreviewImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 8,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
});

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
}));



const ProjectModal = ({ project, onClose }) => {
  return (
    <ModalContent
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>

      <Typography variant="h4" component="h3" sx={{ mb: 2, color: 'primary.main', fontWeight: 'bold' }}>
        {project.title}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <PreviewImage src={project.previewImage} alt={project.title} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Desafio
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {project.challenge}
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Solução
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {project.solution}
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Resultado
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {project.result}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Tecnologias Utilizadas
        </Typography>
        {project.technologies.map((tech, index) => (
          <TechChip key={index} label={tech} />
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          endIcon={<LaunchIcon />}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Projeto ao Vivo
        </Button>
        <Typography variant="body2" color="text.secondary">
          Concluído em: {project.completionDate}
        </Typography>
      </Box>
    </ModalContent>
  );
};

export default ProjectModal;