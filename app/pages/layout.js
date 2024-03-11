export const metadata={
    title:"layoutfun"
}

export default function layoutfun ({children}){
    return(
        <div>
            <h1>
                layoutfun
            </h1>
            <h2 style={{background:"#00f",margin:10,
        borderRadius:50}} > 
{children}
            </h2>
        </div>
    )
}