import React from 'react'
function Content(props){
    let [like, uplike] = React.useState([0])
    let [dislike, updislike] = React.useState([0])
    function dislikechange(){
      updislike(Number(dislike+1))
    }
    function likechange(){
      uplike(Number(like)+1)
    }
    return(<>
        <div className="title">{props.title}</div>
        <div className="content">{props.descrition}</div>
        <span className='goodbutton' onClick={likechange}><button>👍</button> {like} </span><span className='goodbutton' onClick={dislikechange}><button>👎</button> {dislike}</span> 
        <hr/>
        </>
    )
}
export default Content