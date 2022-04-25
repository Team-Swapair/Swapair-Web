// import http from "../http"

const app = new Vue({
  el: '#posts',
  data: {
      postList: [],
  },
		methods : {
          searchPosts: function () {  //getPhots함수는 메서드정의. 할때는 반드시 function 키워드쓴다
            axios.get('http://localhost:8080/v1/posts')
                .then((res) => { 
                    this.postList = res.data ;
                    console.log(res.data);
                }) //인자로 넣어주는 함수니 콜백함수. 함수가 메서드가 아니므로 this는 method다. 콜백함수는 무조건 화살표쓴다
                .catch(err => console.error(err))    

      }
		}
})