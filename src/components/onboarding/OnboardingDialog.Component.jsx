import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MobileStepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { onboardingSteps } from "./onboardingData.jsx";

export default function OnboardingDialog({ open, onClose }) {
  const [step, setStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (open) {
      setStep(0);
    }
  }, [open]);

  const handleDialogClose = (event, reason) => {
    if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      fullScreen={isMobile}
      maxWidth="xs"
      fullWidth
      disableEscapeKeyDown
      BackdropProps={{
        sx: {
          backgroundColor: {
            xs: "rgba(0,0,0,0.7)",
            sm: "rgba(0,0,0,0.92)",
          },
        },
      }}
      aria-labelledby="onboarding-dialog-title"
      aria-describedby="onboarding-dialog-description"
    >
      <Box
        sx={{
          minHeight: isMobile ? "100vh" : 525,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: isMobile ? 2 : 3,
          py: isMobile ? 5 : 3,
        }}
      >
        <DialogTitle
          id="onboarding-dialog-title"
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "1.3rem" },
            lineHeight: 1.2,
            pb: 0,
          }}
        >
          {onboardingSteps[step].title}
          <Box pt={1}>{onboardingSteps[step].icon}</Box>
        </DialogTitle>
        <DialogContent
          id="onboarding-dialog-description"
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            pb: 0,
            pt: 0,
            minHeight: { xs: 120, sm: 160 },
          }}
        >
          {onboardingSteps[step].text}
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "space-between",
            width: "100%",
            pb: isMobile ? 1 : 2,
            pt: isMobile ? 1 : 2,
          }}
        >
          <Button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            size="large"
          >
            Back
          </Button>
          <MobileStepper
            variant="dots"
            steps={onboardingSteps.length}
            position="static"
            activeStep={step}
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              background: "none",
              ".MuiMobileStepper-dotActive": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
            nextButton={null}
            backButton={null}
          />
          {step < onboardingSteps.length - 1 ? (
            <Button onClick={() => setStep((s) => s + 1)} size="large">
              Next
            </Button>
          ) : (
            <Button onClick={onClose} variant="contained" size="large">
              Got it!
            </Button>
          )}
        </DialogActions>
      </Box>
    </Dialog>
  );
}
