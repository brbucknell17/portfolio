# Portfolio Starter (Next.js + TypeScript + Tailwind)

## Quick start (Windows)
1. Unzip this folder into `C:\Users\<YOU>\Desktop\Portfolio` (so the `package.json` is directly inside `Portfolio`).
2. Open **Command Prompt (cmd)** and run:
   ```bat
   cd %USERPROFILE%\Desktop\Portfolio
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

If PowerShell blocks npm/npx, use **Command Prompt** or run in PowerShell once:
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

## What’s included
- Next.js App Router + TS
- Tailwind configured
- Dark glass sidebar layout in `src/app/layout.tsx`
- Landing page with glass panels and faux-3D hero in `src/app/page.tsx`

## Customize
- Change your name/role in `layout.tsx`
- Edit projects array in `page.tsx`
- Global styles & utilities in `globals.css`
