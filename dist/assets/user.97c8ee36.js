import{s as r}from"./request.f1f11a88.js";function s(e){return r({url:"user",method:"get",params:e})}function n(e){return r({url:"user",method:"post",data:e})}function a(e){return r({url:`user/${e}`,method:"get"})}function i(e){return r({url:"user",method:"put",data:e})}function o(e){return r({url:`user/${e}`,method:"delete"})}function d(e){return r({url:"user/updateInfo",method:"put",data:e})}function p(e){return r({url:"user/sendEmail",method:"get",params:{email:e}})}function l(e){return r({url:"user/verifyCode",method:"get",params:{code:e}})}function m(e,t){return r({url:"user/updateEmail",method:"put",params:{email:e,code:t}})}function f(e){return r({url:"user/updatePwd",method:"put",data:e})}function c(){return r({url:"role/all",method:"get"})}export{f as a,d as b,n as c,s as d,i as e,a as f,c as g,o as h,p as s,m as u,l as v};
