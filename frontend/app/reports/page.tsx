import SectionHeader from "../../components/layout/SectionHeader";
import SessionReport from "../../components/reports/SessionReport";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Professional Section Header replaced old h1 */}
      <SectionHeader
        title="Reports"
        subtitle="AI Generated Session Reports"
      />

      {/* Your Existing Session Report Card Components */}
      <SessionReport />
    </div>
  );
}