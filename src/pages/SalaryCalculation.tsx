import React from 'react';
import { 
  Calculator, 
  Settings, 
  Wand2, 
  Printer, 
  FileText,
  User,
  Clock,
  Wallet
} from 'lucide-react';

const STAFF_PAYROLL = [
  { id: 1, name: 'Selim Aksoy', type: 'Kadrolu', weeklyHours: 32, extraHours: 12, extraPay: '₺4,800', total: '₺42,800' },
  { id: 2, name: 'Ayşe Kaya', type: 'Kadrolu', weeklyHours: 15, extraHours: 0, extraPay: '₺0', total: '₺45,000' },
  { id: 3, name: 'Hakan Yılmaz', type: 'Ücretli', weeklyHours: 24, extraHours: 24, extraPay: '₺9,600', total: '₺9,600' },
];

export default function SalaryCalculation() {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Ek Ders ve Bordro Yönetimi</h1>
          <p className="text-sleek-muted mt-1 font-medium">Maaş karşılığı, ek ders saat ücretleri ve bordro hesaplamaları.</p>
        </div>
        <button className="px-5 py-2.5 rounded-lg font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2">
          <Settings size={18} className="text-sleek-muted" />
          Parametre Ayarları
        </button>
      </div>

      {/* Date Range Selection Bar */}
      <div className="card-sleek flex flex-col md:flex-row items-center justify-between gap-6 bg-brand-primary/5 border-brand-primary/20">
         <div className="flex flex-wrap gap-6 items-center">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Başlangıç</label>
              <input type="date" className="bg-slate-900 border border-sleek-border rounded-lg px-3 py-2 text-xs text-white focus:border-brand-primary outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">Bitiş</label>
              <input type="date" className="bg-slate-900 border border-sleek-border rounded-lg px-3 py-2 text-xs text-white focus:border-brand-primary outline-none" />
            </div>
         </div>
         <button className="btn-primary shadow-lg shadow-blue-500/20 px-8">
           <Wand2 size={18} />
           Bordroyu Hesapla
         </button>
      </div>

      {/* Results Table */}
      <div className="card-sleek !p-0">
        <div className="p-6 border-b border-sleek-border flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText size={20} className="text-brand-primary" />
            Hesaplanan Dönem Sonuçları
          </h3>
          <button className="p-2 rounded-lg bg-white/5 text-sleek-muted hover:text-white transition-all">
            <Printer size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-sleek-border bg-slate-900/20">
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-sleek-muted">Personel</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-sleek-muted">Statü</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-sleek-muted text-center">Haftalık Ders</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-sleek-muted text-center">Ek Ders (Saat)</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-sleek-muted text-right">Ek Ücret</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-sleek-muted text-right">Toplam Ödeme</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sleek-border/50">
              {STAFF_PAYROLL.map((row) => (
                <tr key={row.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-[10px] font-bold text-brand-primary border border-sleek-border">
                        <User size={14} />
                      </div>
                      <span className="text-sm font-bold text-white">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-black uppercase px-2 py-1 rounded bg-white/5 border border-white/5 ${row.type === 'Kadrolu' ? 'text-blue-400' : 'text-amber-400'}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-sleek-text">
                       <Clock size={12} className="text-sleek-muted" />
                       {row.weeklyHours}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-xs font-bold text-brand-primary">
                    +{row.extraHours}
                  </td>
                  <td className="px-6 py-4 text-right text-xs font-mono text-emerald-400">
                    {row.extraPay}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-sm font-black text-white">
                      <Wallet size={14} className="text-sleek-muted" />
                      {row.total}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
