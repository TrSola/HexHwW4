const { createApp, ref } = Vue;

createApp({
  setup() {
    const user = ref({
      username: "",
      password: "",
    });
    // user內資料記得依API格式、名稱填寫 否則會出錯

    const login = () => {
      axios
        .post("https://ec-course-api.hexschool.io/v2/admin/signin", user.value)
        .then((res) => {
          const { expired, token } = res.data;
          document.cookie = `WillyToken=${token};expires=${new Date(
            expired
          )}; path=/`;
          alert("載入中");
          window.location = "product.html";
        })
        .catch((err) => alert(err.response.data.message));
    };
    return { user, login };
  },
}).mount("#app");
