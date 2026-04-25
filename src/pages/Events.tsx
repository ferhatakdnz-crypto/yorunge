import React from 'react';
import { 
  Theater, 
  Plus, 
  MapPin, 
  Calendar, 
  Users, 
  FileText,
  CheckCircle2,
  XCircle,
  Download,
  MoreHorizontal
} from 'lucide-react';

const EVENTS = [
  { id: 1, name: 'Anıtkabir Ziyareti', type: 'Kültürel Gezi', date: '2026-05-12', location: 'Ankara', participants: 42, status: 'Onaylandı', teachers: 'Selim H., Ayşe K.' },
  { id: 2, name: 'Tiyatro: Macbeth', type: 'Sanatsal Etkinlik', date: '2026-04-28', location: 'Şehir Tiyatrosu', participants: 85, status: 'Onay Bekliyor', teachers: 'Fatma Ş.' },
  { id: 3, name: 'Basketbol Maçı', type: 'Sportif Etkinlik', date: '2026-05-02', location: 'Spor Salonu', participants: 12, status: 'Onaylandı', teachers: 'Hakan Y.' },
];

export default function Events() {
  return (
    <div className="space-y-8 animate-in slide-in-from-top-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Sosyal Etkinlik ve Gezi Evrakları</h1>
          <p className="text-sleek-muted mt-1 font-medium">MEB e-Okul modülüne uyumlu etkinlik planlama ve resmi yazışmalar.</p>
        </div>
        <button className="btn-primary shadow-lg shadow-blue-500/20">
          <Plus size={18} />
          Yeni Etkinlik Düzenle
        </button>
      </div>

      {/* Grid of Events */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {EVENTS.map((event) => (
          <div key={event.id} className="card-sleek group hover:border-brand-primary/40 transition-all flex flex-col md:flex-row gap-6">
             <div className="w-full md:w-48 h-32 rounded-xl bg-slate-900 border border-sleek-border relative overflow-hidden shrink-0">
                <img src={`https://picsum.photos/seed/${event.id}/400/300`} alt={event.name} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[8px] font-bold text-white uppercase tracking-widest">
                   {event.type}
                </div>
             </div>

             <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                   <div>
                      <h3 className="font-bold text-lg text-white group-hover:text-brand-primary transition-colors">{event.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                         <div className="flex items-center gap-1.5 text-xs text-sleek-muted font-medium">
                            <Calendar size={12} className="text-brand-primary" />
                            {event.date}
                         </div>
                         <div className="flex items-center gap-1.5 text-xs text-sleek-muted font-medium">
                            <MapPin size={12} className="text-rose-400" />
                            {event.location}
                         </div>
                      </div>
                   </div>
                   <div className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${
                      event.status === 'Onaylandı' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                   }`}>
                      {event.status}
                   </div>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-sleek-border/50">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Öğrenci</span>
                       <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                          <Users size={14} className="text-sleek-muted" />
                          {event.participants}
                       </span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Sorumlu</span>
                       <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                          <CheckCircle2 size={14} className="text-brand-primary" />
                          {event.teachers}
                       </span>
                    </div>
                    <div className="ml-auto flex gap-2">
                       <button className="p-2 rounded-lg bg-white/5 border border-white/5 text-sleek-muted hover:text-white" title="Veli İzin Kağıdı">
                          <FileText size={16} />
                       </button>
                       <button className="p-2 rounded-lg bg-white/5 border border-white/5 text-sleek-muted hover:text-white" title="PDF Raporu İndir">
                          <Download size={16} />
                       </button>
                    </div>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
