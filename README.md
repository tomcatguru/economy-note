# 지호의 경제노트

경제를 처음 배우는 사람을 위한 한국어 웹사이트 데모입니다. HTML, CSS, JavaScript만 사용하며 패키지 설치나 빌드가 필요하지 않습니다.

## 이 프로젝트의 GitHub 주소

- 저장소: https://github.com/tomcatguru/economy-note
- GitHub Pages 주소: https://tomcatguru.github.io/economy-note/
- Pages 설정: 저장소의 `Settings → Pages`에서 `Deploy from a branch`, `main`, `/ (root)`를 선택하고 저장합니다. 최초 활성화가 되어야 위 Pages 주소가 열립니다.
- 이후 수정: Pages 활성화 후 이 폴더에서 변경한 파일을 커밋하고 `git push`하면 GitHub Pages가 자동으로 다시 배포합니다. 로컬 파일을 저장하는 것만으로는 업로드되지 않습니다.

아래의 신규 저장소 생성 안내는 다른 계정이나 새 프로젝트에 같은 사이트를 만들 때 참고하세요.

## 먼저 이해하기

- **Git**: 파일 변경 기록을 관리하는 도구입니다.
- **GitHub**: 사이트 파일과 변경 기록을 저장하는 온라인 공간입니다. 이 공간을 저장소(repository)라고 합니다.
- **GitHub Pages**: 저장소의 HTML, CSS, JavaScript 파일을 웹사이트로 공개하는 기능입니다.
- **배포**: 내 컴퓨터의 파일을 다른 사람이 웹 주소로 볼 수 있게 공개하는 과정입니다.

이 데모의 흐름은 `파일 수정 → GitHub에 업로드·저장(commit) → Pages가 게시 → 방문자가 접속`입니다.

GitHub Pages는 정적 사이트 호스팅입니다. 설명 글, 이미지, 브라우저에서 계산하는 그래프와 퀴즈에 적합합니다. 서버에서 실행하는 Python/PHP나 회원 정보 데이터베이스가 필요하면 별도 서비스를 연결해야 합니다. 현재 데모에는 그런 서비스가 필요하지 않습니다.

## 포함된 기능

- 물가, 금리, 환율, 수요·공급, GDP, 기회비용 노트 6개
- 주제 필터와 상세 읽기 창
- 물가상승률·기간·현재 금액을 조절하는 가격 계산기 및 그래프
- 설명과 점수를 제공하는 3문제 퀴즈
- 휴대폰 화면 대응, 키보드 조작, 모션 감소 설정 대응
- 외부 폰트나 JavaScript 라이브러리에 의존하지 않는 구성
- 상단의 한국어 / English 선택으로 전체 화면, 경제노트, 계산기, 퀴즈 언어 전환

첫 방문은 영어로 시작하며 선택한 언어는 같은 브라우저에 저장됩니다. 이전에 한국어를 선택했다면 다음 방문에도 한국어로 열립니다. 브라우저가 저장 기능을 제한하면 영어로 시작하고 언어 전환은 가능하지만 다음 방문까지 기억하지 못할 수 있습니다. 언어를 바꿔도 현재 계산값, 주제 필터, 퀴즈 진행 상태는 유지됩니다. 영어에서도 통화는 한국 원화(KRW)이며 환전 기능은 아닙니다.

번역 수정: 정적 한국어 문구는 `index.html`, 한국어 노트·퀴즈와 동적 안내는 `app.js`, 영어 정적 문구·노트·퀴즈는 `i18n.js`에서 관리합니다. HTML 구조를 변경할 때는 `i18n.js`의 선택자도 함께 확인하세요. 배포 시 `i18n.js`도 반드시 함께 업로드해야 합니다.

가격과 금리는 학습용 가정입니다. 실제 통계나 전망을 제공하는 사이트가 아닙니다. 퀴즈 결과는 페이지를 새로고침하면 초기화됩니다.

## 1. 내 컴퓨터에서 확인

가장 쉬운 방법은 **`index.html`을 Chrome 또는 Safari로 여는 것**입니다. 별도 프로그램 설치 없이 주요 기능을 사용할 수 있습니다.

Python 3가 설치되어 있다면 이 폴더에서 다음 명령으로 웹 서버를 열 수도 있습니다.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

브라우저에서 http://127.0.0.1:8000 을 여세요. 서버를 종료하려면 실행한 터미널에서 `Control + C`를 누르세요. 이 주소는 내 컴퓨터용이며 외부 공개 주소가 아닙니다.

## 2. 파일 역할

| 파일 | 역할 | 수정할 때 |
| --- | --- | --- |
| `index.html` | 제목, 메뉴, 본문 구조, 카드의 짧은 소개 | 사이트 이름·메인 문구 변경 |
| `styles.css` | 색, 글자, 배치, 휴대폰 화면 | 디자인 변경 |
| `app.js` | 노트 상세 내용, 필터, 계산기, 퀴즈 | 학습 내용·퀴즈 변경 |
| `i18n.js` | 영어 화면 문구, 노트, 퀴즈 | 영어 번역 변경 |
| `favicon.svg` | 브라우저 탭 아이콘 | 로고 변경 |
| `.nojekyll` | Jekyll 처리를 생략하도록 표시 | 그대로 유지 |
| `.gitignore` | 불필요한 로컬 파일을 Git에서 제외 | 그대로 유지 |
| `README.md` | 이 사용·배포 안내서 | 운영 기록 추가 |

## 3. GitHub Pages에 처음 배포하기 — 웹 브라우저만 사용하는 방법

### A. 저장소 만들기

1. GitHub 계정으로 로그인합니다. 계정이 없다면 https://github.com 에서 가입합니다.
2. 우측 상단 `+` → **New repository**를 선택합니다.
3. **Repository name**에 `economy-note`를 입력합니다. 다른 이름도 가능하지만 아래 주소의 저장소 이름도 함께 바뀝니다.
4. **Public**을 선택합니다. GitHub Free에서 Pages를 이용하려면 공개 저장소가 필요합니다.
5. **Add README**를 켭니다. 최초 파일이 있어야 다음 단계의 업로드 메뉴를 쉽게 찾을 수 있습니다.
6. **Create repository**를 누릅니다.

공개 저장소에는 업로드한 소스 코드도 공개됩니다. 사이트에 필요하지 않은 개인 문서나 비밀번호·API 키는 올리지 마세요.

### B. 데모 파일 업로드

1. 생성된 저장소의 **Code** 화면에서 **Add file → Upload files**를 선택합니다.
2. 이 폴더의 `index.html`, `styles.css`, `app.js`, `i18n.js`, `favicon.svg` 파일을 업로드 영역에 끌어놓습니다.
3. 폴더 자체 안에 또 폴더가 생기지 않도록, **저장소 최상위에 `index.html`이 보이는 구조**로 올립니다.
4. **Commit changes** 영역에 `Add economy learning demo`처럼 변경 내용을 적습니다.
5. `main` 브랜치에 직접 저장하는 옵션을 선택하고 **Commit changes**를 누릅니다.
6. **Add file → Create new file**로 `.nojekyll`을 만듭니다. 내용이 필요하면 빈 줄 하나만 넣고 저장합니다. 이 파일은 Mac Finder에서 숨김 파일로 보일 수 있어 웹에서 만드는 방법이 편합니다.
7. 필요하면 이 `README.md`도 올려 기존 README를 교체하세요. 안내서는 사이트 실행에 필수는 아닙니다.

다음처럼 되어 있으면 됩니다.

```text
economy-note/
├── index.html
├── styles.css
├── app.js
├── i18n.js
├── favicon.svg
├── .nojekyll
└── README.md
```

### C. Pages 켜기

1. **해당 저장소**의 **Settings** 탭을 클릭합니다. 개인 계정 설정이 아닙니다.
2. 왼쪽 메뉴의 **Pages**를 클릭합니다.
3. **Build and deployment → Source**를 **Deploy from a branch**로 설정합니다.
4. **Branch**에서 **main**, 폴더에서 **/ (root)**를 선택합니다.
5. **Save**를 클릭합니다.
6. **Actions** 탭에서 Pages 배포 작업이 성공했는지 확인합니다. 보통 `pages build and deployment`처럼 표시됩니다.
7. 다시 **Settings → Pages**에서 표시되는 주소 또는 **Visit site**를 클릭합니다. 공식 문서에 따르면 변경 반영에는 최대 10분 정도 걸릴 수 있습니다.

계정명이 `YOUR-USERNAME`이고 저장소명이 `economy-note`라면 예상 주소는 다음 형식입니다. 실제 주소는 Pages 화면에서 확인하세요.

```text
https://YOUR-USERNAME.github.io/economy-note/
```

`YOUR-USERNAME`은 본인 GitHub 사용자명으로 바꾸세요. 이 데모에는 `./styles.css` 같은 상대 경로를 사용했으므로 저장소 이름이 URL에 붙어도 동작합니다.

### D. 계정 대표 주소를 쓰고 싶다면

저장소를 정확히 `사용자명.github.io`로 만들면 `https://사용자명.github.io/` 형태의 계정 대표 사이트를 만들 수 있습니다. 사용자명에 대문자가 있으면 저장소 이름은 소문자로 만듭니다. 프로젝트별 사이트는 `economy-note`처럼 별도 저장소를 쓰면 됩니다. 처음에는 프로젝트 저장소 방식이 구분하기 쉽습니다.

## 4. 나중에 수정하고 다시 배포하기

1. GitHub의 **Code**에서 수정할 파일을 엽니다.
2. 연필 모양 **Edit this file**을 누릅니다.
3. 내용을 수정하고 **Commit changes**로 `main`에 저장합니다.
4. Pages가 변경 내용을 다시 배포합니다. Actions의 성공 상태를 확인한 후 새로고침합니다.

예를 들어 첫 화면의 문구는 `index.html`의 `<h1>`에서, 경제노트 상세 내용은 `app.js`의 `koreanLessons`에서, 퀴즈는 `koreanQuestions`에서 바꿀 수 있습니다. 개념 카드의 짧은 소개는 `index.html`에 따로 있으므로 상세 내용과 함께 맞춰주세요.

사이트 이름은 `index.html`의 `<title>`, description 메타 태그, 헤더·소개·푸터에도 있습니다. 이름을 바꿀 때 함께 수정하세요. 대표 색상은 `styles.css` 첫 줄의 `--blue` 값입니다.

실제 경제 통계를 추가할 때는 수치 옆에 **기준일, 단위, 출처, 업데이트 주기**를 함께 표시하세요. 실시간 API를 붙일 경우 브라우저에 노출되면 안 되는 비밀 키를 JavaScript에 넣지 않아야 합니다.

## 5. 선택 사항: Git 명령으로 업로드하기

위 웹 업로드 방법만으로 충분합니다. 아래는 로컬 폴더를 Git으로 관리하고 싶은 경우의 **대체 방법**입니다. 웹 업로드와 섞어 사용하면 원격 저장소의 기존 커밋을 먼저 받아야 합니다.

**아직 파일이 없는 새 저장소**를 GitHub에서 만드세요. 이 경로에서는 Add README, .gitignore, License를 추가하지 않습니다. Git을 설치하고 이 데모 폴더에서 다음을 실행합니다.

```sh
git init -b main
git add index.html styles.css app.js i18n.js favicon.svg .nojekyll .gitignore README.md
git commit -m "Create economy learning website"
git remote add origin https://github.com/YOUR-USERNAME/economy-note.git
git push -u origin main
```

원격 주소의 `YOUR-USERNAME`은 자신의 계정명으로 바꾸세요. Git이 이름·이메일을 요구하면 커밋 작성자 정보를 먼저 설정합니다. HTTPS 인증에 GitHub 계정 비밀번호는 사용할 수 없습니다. 설치 환경의 GitHub 로그인 흐름, GitHub CLI 또는 개인 액세스 토큰을 사용합니다. 토큰은 파일에 저장하거나 명령에 붙여 넣지 마세요.

이미 웹에서 파일을 올렸다면 빈 저장소용 명령 대신 기존 저장소를 `git clone`으로 새 폴더에 복제한 뒤 작업하세요. `force push`는 필요하지 않습니다.

업로드 후 **3-C의 Pages 설정은 한 번 해주어야 합니다.** 이후 수정은 다음과 같습니다.

```sh
git add index.html styles.css app.js i18n.js favicon.svg README.md
git commit -m "Update economy notes"
git push
```

## 6. 문제가 생겼을 때

| 증상 | 확인할 내용 |
| --- | --- |
| 404가 보여요 | Actions의 배포 성공 여부, Pages의 브랜치·폴더, 최상위 `index.html`, URL의 저장소 이름을 확인합니다. |
| 글은 보이는데 디자인이 없어요 | `styles.css`가 `index.html` 옆에 있는지, 파일명 대소문자가 맞는지 확인합니다. |
| 버튼이나 그래프가 작동하지 않아요 | `app.js`와 `i18n.js` 업로드 여부와 브라우저의 JavaScript 허용 여부를 확인합니다. |
| 수정했는데 그대로예요 | 배포 완료까지 기다린 후 Mac에서 `Command + Shift + R`로 새로고침합니다. |
| Branch에 main이 없어요 | 파일을 최소 하나 커밋하여 브랜치를 만든 뒤 Pages 설정으로 돌아옵니다. |
| Pages 설정을 변경할 수 없어요 | 저장소 관리자·관리 권한과 계정 플랜, 저장소 공개 여부를 확인합니다. |

## 공식 문서

확인일: 2026-10-31. GitHub 화면의 세부 표현은 업데이트에 따라 달라질 수 있습니다.

- [GitHub Pages란?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [사이트 만들기](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [배포 브랜치·폴더 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [계정 대표 사이트 빠른 시작](https://docs.github.com/en/pages/quickstart)
- [물가 개념 참고: 영란은행](https://www.bankofengland.co.uk/explainers/what-is-inflation)
- [금리 개념 참고: 영란은행](https://www.bankofengland.co.uk/explainers/inflation-and-interest-rates)
