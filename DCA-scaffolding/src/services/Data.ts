export async function Datab() {
    
try{
    const databu = await fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json());
console.log(databu);


}catch (error){
    console.log(error);
}


}

export async function Dataj() {
    
    try{
        const datajo = await fetch('https://api.chucknorris.io/jokes/random?category={category}').then(res => res.json());
    console.log(datajo);
    
    
    }catch (error){
        console.log(error);
    }
    
    
    }



