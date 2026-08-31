import type { NextConfig } from "next";

// Verifica se o build está rodando dentro do ambiente do GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // O basePath só será aplicado no GitHub Pages! Na Vercel ele fica vazio/falso.
  basePath: isGithubActions ? "/opencourt-landing-page" : undefined,
};

export default nextConfig;
