import styles from './CreateGoalForm.module.css';
import {createGoal} from "@/app/lib/actions";

export function CreateGoalForm() {
  return (
    <form action={createGoal} className={styles.form}>
      <input type="text" name="goalName" required className={styles.nameInput}/>
      <button type="submit" className={styles.submitBtn}>Create</button>
    </form>
  )
}
