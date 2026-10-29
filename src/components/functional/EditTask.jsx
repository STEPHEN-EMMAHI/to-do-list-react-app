import Edit from "../reusable/Edit";

export default function EditTask() {
  return (
    <div>
      <Edit
        color="text-white"
        hoverColor="hover:text-blue-500"
        bgColor="bg-blue-500"
        borderRound="rounded-sm"
        size="text-[22px]"
        padding="p-1"
      />
    </div>
  );
}
