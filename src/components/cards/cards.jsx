export function CardGestor({ numero, texto, svg }) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-1 p-4 bg-white border border-slate-200 rounded-md h-full">
        <img className="p-2 border shadow-sm h-10 w-10 border-slate-200 rounded-md" src={svg} alt="icon" />
        <p className="text-gray-500">{texto}</p>
        <h1 className="text-3xl font-bold">{numero}</h1>
      </div>
    </div>
  );
}
