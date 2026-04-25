export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface SubjectCurriculum {
  id: string;
  grade: string;
  subject: string;
  themes: Theme[];
}
