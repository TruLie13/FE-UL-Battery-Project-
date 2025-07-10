import { IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
import { tooltipContent } from "../../tooltipContent.jsx";
import InfoDialog from "./InfoDialog.Component.jsx";

export default function InfoTooltip({ tooltipKey }) {
  const [open, setOpen] = useState(false);
  const content = tooltipContent[tooltipKey];
  if (!content) return null;

  return (
    <>
      <IconButton
        size="small"
        sx={{
          ml: 0.5,
          color: "grey.500", // Use a color from the theme's grey palette
          "&:hover": {
            color: "grey.300", // Optional: change color on hover
          },
          "&:focus": {
            outline: "none", // Disable the focus outline
          },
        }}
        onClick={() => setOpen(true)}
      >
        <InfoOutlinedIcon fontSize="inherit" />
      </IconButton>
      <InfoDialog
        open={open}
        onClose={() => setOpen(false)}
        title={content.title}
        body={content.body}
      />
    </>
  );
}
