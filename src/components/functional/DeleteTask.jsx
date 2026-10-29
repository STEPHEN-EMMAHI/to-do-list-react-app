import Delete from "./reusable/Delete";

export default function DeleteTask() {
  return (
    <div>
      <Delete
        color="text-white"
        hoverColor="hover:text-red-500"
        bgColor="bg-red-500"
        borderRound="rounded-sm"
        size="text-[22px]"
        padding="p-1"
      />
    </div>
  );
}
