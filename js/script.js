import { loginGoogle } from './firebase.js';
const buttons = document.getElementById('BTN_GOOGLE_LOGIN');

//Google 로그인
buttons.addEventListener('click', (e) => {
  loginGoogle().then((result) => {
    console.log(result);
    const user = result.user;
    loginSuccess(user.email, user.uid, user.displayName);
  });
});

//로그인 성공시 UI 변경
const loginSuccess = (email, uid, username) => {
  const login_area = document.getElementById('login-area');
  login_area.innerHTML = `<h2>Login 성공!</h2><div>uid: ${uid}</div><div>email: ${email}</div><div>username: ${username}</div>`;
};
