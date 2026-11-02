export default function HandleBackwards({ children, onCancel }) {
  return (
    <button className="mb-4 lg:cursor-pointer" type="button" onClick={onCancel}>
      {children}
    </button>
  );
}
