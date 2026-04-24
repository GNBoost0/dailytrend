'use client';

export function AdBanner() {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="w-full max-w-[728px] h-[90px] bg-surface-800/30 border border-dashed border-white/10 rounded-lg flex items-center justify-center text-xs text-gray-600">
        Espace publicitaire — 728×90
      </div>
    </div>
  );
}

export function AdSidebar() {
  return (
    <div className="w-full max-w-[300px] h-[250px] bg-surface-800/30 border border-dashed border-white/10 rounded-lg flex items-center justify-center text-xs text-gray-600 mx-auto">
      Espace publicitaire — 300×250
    </div>
  );
}

export function AdInArticle() {
  return (
    <div className="w-full h-[100px] bg-surface-800/30 border border-dashed border-white/10 rounded-lg flex items-center justify-center text-xs text-gray-600 my-8">
      Espace publicitaire — In-article
    </div>
  );
}
