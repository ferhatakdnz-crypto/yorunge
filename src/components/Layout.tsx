import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Atom, 
  LayoutDashboard, 
  UserPlus, 
  Settings, 
  Calendar, 
  Gavel, 
  Target, 
  Calculator, 
  Theater, 
  ListCheck, 
  GraduationCap, 
  Library, 
  Users, 
  ShieldCheck, 
  Volume2, 
  FileText, 
  Eraser, 
  School,
  MapPin,
  Grid,
  Shield
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MENU_CATEGORIES = [
  {
    name: 'Akademik & Öğrenci',
    items: [
      { title: 'Dashboard', icon: LayoutDashboard, path: '/' },
      { title: 'Öğrenci İşleri', icon: UserPlus, path: '/okul-kayit' },
      { title: 'Kazanımlar', icon: Library, path: '/kazanimlar' },
      { title: 'Eğitim Koçum', icon: Target, path: '/egitim-kocum' },
      { title: 'Şubeler', icon: School, path: '/subeler' },
      { title: 'Ders Programı', icon: Calendar, path: '/ders-programi' },
    ]
  },
  {
    name: 'İdari & Operasyonel',
    items: [
      { title: 'Personel', icon: ShieldCheck, path: '/personeller' },
      { title: 'Görevlerim', icon: ListCheck, path: '/gorevler' },
      { title: 'Disiplin', icon: Gavel, path: '/disiplin' },
      { title: 'Kurullar', icon: Users, path: '/kurul-komisyonlar' },
      { title: 'Ek Ders', icon: Calculator, path: '/ek-ders' },
    ]
  },
  {
    name: 'Kampüs & Lojistik',
    items: [
      { title: 'Güvenlik', icon: ShieldCheck, path: '/ziyaretci' },
      { title: 'Temizlik', icon: Eraser, path: '/temizlik' },
      { title: 'Mekanlar', icon: MapPin, path: '/odalar' },
      { title: 'Sosyal Etkinlik', icon: Theater, path: '/etkinlik-evraklari' },
    ]
  }
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showRaporDropdown, setShowRaporDropdown] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-sleek-bg text-sleek-text">
      {/* Sidebar - Aside */}
      <aside className="w-64 bg-sleek-aside border-r border-sleek-border flex flex-col z-20 shadow-2xl relative">
        <div className="p-8 flex items-center gap-3">
          <div className="bg-brand-primary w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Atom size={20} />
          </div>
          <h1 className="font-bold text-xl text-white tracking-tight">YÖRÜNGE</h1>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 mt-2 space-y-8 pb-12 custom-scrollbar">
          {MENU_CATEGORIES.map((category) => (
            <div key={category.name} className="space-y-2">
              <p className="px-4 text-[10px] font-black text-sleek-muted uppercase tracking-[0.2em] opacity-50">
                {category.name}
              </p>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      cn(
                        "sidebar-link !py-2.5",
                        isActive && "active"
                      )
                    }
                  >
                    <item.icon size={16} />
                    <span className="text-xs font-semibold">{item.title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 mt-auto space-y-1 bg-slate-900/50">
           <NavLink to="/settings" className="sidebar-link !py-2.5">
              <Settings size={16} />
              <span className="text-xs font-semibold">Ayarlar</span>
           </NavLink>
           <div className="pt-4 border-t border-sleek-border/50">
              <div className="flex items-center gap-3 px-2 pb-2">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sleek-muted border border-sleek-border shadow-inner font-bold text-[10px]">
                  FA
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-white truncate">Ferhat Akdeniz</p>
                  <p className="text-[9px] text-sleek-muted truncate uppercase tracking-wider font-extrabold">Yönetici</p>
                </div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative sleek-main-bg overflow-hidden translate-z-0">
        {/* Header */}
        <header className="h-16 sleek-header flex items-center justify-between px-8 z-30 sticky top-0 backdrop-blur-xl">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-sleek-muted">Eğitim</span>
            <span className="text-sleek-muted">/</span>
            <span className="text-brand-primary">Terminal</span>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Rapor Menu Dropdown */}
             <div className="relative">
                <button 
                  onClick={() => setShowRaporDropdown(!showRaporDropdown)}
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-sleek-border flex items-center justify-center text-white hover:bg-slate-700 transition-all shadow-lg"
                >
                  <Grid size={18} />
                </button>

                {showRaporDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowRaporDropdown(false)}
                    ></div>
                    <div className="absolute right-0 mt-3 w-64 bg-slate-800 border border-sleek-border rounded-2xl shadow-2xl z-50 p-3 animate-in fade-in zoom-in-95 duration-200">
                      <p className="px-3 pb-2 text-[10px] font-black text-sleek-muted uppercase tracking-widest border-b border-sleek-border mb-2">Hızlı Erişim</p>
                      <div className="grid grid-cols-1 gap-1">
                        <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-white transition-colors">
                           <LayoutDashboard size={14} className="text-brand-primary" /> Analitik Panel
                        </Link>
                        <Link to="/okul-kayit" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-white transition-colors">
                           <UserPlus size={14} className="text-emerald-400" /> Hızlı Kayıt
                        </Link>
                        <Link to="/ders-programi" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-white transition-colors">
                           <Calendar size={14} className="text-amber-400" /> Ders Programı
                        </Link>
                      </div>
                    </div>
                  </>
                )}
             </div>

             <div className="w-px h-6 bg-sleek-border"></div>

             <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <p className="text-[10px] font-black text-white leading-none">2025-2026</p>
                  <p className="text-[8px] font-bold text-sleek-muted uppercase tracking-widest mt-1">Eğitim Yılı</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-700 border border-sleek-border flex items-center justify-center text-sleek-muted font-black text-xs uppercase shadow-inner text-[10px]">
                   Y
                </div>
             </div>
          </div>
        </header>
        
        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-[1600px] mx-auto p-8 lg:p-12 pb-24">
            {children}
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-8 bg-sleek-aside border-t border-sleek-border flex items-center justify-between px-6 text-[10px] text-sleek-muted z-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-[9px]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
              Sistem Durumu: Çevrimiçi
            </div>
            <div className="w-px h-3 bg-sleek-border"></div>
            <div className="font-bold">Aktif Kullanıcı: 142</div>
          </div>
          <div className="flex items-center gap-4 uppercase tracking-[0.2em] font-black opacity-40">
            <span>Istanbul-TR-01</span>
            <span className="w-px h-3 bg-sleek-border"></span>
            <span>Gecikme: 14ms</span>
          </div>
        </div>
      </main>
    </div>
  );
}
