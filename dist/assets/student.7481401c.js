import{s as e}from"./request.f1f11a88.js";function n(t){return e({url:"student",method:"get",params:t})}function r(t){return e({url:"student",method:"post",data:t})}function d(){return e({url:"gradeclass/all",method:"get"})}function s(t){return e({url:`student/${t}`,method:"get"})}function i(t){return e({url:"student",method:"put",data:t})}function a(t){return e({url:`student/${t}`,method:"delete"})}export{r as a,n as b,s as c,a as d,i as e,d as g};