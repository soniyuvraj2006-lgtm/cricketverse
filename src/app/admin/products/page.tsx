import Link from "next/link";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl tracking-wider">PRODUCTS</h1>
        <Link href="/admin/products/new" className="rounded-full bg-electric px-4 py-2 text-sm font-semibold text-pitch">
          + Add Product
        </Link>
      </div>
      <div className="glass-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-glass-border text-left text-off-white/60">
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 15).map((p) => (
              <tr key={p.id} className="border-b border-glass-border/50">
                <td className="p-4">{p.name}</td>
                <td className="p-4 capitalize">{p.category.replace("-", " ")}</td>
                <td className="p-4 font-mono">{formatPrice(p.price)}</td>
                <td className="p-4">{p.stockCount}</td>
                <td className="p-4">
                  <span className={`text-xs ${p.inStock ? "text-success" : "text-error"}`}>
                    {p.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
