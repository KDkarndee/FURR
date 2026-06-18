# Deployment to Vercel - Setup Guide

## Issue: pnpm patches error

If you encounter this error when deploying to Vercel:
```
pnpm: ENOENT: no such file or directory, open '/vercel/path0/patches/wouter@3.7.1.patch'
```

This is because the `patches/` directory needs to be included in your deployment.

## Solution

### Option 1: Ensure patches directory is included (Recommended)

Make sure the `patches/` directory is committed to your repository:

```bash
git add patches/
git commit -m "Include pnpm patches"
git push
```

This is already included in the download package.

### Option 2: Disable patches for Vercel deployment

If you don't need the wouter patch, you can remove it from `package.json`:

1. Remove the `pnpm.patchedDependencies` section from `package.json`:

```json
{
  "pnpm": {
    // Remove this section:
    // "patchedDependencies": {
    //   "wouter@3.7.1": "patches/wouter@3.7.1.patch"
    // },
    "overrides": {
      "tailwindcss>nanoid": "3.3.7"
    }
  }
}
```

2. Delete the `patches/` directory:

```bash
rm -rf patches/
```

3. Commit and push:

```bash
git add package.json
git rm -r patches/
git commit -m "Remove pnpm patches for Vercel compatibility"
git push
```

## Vercel Environment Variables

If you need to set environment variables in Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add any required variables (if using backend API)

## Build Command

Make sure your Vercel build settings are:

- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

## Recommended: Use Vercel's Node.js Runtime

For best compatibility, ensure you're using Node.js 18+ in Vercel:

1. Create a `vercel.json` file in the root:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install"
}
```

## Testing Locally

Before deploying to Vercel, test the build locally:

```bash
pnpm install
pnpm build
pnpm preview
```

If the build succeeds locally, it should work on Vercel.

## Troubleshooting

### If you still get patch errors:

1. Delete `pnpm-lock.yaml` and reinstall:
```bash
rm pnpm-lock.yaml
pnpm install
```

2. Make sure `patches/` directory exists and is tracked by git:
```bash
git status patches/
```

3. Force push to Vercel:
```bash
git push --force
```

## Support

For more information:
- [Vercel Documentation](https://vercel.com/docs)
- [pnpm Documentation](https://pnpm.io/)
