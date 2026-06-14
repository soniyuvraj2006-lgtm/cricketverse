import { StaticPage } from "@/components/layout/static-page";

const sizes = [
  { size: "S", chest: "36-38\"", length: "27\"", fit: "Slim" },
  { size: "M", chest: "38-40\"", length: "28\"", fit: "Regular" },
  { size: "L", chest: "40-42\"", length: "29\"", fit: "Regular" },
  { size: "XL", chest: "42-44\"", length: "30\"", fit: "Relaxed" },
  { size: "XXL", chest: "44-46\"", length: "31\"", fit: "Relaxed" },
];

export default function SizeGuidePage() {
  return (
    <StaticPage title="GUIDE" titleOutline="JERSEY SIZE" subtitle="All measurements are in inches. Measure your chest at the widest point.">
      <div className="bucks-panel overflow-x-auto p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-cream/10 text-left font-mono text-xs uppercase tracking-wider text-cream/50">
              <th className="p-4">Size</th>
              <th className="p-4">Chest</th>
              <th className="p-4">Length</th>
              <th className="p-4">Fit</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((s) => (
              <tr key={s.size} className="border-b border-cream/10">
                <td className="p-4 font-mono font-bold text-gold">{s.size}</td>
                <td className="p-4 text-secondary">{s.chest}</td>
                <td className="p-4 text-secondary">{s.length}</td>
                <td className="p-4 text-secondary">{s.fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bucks-panel mt-6">
        <h2 className="font-display font-bold uppercase tracking-wider text-cream">Sizing Tips</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 font-body text-sm text-secondary">
          <li>Replica jerseys tend to run slightly smaller — consider sizing up</li>
          <li>Fan Edition jerseys have a relaxed fit</li>
          <li>When in doubt, size up for comfort</li>
        </ul>
      </div>
    </StaticPage>
  );
}
