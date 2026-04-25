import React from 'react';
import { Calendar, Clock, Info, Save, ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
const TIMES = ['08:30', '09:20', '10:10', '11:00', '11:50', '13:30', '14:20', '15:10'];

export default function Schedule() {
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Akıllı Ders Dağıtımı</h1>
          <p className="text-sleek-muted mt-1 font-medium">Haftalık ders programı planlama ve çakışma kontrol merkezi.</p>
        </div>
        <div className="flex gap-4">
           <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
              <button className="p-2 hover:text-white text-sleek-muted"><ChevronLeft size={18} /></button>
              <span className="px-4 text-xs font-bold text-white">12-A Şubesi</span>
              <button className="p-2 hover:text-white text-sleek-muted"><ChevronRight size={18} /></button>
           </div>
           <button className="btn-primary shadow-lg shadow-blue-500/20">
             <Save size={18} />
             Programı Kaydet
           </button>
        </div>
      </div>

      <div className="card-sleek !p-0 overflow-hidden">
        <div className="overflow-x-auto text-center">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-sleek-border">
                <th className="p-4 w-24 border-r border-sleek-border text-[10px] uppercase font-black text-sleek-muted">Saat</th>
                {DAYS.map(day => (
                  <th key={day} className="p-4 min-w-[150px] text-[10px] uppercase font-black text-sleek-muted border-r last:border-0 border-sleek-border">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIMES.map((time, idx) => (
                <tr key={time} className="border-b last:border-0 border-sleek-border/50">
                  <td className="p-6 border-r border-sleek-border font-mono text-xs font-bold text-brand-primary bg-slate-900/40">
                    <div className="flex items-center justify-center gap-2">
                       <Clock size={12} />
                       {time}
                    </div>
                  </td>
                  {DAYS.map(day => {
                    const isOccupied = Math.random() > 0.3;
                    const isConflict = idx === 1 && day === 'Pazartesi';
                    
                    return (
                      <td key={day} className="p-2 border-r last:border-0 border-sleek-border/50 group relative">
                         {isOccupied ? (
                           <div className={`p-3 h-full rounded-xl border text-left transition-all ${
                             isConflict 
                               ? 'bg-rose-500/10 border-rose-500/30 ring-1 ring-rose-500/20' 
                               : 'bg-blue-500/5 border-blue-500/10 hover:bg-brand-primary hover:border-brand-primary'
                           } group-hover:scale-[1.02] cursor-pointer`}>
                              <div className="text-[10px] font-black uppercase text-sleek-muted group-hover:text-white/80 transition-colors">Matematik</div>
                              <div className="text-sm font-bold text-white mt-1 group-hover:text-white">Selim Aksoy</div>
                              {isConflict && (
                                <div className="absolute top-2 right-2 text-rose-500 animate-pulse">
                                   <Info size={14} />
                                </div>
                              )}
                           </div>
                         ) : (
                           <div className="h-16 rounded-xl border border-dashed border-sleek-border/30 hover:border-brand-primary/40 transition-all flex items-center justify-center text-sleek-muted opacity-0 hover:opacity-100 italic text-[10px] uppercase font-bold tracking-widest">
                              BOŞ
                           </div>
                         )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 border-dashed">
         <div className="flex items-center gap-2 text-xs font-bold text-sleek-muted">
            <span className="w-3 h-3 rounded-full bg-brand-primary"></span>
            Normal Ders
         </div>
         <div className="flex items-center gap-2 text-xs font-bold text-sleek-muted">
            <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></span>
            Öğretmen Çakışması
         </div>
         <div className="ml-auto flex items-center gap-2 text-[10px] text-sleek-muted uppercase font-black">
            <Info size={14} className="text-brand-primary" />
            Çakışmaları önlemek için akıllı uyarı sistemi devrede.
         </div>
      </div>
    </div>
  );
}
