"""
Screenshot Capture Script for Project Portfolio
Captures screenshots from live websites using Playwright
"""

import asyncio
from playwright.async_api import async_playwright
import os

# Project URLs and their corresponding output filenames
PROJECTS = {
    'https://mvk-transports.vercel.app/': 'project-mvk.jpg',
    'https://cgpa-calc-aj.vercel.app/': 'project-cgpa.jpg',
    'https://www.meow.ajstudioz.co.in/': 'project-meow.jpg',
    'https://chat.tm.tomoacademy.site': 'project-tomo-chat.jpg',
    'https://dev.tomoacademy.site/': 'project-tomo-academy.jpg',
    'https://v0-aj-studioz-curl-tester-edmp.vercel.app/': 'project-curl.jpg',
    'https://tomo-forge-hub.vercel.app/': 'project-forge.jpg',
    'https://ib-online-resource-hub.vercel.app/': 'project-ib.jpg',
}

async def capture_screenshot(url, filename):
    """Capture a screenshot from a URL"""
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1920, 'height': 1080})
        
        try:
            print(f"Capturing {url}...")
            await page.goto(url, wait_until='networkidle', timeout=30000)
            
            # Wait a bit for animations and content to load
            await page.wait_for_timeout(3000)
            
            # Take screenshot
            output_path = os.path.join('..', 'public', filename)
            await page.screenshot(path=output_path, quality=85, type='jpeg')
            print(f"✓ Saved to {output_path}")
            
        except Exception as e:
            print(f"✗ Error capturing {url}: {str(e)}")
        
        finally:
            await browser.close()

async def main():
    """Capture all screenshots"""
    print("Starting screenshot capture...\n")
    
    for url, filename in PROJECTS.items():
        await capture_screenshot(url, filename)
        await asyncio.sleep(2)  # Small delay between captures
    
    print("\n✓ Screenshot capture complete!")

if __name__ == "__main__":
    asyncio.run(main())
