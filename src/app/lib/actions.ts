'use server';
import {redirect} from 'next/navigation';
import {sql} from '@vercel/postgres';

export async function createGoal(formData: FormData) {
  console.log('Receiving: ', formData.get('goalName'));
  await sql`
      INSERT INTO goals (goal)
      VALUES (formData.get('goalName'))
  `
  redirect('/goals');
}
