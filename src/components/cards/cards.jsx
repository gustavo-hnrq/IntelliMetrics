export function CardGestor({ numero, texto, svg }) {
  return (
    <div className="w-full">
      <div className="p-3 bg-white border border-slate-200 items-center rounded-lg h-full">
        <img className="p-2 border shadow-sm border-slate-200 rounded-md" src={svg} alt="icon" />
        <p className="text-gray-500">{texto}</p>
        <h1 className="text-3xl font-bold">{numero}</h1>
      </div>
    </div>
  );
}
