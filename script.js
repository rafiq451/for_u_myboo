const author = 'husnun';
document.getElementById('hati').innerHTML = `Made with &#10084;&#65039; by ${author}`;

const swals = Swal.mixin({
  cancelButtonColor: '#d33',

  confirmButtonColor: '#3085d6',
});

async function mulai() {
  await swals.fire('😥', 'Selamat Melanjutkan perjalanmu');

  await swals.fire('Karna aku pun begitu 😣');

  await swals.fire('Selamat Tinggal untuk kisah kita 💔');
  await swals.fire('Dan setelah ini tidak ada lagi aku dan kamu setelah nya 😔');
  await swals.fire('Tetaplah bahagia 😁');
  await swals.fire('Terlepas dari hari buruk yang kamu lalui bersamaku 🖤');
  await swals.fire('Jangan lagi memilih orang yang salah seperti aku 😈');
  await swals.fire('Kamu janji ya harus jaga diri baik baik');
  await swals.fire('Harus bisa lebih kuat 💪');
  await swals.fire('Dan harus bisa temuin yang lebih baik daripada aku 🧑');
  await swals.fire('Berbahagialah... ❤ ');
  await swals.fire('Husnun sayang Ara ❤😊 ');
}
