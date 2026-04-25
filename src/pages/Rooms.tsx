import React from 'react';
import { LayoutGrid, MapPin, Tag, Users, CheckCircle2, Clock, Plus } from 'lucide-react';

const ROOMS = [
  { id: 101, name: '10-A Sınıfı', type: 'Derslik', capacity: 35, area: '45m²', status: 'Temiz', person: 'Ayşe Kaya' },
  { id: 201, name: 'Fizik Laboratuvarı', type: 'Laboratuvar', capacity: 24, area: '60m²', status: 'Bekliyor', person: 'Mehmet Demir' },
  { id: 0, name: 'Konferans Salonu', type: 'Çok Amaçlı', capacity: 200, area: '250m²', status: 'Temiz', person: 'Hakan Yılmaz' },
];

export default function Rooms() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Mekanlar ve Kampüs Birimleri</h1>
          <p className="text-sleek-muted mt-1 font-medium">Kampüs içerisindeki tüm fiziksel alanların envanteri ve durum takibi.</p>
        </div>
        <button className="btn-primary shadow-lg shadow-blue-500/20 px-8">
          <Plus size={18} />
          Yeni Mekan Tanımla
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {ROOMS.map((room) => (
          <div key={room.id} className="card-sleek group hover:border-brand-primary/40 transition-all">
             <div className="flex justify-between items-start mb-6">
                <div className="bg-slate-900 border border-sleek-border p-3 rounded-2xl group-hover:scale-110 transition-transform">
                   <LayoutGrid size={24} className="text-brand-primary" />
                </div>
                <div className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${
                   room.status === 'Temiz' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                }`}>
                   {room.status === 'Temiz' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                   {room.status}
                </div>
             </div>

             <div className="space-y-1">
                <p className="text-[10px] font-black uppercase text-sleek-muted tracking-widest">{room.type}</p>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{room.name}</h3>
             </div>

             <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-sleek-border/50">
                <div className="space-y-1">
                   <p className="text-[9px] font-bold text-sleek-muted uppercase opacity-60">Kapasite</p>
                   <div className="flex items-center gap-2 text-xs font-bold text-sleek-text">
                      <Users size={14} className="text-brand-primary" />
                      {room.capacity} Kişi
                   </div>
                </div>
                <div className="space-y-1">
                   <p className="text-[9px] font-bold text-sleek-muted uppercase opacity-60">Boyut</p>
                   <div className="flex items-center gap-2 text-xs font-bold text-sleek-text">
                      <Tag size={14} className="text-rose-400" />
                      {room.area}
                   </div>
                </div>
             </div>

             <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-slate-800 text-[10px] flex items-center justify-center font-black text-brand-primary">
                      {room.person[0]}
                   </div>
                   <span className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Sorumlu: {room.person}</span>
                </div>
                <button className="text-[10px] font-black text-brand-primary hover:underline">
                   DETAYLAR
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
