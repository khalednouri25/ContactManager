import React, { Component,PureComponent } from 'react'
function test()
{
 



if(this.state.val===1){
return(
    <div>
    {console.log('hoo')}
    {console.log(this.state.val)}

    <h1>loading...</h1>
    </div>
    
    )
}else{
    return(
        <div>
        <h1>{this.state.val}</h1>
        {console.log('hi')}
        {console.log(this.state.val)}

        </div>
    )

}
}
export default test