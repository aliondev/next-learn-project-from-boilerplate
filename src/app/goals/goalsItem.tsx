import Link from "next/link";
import {deleteGoal} from "@/app/lib/actions";

export default function GoalsItem(props: { name: string, id: string}) {
  return (<li>
    <Link href={`/goal/${props.id}`}>{props.name}</Link>
    <form action={deleteGoal}>
      <input hidden name="id" value={props.id} readonly/>
      <button type="submit">Delete</button>
    </form>
  </li>)
}
