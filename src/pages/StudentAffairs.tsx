import React, { useState, useEffect } from 'react';
// ... (Tüm lucide-react ve recharts importların aynı kalıyor)
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  query, 
  orderBy 
} from 'firebase/firestore'; // Firebase metodlarını ekledik
import { db } from '../libs/firebase'; // Az önce oluşturduğumuz bağlantı
import { Student } from '../context/StudentContext';
import { TURKEY_CITIES } from '../lib/turkey-data';

// ... (RELATIONSHIPS dizisi aynı)

export default function StudentAffairs() {
  const [students, setStudents] = useState<Student[]>([]); // Verileri artık buradan yöneteceğiz
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeProfileTab, setActiveProfileTab] = useState<'kisisel' | 'akademik' | 'hizmet' | 'veli' | 'finans' | 'kocum' | 'disiplin'>('kisisel');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Student | null>(null);

  // --- FIREBASE: VERİLERİ ÇEKME ---
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "students"), orderBy("name", "asc"));
      const querySnapshot = await getDocs(q);
      const studentList = querySnapshot.docs.map(doc => ({
        id: doc.id, // Firebase'in verdiği benzersiz ID
        ...doc.data()
      })) as unknown as Student[];
      setStudents(studentList);
    } catch (error) {
      console.error("Öğrenciler yüklenirken hata oluştu: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // --- FIREBASE: YENİ ÖĞRENCİ EKLEME ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const studentData = {
      name: formData.name || '',
      no: formData.no || Math.floor(1000 + Math.random() * 9000).toString(),
      grade: formData.grade || 'Hazırlık',
      type: 'Asil',
      status: 'Aktif',
      avatar: (formData.name || 'ÖG').split(' ').map(n => n[0]).join('').toUpperCase(),
      createdAt: new Date().toISOString(),
      ...formData
    };

    try {
      await addDoc(collection(db, "students"), studentData);
      setIsModalOpen(false);
      resetForm();
      fetchStudents(); // Listeyi yenile
      alert("Öğrenci başarıyla kaydedildi!");
    } catch (error) {
      console.error("Kayıt hatası: ", error);
      alert("Veri kaydedilemedi. Lütfen internetinizi kontrol edin.");
    }
  };

  // --- FIREBASE: BİLGİ GÜNCELLEME ---
  const handleSave = async () => {
    if (editData && editData.id) {
      try {
        const studentRef = doc(db, "students", editData.id.toString());
        await updateDoc(studentRef, { ...editData });
        setSelectedStudent(editData);
        setIsEditing(false);
        fetchStudents();
        alert("Bilgiler güncellendi!");
      } catch (error) {
        console.error("Güncelleme hatası: ", error);
      }
    }
  };

  // ... (Geri kalan resetForm, handleNext, startEditing fonksiyonların aynı kalabilir)

  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  // ... (Return içindeki JSX yapın tamamen aynı kalacak, sadece students.map kısmı bu yeni state'i kullanacak)
}
