export type Question = {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
};

export const questions: Question[] = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy' },
  { id: '2', title: 'Add Two Numbers', difficulty: 'Medium' },
  { id: '3', title: 'Median of Two Sorted Arrays', difficulty: 'Hard' },
  { id: '4', title: 'Valid Parentheses', difficulty: 'Easy' },
  { id: '5', title: 'Merge k Sorted Lists', difficulty: 'Hard' },
];
