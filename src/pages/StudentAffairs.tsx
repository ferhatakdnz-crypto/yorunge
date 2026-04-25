import React, { useState, useEffect } from 'react';
import { 
  UserPlus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  GraduationCap,
  MapPin,
  Calendar,
  X,
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  Phone,
  Mail,
  School as SchoolIcon,
  CreditCard,
  Heart,
  Users,
  ShieldCheck,
  ShieldAlert,
  FileText,
  FileEdit,
  Plus,
  Trash2,
  Bus,
  Radio,
  Utensils,
  Target,
  Sparkles,
  BookOpen,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ReTooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { useStudents, Student } from '../context/StudentContext';
import { TURKEY_CITIES } from '../lib/turkey-data';

const RELATIONSHIPS = [
  'Anne', 'Baba', 'Amca', 'Dayı', 'Hala', 'Teyze', 'Kızkardeş', 'Erkek Kardeş', 'Vasi', 'Dede', 'Anneanne', 'Babaanne'
];

export default function StudentAffairs() {
  const { students, addStudent, updateStudent } = useStudents();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeProfileTab, setActiveProfileTab] = useState<'kisisel' | 'akademik' | 'hizmet' | 'veli' | 'finans' | 'kocum' | 'disiplin'>('kisisel');
  const [selectedSubjectDetail, setSelectedSubjectDetail] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Student | null>(null);
  const [activeParentIndex, setActiveParentIndex] = useState(0);

  useEffect(() => {
    setActiveParentIndex(0);
  }, [selectedStudent]);

  const startEditing = () => {
    if (selectedStudent) {
      setEditData({ ...selectedStudent });
      setIsEditing(true);
    }
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditData(null);
  };

  const handleSave = () => {
    if (editData) {
      updateStudent(editData);
      setSelectedStudent(editData);
      setIsEditing(false);
      setEditData(null);
    }
  };
  
  const [formData, setFormData] = useState<Partial<Student>>({
    phone: [''],
    services: { dining: false, bus: false },
    parents: [{ tcNo: '', name: '', phone: [''], birthDate: '', email: '', relationship: 'Anne', address: { city: '', district: '', fullAddress: '' } }],
    address: { city: '', district: '', fullAddress: '' },
    payment: { total: '', installments: 1, method: 'Nakit' }
  });

  const handleNext = () => setCurrentStep(prev => prev + 1);
  const handlePrev = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent: Student = {
      id: students.length + 1,
      name: formData.name || '',
      no: formData.no || Math.floor(1000 + Math.random() * 9000).toString(),
      grade: formData.grade || 'Hazırlık',
      type: 'Asil',
      status: 'Aktif',
      avatar: (formData.name || 'ÖG').split(' ').map(n => n[0]).join('').toUpperCase(),
      ...formData
    } as Student;

    addStudent(newStudent);
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      phone: [''],
      services: { dining: false, bus: false },
      parents: [{ tcNo: '', name: '', phone: [''], birthDate: '', email: '', relationship: 'Anne', address: { city: '', district: '', fullAddress: '' } }],
      address: { city: '', district: '', fullAddress: '' },
      payment: { total: '', installments: 1, method: 'Nakit' }
    });
    setCurrentStep(1);
  };

  // IF A STUDENT IS SELECTED, SHOW THE FULL PROFILE PAGE
  if (selectedStudent) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedStudent(null)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary transition-all shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{selectedStudent.name}</h1>
              <p className="text-sleek-muted mt-1 font-medium">Öğrenci Kişisel Sayfası ve Kayıt Detayları</p>
            </div>
          </div>
          <div className="flex gap-3">
             {isEditing ? (
               <>
                 <button 
                   onClick={handleSave}
                   className="px-6 py-2 rounded-xl bg-brand-primary text-white text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2"
                 >
                   <Check size={16} />
                   Kaydet
                 </button>
                 <button 
                   onClick={cancelEditing}
                   className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-rose-500/20 hover:text-rose-400 hover:border-rose-500/30 transition-all flex items-center gap-2"
                 >
                   <X size={16} />
                   İptal
                 </button>
               </>
             ) : (
               <>
                 <button 
                   onClick={startEditing}
                   className="px-4 py-2 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2"
                 >
                   <FileEdit size={16} />
                   Bilgileri Düzenle
                 </button>
                 <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2">
                    <FileText size={16} className="text-brand-primary" />
                    Sözleşme Yazdır
                 </button>
               </>
             )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card-sleek flex flex-col items-center text-center p-8">
               <div className="w-24 h-24 rounded-3xl bg-slate-800 border-2 border-brand-primary/20 flex items-center justify-center text-3xl font-black text-brand-primary shadow-2xl shadow-blue-500/10 mb-4">
                  {selectedStudent.avatar}
               </div>
               <h3 className="text-lg font-bold text-white">{selectedStudent.name}</h3>
               <span className="text-[10px] font-black text-sleek-muted uppercase tracking-[0.2em] mt-1">{selectedStudent.no} | {selectedStudent.grade}</span>
               
               <div className="w-full h-px bg-sleek-border my-6"></div>
               
               <div className="w-full space-y-3 text-left">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-sleek-muted uppercase">Durum</span>
                     <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase">{selectedStudent.status}</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-sleek-muted uppercase">Kayıt Türü</span>
                     <span className="text-white text-[10px] font-bold uppercase">{selectedStudent.type}</span>
                  </div>
               </div>
            </div>

            {/* Profile Navigation Tabs */}
            <div className="card-sleek !p-2 space-y-1">
              {[
                { id: 'kisisel', label: 'Kişisel Bilgiler', icon: User },
                { id: 'akademik', label: 'Akademik Bilgiler', icon: GraduationCap },
                { id: 'hizmet', label: 'Hizmet Bilgileri', icon: Radio },
                { id: 'veli', label: 'Veli Bilgileri', icon: Users },
                { id: 'kocum', label: 'Eğitim Koçum', icon: Target },
                { id: 'disiplin', label: 'Disiplin Kayıtları', icon: ShieldAlert },
                { id: 'finans', label: 'Finansal Bilgiler', icon: CreditCard },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProfileTab(tab.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${
                    activeProfileTab === tab.id 
                    ? 'bg-brand-primary text-white shadow-lg shadow-blue-500/20' 
                    : 'text-sleek-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Content */}
          <div className="lg:col-span-3">
             <div className="card-sleek min-h-[500px]">
                {activeProfileTab === 'kisisel' && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-4">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                       <User className="text-brand-primary" /> Kişisel Bilgiler
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">T.C. Kimlik Numarası</p>
                          {isEditing ? (
                            <input 
                              type="text" 
                              maxLength={11}
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                              value={editData?.tcNo || ''}
                              onChange={e => setEditData({...editData!, tcNo: e.target.value})}
                            />
                          ) : (
                            <p className="text-sm font-mono text-white p-3 rounded-xl bg-white/5 border border-white/5">{selectedStudent.tcNo || '00000000000'}</p>
                          )}
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Tam Ad Soyad</p>
                          {isEditing ? (
                            <input 
                              type="text" 
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                              value={editData?.name || ''}
                              onChange={e => setEditData({...editData!, name: e.target.value})}
                            />
                          ) : (
                            <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{selectedStudent.name}</p>
                          )}
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Doğum Tarihi</p>
                          {isEditing ? (
                            <input 
                              type="date" 
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                              value={editData?.birthDate || ''}
                              onChange={e => setEditData({...editData!, birthDate: e.target.value})}
                            />
                          ) : (
                            <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{selectedStudent.birthDate || 'Belirtilmedi'}</p>
                          )}
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">E-Posta Adresi</p>
                          {isEditing ? (
                            <input 
                              type="email" 
                              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                              value={editData?.email || ''}
                              onChange={e => setEditData({...editData!, email: e.target.value})}
                            />
                          ) : (
                            <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{selectedStudent.email || 'belirtilmedi@okul.com'}</p>
                          )}
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Telefon Numaraları</p>
                            {isEditing && (
                              <button 
                                onClick={() => setEditData({...editData!, phone: [...editData!.phone, '']})}
                                className="w-6 h-6 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
                              >
                                <Plus size={14} />
                              </button>
                            )}
                          </div>
                          <div className="space-y-2">
                             {isEditing ? (
                               editData?.phone.map((ph, idx) => (
                                 <div key={idx} className="flex gap-2">
                                   <input 
                                     type="tel" 
                                     className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                                     value={ph}
                                     onChange={e => {
                                       const newPhones = [...editData!.phone];
                                       newPhones[idx] = e.target.value;
                                       setEditData({...editData!, phone: newPhones});
                                     }}
                                   />
                                   {editData!.phone.length > 1 && (
                                     <button 
                                       onClick={() => {
                                         const newPhones = editData!.phone.filter((_, i) => i !== idx);
                                         setEditData({...editData!, phone: newPhones});
                                       }}
                                       className="w-10 h-11 flex items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all"
                                     >
                                       <Trash2 size={16} />
                                     </button>
                                   )}
                                 </div>
                               ))
                             ) : (
                               selectedStudent.phone && selectedStudent.phone.length > 0 ? (
                                 selectedStudent.phone.map((ph, idx) => (
                                   <p key={idx} className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{ph}</p>
                                 ))
                               ) : (
                                 <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">Girilmedi</p>
                               )
                             )}
                          </div>
                       </div>
                       <div className="md:col-span-2 space-y-1 pt-4 border-t border-white/5 mt-4">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest flex items-center gap-2">
                             <MapPin size={12} className="text-brand-primary" /> İkamet Adresi
                          </p>
                          {isEditing ? (
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-4 mt-2">
                               <div className="grid grid-cols-2 gap-4">
                                  <div className="space-y-1">
                                    <p className="text-[9px] font-black text-sleek-muted uppercase">İl</p>
                                    <select 
                                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:border-brand-primary outline-none"
                                      value={editData?.address?.city || ''}
                                      onChange={e => setEditData({...editData!, address: { ...editData!.address!, city: e.target.value, district: '' }})}
                                    >
                                      <option value="">Seçiniz</option>
                                      {TURKEY_CITIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                                    </select>
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-[9px] font-black text-sleek-muted uppercase">İlçe</p>
                                    <select 
                                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:border-brand-primary outline-none"
                                      value={editData?.address?.district || ''}
                                      onChange={e => setEditData({...editData!, address: { ...editData!.address!, district: e.target.value }})}
                                      disabled={!editData?.address?.city}
                                    >
                                      <option value="">Seçiniz</option>
                                      {TURKEY_CITIES.find(c => c.name === editData?.address?.city)?.districts.map(d => (
                                        <option key={d} value={d}>{d}</option>
                                      ))}
                                    </select>
                                  </div>
                               </div>
                               <div className="space-y-1">
                                 <p className="text-[9px] font-black text-sleek-muted uppercase">Açık Adres</p>
                                 <textarea 
                                   rows={2}
                                   className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:border-brand-primary outline-none resize-none"
                                   value={editData?.address?.fullAddress || ''}
                                   onChange={e => setEditData({...editData!, address: { ...editData!.address!, fullAddress: e.target.value }})}
                                 />
                               </div>
                            </div>
                          ) : (
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 mt-2">
                               <div className="flex gap-4">
                                  <div>
                                     <p className="text-[9px] font-black text-sleek-muted uppercase">İl</p>
                                     <p className="text-xs font-bold text-white tracking-wide">{selectedStudent.address?.city || 'Belirtilmedi'}</p>
                                  </div>
                                  <div className="w-px h-6 bg-white/10"></div>
                                  <div>
                                     <p className="text-[9px] font-black text-sleek-muted uppercase">İlçe</p>
                                     <p className="text-xs font-bold text-white tracking-wide">{selectedStudent.address?.district || 'Belirtilmedi'}</p>
                                  </div>
                               </div>
                               <div className="pt-2 border-t border-white/5 mt-1">
                                  <p className="text-[9px] font-black text-sleek-muted uppercase mb-1">Açık Adres</p>
                                  <p className="text-xs text-white leading-relaxed">{selectedStudent.address?.fullAddress || 'Adres bilgisi girilmemiştir.'}</p>
                               </div>
                            </div>
                          )}
                       </div>
                    </div>
                  </div>
                )}

                {activeProfileTab === 'akademik' && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-4">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                       <GraduationCap className="text-brand-primary" /> Akademik Bilgiler
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Sınıf / Şube</p>
                          <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{selectedStudent.grade}</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Okul Numarası</p>
                          <p className="text-sm font-mono text-white p-3 rounded-xl bg-white/5 border border-white/5">{selectedStudent.no}</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Geldiği Okul</p>
                          <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{selectedStudent.prevSchool || 'İlk Kayıt'}</p>
                       </div>
                    </div>
                  </div>
                )}

                {activeProfileTab === 'hizmet' && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-4">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                       <ShieldCheck className="text-brand-primary" /> Hizmet Bilgileri
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className={`p-6 rounded-2xl border transition-all ${selectedStudent.services?.dining ? 'bg-emerald-500/10 border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'bg-white/5 border-white/5 opacity-50'}`}>
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                                <Utensils size={24} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-white">Yemek Hizmeti</h4>
                                <p className="text-[10px] font-black uppercase text-sleek-muted">{selectedStudent.services?.dining ? 'AKTİF - TAM MENÜ' : 'PASİF'}</p>
                             </div>
                          </div>
                       </div>
                       <div className={`p-6 rounded-2xl border transition-all ${selectedStudent.services?.bus ? 'bg-blue-500/10 border-blue-500/20 shadow-lg shadow-blue-500/5' : 'bg-white/5 border-white/5 opacity-50'}`}>
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                                <Bus size={24} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-white">Servis Hizmeti</h4>
                                <p className="text-[10px] font-black uppercase text-sleek-muted">{selectedStudent.services?.bus ? 'AKTİF - LOKASYON TAKİBİ' : 'PASİF'}</p>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                )}

                {activeProfileTab === 'veli' && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-4">
                    <div className="flex items-center justify-between mb-8">
                       <h3 className="text-xl font-bold text-white flex items-center gap-3">
                          <Users className="text-brand-primary" /> Veli / Vasî Bilgileri
                       </h3>
                       {isEditing && (
                         <button 
                           onClick={() => setEditData({...editData!, parents: [...editData!.parents, { tcNo: '', name: '', phone: [''], birthDate: '', email: '', relationship: 'Vasi', address: { city: '', district: '', fullAddress: '' } }]})}
                           className="px-4 py-2 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2"
                         >
                           <Plus size={16} />
                           Yeni Veli Ekle
                         </button>
                       )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-6 p-1 bg-white/[0.02] border border-white/5 rounded-2xl">
                      {(isEditing ? editData?.parents : selectedStudent.parents)?.map((parent, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setActiveParentIndex(pIdx)}
                          className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                            activeParentIndex === pIdx 
                            ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                            : 'text-sleek-muted hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                            activeParentIndex === pIdx ? 'bg-white/20' : 'bg-slate-800'
                          }`}>
                            {parent.relationship?.[0] || 'V'}
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-bold whitespace-nowrap">{parent.name || 'Veli'}</p>
                            <p className={`text-[9px] font-black uppercase tracking-widest leading-none mt-0.5 ${activeParentIndex === pIdx ? 'text-white/60' : 'text-slate-500'}`}>
                              {parent.relationship || 'Veli'}
                            </p>
                          </div>
                          
                          {isEditing && (isEditing ? editData?.parents.length : selectedStudent.parents.length) > 1 && activeParentIndex === pIdx && (
                             <div 
                               onClick={(e) => {
                                 e.stopPropagation();
                                 const newParents = editData!.parents.filter((_, i) => i !== pIdx);
                                 setEditData({...editData!, parents: newParents});
                                 setActiveParentIndex(Math.max(0, pIdx - 1));
                               }}
                               className="ml-2 w-5 h-5 rounded-md bg-white/20 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all"
                             >
                               <X size={12} />
                             </div>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-12">
                      {(() => {
                        const parent = (isEditing ? editData?.parents : selectedStudent.parents)?.[activeParentIndex];
                        if (!parent) return null;
                        const pIdx = activeParentIndex;
                        return (
                          <div key={pIdx} className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6 animate-in zoom-in-95 duration-300">
                           {isEditing && (editData?.parents.length || 0) > 1 && (
                             <button 
                               onClick={() => {
                                 const newParents = editData!.parents.filter((_, i) => i !== pIdx);
                                 setEditData({...editData!, parents: newParents});
                               }}
                               className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10"
                             >
                               <X size={16} />
                             </button>
                           )}
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-1">
                                 <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Veli Ad Soyad</p>
                                 {isEditing ? (
                                   <input 
                                     type="text" 
                                     className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                                     value={parent.name}
                                     onChange={e => {
                                       const newParents = [...editData!.parents];
                                       newParents[pIdx].name = e.target.value;
                                       setEditData({...editData!, parents: newParents});
                                     }}
                                   />
                                 ) : (
                                   <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{parent.name || 'Belirtilmedi'}</p>
                                 )}
                              </div>
                              <div className="space-y-1">
                                 <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Yakınlık Derecesi</p>
                                 {isEditing ? (
                                   <select 
                                     className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none appearance-none"
                                     value={parent.relationship}
                                     onChange={e => {
                                       const newParents = [...editData!.parents];
                                       newParents[pIdx].relationship = e.target.value;
                                       setEditData({...editData!, parents: newParents});
                                     }}
                                   >
                                     {RELATIONSHIPS.map(rel => <option key={rel} value={rel}>{rel}</option>)}
                                   </select>
                                 ) : (
                                   <p className="text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{parent.relationship || 'Belirtilmedi'}</p>
                                 )}
                              </div>
                              <div className="space-y-1">
                                 <div className="flex items-center justify-between mb-1">
                                   <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Veli Telefonları</p>
                                   {isEditing && (
                                     <button 
                                       onClick={() => {
                                          const newParents = [...editData!.parents];
                                          newParents[pIdx].phone = [...newParents[pIdx].phone, ''];
                                          setEditData({...editData!, parents: newParents});
                                       }}
                                       className="w-5 h-5 rounded-md bg-brand-primary/10 text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
                                     >
                                       <Plus size={12} />
                                     </button>
                                   )}
                                 </div>
                                 <div className="space-y-2">
                                    {(isEditing ? parent.phone : parent.phone).map((ph, phIdx) => (
                                      <div key={phIdx} className="flex gap-2">
                                        {isEditing ? (
                                          <>
                                            <input 
                                              type="tel" 
                                              className="flex-1 bg-slate-900 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                                              value={ph}
                                              onChange={e => {
                                                const newParents = [...editData!.parents];
                                                newParents[pIdx].phone[phIdx] = e.target.value;
                                                setEditData({...editData!, parents: newParents});
                                              }}
                                            />
                                            {parent.phone.length > 1 && (
                                              <button 
                                                onClick={() => {
                                                  const newParents = [...editData!.parents];
                                                  newParents[pIdx].phone = newParents[pIdx].phone.filter((_, i) => i !== phIdx);
                                                  setEditData({...editData!, parents: newParents});
                                                }}
                                                className="w-10 h-11 flex items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                                              >
                                                <Trash2 size={16} />
                                              </button>
                                            )}
                                          </>
                                        ) : (
                                          <p className="w-full text-sm font-bold text-white p-3 rounded-xl bg-white/5 border border-white/5">{ph || 'Belirtilmedi'}</p>
                                        )}
                                      </div>
                                    ))}
                                 </div>
                              </div>
                              <div className="space-y-1">
                                 <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Veli T.C. No</p>
                                 {isEditing ? (
                                   <input 
                                     type="text" 
                                     maxLength={11}
                                     className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-brand-primary outline-none"
                                     value={parent.tcNo}
                                     onChange={e => {
                                       const newParents = [...editData!.parents];
                                       newParents[pIdx].tcNo = e.target.value;
                                       setEditData({...editData!, parents: newParents});
                                     }}
                                   />
                                 ) : (
                                   <p className="text-sm font-mono text-white p-3 rounded-xl bg-white/5 border border-white/5">{parent.tcNo || '00000000000'}</p>
                                 )}
                              </div>

                              <div className="md:col-span-2 space-y-3 pt-4 border-t border-white/5">
                                 <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest flex items-center gap-2">
                                    <MapPin size={12} className="text-brand-primary" /> Veli İletişim & Adres Bilgileri
                                 </p>
                                 {isEditing ? (
                                   <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                         <div className="space-y-1">
                                           <p className="text-[9px] font-black text-sleek-muted uppercase">İl</p>
                                           <select 
                                             className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:border-brand-primary outline-none transition-all"
                                             value={parent.address?.city || ''}
                                             onChange={e => {
                                               const newParents = [...editData!.parents];
                                               newParents[pIdx].address = { ...newParents[pIdx].address!, city: e.target.value, district: '' };
                                               setEditData({...editData!, parents: newParents});
                                             }}
                                           >
                                             <option value="">Seçiniz</option>
                                             {TURKEY_CITIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                                           </select>
                                         </div>
                                         <div className="space-y-1">
                                           <p className="text-[9px] font-black text-sleek-muted uppercase">İlçe</p>
                                           <select 
                                             className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:border-brand-primary outline-none transition-all"
                                             value={parent.address?.district || ''}
                                             onChange={e => {
                                               const newParents = [...editData!.parents];
                                               newParents[pIdx].address = { ...newParents[pIdx].address!, district: e.target.value };
                                               setEditData({...editData!, parents: newParents});
                                             }}
                                             disabled={!parent.address?.city}
                                           >
                                             <option value="">Seçiniz</option>
                                             {TURKEY_CITIES.find(c => c.name === parent.address?.city)?.districts.map(d => (
                                               <option key={d} value={d}>{d}</option>
                                             ))}
                                           </select>
                                         </div>
                                      </div>
                                      <textarea 
                                        rows={2}
                                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:border-brand-primary outline-none resize-none transition-all"
                                        placeholder="Veli açık adresi..."
                                        value={parent.address?.fullAddress || ''}
                                        onChange={e => {
                                          const newParents = [...editData!.parents];
                                          newParents[pIdx].address = { ...newParents[pIdx].address!, fullAddress: e.target.value };
                                          setEditData({...editData!, parents: newParents});
                                        }}
                                      />
                                   </div>
                                 ) : (
                                   <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                                      <div className="flex gap-4">
                                         <div>
                                            <p className="text-[9px] font-black text-sleek-muted uppercase">İl</p>
                                            <p className="text-xs font-bold text-white tracking-wide">{parent.address?.city || 'Belirtilmedi'}</p>
                                         </div>
                                         <div className="w-px h-6 bg-white/10"></div>
                                         <div>
                                            <p className="text-[9px] font-black text-sleek-muted uppercase">İlçe</p>
                                            <p className="text-xs font-bold text-white tracking-wide">{parent.address?.district || 'Belirtilmedi'}</p>
                                         </div>
                                      </div>
                                      <div className="pt-2 border-t border-white/5 mt-1">
                                         <p className="text-[9px] font-black text-sleek-muted uppercase mb-1">Veli Açık Adres</p>
                                         <p className="text-xs text-white leading-relaxed">{parent.address?.fullAddress || 'Veli adres bilgisi girilmemiştir.'}</p>
                                      </div>
                                   </div>
                                 )}
                              </div>
                           </div>
                        </div>
                        );
                      })()}
                    </div>
                  </div>
                )}

                {activeProfileTab === 'finans' && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-4">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                       <CreditCard className="text-brand-primary" /> Finansal Durum & Ödeme Planı
                    </h3>
                    <div className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                             <p className="text-[10px] font-black text-sleek-muted uppercase tracking-[0.2em] mb-2">Toplam Ücret</p>
                             <h4 className="text-2xl font-black text-white">₺ {selectedStudent.payment?.total || '0.00'}</h4>
                          </div>
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                             <p className="text-[10px] font-black text-sleek-muted uppercase tracking-[0.2em] mb-2">Taksit Sayısı</p>
                             <h4 className="text-2xl font-black text-white">{selectedStudent.payment?.installments || '1'}</h4>
                          </div>
                          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                             <p className="text-[10px] font-black text-sleek-muted uppercase tracking-[0.2em] mb-2">Ödeme Şekli</p>
                             <h4 className="text-2xl font-black text-white">{selectedStudent.payment?.method || 'Nakit'}</h4>
                          </div>
                       </div>
                       
                       <div className="p-6 rounded-2xl bg-brand-primary/10 border border-brand-primary/20">
                          <h5 className="text-xs font-black text-brand-primary uppercase tracking-widest mb-4">Ödeme Planı Projeksiyonu</h5>
                          <div className="space-y-2">
                             {[1, 2, 3].map((i) => (
                               <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-black/20 text-xs text-white">
                                  <span className="font-bold">{i}. Taksit</span>
                                  <span className="text-sleek-muted">15.{i}.2025</span>
                                  <span className="font-mono text-emerald-400">₺ 12.500,00</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                )}

                {activeProfileTab === 'kocum' && selectedStudent && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-4 space-y-8">
                    {/* Data Aggregation Dashboard */}
                    {(() => {
                      const allTasks = selectedStudent.coaching?.weeklyPlans.flatMap(p => p.tasks) || [];
                      const subjectsData: { [key: string]: { questions: number, topics: Set<string>, completed: number, total: number }} = {};
                      
                      allTasks.forEach(task => {
                        if (!subjectsData[task.subject]) {
                          subjectsData[task.subject] = { questions: 0, topics: new Set(), completed: 0, total: 0 };
                        }
                        subjectsData[task.subject].questions += (task.type === 'soru' ? task.questionCount : 0);
                        subjectsData[task.subject].topics.add(task.topic);
                        subjectsData[task.subject].total += 1;
                        if (task.completed) subjectsData[task.subject].completed += 1;
                      });

                      const chartData = Object.keys(subjectsData).map(sub => ({
                        name: sub,
                        questions: subjectsData[sub].questions,
                        topics: subjectsData[sub].topics.size,
                        rate: Math.round((subjectsData[sub].completed / subjectsData[sub].total) * 100) || 0
                      })).sort((a, b) => b.questions - a.questions);

                      return (
                        <div className="space-y-6">
                           <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                 <Target className="text-brand-primary" /> Eğitim Koçluğu Analizi
                              </h3>
                           </div>

                           {/* Overview Stats */}
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="p-5 rounded-2xl bg-brand-primary/5 border border-brand-primary/10 flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                    <Target size={24} />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Toplam Soru</p>
                                    <h4 className="text-xl font-bold text-white">{allTasks.reduce((acc, t) => acc + (t.type === 'soru' ? t.questionCount : 0), 0)}</h4>
                                 </div>
                              </div>
                              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                                    <BookOpen size={24} />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Çalışılan Konu</p>
                                    <h4 className="text-xl font-bold text-white">{new Set(allTasks.map(t => t.topic)).size}</h4>
                                 </div>
                              </div>
                              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                    <Check size={24} />
                                 </div>
                                 <div>
                                    <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Genel Başarı</p>
                                    <h4 className="text-xl font-bold text-white">
                                       %{allTasks.length > 0 ? Math.round((allTasks.filter(t => t.completed).length / allTasks.length) * 100) : 0}
                                    </h4>
                                 </div>
                              </div>
                           </div>

                           {/* Visual Analytics */}
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="card-sleek p-6 space-y-4">
                                 <h5 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                                    <Calendar size={14} className="text-brand-primary" />
                                    Ders Bazlı Soru Dağılımı
                                 </h5>
                                 <div className="h-[250px] w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                       <BarChart data={chartData} onClick={(data) => data && data.activeLabel && setSelectedSubjectDetail(data.activeLabel)}>
                                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                                          <ReTooltip 
                                            contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px'}}
                                            itemStyle={{fontSize: '11px', fontWeight: 'bold'}}
                                            labelStyle={{color: '#fff', marginBottom: '4px'}}
                                          />
                                          <Bar dataKey="questions" radius={[4, 4, 0, 0]} barSize={30} fill="#2563eb">
                                             {chartData.map((entry, index) => (
                                               <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2563eb' : '#38bdf8'} className="cursor-pointer hover:opacity-80 transition-opacity" />
                                             ))}
                                          </Bar>
                                       </BarChart>
                                    </ResponsiveContainer>
                                 </div>
                                 <p className="text-[9px] text-center text-sleek-muted italic">Detaylar için grafikte dersin üzerine tıklayınız.</p>
                              </div>

                              <div className="card-sleek p-6 space-y-4">
                                 <h5 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
                                    <Sparkles size={14} className="text-brand-primary" />
                                    Çalışılan Konu Sayıları
                                 </h5>
                                 <div className="space-y-4 overflow-y-auto max-h-[250px] custom-scrollbar pr-2">
                                    {chartData.map(item => (
                                       <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-primary/30 transition-all cursor-pointer group" onClick={() => setSelectedSubjectDetail(item.name)}>
                                          <div className="flex items-center gap-3">
                                             <div className="w-8 h-8 rounded-lg bg-slate-900 border border-sleek-border flex items-center justify-center font-bold text-[10px] text-brand-primary group-hover:scale-110 transition-transform">
                                                {item.name[0]}
                                             </div>
                                             <span className="text-xs font-bold text-white">{item.name}</span>
                                          </div>
                                          <div className="flex items-center gap-4">
                                             <div className="text-right">
                                                <p className="text-[9px] font-black text-sleek-muted uppercase">{item.topics} Konu</p>
                                                <div className="w-16 h-1 bg-slate-800 rounded-full mt-1">
                                                   <div className="h-full bg-brand-primary rounded-full" style={{width: `${item.rate}%`}}></div>
                                                </div>
                                             </div>
                                             <ChevronRight size={14} className="text-white/20 group-hover:text-brand-primary transition-colors" />
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>

                           {/* Weekly Plans List - Reused from before but styled in dashboard */}
                           <div className="space-y-4">
                              <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">Haftalık Program Geçmişi</h4>
                              <div className="grid grid-cols-1 gap-3">
                                 {selectedStudent.coaching?.weeklyPlans.map(plan => {
                                   const total = plan.tasks.length;
                                   const done = plan.tasks.filter(t => t.completed).length;
                                   const p = total > 0 ? Math.round((done / total) * 100) : 0;
                                   
                                   return (
                                     <div key={plan.id} className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center justify-between hover:bg-white/[0.03] transition-all group">
                                        <div className="flex items-center gap-4">
                                           <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${plan.status === 'aktif' ? 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                              <Calendar size={18} />
                                           </div>
                                           <div>
                                              <p className="text-sm font-bold text-white">{plan.startDate} - {plan.endDate}</p>
                                              <p className="text-[9px] font-black text-sleek-muted uppercase tracking-widest">{total} Görev | %{p} Başarı</p>
                                           </div>
                                        </div>
                                        <ArrowRight size={18} className="text-white/10 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                                     </div>
                                   );
                                 })}
                              </div>
                           </div>
                        </div>
                      );
                    })()}
                  </div>
                )}
                {activeProfileTab === 'disiplin' && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-300 p-4 space-y-6">
                    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                       <ShieldAlert className="text-brand-primary" size={24} /> Disiplin ve Davranış Takibi
                    </h3>
                    
                    <div className="space-y-4">
                       {selectedStudent.disciplinaryRecords && selectedStudent.disciplinaryRecords.length > 0 ? (
                         selectedStudent.disciplinaryRecords.map(record => (
                           <div key={record.id} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-primary/40 transition-all group">
                              <div className="flex items-center justify-between mb-4">
                                 <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                      record.severity === 'High' ? 'bg-rose-500/20 text-rose-500' :
                                      record.severity === 'Medium' ? 'bg-amber-500/20 text-amber-500' :
                                      'bg-blue-500/20 text-blue-500'
                                    }`}>
                                       <ShieldAlert size={20} />
                                    </div>
                                    <div>
                                       <h4 className="text-sm font-bold text-white uppercase tracking-tight">{record.incident}</h4>
                                       <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">{record.date}</p>
                                    </div>
                                 </div>
                                 <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                    record.status.includes('Bitti') || record.status.includes('Karar') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-500'
                                 }`}>
                                    {record.status}
                                 </div>
                              </div>
                              {record.description && (
                                <p className="text-xs text-sleek-text leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5">
                                   {record.description}
                                </p>
                              )}
                           </div>
                         ))
                       ) : (
                         <div className="py-20 text-center flex flex-col items-center gap-4 border-2 border-dashed border-white/5 rounded-3xl">
                            <ShieldCheck size={48} className="text-emerald-500/20" />
                            <div className="space-y-1">
                               <p className="text-sm font-bold text-white">Temiz Sicil</p>
                               <p className="text-xs text-sleek-muted uppercase tracking-widest font-black">Bu öğrenciye ait herhangi bir disiplin kaydı bulunmamaktadır.</p>
                            </div>
                         </div>
                       )}
                    </div>
                  </div>
                )}
              </div>

             {/* SUBJECT DETAIL MODAL (DRILLDOWN) */}
             {selectedSubjectDetail && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                   <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedSubjectDetail(null)}></div>
                   <div className="relative w-full max-w-2xl bg-sleek-aside border border-sleek-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                      <div className="p-6 border-b border-sleek-border flex items-center justify-between bg-white/[0.02]">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                               <BookOpen size={20} />
                            </div>
                            <div>
                               <h3 className="text-lg font-bold text-white tracking-tight">{selectedSubjectDetail} Analizi</h3>
                               <p className="text-[10px] font-black text-sleek-muted uppercase tracking-[0.2em]">{selectedStudent.name}</p>
                            </div>
                         </div>
                         <button onClick={() => setSelectedSubjectDetail(null)} className="text-sleek-muted hover:text-white"><X size={20} /></button>
                      </div>
                      
                      <div className="p-8 space-y-8 overflow-y-auto max-h-[70vh] custom-scrollbar">
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {(() => {
                              const tasks = selectedStudent.coaching?.weeklyPlans.flatMap(p => p.tasks).filter(t => t.subject === selectedSubjectDetail) || [];
                              const qCount = tasks.reduce((acc, t) => acc + (t.type === 'soru' ? t.questionCount : 0), 0);
                              const topics = new Set(tasks.map(t => t.topic)).size;
                              const comp = tasks.filter(t => t.completed).length;
                              const rate = tasks.length > 0 ? Math.round((comp / tasks.length) * 100) : 0;

                              return (
                                <>
                                   <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                                      <p className="text-[9px] font-black text-sleek-muted uppercase">Soru</p>
                                      <p className="text-lg font-bold text-white">{qCount}</p>
                                   </div>
                                   <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                                      <p className="text-[9px] font-black text-sleek-muted uppercase">Konu</p>
                                      <p className="text-lg font-bold text-white">{topics}</p>
                                   </div>
                                   <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                                      <p className="text-[9px] font-black text-sleek-muted uppercase">Görev</p>
                                      <p className="text-lg font-bold text-white">{tasks.length}</p>
                                   </div>
                                   <div className="p-4 rounded-2xl bg-slate-900 border border-brand-primary/20 space-y-1">
                                      <p className="text-[9px] font-black text-brand-primary uppercase">Başarı</p>
                                      <p className="text-lg font-bold text-brand-primary">%{rate}</p>
                                   </div>
                                </>
                              );
                            })()}
                         </div>

                         <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-white uppercase tracking-widest border-l-2 border-brand-primary pl-3">Çalışılan Konular ve Tarihler</h4>
                            <div className="space-y-3">
                               {selectedStudent.coaching?.weeklyPlans.map(plan => {
                                 const planTasks = plan.tasks.filter(t => t.subject === selectedSubjectDetail);
                                 if (planTasks.length === 0) return null;

                                 return planTasks.map((task, idx) => (
                                   <div key={`${plan.id}-${task.id}-${idx}`} className="p-4 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center justify-between group">
                                      <div className="flex items-center gap-4">
                                         <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] ${task.completed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                                            {task.completed ? <Check size={14} /> : task.day[0]}
                                         </div>
                                         <div>
                                            <p className="text-sm font-bold text-white group-hover:text-brand-primary transition-colors">{task.topic}</p>
                                            <div className="flex items-center gap-3 mt-1">
                                               <span className="text-[9px] font-black text-sleek-muted uppercase">{plan.startDate}</span>
                                               <span className={`px-2 py-0.5 rounded bg-white/5 text-[9px] font-black uppercase tracking-widest ${task.type === 'konu' ? 'text-blue-400' : 'text-amber-400'}`}>
                                                  {task.type === 'konu' ? 'Konu' : `Soru: ${task.questionCount}`}
                                               </span>
                                            </div>
                                         </div>
                                      </div>
                                      <div className={`px-3 py-1 rounded-full text-[10px] font-bold ${task.completed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                                         {task.completed ? 'Tamamlandı' : 'Bekliyor'}
                                      </div>
                                   </div>
                                 ));
                               })}
                            </div>
                         </div>

                         <div className="p-6 rounded-3xl bg-slate-900 border border-sleek-border relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                               <TrendingUp size={80} />
                            </div>
                            <div className="relative z-10">
                               <h5 className="text-sm font-bold text-white mb-4">Ders Gelişimi</h5>
                               <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                                  {(() => {
                                    const tasks = selectedStudent.coaching?.weeklyPlans.flatMap(p => p.tasks).filter(t => t.subject === selectedSubjectDetail) || [];
                                    const rate = tasks.length > 0 ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) : 0;
                                    return <div className="h-full bg-brand-primary shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-1000" style={{width: `${rate}%`}}></div>
                                  })()}
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Öğrenci İşleri</h1>
          <p className="text-sleek-muted mt-1 font-medium">Kayıtlı öğrenciler ve akademik takip paneli.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-primary shadow-lg shadow-blue-500/20"
        >
          <UserPlus size={18} />
          Yeni Öğrenci Ekle
        </button>
      </div>

      {/* Tabs / Filters Bar */}
      <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl w-fit">
        <button className="px-4 py-2 text-xs font-bold rounded-lg bg-sleek-border text-white transition-all">Asil Kayıtlar</button>
        <button className="px-4 py-2 text-xs font-bold rounded-lg text-sleek-muted hover:text-white transition-all">Ön Görüşmeler</button>
        <button className="px-4 py-2 text-xs font-bold rounded-lg text-sleek-muted hover:text-white transition-all">Mezunlar</button>
      </div>

      {/* Table Section */}
      <div className="card-sleek !p-0">
        <div className="p-6 border-b border-sleek-border flex items-center justify-between gap-4">
          <div className="relative flex-1 group">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-sleek-muted group-focus-within:text-brand-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Öğrenci adı veya numarası ile ara..." 
              className="w-full bg-slate-900/50 border border-sleek-border rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-brand-primary placeholder:text-slate-600 transition-all"
            />
          </div>
          <button className="p-2.5 rounded-xl border border-sleek-border text-sleek-muted hover:text-white hover:bg-white/5 transition-all">
            <Filter size={18} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-sleek-border bg-slate-900/20 text-xs font-black text-sleek-muted uppercase tracking-[0.2em]">
                <th className="px-6 py-4">Öğrenci Kimliği</th>
                <th className="px-6 py-4">Numara</th>
                <th className="px-6 py-4">Düzey / Şube</th>
                <th className="px-6 py-4">Kayıt Türü</th>
                <th className="px-6 py-4">Durum</th>
                <th className="px-6 py-4 text-right">Eylem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sleek-border/50">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-white/[0.02] transition-all group">
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedStudent(student)}
                      className="flex items-center gap-3 text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-700 border border-sleek-border flex items-center justify-center text-xs font-bold text-slate-300">
                        {student.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-brand-primary transition-colors">{student.name}</p>
                        <p className="text-[10px] text-sleek-muted uppercase font-black tracking-widest mt-0.5">Öğrenci Kartı</p>
                      </div>
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-sleek-muted">{student.no}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-sleek-text">
                      <GraduationCap size={14} className="text-brand-primary" />
                      {student.grade}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5">
                      {student.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <span className={`w-1.5 h-1.5 rounded-full ${
                        student.status === 'Aktif' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 
                        student.status === 'Pasif' ? 'bg-rose-500' : 'bg-amber-500'
                      }`}></span>
                      <span className="text-[10px] font-black text-white uppercase tracking-wider">{student.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-lg hover:bg-white/5 text-sleek-muted hover:text-white transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-sleek-border flex items-center justify-between text-[10px] font-black text-sleek-muted uppercase tracking-widest">
          <div>GÖSTERİLEN: {students.length} / 842 TOPLAM</div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-sleek-border hover:text-white hover:bg-white/5 transition-all">Geri</button>
            <button className="px-4 py-2 rounded-lg border border-sleek-border hover:text-white hover:bg-white/5 transition-all">İleri</button>
          </div>
        </div>
      </div>

      {/* REGISTRATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative w-full max-w-2xl bg-sleek-aside border border-sleek-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-sleek-border flex items-center justify-between bg-white/[0.02]">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">Yeni Öğrenci Kaydı</h2>
                <div className="flex items-center gap-2 mt-1">
                   {[1,2,3,4,5].map(s => (
                     <div key={s} className={`h-1 rounded-full transition-all ${s <= currentStep ? 'w-6 bg-brand-primary' : 'w-2 bg-slate-700'}`}></div>
                   ))}
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-xl hover:bg-white/5 flex items-center justify-center text-sleek-muted hover:text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {/* STEP 1: PERSONAL INFO */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-2 text-brand-primary mb-2">
                       <User size={18} />
                       <span className="text-xs font-black uppercase tracking-widest">Kişisel Bilgiler</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">T.C. Kimlik No</label>
                        <input 
                          required
                          type="text" 
                          maxLength={11}
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none transition-all"
                          value={formData.tcNo || ''}
                          onChange={e => setFormData({...formData, tcNo: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Ad Soyad</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none transition-all"
                          value={formData.name || ''}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Doğum Tarihi</label>
                        <input 
                          type="date" 
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none transition-all"
                          value={formData.birthDate || ''}
                          onChange={e => setFormData({...formData, birthDate: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">E-Posta</label>
                        <input 
                          type="email" 
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none transition-all"
                          value={formData.email || ''}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Telefon Numaraları</label>
                          <button 
                            type="button"
                            onClick={() => setFormData({...formData, phone: [...(formData.phone || ['']), '']})}
                            className="w-6 h-6 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="space-y-3">
                          {(formData.phone || ['']).map((ph, idx) => (
                            <div key={idx} className="flex gap-2">
                              <div className="relative flex-1">
                                <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sleek-muted" />
                                <input 
                                  type="tel" 
                                  className="w-full bg-slate-900 border border-sleek-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none transition-all"
                                  value={ph}
                                  onChange={e => {
                                    const newPhones = [...(formData.phone || [''])];
                                    newPhones[idx] = e.target.value;
                                    setFormData({...formData, phone: newPhones});
                                  }}
                                />
                              </div>
                              {(formData.phone?.length || 0) > 1 && (
                                <button 
                                  type="button"
                                  onClick={() => {
                                    const newPhones = formData.phone?.filter((_, i) => i !== idx);
                                    setFormData({...formData, phone: newPhones});
                                  }}
                                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all"
                                >
                                  <Trash2 size={16} />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 space-y-4 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-brand-primary">
                          <MapPin size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest">İkamet Adresi</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">İl</label>
                              <select 
                                className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                                value={formData.address?.city || ''}
                                onChange={e => setFormData({...formData, address: { ...formData.address!, city: e.target.value, district: '' }})}
                              >
                                <option value="">Seçiniz</option>
                                {TURKEY_CITIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">İlçe</label>
                              <select 
                                className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                                value={formData.address?.district || ''}
                                onChange={e => setFormData({...formData, address: { ...formData.address!, district: e.target.value }})}
                                disabled={!formData.address?.city}
                              >
                                <option value="">Seçiniz</option>
                                {TURKEY_CITIES.find(c => c.name === formData.address?.city)?.districts.map(d => (
                                  <option key={d} value={d}>{d}</option>
                                ))}
                              </select>
                           </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Açık Adres</label>
                          <textarea 
                            rows={2}
                            className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                            placeholder="Mahalle, sokak, no..."
                            value={formData.address?.fullAddress || ''}
                            onChange={e => setFormData({...formData, address: { ...formData.address!, fullAddress: e.target.value }})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: ACADEMIC INFO */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-2 text-brand-primary mb-2">
                       <GraduationCap size={18} />
                       <span className="text-xs font-black uppercase tracking-widest">Akademik Bilgiler</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Sınıf</label>
                        <select 
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none appearance-none"
                          value={formData.grade || ''}
                          onChange={e => setFormData({...formData, grade: e.target.value})}
                        >
                          <option value="">Seçiniz</option>
                          <option value="9. Sınıf">9. Sınıf</option>
                          <option value="10. Sınıf">10. Sınıf</option>
                          <option value="11. Sınıf">11. Sınıf</option>
                          <option value="12. Sınıf">12. Sınıf</option>
                          <option value="Mezun">Mezun</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Okul Numarası</label>
                        <input 
                          type="text" 
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                          value={formData.no || ''}
                          onChange={e => setFormData({...formData, no: e.target.value})}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Geldiği Okul</label>
                        <div className="relative">
                          <SchoolIcon size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-sleek-muted" />
                          <input 
                            type="text" 
                            className="w-full bg-slate-900 border border-sleek-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                            value={formData.prevSchool || ''}
                            onChange={e => setFormData({...formData, prevSchool: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: SERVICES */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-2 text-brand-primary mb-2">
                       <ShieldCheck size={18} />
                       <span className="text-xs font-black uppercase tracking-widest">Ek Hizmetler</span>
                    </div>
                    <div className="space-y-4">
                       <div className="p-6 rounded-2xl bg-slate-900 border border-sleek-border flex items-center justify-between group hover:border-brand-primary/40 transition-all">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                                <MapPin size={24} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-white">Servis Hizmeti</h4>
                                <p className="text-[10px] text-sleek-muted uppercase tracking-widest font-black mt-0.5">Ulaşım ve Lokasyon Takibi</p>
                             </div>
                          </div>
                          <button 
                            type="button"
                            onClick={() => setFormData({...formData, services: {...formData.services!, bus: !formData.services?.bus}})}
                            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                              formData.services?.bus ? 'bg-brand-primary text-white' : 'bg-white/5 text-sleek-muted'
                            }`}
                          >
                            {formData.services?.bus ? 'EVET' : 'HAYIR'}
                          </button>
                       </div>

                       <div className="p-6 rounded-2xl bg-slate-900 border border-sleek-border flex items-center justify-between group hover:border-brand-primary/40 transition-all">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                <Check size={24} />
                             </div>
                             <div>
                                <h4 className="text-sm font-bold text-white">Yemek Hizmeti</h4>
                                <p className="text-[10px] text-sleek-muted uppercase tracking-widest font-black mt-0.5">Diyetisyen Onaylı Menü</p>
                             </div>
                          </div>
                          <button 
                            type="button"
                            onClick={() => setFormData({...formData, services: {...formData.services!, dining: !formData.services?.dining}})}
                            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                              formData.services?.dining ? 'bg-brand-primary text-white' : 'bg-white/5 text-sleek-muted'
                            }`}
                          >
                            {formData.services?.dining ? 'EVET' : 'HAYIR'}
                          </button>
                       </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: PARENT INFO */}
                {currentStep === 4 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 p-2">
                    <div className="flex items-center justify-between mb-2">
                       <div className="flex items-center gap-2 text-brand-primary">
                          <Users size={18} />
                          <span className="text-xs font-black uppercase tracking-widest">Veli / Vasî Bilgileri</span>
                       </div>
                       <button 
                         type="button"
                         onClick={() => setFormData({...formData, parents: [...(formData.parents || []), { tcNo: '', name: '', phone: [''], birthDate: '', email: '', relationship: 'Anne', address: { city: '', district: '', fullAddress: '' } }]})}
                         className="px-4 py-1.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-black uppercase tracking-wider hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2"
                       >
                         <Plus size={14} />
                         Veli Ekle
                       </button>
                    </div>

                    <div className="space-y-6">
                      {(formData.parents || []).map((parent, pIdx) => (
                        <div key={pIdx} className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
                          {(formData.parents?.length || 0) > 1 && (
                            <button 
                              type="button"
                              onClick={() => {
                                const newParents = formData.parents?.filter((_, i) => i !== pIdx);
                                setFormData({...formData, parents: newParents});
                              }}
                              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10"
                            >
                              <X size={16} />
                            </button>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-2">
                               <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Veli Ad Soyad</label>
                               <input 
                                 type="text" 
                                 className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                                 value={parent.name}
                                 onChange={e => {
                                   const newParents = [...(formData.parents || [])];
                                   newParents[pIdx].name = e.target.value;
                                   setFormData({...formData, parents: newParents});
                                 }}
                               />
                             </div>
                             <div className="space-y-2">
                               <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Yakınlık Derecesi</label>
                               <select 
                                 className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none appearance-none"
                                 value={parent.relationship}
                                 onChange={e => {
                                   const newParents = [...(formData.parents || [])];
                                   newParents[pIdx].relationship = e.target.value;
                                   setFormData({...formData, parents: newParents});
                                 }}
                               >
                                 {RELATIONSHIPS.map(rel => <option key={rel} value={rel}>{rel}</option>)}
                               </select>
                             </div>
                             <div className="md:col-span-2 space-y-2">
                               <div className="flex items-center justify-between mb-1">
                                 <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Veli Telefonları</label>
                                 <button 
                                   type="button"
                                   onClick={() => {
                                     const newParents = [...(formData.parents || [])];
                                     newParents[pIdx].phone = [...newParents[pIdx].phone, ''];
                                     setFormData({...formData, parents: newParents});
                                   }}
                                   className="w-5 h-5 rounded-md bg-brand-primary/10 text-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
                                 >
                                   <Plus size={12} />
                                 </button>
                               </div>
                               <div className="space-y-2">
                                  {parent.phone.map((ph, phIdx) => (
                                    <div key={phIdx} className="flex gap-2">
                                      <input 
                                        type="tel" 
                                        className="flex-1 bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                                        value={ph}
                                        onChange={e => {
                                          const newParents = [...(formData.parents || [])];
                                          newParents[pIdx].phone[phIdx] = e.target.value;
                                          setFormData({...formData, parents: newParents});
                                        }}
                                      />
                                      {parent.phone.length > 1 && (
                                        <button 
                                          type="button"
                                          onClick={() => {
                                            const newParents = [...(formData.parents || [])];
                                            newParents[pIdx].phone = newParents[pIdx].phone.filter((_, i) => i !== phIdx);
                                            setFormData({...formData, parents: newParents});
                                          }}
                                          className="w-10 h-11 flex items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all"
                                        >
                                          <Trash2 size={16} />
                                        </button>
                                      )}
                                    </div>
                                  ))}
                               </div>
                             </div>
                             <div className="space-y-2 text-brand-primary pt-4 border-t border-white/5 md:col-span-2">
                                <p className="text-[10px] font-black text-sleek-muted uppercase tracking-widest flex items-center gap-2">
                                   <MapPin size={12} className="text-brand-primary" /> Veli Adres Bilgileri
                                </p>
                             </div>
                             <div className="space-y-2 px-1">
                                <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">İl</label>
                                <select 
                                  className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white"
                                  value={parent.address?.city || ''}
                                  onChange={e => {
                                    const newParents = [...(formData.parents || [])];
                                    newParents[pIdx].address = { ...newParents[pIdx].address!, city: e.target.value, district: '' };
                                    setFormData({...formData, parents: newParents});
                                  }}
                                >
                                  <option value="">Seçiniz</option>
                                  {TURKEY_CITIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                                </select>
                             </div>
                             <div className="space-y-2 px-1">
                                <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">İlçe</label>
                                <select 
                                  className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white"
                                  value={parent.address?.district || ''}
                                  onChange={e => {
                                    const newParents = [...(formData.parents || [])];
                                    newParents[pIdx].address = { ...newParents[pIdx].address!, district: e.target.value };
                                    setFormData({...formData, parents: newParents});
                                  }}
                                  disabled={!parent.address?.city}
                                >
                                  <option value="">Seçiniz</option>
                                  {TURKEY_CITIES.find(c => c.name === parent.address?.city)?.districts.map(d => (
                                    <option key={d} value={d}>{d}</option>
                                  ))}
                                </select>
                             </div>
                             <div className="md:col-span-2 space-y-2 px-1">
                               <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Açık Adres</label>
                               <textarea 
                                 rows={2}
                                 className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                                 value={parent.address?.fullAddress || ''}
                                 onChange={e => {
                                   const newParents = [...(formData.parents || [])];
                                   newParents[pIdx].address = { ...newParents[pIdx].address!, fullAddress: e.target.value };
                                   setFormData({...formData, parents: newParents});
                                 }}
                               />
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 5: PAYMENT & CONTRACT */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-2 text-brand-primary mb-2">
                       <CreditCard size={18} />
                       <span className="text-xs font-black uppercase tracking-widest">Kayıt Sözleşmesi & Finansal</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Kayıt Ücreti (TL)</label>
                        <input 
                          type="text" 
                          placeholder="₺ 0.00"
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                          value={formData.payment?.total || ''}
                          onChange={e => setFormData({...formData, payment: {...formData.payment!, total: e.target.value}})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Taksit Sayısı</label>
                        <input 
                          type="number" 
                          min={1}
                          max={12}
                          className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-2.5 text-sm text-white focus:border-brand-primary outline-none"
                          value={formData.payment?.installments || 1}
                          onChange={e => setFormData({...formData, payment: {...formData.payment!, installments: parseInt(e.target.value)}})}
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Ödeme Yöntemi</label>
                        <div className="grid grid-cols-3 gap-2">
                           {['Nakit', 'Kredi Kartı', 'Banka Havalesi'].map(m => (
                             <button 
                                key={m}
                                type="button"
                                onClick={() => setFormData({...formData, payment: {...formData.payment!, method: m}})}
                                className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                                  formData.payment?.method === m ? 'bg-brand-primary/10 border-brand-primary text-brand-primary shadow-lg shadow-blue-500/10' : 'bg-slate-900 border-sleek-border text-sleek-muted hover:border-white/20'
                                }`}
                             >
                               {m}
                             </button>
                           ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                       <p className="text-[10px] font-bold text-orange-400 italic leading-relaxed">
                          * "Kayıt Et" butonuna bastığınızda MEB yönetmeliğine uygun öğrenci kayıt sözleşmesi otomatik olarak oluşturulacak ve sistem kaydı tamamlanacaktır.
                       </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-sleek-border flex items-center justify-between bg-white/[0.02]">
                {currentStep > 1 ? (
                  <button 
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center gap-2 text-xs font-black text-sleek-muted hover:text-white uppercase tracking-widest transition-all"
                  >
                    <ChevronLeft size={16} />
                    Geri Dön
                  </button>
                ) : <div></div>}

                {currentStep < 5 ? (
                  <button 
                    type="button"
                    onClick={handleNext}
                    className="btn-primary px-8"
                  >
                    Devam Et
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="btn-primary px-12 bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20"
                  >
                    <Check size={18} />
                    Kayıt Et
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

