//这里面主要放2内容 第一个是变量 第二个是方法
//导入vuex 
import { createApp } from 'vue'
import { createStore } from 'vuex'

//定义一个比那辆
const store = createStore({
//状态变量
state(){
    return
    {
        //为了我们的状态的值一个持久化，那么此处就应该读取本地存储
        // Token:""
        // NickName:""
        Token:localStorage["token"]

        NickName:localStorage["nickname"]
    }
},
//方法
mutations:
{
    SettingNickName(state:any,NickName)
    {
        state.NickName=NickName      
    },
    SettingToken(state:any,Token)
    {
        state.Token=Token      
    }

}
  
})

//做一个导入
export default store


//使用该Index.ts就需要在main.js中导入