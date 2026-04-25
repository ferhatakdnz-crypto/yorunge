import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Task {
  id: string;
  day: string;
  startTime?: string;
  endTime?: string;
  subject: string;
  topic: string;
  type: 'konu' | 'soru';
  questionCount: number;
  completed: boolean;
}

export interface WeeklyPlan {
  id: string;
  startDate: string;
  endDate: string;
  tasks: Task[];
  status: 'aktif' | 'tamamlandi';
}

export interface DisciplinaryRecord {
  id: string;
  incident: string;
  date: string;
  status: string;
  severity: 'Low' | 'Medium' | 'High';
  description?: string;
}

export interface Parent {
  tcNo: string;
  name: string;
  phone: string[];
  birthDate: string;
  email: string;
  relationship: string;
  address?: {
    city: string;
    district: string;
    fullAddress: string;
  };
}

export interface Student {
  id: number;
  name: string;
  no: string;
  grade: string;
  type: string;
  status: string;
  avatar: string;
  tcNo?: string;
  birthDate?: string;
  email?: string;
  phone: string[];
  schoolBranch?: string;
  prevSchool?: string;
  address?: {
    city: string;
    district: string;
    fullAddress: string;
  };
  services?: {
    dining: boolean;
    bus: boolean;
  };
  parents: Parent[];
  payment?: {
    total: string;
    installments: number;
    method: string;
  };
  coaching?: {
    coachName: string;
    targetUniversity: string;
    targetDept: string;
    lastMeeting: string;
    studyPlan: string;
    weeklyPlans: WeeklyPlan[];
  };
  disciplinaryRecords?: DisciplinaryRecord[];
}

interface StudentContextType {
  students: Student[];
  addStudent: (student: Student) => void;
  updateStudent: (student: Student) => void;
  addDisciplinaryRecord: (studentId: number, record: DisciplinaryRecord) => void;
}

const INITIAL_STUDENTS: Student[] = [
  { 
    id: 1, 
    name: 'Ali Yılmaz', 
    no: '1242', 
    grade: '12-A', 
    type: 'Asil', 
    status: 'Aktif', 
    avatar: 'AY',
    phone: ['(555) 123 45 67'],
    parents: [
      {
        tcNo: '12345678901',
        name: 'Fatma Yılmaz',
        relationship: 'Anne',
        phone: ['(555) 987 65 43'],
        birthDate: '1980-05-12',
        email: 'fatma@example.com'
      }
    ],
    coaching: {
      coachName: 'Mustafa Hoca',
      targetUniversity: 'İTÜ',
      targetDept: 'Bilgisayar Mühendisliği',
      lastMeeting: '20.04.2025',
      studyPlan: 'YKS Hazırlık',
      weeklyPlans: [
        {
          id: 'p1',
          startDate: '2025-04-21',
          endDate: '2025-04-27',
          status: 'aktif',
          tasks: [
            { id: '1', day: 'Pazartesi', startTime: '09:00', endTime: '10:30', subject: 'Matematik', topic: 'Türev', type: 'konu', questionCount: 0, completed: true },
            { id: '2', day: 'Pazartesi', startTime: '10:45', endTime: '12:15', subject: 'Fizik', topic: 'Modern Fizik', type: 'soru', questionCount: 30, completed: false },
          ]
        }
      ]
    },
    disciplinaryRecords: [
      { id: 'd1', incident: 'Kavga (Tartışma)', date: '2026-04-18', status: 'Soruşturma Devam Ediyor', severity: 'High', description: 'Bahçede başka bir öğrenciyle sözlü tartışma.' }
    ]
  },
  { 
    id: 2, 
    name: 'Zeynep Kaya', 
    no: '1105', 
    grade: '11-B', 
    type: 'Asil', 
    status: 'Aktif', 
    avatar: 'ZK',
    phone: [],
    parents: [],
    disciplinaryRecords: [
      { id: 'd2', incident: 'Okul Malına Zarar', date: '2026-04-15', status: 'Savunma Bekleniyor', severity: 'Medium', description: 'Sınıftaki akıllı tahtaya kasti olmayan zarar.' }
    ]
  },
  { 
    id: 3, 
    name: 'Mehmet Demir', 
    no: '1098', 
    grade: '10-C', 
    type: 'Hazırlık', 
    status: 'Onay Bekliyor', 
    avatar: 'MD',
    phone: [],
    parents: [],
    disciplinaryRecords: [
      { id: 'd3', incident: 'Devamlı Geç Kalma', date: '2026-04-10', status: 'Karar Verildi', severity: 'Low', description: 'Son bir ayda 5 kez birinci derse geç kalındı.' }
    ]
  },
  { id: 4, name: 'Elif Şahin', no: '1256', grade: '12-A', type: 'Asil', status: 'Aktif', avatar: 'EŞ', phone: [], parents: [] },
  { id: 5, name: 'Can Özcan', no: '1423', grade: '9-D', type: 'Asil', status: 'Pasif', avatar: 'CÖ', phone: [], parents: [] },
];

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function StudentProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);

  const addStudent = (student: Student) => {
    setStudents(prev => [student, ...prev]);
  };

  const updateStudent = (updatedStudent: Student) => {
    setStudents(prev => prev.map(s => s.id === updatedStudent.id ? updatedStudent : s));
  };

  const addDisciplinaryRecord = (studentId: number, record: DisciplinaryRecord) => {
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          disciplinaryRecords: [...(s.disciplinaryRecords || []), record]
        };
      }
      return s;
    }));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, addDisciplinaryRecord }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
}
