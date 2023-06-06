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

### migration
- schema.prismaファイルに変更を加えたら以下のコマンドを実行してマイグレーションファイルを作成する。
  - コマンド実行時に"Enter a name for the new migration:"と表示されるので、任意の文字を入力すると、それがマイグレーションのファイル名となる。
```
npx prisma migrate dev

// 下記コマンドでいくつのマイグレーションファイルが実行されたかを確認できる
npx prisma migrate status
```
