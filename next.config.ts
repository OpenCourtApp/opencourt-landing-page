import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Ativa a exportação estática (gera a pasta 'out')
  images: {
    unoptimized: true, // Obrigatório: o GitHub Pages não suporta a otimização de imagens padrão do Next
  },
  basePath: "/opencourt-landing-page",
};

export default nextConfig;
