type PersonProps = {
    name:{
        first: string,
        last: string 
    }
}
export const Person = ({name:{first,last}}:PersonProps) => {

    return (
        <div>
            <h2>Hello {first} {last}</h2>
        </div>
    )
}