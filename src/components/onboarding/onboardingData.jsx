import React from "react";
import { Box, Link, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BalanceIcon from "@mui/icons-material/Balance";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export const onboardingSteps = [
  {
    title: (
      <>
        Welcome to the <br />
        Battery Performance Dashboard!
      </>
    ),
    icon: <EmojiEventsIcon fontSize="large" color="primary" />,
    text: (
      <Typography align="center" sx={{ fontSize: "1.1rem" }}>
        <b>Compare and explore</b>
        <br />
        <br />
        the performance of
        <br />
        <b>21 real-world batteries</b>
        <br />
        ranked from best to worst.
      </Typography>
    ),
  },
  {
    title: (
      <>
        Real Data,
        <br />
        Real Batteries
      </>
    ),
    icon: <BatteryChargingFullIcon fontSize="large" color="primary" />,
    text: (
      <Box sx={{ textAlign: "center" }}>
        This dashboard features data from
        <br />
        <b>21 batteries</b>, tested over <br />
        <b> 8985 cycles</b> and{" "}
        <b>
          <br />
          1,591,470 data points
        </b>
        .<br />
        <br />
        Data provided by{" "}
        <Link
          href="https://zenodo.org/records/7658813"
          target="_blank"
          rel="noopener noreferrer"
          underline="never"
          color="primary"
          sx={{
            fontWeight: "bold",
            display: "inline-flex",
            alignItems: "baseline",
          }}
        >
          UL Research
          <OpenInNewIcon
            fontSize="small"
            sx={{
              ml: 0.5,
              verticalAlign: "text-bottom",
              position: "relative",
              top: 1,
            }}
          />
        </Link>
      </Box>
    ),
  },
  {
    title: (
      <>
        Two Groups
        <br />
        Different Stress Tests
      </>
    ),
    icon: <GroupWorkIcon fontSize="large" color="primary" />,
    text: (
      <Box sx={{ textAlign: "center" }}>
        Batteries are divided into two groups:
        <Box sx={{ mt: 3 }}>
          <Typography component="div" fontWeight="bold" color="primary">
            Normal
          </Typography>
          <Typography component="div">Standard conditions</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography component="div" fontWeight="bold" color="primary">
            Reduced
          </Typography>
          <Typography component="div">
            Lower capacity or higher stress
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          Each group was tested under different stressors and charge/discharge
          rates.
        </Box>
      </Box>
    ),
  },
  {
    title: (
      <>
        How Are Batteries
        <br />
        Ranked?
      </>
    ),
    icon: (
      <Box sx={{ display: "flex", gap: 2, pt: 1, justifyContent: "center" }}>
        <DiamondIcon color="primary" />
        <TrendingUpIcon color="primary" />
        <BalanceIcon color="primary" />
      </Box>
    ),
    text: (
      <Box sx={{ textAlign: "center" }}>
        Each battery is scored and ranked by:
        <Box sx={{ mt: 3 }}>
          <Typography component="div" fontWeight="bold" color="primary">
            Durability
          </Typography>
          <Typography component="div">How many cycles it lasts</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography component="div" fontWeight="bold" color="primary">
            Resilience
          </Typography>
          <Typography component="div">How well it keeps its power</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography component="div" fontWeight="bold" color="primary">
            Balanced
          </Typography>
          <Typography component="div">A mix of both</Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography component="span" fontWeight="bold">
            Use the filters at the top to switch between rankings.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    title: <>See Rankings</>,
    icon: <BatteryChargingFullIcon fontSize="large" color="primary" />,
    text: (
      <Box sx={{ textAlign: "center" }}>
        <Typography
          component="div"
          fontWeight="bold"
          color="primary"
          sx={{ fontSize: "1.15rem" }}
        >
          Ready to see which batteries perform best?
        </Typography>
        <br />
        <Typography component="div" sx={{ mt: 2 }}>
          <b>Click "Got it!" below</b> to view the full battery rankings and
          start exploring.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography component="div" color="text.secondary">
            You can always revisit the onboarding anytime from the menu.
          </Typography>
        </Box>
      </Box>
    ),
  },
];
