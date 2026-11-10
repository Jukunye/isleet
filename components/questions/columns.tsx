import type { ColumnDef } from '@tanstack/react-table';
import type { Question } from '@/lib/data/questions';

export const columns: ColumnDef<Question>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'title', header: 'Title' },
  { accessorKey: 'difficulty', header: 'Difficulty' },
];
