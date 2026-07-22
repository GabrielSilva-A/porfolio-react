import portfolioData from '../portfolioData';

const isGitHubPages =
  typeof window !== 'undefined' && window.location.hostname.endsWith('github.io');

export async function getPortfolioData() {
  if (isGitHubPages) {
    return portfolioData;
  }

  try {
    const res = await fetch('/api/portfolio');
    if (!res.ok) {
      throw new Error(`Request failed with ${res.status}`);
    }
    return await res.json();
  } catch (_error) {
    return portfolioData;
  }
}

export async function submitContactForm(payload) {
  if (isGitHubPages) {
    return {
      success: true,
      message: 'Gracias por tu mensaje. En esta versión estática de GitHub Pages el envío está deshabilitado.'
    };
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return await res.json();
  } catch (_error) {
    return {
      success: false,
      message: 'No se pudo enviar el mensaje en este momento.'
    };
  }
}
