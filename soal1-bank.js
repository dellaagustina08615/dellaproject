class BankAccount {
  constructor(nama, saldoAwal) {
    this.nama = nama;
    this.saldo = saldoAwal;
    this.saldoAwal = saldoAwal;
  }
  deposit(jumlah) {
    this.saldo += jumlah;
    this.jumlahDeposit = jumlah;
  }
  tarik(jumlah) {
    this.saldo -= jumlah;
    this.jumlahTarik = jumlah;
  }
  tampilkan() {
    console.log("Nama Pemilik: " + this.nama);
    console.log("Saldo Awal: " + this.saldoAwal);
    console.log("Deposit: " + this.jumlahDeposit);
    console.log("Penarikan: " + this.jumlahTarik);
    console.log("Saldo Akhir: " + this.saldo);
  }
}

let akun = new BankAccount("Della", 1000000);
akun.deposit(500000);
akun.tarik(200000);
akun.tampilkan();