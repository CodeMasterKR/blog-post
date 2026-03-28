export type Post = {
  id: number
  title: string
  content: string
  category: string
  date: string
}

export const posts: Post[] = [
  { id: 1, title: "React nima?", content: "React — Facebook tomonidan yaratilgan UI kutubxonasi...", category: "react", date: "2024-01-01" },
  { id: 2, title: "TypeScript asoslari", content: "TypeScript — JavaScript ning kuchli versiyasi...", category: "typescript", date: "2024-01-05" },
  { id: 3, title: "NestJS bilan backend", content: "NestJS — Node.js uchun progressive framework...", category: "nodejs", date: "2024-01-10" },
  { id: 4, title: "Tailwind CSS", content: "Tailwind — utility-first CSS framework...", category: "css", date: "2024-01-15" },
  { id: 5, title: "PostgreSQL asoslari", content: "PostgreSQL — eng kuchli open-source database...", category: "database", date: "2024-01-20" },
]
