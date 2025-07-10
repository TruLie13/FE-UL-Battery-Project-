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
      <IconButton size="small" sx={{ ml: 0.5 }} onClick={() => setOpen(true)}>
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
