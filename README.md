# Як запустити додаток

Щоб запустити додаток локально, виконайте наступні кроки:

## 1. Перейдіть у кореневу папку проєкту

Відкрийте термінал і перейдіть до папки проєкту за допомогою команди:

```
cd vue_test_task_grade
npm install
npm run dev
```

## Використаний API

Я використовував **MockAPI** для обробки даних. API забезпечує кінцеву точку, через яку здійснюються операції з
даними.

https://67957a8aaad755a134ec129e.mockapi.io/api/review/data

```
[
  {
    "city": "Malvinashire",
    "rating": "1",
    "review": "923",
    "id": "1"
  },
  {
    "city": "Conroyshire",
    "rating": "1",
    "review": "616",
    "id": "2"
  },
  {
    "city": "North Aubrey",
    "rating": "1",
    "review": "972",
    "id": "3"
  },
  {
    "city": "Huelsberg",
    "rating": "4",
    "review": "685",
    "id": "4"
  },
  {
    "city": "South Jovanyton",
    "rating": "2",
    "review": "285",
    "id": "5"
  }
]
```