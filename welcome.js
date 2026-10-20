let noCount=0;
const replies = [
 ['Emin misin? 🙈', 'Bir daha düşünür müsün? Çiçekleri senin için hazırladım. 🌷'],
 ['Biraz naz yapıyorum 😌', 'Tamam, biraz naz bu hikâyeye yakışır.'],
 ['Çiçekler mi var? 🌸', 'Hem de yalnızca senin için açan bir bahçe var.'],
 ['Önce bir ipucu 👀', 'İpucu: içinde en sevdiğim fotoğrafımız var.'],
 ['Bir ipucu daha 🤭', 'Bir de seni her gün yeniden seçen biri…'],
 ['Biraz daha düşüneyim 💭', 'Düşün bakalım. Ben burada gülümseyerek bekliyorum.'],
 ['Kahve de olsun ☕', 'Bir kahve, uzun bir sohbet, yanımda sen. Daha ne olsun?'],
 ['Çiçekleri göreyim mi? 🌷', 'Evet’e dokun; küçük bahçemiz seni bekliyor.'],
 ['Son bir naz 🙃', 'O da kabul. Gülüşün yeter.'],
 ['Gülümset beni 🥰', 'Şu an ekrana bakıp gülümsüyorsan, bu sayfa amacına ulaştı.'],
 ['Peki ya yarın? ✨', 'Yarın da aynı soru, aynı cevap: yine sen.'],
 ['Baştan naz yapalım 🙈', 'Acele yok. İstersen başa dönelim; sürprizin hep burada. ♡']
];
document.querySelector('#no').addEventListener('click', () => {
 const [label, message] = replies[noCount % replies.length];
 noCount++;
 document.querySelector('#answer-note').textContent = message;
 document.querySelector('#no').textContent = label;
});
document.querySelector('#yes').addEventListener('click',()=>{document.querySelector('#invitation').hidden=true;document.querySelector('.petals').hidden=true;document.querySelector('#surprise-frame').src='surprise.html';document.querySelector('#surprise').hidden=false;document.title='İyi ki varsın, Hanife ♡';history.replaceState(null,'','#seninle');});

const soundButton = document.querySelector('#sound');
const musicPlayer = document.querySelector('#music-player');
const audio = new Audio('assets/song.mp3');
audio.loop = true;
audio.preload = 'metadata';
let hasTrack = true;
let objectUrl;
const chooser = document.createElement('input');
chooser.type = 'file';
chooser.accept = 'audio/*,.mp3,.m4a,.ogg,.wav';
chooser.hidden = true;
document.body.append(chooser);
const status = document.createElement('p');
status.setAttribute('aria-live', 'polite');
document.querySelector('#youtube').replaceChildren(status);
const selectButton = document.createElement('button');
selectButton.textContent = 'Şarkı dosyasını seç';
selectButton.className = 'button';
selectButton.addEventListener('click', () => chooser.click());
document.querySelector('#youtube').append(selectButton);
function updateButton() {
 soundButton.textContent = audio.paused ? '♫ Şarkımızı çal' : '♫ Şarkıyı durdur';
 soundButton.setAttribute('aria-pressed', String(!audio.paused));
}
async function playTrack() {
 try { await audio.play(); musicPlayer.hidden = true; updateButton(); }
 catch { musicPlayer.hidden = false; status.textContent = 'Ses başlatılamadı. MP3 veya M4A dosyasını tekrar seçebilirsin.'; }
}
chooser.addEventListener('change', () => {
 const file = chooser.files[0];
 if (!file) return;
 audio.pause();
 if (objectUrl) URL.revokeObjectURL(objectUrl);
 objectUrl = URL.createObjectURL(file);
 audio.src = objectUrl;
 hasTrack = true;
 playTrack();
});
soundButton.addEventListener('click', async () => {
 if (!audio.paused) { audio.pause(); updateButton(); return; }
 if (hasTrack) { playTrack(); return; }
 // Yayınlanan sitede kendi ses dosyamız varsa doğrudan onu çal.
 try {
  const response = await fetch('assets/song.mp3', {method:'HEAD'});
  if (response.ok) { audio.src = 'assets/song.mp3'; hasTrack = true; playTrack(); return; }
 } catch {}
 musicPlayer.hidden = false;
 status.textContent = 'Duman — Senden Daha Güzel ses dosyasını seç. Seçtiğin dosya cihazından çalar; hiçbir yere yüklenmez.';
});
audio.addEventListener('pause', updateButton);
audio.addEventListener('play', updateButton);
audio.addEventListener('error', () => {
 hasTrack = false;
 musicPlayer.hidden = false;
 status.textContent = 'Ses dosyası açılamadı. MP3 veya M4A dosyasını seç.';
 updateButton();
});
document.querySelector('#close-music').addEventListener('click', () => {musicPlayer.hidden = true;});
