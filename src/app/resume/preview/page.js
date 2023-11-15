"use client";

import { PDFViewer } from "@react-pdf/renderer";

// Lazy load correct template based on store value
import { Template1 } from "@/components/templates/Template1";
import { Template2 } from "@/components/templates/Template2";
import useFormStore from "@/store/useFormStore";

export default function Preview() {
  const data = useFormStore((state) => state);

  return (
    <PDFViewer showToolbar width="100%" height={window.innerHeight}>
      <Template2 data={data} />
    </PDFViewer>
  );
}
