import React from 'react';
import { ListCheck, Plus, CheckCircle2, Clock, Calendar, User, Camera, ShieldCheck } from 'lucide-react';

const TASKS = [
  { id: 1, title: 'Lavabo Tamiri (3. Kat)', type: 'Tekil Görev', desc: 'Mekanik servis ile görüşüldü, conta değişimi yapılacak.', deadline: 'Bugün', status: 'Devam Ediyor', person: 'Mustafa Bey', proof: true },
  { id: 2, title: '23 Nisan Hazırlıkları', type: 'İş Akışı / Proje', desc: 'Tören alanı süslenmesi ve ses sistemi kurulumu.', deadline: '22 Nisan', status: 'Bekliyor', person: 'Sosyal Komite', subtasks: 4 },
  { id: 3, title: 'Veli Bilgilendirme SMS', type: 'Tekil Görev', desc: 'Deneme sınavı sonuçları gönderilecek.', deadline: 'Yarın 12:00', status: 'Tamamlandı', person: 'Sekreterlik' },
];

export default function Tasks() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Görevler ve İş Akışı</h1>
          <p className="text-sleek-muted mt-1 font-medium">Kurum içi operasyonel görev takibi ve dijital onay sistemi.</p>
        </div>
        <button className="btn-primary shadow-lg shadow-blue-500/20">
          <Plus size={18} />
          Yeni Görev Oluştur
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {TASKS.map((task) => (
          <div key={task.id} className={`card-sleek group hover:border-brand-primary/40 transition-all border-t-4 ${
             task.status === 'Tamamlandı' ? 'border-t-emerald-500' :
             task.status === 'Bekliyor' ? 'border-t-amber-500' : 'border-t-blue-500'
          }`}>
             <div className="flex justify-between items-start mb-4">
                <div>
                   <p className="text-[10px] font-black uppercase text-sleek-muted tracking-widest">{task.type}</p>
                   <h3 className="text-xl font-bold text-white mt-1 group-hover:text-brand-primary transition-colors">{task.title}</h3>
                </div>
                <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                    task.status === 'Tamamlandı' ? 'bg-emerald-500/10 text-emerald-400' :
                    task.status === 'Bekliyor' ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                   {task.status}
                </div>
             </div>

             <p className="text-sm text-sleek-muted leading-relaxed mb-6">{task.desc}</p>

             <div className="grid grid-cols-2 gap-4 pb-6 border-b border-sleek-border/50">
                <div className="flex items-center gap-2 text-xs font-medium text-sleek-text">
                   <Calendar size={14} className="text-brand-primary" />
                   Bitiş: <span className="font-bold">{task.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-sleek-text">
                   <User size={14} className="text-sleek-muted" />
                   Sorumlu: <span className="font-bold">{task.person}</span>
                </div>
             </div>

             <div className="mt-6 flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    {task.proof && (
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-rose-400 uppercase tracking-tighter">
                         <Camera size={14} />
                         FOTOĞRAF KANITI ŞART
                      </div>
                    )}
                    {task.subtasks && (
                      <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-400 uppercase tracking-tighter">
                         <ListCheck size={14} />
                         {task.subtasks} ALT GÖREV
                      </div>
                    )}
                 </div>
                 
                 <button className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                     task.status === 'Tamamlandı' 
                       ? 'bg-slate-700/50 text-slate-400 cursor-default border border-slate-700' 
                       : 'bg-white/5 border border-white/10 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 text-white'
                 }`}>
                     {task.status === 'Tamamlandı' ? 'ARŞİVLENDİ' : 'TAMAMLA'}
                 </button>
             </div>
          </div>
        ))}
      </div>

      <div className="card-sleek bg-white/5 border-dashed flex items-center justify-center p-12 group cursor-pointer hover:border-brand-primary/40 transition-all">
         <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-slate-900 border border-sleek-border flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-brand-primary transition-all">
               <Plus size={32} className="text-sleek-muted group-hover:text-brand-primary" />
            </div>
            <div>
               <h4 className="font-bold text-white">Yeni İş Akışı Planla</h4>
               <p className="text-xs text-sleek-muted mt-1 uppercase tracking-widest font-bold">Takım arkadaşlarına görev ata</p>
            </div>
         </div>
      </div>
    </div>
  );
}
