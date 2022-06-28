import "./index.css";
function UserProfilePage() {
  return (
    <div class="profile-content">
      <div class="profile-left bg-item">
        <div class="up-img profile-left-img">
          <img
            src="https://orangebot-nodejs.herokuapp.com/upload/629a1b63679bc5f70df62e4b"
            alt=""
          />
          <label for="upload-img">
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3333 0C11.7013 0 12 0.298667 12 0.666667V1.838L10.6667 3.17133V1.33333H1.33333V6.73333L4 4.06667L6.88533 6.95267L5.942 7.89467L4 5.95333L1.33333 8.61933V10.6667H8.35533L8.82733 10.6673L9.71333 9.78067L10.6 10.6667H10.6667V8.828L12 7.49467V11.3333C12 11.7013 11.7013 12 11.3333 12H0.666667C0.3 12 0 11.7 0 11.3333V0.666667C0 0.298667 0.298667 0 0.666667 0H11.3333ZM12.5187 3.20533L13.4613 4.148L8.276 9.33333L7.332 9.332L7.33333 8.39067L12.5187 3.20533ZM8.33333 2.66667C8.88533 2.66667 9.33333 3.11467 9.33333 3.66667C9.33333 4.21867 8.88533 4.66667 8.33333 4.66667C7.78133 4.66667 7.33333 4.21867 7.33333 3.66667C7.33333 3.11467 7.78133 2.66667 8.33333 2.66667Z"
                fill="white"
              ></path>
            </svg>
          </label>
          <input type="file" id="upload-img" style="display: none" />
        </div>
        <div class="profile-left-text">
          <div class="profile-left-info">
            <p>que anh</p>
            <p>2000-02-02</p>
          </div>
        </div>
        <div class="profile-btn">
          <button>
            <span role="img" aria-label="edit" class="anticon anticon-edit">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="edit"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
              </svg>
            </span>
            <span class="profile-btn-text">編集</span>
          </button>
        </div>
      </div>
      <div class="profile-right bg-item">
        <p class="profile-right-title">詳細</p>
        <div class="profile-right-item">
          <label for="">電子メールアドレス</label>
          <div class="profile-right-input">
            <input
              type="text"
              placeholder="example"
              class="input-text"
              name="email"
              readonly=""
              value="anh@gmail.com"
            />
            <span
              role="img"
              aria-label="edit"
              tabindex="-1"
              class="anticon anticon-edit profile-right-icon"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="edit"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="profile-right-item">
          <label for="">パスワード</label>
          <div class="profile-right-input">
            <input
              type="password"
              placeholder="......"
              class="input-text"
              name="oldPassword"
              readonly=""
              value=""
            />
            <span
              role="img"
              aria-label="edit"
              tabindex="-1"
              class="anticon anticon-edit profile-right-icon"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="edit"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export { UserProfilePage };
