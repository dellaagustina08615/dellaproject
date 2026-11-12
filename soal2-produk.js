class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }

  getInfo() {
    return "Produk: " + this.nama + ", Harga: " + this.harga;
  }
}

class ProdukElektronik extends Produk {
  constructor(nama, harga, garansiTahun) {
    super(nama, harga);
    this.garansiTahun = garansiTahun;
  }

  getInfo() {
    return "Produk: " + this.nama + ", Harga: " + this.harga + ", Garansi: " + this.garansiTahun + " tahun";
  }
}

let produk1 = new Produk("Buku", "Rp50rb");
console.log(produk1.getInfo());

let produk2 = new ProdukElektronik("Laptop", "Rp10jt", 2);
console.log(produk2.getInfo());