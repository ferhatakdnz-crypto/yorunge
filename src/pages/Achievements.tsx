import React, { useState } from 'react';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Edit3, 
  ChevronDown,
  Layers,
  X,
  Check,
  Save,
  Trash2,
  Filter,
  FileText
} from 'lucide-react';

import { Topic, Theme, SubjectCurriculum } from '../types/curriculum';
import { useCurriculum } from '../context/CurriculumContext';

export default function Achievements() {
  const { curriculums, addCurriculum, updateCurriculum } = useCurriculum();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('Tümü');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<SubjectCurriculum | null>(null);

  const filteredData = curriculums.filter(item => {
    const matchesSearch = item.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.themes.some(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesGrade = selectedGrade === 'Tümü' || item.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const handleSave = (curriculum: SubjectCurriculum) => {
    if (editingItem) {
      updateCurriculum(curriculum);
      setEditingItem(null);
    } else {
      addCurriculum(curriculum);
      setIsNewModalOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Kazanımlar ve Müfredat
          </h1>
          <p className="text-sleek-muted text-sm mt-1">Sınıf bazlı konu ve kazanım takibi</p>
        </div>
        <button 
          onClick={() => setIsNewModalOpen(true)}
          className="btn-primary"
        >
          <Plus size={18} />
          Yeni Müfredat Ekle
        </button>
      </div>

      {/* Control Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sleek-muted" size={18} />
          <input 
            type="text" 
            placeholder="Ders veya konu ara..."
            className="w-full bg-sleek-aside border border-sleek-border rounded-2xl pl-12 pr-4 py-3 text-sm text-white focus:border-brand-primary outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-sleek-muted" size={18} />
          <select 
            className="w-full bg-sleek-aside border border-sleek-border rounded-2xl pl-12 pr-4 py-3 text-sm text-white focus:border-brand-primary outline-none appearance-none cursor-pointer"
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
          >
            <option value="Tümü">Tüm Sınıflar</option>
            <option value="9. Sınıf">9. Sınıf</option>
            <option value="10. Sınıf">10. Sınıf</option>
            <option value="11. Sınıf">11. Sınıf</option>
            <option value="12. Sınıf">12. Sınıf</option>
            <option value="TYT">TYT</option>
            <option value="AYT">AYT</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-sleek-muted pointer-events-none" size={14} />
        </div>
      </div>

      {/* Curriculum List */}
      <div className="grid gap-6">
        {filteredData.map((item) => (
          <div 
            key={item.id}
            className="group bg-sleek-aside border border-sleek-border rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-300 shadow-lg"
          >
            <div 
              className="p-6 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-transform"
              onClick={() => toggleExpand(item.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                      {item.grade}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">{item.subject}</h3>
                  </div>
                  <p className="text-sleek-muted text-xs mt-1">{item.themes.length} Tema • {item.themes.reduce((acc, t) => acc + t.topics.length, 0)} Kazanım</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingItem(item);
                  }}
                  className="p-2 rounded-xl bg-white/5 text-sleek-muted hover:text-white hover:bg-white/10 transition-all"
                >
                  <Edit3 size={18} />
                </button>
                <div className={`text-sleek-muted transition-transform duration-300 ${expandedItems.includes(item.id) ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            {expandedItems.includes(item.id) && (
              <div className="border-t border-sleek-border bg-black/20 p-6 space-y-6 animate-in slide-in-from-top-4 duration-300">
                {item.themes.map((theme) => (
                  <div key={theme.id} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                        <Layers size={16} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wide">{theme.title}</h4>
                        <p className="text-sleek-muted text-xs mt-0.5">{theme.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-11">
                      {theme.topics.map((topic) => (
                        <div 
                          key={topic.id}
                          className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group/topic"
                        >
                          <h5 className="text-sm font-bold text-white group-hover/topic:text-brand-primary transition-colors">{topic.title}</h5>
                          <p className="text-sleek-muted text-[11px] mt-1 leading-relaxed">{topic.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <div className="py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-sleek-aside border border-sleek-border flex items-center justify-center mx-auto mb-4 text-sleek-muted">
            <Search size={32} />
          </div>
          <h3 className="text-lg font-bold text-white">Sonuç Bulunamadı</h3>
          <p className="text-sleek-muted max-w-sm mx-auto mt-2">Arama kriterlerinize uygun müfredat kaydı bulunamadı.</p>
        </div>
      )}

      {/* Modals */}
      {(isNewModalOpen || editingItem) && (
        <CurriculumModal 
          isOpen={true} 
          onClose={() => {
            setIsNewModalOpen(false);
            setEditingItem(null);
          }}
          onSave={handleSave}
          initialData={editingItem || undefined}
        />
      )}
    </div>
  );
}

// Curriculum Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: SubjectCurriculum) => void;
  initialData?: SubjectCurriculum;
}

function CurriculumModal({ isOpen, onClose, onSave, initialData }: ModalProps) {
  const [formData, setFormData] = useState<SubjectCurriculum>(initialData || {
    id: '',
    grade: '9. Sınıf',
    subject: '',
    themes: [{ id: 't1', title: '', description: '', topics: [{ id: 'tp1', title: '', description: '' }] }]
  });

  const addTheme = () => {
    setFormData({
      ...formData,
      themes: [...formData.themes, { id: `t${Date.now()}`, title: '', description: '', topics: [{ id: `tp${Date.now()}`, title: '', description: '' }] }]
    });
  };

  const addTopic = (themeId: string) => {
    setFormData({
      ...formData,
      themes: formData.themes.map(t => t.id === themeId ? {
        ...t,
        topics: [...t.topics, { id: `tp${Date.now()}`, title: '', description: '' }]
      } : t)
    });
  };

  const removeTheme = (id: string) => {
    setFormData({ ...formData, themes: formData.themes.filter(t => t.id !== id) });
  };

  const removeTopic = (themeId: string, topicId: string) => {
    setFormData({
      ...formData,
      themes: formData.themes.map(t => t.id === themeId ? {
        ...t,
        topics: t.topics.filter(tp => tp.id !== topicId)
      } : t)
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-sleek-aside border border-sleek-border rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-sleek-border flex items-center justify-between bg-white/[0.02]">
          <h3 className="text-xl font-bold text-white tracking-tight">
            {initialData ? 'Müfredatı Düzenle' : 'Yeni Müfredat Ekle'}
          </h3>
          <button onClick={onClose} className="text-sleek-muted hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Sınıf Seviyesi</label>
              <select 
                className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-3 text-sm text-white focus:border-brand-primary outline-none transition-all"
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              >
                <option value="9. Sınıf">9. Sınıf</option>
                <option value="10. Sınıf">10. Sınıf</option>
                <option value="11. Sınıf">11. Sınıf</option>
                <option value="12. Sınıf">12. Sınıf</option>
                <option value="TYT">TYT</option>
                <option value="AYT">AYT</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Ders Adı</label>
              <input 
                type="text" 
                placeholder="Örn: Modern Fizik"
                className="w-full bg-slate-900 border border-sleek-border rounded-xl px-4 py-3 text-sm text-white focus:border-brand-primary outline-none transition-all placeholder:text-slate-700"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-black text-sleek-muted uppercase tracking-widest">Tema Listesi</label>
              <button 
                type="button"
                onClick={addTheme}
                className="text-xs font-bold text-brand-primary hover:text-brand-secondary flex items-center gap-1.5 transition-colors"
              >
                <Plus size={14} /> Temayı Ekle
              </button>
            </div>

            <div className="space-y-8">
              {formData.themes.map((theme, themeIdx) => (
                <div key={theme.id} className="relative p-6 rounded-3xl border border-white/5 bg-white/[0.01]">
                  <button 
                    onClick={() => removeTheme(theme.id)}
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-lg"
                  >
                    <Trash2 size={14} />
                  </button>

                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Tema Başlığı (Örn: 1. TEMA: DALGALAR)"
                      className="w-full bg-transparent text-lg font-bold text-white placeholder:text-slate-800 outline-none border-b border-white/5 focus:border-brand-primary pb-2 transition-all"
                      value={theme.title}
                      onChange={(e) => {
                        const newThemes = [...formData.themes];
                        newThemes[themeIdx].title = e.target.value;
                        setFormData({ ...formData, themes: newThemes });
                      }}
                    />
                    <textarea 
                      placeholder="Tema Açıklaması..."
                      className="w-full bg-transparent text-sm text-sleek-muted placeholder:text-slate-800 outline-none resize-none h-12"
                      value={theme.description}
                      onChange={(e) => {
                        const newThemes = [...formData.themes];
                        newThemes[themeIdx].description = e.target.value;
                        setFormData({ ...formData, themes: newThemes });
                      }}
                    />

                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Kazanımlar / Konular</span>
                        <button 
                          type="button"
                          onClick={() => addTopic(theme.id)}
                          className="text-[10px] font-bold text-brand-primary hover:opacity-80 transition-opacity"
                        >
                          + Kazanım Ekle
                        </button>
                      </div>

                      <div className="grid gap-3">
                        {theme.topics.map((topic, topicIdx) => (
                          <div key={topic.id} className="group/topic flex gap-3 p-3 rounded-2xl bg-black/20 border border-white/5">
                            <div className="flex-1 space-y-2">
                              <input 
                                type="text"
                                placeholder="Konu Başlığı"
                                className="w-full bg-transparent text-sm font-bold text-white outline-none"
                                value={topic.title}
                                onChange={(e) => {
                                  const newThemes = [...formData.themes];
                                  newThemes[themeIdx].topics[topicIdx].title = e.target.value;
                                  setFormData({ ...formData, themes: newThemes });
                                }}
                              />
                              <input 
                                type="text"
                                placeholder="Açıklama"
                                className="w-full bg-transparent text-[11px] text-sleek-muted outline-none"
                                value={topic.description}
                                onChange={(e) => {
                                  const newThemes = [...formData.themes];
                                  newThemes[themeIdx].topics[topicIdx].description = e.target.value;
                                  setFormData({ ...formData, themes: newThemes });
                                }}
                              />
                            </div>
                            <button 
                              onClick={() => removeTopic(theme.id, topic.id)}
                              className="self-start p-1.5 rounded-lg text-slate-700 hover:text-red-500 transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-sleek-border bg-white/[0.02] flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-sleek-muted hover:text-white transition-colors">Vazgeç</button>
          <button 
            onClick={() => onSave(formData)}
            className="btn-primary px-8"
          >
            <Check size={18} />
            {initialData ? 'Güncelle' : 'Kaydet'}
          </button>
        </div>
      </div>
    </div>
  );
}
