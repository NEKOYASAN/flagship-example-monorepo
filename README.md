# Flagship Example Monorepo

Flagship example for zenn article

https://zenn.dev/nekoya3/articles/cloudflare-flagship-private-beta

## CORS Error reproduce

1. access to `https://flagship-example-monorepo.nekoyasan.workers.dev/user/Nekoya3_`
2. see dev tools network tab
3. can reproduce CORS error

## How to

Need vite+

set env `VITE_FLAGSHIP_AUTH_TOKEN` for cloudflare account token and `VITE_FLAGSHIP_ACCOUNT_ID` for cloudflare account id

```
vp install
vp run dev
```

### client example

#### remote example

https://flagship-example-monorepo.nekoyasan.workers.dev/user/Nekoya3_

> [!NOTE]
> The example is not working correctly.
> Please check Cloudflare's Discord for information regarding CORS errors.

#### local example

Access to http://localhost:3000/user/:userId

if flag is enabled, visible to user about page link
if flag is disabled, not visible to user about page link

> [!NOTE]
> The example is not working correctly.
> Please check Cloudflare's Discord for information regarding CORS errors.

### server example

#### remote example

https://flagship-example-monorepo.nekoyasan.workers.dev/api/user/Nekoya3_/about is true = response 200
https://flagship-example-monorepo.nekoyasan.workers.dev/api/user/example/about is false = response 404

#### local example

Access to http://localhost:3000/api/user/:userId/about
if flag is enabled, can access to /api/user/:userId/about
if flag is disabled, not visible and not accessible (404)
