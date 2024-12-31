import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LaunchIcon from "@mui/icons-material/Launch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineIcon from "@mui/icons-material/Timeline";
import PieChartIcon from "@mui/icons-material/PieChart";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(2),
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  maxWidth: "100%",
  "& > *": {
    // Ensure all direct children respect container width
    maxWidth: "100%",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
    transition: "all 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 40px rgba(0,0,0,0.1), 
                0 2px 10px rgba(0,0,0,0.05), 
                0 0 1px rgba(0,0,0,0.1)`,
    "&:before": {
      transform: "translateX(10%) translateY(-10%)",
    },
  },
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 800,
  fontSize: "3.5rem",
  lineHeight: 1.2,
  position: "relative",
  display: "inline-block",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -8,
    left: 0,
    width: "40%",
    height: 4,
    background: "linear-gradient(90deg, #2196F3 0%, transparent 100%)",
    borderRadius: 2,
  },
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(4, 0),
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    top: 0,
    width: 100,
    height: "100%",
    zIndex: 2,
    pointerEvents: "none",
  },
  "&:before": {
    left: 0,
    background: "linear-gradient(90deg, #f8f9fa 0%, transparent 100%)",
  },
  "&:after": {
    right: 0,
    background: "linear-gradient(-90deg, #f8f9fa 0%, transparent 100%)",
  },
}));

const GraphicElement = styled(Box)(({ theme }) => ({
  position: "absolute",
  opacity: 0.1,
  transition: "all 0.3s ease",
  "$:hover &": {
    opacity: 0.15,
    transform: "scale(1.1)",
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontWeight: 600,
  // Ensure title wraps properly
  whiteSpace: "normal",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  // Add ellipsis after 2 lines
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

// Add styled component for description text
const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  // Ensure text wraps properly
  whiteSpace: "normal",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  // Add ellipsis after 4 lines
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "white",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  width: 48,
  height: 48,
  "&:hover": {
    backgroundColor: "white",
    boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
  },
  zIndex: 300,
}));

const ResultsSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(null);

  const results = [
    {
      title: "Sistema Sanegrande | Enterhome",
      metric: "R$ 2.5M",
      metricLabel: "Economia Anual",
      description:
        "Um dashboard intuitivo e completo para gerenciamento empresarial, centralizando dados e métricas essenciais em tempo real. Permite controle financeiro, gestão de projetos, monitoramento de desempenho e tomada de decisões estratégicas. Ideal para otimizar processos e impulsionar a produtividade da sua empresa.",
      impacts: [
        "99.99% de disponibilidade do sistema",
        "Automação de 85% dos processos manuais",
      ],
      color: "#2196F3",
      icon: TrendingUpIcon,
    },
    {
      title: "Sistema Sanegrande | Enterhome",
      metric: "R$ 2.5M",
      metricLabel: "Economia Anual",
      description:
        "Transformação digital completa do sistema financeiro para um dos maiores bancos do país, com implementação de tecnologias de ponta e integração total.",
      impacts: [
        "45% de redução no tempo de processamento",
        "99.99% de disponibilidade do sistema",
        "ROI positivo em 6 meses",
        "Automação de 85% dos processos manuais",
      ],
      color: "#2196F3",
      icon: TrendingUpIcon,
    },

    {
      title: "Sistema Sanegrande | Enterhome",
      metric: "R$ 2.5M",
      metricLabel: "Economia Anual",
      description:
        "Transformação digital completa do sistema financeiro para um dos maiores bancos do país, com implementação de tecnologias de ponta e integração total.",
      impacts: [
        "45% de redução no tempo de processamento",
        "99.99% de disponibilidade do sistema",
        "ROI positivo em 6 meses",
        "Automação de 85% dos processos manuais",
      ],
      color: "#2196F3",
      icon: TrendingUpIcon,
    },

    
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(results.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(results.length / 3) - 1 : prev - 1
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "#f8f9fa",
        py: 12,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          style={{ position: "absolute", opacity: 0.03 }}
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#000"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(135deg, #1976D2 0%, #2196F3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -12,
                  left: "25%",
                  width: "50%",
                  height: 4,
                  background:
                    "linear-gradient(90deg, transparent, #2196F3, transparent)",
                  borderRadius: 2,
                },
              }}
            >
              Resultados que Transformam
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                maxWidth: "800px",
                mx: "auto",
                mt: 4,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Conheça o impacto real que nossas soluções trazem para os
              negócios, com resultados mensuráveis e transformação digital
              comprovada
            </Typography>
          </motion.div>
        </Box>

        <CarouselContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "24px",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {results.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <Box
                      key={index}
                      sx={{
                        minWidth: "calc(33.333% - 16px)",
                        maxWidth: "calc(33.333% - 16px)", // Add maxWidth
                        flexShrink: 0,
                      }}
                      onMouseEnter={() => setIsHovered(index)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <StyledCard>
                        <GraphicElement
                          sx={{
                            top: -20,
                            right: -20,
                            transform:
                              isHovered === index ? "scale(1.1)" : "scale(1)",
                          }}
                        >
                          <Icon
                            sx={{
                              fontSize: 120,
                              color: result.color,
                              opacity: 0.1,
                            }}
                          />
                        </GraphicElement>

                

                        <CardTitle
                          variant="h5"
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            color: result.color,
                          }}
                        >
                          {result.title}
                        </CardTitle>

                        <Divider sx={{ my: 2 }} />

                        <DescriptionText
                          variant="body1"
                          sx={{
                            color: "text.secondary",
                            mb: 3,
                            lineHeight: 1.6,
                          }}
                        >
                          {result.description}
                        </DescriptionText>

                        <Box
                          sx={{
                            mt: "auto",
                            maxWidth: "100%", // Ensure impact items don't overflow
                          }}
                        >
                          {result.impacts.map((impact, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              style={{ maxWidth: '100%' }} // E
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  display: "flex",
                                  alignItems: 'flex-start',
                                  mb: 1.5,
                                  py: 0.5,
                                  px: 1,
                                  borderRadius: 1,
                                  backgroundColor:
                                    isHovered === index
                                      ? `${result.color}08`
                                      : "transparent",
                                  transition: "all 0.3s ease",
                                  whiteSpace: 'normal',
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  // Add text wrapping styles
                                  '& > span': {
                                    flex: 1,
                                    minWidth: 0, // Allow text to shrink below flex item's content size
                                  },
                                  "&:before": {
                                    content: '""',
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    bgcolor: result.color,
                                    mr: 1.5,
                                    flexShrink: 0,
                                  },
                                }}
                              >
                                {impact}
                              </Typography>
                            </motion.div>
                          ))}
                        </Box>

                        <Button
                          endIcon={<LaunchIcon />}
                          variant="outlined"
                          sx={{
                            mt: 3,
                            alignSelf: "flex-start",
                            color: result.color,
                            borderColor: result.color,
                            "&:hover": {
                              backgroundColor: `${result.color}10`,
                              borderColor: result.color,
                            },
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden",
                            "&:after": {
                              content: '""',
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              top: 0,
                              left: 0,
                              background: `linear-gradient(90deg, transparent, ${result.color}20, transparent)`,
                              transform: "translateX(-100%)",
                            },
                            "&:hover:after": {
                              transform: "translateX(100%)",
                              transition: "transform 0.8s ease",
                            },
                          }}
                        >
                          Ver Prévia
                        </Button>
                      </StyledCard>
                    </Box>
                  );
                })}
              </Box>
            </motion.div>
          </AnimatePresence>

          <NavigationButton
            onClick={prevSlide}
            sx={{ left: { xs: -8, md: -24 } }}
          >
            <ChevronLeftIcon />
          </NavigationButton>
          <NavigationButton
            onClick={nextSlide}
            sx={{ right: { xs: -8, md: -24 } }}
          >
            <ChevronRightIcon />
          </NavigationButton>
        </CarouselContainer>

        <Box sx={{ mt: 8, textAlign: "center", position: "relative" }}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                borderRadius: 2,
                background: "linear-gradient(135deg, #1976D2 0%, #2196F3 100%)",
                boxShadow: "0 8px 24px rgba(33, 150, 243, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #1565C0 0%, #1976D2 100%)",
                  boxShadow: "0 12px 32px rgba(33, 150, 243, 0.4)",
                },
                position: "relative",
                overflow: "hidden",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transform: "translateX(-100%)",
                },
                "&:hover:after": {
                  transform: "translateX(100%)",
                  transition: "transform 0.8s ease",
                },
              }}
            >
              Explore Mais Casos de Sucesso
            </Button>
          </motion.div>
        </Box>

        {/* Decorative bottom pattern */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            opacity: 0.05,
            background: "linear-gradient(0deg, #1976D2 0%, transparent 100%)",
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
          }}
        />
      </Container>
    </Box>
  );
};

export default ResultsSection;
