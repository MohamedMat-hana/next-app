// export const metadata={
//     title:"Title"
// }

export default function showpage (props){
    
    return(
        <>
        <div>
            <h1>
                showpage
            </h1>
            <div>
                {props.params.title}
            </div>
        </div>
        </>
    )
}