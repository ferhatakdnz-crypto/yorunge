import React, { useState, useMemo, useEffect } from 'react';
import { 
  Target, 
  Flag, 
  Trophy, 
  TrendingUp,
  ListCheck,
  Search,
  Plus,
  Clock,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  X,
  Check,
  ArrowRight,
  Calendar,
  MoreVertical,
  Edit2,
  Trash2,
  Save,
  Sparkles
} from 'lucide-react';

import { 
  useStudents, 
  Student as StudentType, 
  Task as TaskType,
  WeeklyPlan as WeeklyPlanType
} from '../context/StudentContext';
import { useCurriculum } from '../context/CurriculumContext';
import CoachingAnalysis from '../components/CoachingAnalysis';

const DAYS = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

export default function Coaching() {
  const { students, updateStudent } = useStudents();
  const { curriculums } = useCurriculum();
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [isAddingStudent, setIsAddingStudent] = useState(false);
  const [isAddingPlan, setIsAddingPlan] = useState(false);
  const [studentSearchTerm, setStudentSearchTerm] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Pazartesi');
  const [activeView, setActiveView] = useState<'program' | 'analysis'>('program');

  // New Plan Form State
  const [newPlanDates, setNewPlanDates] = useState({ startDate: '', endDate: '' });

  // Task Form State
  const [taskData, setTaskData] = useState<Partial<TaskType>>({
    day: 'Pazartesi',
    startTime: '',
    endTime: '',
    subject: '',
    topic: '',
    type: 'konu',
    questionCount: 0
  });

  const selectedStudent = useMemo(() => 
    students.find(s => s.id === selectedStudentId) || null,
  [students, selectedStudentId]);

  const activePlan = useMemo(() => 
    selectedStudent?.coaching?.weeklyPlans.find(p => p.id === selectedPlanId) || 
    selectedStudent?.coaching?.weeklyPlans[0] || null,
  [selectedStudent, selectedPlanId]);

  const coachingStudents = useMemo(() => 
    students.filter(s => s.coaching),
  [students]);

  useEffect(() => {
    if (selectedStudent && !selectedPlanId && selectedStudent.coaching?.weeklyPlans.length) {
      setSelectedPlanId(selectedStudent.coaching.weeklyPlans[0].id);
    }
  }, [selectedStudent, selectedPlanId]);

  const filteredSchoolStudents = useMemo(() => {
    return students.filter(s => 
      s.name.toLowerCase().includes(studentSearchTerm.toLowerCase()) &&
      !s.coaching
    );
  }, [studentSearchTerm, students]);

  const availableCurriculum = useMemo(() => {
    if (!selectedStudent) return curriculums;
    const gradePart = selectedStudent.grade.split('-')[0]; // "9", "10", "11", "12"
    
    // Hem tam eşleşme hem de sayısal eşleşme kontrolü (9. Sınıf vs 9-D)
    return curriculums.filter(c => 
      c.grade.includes(gradePart) || 
      c.grade === 'TYT' || 
      c.grade === 'AYT' ||
      selectedStudent.grade.includes(c.grade)
    );
  }, [selectedStudent, curriculums]);

  const availableSubjects = useMemo(() => {
    const subjects = availableCurriculum.map(c => c.subject);
    return Array.from(new Set(subjects)).sort();
  }, [availableCurriculum]);

  const availableTopics = useMemo(() => {
    if (!taskData.subject) return [];
    const subjectCurriculums = availableCurriculum.filter(c => c.subject === taskData.subject);
    const topics: string[] = [];
    subjectCurriculums.forEach(c => {
      c.themes.forEach(t => {
        t.topics.forEach(tp => {
          topics.push(tp.title);
        });
      });
    });
    return Array.from(new Set(topics));
  }, [taskData.subject, availableCurriculum]);

  const handleAddStudentToCoaching = (student: StudentType) => {
    const updatedStudent: StudentType = {
      ...student,
      coaching: {
        coachName: 'Atanmadı',
        targetUniversity: '',
        targetDept: '',
        lastMeeting: 'Henüz yapılmadı',
        studyPlan: 'YKS Hazırlık',
        weeklyPlans: []
      }
    };
    updateStudent(updatedStudent);
    setIsAddingStudent(false);
    setStudentSearchTerm('');
  };

  const handleCreatePlan = () => {
    if (!selectedStudent || !newPlanDates.startDate || !newPlanDates.endDate) return;

    const newPlan: WeeklyPlanType = {
      id: Math.random().toString(36).substr(2, 9),
      startDate: newPlanDates.startDate,
      endDate: newPlanDates.endDate,
      status: 'aktif',
      tasks: []
    };

    const updatedStudent: StudentType = {
      ...selectedStudent,
      coaching: {
        ...selectedStudent.coaching!,
        weeklyPlans: [newPlan, ...(selectedStudent.coaching?.weeklyPlans || [])]
      }
    };

    updateStudent(updatedStudent);
    setSelectedPlanId(newPlan.id);
    setIsAddingPlan(false);
    setNewPlanDates({ startDate: '', endDate: '' });
  };

  const handleAddTask = () => {
    if (!selectedStudent || !activePlan || !taskData.subject || !taskData.topic || taskData.topic === 'custom') return;

    const newTask: TaskType = {
      id: Math.random().toString(36).substr(2, 9),
      day: taskData.day || selectedDay,
      startTime: taskData.startTime || undefined,
      endTime: taskData.endTime || undefined,
      subject: taskData.subject,
      topic: taskData.topic,
      type: taskData.type || 'konu',
      questionCount: taskData.questionCount || 0,
      completed: false
    };

    const updatedPlans = selectedStudent.coaching!.weeklyPlans.map(p => 
      p.id === activePlan.id ? { ...p, tasks: [...p.tasks, newTask] } : p
    );

    updateStudent({
      ...selectedStudent,
      coaching: { ...selectedStudent.coaching!, weeklyPlans: updatedPlans }
    });
    
    setIsAddingTask(false);
    setTaskData({ day: selectedDay, startTime: '', endTime: '', subject: '', topic: '', type: 'konu', questionCount: 0 });
  };

  const toggleTaskCompletion = (taskId: string) => {
    if (!selectedStudent || !activePlan) return;
    const updatedPlans = selectedStudent.coaching!.weeklyPlans.map(p => {
      if (p.id === activePlan.id) {
        return { ...p, tasks: p.tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t) };
      }
      return p;
    });
    updateStudent({
      ...selectedStudent,
      coaching: { ...selectedStudent.coaching!, weeklyPlans: updatedPlans }
    });
  };

  const deleteTask = (taskId: string) => {
    if (!selectedStudent || !activePlan) return;
    const updatedPlans = selectedStudent.coaching!.weeklyPlans.map(p => {
      if (p.id === activePlan.id) {
        return { ...p, tasks: p.tasks.filter(t => t.id !== taskId) };
      }
      return p;
    });
    updateStudent({
      ...selectedStudent,
      coaching: { ...selectedStudent.coaching!, weeklyPlans: updatedPlans }
    });
  };

  if (selectedStudent) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500 pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedStudentId(null)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary transition-all shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{selectedStudent.name}</h1>
              <p className="text-sleek-muted mt-1 font-medium">Öğrenci Gelişim ve Çalışma Takibi</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex bg-white/5 p-1 rounded-xl mr-4">
                <button 
                  onClick={() => setActiveView('program')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeView === 'program' ? 'bg-brand-primary text-white shadow-lg' : 'text-sleek-muted hover:text-white'}`}
                >
                  Çalışma Programı
                </button>
                <button 
                  onClick={() => setActiveView('analysis')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeView === 'analysis' ? 'bg-brand-primary text-white shadow-lg' : 'text-sleek-muted hover:text-white'}`}
                >
                   Analiz Paneli
                </button>
             </div>
             <button 
               onClick={() => setIsAddingPlan(true)}
               className="btn-secondary"
             >
               <Calendar size={18} />
               Yeni Hafta Ekle
             </button>
             <button 
               onClick={() => setIsAddingTask(true)}
               disabled={!activePlan}
               className="btn-primary shadow-lg shadow-blue-500/20 disabled:opacity-50"
             >
               <Plus size={18} />
               Görev Ekle
             </button>
          </div>
        </div>

        {activeView === 'analysis' ? (
          <CoachingAnalysis student={selectedStudent} />
        ) : (
          <>
            {/* Weekly Plans List */}
            <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
           {selectedStudent.coaching?.weeklyPlans.map(plan => (
             <button
               key={plan.id}
               onClick={() => setSelectedPlanId(plan.id)}
               className={`shrink-0 px-6 py-4 rounded-2xl border transition-all flex flex-col items-start gap-1 min-w-[200px] ${selectedPlanId === plan.id ? 'bg-brand-primary border-brand-primary shadow-lg shadow-blue-500/20' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
             >
                <span className={`text-[10px] font-black uppercase tracking-widest ${selectedPlanId === plan.id ? 'text-white/70' : 'text-sleek-muted'}`}>Haftalık Program</span>
                <span className={`text-sm font-bold ${selectedPlanId === plan.id ? 'text-white' : 'text-white/90'}`}>{plan.startDate} - {plan.endDate}</span>
             </button>
           ))}
           {!selectedStudent.coaching?.weeklyPlans.length && (
             <div className="text-sleek-muted text-xs font-medium italic">Henüz bir haftalık program oluşturulmadı.</div>
           )}
        </div>

        {activePlan ? (
          <div className="grid grid-cols-1 xl:grid-cols-7 gap-4">
            {DAYS.map(day => {
              const dayTasks = activePlan.tasks
                .filter(t => t.day === day)
                .sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));
              
              return (
                <div key={day} className={`flex flex-col gap-4 min-h-[400px] p-4 rounded-2xl border transition-all ${selectedDay === day ? 'bg-brand-primary/5 border-brand-primary/30 ring-1 ring-brand-primary/20' : 'bg-white/5 border-white/5'}`} onClick={() => setSelectedDay(day)}>
                  <div className="flex items-center justify-between">
                     <h3 className={`text-xs font-black uppercase tracking-widest ${selectedDay === day ? 'text-brand-primary' : 'text-sleek-muted'}`}>{day}</h3>
                     <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold text-white">
                        {dayTasks.length}
                     </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    {dayTasks.map(task => (
                      <div key={task.id} className="p-3 rounded-xl bg-slate-900 border border-sleek-border hover:border-brand-primary/40 transition-all group relative">
                         <div className="flex items-start justify-between mb-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                               <input 
                                 type="checkbox" 
                                 checked={task.completed} 
                                 onChange={() => toggleTaskCompletion(task.id)}
                                 className="w-4 h-4 rounded-md bg-slate-800 border-sleek-border text-brand-primary focus:ring-brand-primary focus:ring-offset-slate-900" 
                               />
                               <span className={`text-[10px] font-bold uppercase tracking-wider ${task.completed ? 'text-emerald-500' : task.type === 'konu' ? 'text-brand-primary' : 'text-amber-400'}`}>{task.subject}</span>
                            </label>
                            <button 
                              onClick={() => deleteTask(task.id)}
                              className="p-1 rounded bg-white/5 text-sleek-muted hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all"
                            >
                              <Trash2 size={12} />
                            </button>
                         </div>
                         <p className={`text-xs font-bold text-white mb-1 ${task.completed ? 'line-through opacity-50' : ''}`}>{task.topic}</p>
                         
                         <div className="flex items-center gap-3">
                            {task.startTime && (
                              <div className="flex items-center gap-1.5 text-[9px] font-black text-sleek-muted uppercase tracking-widest">
                                 <Clock size={10} />
                                 {task.startTime} {task.endTime ? `- ${task.endTime}` : ''}
                              </div>
                            )}
                            <div className={`px-2 py-0.5 rounded bg-white/5 text-[9px] font-black uppercase tracking-widest ${task.type === 'konu' ? 'text-blue-400' : 'text-amber-400'}`}>
                               {task.type === 'konu' ? 'Konu' : 'Soru'}
                            </div>
                         </div>
                         
                         {task.type === 'soru' && task.questionCount > 0 && (
                           <div className="mt-2 text-[9px] font-black text-amber-400/80 uppercase tracking-widest">
                              {task.questionCount} Hedef Soru
                           </div>
                         )}
                      </div>
                    ))}
                    {dayTasks.length === 0 && (
                      <div className="h-full flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-xl py-8">
                         <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Boş Gün</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-24 text-center card-sleek flex flex-col items-center gap-6">
             <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10">
                <Calendar size={40} className="text-sleek-muted" />
             </div>
             <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Program Bulunamadı</h3>
                <p className="text-sleek-muted text-sm max-w-sm">Bu öğrenci için henüz haftalık bir çalışma planı oluşturulmamış. Sağ üstteki butonu kullanarak başlayın.</p>
             </div>
             <button onClick={() => setIsAddingPlan(true)} className="btn-primary">Hemen Plan Oluştur</button>
          </div>
        )}
          </>
        )}

        {/* PLAN MODAL */}
        {isAddingPlan && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsAddingPlan(false)}></div>
              <div className="relative w-full max-w-sm bg-sleek-aside border border-sleek-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                 <div className="p-6 border-b border-sleek-border flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white tracking-tight">Yeni Haftalık Program</h3>
                    <button onClick={() => setIsAddingPlan(false)} className="text-sleek-muted hover:text-white"><X size={20} /></button>
                 </div>
                 <div className="p-8 space-y-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Başlangıç Tarihi</label>
                       <input 
                        type="date" 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                        value={newPlanDates.startDate}
                        onChange={e => setNewPlanDates({...newPlanDates, startDate: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Bitiş Tarihi</label>
                       <input 
                        type="date" 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                        value={newPlanDates.endDate}
                        onChange={e => setNewPlanDates({...newPlanDates, endDate: e.target.value})}
                       />
                    </div>
                    <button onClick={handleCreatePlan} className="w-full btn-primary py-3.5 mt-4">Programı Oluştur</button>
                 </div>
              </div>
           </div>
        )}

        {/* TASK MODAL */}
        {isAddingTask && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsAddingTask(false)}></div>
            <div className="relative w-full max-w-md bg-sleek-aside border border-sleek-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
               <div className="p-6 border-b border-sleek-border flex items-center justify-between bg-white/[0.02]">
                  <h3 className="text-lg font-bold text-white tracking-tight">Yeni Çalışma Görevi</h3>
                  <button onClick={() => setIsAddingTask(false)} className="text-sleek-muted hover:text-white"><X size={20} /></button>
               </div>
               <div className="p-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Gün</label>
                       <select 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2 text-sm text-white focus:border-brand-primary outline-none"
                        value={taskData.day}
                        onChange={e => setTaskData({...taskData, day: e.target.value})}
                       >
                         {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Ders</label>
                       <select 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2 text-sm text-white focus:border-brand-primary outline-none"
                        value={taskData.subject}
                        onChange={e => setTaskData({...taskData, subject: e.target.value, topic: ''})}
                       >
                         <option value="">Seçiniz...</option>
                         {availableSubjects.map(s => <option key={s} value={s}>{s}</option>)}
                       </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                      <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Görev Tipi</label>
                      <div className="flex gap-2">
                         <button 
                           onClick={() => setTaskData({...taskData, type: 'konu'})}
                           className={`flex-1 py-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${taskData.type === 'konu' ? 'bg-brand-primary border-brand-primary text-white' : 'bg-slate-900 border-sleek-border text-sleek-muted'}`}
                         >
                           <BookOpen size={16} />
                           Konu Çalışma
                         </button>
                         <button 
                           onClick={() => setTaskData({...taskData, type: 'soru'})}
                           className={`flex-1 py-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all ${taskData.type === 'soru' ? 'bg-brand-primary border-brand-primary text-white' : 'bg-slate-900 border-sleek-border text-sleek-muted'}`}
                         >
                           <Target size={16} />
                           Soru Çözümü
                         </button>
                      </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Konu Başlığı</label>
                     <div className="relative">
                       <select 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2 text-sm text-white focus:border-brand-primary outline-none appearance-none"
                        value={taskData.topic || ''}
                        onChange={e => setTaskData({...taskData, topic: e.target.value})}
                       >
                         <option value="">Konu Seçiniz...</option>
                         {availableTopics.map(t => <option key={t} value={t}>{t}</option>)}
                         <option value="custom">+ Elle Yaz...</option>
                       </select>
                       <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-sleek-muted pointer-events-none" />
                     </div>
                     {(taskData.topic === 'custom' || !availableTopics.includes(taskData.topic || '')) && (
                       <input 
                        type="text" 
                        placeholder="Örn: Newton Yasaları"
                        className="w-full mt-2 bg-slate-900 border border-sleek-border rounded-xl px-4 py-2 text-sm text-white focus:border-brand-primary outline-none animate-in slide-in-from-top-2 duration-200"
                        value={taskData.topic === 'custom' ? '' : taskData.topic}
                        onChange={e => setTaskData({...taskData, topic: e.target.value})}
                       />
                     )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Başlangıç (Opsiyonel)</label>
                       <input 
                        type="time" 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2 text-sm text-white focus:border-brand-primary outline-none"
                        value={taskData.startTime || ''}
                        onChange={e => setTaskData({...taskData, startTime: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Bitiş (Opsiyonel)</label>
                       <input 
                        type="time" 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2 text-sm text-white focus:border-brand-primary outline-none"
                        value={taskData.endTime || ''}
                        onChange={e => setTaskData({...taskData, endTime: e.target.value})}
                       />
                    </div>
                  </div>

                  {taskData.type === 'soru' && (
                    <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                       <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest font-bold">Hedef Soru Sayısı</label>
                       <input 
                        type="number" 
                        className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2 text-sm text-white focus:border-brand-primary outline-none"
                        value={taskData.questionCount || 0}
                        onChange={e => setTaskData({...taskData, questionCount: parseInt(e.target.value)})}
                       />
                    </div>
                  )}

                  <button 
                    onClick={handleAddTask}
                    className="w-full btn-primary py-3.5 mt-4"
                  >
                    Görevini Ekle
                    <Save size={18} />
                  </button>
               </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Eğitim Koçluğu</h1>
          <p className="text-sleek-muted mt-1 font-medium">Öğrenciler için haftalık ve günlük dijital çalışma programları.</p>
        </div>
        <button 
          onClick={() => setIsAddingStudent(true)}
          className="btn-primary shadow-lg shadow-blue-500/20"
        >
          <Plus size={18} />
          Yeni Plan Oluştur
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Aktif Programlar', val: coachingStudents.length, icon: Calendar, color: 'text-blue-400' },
          { label: 'Haftalık Soru Hedefi', val: '12.400', icon: Target, color: 'text-amber-400' },
          { label: 'Tamamlanan Görevler', val: '842', icon: Check, color: 'text-emerald-400' },
          { label: 'Sistemdeki Öğrenci', val: students.length, icon: Trophy, color: 'text-rose-400' },
        ].map((s, idx) => (
          <div key={idx} className="card-sleek flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-slate-900 border border-sleek-border flex items-center justify-center">
                <s.icon size={20} className={s.color} />
             </div>
             <div>
                <p className="text-[10px] font-bold text-sleek-muted uppercase tracking-widest">{s.label}</p>
                <h4 className="text-xl font-bold text-white mt-0.5">{s.val}</h4>
             </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <BookOpen size={20} className="text-brand-primary" />
          Aktif Koçluk Alan Öğrenciler
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {coachingStudents.map(student => (
            <div 
              key={student.id} 
              onClick={() => setSelectedStudentId(student.id)}
              className="card-sleek p-6 group hover:border-brand-primary/40 transition-all cursor-pointer relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all transform -rotate-12">
                  <Target size={80} />
               </div>
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-sleek-border flex items-center justify-center text-2xl font-black text-brand-primary group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
                     {student.avatar}
                  </div>
                  <div className="flex-1">
                     <h4 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">{student.name}</h4>
                     <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest mt-1">
                        {student.grade} | {student.coaching?.weeklyPlans.length || 0} Hafta Programı
                     </p>
                  </div>
                  <div className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-xl text-xs font-bold transition-all group-hover:bg-brand-primary group-hover:text-white flex items-center gap-2">
                     Programı Yönet
                     <ArrowRight size={16} />
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* ADD STUDENT MODAL */}
      {isAddingStudent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsAddingStudent(false)}></div>
          <div className="relative w-full max-w-lg bg-sleek-aside border border-sleek-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="p-6 border-b border-sleek-border bg-white/[0.02]">
                <h3 className="text-lg font-bold text-white tracking-tight">Koçluk Alacak Öğrenciyi Seçin</h3>
                <div className="relative mt-4">
                   <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-sleek-muted" />
                   <input 
                    type="text" 
                    placeholder="Öğrenci adı veya soyadı..." 
                    className="w-full bg-slate-900 border border-sleek-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-primary"
                    value={studentSearchTerm}
                    onChange={e => setStudentSearchTerm(e.target.value)}
                    autoFocus
                   />
                </div>
             </div>
             <div className="max-h-[350px] overflow-y-auto custom-scrollbar p-6 space-y-2">
                {filteredSchoolStudents.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => handleAddStudentToCoaching(s)}
                    className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between hover:bg-brand-primary/10 hover:border-brand-primary/40 transition-all group"
                  >
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-white group-hover:bg-brand-primary transition-colors">
                           {s.avatar}
                        </div>
                        <div className="text-left">
                           <p className="text-sm font-bold text-white group-hover:text-brand-primary">{s.name}</p>
                           <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">{s.grade}</p>
                        </div>
                     </div>
                     <Plus size={16} className="text-sleek-muted group-hover:text-brand-primary" />
                  </button>
                ))}
                {filteredSchoolStudents.length === 0 && (
                   <div className="py-12 text-center text-sleek-muted flex flex-col items-center gap-4">
                      <Search size={40} className="opacity-20" />
                      <p className="text-[10px] font-black uppercase tracking-widest italic">Aradığınız kriterde öğrenci bulunamadı.</p>
                   </div>
                )}
             </div>
             <div className="p-6 border-t border-sleek-border bg-white/[0.02] flex justify-end">
                <button 
                  onClick={() => setIsAddingStudent(false)}
                  className="px-6 py-2 text-xs font-bold text-sleek-muted hover:text-white"
                >
                  Kapat
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
