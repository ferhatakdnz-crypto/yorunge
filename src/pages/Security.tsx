import React from 'react';
import { 
  ShieldAlert, 
  LogIn, 
  LogOut, 
  UserPlus, 
  Clock,
  Camera,
  Activity,
  CheckCircle2
} from 'lucide-react';

const VISITORS = [
  { id: 1, name: 'Murat Demir', tc: '142*******', target: 'Selim Hoca', reason: 'Veli Görüşmesi', entry: '09:15', status: 'İçeride', urgent: false },
  { id: 2, name: 'Ayhan Özcan', tc: '523*******', target: 'Müdürlük', reason: 'Tedarikçi', entry: '08:45', exit: '10:20', status: 'Ayrıldı', urgent: false },
  { id: 3, name: 'Fatma Yıldız', tc: '231*******', target: 'Zeynep Kaya (11-B)', reason: 'Eşya Teslimi', entry: '11:05', status: 'İçeride', urgent: true },
];

export default function Security() {
  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Güvenlik Merkezi</h1>
          <p className="text-sleek-muted mt-1 font-medium">Kampüs giriş-çıkış ve ziyaretçi takip kontrolü.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-2.5 rounded-lg font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
            <ShieldAlert size={18} className="text-rose-500" />
            Acil Durum Modu
          </button>
          <button className="btn-primary shadow-lg shadow-blue-500/20">
            <UserPlus size={18} />
            Hızlı Ziyaretçi Girişi
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="card-sleek">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity size={20} className="text-brand-primary" />
                Sisteme Kayıtlı Ziyaretçiler
              </h3>
              <span className="text-[10px] font-black uppercase tracking-widest text-sleek-muted bg-white/5 px-3 py-1 rounded-full border border-white/5">
                Bugün: 12 Kayıt
              </span>
            </div>

            <div className="space-y-4">
              {VISITORS.map((visitor) => (
                <div key={visitor.id} className="p-5 rounded-2xl bg-slate-900/40 border border-sleek-border flex items-center justify-between group hover:border-brand-primary/40 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-sleek-border flex items-center justify-center relative shadow-lg">
                      <LogIn size={20} className={visitor.status === 'İçeride' ? 'text-amber-400' : 'text-emerald-400'} />
                      {visitor.status === 'İçeride' && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-slate-900 animate-pulse"></span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-white">{visitor.name}</h4>
                        {visitor.urgent && (
                          <span className="text-[8px] font-black uppercase bg-rose-500/10 text-rose-500 border border-rose-500/20 px-1.5 py-0.5 rounded">HIZLI GEÇİŞ</span>
                        )}
                      </div>
                      <p className="text-xs text-sleek-muted mt-0.5">TC: {visitor.tc} • Amaç: <span className="text-sleek-text">{visitor.reason}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Görüşülen</p>
                      <p className="text-xs font-bold text-white mt-1">{visitor.target}</p>
                    </div>
                    <div className="text-right w-24">
                      <p className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Giriş / Çıkış</p>
                      <p className="text-xs font-mono text-sleek-text mt-1">
                        {visitor.entry} {visitor.exit ? `/ ${visitor.exit}` : '/ --:--'}
                      </p>
                    </div>
                    <button className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${
                      visitor.status === 'İçeride' 
                        ? 'bg-amber-500/10 text-amber-500 border-amber-500/20 hover:bg-amber-500 text-white' 
                        : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 cursor-default'
                    }`}>
                      {visitor.status === 'İçeride' ? 'ÇIKIŞ VER' : 'AYRILDI'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-sleek border-rose-500/20 bg-rose-500/5">
            <h3 className="text-sm font-bold text-rose-500 mb-4 uppercase tracking-widest flex items-center gap-2">
               <Camera size={16} />
               Kapı Giriş Kamerası
            </h3>
            <div className="aspect-video rounded-xl bg-slate-900 border border-sleek-border overflow-hidden relative group">
               <img src="https://picsum.photos/seed/security/400/225" alt="CCTV" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
               <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                 <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                 <span className="text-[8px] font-bold text-white uppercase tracking-tighter">LIVE • MAIN GATE</span>
               </div>
            </div>
          </div>

          <div className="card-sleek">
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
               <CheckCircle2 size={16} className="text-emerald-400" />
               Günlük Özet
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-sleek-muted">İçerideki Ziyaretçi</span>
                <span className="font-bold text-white">8</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-sleek-muted">Toplam Giriş</span>
                <span className="font-bold text-white">42</span>
              </div>
              <div className="flex justify-between items-center text-xs border-t border-sleek-border/50 pt-4">
                <span className="text-sleek-muted font-bold text-brand-primary">Güvenlik Skoru</span>
                <span className="font-bold text-emerald-400">%100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
