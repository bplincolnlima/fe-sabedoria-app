import { useState } from 'react';

export function DizimosCard() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const pixKeys = [
    { type: 'CNPJ', value: '46.600.319/0001-59', copyValue: '46600319000159' },
    { type: 'Celular', value: '(67) 99205-5727', copyValue: '67992055727' }
  ];

  const handleCopy = async (key: string, copyValue: string) => {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch (err) {
      alert(`Chave PIX ${key}: ${copyValue}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-800">
      <div className="p-8 text-white relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-600/5"></div>

        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-5xl">💝</span>
            <div>
              <h3 className="text-3xl font-black text-white">Dízimos e Ofertas</h3>
              <p className="text-lg text-gray-400 font-medium">Contribua com a obra</p>
            </div>
          </div>

          <div className="bg-amber-500/10 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-amber-600/20">
            <p className="text-base italic leading-relaxed text-gray-300">
              "Deus ama ao que dá com alegria."
            </p>
            <p className="text-sm text-right mt-2 font-bold text-amber-400">2 Coríntios 9:7</p>
          </div>

          <div className="space-y-4">
            <p className="font-black text-lg mb-3 text-amber-400">CHAVES PIX</p>
            
            {pixKeys.map((pix) => (
              <div key={pix.type} className="bg-black border border-gray-800 rounded-2xl p-5 hover:border-amber-500/50 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">{pix.type}</span>
                  <button
                    onClick={() => handleCopy(pix.type, pix.copyValue)}
                    className={`px-4 py-2 rounded-xl font-black text-sm transition-all shadow-lg ${
                      copiedKey === pix.type
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600 hover:scale-105'
                    }`}
                  >
                    {copiedKey === pix.type ? '✓ COPIADO' : 'COPIAR'}
                  </button>
                </div>
                <p className="text-2xl font-black text-amber-400">{pix.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-500/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-amber-600/20">
            <p className="text-sm font-bold text-amber-400">
              Sua oferta abençoa vidas e expande o Reino! 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
