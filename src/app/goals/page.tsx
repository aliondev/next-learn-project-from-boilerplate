import styles from './styles.module.css'
import { fetchGoals } from '@/app/lib/actions';
import GoalsItem from "@/app/goals/goalsItem";
import {Metadata} from "next";

export const metadata : Metadata = {
  title: 'List'
}

export default async function Page() {
  const goals = await fetchGoals();
  return (<div className={styles.container}>
    Goals:
    {goals.map(goal =>
      <GoalsItem name={goal.name} id={goal.id} key={goal.id} />
    )}
  </div>);
}
