import { Box } from "@mui/material";
import { useWorkbenchState } from "../../hooks/useWorkbenchState";
import ProcessPanel from "../process/ProcessPanel";
import PdfPreviewPanel from "../pdf/PdfPreviewPanel";
import ComplianceTableCard from "../compliance/ComplianceTableCard";

const WorkbenchLayout = () => {
  const workbench = useWorkbenchState();

  return (
    <Box
      id="workbench"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 3, md: 4 },
      }}
    >
      {/* Top row: pipeline + PDF preview */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr", // mobile: stacked
            md: "minmax(0, 360px) minmax(0, 1.3fr)", // desktop: sidebar + main
          },
          gap: { xs: 3, md: 4 },
          alignItems: "stretch", // 👈 Changed from flex-start to stretch
          minHeight: { md: 750 }, // 👈 Added minimum height for better proportions
        }}
      >
        <ProcessPanel workbench={workbench} />
        <PdfPreviewPanel workbench={workbench} />
      </Box>

      {/* Full-width table under everything */}
      <Box
        sx={{
          minHeight: 400, // 👈 Slightly taller for better content display
        }}
      >
        <ComplianceTableCard workbench={workbench} />
      </Box>
    </Box>
  );
};

export default WorkbenchLayout;