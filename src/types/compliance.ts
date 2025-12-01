export type ComplianceStatus = "Yes" | "No" | "Partial";
export type MandatoryOptional = "Mandatory" | "Optional" | "Not specified" | "";

export interface ComplianceRow {
  id: string;                // requirement_id
  chunkId: string;           // chunk_id
  outlineNumber: string;     // outline_number like "1", "2", ...
  text: string;              // original requirement text
  rephrasedRequirement: string;
  compliant: ComplianceStatus | string;  // keep flexible; backend may send plain "Yes"/"No"
  mandatoryOptional: MandatoryOptional | string;
  confidence: number;
  pageNumber?: number | null;
}

export type PipelineStage =
  | "idle"
  | "file_selected"
  | "extracting_text"
  | "fixing_arabic"
  | "chunking"
  | "running_ai"
  | "ready"
  | "error";
