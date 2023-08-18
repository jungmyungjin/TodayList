# 📌 todayList

> Todo List 프로젝트. **'Today List'**
> - front-end, back-end 구축 및 구현
> - OAuth 인증 카카오 로그인 지원



### 👀 **TodayList** 

👉 [click](https://github.duckkuri.com)
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





## 


## [Infra diagram](https://miro.com/app/board/uXjVMta_jdM=/?share_link_id=262712425503)

![img](https://lh6.googleusercontent.com/zR56lTdT-7jCZClpEqwG4gVHF0WeVicqYZxlti6ubXPezPSnWZikRnTyVe_5BL0YfunPtGkHthqwMobzk1rewoLZFusQTfcJ2ky8isvoEGEXkhgu3NoDn_vlC47CN5YWiZvSlL9FWOmExiyABfDcsuLmQA=s2048)



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
