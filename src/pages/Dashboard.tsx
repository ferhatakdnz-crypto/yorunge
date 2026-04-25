import React from 'react';
import { 
  GraduationCap, 
  PieChart, 
  School, 
  Presentation, 
  CalendarOff, 
  Contact, 
  Radio, 
  Search, 
  Wallet, 
  Calendar, 
  Utensils, 
  Theater, 
  Compass, 
  Receipt, 
  Shield, 
  ShieldCheck, 
  Stethoscope, 
  Bus, 
  ListCheck, 
  Book, 
  FileEdit, 
  Package, 
  Building2,
  ChevronRight,
  TrendingUp,
  Atom,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MODULES = [
  { 
    title: 'Öğrenci İşleri', 
    icon: GraduationCap, 
    path: '/okul-kayit',
    subModules: [
      { name: 'Okul Kayıt', path: '/okul-kayit' },
      { name: 'Topluluklar', path: '#' },
      { name: 'Kayıt Takibi', path: '/okul-kayit' }
    ]
  },
  { 
    title: 'Ölçme Değerlendirme', 
    icon: PieChart, 
    path: '#',
    subModules: [
      { name: 'Anketler', path: '#' },
      { name: 'Sınavlar', path: '#' },
      { name: 'Kazanımlar', path: '/kazanimlar' },
      { name: 'Ödevler', path: '#' }
    ]
  },
  { 
    title: 'Okul', 
    icon: School, 
    path: '/subeler',
    subModules: [
      { name: 'Mekanlar', path: '/odalar' },
      { name: 'Şubeler', path: '/subeler' },
      { name: 'Ders Programı', path: '/ders-programi' },
      { name: 'Online İşlemler', path: '#' }
    ]
  },
  { 
    title: 'Etüt Yönetimi', 
    icon: Presentation, 
    path: '#',
    subModules: [
      { name: 'Etüt Oturumları', path: '#' },
      { name: 'Öğretmen Saatleri', path: '#' }
    ]
  },
  { 
    title: 'Devamsızlık', 
    icon: CalendarOff, 
    path: '#',
    subModules: [
      { name: 'Ders Devamsızlığı', path: '#' },
      { name: 'Günlük Devamsızlık', path: '#' }
    ]
  },
  { 
    title: 'Personel', 
    icon: Contact, 
    path: '/personeller',
    subModules: [
      { name: 'Görevlendirme', path: '/personeller' },
      { name: 'PDKS', path: '#' }
    ]
  },
  { 
    title: 'İletişim', 
    icon: Radio, 
    path: '#',
    subModules: [
      { name: 'SMS İşlemleri', path: '#' },
      { name: 'Mesaj Gönder', path: '#' },
      { name: 'Ayarlar', path: '#' }
    ]
  },
  { 
    title: 'Gözlem - Davranış', 
    icon: Search, 
    path: '#',
    subModules: [
      { name: 'Uygulamalar', path: '#' },
      { name: 'Öğrenci Gözlem', path: '#' }
    ]
  },
  { 
    title: 'Finansal Yönetim', 
    icon: Wallet, 
    path: '#',
    subModules: [
      { name: 'Personel Sözleşmeleri', path: '#' },
      { name: 'Maaşlar', path: '#' },
      { name: 'Tahsilat', path: '#' },
      { name: 'Analiz', path: '#' }
    ]
  },
  { 
    title: 'Ajanda', 
    icon: Calendar, 
    path: '#',
    subModules: [
      { name: 'Liste Görünümü', path: '#' },
      { name: 'Takvim', path: '#' }
    ]
  },
  { 
    title: 'Yemekhane', 
    icon: Utensils, 
    path: '#',
    subModules: [
      { name: 'Menü Planlama', path: '#' },
      { name: 'Yemek Listesi', path: '#' }
    ]
  },
  { 
    title: 'Sosyal Etkinlik', 
    icon: Theater, 
    path: '/etkinlik-evraklari',
    subModules: [
      { name: 'Etkinlikler', path: '#' },
      { name: 'Katılımlar', path: '#' },
      { name: 'Evrak Hazırlama', path: '/etkinlik-evraklari' }
    ]
  },
  { 
    title: 'Kurs', 
    icon: Presentation, 
    path: '#',
    subModules: [
      { name: 'Kurs Planlama', path: '#' }
    ]
  },
  { 
    title: 'Rehberlik', 
    icon: Compass, 
    path: '/egitim-kocum',
    subModules: [
      { name: 'Eğitim Koçum', path: '/egitim-kocum' },
      { name: 'Mizaç Analizi', path: '#' }
    ]
  },
  { 
    title: 'Ödeme Takip', 
    icon: Receipt, 
    path: '#',
    subModules: [
      { name: 'Öğrenci Sözleşmeleri', path: '#' },
      { name: 'Tahsilat Takip', path: '#' }
    ]
  },
  { 
    title: 'Mezunlar', 
    icon: GraduationCap, 
    path: '#',
    subModules: [
      { name: 'Mezun Listesi', path: '#' }
    ]
  },
  { 
    title: 'Yetkilendirme', 
    icon: Shield, 
    path: '#',
    subModules: [
      { name: 'Kullanıcı Yetki', path: '#' },
      { name: 'LOG Kayıtları', path: '#' }
    ]
  },
  { 
    title: 'Kulüpler', 
    icon: Users, 
    path: '#',
    subModules: [
      { name: 'Öğrenci Kulüpleri', path: '#' },
      { name: 'Kulüp Evrakları', path: '#' }
    ]
  },
  { 
    title: 'Güvenlik', 
    icon: ShieldCheck, 
    path: '/ziyaretci',
    subModules: [
      { name: 'Ziyaretçi Takip', path: '/ziyaretci' },
      { name: 'Giriş-Çıkış İşlemleri', path: '/ziyaretci' }
    ]
  },
  { 
    title: 'Sağlık Modülü', 
    icon: Stethoscope, 
    path: '#',
    subModules: [
      { name: 'Tıbbi Vakalar', path: '#' },
      { name: 'Tarama', path: '#' }
    ]
  },
  { 
    title: 'Öğrenci Servisi', 
    icon: Bus, 
    path: '#',
    subModules: [
      { name: 'Servis Bilgileri', path: '#' },
      { name: 'Konum Takip', path: '#' }
    ]
  },
  { 
    title: 'Görevler', 
    icon: ListCheck, 
    path: '/gorevler',
    subModules: [
      { name: 'Görevlerim', path: '/gorevler' },
      { name: 'Onaylar', path: '#' }
    ]
  },
  { 
    title: 'Kütüphane', 
    icon: Book, 
    path: '#',
    subModules: [
      { name: 'Yayınlar', path: '#' },
      { name: 'Ödünç İşlemleri', path: '#' }
    ]
  },
  { 
    title: 'Resmi İşlemler', 
    icon: FileEdit, 
    path: '#',
    subModules: [
      { name: 'Akademik Planlayıcı', path: '#' },
      { name: 'Kurullar', path: '/kurul-komisyonlar' },
      { name: 'Disiplin', path: '/disiplin' },
      { name: 'Planlar', path: '#' },
      { name: 'Sorumluluk', path: '#' },
      { name: 'Ek Ders', path: '/ek-ders' }
    ]
  },
  { 
    title: 'Stok Takip', 
    icon: Package, 
    path: '#',
    subModules: [
      { name: 'Demirbaş', path: '#' },
      { name: 'Emanet', path: '#' }
    ]
  },
  { 
    title: 'Kampüs Hizmetleri', 
    icon: Building2, 
    path: '#',
    subModules: [
      { name: 'Temizlik', path: '/temizlik' },
      { name: 'Okul Mağazası', path: '#' },
      { name: 'Kantin Satış', path: '#' },
      { name: 'Dijital Pano', path: '#' },
      { name: 'Kampüs Birimleri', path: '/odalar' }
    ]
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-800/40 border border-sleek-border p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 text-center md:text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="bg-brand-primary/20 p-3 rounded-2xl border border-brand-primary/30">
                <Atom size={32} className="text-brand-primary" />
              </div>
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase">YÖRÜNGE</h1>
            </div>
            <p className="text-sleek-muted text-xl font-medium leading-relaxed">
              Evrensel Kültür Anadolu Lisesi Eğitim ve Yönetim Otomasyonu'na hoş geldiniz. 
              Sisteminiz tüm birimleriyle senkronize çalışmaya hazır.
            </p>
          </div>
          <div className="flex gap-6 shrink-0">
             <div className="text-center p-6 rounded-3xl bg-slate-900 border border-sleek-border">
                <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest mb-1">Kurum Skoru</p>
                <span className="text-3xl font-black text-emerald-400 italic">%98</span>
             </div>
             <div className="text-center p-6 rounded-3xl bg-slate-900 border border-sleek-border">
                <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest mb-1">Aktif İşlem</p>
                <span className="text-3xl font-black text-brand-primary italic">1.4K</span>
             </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] -mr-64 -mt-64 rounded-full"></div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-1">
        {MODULES.map((module, i) => (
          <div key={i} className="card-sleek group hover:scale-[1.02] transition-all bg-slate-800/20 border-sleek-border/50 flex flex-col min-h-[220px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-sleek-border flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all shadow-xl">
                 <module.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-brand-primary transition-colors">{module.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {module.subModules.map((sub, j) => (
                <Link 
                  key={j} 
                  to={sub.path} 
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-sleek-muted hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all whitespace-nowrap"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

