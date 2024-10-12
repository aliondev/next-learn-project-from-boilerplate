export default function Page(props: {params:{ id: string}}) {
  const { params } = props;
  return <div>Goal with id: {params.id}</div>
}
