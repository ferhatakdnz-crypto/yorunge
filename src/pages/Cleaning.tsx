import React from 'react';
import { Eraser, Camera, CheckCircle2, Clock, MapPin, User, Search, Filter } from 'lucide-react';

const CLEANING_AREAS = [
  { id: 1, name: '10-A Sınıfı', type: 'Sınıf', lastCleaned: 'Dün 17:30', person: 'Ayşe Yılmaz', status: 'Pending' },
  { id: 2, name: 'Kapalı Spor Salonu', type: 'Ortak Alan', lastCleaned: 'Bugün 08:15', person: 'Mehmet Kaya', status: 'Clean' },
  { id: 3, name: 'PDR Odası', type: 'İdari', lastCleaned: 'Dün 16:00', person: 'Fatma Şahin', status: 'Pending' },
  { id: 4, name: '1. Kat Erkek WC', type: 'Lavabo', lastCleaned: 'Bugün 07:30', person: 'Ali Veli', status: 'Pending', alert: '2. Temizlik Bekleniyor' },
];

export default function Cleaning() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Temizlik ve Hijyen Takibi</h1>
          <p className="text-sleek-muted mt-1 font-medium">Kampüs genelindeki alanların günlük temizlik periyotları ve kontrolü.</p>
        </div>
        <div className="text-right">
           <p className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Sistem Saati</p>
           <span className="text-2xl font-black text-white tracking-tight">16:45</span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap gap-2">
         {['Tüm Alanlar', 'Sınıflar', 'Ortak Alanlar', 'İdari Odalar', 'Lavabolar'].map((filter, i) => (
           <button key={i} className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
              i === 0 ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 border-white/10 text-sleek-muted hover:text-white'
           }`}>
             {filter}
           </button>
         ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CLEANING_AREAS.map((area) => (
          <div key={area.id} className={`card-sleek flex flex-col group hover:border-brand-primary/40 transition-all ${
             area.status === 'Clean' ? 'border-l-4 border-l-emerald-500' : 'border-l-4 border-l-amber-500'
          }`}>
             <div className="flex justify-between items-start mb-6">
                <div>
                   <p className="text-[10px] font-black uppercase text-sleek-muted tracking-widest">{area.type}</p>
                   <h3 className="text-lg font-bold text-white mt-1">{area.name}</h3>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-sleek-border bg-slate-900 ${
                   area.status === 'Clean' ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                   <Eraser size={20} />
                </div>
             </div>

             <div className="space-y-4 flex-1">
                <div className="space-y-1.5">
                   <div className="flex items-center gap-2 text-xs text-sleek-muted">
                      <Clock size={14} className="text-brand-primary" />
                      <span>Son Temizlik: <strong className="text-white">{area.lastCleaned}</strong></span>
                   </div>
                   <div className="flex items-center gap-2 text-xs text-sleek-muted">
                      <User size={14} />
                      <span>Personel: <strong className="text-white">{area.person}</strong></span>
                   </div>
                </div>

                {area.alert && (
                  <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[10px] font-black uppercase text-rose-400 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                     {area.alert}
                  </div>
                )}
             </div>

             <div className="mt-8 pt-6 border-t border-sleek-border/50">
                {area.status === 'Clean' ? (
                  <button className="w-full py-2.5 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest text-sleek-muted hover:text-white transition-all flex items-center justify-center gap-2">
                     <Camera size={14} />
                     FOTOĞRAFI GÖR
                  </button>
                ) : (
                  <button className="w-full py-2.5 rounded-xl bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/10 hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                     <Camera size={14} />
                     TEMİZLİĞİ BİLDİR
                  </button>
                )}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
