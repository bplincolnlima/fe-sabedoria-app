export function TestemunhosPreview() {
  const testemunhos = [
    { nome: 'Samara', categoria: 'Bênção Financeira', image: 'https://images.unsplash.com/photo-1556159992-e189f8e50104?w=400&h=400&fit=crop' },
    { nome: 'Márcia', categoria: 'Milagre Financeiro', image: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?w=400&h=400&fit=crop' },
    { nome: 'Juliana', categoria: 'Portas Abertas', image: 'https://images.unsplash.com/photo-1758880788331-216a4defce4b?w=400&h=400&fit=crop' },
    { nome: 'Elisangela', categoria: 'Vitória', image: 'https://images.unsplash.com/photo-1642654877094-e8db202268de?w=400&h=400&fit=crop' },
    { nome: 'Josefa', categoria: 'Cura', image: 'https://images.unsplash.com/photo-1575516662637-99214ea59f23?w=400&h=400&fit=crop' },
    { nome: 'Débora', categoria: 'Bênção', image: 'https://images.unsplash.com/photo-1556159992-e189f8e50104?w=400&h=400&fit=crop' }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-3">
        {testemunhos.map((testemunho, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl z-10" />
            <img
              src={testemunho.image}
              alt={`Testemunho de ${testemunho.nome}`}
              className="w-full h-28 object-cover rounded-2xl shadow-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 right-2 z-20 text-white">
              <p className="text-sm font-black drop-shadow-lg">{testemunho.nome}</p>
              <p className="text-xs font-bold text-amber-300 drop-shadow-lg">{testemunho.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
