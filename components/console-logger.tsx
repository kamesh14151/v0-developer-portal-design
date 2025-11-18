'use client'

import { useEffect } from 'react'

export default function ConsoleLogger() {
  useEffect(() => {
    const styles = {
      title: 'font-size: 24px; font-weight: bold; color: #00ffff; text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);',
      rocket: 'font-size: 20px;',
      subtitle: 'font-size: 14px; color: #ff6b00; font-weight: bold;',
      feature: 'font-size: 12px; color: #00ff88;',
      info: 'font-size: 12px; color: #888;',
      warning: 'font-size: 13px; color: #ff0000; font-weight: bold; background: #fff3cd; padding: 4px 8px; border-radius: 4px;',
      link: 'font-size: 12px; color: #00aaff; text-decoration: underline; cursor: pointer;',
      gradient: 'font-size: 16px; font-weight: bold; background: linear-gradient(90deg, #00ffff, #ff00ff, #ffff00); -webkit-background-clip: text; -webkit-text-fill-color: transparent;',
      brand: 'font-size: 20px; font-weight: bold; color: #e81008; text-shadow: 0 0 10px rgba(232, 16, 8, 0.5);',
      badge: 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: bold;'
    };

    console.clear();
    
    console.log('%c🚀 Welcome to AJ STUDIOZ 🚀', styles.title);
    console.log('');
    console.log('%c╔══════════════════════════════════════════╗', styles.info);
    console.log('%c║    █████╗      ██╗                      ║', styles.brand);
    console.log('%c║   ██╔══██╗     ██║                      ║', styles.brand);
    console.log('%c║   ███████║     ██║                      ║', styles.brand);
    console.log('%c║   ██╔══██║██   ██║                      ║', styles.brand);
    console.log('%c║   ██║  ██║╚█████╔╝                      ║', styles.brand);
    console.log('%c║   ╚═╝  ╚═╝ ╚════╝                       ║', styles.brand);
    console.log('%c╚══════════════════════════════════════════╝', styles.info);
    console.log('');
    console.log('%c⚡ Advanced AI assistant powered by Nexariq AI', styles.subtitle);
    console.log('%c🎨 Supports text generation, reasoning, and deep research', styles.feature);
    console.log('%c🌐 Tailored for both English and Chinese users', styles.feature);
    console.log('%c💡 Free and open-source ChatGPT alternative', styles.feature);
    console.log('');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
    console.log('%cPowered by ❤️  and Lots of ☕', styles.info);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
    console.log('');
    console.log('%c⚠️  JOIN US! We are hiring talented people! 🔥', styles.warning);
    console.log('%c📋 View Jobs: https://github.com/kamesh14151/v0-developer-portal-design', styles.link);
    console.log('');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
    console.log('%c🛠️  Tech Stack', styles.subtitle);
    console.log('%c   • Next.js 15 + React 18 + TypeScript', styles.info);
    console.log('%c   • Tailwind CSS + Advanced Animations', styles.info);
    console.log('%c   • Vercel Analytics', styles.info);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
    console.log('');
    console.log('%c🤖 Nexariq AI Models', styles.gradient);
    console.log('%c   • Lynxa-mini  (Ultra-fast)', styles.feature);
    console.log('%c   • AJ          (Balanced)', styles.feature);
    console.log('%c   • Hanuman S1  (Enterprise)', styles.feature);
    console.log('');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
    console.log('%c💼 Explore our services:', styles.subtitle);
    console.log('%c   https://v0-developer-portal-design.vercel.app', styles.link);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
    console.log('');
    console.log('%cHappy coding! 🎉', styles.feature);
    console.log('');
  }, [])

  return null
}
