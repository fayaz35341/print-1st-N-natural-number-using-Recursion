class Sol{
    f(n){
        if (n<=0) {
            return
       }
       this.f(n-1)
       console.log(n+" ")
    }
}
const n=parseInt(prompt('enter a Number'))
new Sol().f(n)
