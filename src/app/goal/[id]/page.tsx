import {fetchGoal} from "@/app/lib/actions";

export default async function Page(props: {params:{ id: string}}) {
  const { params } = props;
  const goal = await fetchGoal(params.id);

  return <div>Goal with id: {params.id}</div>
}
