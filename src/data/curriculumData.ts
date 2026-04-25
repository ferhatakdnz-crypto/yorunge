import { SubjectCurriculum } from '../types/curriculum';

export const INITIAL_CURRICULUM_DATA: SubjectCurriculum[] = [
  {
    id: '9-edebiyat',
    grade: '9. Sınıf',
    subject: 'Türk Dili ve Edebiyatı',
    themes: [
      {
        id: 'tema-1',
        title: '1. TEMA: SÖZÜN İNCELİĞİ',
        description: 'Bu tema, edebiyatın doğasını ve estetik değerini anlamaya odaklanır.',
        topics: [
          { id: '1-1', title: 'Edebiyatın Doğası', description: 'Edebiyat nedir, güzel sanatlar içindeki yeri ve diğer bilimlerle ilişkisi.' },
          { id: '1-2', title: 'Edebî Söyleyiş', description: 'Söz sanatları (mecazımürsel, teşbih, istiare vb.) ve imge kavramı.' },
          { id: '1-3', title: 'Metin Türleri', description: 'Şiir, Deneme ve Mülakat örnekleri üzerinden edebî dilin incelenmesi.' },
          { id: '1-4', title: 'Dil Bilgisi', description: 'Kelimede anlam, gerçek ve mecaz anlam, terim anlam.' },
        ]
      },
      {
        id: 'tema-2',
        title: '2. TEMA: ANLAM ARAYIŞI',
        description: 'Metinlerdeki derin anlamı ve iletilmek istenen mesajı keşfetmeyi amaçlar.',
        topics: [
          { id: '2-1', title: 'Metin Çözümleme', description: 'Konu, ana düşünce, ana duygu ve yardımcı düşüncelerin tespiti.' },
          { id: '2-2', title: 'Olay Anlatımı', description: 'Anlatmaya bağlı metinlerin genel özellikleri.' },
          { id: '2-3', title: 'Metin Türleri', description: 'Hikâye (Öykü), Anı ve Şiir. Özellikle İstiklal Marşı’nın tahlili bu temada geniş yer tutar.' },
          { id: '2-4', title: 'Dil Bilgisi', description: 'Kelime grupları (isim tamlamaları, sıfat tamlamaları).' },
        ]
      },
      {
        id: 'tema-3',
        title: '3. TEMA: ANLAMIN YAPI TAŞLARI',
        description: 'Metnin nasıl inşa edildiğini, teknik ve yapısal unsurer üzerinden inceler.',
        topics: [
          { id: '3-1', title: 'Yapı Unsurları', description: 'Olay örgüsü, şahıs kadrosu, zaman ve mekân analizi.' },
          { id: '3-2', title: 'Anlatım Teknikleri', description: 'Anlatıcı türleri (hâkim, gözlemci, kahraman) ve bakış açıları.' },
          { id: '3-3', title: 'Şiir Bilgisi', description: 'Ahenk unsurları (ölçü, kafiye, redif, durak, kafiye düzeni).' },
          { id: '3-4', title: 'Metin Türleri', description: 'Hikâye, Gezi Yazısı, Eski Anadolu Türkçesi ile yazılmış şiirler ve İnfografik metinler.' },
          { id: '3-5', title: 'Dil Bilgisi', description: 'Cümle türleri (anlamına ve yapısına göre cümleler).' },
        ]
      },
      {
        id: 'tema-4',
        title: '4. TEMA: DİLİN ZENGİNLİĞİ',
        description: 'Dilin kullanım biçimlerini, üslubu ve anlatım özelliklerini kapsar.',
        topics: [
          { id: '4-1', title: 'Üslup and Anlatım', description: 'Anlatım teknikleri (geriye dönüş, iç monolog, diyalog, bilinç akışı).' },
          { id: '4-2', title: 'Anlatım İlkeleri', description: 'Duruluk, yalınlık, akıcılık, özgünlük, tutarlılık.' },
          { id: '4-3', title: 'Metin Türleri', description: 'Roman, Tiyatro, Eleştiri ve Otobiyografi.' },
          { id: '4-4', title: 'Dijital Okuryazarlık', description: 'Sosyal medya dili ve dijital metinlerin analizi.' },
          { id: '4-5', title: 'Dil Bilgisi', description: 'Yazım kuralları ve noktalama işaretleri (metin bağlamında uygulama).' },
        ]
      }
    ]
  },
  {
    id: '9-matematik',
    grade: '9. Sınıf',
    subject: 'Matematik',
    themes: [
      {
        id: '9m-tema-1',
        title: '1. TEMA: SAYILAR (Nicelikler ve Değişimler)',
        description: 'Bu tema, sayı kümelerinin mantığını ve gerçek hayat durumlarını matematiksel modele dönüştürmeyi kapsar.',
        topics: [
          { id: '1-1m', title: 'Sayı Kümeleri', description: 'Doğal sayılar, tam sayılar, rasyonel ve gerçek sayılar arasındaki ilişkiler.' },
          { id: '1-2m', title: 'Üslü ve Köklü İfadeler', description: 'Bu ifadelerin özellikleri ve problem çözme süreçlerinde kullanımı.' },
          { id: '1-3m', title: 'Denklem ve Eşitsizlikler', description: 'Birinci dereceden bir ve iki bilinmeyenli denklemler/eşitsizlikler.' },
          { id: '1-4m', title: 'Oran ve Orantı', description: 'Değişim oranları ve gerçek hayat problemlerine (yüzde, kar-zarar, karışım vb.) uygulanması.' }
        ]
      },
      {
        id: '9m-tema-2',
        title: '2. TEMA: ALGORİTMA VE MANTIKSAL TASARIM',
        description: 'Yeni müfredatın en büyük yeniliği budur. Matematiksel düşünmeyi kodlama mantığıyla birleştirir.',
        topics: [
          { id: '2-1m', title: 'Mantık', description: 'Önermeler, bileşik önermeler ve koşullu önermeler (p ⇒ q).' },
          { id: '2-2m', title: 'Algoritma Kavramı', description: 'Bir problemin çözüm adımlarını tasarlama, akış şemaları oluşturma.' },
          { id: '2-3m', title: 'Küme İşlemleri', description: 'Kümelerde temel işlemlerin algoritmik ve şematik gösterimi.' }
        ]
      },
      {
        id: '9m-tema-3',
        title: '3. TEMA: GEOMETRİK ŞEKİLLER (Üçgenler)',
        description: 'Geometri, ezberden ziyade "dinamik geometri yazılımları" yardımıyla keşfederek öğretilir.',
        topics: [
          { id: '3-1m', title: 'Üçgenlerde Temel Kavramlar', description: 'Açı-kenar bağıntıları.' },
          { id: '3-2m', title: 'Eşlik ve Benzerlik', description: 'Üçgenlerin benzerlik kuralları ve uygulama alanları.' },
          { id: '3-3m', title: 'Dik Üçgen ve Trigonometri', description: 'Pisagor teoremi, öklid bağıntıları ve dar açıların trigonometrik oranları (sin, cos, tan, cot).' },
          { id: '3-4m', title: 'Üçgenin Alanı', description: 'Alan formülleri ve sinüslü alan hesaplamaları.' }
        ]
      },
      {
        id: '9m-tema-4',
        title: '4. TEMA: VERİ ANALİZİ VE İSTATİSTİK',
        description: 'Karar verme süreçlerinde veriyi nasıl kullanacağımızı öğretir.',
        topics: [
          { id: '4-1m', title: 'Veri Toplama ve Düzenleme', description: 'Anket, gözlem gibi yöntemlerle veri elde etme.' },
          { id: '4-2m', title: 'Merkezi Eğilim ve Yayılım Ölçüleri', description: 'Aritmetik ortalama, medyan, mod, standart sabitleme.' },
          { id: '4-3m', title: 'Veri Görselleştirme', description: 'Sütun, çizgi ve daire grafiklerinin yanı sıra "Kutu Grafiği (Box Plot)" gibi ileri düzey gösterimler.' }
        ]
      },
      {
        id: '9m-tema-5',
        title: '5. TEMA: FONKSİYONLAR (Giriş)',
        description: 'Değişkenler arasındaki ilişkileri anlamaya yönelik temel oluşturulur.',
        topics: [
          { id: '5-1m', title: 'Fonksiyon Kavramı', description: 'Tanım, değer ve görüntü kümeleri.' },
          { id: '5-2m', title: 'Fonksiyon Türleri', description: 'İçine, örten, birim ve sabit fonksiyonlar.' },
          { id: '5-3m', title: 'Grafik Okuma', description: 'Değişimi grafik üzerinden yorumlama becerisi.' }
        ]
      }
    ]
  },
  {
    id: '9-fizik',
    grade: '9. Sınıf',
    subject: 'Fizik',
    themes: [
      {
        id: '9f-tema-1',
        title: '1. TEMA: FİZİKSEL NİCELİKLER VE BİLİMSEL GÖZLEM',
        description: 'Fizik biliminin doğasını ve bilimsel yöntemlerin temellerini anlamaya odaklanır.',
        topics: [
          { id: '1-1f', title: 'Fizik Biliminin Doğası', description: 'Fiziğin uğraş alanları, gözlem çeşitleri (nitel-nicel).' },
          { id: '1-2f', title: 'Niceliklerin Sınıflandırılması', description: 'Temel ve türetilmiş büyüklükler, skaler ve vektörel nicelikler.' },
          { id: '1-3f', title: 'Bilimsel Etik ve Ölçme', description: 'Ölçmede hata payı, birim sistemleri (SI) ve bilimsel araştırma merkezleri.' }
        ]
      },
      {
        id: '9f-tema-2',
        title: '2. TEMA: KUVVET VE HAREKET',
        description: 'Hareketin temel ilkeleri ve Newton’un hareket yasalarını kapsar.',
        topics: [
          { id: '2-1f', title: 'Hareketin Tanımı', description: 'Konum, alınan yol, yer değiştirme, sürat ve hız kavramları.' },
          { id: '2-2f', title: 'Düzgün Doğrusal Hareket', description: 'Hareket grafiklerinin yorumlanması ve analizi.' },
          { id: '2-3f', title: 'Newton’un Hareket Yasaları', description: 'Eylemsizlik, Temel Kanun (F=m·a) ve Etki-Tepki prensipleri.' },
          { id: '2-4f', title: 'Sürtünme Kuvveti', description: 'Statik ve kinetik sürtünme, günlük hayattaki etkileri.' }
        ]
      },
      {
        id: '9f-tema-3',
        title: '3. TEMA: ENERJİ VE DÖNÜŞÜMLER',
        description: 'İş, güç ve enerji kavramları ile enerjinin korunumu ilkelerini inceler.',
        topics: [
          { id: '3-1f', title: 'İş, Güç ve Enerji', description: 'Fiziksel anlamda iş ve güç hesaplamaları.' },
          { id: '3-2f', title: 'Mekanik Enerji', description: 'Kinetik enerji ve potansiyel enerji (çekim ve esneklik).' },
          { id: '3-3f', title: 'Enerjinin Korunumu', description: 'Enerji dönüşümleri ve verimlilik kavramı.' },
          { id: '3-4f', title: 'Yenilenebilir ve Yenilenemez Enerji Kaynakları', description: 'Enerji tasarrufu ve sürdürülebilirlik.' }
        ]
      }
    ]
  },
  {
    id: '9-kimya',
    grade: '9. Sınıf',
    subject: 'Kimya',
    themes: [
      {
        id: '9k-tema-1',
        title: '1. TEMA: KİMYA BİLİMİ VE GÜVENLİK',
        description: 'Kimyanın sembolik dilini, laboratuvar kültürünü ve temel güvenlik kurallarını kapsar.',
        topics: [
          { id: '1-1k', title: 'Kimyanın Sembolik Dili', description: 'Elementler, bileşikler ve yaygın adlandırmalar.' },
          { id: '1-2k', title: 'Laboratuvar Kültürü', description: 'Kimyada kullanılan temel araç gereçler, güvenlik piktogramları (uyarı işaretleri).' },
          { id: '1-3k', title: 'Kimya Disiplinleri', description: 'Organik, anorganik, analitik kimya vb. alt dalların tanıtımı.' }
        ]
      },
      {
        id: '9k-tema-2',
        title: '2. TEMA: ATOMUN YAPISI VE PERİYODİK SİSTEM',
        description: 'Atomun tarihsel gelişimi, temel tanecikleri ve periyodik sistemin özelliklerini inceler.',
        topics: [
          { id: '2-1k', title: 'Atom Modellerinin Tarihsel Gelişimi', description: 'Dalton’dan günümüz Modern Atom Teorisine geçiş.' },
          { id: '2-2k', title: 'Atomun Temel Tanecikleri', description: 'Proton, nötron, elektron; izotop, izobar, izoton kavramları.' },
          { id: '2-3k', title: 'Periyodik Cetvel', description: 'Elementlerin katman-elektron dizilimi, grup ve periyot bulma, periyodik özelliklerin değişimi.' }
        ]
      },
      {
        id: '9k-tema-3',
        title: '3. TEMA: KİMYASAL TÜRLER ARASI ETKİLEŞİMLER',
        description: 'Maddeler arasındaki güçlü ve zayıf etkileşimler ile fiziksel/kimyasal değişimleri kapsar.',
        topics: [
          { id: '3-1k', title: 'Güçlü Etkileşimler', description: 'İyonik bağ, kovalent bağ (polar-apolar) ve metalik bağ oluşumu.' },
          { id: '3-2k', title: 'Zayıf Etkileşimler', description: 'Van der Waals kuvvetleri ve Hidrojen bağları.' },
          { id: '3-3k', title: 'Fiziksel ve Kimyasal Değişimler', description: 'Maddenin kimliğinin değiştiği durumların analizi.' }
        ]
      }
    ]
  },
  {
    id: '9-biyoloji',
    grade: '9. Sınıf',
    subject: 'Biyoloji',
    themes: [
      {
        id: '9b-tema-1',
        title: '1. TEMA: YAŞAMIN TEMEL BİLEŞENLERİ',
        description: 'Canlıların ortak özellikleri ile inorganik ve organik bileşikleri kapsar.',
        topics: [
          { id: '1-1b', title: 'Canlıların Ortak Özellikleri', description: 'Metabolizma, homeostazi, adaptasyon, organizasyon vb.' },
          { id: '1-2b', title: 'İnorganik Bileşikler', description: 'Su, mineraller, asitler, bazlar ve tuzların canlılar için önemi.' },
          { id: '1-3b', title: 'Organik Bileşikler', description: 'Karbonhidratlar, lipidler, proteinler, enzimler, hormonlar, vitaminler, ATP ve Nükleik Asitler (DNA ve RNA).' }
        ]
      },
      {
        id: '9b-tema-2',
        title: '2. TEMA: HÜCRE: YAŞAMIN BİRİMİ',
        description: 'Hücre teorisi, hücre yapısı ve hücre zarından madde geçişlerini inceler.',
        topics: [
          { id: '2-1b', title: 'Hücre Teorisi ve Yapısı', description: 'Prokaryot ve ökaryot hücre farkları.' },
          { id: '2-2b', title: 'Hücre Zarından Madde Geçişleri', description: 'Pasif taşıma (difüzyon, osmoz) ve Aktif taşıma (endositoz, ekzositoz).' },
          { id: '2-3b', title: 'Organeller ve Görevleri', description: 'Mitokondri, ribozom, kloroplast gibi yapıların işlevsel analizi.' }
        ]
      },
      {
        id: '9b-tema-3',
        title: '3. TEMA: CANLILAR DÜNYASI VE BİYOÇEŞİTLİLİK',
        description: 'Sınıflandırma ilkeleri, canlı alemleri ve virüslerin özelliklerini kapsar.',
        topics: [
          { id: '3-1b', title: 'Sınıflandırma İlkeleri', description: 'Filogenetik sınıflandırma ve adlandırma kuralları.' },
          { id: '3-2b', title: 'Canlı Alemleri', description: 'Bakteriler, Arkeler, Protistler, Mantarlar, Bitkiler ve Hayvanlar aleminin genel özellikleri.' },
          { id: '3-3b', title: 'Virüsler', description: 'Canlılık ve cansızlık arasındaki yeri, hastalıklara etkileri.' }
        ]
      }
    ]
  },
  {
    id: '9-tarih',
    grade: '9. Sınıf',
    subject: 'Tarih',
    themes: [
      {
        id: '9t-tema-1',
        title: '1. TEMA: TARİH YAZIMININ DOĞASI VE YÖNTEMİ',
        description: 'Tarih biliminin konusu, kaynakları ve tarihsel yöntem aşamalarını kapsar.',
        topics: [
          { id: '1-1t', title: 'Tarih Nedir?', description: 'Tarihin konusu, kaynakları (birinci el ve ikinci el kaynaklar).' },
          { id: '1-2t', title: 'Tarihsel Yöntem', description: 'Tasnif, tahlil, tenkit ve terkip aşamaları.' },
          { id: '1-3t', title: 'Zamanın Taksimi', description: 'Takvim sistemleri (Hicri, Miladi, On İki Hayvanlı Türk Takvimi) ve çağlara ayırma mantığı.' }
        ]
      },
      {
        id: '9t-tema-2',
        title: '2. TEMA: İNSANLIĞIN İLK DÖNEMLERİ VE MEDENİYETİN DOĞUŞU',
        description: 'Yerleşik yaşama geçiş, kadim medeniyet havzaları ve ilk siyasi organizasyonları inceler.',
        topics: [
          { id: '2-1t', title: 'Yerleşik Yaşama Geçiş', description: 'Tarım devrimi, Göbeklitepe, Çatalhöyük ve Çayönü örnekleri.' },
          { id: '2-2t', title: 'Kadim Medeniyet Havzaları', description: 'Mezopotamya, Mısır, Anadolu (Hitit, Frig vb.), Hint, Çin ve Yunan medeniyetlerinin katkıları.' },
          { id: '2-3t', title: 'Siyasi Organizasyonlar', description: 'İlk devletlerde yönetim, hukuk sistemleri (Hammurabi Kanunları) ve ordular.' }
        ]
      },
      {
        id: '9t-tema-3',
        title: '3. TEMA: ORTA ÇAĞ DÜNYASI VE TÜRK VARLIĞI',
        description: 'Dünya güç dengesi, Asya’daki Türk devletleri ve küresel ticaret yollarını kapsar.',
        topics: [
          { id: '3-1t', title: 'Dünya Güç Dengesi', description: 'Bizans, Sasani ve Moğol İmparatorlukları.' },
          { id: '3-2t', title: 'Asya’daki Türk Devletleri', description: 'Hun, Kök Türk ve Uygur devletlerinde teşkilatlanma, sosyal hayat ve "Töre" kavramı.' },
          { id: '3-3t', title: 'İpek ve Baharat Yolu', description: 'Küresel ticaret ağlarının siyasi ve kültürel etkileri.' }
        ]
      }
    ]
  },
  {
    id: '9-cografya',
    grade: '9. Sınıf',
    subject: 'Coğrafya',
    themes: [
      {
        id: '9c-tema-1',
        title: '1. TEMA: DOĞAL SİSTEMLER (İnsan ve Doğa)',
        description: 'Coğrafyanın konusu, Dünya’nın şekli/hareketleri ve koordinat sistemini kapsar.',
        topics: [
          { id: '1-1c', title: 'Coğrafyanın Konusu', description: 'Coğrafyanın bölümleri ve diğer bilimlerle ilişkisi.' },
          { id: '1-2c', title: 'Dünya’nın Şekli ve Hareketleri', description: 'Eksen eğikliği, yıllık hareket, mevsimlerin oluşumu ve sonuçları.' },
          { id: '1-3c', title: 'Koordinat Sistemi', description: 'Paralel, meridyen, yerel saat hesaplamaları ve konum belirleme.' }
        ]
      },
      {
        id: '9c-tema-2',
        title: '2. TEMA: HARİTA BİLGİSİ VE UYGULAMALARI',
        description: 'Harita okuryazarlığı ve yeryüzü şekillerinin gösterilme yöntemlerini inceler.',
        topics: [
          { id: '2-1c', title: 'Harita Okuryazarlığı', description: 'Ölçek, projeksiyon yöntemleri and harita elemanları.' },
          { id: '2-2c', title: 'Yeryüzü Şekillerinin Gösterilmesi', description: 'İzohips (eş yükselti) eğrileri ve profil çıkarma.' }
        ]
      },
      {
        id: '9c-tema-3',
        title: '3. TEMA: ATMOSFER VE İKLİM',
        description: 'Atmosferin yapısı, iklim elemanları ve dünyadaki iklim tiplerini kapsar.',
        topics: [
          { id: '3-1c', title: 'Atmosferin Yapısı', description: 'Katmanlar ve atmosferin canlı yaşamı için önemi.' },
          { id: '3-2c', title: 'İklim Elemanları', description: 'Sıcaklık, basınç, rüzgârlar, nem ve yağış oluşumları.' },
          { id: '3-3c', title: 'İklim Tipleri', description: 'Dünyadaki ve Türkiye’deki iklim kuşakları, bitki örtüsü ilişkisi.' }
        ]
      }
    ]
  },
  {
    id: '9-din',
    grade: '9. Sınıf',
    subject: 'Din Kültürü ve Ahlak Bilgisi',
    themes: [
      {
        id: '9d-tema-1',
        title: '1. TEMA: BİLGİ VE İNANÇ',
        description: 'İslam’da bilgi kaynakları ve inanç esaslarını inceler.',
        topics: [
          { id: '1-1d', title: 'İslam\'da Bilgi Kaynakları', description: 'Selim akıl, sadık haber (vahy) ve sağlam duyular.' },
          { id: '1-2d', title: 'İslam İnanç Esasları', description: 'Tevhid inancı ve Allah’ın sıfatları.' }
        ]
      },
      {
        id: '9d-tema-2',
        title: '2. TEMA: DİN VE İSLAM',
        description: 'Dinin tanımı ve İslam’ın anlamını kapsar.',
        topics: [
          { id: '2-1d', title: 'Dinin Tanımı', description: 'Dinin birey ve toplum üzerindeki işlevleri.' },
          { id: '2-2d', title: 'İslam’ın Anlamı', description: 'İman ve İslam kavramları arasındaki ilişki.' }
        ]
      },
      {
        id: '9d-tema-3',
        title: '3. TEMA: KUR’AN’DA BAZI KAVRAMLAR',
        description: 'İbadet, ihlas, takva ve salih amel gibi Kur\'anî kavramları inceler.',
        topics: [
          { id: '3-1d', title: 'İbadet', description: 'İhlas, takva ve salih amel kavramlarının Kur\'an perspektifinden incelenmesi.' }
        ]
      }
    ]
  },
  {
    id: '9-ingilizce',
    grade: '9. Sınıf',
    subject: 'İngilizce',
    themes: [
      {
        id: '9e-tema-1',
        title: 'Tema 1: Studying Abroad',
        description: 'Kendini tanıtma, milliyetler ve okul hayatı üzerine odaklanır.',
        topics: [
          { id: '1-1e', title: 'Introduction', description: 'Introducing oneself, nationalities, and school life.' }
        ]
      },
      {
        id: '9e-tema-2',
        title: 'Tema 2: My Environment',
        description: 'Yer yön tarifleri ve yaşam alanlarını anlatmayı kapsar.',
        topics: [
          { id: '2-1e', title: 'Living Space', description: 'Giving directions and describing where you live.' }
        ]
      },
      {
        id: '9e-tema-3',
        title: 'Tema 3: Movies',
        description: 'Film tercihleri ve öneriler hakkında konuşmayı sağlar.',
        topics: [
          { id: '3-1e', title: 'Film Preferences', description: 'Talking about preferences, movie types, and suggestions.' }
        ]
      },
      {
        id: '9e-tema-4',
        title: 'Tema 4: Human Rights',
        description: 'Haklar ve sorumluluklar hakkında fikir belirtmeyi içerir.',
        topics: [
          { id: '4-1e', title: 'Rights and Responsibilities', description: 'Expressing ideas about rights and duties.' }
        ]
      },
      {
        id: '9e-tema-5',
        title: 'Tema 5: Bridging Cultures',
        description: 'Gelenekler ve kültürler arası karşılaştırmaları kapsar.',
        topics: [
          { id: '5-1e', title: 'Comparing Cultures', description: 'Customs, food, and comparing different cultures.' }
        ]
      }
    ]
  },
  {
    id: '9-saglik',
    grade: '9. Sınıf',
    subject: 'Sağlık Bilgisi ve Trafik Kültürü',
    themes: [
      {
        id: '9s-tema-1',
        title: '1. TEMA: KİŞİSEL SAĞLIK VE HİJYEN',
        description: 'Bedensel, ruhsal sağlık ve ergenlik dönemi gelişimini kapsar.',
        topics: [
          { id: '1-1s', title: 'Sağlık Kavramı', description: 'Bedensel, ruhsal ve sosyal sağlık dengesi.' },
          { id: '1-2s', title: 'Ergenlik Dönemi', description: 'Fizyolojik ve psikolojik değişimler, kişisel temizlik ve ağız-diş sağlığı.' }
        ]
      },
      {
        id: '9s-tema-2',
        title: '2. TEMA: BESLENME VE FİZİKSEL AKTİVİTE',
        description: 'Sağlıklı beslenme, obezite ve ilk yardım temellerini içerir.',
        topics: [
          { id: '2-1s', title: 'Sağlıklı Beslenme', description: 'Obezite ile mücadele, bağımlılıklar (tütün, alkol, dijital bağımlılık).' },
          { id: '2-2s', title: 'İlk Yardım', description: 'Temel ilk yardım kuralları (yaralanma, bayılma, tıkanma durumlarında müdahale).' }
        ]
      },
      {
        id: '9s-tema-3',
        title: '3. TEMA: TRAFİK ADABI VE GÜVENLİĞİ',
        description: 'Trafik kültürü, sorumluluklar ve güvenli sürüş bilincini kapsar.',
        topics: [
          { id: '3-1s', title: 'Trafik Kültürü', description: 'Trafikte hoşgörü, yardımlaşma ve sabır.' },
          { id: '3-2s', title: 'Yaya ve Sürücü Sorumlulukları', description: 'Trafik işaret levhaları, güvenli geçiş yerleri ve toplu taşıma kuralları.' },
          { id: '3-3s', title: 'Trafik Kazaları', description: 'Kazaların nedenleri ve emniyet kemerinin önemi.' }
        ]
      }
    ]
  },
  {
    id: '10-biyoloji',
    grade: '10. Sınıf',
    subject: 'Biyoloji',
    themes: [
      {
        id: '10b-tema-1',
        title: '1. TEMA: HÜCRE BÖLÜNMELERİ',
        description: 'Mitoz ve mayoz bölünme süreçlerini, eşeyli ve eşeysiz üreme mekanizmalarını kapsar.',
        topics: [
          { id: '1-1b10', title: 'Mitoz ve Eşeysiz Üreme', description: 'Hücre döngüsü, mitoz evreleri ve eşeysiz üreme çeşitleri.' },
          { id: '1-2b10', title: 'Mayoz ve Eşeyli Üreme', description: 'Mayoz evreleri, krossing-over ve eşeyli üreme mekanizmaları.' }
        ]
      },
      {
        id: '10b-tema-2',
        title: '2. TEMA: KALITIMIN GENEL İLKELERİ',
        description: 'Mendel ilkeleri, genetik varyasyonlar ve modern genetik kavramlarını inceler.',
        topics: [
          { id: '2-1b10', title: 'Kalıtım ve Biyoçeşitlilik', description: 'Mendel ilkeleri, eş baskınlık, çok alellik ve kan grupları.' },
          { id: '2-2b10', title: 'Cinsiyete Bağlı Kalıtım', description: 'X ve Y kromozomuna bağlı kalıtım, soyağacı analizleri.' }
        ]
      },
      {
        id: '10b-tema-3',
        title: '3. TEMA: EKOSİSTEM EKOLOJİSİ VE GÜNCEL ÇEVRE SORUNLARI',
        description: 'Ekosistem yapısı, enerji akışı, madde döngüleri ve çevre sorunlarını kapsar.',
        topics: [
          { id: '3-1b10', title: 'Ekosistem Ekolojisi', description: 'Besin zinciri, enerji piramidi ve madde döngüleri (Karbon, Azot, Su).' },
          { id: '3-2b10', title: 'Güncel Çevre Sorunları', description: 'Hava, su ve toprak kirliliği, küresel iklim değişikliği ve biyoçeşitliliğin korunması.' }
        ]
      }
    ]
  },
  {
    id: '10-matematik',
    grade: '10. Sınıf',
    subject: 'Matematik',
    themes: [
      {
        id: '10m-tema-1',
        title: '1. TEMA: GEOMETRİK ŞEKİLLER',
        description: 'Üçgenlerin özellikleri, trigonometrik bağıntılar ve alan hesaplamalarını kapsar.',
        topics: [
          { id: '1-1m10', title: 'Trigonometrik Oranlar', description: 'Dik üçgende dar açıların trigonometrik oranları (sin, cos, tan, cot) ve temel özdeşlikler.' },
          { id: '1-2m10', title: 'Yardımcı Elemanlar', description: 'Açıortay, kenarortay, yükseklik ve geometrik ilişkiler.' },
          { id: '1-3m10', title: 'Üçgende Alan', description: 'Farklı alan formülleri ve uygulama alanları.' },
          { id: '1-4m10', title: 'Sinüs ve Kosinüs Teoremleri', description: 'Dik olmayan üçgenlerde kenar ve açı hesaplama yöntemleri.' }
        ]
      },
      {
        id: '10m-tema-2',
        title: '2. TEMA: İSTATİSTİKSEL ARAŞTIRMA SÜRECİ',
        description: 'Verilerin toplanması ve kategorik değişkenler üzerinden yorumlanmasına odaklanır.',
        topics: [
          { id: '2-1m10', title: 'Kategorik Değişken İlişkisi', description: 'İstatistiksel problem oluşturma, veri toplama ve bilimsel yorumlama.' },
          { id: '2-2m10', title: 'Veri Yorumlama', description: 'İki kategorik değişkenli verilerin tutarlılığını tartışma.' }
        ]
      },
      {
        id: '10m-tema-3',
        title: '3. TEMA: SAYILAR',
        description: 'Sayıların temel özellikleri ve bölünebilme mantığı algoritmik bakış açısıyla ele alınır.',
        topics: [
          { id: '3-1m10', title: 'Asal Çarpanlar ve Bölenler', description: 'Doğal sayıların asal çarpanlar ile ilişkisi.' },
          { id: '3-2m10', title: 'EBOB ve EKOK', description: 'Ortak bölenler ve ortak katlar uygulamaları.' },
          { id: '3-3m10', title: 'Bölünebilme Kuralları', description: 'Modüler aritmetik mantığı ile kalan analizi.' }
        ]
      },
      {
        id: '10m-tema-4',
        title: '4. TEMA: NİCELİKLER VE DEĞİŞİMLER (FONKSİYONLAR)',
        description: 'Farklı fonksiyon türlerinin derinlemesine incelenmesini kapsar.',
        topics: [
          { id: '4-1m10', title: 'Fonksiyon Özellikleri', description: 'Artan, azalan, tek veya çift olma durumları.' },
          { id: '4-2m10', title: 'Fonksiyon Türleri', description: 'Parabol (karesel), karekök ve rasyonel fonksiyonlar.' },
          { id: '4-3m10', title: 'Ters Fonksiyonlar', description: 'Farklı fonksiyon türlerinde tersini bulma yöntemleri.' },
          { id: '4-4m10', title: 'Denklem ve Eşitsizlikler', description: 'Cebirsel ve grafiksel çözüm yöntemleri.' }
        ]
      },
      {
        id: '10m-tema-5',
        title: '5. TEMA: SAYMA, ALGORİTMA VE BİLİŞİM',
        description: 'Matematiksel düşüncenin bilgisayar bilimiyle buluştuğu noktadır.',
        topics: [
          { id: '5-1m10', title: 'Sayma Stratejileri', description: 'Toplama ve çarpma yoluyla sayma prensipleri.' },
          { id: '5-2m10', title: 'Algoritma Tasarımı', description: 'Cebirsel ve fonksiyonel işlemlerin adım adım çözüm süreçleri.' }
        ]
      },
      {
        id: '10m-tema-6',
        title: '6. TEMA: ANALİTİK İNCELEME',
        description: 'Geometrik şekillerin koordinat sistemi üzerindeki cebirsel karşılıklarını inceler.',
        topics: [
          { id: '6-1m10', title: 'Nokta ve Doğru', description: 'İki nokta arası uzaklık ve doğru parçası bölme.' },
          { id: '6-2m10', title: 'Doğrunun Analitiği', description: 'Doğrunun eğimi, denklemi ve grafiksel gösterimi.' }
        ]
      },
      {
        id: '10m-tema-7',
        title: '7. TEMA: VERİDEN OLASILIĞA',
        description: 'Belirsizlik durumlarını matematiksel modellerle tahmin etmeye odaklanır.',
        topics: [
          { id: '7-1m10', title: 'Koşullu Olasılık', description: 'Bağımlı ve bağımsız olayların olasılık analizi.' },
          { id: '7-2m10', title: 'Bayes Teoremi', description: 'Olasılık teorisinde Bayes mantığına giriş.' }
        ]
      }
    ]
  },
  {
    id: '10-fizik',
    grade: '10. Sınıf',
    subject: 'Fizik',
    themes: [
      {
        id: '10f-tema-1',
        title: '1. TEMA: KUVVET VE HAREKET',
        description: 'Cisimlerin hareket karakteristiklerini ve ivmeli hareketin doğasını inceler.',
        topics: [
          { id: '1-1f10', title: 'Sabit Hızlı Hareket', description: 'Doğrusal yolda sürat ve hızın korunumu.' },
          { id: '1-2f10', title: 'Bir Boyutta Sabit İvmeli Hareket', description: 'İvme-hız ilişkisi ve yatay doğrultuda sabit ivmeli hareket analizi.' },
          { id: '1-3f10', title: 'Serbest Düşme', description: 'Yer çekimi ivmesinin etkisi ve sürtünmesiz ortamda serbest düşme.' },
          { id: '1-4f10', title: 'İki Boyutta Sabit İvmeli Hareket', description: 'Yatay ve düşey hareketin birleşimi.' }
        ]
      },
      {
        id: '10f-tema-2',
        title: '2. TEMA: ENERJİ',
        description: 'İş ve enerji arasındaki ilişkiyi ve enerjinin korunumu yasasını temel alır.',
        topics: [
          { id: '2-1f10', title: 'İş, Enerji ve Güç', description: 'Kuvvet-Yer Değiştirme grafiği ve kavramlar arası dinamik ilişki.' },
          { id: '2-2f10', title: 'Enerji Biçimleri', description: 'Kinetik ve potansiyel enerji türleri.' },
          { id: '2-3f10', title: 'Mekanik Enerji', description: 'Enerjinin korunumu ve dönüşüm süreçleri.' },
          { id: '2-4f10', title: 'Enerji Kaynakları', description: 'Yenilenebilir/yenilenemez kaynakların sürdürülebilirlik açısından değerlendirilmesi.' }
        ]
      },
      {
        id: '10f-tema-3',
        title: '3. TEMA: ELEKTRİK',
        description: 'Elektrik devrelerinin çalışma prensipleri ve güvenlik unsurlarını kapsar.',
        topics: [
          { id: '3-1f10', title: 'Basit Elektrik Devreleri', description: 'Devre elemanlarının görevleri ve elektrik akımı kavramı.' },
          { id: '3-2f10', title: 'Ohm Yasası', description: 'Potansiyel fark, akım ve direnç arasındaki ilişki (V=I·R).' },
          { id: '3-3f10', title: 'Bağlanma Şekilleri', description: 'Dirençlerin ve üreteçlerin seri/paralel bağlanması; eşdeğer direnç.' },
          { id: '3-4f10', title: 'Elektrik Güvenliği ve Topraklama', description: 'Elektrik akımının tehlikeleri ve topraklama sisteminin önemi.' }
        ]
      },
      {
        id: '10f-tema-4',
        title: '4. TEMA: DALGALAR',
        description: 'Dalga hareketinin doğasını ve toplumsal etkilerini (deprem vb.) ele alır.',
        topics: [
          { id: '4-1f10', title: 'Dalgaların Temel Kavramları', description: 'Genlik, frekans, periyot, dalga boyu ve sınıflandırma.' },
          { id: '4-2f10', title: 'Yayılma Sürati ve Periyodik Hareketler', description: 'Hız-ortam ilişkisi ve salınım hareketleri.' },
          { id: '4-3f10', title: 'Su Dalgalarında Yansıma ve Kırılma', description: 'Dalga leğeni deneyleri ve stroboskop kullanımı.' },
          { id: '4-4f10', title: 'Rezonans ve Deprem', description: 'Rezonansın yapılara etkisi ve depremden korunma yolları.' }
        ]
      }
    ]
  },
  {
    id: 'tyt-matematik',
    grade: 'TYT',
    subject: 'Matematik',
    themes: [
      {
        id: 'tyt-m-1',
        title: '1. TEMA: TEMEL KAVRAMLAR VE SAYILAR',
        description: 'Matematiğin alfabesidir. Soruların %20\'si doğrudan veya dolaylı olarak bu kısımdan gelir.',
        topics: [
          { id: 'tm1-1', title: 'Sayı Kümeleri', description: 'Doğal sayılar, tam sayılar, rasyonel, irrasyonel ve reel sayılar arasındaki hiyerarşi.' },
          { id: 'tm1-2', title: 'Tek ve Çift Sayılar', description: 'İşlem özellikleri, yorum soruları ve üslü ifadelerde teklik-çiftlik.' },
          { id: 'tm1-3', title: 'Ardışık Sayılar', description: 'Ardışık sayı dizileri, terim sayısı ve toplam formülleri (Gauss Toplamı).' },
          { id: 'tm1-4', title: 'Asal Sayılar ve Faktöriyel', description: 'Asal sayılar, aralarında asallık, pozitif bölen sayısı ve faktöriyel sadeleştirmeleri.' },
          { id: 'tm1-5', title: 'Sayı Basamakları', description: 'Basamak değeri, çözümleme ve basamak kaydırma işlemleri.' },
          { id: 'tm1-6', title: 'Bölme ve Bölünebilme', description: 'Tüm bölünebilme kuralları ve kalan analizi (Mod mantığı).' },
          { id: 'tm1-7', title: 'EBOB-EKOK', description: 'Ortak bölen ve kat uygulamaları, periyodik durum problemleri ve parselleme.' }
        ]
      },
      {
        id: 'tyt-m-2',
        title: '2. TEMA: RASYONEL SAYILAR VE ONDALIK GÖSTERİM',
        description: 'Sayılar üzerinde işlem yeteneği ve görselleştirme becerisi kazandırır.',
        topics: [
          { id: 'tm2-1', title: 'Rasyonel İşlemler', description: 'Dört işlem (toplama, çıkarma, çarpma, bölme) ve işlem önceliği.' },
          { id: 'tm2-2', title: 'Sıralama', description: 'Paydaları veya payları eşitleyerek sıralama yöntemleri.' },
          { id: 'tm2-3', title: 'Ondalık ve Devirli Sayılar', description: 'Ondalık gösterimler, devirli ondalık açılımlar ve rasyonele çevirme.' }
        ]
      },
      {
        id: 'tyt-m-3',
        title: '3. TEMA: BİRİNCİ DERECEDEN DENKLEMLER VE EŞİTSİZLİKLER',
        description: 'Cebirsel ifade kurma ve çözme yeteneğini geliştirir.',
        topics: [
          { id: 'tm3-1', title: 'Denklem Çözme', description: 'Bir bilinmeyenli denklemler ve çözüm kümesi analizi (Sonsuz/Boş Çözüm).' },
          { id: 'tm3-2', title: 'Basit Eşitsizlikler', description: 'Aralık kavramı, eşitsizliğin özellikleri ve yön değiştirme kuralları.' },
          { id: 'tm3-3', title: 'Mutlak Değer', description: 'Özellikler, mutlak değerli denklemler ve eşitsizlikler (Uzaklık temelli yorum).' }
        ]
      },
      {
        id: 'tyt-m-4',
        title: '4. TEMA: ÜSLÜ VE KÖKLÜ İFADELER',
        description: 'Karmaşık sayısal verileri sadeleştirme ve analiz etmeyi öğretir.',
        topics: [
          { id: 'tm4-1', title: 'Üslü Sayılar', description: 'Üs alma kuralları, üslü denklemler ve bilimsel gösterim.' },
          { id: 'tm4-2', title: 'Köklü Sayılar', description: 'Kökten çıkarma, eşlenik çarpımı ve yaklaşık değer tespiti.' }
        ]
      },
      {
        id: 'tyt-m-5',
        title: '5. TEMA: ORAN-ORANTI VE PROBLEMLER',
        description: 'TYT\'nin "kalbi" burasıdır. Sınavın yaklaşık 10-12 sorusu bu başlık altından gelir.',
        topics: [
          { id: 'tm5-1', title: 'Oran-Orantı Temelleri', description: 'Doğru, ters and bileşik orantı; aritmetik ortalama.' },
          { id: 'tm5-2', title: 'Sayı ve Kesir Problemleri', description: 'Yeni nesil hikayeleştirilmiş soruları denkleme dökme becerisi.' },
          { id: 'tm5-3', title: 'Yaş Problemleri', description: 'Zaman içindeki yaş değişimlerinin modellenmesi.' },
          { id: 'tm5-4', title: 'Yüzde, Kâr-Zarar', description: 'Alış-satış, indirim, zam ve enflasyon hesapları.' },
          { id: 'tm5-5', title: 'Hız (Hareket) Problemleri', description: 'Yol = Hız x Zaman; ortalama hız, karşılaşma ve yakalama durumları.' },
          { id: 'tm5-6', title: 'Karışım ve İşçi Problemleri', description: 'Madde oranları ve ortak çalışma mantığı.' },
          { id: 'tm5-7', title: 'Rutin Olmayan Problemler', description: 'Mantık yürütme, tablo/grafik okuma ve kurgusal problemler.' }
        ]
      },
      {
        id: 'tyt-m-6',
        title: '6. TEMA: KÜMELER, MANTIK VE FONKSİYONLAR',
        description: 'Modern matematiğin yapı taşları ve mantıksal kurgular.',
        topics: [
          { id: 'tm6-1', title: 'Mantık', description: 'Önermeler, bileşik ve koşullu önermeler (p ⇒ q), niceleyiciler.' },
          { id: 'tm6-2', title: 'Kümeler', description: 'Alt küme, kartezyen çarpım, Venn şeması problemleri.' },
          { id: 'tm6-3', title: 'Fonksiyonlar', description: 'Tanım/Değer kümesi, fonksiyon türleri ve grafik okuma.' }
        ]
      },
      {
        id: 'tyt-m-7',
        title: '7. TEMA: İSTATİSTİK VE OLASILIK',
        description: 'Veri analizi ve belirsizlik durumlarını yönetme becerisi.',
        topics: [
          { id: 'tm7-1', title: 'İstatistik', description: 'Ortalama, mod, medyan, standart sapma ve grafik yorumlama.' },
          { id: 'tm7-2', title: 'Permütasyon-Kombinasyon', description: 'Toplama/Çarpma yoluyla sayma, sıralama ve seçme/gruplama.' },
          { id: 'tm7-3', title: 'Binom ve Olasılık', description: 'Binom açılımı ve basit/bağımlı/koşullu olayların olasılığı.' }
        ]
      },
      {
        id: 'tyt-m-8',
        title: '8. TEMA: POLİNOMLAR VE ÇARPANLARA AYIRMA',
        description: 'Cebirsel ifadelerin derinlemesine incelenmesi.',
        topics: [
          { id: 'tm8-1', title: 'Polinomlar', description: 'Tanım, katsayılar toplamı, sabit terim ve polinom bölmesi.' },
          { id: 'tm8-2', title: 'Çarpanlara Ayırma', description: 'Tam kare, iki kare farkı, küp açılımları ve sadeleştirme.' }
        ]
      },
      {
        id: 'tyt-m-9',
        title: '9. TEMA: TYT GEOMETRİ KONULARI',
        description: 'Görsel zeka ve geometrik bağıntıları uygulama becerisi.',
        topics: [
          { id: 'tm9-1', title: 'Üçgenler', description: 'Açılar, dik/ikizkenar/eşkenar üçgenler, benzerlik ve alan.' },
          { id: 'tm9-2', title: 'Çokgenler ve Dörtgenler', description: 'Paralelkenar, dikdörtgen, kare, yamuk ve deltoid özellikleri.' },
          { id: 'tm9-3', title: 'Çember ve Daire', description: 'Çemberde açılar, uzunluk ve dairenin alanı.' },
          { id: 'tm9-4', title: 'Katı Cisimler', description: 'Prizmalar, piramitler ve küre (Hacim/Alan).' },
          { id: 'tm9-5', title: 'Analitik Geometri', description: 'Noktanın ve doğrunun analitik incelenmesi.' }
        ]
      }
    ]
  },
  {
    id: 'tyt-fizik',
    grade: 'TYT',
    subject: 'Fizik',
    themes: [
      {
        id: 'tyt-f-1',
        title: '1. TEMA: FİZİK BİLİMİNE GİRİŞ VE MADDE',
        description: 'Fiziğin doğası, ölçme ve madde özelliklerini kapsar.',
        topics: [
          { id: 'tf1-1', title: 'Fizik Bilimine Giriş', description: 'Fiziğin alt dalları, temel ve türetilmiş büyüklükler.' },
          { id: 'tf1-2', title: 'Madde ve Özellikleri', description: 'Kütle, hacim, özkütle, dayanıklılık, adezyon ve kohezyon.' }
        ]
      },
      {
        id: 'tyt-f-2',
        title: '2. TEMA: KUVVET VE HAREKET',
        description: 'Hareket, Newton yasaları ve sürtünmeyi inceler.',
        topics: [
          { id: 'tf2-1', title: 'Hareket', description: 'Konum, sürat, hız ve ivme kavramları.' },
          { id: 'tf2-2', title: 'Kuvvet', description: 'Newton’un hareket yasaları ve sürtünme kuvveti.' }
        ]
      },
      {
        id: 'tyt-f-3',
        title: '3. TEMA: OPTİK',
        description: 'Işığın davranışı, aynalar ve mercekleri kapsar.',
        topics: [
          { id: 'tf3-1', title: 'Aydınlanma ve Gölge', description: 'Işık şiddeti, akısı ve gölge oluşumu.' },
          { id: 'tf3-2', title: 'Yansıma ve Aynalar', description: 'Düzlem, çukur ve tümsek aynalar.' }
        ]
      }
    ]
  },
  {
    id: 'tyt-kimya',
    grade: 'TYT',
    subject: 'Kimya',
    themes: [
      {
        id: 'tyt-k-1',
        title: '1. TEMA: KİMYA BİLİMİ VE ATOM',
        description: 'Kimya uygulamaları ve atomun yapısını kapsar.',
        topics: [
          { id: 'tk1-1', title: 'Kimya Bilimi', description: 'Simyadan kimyaya, kimya disiplinleri ve güvenlik.' },
          { id: 'tk1-2', title: 'Atomun Yapısı', description: 'Atom modelleri ve temel tanecikler.' }
        ]
      },
      {
        id: 'tyt-k-2',
        title: '2. TEMA: PERİYODİK SİSTEM VE ETKİLEŞİMLER',
        description: 'Elementlerin düzeni ve bağ oluşumlarını inceler.',
        topics: [
          { id: 'tk2-1', title: 'Periyodik Sistem', description: 'Grup, periyot ve periyodik özellikler.' },
          { id: 'tk2-2', title: 'Kimyasal Türler Arası Etkileşimler', description: 'Güçlü ve zayıf etkileşimlerin sınıflandırılması.' }
        ]
      }
    ]
  },
  {
    id: 'tyt-biyoloji',
    grade: 'TYT',
    subject: 'Biyoloji',
    themes: [
      {
        id: 'tyt-b-1',
        title: '1. TEMA: YAŞAM BİLİMİ VE HÜCRE',
        description: 'Canlıların bileşenleri ve hücre yapısını kapsar.',
        topics: [
          { id: 'tb1-1', title: 'Canlıların Ortak Özellikleri', description: 'Beslenme, solunum, boşaltım vb.' },
          { id: 'tb1-2', title: 'Hücre', description: 'Hücre yapısı, organeller ve madde geçişleri.' }
        ]
      },
      {
        id: 'tyt-b-2',
        title: '2. TEMA: KALITIM VE EKOLOJİ',
        description: 'Genetik ilkeler ve çevre bilimini inceler.',
        topics: [
          { id: 'tb2-1', title: 'Kalıtım', description: 'Mendel genetiği ve soyağaçları.' },
          { id: 'tb2-2', title: 'Ekosistem Ekolojisi', description: 'Besin zinciri ve madde döngüleri.' }
        ]
      }
    ]
  }
];
