
# pnpm 命令
```bash

# 全局依赖
pnpm install typescript -D -W


# 局部依赖
pnpm install vue -r --filter @panda/web


# link 机制 (@panda/tools就会被@panda/server和@panda/web依赖)
pnpm i @panda/tools -r --filter @panda/server @panda/web

# 发布单个包
pnpm publish --filter @test/const

```