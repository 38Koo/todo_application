### 開発の流れ

- git clone
- docker compose up

### seed データ投入（migration を先に実行）

```
npx prisma db seed
```

### GraphQL

- BE で一通り準備したら app.module.ts で〇〇 Module を import する
- その後、BE を再度立ち上げ直す
- FE で npm run generate

### migration

- schema.prisma ファイルに変更を加えたら以下のコマンドを実行してマイグレーションファイルを作成する。
  - コマンド実行時に"Enter a name for the new migration:"と表示されるので、任意の文字を入力すると、それがマイグレーションのファイル名となる。

```
npx prisma migrate dev

// 下記コマンドでいくつのマイグレーションファイルが実行されたかを確認できる
npx prisma migrate status
```
