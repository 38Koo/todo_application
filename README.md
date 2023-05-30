### 開発の流れ
- git clone
- docker compose up

### seedデータ投入
```
npx prisma db seed
```

### GraphQL
- BEで一通り準備したらapp.module.tsで〇〇Moduleをimportする
- その後、BEを再度立ち上げ直す
- FEでnpm run generate