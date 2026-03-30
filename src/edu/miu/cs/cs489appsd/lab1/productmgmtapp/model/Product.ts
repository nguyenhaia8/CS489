/**
 * Product entity for the groceries supply management system.
 * Package mirrors: edu.miu.cs.cs489appsd.lab1.productmgmtapp.model
 */
export class Product {
  private productId: bigint;
  private name: string;
  private dateSupplied: string;
  private quantityInStock: number;
  private unitPrice: number;

  /** Default constructor — empty / zero-initialized product. */
  constructor();
  /** Full constructor with all attributes. */
  constructor(
    productId: bigint,
    name: string,
    dateSupplied: string,
    quantityInStock: number,
    unitPrice: number
  );
  /** Copy constructor — duplicates another product. */
  constructor(source: Product);
  constructor(
    arg1?: bigint | Product,
    name?: string,
    dateSupplied?: string,
    quantityInStock?: number,
    unitPrice?: number
  ) {
    if (arguments.length === 0) {
      this.productId = 0n;
      this.name = "";
      this.dateSupplied = "";
      this.quantityInStock = 0;
      this.unitPrice = 0;
    } else if (arg1 instanceof Product) {
      this.productId = arg1.productId;
      this.name = arg1.name;
      this.dateSupplied = arg1.dateSupplied;
      this.quantityInStock = arg1.quantityInStock;
      this.unitPrice = arg1.unitPrice;
    } else if (
      arg1 !== undefined &&
      name !== undefined &&
      dateSupplied !== undefined &&
      quantityInStock !== undefined &&
      unitPrice !== undefined
    ) {
      this.productId = arg1;
      this.name = name;
      this.dateSupplied = dateSupplied;
      this.quantityInStock = quantityInStock;
      this.unitPrice = unitPrice;
    } else {
      throw new Error("Invalid Product constructor arguments");
    }
  }

  getProductId(): bigint {
    return this.productId;
  }

  setProductId(productId: bigint): void {
    this.productId = productId;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getDateSupplied(): string {
    return this.dateSupplied;
  }

  setDateSupplied(dateSupplied: string): void {
    this.dateSupplied = dateSupplied;
  }

  getQuantityInStock(): number {
    return this.quantityInStock;
  }

  setQuantityInStock(quantityInStock: number): void {
    this.quantityInStock = quantityInStock;
  }

  getUnitPrice(): number {
    return this.unitPrice;
  }

  setUnitPrice(unitPrice: number): void {
    this.unitPrice = unitPrice;
  }
}
