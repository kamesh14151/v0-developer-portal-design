# PowerShell Script to Capture Website Screenshots
# Requires Chrome browser to be installed

Write-Host "Screenshot Capture Script" -ForegroundColor Cyan
Write-Host "=========================" -ForegroundColor Cyan
Write-Host ""

# Check if Chrome is installed
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chromePath)) {
    $chromePath = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
}

if (-not (Test-Path $chromePath)) {
    Write-Host "Chrome not found. Please install Google Chrome." -ForegroundColor Red
    exit 1
}

# Create screenshots directory if it doesn't exist
$publicDir = Join-Path $PSScriptRoot "..\public"
if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

# Project URLs
$projects = @{
    "https://mvk-transports.vercel.app/" = "project-mvk.jpg"
    "https://cgpa-calc-aj.vercel.app/" = "project-cgpa.jpg"
    "https://www.meow.ajstudioz.co.in/" = "project-meow.jpg"
    "https://chat.tm.tomoacademy.site" = "project-tomo-chat.jpg"
    "https://dev.tomoacademy.site/" = "project-tomo-academy.jpg"
    "https://v0-aj-studioz-curl-tester-edmp.vercel.app/" = "project-curl.jpg"
    "https://tomo-forge-hub.vercel.app/" = "project-forge.jpg"
    "https://ib-online-resource-hub.vercel.app/" = "project-ib.jpg"
}

Write-Host "Instructions:" -ForegroundColor Yellow
Write-Host "1. This script will open each website in Chrome" -ForegroundColor White
Write-Host "2. Take a screenshot manually (Press F11 for fullscreen, then Windows+Shift+S)" -ForegroundColor White
Write-Host "3. Save each screenshot with the provided filename in the public folder" -ForegroundColor White
Write-Host ""

$index = 1
foreach ($url in $projects.Keys) {
    $filename = $projects[$url]
    Write-Host "[$index/$($projects.Count)] Opening: $url" -ForegroundColor Green
    Write-Host "   Save as: $publicDir\$filename" -ForegroundColor Cyan
    
    # Open in Chrome
    Start-Process $chromePath -ArgumentList "--new-window", "--start-fullscreen", $url
    
    Write-Host "   Press any key when you've captured the screenshot..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    
    # Close Chrome window
    Stop-Process -Name "chrome" -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
    
    $index++
}

Write-Host ""
Write-Host "✓ Screenshot capture guide complete!" -ForegroundColor Green
