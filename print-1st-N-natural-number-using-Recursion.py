class Sol:
    def f(self,n):
        if n<=0:
            return 
        self.f(n-1)
        print(n,end=' ')
         
n=int(input())
(Sol().f(n))
    
