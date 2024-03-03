import { useEffect, useState } from "react"


function ChangeTitle() {
    //define state using useState() hook
    const [title, setTitle] = useState('Home');

    // mount/update title using useEffect() hook
    useEffect(()=> {
        document.title = title;
    })

    // // work as ComponentDidMount() lifecycle method
    // useEffect(()=> {
    //     document.title = title;
    // }, [])


    // // work as ComponentDidUpdate() lifecycle method
    // useEffect(()=> {
    //     document.title = title;
    // }, [updatedTitle])



    return (
        <>
            <h1>Change Document Title</h1>
        </>
    )
};


export default ChangeTitle;
