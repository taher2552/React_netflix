export default function NetflixHeader(){
    return(
        <>

        <div className="d-flex justify-content-between m-3 p-3">
       
        <div>
        <h1 className="text-danger">Netflix</h1>
        </div>

        <div className="input-group w-25">
            <select name="" id="" className="form-select">
                <option value="">Language</option>
                <option value="">English</option>
                <option value="">Hindi</option>
            </select>
            <button className="btn btn-danger ms-2">Sign in</button>
        </div>

        </div>
        
   
        
        </>
    )
}