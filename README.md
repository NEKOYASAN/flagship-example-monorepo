# Flagship Example Monorepo

Flagship example for zenn article

https://zenn.dev/nekoya3/articles/cloudflare-flagship-private-beta

## How to

Need vite+

set env `VITE_FLAGSHIP_AUTH_TOKEN` for cloudflare account token and `VITE_FLAGSHIP_ACCOUNT_ID` for cloudflare account id

```
vp install
vp run dev
```

### client example

Access to http://localhost:3000/user/:userId

if flag is enabled, visible to user about page link
if flag is disabled, not visible to user about page link

### server example

Access to http://localhost:3000/api/user/:userId/about
if flag is enabled, can access to /api/user/:userId/about
if flag is disabled, not visible and not accessible (404)
