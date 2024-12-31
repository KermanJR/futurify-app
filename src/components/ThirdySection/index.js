import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  alpha,
} from '@mui/material';


import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsApp } from '@mui/icons-material';

import { 
  Search, 
  LayoutPlaneLine, 
  Rocket, 
  Code2,
  Users,
  MessageSquare,
  FileSearch,
  Handshake,
  ChevronLeft, 
  ChevronRight, 
  Check 
} from 'lucide-react';

const MotionBox = motion(Box);

// Ícones personalizados em SVG
const CustomIcons = {
  PlanChoice: ({ color }) => (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      sx={{ width: 48, height: 48, color: color }}
    >
     <svg xmlns="http://www.w3.org/2000/svg" fill={color} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m23.268.716c-.975-.975-2.561-.976-3.535,0l-1.592,1.595s-.008.004-.011.007c-.003.003-.004.008-.007.011l-5.804,5.817c-.838.838-1.318,1.997-1.318,3.182v1.172c0,.276.224.5.5.5h1.172c1.185,0,2.344-.48,3.182-1.318l7.414-7.431c.473-.473.732-1.101.732-1.768s-.26-1.296-.732-1.768Zm-8.121,10.259c-.651.651-1.554,1.025-2.475,1.025h-.672v-.672c0-.921.374-1.823,1.025-2.475l5.46-5.472,2.121,2.121-5.46,5.472Zm7.414-7.431l-1.248,1.25-2.121-2.121,1.248-1.25c.584-.584,1.537-.584,2.121,0,.283.283.439.659.439,1.061s-.156.777-.439,1.061Zm.115,12.47c.179.644.096,1.318-.234,1.899-.328.581-.864.999-1.508,1.178-.645.178-1.317.096-1.899-.235l-.751-.425c-1.063,1.041-2.358,1.796-3.783,2.208v.861c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5v-.861c-1.425-.412-2.72-1.167-3.783-2.208l-.752.426c-.582.33-1.258.409-1.898.234-.644-.179-1.18-.597-1.509-1.179-.329-.58-.412-1.255-.233-1.898.178-.644.597-1.18,1.178-1.509l.748-.423c-.166-.691-.25-1.391-.25-2.082s.084-1.391.25-2.082l-.748-.423c-.581-.33-1-.865-1.178-1.509-.179-.644-.096-1.318.234-1.899.328-.581.864-.999,1.508-1.178.645-.176,1.317-.096,1.899.235l.751.425c1.063-1.041,2.358-1.796,3.783-2.208v-.861c0-1.379,1.121-2.5,2.5-2.5s2.5,1.121,2.5,2.5v1c0,.276-.224.5-.5.5s-.5-.224-.5-.5v-1c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v1.246c0,.23-.158.432-.383.486-1.513.366-2.878,1.162-3.947,2.303-.159.168-.41.205-.611.094l-1.086-.614c-.349-.198-.754-.246-1.14-.142-.386.107-.707.358-.904.707-.198.349-.248.753-.141,1.139.106.387.357.708.707.906l1.082.612c.201.114.298.351.234.572-.207.727-.312,1.464-.312,2.19s.104,1.464.312,2.19c.063.222-.033.458-.234.572l-1.083.613c-.349.197-.6.519-.706.904-.107.387-.058.791.14,1.139.198.35.52.601.905.708.386.106.79.057,1.139-.141l1.087-.615c.202-.11.453-.074.611.094,1.069,1.141,2.435,1.937,3.947,2.303.225.055.383.256.383.486v1.246c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5v-1.246c0-.23.158-.432.383-.486,1.513-.366,2.878-1.162,3.947-2.303.158-.169.409-.206.611-.094l1.086.614c.35.198.755.248,1.14.142.386-.107.707-.358.904-.707.198-.349.248-.753.141-1.14-.106-.386-.357-.707-.706-.904l-1.083-.613c-.201-.114-.298-.351-.234-.572.207-.727.312-1.464.312-2.19,0-.471-.044-.944-.129-1.409-.051-.271.129-.532.4-.582.267-.054.532.128.582.4.098.524.146,1.06.146,1.591,0,.691-.084,1.391-.25,2.082l.748.423c.581.329,1,.865,1.178,1.509Zm-14.398-5.48c-.444,1.128-.349,2.402.269,3.59.294.564.767,1.037,1.331,1.331,1.187.617,2.461.712,3.59.269,1.079-.426,1.92-1.297,2.306-2.39.094-.26.379-.396.639-.305.26.093.396.378.305.639-.483,1.366-1.534,2.454-2.883,2.985-.587.232-1.204.347-1.829.347-.866,0-1.747-.221-2.588-.658-.746-.387-1.37-1.011-1.757-1.757-.754-1.447-.864-3.017-.312-4.417.531-1.349,1.619-2.399,2.985-2.883.261-.093.545.044.639.305.092.261-.045.546-.305.639-1.093.386-1.964,1.227-2.39,2.306Z"/>
</svg>
    </Box>
  ),
  Planning: ({ color }) => (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      sx={{ width: 48, height: 48, color: color }}
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill={color} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m2.805,18.562c-1.114-.617-1.805-1.791-1.805-3.062v-7.5h19v8.5c0,.276.224.5.5.5s.5-.224.5-.5V6.5c0-2.481-2.019-4.5-4.5-4.5h-.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5H6V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-.5C2.019,2,0,4.019,0,6.5v9c0,1.635.889,3.144,2.32,3.938.077.042.16.062.242.062.176,0,.346-.093.438-.257.134-.242.046-.546-.195-.68Zm1.695-15.562h12c1.93,0,3.5,1.57,3.5,3.5v.5H1v-.5c0-1.93,1.57-3.5,3.5-3.5Zm19.5,20.5c0,.276-.224.5-.5.5s-.5-.224-.5-.5c0-1.637-.994-3.026-2.596-3.627l-5.08-1.905c-.195-.073-.324-.26-.324-.468v-4.893c0-.789-.535-1.471-1.244-1.586-.451-.074-.886.045-1.227.336-.336.286-.529.703-.529,1.143v7.424c0,.42-.235.795-.614.978-.378.182-.818.133-1.147-.128,0,0-1.715-1.368-1.719-1.372-.606-.562-1.553-.529-2.115.073-.565.604-.534,1.557.064,2.118l1.633,1.551c.325.309.107.856-.342.856-.127,0-.249-.048-.341-.135l-1.64-1.548c-1-.937-1.048-2.518-.106-3.524.928-.994,2.481-1.054,3.489-.15.003.003,1.698,1.349,1.698,1.349l.138-.067v-7.424c0-.734.321-1.429.881-1.905.56-.476,1.306-.678,2.035-.562,1.188.194,2.084,1.3,2.084,2.573v4.546l4.756,1.783c2.001.751,3.244,2.5,3.244,4.563Z"/>
</svg>
    </Box>
  ),
  Design: ({ color }) => (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      sx={{ width: 48, height: 48, color: color }}
    >
     <svg xmlns="http://www.w3.org/2000/svg" fill={color} id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m24,8.5v7c0,2.481-2.019,4.5-4.5,4.5h-7v3h3.5c.276,0,.5.224.5.5s-.224.5-.5.5h-8c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h3.5v-3h-7c-2.481,0-4.5-2.019-4.5-4.5V6.5C0,4.019,2.019,2,4.5,2h10c.276,0,.5.224.5.5s-.224.5-.5.5H4.5c-1.93,0-3.5,1.57-3.5,3.5v9c0,1.93,1.57,3.5,3.5,3.5h15c1.93,0,3.5-1.57,3.5-3.5v-7c0-.276.224-.5.5-.5s.5.224.5.5Zm-12.758,1.529C19.095.891,19.129.855,19.146.838c1.119-1.116,2.937-1.116,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.221,8.826c-.048.796-.348,1.545-.897,2.145-.661.723-1.603,1.138-2.582,1.138h-4c-.485,0-.928-.224-1.214-.612-.287-.39-.369-.879-.225-1.343.5-1.61,2.039-4.469,4.632-4.97.182-.035.366-.039.549-.046Zm1.19.15c.421.126.826.311,1.186.581.578.436.986,1.011,1.202,1.658l2.065-2.216c-.328-1.184-1.369-2.066-2.596-2.184-.655.763-1.291,1.502-1.857,2.161Zm1.557,3.09c-.06-.674-.405-1.281-.974-1.71-.613-.463-1.391-.647-2.133-.502-2.13.411-3.433,2.886-3.867,4.284-.049.157-.021.322.075.453.096.13.246.205.409.205h4c.7,0,1.372-.296,1.845-.812.479-.523.708-1.205.645-1.918Zm1.05-6.124c1.156.316,2.12,1.143,2.61,2.237l4.829-5.184c.737-.74.737-1.924.012-2.652-.727-.727-1.91-.728-2.637,0-.069.079-2.444,2.842-4.814,5.6Z"/>
</svg>
    </Box>
  ),
  Support: ({ color }) => (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      sx={{ width: 48, height: 48, color: color }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill={color}  id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="M22,16.051V7.5c0-2.481-2.019-4.5-4.5-4.5H6.5c-2.481,0-4.5,2.019-4.5,4.5v8.551c-1.14,.232-2,1.242-2,2.449,0,1.378,1.122,2.5,2.5,2.5H21.5c1.378,0,2.5-1.122,2.5-2.5,0-1.207-.86-2.217-2-2.449ZM6.5,4h11c1.93,0,3.5,1.57,3.5,3.5v8.5h-5.5c-.133,0-.26,.053-.354,.146l-.854,.854h-4.586l-.854-.854c-.094-.094-.221-.146-.354-.146H3V7.5c0-1.93,1.57-3.5,3.5-3.5Zm15,16H2.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5h5.793l.854,.854c.094,.094,.221,.146,.354,.146h5c.133,0,.26-.053,.354-.146l.854-.854h5.793c.827,0,1.5,.673,1.5,1.5s-.673,1.5-1.5,1.5ZM7.5,14c1.378,0,2.5-1.122,2.5-2.5v-3c0-1.378-1.122-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v3c0,1.378,1.122,2.5,2.5,2.5Zm-1.5-5.5c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5v3c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-3Zm10.5,5.5c1.378,0,2.5-1.122,2.5-2.5v-3c0-1.378-1.122-2.5-2.5-2.5s-2.5,1.122-2.5,2.5v3c0,1.378,1.122,2.5,2.5,2.5Zm-1.5-5.5c0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5v3c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-3Zm-4.335-.006c-.205-.186-.221-.501-.035-.706l1.471-1.624c.281-.311,.9-.082,.9,.335v7c0,.276-.224,.5-.5,.5s-.5-.224-.5-.5V7.764l-.629,.695c-.186,.206-.502,.219-.706,.035Z"/>
</svg>
    </Box>
  ),
  Payment: ({ color }) => (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      sx={{ width: 48, height: 48, color: color }}
    >
      <path
        d="M8 16h32M12 8h24a4 4 0 014 4v24a4 4 0 01-4 4H12a4 4 0 01-4-4V12a4 4 0 014-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="28" r="6" fill="currentColor" fillOpacity="0.2" />
    </Box>
  ),
};

// Dados atualizados para um processo de venda mais direto
const steps = [
  {
    icon: MessageSquare,
    title: 'Primeiro Contato',
    description: 'Conversamos sobre seu projeto e entendemos suas necessidades específicas.',
    color: '#2563eb',
    highlights: [
      'Discussão informal via WhatsApp',
      'Entendimento inicial do projeto',
      'Esclarecimento de dúvidas',
      'Análise preliminar de requisitos'
    ],
  },
  {
    icon: FileSearch,
    title: 'Proposta Personalizada',
    description: 'Desenvolvemos uma proposta sob medida com base nas suas necessidades.',
    color: '#0891b2',
    highlights: [
      'Escopo detalhado do projeto',
      'Cronograma estimado',
      'Investimento necessário',
      'Tecnologias recomendadas'
    ],
  },
  {
    icon: Handshake,
    title: 'Alinhamento Final',
    description: 'Refinamos os detalhes e alinhamos as expectativas para o projeto.',
    color: '#4f46e5',
    highlights: [
      'Ajustes na proposta',
      'Definição de prazos',
      'Formas de pagamento',
      'Acordo de trabalho'
    ],
  },
  {
    icon: Rocket,
    title: 'Início do Projeto',
    description: 'Começamos o desenvolvimento do seu projeto com toda a dedicação necessária.',
    color: '#7c3aed',
    highlights: [
      'Kickoff do projeto',
      'Definição de sprints',
      'Acompanhamento contínuo',
      'Entregas progressivas'
    ],
  },
];


const ContactButton = ({ type }) => {
  const whatsappNumber = "5511999999999"; // Substitua pelo seu número
  const whatsappMessage = "Olá! Vi seu site e gostaria de conversar sobre um projeto.";
  const formUrl = "/contato"; // Substitua pela URL do seu formulário

  const handleClick = () => {
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    } else {
      window.location.href = formUrl;
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      startIcon={type === 'whatsapp' ? <WhatsApp size={20} /> : null}
      sx={{
        px: 4,
        py: 2,
        borderRadius: 2,
        textTransform: 'none',
        fontSize: '1rem',
        fontWeight: 600,
        backgroundColor: type === 'whatsapp' ? '#25D366' : '#2563eb',
        '&:hover': {
          backgroundColor: type === 'whatsapp' ? '#128C7E' : '#1d4ed8',
          transform: 'translateY(-2px)',
          transition: 'all 0.2s',
        },
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
        mx: 1,
      }}
    >
      {type === 'whatsapp' ? 'Conversar no WhatsApp' : 'Preencher Formulário'}
    </Button>
  );
};



const ProgressLine = ({ progress }) => (
  <Box sx={{ 
    position: 'absolute',
    top: '50%',
    left: 0,
    height: 4,
    width: `${progress}%`,
    bgcolor: 'primary.main',
    transform: 'translateY(-50%)',
    zIndex: 2,
    transition: 'width 0.6s ease-in-out',
    borderRadius: 2,
    boxShadow: '0 0 8px rgba(0, 98, 255, 0.3)',
  }} />
);
const StepPoint = ({ active, completed, color, onClick, children, icon: Icon }) => (
  <Box
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      width: '100%',
      position: 'relative',
    }}
  >
    <motion.div
      initial={false}
      animate={{
        scale: active ? 1.1 : 1,

      }}
      transition={{ duration: 0.3 }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: '16px',
          bgcolor: completed || active ? color : 'grey.100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: completed || active ? 'white' : 'grey.500',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transform: active ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'all 0.3s ease',
        }}
      >
        {completed ? (
          <Check size={24} />
        ) : (
          <Icon size={24} />
        )}
      </Box>
    </motion.div>
    <Typography
      variant="body2"
      sx={{
        color: active ? color : 'text.secondary',
        fontWeight: active ? 600 : 500,
        textAlign: 'center',
        maxWidth: 120,
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </Typography>
  </Box>
);

const StepContent = ({ step, isActive }) => {
  const Icon = step.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          alignItems: 'center',
          p: 4,
          borderRadius: 4,
          bgcolor: 'white',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Box
          sx={{
            flex: '0 0 auto',
            p: 4,
            borderRadius: 3,
            bgcolor: alpha(step.color, 0.08),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={48} color={step.color} />
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              color: step.color,
              fontWeight: 700,
              mb: 2,
            }}
          >
            {step.title}
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            {step.description}
          </Typography>

          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
            }}
          >
            {step.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    border: `1px solid ${alpha(step.color, 0.2)}`,
                    bgcolor: alpha(step.color, 0.05),
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Check size={16} color={step.color} />
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      color: 'text.primary',
                    }}
                  >
                    {highlight}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
const NavigationButton = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'next' ? ChevronRight : ChevronLeft;
  
  return (
    <Button
      variant={direction === 'next' ? 'contained' : 'outlined'}
      onClick={onClick}
      disabled={disabled}
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: 2,
        textTransform: 'none',
        fontSize: '0.9rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        transition: 'all 0.2s ease',
        bgcolor: direction === 'next' ? '#transparent' : 'transparent',
        '&:hover': {
          bgcolor: direction === 'next' ? '#1d4ed8' : alpha('#2563eb', 0.05),
          transform: 'translateY(-2px)',
        },
      }}
    >
      {direction === 'prev' && <Icon size={18} />}
      {direction === 'next' ? 'Próxima Etapa' : 'Etapa Anterior'}
      {direction === 'next' && <Icon size={18} />}
    </Button>
  );
};

const InteractiveStepDiagram = () => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Step points */}
      <Box 
        sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          mb: 6,
          px: { xs: 2, md: 8 },
          position: 'relative',
        }}
      >
        {/* ... (mantenha as linhas de conexão e progresso como estão) */}
        
        {steps.map((step, index) => (
          <StepPoint
            key={index}
            active={index === activeStep}
            completed={index < activeStep}
            color={step.color}
            onClick={() => setActiveStep(index)}
            icon={step.icon}
          >
            {step.title}
          </StepPoint>
        ))}
      </Box>

      {/* Step content */}
      <Box sx={{ mb: 4 }}>
        <StepContent step={steps[activeStep]} />
      </Box>

      {/* Navigation and CTA */}
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          mt: 4,
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
          <NavigationButton 
            direction="prev" 
            onClick={prevStep}
            disabled={activeStep === 0}
          />
          <NavigationButton 
            direction="next" 
            onClick={nextStep}
            disabled={activeStep === steps.length - 1}
          />
        </Box>

        {/* Call to action */}
        <Box sx={{ 
          mt: 4,
          p: 4,
          borderRadius: 2,
          bgcolor: 'rgba(37, 99, 235, 0.05)',
          textAlign: 'center',
          width: '100%',
          maxWidth: 'md',
        }}>
          <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
            Pronto para começar seu projeto?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Escolha a forma mais conveniente para iniciarmos nossa conversa
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <ContactButton type="whatsapp" />
            <ContactButton type="form" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
  
  export default function HowItWorks() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
      <Box
        sx={{
          background: '#f8fafc',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 0% 0%, rgba(0, 98, 255, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(0, 200, 83, 0.03) 0%, transparent 50%)
            `,
            zIndex: 0,
          }}
        />
  
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: '#0062FF',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  '& span': {
                    background:  "#0062FF",
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  },
                }}
              >
                Como <span>Funciona</span>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                Um processo simplificado em quatro etapas para transformar sua presença digital
              </Typography>
             
            </Box>
            <InteractiveStepDiagram/>
  
            {/* Benefits Section */}
            <Box sx={{ mt: 8 }}>
        
              {/* CTA Section */}
              <Box
                sx={{
                  mt: 6,
                  textAlign: 'center',
                }}
              >
              
              </Box>
            </Box>
          </MotionBox>
        </Container>
      </Box>
    );
  }