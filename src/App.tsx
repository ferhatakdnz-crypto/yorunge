import { Routes, Route } from 'react-router-dom';
// @ işareti src klasörünü temsil eder
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import StudentAffairs from '@/pages/StudentAffairs';
import Personnel from '@/pages/Personnel';
import Security from '@/pages/Security';
import Discipline from '@/pages/Discipline';
import Coaching from '@/pages/Coaching';
import SalaryCalculation from '@/pages/SalaryCalculation';
import Events from '@/pages/Events';
import Branches from '@/pages/Branches';
import Schedule from '@/pages/Schedule';
import Tasks from '@/pages/Tasks';
import Achievements from '@/pages/Achievements';
import Committees from '@/pages/Committees';
import Rooms from '@/pages/Rooms';
import Cleaning from '@/pages/Cleaning';
import { StudentProvider } from '@/context/StudentContext';
import { CurriculumProvider } from '@/context/CurriculumContext';

export default function App() {
  return (
    <CurriculumProvider>
      <StudentProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/okul-kayit" element={<StudentAffairs />} />
            <Route path="/personeller" element={<Personnel />} />
            <Route path="/ziyaretci" element={<Security />} />
            <Route path="/subeler" element={<Branches />} />
            <Route path="/ders-programi" element={<Schedule />} />
            <Route path="/disiplin" element={<Discipline />} />
            <Route path="/egitim-kocum" element={<Coaching />} />
            <Route path="/ek-ders" element={<SalaryCalculation />} />
            <Route path="/etkinlik-evraklari" element={<Events />} />
            <Route path="/gorevler" element={<Tasks />} />
            <Route path="/kazanimlar" element={<Achievements />} />
            <Route path="/kurul-komisyonlar" element={<Committees />} />
            <Route path="/odalar" element={<Rooms />} />
            <Route path="/temizlik" element={<Cleaning />} />
            
            {/* Tanımsız rotalar için Dashboard'a yönlendir */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Layout>
      </StudentProvider>
    </CurriculumProvider>
  );
}