export const consoleArt = () => {
  const styles = {
    title: 'font-size: 24px; font-weight: bold; color: #00ffff; text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);',
    rocket: 'font-size: 20px;',
    subtitle: 'font-size: 14px; color: #ff6b00; font-weight: bold;',
    feature: 'font-size: 12px; color: #00ff88;',
    info: 'font-size: 12px; color: #888;',
    warning: 'font-size: 13px; color: #ff0000; font-weight: bold;',
    link: 'font-size: 12px; color: #00aaff; text-decoration: underline;',
    gradient: 'font-size: 16px; font-weight: bold; background: linear-gradient(90deg, #00ffff, #ff00ff, #ffff00); -webkit-background-clip: text; color: transparent;',
    brand: 'font-size: 18px; font-weight: bold; color: #ff0000; text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);'
  };

  console.clear();
  
  console.log('%c🚀 Welcome to AJ STUDIOZ 🚀', styles.title);
  console.log('');
  console.log('%c    ▄▀█   ░░█', styles.brand);
  console.log('%c    █▀█   █▄█', styles.brand);
  console.log('');
  console.log('%c⚡ Advanced AI assistant powered by Nexariq', styles.subtitle);
  console.log('%c🎯 Supports text generation, reasoning, and deep research', styles.feature);
  console.log('%c🌐 Tailored for both English and Chinese users', styles.feature);
  console.log('%c💡 Free and open-source ChatGPT alternative', styles.feature);
  console.log('');
  console.log('%cPowered by ❤️ and Lots of ☕', styles.info);
  console.log('');
  console.log('%c⚠️ Join us! We are hiring talented people!', styles.warning);
  console.log('%c📋 View Jobs: https://github.com/kamesh14151/v0-developer-portal-design', styles.link);
  console.log('');
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
  console.log('%cBuilt with Next.js 15 | React 18 | TypeScript', styles.info);
  console.log('%cNexariq AI Models: Lynxa-mini | AJ | Hanuman S1', styles.gradient);
  console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.info);
  console.log('');
  console.log('%c💼 Explore our services at: https://v0-developer-portal-design.vercel.app', styles.link);
  console.log('');
};
