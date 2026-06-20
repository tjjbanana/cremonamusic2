// Assign images
document.getElementById('navLogoImg').src = 'images/photos/logo.png';
document.getElementById('navLogoMobile').src = 'images/photos/logo_mobile.png';
document.getElementById('footerLogoImg').src = 'images/photos/logo.png';
document.getElementById('heroBg').style.backgroundImage = "url('images/photos/hero_bg.jpg')";
document.getElementById('recitalImg').src = 'images/photos/recital.jpg';
document.getElementById('shopStringsImg').src = 'images/photos/shop_strings.jpg';
document.getElementById('shopPianoImg').src = 'images/photos/shop_piano.jpg';
// Gallery removed

// Gallery removed

// Carousel
(function() {
  var slides = Array.from(document.querySelectorAll('#carouselViewport .carousel-slide'));
  if (!slides.length) return;
  var idx = 0;
  function updateC() {
    var total = slides.length;
    slides.forEach(function(slide, i) {
      var diff = (i - idx + total) % total;
      slide.style.opacity = '';
      if (diff === 0) slide.className = 'carousel-slide center';
      else if (diff === 1) slide.className = 'carousel-slide right';
      else if (diff === total - 1) slide.className = 'carousel-slide left';
      else if (diff === 2) slide.className = 'carousel-slide far-right';
      else if (diff === total - 2) slide.className = 'carousel-slide far-left';
      else { slide.className = 'carousel-slide'; slide.style.opacity = '0'; }
    });
  }
  updateC();
  setInterval(function() { idx = (idx + 1) % slides.length; updateC(); }, 4000);
})();

// Modal data
var lessons = {
  violin: {
    icon: '<img src="images/icons/violin.png" alt="violin" width="107.5" height="131.6">',
    en: {
      title: 'Violin',
      subtitle: 'Age 4 and above · One-on-One · All Levels',
      desc: 'Violin lessons at Cremona are designed to teach students of all ages from beginner to diploma level.\nOur unique violin curriculum not only complements the ABRSM and Trinity syllabus, it would enable you to achieve up to Grade 8 more quickly without having the pressure of taking external exams at each grade. We believe this can increase your interest in music and reduce exam stress.\nIf you are interested in learning to play the violin only but not taking ABRSM or Trinity exams, our curriculum allows you to learn and master the right skills in a structured manner as you could be assess by our in-house jury if you choose to do so.\nFurthermore, our curriculum will expose you to wider range of music repertoire. Together with the numerous performance events that you can participate in, you will improve your violin playing enjoyment, performance confidence and abilities.',
      features: ['Beginner to advanced levels', 'ABRSM exam preparation', 'Classical repertoire & technique', 'Children & adults welcome', 'Weekly Lessons']
    },
    zh: {
      title: '小提琴',
      subtitle: '4歲以上 · 一對一 · 所有程度',
      desc: '克雷莫納的小提琴課程旨在教授各個年齡層的學生，從初學者到文憑級別均可。\n\n我們獨特的小提琴課程不僅與英國皇家音樂學院聯合委員會 (ABRSM) 和聖三一音樂學院 (Trinity) 的教學大綱相輔相成，還能幫助您更快地達到八級水平，而無需承受每個級別都要參加外部考試的壓力。我們相信這可以提高您對音樂的興趣，並減輕考試壓力。\n\n如果您只想學習小提琴演奏，而不想參加 ABRSM 或聖三一音樂學院的考試，我們的課程也能讓您以系統化的方式學習和掌握正確的技能。如果您願意，我們也可以安排內部評審團對您進行評估。\n\n此外，我們的課程還將帶您接觸更廣泛的音樂曲目。結合您可以參加的眾多演出活動，您將提升小提琴演奏的樂趣、表演自信和演奏技巧。',
      features: ['初學至進階程度', 'ABRSM考試準備', '古典曲目與技巧', '歡迎兒童及成人', '每週課程']
    }
  },
  cello: {
    icon: '<img src="images/icons/cello.png" alt="cello" width="120.4" height="138.18">',
    en: {
      title: 'Cello',
      subtitle: 'Age 5 and above · One-on-One · All Levels',
      desc: 'Cello lessons at Cremona are designed to teach students of all ages from beginner to diploma level.\nOur unique cello curriculum not only complements the ABRSM and Trinity syllabus, it would enable you to achieve up to Grade 8 more quickly without having the pressure of taking external exams at each grade. We believe this can increase your interest in music and reduce exam stress.\nIf you are interested in learning to play the cello only but not taking ABRSM or Trinity exams, our curriculum allows you to learn and master the right skills in a structured manner as you could be assess by our in-house jury if you choose to do so.\nFurthermore, our curriculum will expose you to wider range of music repertoire. Together with the numerous performance events that you can participate in, you will improve your cello playing enjoyment, performance confidence and abilities.\nYou can learn to master cello through one-to-one lessons or in an ensemble setting where you will learn about teamwork and foster close friendships with fellow students.',
      features: ['Beginner to advanced levels', 'ABRSM exam preparation', 'Tone, posture & bowing technique', 'Children & adults welcome', 'Weekly Lessons']
    },
    zh: {
      title: '大提琴',
      subtitle: '5歲以上 · 一對一 · 所有程度',
      desc: '克雷莫納的大提琴課程旨在教授各個年齡層的學生，從初學者到文憑級別均可。\n\n我們獨特的大提琴課程不僅與英國皇家音樂學院聯合委員會 (ABRSM) 和聖三一音樂學院 (Trinity) 的教學大綱相輔相成，還能幫助您更快地達到八級水平，而無需承受每個級別都要參加外部考試的壓力。我們相信這可以提高您對音樂的興趣，並減輕考試壓力。\n\n如果您只想學習演奏大提琴，而不想參加 ABRSM 或聖三一音樂學院的考試，我們的課程也能讓您以系統化的方式學習和掌握正確的技能。如果您願意，也可以接受我們內部評審團的評估。\n\n此外，我們的課程還將帶您接觸更廣泛的音樂曲目。結合您可以參加的眾多演出活動，您將提升演奏大提琴的樂趣、增強表演自信並提升演奏技巧。\n\n您可以透過一對一課程或合奏學習精通大提琴，在合奏中您將學習團隊合作，並與同學建立深厚的友誼。',
      features: ['初學至進階程度', 'ABRSM考試準備', '音色、姿勢與弓法技術', '歡迎兒童及成人', '每週課程']
    }
  },
  piano: {
    icon: '<img src="images/icons/piano.png" alt="piano" width="105" height="125">',
    en: {
      title: 'Piano',
      subtitle: 'Age 4 and above · One-on-One · All Levels',
      desc: 'Piano lessons at Cremona are designed to teach students of all ages from beginner to diploma level.\nOur unique piano curriculum not only complements the ABRSM and Trinity syllabus, it would enable you to achieve up to Grade 8 more quickly without having the pressure of taking external exams at each grade. We believe this can increase your interest in music and reduce exam stress.\nIf you are interested in learning to play the piano only but not taking ABRSM or Trinity exams, our curriculum allows you to learn and master the right skills in a structured manner as you could be assess by our in-house jury if you choose to do so.\nFurthermore, our curriculum will expose you to wider range of music repertoire. Together with the numerous performance events that you can participate in, you will improve your piano playing enjoyment, performance confidence and abilities.',
      features: ['Beginner to advanced levels', 'ABRSM exam preparation', 'Music theory & sight-reading', 'Performance coaching', 'Weekly lessons']
    },
    zh: {
      title: '鋼琴',
      subtitle: '4歲以上 · 一對一 · 所有程度',
      desc: '克雷莫納的鋼琴課程旨在教授各個年齡層的學生，從初學者到文憑級別均可。\n\n我們獨特的鋼琴課程不僅與英國皇家音樂學院聯合委員會 (ABRSM) 和聖三一學院的教學大綱相輔相成，還能幫助您更快地達到八級水平，而無需承受每個級別都要參加外部考試的壓力。我們相信這可以提高您對音樂的興趣，並減輕考試壓力。\n\n如果您只想學習鋼琴演奏，而不想參加 ABRSM 或聖三一學院的考試，我們的課程也能讓您以系統化的方式學習和掌握正確的技能。如果您願意，我們也可以安排內部評審團對您進行評估。\n\n此外，我們的課程還將帶您接觸更廣泛的音樂曲目。結合您可以參加的眾多演出活動，您將提升鋼琴演奏的樂趣、增強表演自信並提升演奏技巧。',
      features: ['初學至進階程度', 'ABRSM及Trinity考試準備', '樂理與視奏', '演奏指導', '每週課程']
    }
  },
  singing: {
    icon: '<img src="images/icons/mic.png" alt="singing" width="71.7" height="71.1">',
    en: {
      title: 'Singing',
      subtitle: 'Vocals · One-on-One · All Levels',
      desc: 'Discover and develop your voice with our structured vocal training programme. Whether you are a complete beginner or looking to refine your technique for exams or performances, our teachers guide you through proper breath support, pitch accuracy, tone production and stage presence.',
      features: ['Beginner to advanced levels', 'Breath control & support', 'Pitch accuracy & tone development', 'Exam & performance preparation', 'Children & adults welcome']
    },
    zh: {
      title: '聲樂',
      subtitle: '聲樂 · 一對一 · 所有程度',
      desc: '透過我們有條理的聲樂訓練課程，發掘並發展您的聲音。無論您是完全初學者，還是希望為考試或表演磨練技巧，我們的老師都會引導您掌握正確的呼吸支撐、音準、音色和舞台表現。',
      features: ['初學至進階程度', '呼吸控制與支撐', '音準與音色發展', '考試與表演準備', '歡迎兒童及成人']
    }
  },
  percussion: {
    icon: '<img src="images/icons/snare.png" alt="percussion" width="75.5" height="94.7">',
    en: {
      title: 'Percussion',
      subtitle: 'Rhythm & Beat · One-on-One · All Levels',
      desc: 'Build solid rhythmic foundations and dynamic control through our percussion programme. Students explore a broad range of percussion instruments, developing coordination, timing and musical expression in a structured, one-on-one setting.',
      features: ['Beginner to advanced levels', 'Rhythm, coordination & timing', 'Broad range of percussion instruments', 'Exam & ensemble preparation', 'Children & adults welcome']
    },
    zh: {
      title: '打擊樂',
      subtitle: '節奏 · 一對一 · 所有程度',
      desc: '透過我們的打擊樂課程建立扎實的節奏基礎和動態控制。學生探索各種打擊樂器，在有條理的一對一環境中培養協調性、節奏感和音樂表現力。',
      features: ['初學至進階程度', '節奏、協調性與時間感', '各種打擊樂器', '考試及合奏準備', '歡迎兒童及成人']
    }
  },
  marimba: {
    icon: '<img src="images/icons/marimba.png" alt="marimba" width="160" height="82.2">',
    en: {
      title: 'Marimba',
      subtitle: 'Mallet Percussion · One-on-One · All Levels',
      desc: 'The marimba is a beautiful and versatile mallet percussion instrument. Our specialised marimba lessons focus on mallet technique, four-mallet playing, tone production and a rich repertoire spanning classical, jazz and contemporary styles.',
      features: ['Beginner to advanced levels', 'Two & four-mallet technique', 'Classical to contemporary repertoire', 'Musicality & expression', 'Competition & exam preparation']
    },
    zh: {
      title: '馬林巴琴',
      subtitle: '槌擊打擊樂 · 一對一 · 所有程度',
      desc: '馬林巴琴是一種美麗而多才多藝的槌擊打擊樂器。我們的專業馬林巴琴課程專注於槌法技術、四槌演奏、音色和豐富的曲目，涵蓋古典、爵士和當代風格。',
      features: ['初學至進階程度', '雙槌與四槌技術', '古典至當代曲目', '音樂性與表現力', '比賽及考試準備']
    }
  },
  theory: {
    icon: '<img src="images/icons/theory.png" alt="music theory" width="86" height="119.6">',
    en: {
      title: 'Music Theory',
      subtitle: 'Theory · Group & One-on-One · All Levels',
      desc: 'Our music theory programme offers structured classes from beginner to ABRSM Grade 8. Students develop a strong understanding of notation, harmony, ear training and sight-reading — essential skills that complement any instrument. Available as group or one-on-one sessions.',
      features: ['Beginner to ABRSM Grade 8', 'Notation, harmony & ear training', 'Sight-reading skills', 'Group & one-on-one sessions', 'Children & adults welcome']
    },
    zh: {
      title: '樂理',
      subtitle: '樂理 · 小組及一對一 · 所有程度',
      desc: '我們的樂理課程提供從初學到ABRSM八級的系統性教學。學生將深入學習記譜法、和聲、聽音訓練和視奏——這些都是補充任何樂器學習的重要技能。提供小組或一對一課程。',
      features: ['初學至ABRSM八級', '記譜法、和聲與聽音訓練', '視奏技巧', '小組及一對一課程', '歡迎兒童及成人']
    }
  }
};
function openModal(key) {
  var data = lessons[key];
  var zh = document.body.classList.contains('zh');
  var d = zh ? data.zh : data.en;
  document.getElementById('modalIcon').innerHTML = data.icon;
  document.getElementById('modalTitle').innerHTML = d.title;
  document.getElementById('modalSubtitle').innerHTML = d.subtitle;
  document.getElementById('modalDesc').innerHTML = d.desc;
  var feats = document.getElementById('modalFeatures');
  feats.innerHTML = '';
  d.features.forEach(function(f) {
    var div = document.createElement('div');
    div.className = 'modal-feature';
    div.textContent = f;
    feats.appendChild(div);
  });
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModalBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModalBtn(); });

// ── Shop modal data ──────────────────────────────────
var shopData = {
  strings: {
    icon: '🎻',
    en: { title: 'Violins & Cellos', subtitle: 'Taiwanese Luthiers · Handcrafted', desc: 'We carry a curated selection of handcrafted string instruments by renowned Taiwanese luthiers. Each violin and cello is carefully selected for tone quality and playability, suitable for students and professionals alike.', features: ['Handcrafted by Taiwanese luthiers', 'Student and professional grades', 'Violins available in all sizes', 'Expert setup and adjustment'] },
    zh: { title: '小提琴 & 大提琴', subtitle: '台灣製琴師 · 手工製作', desc: '我們精選台灣知名製琴師手工製作的弦樂器。每把小提琴和大提琴都經過仔細挑選，音色優良，適合學生和專業人士使用。', features: ['台灣製琴師手工製作', '學生及專業級樂器', '各尺寸小提琴均有售', '專業調音和調整服務'] }
  },
  piano: {
    icon: '🎹',
    en: { title: 'Kawai Pianos', subtitle: 'Authorised Kawai Dealer', desc: 'As an authorised Kawai dealer, we offer a range of digital and acoustic pianos for students and performers. Visit our showroom to try our instruments and find the perfect piano for your home or studio.', features: ['Authorised Kawai dealer', 'Digital and acoustic models', 'Student to professional range', 'Visit our showroom to try in person'] },
    zh: { title: 'Kawai 鋼琴', subtitle: 'Kawai 授權經銷商', desc: '作為Kawai授權經銷商，我們提供各種數位和原聲鋼琴，適合學生和表演者。歡迎到訪我們的展示室試奏，找到最適合您家庭或工作室的鋼琴。', features: ['Kawai授權經銷商', '數位及原聲鋼琴型號', '學生至專業級系列', '歡迎到訪展示室試奏'] }
  }
};
window.openShopModal = function(key) {
  var data = shopData[key];
  if (!data) return;
  var zh = document.body.classList.contains('zh');
  var d = zh ? data.zh : data.en;
  document.getElementById('modalIcon').textContent = data.icon;
  document.getElementById('modalTitle').textContent = d.title;
  document.getElementById('modalSubtitle').textContent = d.subtitle;
  document.getElementById('modalDesc').textContent = d.desc;
  var feats = document.getElementById('modalFeatures');
  feats.innerHTML = '';
  d.features.forEach(function(f) {
    var div = document.createElement('div');
    div.className = 'modal-feature';
    div.textContent = f;
    feats.appendChild(div);
  });
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
};

// Assign click handlers to lesson cards
var cardKeys = ['piano','violin','cello','singing','percussion','marimba','theory'];
document.querySelectorAll('.lesson-card').forEach(function(card, i) {
  card.addEventListener('click', function() { openModal(cardKeys[i]); });
});

function navTo(id) {
  var el = document.getElementById(id);
  if (el) { setTimeout(function(){ el.scrollIntoView({behavior:'smooth'}); }, 10); }
  return false;
}

// Mobile menu
function toggleMobileMenu() {
  var nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
  document.getElementById('mobileBtn').textContent = nav.classList.contains('open') ? '✕' : '☰';
}
function mobileNavTo(id) {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('mobileBtn').textContent = '☰';
  navTo(id);
  return false;
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 1000) {
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('mobileBtn').textContent = '☰';
  }
});

// Language toggle — syncs both desktop and mobile buttons
function setLang(zh) {
  document.body.classList.toggle('zh', zh);
  var label = zh ? 'English' : '中文';
  document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
    btn.textContent = label;
  });
}
document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    setLang(!document.body.classList.contains('zh'));
  });
});


var navSections = ['home','about','lessons','recital','achievements','events','shop','contact'];
function updateActiveNav() {
  var scrollY = window.scrollY + 120;
  var current = 'home';
  navSections.forEach(function(id) {
    var el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    var href = a.getAttribute('href');
    if (href === '#' + current) a.classList.add('active');
    else a.classList.remove('active');
  });
}
window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Scroll shadow removed

// Fade in on scroll
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.1});
document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });

// Back to top visibility
window.addEventListener('scroll', function() {
  var shopEl = document.getElementById('shop');
  var trigger = shopEl ? shopEl.offsetTop - window.innerHeight : 9999;
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY >= trigger);
});
