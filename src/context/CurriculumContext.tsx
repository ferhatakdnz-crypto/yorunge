import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { SubjectCurriculum } from '../types/curriculum';
import { INITIAL_CURRICULUM_DATA } from '../data/curriculumData';

interface CurriculumContextType {
  curriculums: SubjectCurriculum[];
  updateCurriculum: (updated: SubjectCurriculum) => void;
  addCurriculum: (newItem: SubjectCurriculum) => void;
  deleteCurriculum: (id: string) => void;
}

const CurriculumContext = createContext<CurriculumContextType | undefined>(undefined);

export function CurriculumProvider({ children }: { children: ReactNode }) {
  const [curriculums, setCurriculums] = useState<SubjectCurriculum[]>(INITIAL_CURRICULUM_DATA);

  const updateCurriculum = (updated: SubjectCurriculum) => {
    setCurriculums(prev => prev.map(c => c.id === updated.id ? updated : c));
  };

  const addCurriculum = (newItem: SubjectCurriculum) => {
    setCurriculums(prev => [...prev, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const deleteCurriculum = (id: string) => {
    setCurriculums(prev => prev.filter(c => c.id !== id));
  };

  return (
    <CurriculumContext.Provider value={{ curriculums, updateCurriculum, addCurriculum, deleteCurriculum }}>
      {children}
    </CurriculumContext.Provider>
  );
}

export function useCurriculum() {
  const context = useContext(CurriculumContext);
  if (context === undefined) {
    throw new Error('useCurriculum must be used within a CurriculumProvider');
  }
  return context;
}
