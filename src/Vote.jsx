export default function Vote({name , age }){
    return (
        <>
            <p> name : {name}  </p>
            <p>{age >=18 ? 'asho baba vote deo': ' basai jaiya ghumao'}</p>
        </>
    )
}