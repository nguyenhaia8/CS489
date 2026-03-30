import { Product } from "./model/Product";

/**
 * Executable CLI application — edu.miu.cs.cs489appsd.lab1.productmgmtapp
 */
export class ProductMgmtApp {
  /**
   * Sorts by product name (ascending), then unit price (descending),
   * and prints JSON, XML, and CSV representations.
   */
  static printProducts(products: Product[]): void {
    const sorted = [...products].sort((a, b) => {
      const byName = a.getName().localeCompare(b.getName(), undefined, {
        sensitivity: "base",
      });
      if (byName !== 0) return byName;
      return b.getUnitPrice() - a.getUnitPrice();
    });

    console.log("=== JSON ===");
    console.log(ProductMgmtApp.toJson(sorted));

    console.log("\n=== XML ===");
    console.log(ProductMgmtApp.toXml(sorted));

    console.log("\n=== CSV ===");
    console.log(ProductMgmtApp.toCsv(sorted));
  }

  private static toJson(products: Product[]): string {
    const rows = products.map((p) => ({
      productId: p.getProductId().toString(),
      name: p.getName(),
      dateSupplied: p.getDateSupplied(),
      quantityInStock: p.getQuantityInStock(),
      unitPrice: p.getUnitPrice(),
    }));
    return JSON.stringify(rows, null, 2);
  }

  private static escapeXml(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  private static toXml(products: Product[]): string {
    const lines = ['<?xml version="1.0" encoding="UTF-8"?>', "<products>"];
    for (const p of products) {
      lines.push("  <product>");
      lines.push(`    <productId>${p.getProductId().toString()}</productId>`);
      lines.push(`    <name>${ProductMgmtApp.escapeXml(p.getName())}</name>`);
      lines.push(`    <dateSupplied>${p.getDateSupplied()}</dateSupplied>`);
      lines.push(`    <quantityInStock>${p.getQuantityInStock()}</quantityInStock>`);
      lines.push(`    <unitPrice>${p.getUnitPrice()}</unitPrice>`);
      lines.push("  </product>");
    }
    lines.push("</products>");
    return lines.join("\n");
  }

  private static toCsv(products: Product[]): string {
    const header =
      "productId,name,dateSupplied,quantityInStock,unitPrice";
    const esc = (s: string) => {
      if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
      return s;
    };
    const body = products
      .map((p) =>
        [
          p.getProductId().toString(),
          esc(p.getName()),
          p.getDateSupplied(),
          String(p.getQuantityInStock()),
          String(p.getUnitPrice()),
        ].join(",")
      )
      .join("\n");
    return `${header}\n${body}`;
  }

  static main(): void {
    const products: Product[] = [
      new Product(
        31288741190182539912n,
        "Banana",
        "2026-01-24",
        124,
        0.55
      ),
      new Product(
        29274582650152771644n,
        "Apple",
        "2025-12-09",
        18,
        1.09
      ),
      new Product(
        91899274600128155167n,
        "Carrot",
        "2026-03-31",
        89,
        2.99
      ),
      new Product(
        31288741190182539913n,
        "Banana",
        "2026-02-13",
        240,
        0.65
      ),
    ];

    ProductMgmtApp.printProducts(products);
  }
}

if (require.main === module) {
  ProductMgmtApp.main();
}
