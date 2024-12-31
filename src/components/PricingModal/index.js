// Imports adicionais necessários
import {
    Dialog,
    DialogContent,
    Grid,
    Card,
    CardContent,
    IconButton,
    Box,
    Typography,
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
  import BusinessIcon from '@mui/icons-material/Business';
  import StorefrontIcon from '@mui/icons-material/Storefront';
  import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
  
  export const PricingModal = ({ open, onClose }) => {
    const plans = [
      {
        title: 'Básico',
        price: '97',
        icon: <BusinessIcon sx={{ fontSize: 40 }} />,
        color: '#007FFF',
        features: [
          'Site institucional',
          'Até 5 páginas',
          'Domínio personalizado',
          'Hospedagem incluída',
          'Certificado SSL',
          'Suporte básico',
        ],
      },
      {
        title: 'Profissional',
        price: '197',
        icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
        color: '#0059B2',
        popular: true,
        features: [
          'Loja virtual completa',
          'Até 15 páginas',
          'Painel administrativo',
          'Integração com pagamentos',
          'Relatórios de vendas',
          'Suporte prioritário',
        ],
      },
      {
        title: 'Enterprise',
        price: '397',
        icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
        color: '#084c94',
        features: [
          'Solução personalizada',
          'Páginas ilimitadas',
          'Integrações avançadas',
          'API personalizada',
          'Consultoria dedicada',
          'Suporte 24/7',
        ],
      },
    ];
  
    return (
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: '#0A1929',
            borderRadius: 3,
            backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0, 127, 255, 0.1) 0%, transparent 70%)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(45deg, #007FFF, #0059B2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Escolha seu Plano
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Planos flexíveis para cada necessidade
            </Typography>
          </Box>
  
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {plans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.03)',
                    borderRadius: 4,
                    border: `1px solid ${alpha(plan.color, 0.2)}`,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 8px 40px ${alpha(plan.color, 0.2)}`,
                    },
                    ...(plan.popular && {
                      border: `2px solid ${plan.color}`,
                      boxShadow: `0 0 20px ${alpha(plan.color, 0.3)}`,
                    }),
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: -30,
                        transform: 'rotate(45deg)',
                        bgcolor: plan.color,
                        px: 4,
                        py: 0.5,
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                        POPULAR
                      </Typography>
                    </Box>
                  )}
  
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: 2,
                        bgcolor: alpha(plan.color, 0.1),
                        color: plan.color,
                        mb: 2,
                      }}
                    >
                      {plan.icon}
                    </Box>
  
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {plan.title}
                    </Typography>
  
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 800, color: plan.color }}
                      >
                        R${plan.price}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.7)', ml: 1 }}>
                        /mês
                      </Typography>
                    </Box>
  
                    <Box sx={{ mb: 3 }}>
                      {plan.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1,
                            color: 'rgba(255,255,255,0.7)',
                          }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{ mr: 1, color: plan.color, fontSize: 20 }}
                          />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
  
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: plan.color,
                        py: 1.5,
                        '&:hover': {
                          bgcolor: alpha(plan.color, 0.8),
                        },
                      }}
                    >
                      Começar Agora
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    );
  };
  
 
  
