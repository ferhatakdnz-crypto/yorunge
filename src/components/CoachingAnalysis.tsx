import React from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Activity,
  Calendar,
  BookOpen
} from 'lucide-react';
import { Student as StudentType, WeeklyPlan as WeeklyPlanType } from '../context/StudentContext';

interface AnalysisProps {
  student: StudentType;
}

export default function CoachingAnalysis({ student }: AnalysisProps) {
  const plans = student.coaching?.weeklyPlans || [];
  
  // Calculate general stats
  const totalTasks = plans.reduce((acc, p) => acc + p.tasks.length, 0);
  const completedTasks = plans.reduce((acc, p) => acc + p.tasks.filter(t => t.completed).length, 0);
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Subject-based analysis
  const subjectStatsMap: Record<string, { total: number; completed: number }> = {};
  plans.forEach(p => {
    p.tasks.forEach(t => {
      if (!subjectStatsMap[t.subject]) {
        subjectStatsMap[t.subject] = { total: 0, completed: 0 };
      }
      subjectStatsMap[t.subject].total += 1;
      if (t.completed) subjectStatsMap[t.subject].completed += 1;
    });
  });

  const subjectData = Object.entries(subjectStatsMap)
    .map(([name, stats]) => ({
      name,
      rate: Math.round((stats.completed / stats.total) * 100),
      total: stats.total
    }))
    .sort((a, b) => b.rate - a.rate);

  // Type analysis (Konu vs Soru)
  const typeStats = {
    konu: { total: 0, completed: 0 },
    soru: { total: 0, completed: 0 }
  };
  plans.forEach(p => {
    p.tasks.forEach(t => {
      if (t.type === 'konu') {
        typeStats.konu.total += 1;
        if (t.completed) typeStats.konu.completed += 1;
      } else {
        typeStats.soru.total += 1;
        if (t.completed) typeStats.soru.completed += 1;
      }
    });
  });

  const typePieData = [
    { name: 'Konu', value: typeStats.konu.total, color: '#3b82f6' },
    { name: 'Soru', value: typeStats.soru.total, color: '#fbbf24' }
  ];

  // Weekly progress
  const weeklyProgress = plans.map(p => {
    const total = p.tasks.length;
    const completed = p.tasks.filter(t => t.completed).length;
    return {
      name: `${p.startDate.split('-')[2]}.${p.startDate.split('-')[1]}`,
      rate: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }).reverse();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalysisCard 
          icon={<Trophy className="text-amber-400" />}
          label="Genel Başarı"
          value={`%${completionRate}`}
          subtext={`${completedTasks} / ${totalTasks} Görev Tamamlandı`}
          color="amber"
        />
        <AnalysisCard 
          icon={<Target className="text-blue-400" />}
          label="Toplam Görev"
          value={totalTasks}
          subtext="Tüm programlardaki görev sayısı"
          color="blue"
        />
        <AnalysisCard 
          icon={<Activity className="text-emerald-400" />}
          label="İstikrar"
          value={plans.length > 0 ? "Yüksek" : "Veri Yok"}
          subtext={`${plans.length} Haftalık Plan Kaydı`}
          color="emerald"
        />
        <AnalysisCard 
          icon={<Clock className="text-purple-400" />}
          label="Son Güncelleme"
          value={student.coaching?.lastMeeting || "Belirtilmedi"}
          subtext="Koç görüşme tarihi"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Progress Chart */}
        <div className="lg:col-span-2 card-sleek p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
              <TrendingUp size={16} className="text-brand-primary" />
              Haftalık Başarı Grafiği
            </h3>
          </div>
          <div className="h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyProgress}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10 }}
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid #1e293b', 
                    borderRadius: '12px',
                    fontSize: '11px'
                  }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Bar 
                  dataKey="rate" 
                  fill="#3b82f6" 
                  radius={[6, 6, 0, 0]}
                  animationDuration={1500}
                >
                  {weeklyProgress.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={weeklyProgress[index].rate > 70 ? '#10b981' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Task Type Distribution */}
        <div className="card-sleek p-6 space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
            <Calendar size={16} className="text-amber-400" />
            Görev Dağılımı
          </h3>
          <div className="h-48 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typePieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {typePieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid #1e293b', 
                    borderRadius: '12px',
                    fontSize: '11px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xl font-bold text-white">{totalTasks}</span>
              <span className="text-[10px] text-sleek-muted uppercase">Görev</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {typePieData.map(item => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-sleek-muted">{item.name}</span>
                <span className="text-xs font-bold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject wise analysis */}
        <div className="card-sleek p-6 space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
            <BookOpen size={16} className="text-brand-primary" />
            Ders Bazlı Başarı Oranları
          </h3>
          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            {subjectData.map(s => (
              <div key={s.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white">{s.name}</span>
                  <span className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">% {s.rate} Başarı</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${s.rate > 80 ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : s.rate > 50 ? 'bg-blue-500' : 'bg-rose-500'}`}
                    style={{ width: `${s.rate}%` }}
                  />
                </div>
              </div>
            ))}
            {subjectData.length === 0 && (
              <div className="text-center py-10">
                <AlertCircle size={32} className="mx-auto text-slate-800 mb-2" />
                <p className="text-xs text-sleek-muted">Analiz edilecek ders verisi bulunamadı.</p>
              </div>
            )}
          </div>
        </div>

        {/* Program History */}
        <div className="card-sleek p-6 space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-white flex items-center gap-2">
            <Activity size={16} className="text-white" />
            Program Geçmişi (Tüm Kayıtlar)
          </h3>
          <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            {plans.map((p, idx) => {
              const comp = Math.round((p.tasks.filter(t => t.completed).length / (p.tasks.length || 1)) * 100);
              return (
                <div key={p.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sleek-muted group-hover:text-white transition-colors">
                      <span className="text-xs font-bold">{plans.length - idx}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{p.startDate} - {p.endDate}</h4>
                      <p className="text-[10px] text-sleek-muted mt-0.5">{p.tasks.length} Görev Planlandı</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${comp > 80 ? 'text-emerald-500 bg-emerald-500/10' : comp > 40 ? 'text-blue-400 bg-blue-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
                      %{comp} Başarı
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalysisCard({ icon, label, value, subtext, color }: any) {
  const colorMap: any = {
    amber: "from-amber-500/20 to-transparent border-amber-500/20 text-amber-400",
    blue: "from-blue-500/20 to-transparent border-blue-500/20 text-blue-400",
    emerald: "from-emerald-500/20 to-transparent border-emerald-500/20 text-emerald-400",
    purple: "from-purple-500/20 to-transparent border-purple-500/20 text-purple-400"
  };

  return (
    <div className={`card-sleek p-6 relative overflow-hidden bg-gradient-to-br border-l-2 ${colorMap[color]}`}>
      <div className="flex items-start justify-between relative z-10">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-[10px] text-sleek-muted mt-4 relative z-10">{subtext}</p>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] -mr-16 -mt-16 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
