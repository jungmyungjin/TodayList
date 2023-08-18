# 📌 todayList

> Todo List 프로젝트. **'Today List'**
> - Front-end 부터 Back-end 까지 처음으로 혼자 만들어 본 프로젝트 입니다.
> - 기본적인 Todo List에 서브 투두리스트까지 구현하도록 만들었습니다.
> - 로그인을 하지 않은 상태로는 localStorage로 저장이 되어 가볍게 사용 가능하며,
>     사용자 로그인을 한 경우 데이터를 저장할 수 있도록 목표하였습니다.
> - 프론트엔드에서의 폴더구조는 파일 타입 기반의 폴더구조를 참고하였습니다.
> - OAuth 인증으로는 카카오 계정을 사용하여 로그인이 가능하도록 구현하였습니다.



## 👀 화면 구성

👉 [[View demo site]](https://github.duckkuri.com/TodayList)

### 메인 화면

![img](https://lh3.googleusercontent.com/gw_oT0NCXQLbf6XLz7by3_50OHm-KVWPO1SN60lY8E6IyQOk5tzjbdVfqwTsEWd-5nZbqnxRj6vBBzpa5lbdCgZw2hiHtOxE3lCG8I3x5muynZTwJh3801FU1aGekZbv4Fa6uQPJ8Qu1pmCyyHvAof5wTA=s2048)

### 로그인 화면

![img](https://lh4.googleusercontent.com/LdYBWteRHPP2GcpmhpV7BdzDzrylbfv8evPlMH3JVT1AAqU29ExuQs3KFK612EEciu8scPbKtyJuGR7arj9x7mnibEDJJfRikgfQKh_pg57F5W-R8fNMD8q5CpO540RPfx_VG0iD90yJYcSgxNhliEgXQw=s2048)



### 회원가입 화면

![img](https://lh5.googleusercontent.com/Da0I4c-FbgXxia9K-4-gV8dkxcPFvM-wjSBeKTLbAnNuY9ArQzCExK9JuRciyArUL1RfsLiRBTRNbPD8fG0sWMN0ULSpOB4o3HO2iUUuDgsNkgmVaELTMEnjk7z1Q3TKFAuPPcuQS56XmEvOXAf4l7geMQ=s2048)


## 기술 스택

### Front-end

`React.js` + `recoil` + `TypeScript` + `scss` + `react-route-dom(v6)`



### Back-end

`Express` + `node.js` + `sequelize` + `MariaDB`



### Auth

`cookie` + `jwt token`





## 폴더 구조

**Front-end**

```tree
src
├── App.tsx
├── assets
│   ├── fonts
│   │   ├── BagelFatOne-Regular.woff2
│   │   ├── NanumGothicCoding-Bold.woff2
│   │   └── NanumGothicCoding-Regular.woff2
│   ├── icons
│   │   ├── Add.svg
│   │   ├── Cancel.svg
│   │   ├── Check.svg
│   │   ├── Email.svg
│   │   ├── Key.svg
│   │   ├── LoginKeyboard.svg
│   │   ├── LoginUser.svg
│   │   ├── Logout.svg
│   │   ├── Pen.svg
│   │   ├── Save.svg
│   │   └── User.svg
│   └── images
│       └── kakao_login_large_wide.png
├── components
│   ├── Header
│   │   ├── Header.module.scss
│   │   └── Header.tsx
│   ├── Login
│   │   ├── Login.module.scss
│   │   └── Login.tsx
│   ├── NearbyDates
│   │   ├── NearDate.module.scss
│   │   ├── NearDate.tsx
│   │   ├── NearbyDates.module.scss
│   │   └── NearbyDates.tsx
│   ├── SignUp
│   │   ├── SignUp.module.scss
│   │   └── SignUp.tsx
│   └── TodoList
│       ├── Todo.module.scss
│       ├── Todo.tsx
│       ├── TodoList.module.scss
│       └── TodoList.tsx
├── index.tsx
├── pages
│   ├── LoginPage.tsx
│   ├── MainPage.tsx
│   └── SignUpPage.tsx
├── recoil
│   ├── atoms
│   │   ├── todoDataState.ts
│   │   ├── todoDateState.ts
│   │   └── userInfoState.ts
│   └── selectors
│       ├── todoDataSelector.ts
│       ├── todoDateSelector.ts
│       └── userInfoSelector.ts
├── routes
│   └── index.tsx
├── services
│   ├── apiService
│   │   └── apiService.ts
│   └── authService.ts
│       └── signUpService.ts
├── styles
│   ├── _global.scss
│   ├── _keyframes.scss
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── main.scss
├── types
│   ├── Auth.ts
│   └── TodoList.ts
├── typings.d.ts
└── utils
    └── validateCredentials.ts

```



**Back-end**

 ```
./src
├── api
│   ├── controllers
│   │   ├── authController.js
│   │   ├── index.js
│   │   ├── loginController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── routers
│   │   ├── healthCheck.js
│   │   ├── index.js
│   │   ├── taskRouter.js
│   │   └── userRouter.js
│   └── services
│       ├── authService.js
│       ├── kakaoService.js
│       ├── taskService.js
│       └── userService.js
├── db
│   ├── connection.js
│   └── sequelize.js
├── errors
│   ├── BadRequestError.js
│   ├── ConflictError.js
│   ├── ForbiddenError.js
│   ├── InternalServerError.js
│   ├── UnauthorizedError.js
│   └── index.js
├── middlewares
│   ├── errorHandler.js
│   ├── index.js
│   ├── validationLogin.js
│   ├── validationPassword.js
│   └── verifyToken.js
├── models
│   ├── index.js
│   ├── task.js
│   └── user.js
└── utils
    └── index.js
 ```






## ⚙️ 환경변수

**Front-end**

```
REACT_APP_API_ADDRESS=https://aws.duckkuri.com
REACT_APP_BASE_ROUTE=/TodayList
REACT_APP_KAKAO_CLIENT_ID=${REACT_APP_KAKAO_CLIENT_ID}
```

**Back-end**

```
TODAY_LIST_PORT=8000
TODAY_LIST_DB_HOST=localhost
TODAY_LIST_DB_NAME=todayList
TODAY_LIST_DB_USER=${TODAY_LIST_DB_USER}
TODAY_LIST_DB_ROOT_PASSWORD=${TODAY_LIST_DB_ROOT_PASSWORD}
TODAY_LIST_DB_PASSWORD=${TODAY_LIST_DB_PASSWORD}
JWT_SECRET=${JWT_SECRET}
TODAY_LIST_DOMAIN=.duckkuri.com
FRONTEND_ADDRESS=https://github.duckkuri.com
BACKEND_ADDRESS=https://aws.duckkuri.com
KAKAO_CLIENT_ID=${KAKAO_CLIENT_ID}
```



**Back-end**

```tree
./src
├── api
│   ├── controllers
│   │   ├── authController.js
│   │   ├── index.js
│   │   ├── loginController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── routers
│   │   ├── healthCheck.js
│   │   ├── index.js
│   │   ├── taskRouter.js
│   │   └── userRouter.js
│   └── services
│       ├── authService.js
│       ├── kakaoService.js
│       ├── taskService.js
│       └── userService.js
├── db
│   ├── connection.js
│   └── sequelize.js
├── errors
│   ├── BadRequestError.js
│   ├── ConflictError.js
│   ├── ForbiddenError.js
│   ├── InternalServerError.js
│   ├── UnauthorizedError.js
│   └── index.js
├── middlewares
│   ├── errorHandler.js
│   ├── index.js
│   ├── validationLogin.js
│   ├── validationPassword.js
│   └── verifyToken.js
├── models
│   ├── index.js
│   ├── task.js
│   └── user.js
└── utils
    └── index.js
```





## ⚙️ 환경변수

**front-end**

```
REACT_APP_API_ADDRESS=https://aws.duckkuri.com
REACT_APP_BASE_ROUTE=/TodayList
REACT_APP_KAKAO_CLIENT_ID=${REACT_APP_KAKAO_CLIENT_ID}
```

**back-end**

```
TODAY_LIST_PORT=8000
TODAY_LIST_DB_HOST=localhost
TODAY_LIST_DB_NAME=todayList
TODAY_LIST_DB_USER=${TODAY_LIST_DB_USER}
TODAY_LIST_DB_ROOT_PASSWORD=${TODAY_LIST_DB_ROOT_PASSWORD}
TODAY_LIST_DB_PASSWORD=${TODAY_LIST_DB_PASSWORD}
JWT_SECRET=${JWT_SECRET}
TODAY_LIST_DOMAIN=.duckkuri.com
FRONTEND_ADDRESS=https://github.duckkuri.com
BACKEND_ADDRESS=https://aws.duckkuri.com
KAKAO_CLIENT_ID=${KAKAO_CLIENT_ID}
```


## [Infra diagram](https://miro.com/app/board/uXjVMta_jdM=/?share_link_id=262712425503)

![img](https://lh6.googleusercontent.com/OAFf-FPCZ4VMxnpH2nu9sV4zgPRtzvFVsEnU2Jg5bsVOawtQjVgNFutsksqdsqQSpC0cGbzWJRoJxhM5HchqtU9s7gqQ9V3Z0yN9B_zHDnIA4ZQ0xGQZCi69AgbnN-WBXZQVrHGgEwKKR5qGnSjGmvUidQ=s2048)



### [DB diagram](https://dbdiagram.io/d/64db8f7d02bd1c4a5ecf86f6)

![img](https://lh4.googleusercontent.com/vbjKuxYimFgK0DfHYdrxa_efz8W1pnO7jGGdJLtq2BtU15IOnmuqkwHbAbC93gcZ0eVgIRnisoAo-94vBXiI7WiNrmdU51leIcIHt3RUM-sB-sZHFgGrDqy6VljqUs4d7C-TqUCl4UTErJQCfonVkjFtFw=s2048)

| 컬럼 목적  | 기타                                                         |
| ---------- | ------------------------------------------------------------ |
| id         | task 테이블의 primary key, 다른 테이블 간 관계를 위한 연결용 (현재 미사용) |
| todo_id    | 고유한 ID로 todo task를 식별                                 |
| parents_id | 자식 task인 경우 부모 task의 ID를 포함, 부모 task인 경우 null |
| contents   | task 내용                                                    |
| status     | task 완료 상태를 나타냄                                      |
| user_email | 어떤 사용자의 todo인지를 나타냄, user 테이블의 email 컬럼 참조 |
| date       | todo 리스트를 작성한 날짜                                    |





## [API 명세서](https://docs.google.com/spreadsheets/d/1nR4OSrRyuO6QJTr0doGw4Q_MhsuL8MoZoxfh-YZq9-c/edit?usp=sharing)

### auth API:

| Method | Path            | API 용도                            |
| ------ | --------------- | ----------------------------------- |
| POST   | /api/auth/login | 일반 회원 로그인                    |
| GET    | /api/auth/kakao | 카카오 회원 로그인                  |
| POST   | /api/auth/join  | 회원가입                            |
| GET    | /api/auth/user  | 사용자 정보                         |
| GET    | /api/auth/users | 전체 사용자 정보(개발용, 삭제 예정) |

### todo task API:

| Method | Path      | 할 일                           |
| ------ | --------- | ------------------------------- |
| GET    | /api/task | 사용자 todo list 조회           |
| POST   | /api/task | 사용자 todo list 수정/삭제/추가 |


## 🧙‍♀️ Used Tech

![Static Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)![Static Badge](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)![Static Badge](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)![Static Badge](https://img.shields.io/badge/mariadb-003545?style=for-the-badge&logo=mariadb&logoColor=white)![Static Badge](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)![Static Badge](https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)![Static Badge](https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)![Static Badge](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=white)![Static Badge](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)![Static Badge](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![Static Badge](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)
