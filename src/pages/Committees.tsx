import React from 'react';
import { Users, ShieldCheck, FileText, Download, Upload, Plus, ChevronRight, Scale } from 'lucide-react';

const COMMITTEES = [
  { id: 1, name: 'Sınav Yürütme Komisyonu', role: 'Başkan: Selim Hoca', members: 4, rule: 'Ortak sınavların güvenliğini sağlar.', color: 'border-blue-500' },
  { id: 2, name: 'Kantin Denetleme Kurulu', role: 'Başkan: Hakan Yılmaz', members: 3, rule: 'Aylık hijyen ve fiyat denetimi yapar.', color: 'border-amber-500' },
  { id: 3, name: 'Rehberlik Yürütme Kurulu', role: 'Başkan: Müdür Yard.', members: 5, rule: 'Öğrenci davranış ve gelişimini izler.', color: 'border-emerald-500' },
];

export default function Committees() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Kurul ve Komisyonlar</h1>
          <p className="text-sleek-muted mt-1 font-medium">Resmi görevlendirmeler, toplantı tutanakları ve mevzuat takibi.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMMITTEES.map((k) => (
          <div key={k.id} className={`card-sleek group hover:border-brand-primary/40 transition-all border-l-4 ${k.color}`}>
            <div className="flex flex-col h-full">
               <div className="flex justify-between items-start mb-6">
                  <div className="bg-slate-900 border border-sleek-border p-3 rounded-2xl">
                     <Scale size={24} className="text-brand-primary" />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-2 py-1 rounded text-[10px] font-bold text-sleek-muted">
                     {k.members} Üye
                  </div>
               </div>
               
               <h3 className="text-lg font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">{k.name}</h3>
               <p className="text-xs text-sleek-muted mt-1 font-medium uppercase tracking-widest">{k.role}</p>
               
               <div className="mt-4 p-3 rounded-xl bg-slate-900/50 border border-sleek-border/50">
                  <p className="text-[10px] text-amber-500/80 font-black uppercase tracking-tighter mb-1 select-none">Mevzuat / Kural</p>
                  <p className="text-[11px] text-sleek-muted leading-relaxed font-medium italic">{k.rule}</p>
               </div>

               <div className="mt-auto pt-6 flex flex-col gap-2">
                  <button className="w-full py-2 rounded-lg bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                     <FileText size={14} />
                     Tutanak Hazırla
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                     <button className="py-2.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-sleek-muted hover:text-white flex items-center justify-center gap-1.5 transition-all">
                        <Download size={12} />
                        Şablon Al
                     </button>
                     <button className="py-2.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-sleek-muted hover:text-white flex items-center justify-center gap-1.5 transition-all">
                        <Upload size={12} />
                        İmzalı Yükle
                     </button>
                  </div>
               </div>
            </div>
          </div>
        ))}

        <div className="card-sleek border-dashed flex flex-col items-center justify-center p-8 group cursor-pointer hover:border-brand-primary/40 transition-all">
           <div className="w-12 h-12 rounded-full bg-slate-900 border border-sleek-border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus size={20} className="text-sleek-muted group-hover:text-brand-primary" />
           </div>
           <p className="text-xs font-black uppercase tracking-widest text-sleek-muted group-hover:text-white">Komisyon Ekle</p>
        </div>
      </div>
    </div>
  );
}
