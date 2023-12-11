let a = document.getElementById('var1');
let b = document.getElementById('var2');
let c = document.getElementById('ans');
let form = document.getElementById('task');
let click = document.querySelector('.btn')

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    if(a.value=='' || b.value=='')
{
    alert('Enter A Valid Number')
}
    if(isNaN(a.value)||isNaN(b.value))
    {
        alert('Enter A Valid Number')
        a.value='';
        b.value='';
        c.innerHTML='';
    }
})
click.addEventListener('click',()=>
{
        c.innerHTML=(a.value*a.value)+(b.value*b.value);
})
