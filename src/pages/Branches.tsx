import React from 'react';
import { School, MapPin, Users, BookOpen, MoreHorizontal, Plus } from 'lucide-react';

const BRANCHES = [
  { id: 1, name: '12-A', level: '12. Sınıf', type: 'Sayısal', room: 'Zemin - 101', count: 32 },
  { id: 2, name: '11-B', level: '11. Sınıf', type: 'Eşit Ağırlık', room: '1. Kat - 204', count: 28 },
  { id: 3, name: '9-D', level: '9. Sınıf', type: 'Fen Bilimleri', room: '2. Kat - 302', count: 30 },
];

export default function Branches() {
  return (
    <div className="space-y-8 animate-in slide-in-from-left-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Şube ve Sınıf Yönetimi</h1>
          <p className="text-sleek-muted mt-1 font-medium">Okul bünyesindeki aktif sınıflar ve derslik atamaları.</p>
        </div>
        <button className="btn-primary shadow-lg shadow-blue-500/20 px-8">
          <Plus size={18} />
          Yeni Şube Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BRANCHES.map((s) => (
          <div key={s.id} className="card-sleek group hover:border-brand-primary/40 transition-all border-l-4 border-l-brand-primary">
            <div className="flex justify-between items-start mb-6">
               <div className="bg-slate-900 border border-sleek-border p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <School size={24} className="text-brand-primary" />
               </div>
               <button className="text-sleek-muted hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
               </button>
            </div>
            
            <h3 className="text-2xl font-black text-white tracking-tight">{s.name}</h3>
            <p className="text-xs font-bold text-brand-primary uppercase tracking-widest mt-1">{s.level} • {s.type}</p>
            
            <div className="mt-8 pt-6 border-t border-sleek-border/50 flex items-center justify-between">
               <div className="flex items-center gap-2 text-xs text-sleek-muted font-bold">
                  <MapPin size={14} className="text-rose-400" />
                  {s.room}
               </div>
               <div className="flex items-center gap-2 text-xs text-sleek-muted font-bold">
                  <Users size={14} className="text-blue-400" />
                  {s.count} Öğrenci
               </div>
            </div>
            
            <button className="w-full mt-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-sleek-text hover:bg-white/10 transition-all flex items-center justify-center gap-2">
               <BookOpen size={14} />
               Ders Programını Gör
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
