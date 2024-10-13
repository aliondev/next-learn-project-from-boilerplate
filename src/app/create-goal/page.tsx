import {CreateGoalForm} from "@/components/createGoalForm/CreateGoalForm";
import {Metadata} from "next";

export const metadata : Metadata = {
  title: 'Create'
}

export default function Page(){
  return <div><CreateGoalForm /></div>
}
