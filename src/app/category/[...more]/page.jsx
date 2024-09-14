export default function page({params}) {
    if(params.more.length===4)return(
        <div>{params.more[3]}</div>
    )
    if(params.more.length===3)return(
        <div>{params.more[2]}</div>
    )
    if(params.more.length===2)return(
        <div>{params.more[1]}</div>
    )
  return (
    <div>
       More Category {params.more[0]}
    </div>
  )
}
