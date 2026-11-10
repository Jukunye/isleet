import { DataTable } from '@/components/data-table';
import { columns } from '@/components/questions/columns';
import { questions } from '@/lib/data/questions';

export default function Page() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-6 text-2xl font-semibold">Questions</h1>
      <DataTable columns={columns} data={questions} />
    </main>
  );
}
