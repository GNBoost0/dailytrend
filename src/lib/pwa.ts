// Événement beforeinstallprompt partagé entre composants
// Chrome ne déclenche cet événement qu'une seule fois, il faut le capturer globalement

type Listener = (prompt: any) => void;

let deferredPrompt: any = null;
const listeners: Listener[] = [];

export function getDeferredPrompt() {
  return deferredPrompt;
}

export function consumeDeferredPrompt() {
  const prompt = deferredPrompt;
  deferredPrompt = null;
  return prompt;
}

export function onPromptAvailable(fn: Listener) {
  listeners.push(fn);
  if (deferredPrompt) fn(deferredPrompt);
  return () => {
    const idx = listeners.indexOf(fn);
    if (idx >= 0) listeners.splice(idx, 1);
  };
}

// Capturer l'événement immédiatement
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    deferredPrompt = e;
    listeners.forEach(fn => fn(e));
  });
}
