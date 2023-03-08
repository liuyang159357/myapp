function a(fn){
    let str='123'
    fn(str)
    console.log(str);
}
// a(fn)
function fn(num){
   Object.defineProperty(num,{value:456})
}
fn(123)