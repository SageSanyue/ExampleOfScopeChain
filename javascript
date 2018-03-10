<script>
var name1 = 'haha';
function changeName(){
    var name2 = 'xixi';
    function swapName(){
        console.log(name1);     //(1)haha
        console.log(name2);     //(2)xixi
        var tempName = name2;
        name2 = name1;
        name1 = tempName;
        console.log(name1);     //(3)xixi
        console.log(name2);     //(4)haha
        console.log(tempName);  //(5)xixi
    }
    swapName();
    console.log(name1);        //(6)"xixi"
    console.log(name2);        //(7)"haha"
    console.log(tempName);     //(8)Error
}
changeName();          //执行依次打印(1)haha、(2)xixi、(3)xixi、(4)haha、(5)xixi、（6）"xixi"、(7)"haha"、(8)Error
console.log(name1);    //(9)"xixi"
console.log(name2);    //(10)Error
console.log(tempName); //(11)Error 
</script>
