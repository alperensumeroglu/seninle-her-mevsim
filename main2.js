const notes = ['Sen gülünce, dünya biraz daha güzel bir yer.','Günün en güzel kısmı, senden gelen küçücük bir haber bile olabilir.','Seninle henüz yaşamadığımız ne çok güzel gün var.','Bazen mutluluk sadece yanında oturabilmektir.','Bu sayfanın en sevdiğim yanı, sana ait olması.'];
let noteIndex = 0;
document.querySelector('#next-note').addEventListener('click', () => { noteIndex = (noteIndex + 1) % notes.length; document.querySelector('#love-note').textContent = notes[noteIndex]; });
