'use server';
import {redirect} from 'next/navigation';
import {sql} from '@vercel/postgres';
import {v4} from 'uuid';
import {revalidatePath} from "next/cache";

export async function createGoal(formData: FormData) {
  const name = formData.get('goalName');
  const id = v4();

  await sql`
      INSERT INTO goalsfoo3 (name, id)
      VALUES (${name}, ${id})
  `

  revalidatePath('/goals');
  redirect('/goals');
}

export async function fetchGoals() {
  const queryResult = await sql`
      SELECT name, id
      FROM goalsfoo3
  `;

  return queryResult.rows;
}

export async function fetchGoal(id: string) {
  const queryResult = await sql`
      SELECT name, id
      FROM goalsfoo3
      WHERE id = ${id}
  `;

  return queryResult.rows;
}

export async function deleteGoal(formData: FormData) {
  const id = formData.get('id');

  await sql`
      DELETE
      FROM goalsfoo3
      WHERE goalsfoo3.id = ${id}
  `;
  revalidatePath('/goals');
  redirect('/goals');
}
