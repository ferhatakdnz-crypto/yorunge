import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  UserPlus, 
  Phone,
  Mail,
  MoreVertical,
  Briefcase
} from 'lucide-react';

const PERSONNEL = [
  { id: 1, name: 'Selim Aksoy', role: 'Matematik Öğretmeni', type: 'Kadrolu', contact: '0532 444 11 11', email: 'selim@ekal.k12.tr', initial: 'S' },
  { id: 2, name: 'Ayşe Kaya', role: 'Müdür Yardımcısı', type: 'İdari', contact: '0533 555 22 22', email: 'ayse@ekal.k12.tr', initial: 'A' },
  { id: 3, name: 'Hakan Yılmaz', role: 'Rehberlik (PDR)', type: 'Kadrolu', contact: '0544 666 33 33', email: 'hakan@ekal.k12.tr', initial: 'H' },
  { id: 4, name: 'Fatma Şahin', role: 'Edebiyat Öğretmeni', type: 'Ücretli', contact: '0555 777 44 44', email: 'fatma@ekal.k12.tr', initial: 'F' },
];

export default function Personnel() {
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Personel Yönetimi</h1>
          <p className="text-sleek-muted mt-1 font-medium">Akademik ve idari kadro görevlendirme merkezi.</p>
        </div>
        <button className="btn-primary shadow-lg shadow-blue-500/20">
          <UserPlus size={18} />
          Yeni Personel Ekle
        </button>
      </div>

      {/* Grid of Personnel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PERSONNEL.map((person) => (
          <div key={person.id} className="card-sleek group relative overflow-hidden">
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-primary/10 transition-colors"></div>
            
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-sleek-border flex items-center justify-center text-xl font-black text-brand-primary group-hover:border-brand-primary transition-all shadow-xl">
                  {person.initial}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-brand-primary transition-colors">{person.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-sleek-muted mt-0.5 uppercase tracking-wider font-bold">
                    <Briefcase size={12} className="text-brand-primary" />
                    {person.role}
                  </div>
                </div>
              </div>
              <button className="p-1.5 rounded-lg text-sleek-muted hover:text-white hover:bg-white/5 transition-all">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-sleek-text">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-emerald-400" />
                </div>
                <span className="font-medium">{person.contact}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-sleek-text">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-blue-400" />
                </div>
                <span className="font-medium">{person.email}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sleek-border/50 flex items-center justify-between">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                person.type === 'İdari' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                person.type === 'Kadrolu' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                'bg-slate-500/10 text-slate-400 border-slate-500/20'
              }`}>
                {person.type}
              </span>
              
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-primary hover:underline">
                DOSYAYI GÖRÜNTÜLE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
