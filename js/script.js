function getDefinition(){
    const searchValue=document.getElementById("site-search").value.trim()
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+searchValue)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data[0]){
        const synonyms=data[0].meanings[0]?.synonyms[0]
        const antonyms=data[0].meanings[1]?.antonyms[0]
        const definition=data[0].meanings[0]?.definitions[0].definition
        const rest1=document.getElementById("synonyms")
        rest1.innerText=""
        if(synonyms)
        rest1.innerText='Synonyms: '+synonyms
        const rest2=document.getElementById("antonyms")
        rest2.innerText=""
        if(antonyms)
        rest2.innerText='Antonyms: '+antonyms
        const rest3=document.getElementById("definition")
        rest2.innerText=""
        if(definition)
        rest3.innerText='Definition: '+definition
        
        }
        else{
            const noDataMessage=data.message
        }
       
    })
    .catch((err)=>console.error(err))
}
