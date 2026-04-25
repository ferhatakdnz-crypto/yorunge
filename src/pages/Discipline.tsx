import React, { useMemo } from 'react';
import { 
  Gavel, 
  Search, 
  FileEdit, 
  ShieldAlert, 
  ArrowRight,
  Clock,
  User,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useStudents } from '../context/StudentContext';

export default function Discipline() {
  const { students } = useStudents();

  const allCases = useMemo(() => {
    const cases: any[] = [];
    students.forEach(student => {
      if (student.disciplinaryRecords) {
        student.disciplinaryRecords.forEach(record => {
          cases.push({
            ...record,
            studentName: student.name,
            grade: student.grade,
            studentId: student.id
          });
        });
      }
    });
    return cases.sort((a, b) => b.date.localeCompare(a.date));
  }, [students]);

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Disiplin ve Onur Kurulu</h1>
          <p className="text-sleek-muted mt-1 font-medium">MEB yönetmeliğine uygun vaka takibi ve kurul kararları.</p>
        </div>
        <button className="btn-primary shadow-lg shadow-blue-500/20">
          <ShieldAlert size={18} className="text-white" />
          Yeni Olay Girişi
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Case Entry Form - Sleekified Version */}
        <div className="card-sleek h-fit space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FileEdit size={20} className="text-brand-primary" />
            Vaka / Olay Girişi
          </h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Öğrenci Seçin</label>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-sleek-muted" />
                <input type="text" placeholder="İsim veya No ile ara..." className="w-full bg-slate-900/50 border border-sleek-border rounded-xl py-2 pl-9 pr-4 text-sm text-white focus:border-brand-primary outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-sleek_muted uppercase tracking-widest">Olay Detayı</label>
              <textarea rows={4} placeholder="Öğretmen / Nöbetçi raporu..." className="w-full bg-slate-900/50 border border-sleek-border rounded-xl py-3 px-4 text-sm text-white focus:border-brand-primary outline-none transition-all resize-none" />
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all">
              MEB Yönetmeliğine Göre Analiz Et
            </button>
            <p className="text-[10px] text-center text-sleek-muted">Yapay zeka asistanı yönetmeliği tarayarak madde önerisinde bulunur.</p>
          </div>
        </div>

        {/* Active Files List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-sleek">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Gavel size={20} className="text-brand-primary" />
              Aktif Disiplin Dosyaları
            </h3>

            <div className="space-y-4">
              {allCases.map((item) => (
                <div key={item.id} className="p-5 rounded-2xl bg-slate-900/40 border border-sleek-border flex items-center justify-between group hover:border-brand-primary/40 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-sleek-border flex items-center justify-center relative shadow-lg">
                      <User size={20} className="text-sleek-text opacity-60" />
                      <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900 ${
                        item.severity === 'High' ? 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]' :
                        item.severity === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
                      }`}></span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.studentName}</h4>
                      <p className="text-xs text-sleek-muted mt-0.5">{item.grade} • <span className="text-sleek-text uppercase text-[10px] font-bold">{item.incident}</span></p>
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Durum</p>
                      <div className="flex items-center gap-1.5 mt-1 justify-end">
                        {item.status.includes('Bitti') ? <CheckCircle size={12} className="text-emerald-400" /> : <Clock size={12} className="text-amber-400" />}
                        <span className="text-xs font-bold text-white">{item.status}</span>
                      </div>
                    </div>
                    <button className="p-2 rounded-lg bg-white/5 text-sleek-muted hover:text-white hover:bg-brand-primary/20 transition-all border border-white/5">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 border-2 border-dashed border-sleek-border rounded-2xl text-xs font-bold text-sleek-muted hover:text-white hover:border-brand-primary/40 transition-all">
              Arşivi Görüntüle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
